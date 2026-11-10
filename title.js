/* Title-screen art for Once Upon a Hatch: a pixel fairytale realm that colors itself in.
   Everything is drawn from code at a low resolution and scaled up with hard pixel edges. */
(function (root) {
  'use strict';

  function mulberry(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function hex(h) { return [parseInt(h.substr(1, 2), 16), parseInt(h.substr(3, 2), 16), parseInt(h.substr(5, 2), 16)]; }
  function rgb(a) { return 'rgb(' + (a[0] | 0) + ',' + (a[1] | 0) + ',' + (a[2] | 0) + ')'; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerpC(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }

  var SKY = [[0, '#0d0a2e'], [0.30, '#1e1456'], [0.52, '#4a2590'], [0.70, '#9c3eae'], [0.84, '#e2588f'], [0.93, '#ffa078'], [1, '#ffe0a0']];
  var RAIN = ['#ff3b5c', '#ff8a1f', '#ffd23f', '#5be37d', '#35d8f2', '#5a6ee8', '#b05ce8'];

  function skyAt(t) {
    for (var i = 1; i < SKY.length; i++) if (t <= SKY[i][0]) { var a = SKY[i - 1], b = SKY[i]; return lerpC(hex(a[1]), hex(b[1]), (t - a[0]) / (b[0] - a[0])); }
    return hex(SKY[SKY.length - 1][1]);
  }

  function Pen(ctx) {
    this.c = ctx;
  }
  Pen.prototype.r = function (x, y, w, h, col) { this.c.fillStyle = col; this.c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
  Pen.prototype.p = function (x, y, col) { this.c.fillStyle = col; this.c.fillRect(Math.round(x), Math.round(y), 1, 1); };
  Pen.prototype.circ = function (cx, cy, rad, col) {
    var c = this.c; c.fillStyle = col;
    for (var y = -rad; y <= rad; y++) { var w = Math.floor(Math.sqrt(rad * rad - y * y + 0.5)); c.fillRect(Math.round(cx) - w, Math.round(cy) + y, w * 2 + 1, 1); }
  };
  Pen.prototype.poly = function (pts, col) {
    var c = this.c, minY = 1e9, maxY = -1e9, i; c.fillStyle = col;
    for (i = 0; i < pts.length; i++) { if (pts[i][1] < minY) minY = pts[i][1]; if (pts[i][1] > maxY) maxY = pts[i][1]; }
    for (var y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
      var xs = [], yy = y + 0.5;
      for (i = 0; i < pts.length; i++) {
        var a = pts[i], b = pts[(i + 1) % pts.length];
        if ((a[1] <= yy && b[1] > yy) || (b[1] <= yy && a[1] > yy)) xs.push(a[0] + (yy - a[1]) / (b[1] - a[1]) * (b[0] - a[0]));
      }
      xs.sort(function (m, n) { return m - n; });
      for (i = 0; i + 1 < xs.length; i += 2) c.fillRect(Math.round(xs[i]), y, Math.max(1, Math.round(xs[i + 1]) - Math.round(xs[i])), 1);
    }
  };

  /* the still picture: sky, rainbow, castle, road, hills, flowers */
  function buildStatic(W, H) {
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var ctx = cv.getContext('2d'), pen = new Pen(ctx), x, y, i;
    var hz = Math.round(H * 0.66), cx = Math.round(W / 2), rnd = mulberry(77);

    /* banded, dithered sky */
    var bands = 18, bandH = (hz + 14) / bands;
    for (y = 0; y < H; y++) {
      var t = Math.min(1, y / (hz + 14)), b = Math.min(bands - 1, Math.floor(t * bands)), f = (y - b * bandH);
      var cur = skyAt((b + 0.5) / bands), prev = skyAt(Math.max(0, (b - 0.5) / bands));
      for (x = 0; x < W; x++) {
        var use = (f < 2 && (x + y) % 2 === 0) ? prev : cur;
        ctx.fillStyle = rgb(use); ctx.fillRect(x, y, 1, 1);
      }
    }
    /* stars */
    for (i = 0; i < Math.round(W * 0.7); i++) {
      var sx = Math.floor(rnd() * W), sy = Math.floor(rnd() * hz * 0.62);
      pen.p(sx, sy, rnd() < 0.2 ? '#bfe8ff' : '#ffffff');
      if (rnd() < 0.12) { pen.p(sx - 1, sy, '#8a78d8'); pen.p(sx + 1, sy, '#8a78d8'); pen.p(sx, sy - 1, '#8a78d8'); pen.p(sx, sy + 1, '#8a78d8'); }
    }
    /* crescent moon */
    var mx = Math.round(W * 0.2), my = 24;
    pen.circ(mx, my, 11, '#fff4c8'); pen.circ(mx + 5, my - 3, 10, rgb(skyAt(my / (hz + 14))));
    pen.circ(mx - 8, my + 4, 1, '#e8d890');

    /* rainbow behind the castle */
    var rc = hz + 8, R0 = Math.min(58, W * 0.34), bw = 3;
    ctx.globalAlpha = 0.92;
    for (y = 0; y < hz + 6; y++) for (x = 0; x < W; x++) {
      var d = Math.sqrt((x - cx) * (x - cx) + (y - rc) * (y - rc));
      if (d >= R0 && d < R0 + bw * 7) { ctx.fillStyle = RAIN[Math.floor((d - R0) / bw)]; ctx.fillRect(x, y, 1, 1); }
    }
    ctx.globalAlpha = 1;

    /* far hills */
    for (x = 0; x < W; x++) {
      var fy = Math.round(hz - 4 + Math.sin(x * 0.06) * 4 + Math.sin(x * 0.17 + 1) * 2 - Math.max(0, 14 - Math.abs(x - cx) * 0.3));
      pen.r(x, fy, 1, H - fy, '#2c2a80');
      pen.p(x, fy, '#4a46b0');
    }

    /* castle */
    var base = hz - 2;
    var WALL = '#d8c8f0', SHADE = '#b4a0dc', DARK = '#7a68b0';
    function tower(tx, tw, top, roofC, roofL, roofH) {
      pen.r(tx, top, tw, base - top, WALL); pen.r(tx + tw - 3, top, 3, base - top, SHADE);
      for (var j = top + 4; j < base; j += 5) pen.r(tx, j, tw, 1, SHADE);
      pen.r(tx - 1, top - 2, tw + 2, 3, DARK);
      for (var k = 0; k < tw + 2; k += 3) pen.r(tx - 1 + k, top - 4, 2, 2, DARK);
      pen.poly([[tx - 2, top - 2], [tx + tw + 2, top - 2], [tx + tw / 2, top - 2 - roofH]], roofC);
      pen.poly([[tx - 2, top - 2], [tx + tw / 2, top - 2], [tx + tw / 2, top - 2 - roofH]], roofL);
    }
    pen.r(cx - 13, base - 30, 26, 30, WALL); pen.r(cx + 9, base - 30, 4, 30, SHADE);
    for (i = base - 26; i < base; i += 5) pen.r(cx - 13, i, 26, 1, SHADE);
    for (i = 0; i < 9; i++) pen.r(cx - 13 + i * 3, base - 33, 2, 3, DARK);
    tower(cx - 25, 11, base - 44, '#ff3fa4', '#ff86c8', 15);
    tower(cx + 14, 11, base - 44, '#35d8f2', '#8ae8ff', 15);
    tower(cx - 5, 10, base - 56, '#ffd23f', '#fff0a0', 16);
    /* gate */
    pen.r(cx - 4, base - 11, 8, 11, '#2a1a4a'); pen.circ(cx, base - 11, 4, '#2a1a4a'); pen.r(cx - 3, base - 6, 6, 6, '#ffcc66');
    pen.r(cx - 1, base - 11, 1, 11, '#7a4a1a');
    /* window slots (they light up in the live layer) */
    var WINS = [[cx - 21, base - 38, 2, 4], [cx + 18, base - 38, 2, 4], [cx - 1, base - 50, 2, 5], [cx - 9, base - 22, 2, 4], [cx + 7, base - 22, 2, 4]];
    WINS.forEach(function (w) { pen.r(w[0], w[1], w[2], w[3], '#3a2a6a'); });

    /* mid hills either side of the road */
    for (x = 0; x < W; x++) {
      var my2 = Math.round(hz + 6 + Math.sin(x * 0.045 + 2) * 5 + Math.sin(x * 0.13) * 2);
      pen.r(x, my2, 1, H - my2, '#1d6a5a'); pen.p(x, my2, '#3aa878');
    }
    for (x = 0; x < W; x++) {
      var ny = Math.round(H * 0.84 + Math.sin(x * 0.05 + 4) * 4);
      pen.r(x, ny, 1, H - ny, '#154a3e'); pen.p(x, ny, '#2a8a5a');
    }

    /* yellow brick road */
    for (y = base; y < H; y++) {
      var dy = y - base, rc2 = cx + Math.sin(dy / 17) * dy * 0.12, hw = 2 + dy * 0.5, row = Math.floor(dy / 3);
      for (x = Math.floor(rc2 - hw); x <= Math.ceil(rc2 + hw); x++) {
        var edge = (x <= rc2 - hw + 1 || x >= rc2 + hw - 1);
        var col = edge ? '#8a5a10' : '#ffc933';
        if (!edge) { if (dy % 3 === 0) col = '#d89a14'; else if (((x + (row % 2) * 3) % 6 + 6) % 6 === 0) col = '#d89a14'; else if (((x + row) % 7 + 7) % 7 === 3) col = '#ffe27a'; }
        pen.p(x, y, col);
      }
    }

    /* grass tufts and poppies */
    for (i = 0; i < W * 1.2; i++) {
      var gx = Math.floor(rnd() * W), gy = Math.floor(lerp(hz + 12, H - 1, Math.pow(rnd(), 0.7)));
      var rr = cx + Math.sin((gy - base) / 17) * (gy - base) * 0.12, hw2 = 2 + (gy - base) * 0.5;
      if (Math.abs(gx - rr) < hw2 + 3) continue;
      var kind = rnd();
      pen.p(gx, gy, '#5be37d'); pen.p(gx, gy - 1, '#5be37d');
      if (kind < 0.35) { pen.p(gx, gy - 2, ['#ff3b5c', '#ff3fa4', '#ffd23f', '#35d8f2', '#ffffff'][Math.floor(rnd() * 5)]); }
    }

    /* giant mushroom (Wonderland) */
    var mxx = Math.round(W * 0.10), mb = H - 6;
    pen.r(mxx - 3, mb - 16, 7, 16, '#f4efe0'); pen.r(mxx + 2, mb - 16, 2, 16, '#d8cfb8');
    pen.poly([[mxx - 17, mb - 14], [mxx - 14, mb - 24], [mxx - 6, mb - 31], [mxx + 4, mb - 31], [mxx + 12, mb - 24], [mxx + 15, mb - 14]], '#e02a4a');
    pen.poly([[mxx + 4, mb - 31], [mxx + 12, mb - 24], [mxx + 15, mb - 14], [mxx + 4, mb - 14]], '#b01a3a');
    pen.r(mxx - 17, mb - 15, 33, 2, '#7a0a2a');
    pen.circ(mxx - 9, mb - 22, 2, '#ffffff'); pen.circ(mxx + 1, mb - 27, 2, '#ffffff'); pen.circ(mxx - 3, mb - 19, 1, '#ffffff'); pen.circ(mxx + 8, mb - 20, 2, '#ffffff');

    /* enchanted rose under glass (Beauty and the Beast) */
    var rx = Math.round(W * 0.76), rb = H - 7;
    pen.circ(rx, rb - 7, 10, 'rgba(138,232,255,0.30)'); pen.r(rx - 12, rb - 1, 25, 6, '#154a3e');
    pen.r(rx - 9, rb - 2, 19, 4, '#7a5a3a'); pen.r(rx - 9, rb - 2, 19, 1, '#a8804a');
    for (i = 0; i < 24; i++) { var an = Math.PI + i * Math.PI / 23; pen.p(rx + Math.cos(an) * 10, rb - 2 + Math.sin(an) * 14, '#8ae8ff'); }
    pen.p(rx - 7, rb - 11, '#ffffff'); pen.p(rx - 7, rb - 10, '#ffffff'); pen.p(rx - 6, rb - 12, '#ffffff');
    pen.r(rx, rb - 11, 1, 9, '#3fd878'); pen.poly([[rx + 1, rb - 6], [rx + 5, rb - 8], [rx + 3, rb - 4]], '#3fd878');
    pen.circ(rx, rb - 13, 3, '#e02a4a'); pen.p(rx - 1, rb - 14, '#ff6a8a'); pen.p(rx + 1, rb - 13, '#a8102a');
    pen.p(rx + 6, rb - 3, '#e02a4a'); pen.p(rx + 7, rb - 1, '#e02a4a');

    /* beanstalk (Jack) climbing the right edge */
    var bx0 = Math.round(W * 0.95);
    for (y = H; y > hz - 62; y--) {
      var bxx = bx0 + Math.sin(y * 0.11) * 3;
      pen.r(bxx - 1, y, 3, 1, '#3fd878'); pen.p(bxx + 1, y, '#2a9a58');
      if (y % 15 === 0) { var side = (y / 15) % 2 ? 1 : -1; pen.poly([[bxx, y], [bxx + side * 8, y - 4], [bxx + side * 5, y + 2]], '#2fb868'); }
    }
    pen.poly([[bx0 - 6, hz - 66], [bx0 + 8, hz - 70], [bx0 + 2, hz - 60]], '#58e898');

    return cv;
  }

  function grayOf(S) {
    var W = S.width, H = S.height, g = document.createElement('canvas'); g.width = W; g.height = H;
    var gc = g.getContext('2d'), id = S.getContext('2d').getImageData(0, 0, W, H), d = id.data;
    for (var i = 0; i < d.length; i += 4) {
      var l = d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11;
      d[i] = l * 0.78 + 14; d[i + 1] = l * 0.78 + 14; d[i + 2] = l * 0.86 + 26;
    }
    gc.putImageData(id, 0, 0); return g;
  }

  function start(canvas, opts) {
    opts = opts || {};
    var reduced = !!opts.reduced, state = { raf: 0, S: null, G: null, W: 0, H: 0, t0: 0, scale: 4, flies: [], stars: [], clouds: [], wins: [], running: false };
    var ctx = canvas.getContext('2d');

    function size() {
      var vw = canvas.parentNode.clientWidth || window.innerWidth, vh = canvas.parentNode.clientHeight || window.innerHeight;
      var scale = Math.max(2, Math.round(vh / 250)); var H = Math.ceil(vh / scale), W = Math.ceil(vw / scale);
      if (W < 70) W = 70;
      state.scale = scale; state.W = W; state.H = H;
      canvas.width = W; canvas.height = H; canvas.style.width = (W * scale) + 'px'; canvas.style.height = (H * scale) + 'px';
      ctx = canvas.getContext('2d'); ctx.imageSmoothingEnabled = false;
      state.S = buildStatic(W, H); state.G = grayOf(state.S);
      var r = mulberry(9), i, hz = Math.round(H * 0.66);
      state.flies = []; for (i = 0; i < 18; i++) state.flies.push({ x: r() * W, y: hz * 0.5 + r() * (H - hz * 0.5), ph: r() * 6.28, sp: 0.4 + r() * 0.8, col: ['#fff27a', '#8ae8ff', '#ff9ad0'][i % 3] });
      state.stars = []; for (i = 0; i < 26; i++) state.stars.push({ x: Math.floor(r() * W), y: Math.floor(r() * hz * 0.6), ph: r() * 6.28 });
      state.clouds = []; for (i = 0; i < 4; i++) state.clouds.push({ x: r() * W, y: 14 + i * 17 + r() * 8, w: 14 + r() * 12, sp: 1.2 + r() * 1.6 });
      state.cx = Math.round(W / 2); state.hz = hz; state.base = hz - 2;
    }

    function cloud(pen, x, y, w) {
      pen.r(x, y, w, 3, '#ffd6ee'); pen.r(x + 3, y - 2, w - 7, 3, '#ffe6f4'); pen.r(x + w * 0.3, y - 4, w * 0.35, 3, '#fff2fa'); pen.r(x + 2, y + 3, w - 4, 1, '#d8a0d0');
    }
    function balloon(pen, x, y) {
      var cols = ['#ff3fa4', '#ffd23f', '#35d8f2', '#ffd23f', '#ff3fa4'], i;
      pen.circ(x, y, 9, '#ff3fa4');
      for (var yy = -9; yy <= 5; yy++) { var w = Math.floor(Math.sqrt(81 - yy * yy + 0.5)); for (i = 0; i < 5; i++) { var x0 = x - w + Math.floor(i * (w * 2 + 1) / 5), x1 = x - w + Math.floor((i + 1) * (w * 2 + 1) / 5); pen.r(x0, y + yy, x1 - x0, 1, cols[i]); } }
      pen.poly([[x - 7, y + 5], [x + 7, y + 5], [x + 3, y + 12], [x - 3, y + 12]], '#ff3fa4');
      pen.r(x - 3, y + 15, 7, 4, '#8a5a2a'); pen.r(x - 3, y + 15, 7, 1, '#c8903a');
      pen.p(x - 3, y + 12, '#4a2a1a'); pen.p(x + 3, y + 12, '#4a2a1a'); pen.p(x - 3, y + 13, '#4a2a1a'); pen.p(x + 3, y + 13, '#4a2a1a'); pen.p(x - 3, y + 14, '#4a2a1a'); pen.p(x + 3, y + 14, '#4a2a1a');
      pen.p(x - 3, y - 5, '#ffffff'); pen.p(x - 4, y - 4, '#ffffff');
    }
    function ship(pen, x, y, t) {
      pen.poly([[x - 9, y], [x + 9, y], [x + 6, y + 5], [x - 6, y + 5]], '#7a4a22'); pen.r(x - 9, y, 18, 1, '#ffc929');
      pen.r(x, y - 12, 1, 12, '#5a3a1a');
      pen.poly([[x + 1, y - 11], [x + 8, y - 4], [x + 1, y - 2]], '#f4efe0'); pen.poly([[x - 1, y - 9], [x - 7, y - 3], [x - 1, y - 2]], '#d8d0e8');
      pen.r(x, y - 14, 4, 2, '#ff3b5c');
      pen.p(x - 4, y + 2, '#ffe27a'); pen.p(x + 1, y + 2, '#ffe27a'); pen.p(x + 5, y + 2, '#ffe27a');
      for (var i = 0; i < 5; i++) pen.p(x - 12 - i * 3 - (i % 2), y + 4 + Math.sin(t * 3 + i) * 1.5, i % 2 ? '#fff27a' : '#ffffff');
    }

    var HEART = ['.X.X.', 'XXXXX', '.XXX.', '..X..'], BAT = ['X...X', 'XX.XX', '.XXX.'], BATD = ['X...X', '.X.X.', '..X..'];
    function sprite(pen, rows, x, y, col) { for (var r = 0; r < rows.length; r++) for (var q = 0; q < rows[r].length; q++) if (rows[r].charAt(q) === 'X') pen.p(x + q, y + r, col); }
    function seasonFx(pen, t, W, H, a) {
      var k = opts.season, i, n, x, y, ph, sr;
      if (!k) return;
      if (k === 'xmas' || k === 'newyear' || k === 'thanks' || k === 'easter') {
        var cols = k === 'xmas' ? ['#ffffff', '#e8f4ff', '#ffffff'] : k === 'thanks' ? ['#ff8a1f', '#d8202c', '#f0b020', '#a8501a'] : k === 'easter' ? ['#ff9ad0', '#9ad8ff', '#fff27a', '#b8ffb0'] : ['#ff3fa4', '#ffd23f', '#35d8f2', '#ffffff', '#8aff7a'];
        n = k === 'xmas' ? 60 : 34;
        for (i = 0; i < n; i++) {
          sr = mulberry(100 + i); var bx = sr() * W, sp = (k === 'xmas' ? 6 + sr() * 9 : 8 + sr() * 10), off = sr() * 200, sw = 2 + sr() * 5, fr = 0.5 + sr();
          y = (t * sp + off) % (H + 8) - 4; x = bx + Math.sin(t * fr + i) * sw;
          ctx.globalAlpha = a * 0.9;
          if (k === 'xmas') { pen.p(x, y, cols[i % 3]); if (i % 5 === 0) { pen.p(x + 1, y, cols[0]); pen.p(x, y + 1, cols[0]); } }
          else if (k === 'thanks') { pen.r(x, y, 2, 1, cols[i % 4]); pen.p(x + (Math.sin(t * 3 + i) > 0 ? 2 : -1), y + 1, cols[(i + 1) % 4]); }
          else pen.r(x, y, 2, 2, cols[i % cols.length]);
        }
      } else if (k === 'valentine') {
        for (i = 0; i < 14; i++) {
          sr = mulberry(300 + i); var hx = sr() * W, hs = 6 + sr() * 7, ho = sr() * 150;
          y = H - ((t * hs + ho) % (H + 12)) + 4; x = hx + Math.sin(t * 0.8 + i) * 5;
          ctx.globalAlpha = a * (0.55 + 0.4 * sr()); sprite(pen, HEART, Math.round(x), Math.round(y), ['#ff3f7a', '#ff8ac0', '#ffd0e4'][i % 3]);
        }
      } else if (k === 'july4') {
        var fc = ['#ff3b5c', '#ffffff', '#5aa8ff', '#ffd23f'];
        for (i = 0; i < 3; i++) {
          sr = mulberry(500 + i); var per = 3.4 + i * 0.5, tt = (t + i * 1.3) % per, p2 = tt / per, bx2 = W * (0.2 + 0.3 * i) + sr() * 10, by2 = H * (0.14 + sr() * 0.14);
          if (p2 < 0.22) { var yy = H * 0.6 - (H * 0.6 - by2) * (p2 / 0.22); ctx.globalAlpha = a; pen.p(bx2, yy, '#ffd23f'); pen.p(bx2, yy + 2, '#ff8a2a'); }
          else {
            var q = (p2 - 0.22) / 0.78, rad = 4 + q * 16; ctx.globalAlpha = a * Math.max(0, 1 - q * 1.1);
            for (var rr = 0; rr < 16; rr++) { var ang = rr * Math.PI / 8; pen.p(bx2 + Math.cos(ang) * rad, by2 + Math.sin(ang) * rad + q * q * 6, fc[(i + rr) % 4]); if (rr % 2) pen.p(bx2 + Math.cos(ang) * rad * 0.6, by2 + Math.sin(ang) * rad * 0.6 + q * q * 4, '#ffffff'); }
          }
        }
      } else if (k === 'halloween') {
        for (i = 0; i < 6; i++) {
          sr = mulberry(700 + i); var bs = 10 + sr() * 12, bo = sr() * 300, by3 = 10 + sr() * H * 0.4;
          x = ((t * bs + bo) % (W + 30)) - 15; y = by3 + Math.sin(t * 2 + i * 2) * 4; ctx.globalAlpha = a;
          sprite(pen, Math.sin(t * 9 + i) > 0 ? BAT : BATD, Math.round(x), Math.round(y), '#1a0a2e');
        }
        ctx.globalAlpha = a * 0.5; pen.circ(Math.round(W * 0.14), Math.round(H * 0.16), 6, '#ffb040'); ctx.globalAlpha = a * 0.9; pen.circ(Math.round(W * 0.14), Math.round(H * 0.16), 4, '#ffd070');
      }
      ctx.globalAlpha = 1;
    }

    function frame(now) {
      if (!state.running) return;
      var W = state.W, H = state.H, t = (now - state.t0) / 1000, pen = new Pen(ctx), i;
      var rev = reduced ? 1 : Math.min(1, t / 2.8), e = rev < 1 ? 1 - Math.pow(1 - rev, 2.2) : 1;
      ctx.globalAlpha = 1; ctx.drawImage(state.G, 0, 0);
      if (e >= 1) ctx.drawImage(state.S, 0, 0);
      else {
        var wx = -10 + (W + 20) * e;
        ctx.save(); ctx.beginPath(); ctx.moveTo(0, 0);
        for (var y = 0; y <= H; y += 2) ctx.lineTo(Math.round(wx + Math.sin(y * 0.09 + t * 4) * 6 + (y / H) * 12 - 6), y);
        ctx.lineTo(0, H); ctx.closePath(); ctx.clip(); ctx.drawImage(state.S, 0, 0); ctx.restore();
        for (i = 0; i < 14; i++) { var sy = (i * 37 + t * 60) % H; pen.p(wx + Math.sin(sy * 0.09 + t * 4) * 6 + (sy / H) * 12 - 6 + (i % 3) - 1, sy, ['#ffffff', '#fff27a', '#8ae8ff', '#ff9ad0'][i % 4]); }
      }
      var a = reduced ? 1 : Math.max(0, Math.min(1, (e - 0.55) * 2.2));
      if (a <= 0) { state.raf = requestAnimationFrame(frame); return; }
      ctx.globalAlpha = a;
      var cx = state.cx, base = state.base;
      for (i = 0; i < state.stars.length; i++) { var s = state.stars[i], tw = Math.sin(t * 2 + s.ph); if (tw > 0.2) { pen.p(s.x, s.y, '#ffffff'); if (tw > 0.85) { pen.p(s.x - 1, s.y, '#bfe8ff'); pen.p(s.x + 1, s.y, '#bfe8ff'); pen.p(s.x, s.y - 1, '#bfe8ff'); pen.p(s.x, s.y + 1, '#bfe8ff'); } } }
      for (i = 0; i < state.clouds.length; i++) { var c = state.clouds[i]; var cxp = ((c.x + t * c.sp) % (W + 40)) - 30; cloud(pen, cxp, c.y, c.w); }
      var wins = [[cx - 21, base - 38, 2, 4], [cx + 18, base - 38, 2, 4], [cx - 1, base - 50, 2, 5], [cx - 9, base - 22, 2, 4], [cx + 7, base - 22, 2, 4]];
      for (i = 0; i < wins.length; i++) { var fl = Math.sin(t * 3 + i * 1.7) + Math.sin(t * 7.3 + i); pen.r(wins[i][0], wins[i][1], wins[i][2], wins[i][3], fl > 0.9 ? '#fff0a0' : '#ffcc55'); }
      var fw = Math.sin(t * 5); pen.r(cx, base - 76, 1, 8, '#5a3a1a'); pen.poly([[cx + 1, base - 76], [cx + 8 + fw, base - 74], [cx + 1, base - 71]], '#ff3fa4');
      balloon(pen, Math.round(W * 0.80), Math.round(66 + Math.sin(t * 0.9) * 3));
      ship(pen, Math.round(W * 0.30), Math.round(52 + Math.sin(t * 0.7 + 1) * 2.5), t);
      for (i = 0; i < state.flies.length; i++) {
        var f = state.flies[i], fx = f.x + Math.sin(t * f.sp + f.ph) * 8, fy = f.y + Math.cos(t * f.sp * 0.8 + f.ph) * 5, br = 0.5 + 0.5 * Math.sin(t * 3 + f.ph);
        if (br > 0.25) { ctx.globalAlpha = a * (0.35 + 0.65 * br); pen.p(fx, fy, f.col); if (br > 0.7) { ctx.globalAlpha = a * 0.35; pen.p(fx + 1, fy, f.col); pen.p(fx - 1, fy, f.col); pen.p(fx, fy + 1, f.col); pen.p(fx, fy - 1, f.col); } }
      }
      ctx.globalAlpha = a;
      var ss = (t % 7) / 1.1; if (ss < 1 && !reduced) { for (i = 0; i < 7; i++) { var sx = W * 0.92 - ss * W * 0.6 + i * 2, sy2 = 8 + ss * 40 - i * 1.3; ctx.globalAlpha = a * (1 - i / 7) * (1 - ss * 0.5); pen.p(sx, sy2, '#ffffff'); } }
      seasonFx(pen, t, W, H, a);
      ctx.globalAlpha = 1;
      if (!reduced) state.raf = requestAnimationFrame(frame);
    }

    function go() {
      cancelAnimationFrame(state.raf); size(); state.t0 = performance.now(); state.running = true;
      if (reduced) { frame(state.t0); } else state.raf = requestAnimationFrame(frame);
    }
    function stop() { state.running = false; cancelAnimationFrame(state.raf); }
    var rt = 0;
    function onResize() { clearTimeout(rt); rt = setTimeout(function () { if (state.running) { var t0 = state.t0; size(); state.t0 = t0; if (reduced) frame(performance.now()); } }, 120); }
    window.addEventListener('resize', onResize);
    go();
    return { stop: stop, restart: go };
  }

  root.TitleArt = { start: start };
})(typeof window !== 'undefined' ? window : globalThis);
