/* tales.js: procedural fairytale tale generator for Once Upon a Hatch.
   Every tale is built from a seed: a hand-designed subject (castle, dragon, teapot...),
   a color theme, and a scene (night, dusk, snow...). Same seed, same picture, every time. */
(function (root) {
  'use strict';

  /* ---------- small utilities ---------- */
  function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function hexRGB(h) { h = h.replace('#', ''); return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)]; }
  function rgbHex(c) { return '#' + c.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? '0' : '') + v.toString(16); }).join(''); }
  function mix(a, b, t) { var x = hexRGB(a), y = hexRGB(b); return rgbHex([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]); }
  function lighten(h, t) { return mix(h, '#ffffff', t); }
  function darken(h, t) { return mix(h, '#000000', t); }
  function cdist(a, b) { var x = hexRGB(a), y = hexRGB(b), dr = x[0] - y[0], dg = x[1] - y[1], db = x[2] - y[2]; return Math.sqrt(0.3 * dr * dr + 0.59 * dg * dg + 0.11 * db * db); }
  function shuffle(arr, rng) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)), t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  function pick(arr, rng) { return arr[Math.floor(rng() * arr.length)]; }
  function inPoly(p, x, y) { var c = false; for (var i = 0, j = p.length - 1; i < p.length; j = i++) { if (((p[i][1] > y) !== (p[j][1] > y)) && (x < (p[j][0] - p[i][0]) * (y - p[i][1]) / (p[j][1] - p[i][1]) + p[i][0])) c = !c; } return c; }

  /* ---------- pixel canvas with shaded shapes ---------- */
  function Cv(N) {
    this.N = N; this.px = new Int16Array(N * N).fill(-1); this.subj = new Uint8Array(N * N);
    this.pal = []; this.map = {}; this.mir = false; this.sj = 0; this.bg = null; this.r = N / 40;
  }
  Cv.prototype.c = function (hex) { var i = this.map[hex]; if (i === undefined) { i = this.pal.length; this.pal.push(hex); this.map[hex] = i; } return i; };
  Cv.prototype.tone = function (hex) { return { b: this.c(hex), l: this.c(lighten(hex, 0.42)), d: this.c(darken(hex, 0.4)), h: this.c(lighten(hex, 0.18)), s: this.c(darken(hex, 0.18)) }; };
  Cv.prototype._p = function (test, bb, t, o) {
    var N = this.N, r = this.r * ((o && o.rim) || 1);
    var x0 = Math.max(0, Math.floor(bb[0])), x1 = Math.min(N - 1, Math.ceil(bb[2])), y0 = Math.max(0, Math.floor(bb[1])), y1 = Math.min(N - 1, Math.ceil(bb[3]));
    var isNum = typeof t === 'number', isBg = t === 'bg', flat = isNum || (o && o.flat), pat = o && o.pat;
    for (var y = y0; y <= y1; y++) for (var x = x0; x <= x1; x++) {
      var cx = x + 0.5, cy = y + 0.5; if (!test(cx, cy)) continue;
      var i = y * N + x, col;
      if (isBg) { this.px[i] = this.bg[i]; this.subj[i] = 0; continue; }
      if (isNum) col = t;
      else {
        col = t.b;
        if (!flat) { var lit = !test(cx - r, cy - r), sh = !test(cx + r, cy + r); if (lit && !sh) col = t.l; else if (sh && !lit) col = t.d; else if (t.h !== undefined) { var l2 = !test(cx - 2.3 * r, cy - 2.3 * r), s2 = !test(cx + 2.3 * r, cy + 2.3 * r); if (l2 && !s2) col = t.h; else if (s2 && !l2) col = t.s; } }
        if (pat && pat(cx, cy)) col = t.d;
      }
      this.px[i] = col; this.subj[i] = this.sj;
    }
  };
  Cv.prototype.paint = function (test, bb, t, o) {
    this._p(test, bb, t, o);
    if (this.mir) { var N = this.N; this._p(function (x, y) { return test(N - x, y); }, [N - bb[2], bb[1], N - bb[0], bb[3]], t, o); }
  };
  Cv.prototype.R = function (x0, y0, x1, y1, t, o) {
    var N = this.N, a = x0 * N, b = y0 * N, c = x1 * N, d = y1 * N, m;
    if (c - a < 1) { m = (a + c) / 2; a = m - 0.5; c = m + 0.5; } if (d - b < 1) { m = (b + d) / 2; b = m - 0.5; d = m + 0.5; }
    this.paint(function (x, y) { return x >= a && x <= c && y >= b && y <= d; }, [a, b, c, d], t, o);
  };
  Cv.prototype.E = function (cx, cy, rx, ry, t, o, half) {
    var N = this.N; cx *= N; cy *= N; rx = Math.max(rx * N, 0.7); ry = Math.max(ry * N, 0.7);
    this.paint(function (x, y) { if (half && y > cy) return false; var u = (x - cx) / rx, v = (y - cy) / ry; return u * u + v * v <= 1; }, [cx - rx, cy - ry, cx + rx, cy + ry], t, o);
  };
  Cv.prototype.DM = function (cx, cy, rx, ry, t, o) { this.E(cx, cy, rx, ry, t, o, true); };
  Cv.prototype.RE = function (cx, cy, rx, ry, ang, t, o) {
    var N = this.N, ca = Math.cos(ang), sa = Math.sin(ang); cx *= N; cy *= N; rx = Math.max(rx * N, 0.7); ry = Math.max(ry * N, 0.7);
    var m = Math.max(rx, ry);
    this.paint(function (x, y) { var dx = x - cx, dy = y - cy, u = (dx * ca + dy * sa) / rx, v = (-dx * sa + dy * ca) / ry; return u * u + v * v <= 1; }, [cx - m, cy - m, cx + m, cy + m], t, o);
  };
  Cv.prototype.P = function (pts, t, o) {
    var N = this.N, p = pts.map(function (q) { return [q[0] * N, q[1] * N]; }), x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
    p.forEach(function (q) { x0 = Math.min(x0, q[0]); y0 = Math.min(y0, q[1]); x1 = Math.max(x1, q[0]); y1 = Math.max(y1, q[1]); });
    this.paint(function (x, y) { return inPoly(p, x, y); }, [x0, y0, x1, y1], t, o);
  };
  Cv.prototype.L = function (xa, ya, xb, yb, w, t, o) {
    var N = this.N, ax = xa * N, ay = ya * N, bx = xb * N, by = yb * N, hw = Math.max(w * N, 1) / 2, dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy || 1;
    this.paint(function (x, y) { var u = ((x - ax) * dx + (y - ay) * dy) / l2; u = Math.max(0, Math.min(1, u)); var px = ax + u * dx - x, py = ay + u * dy - y; return px * px + py * py <= hw * hw; },
      [Math.min(ax, bx) - hw, Math.min(ay, by) - hw, Math.max(ax, bx) + hw, Math.max(ay, by) + hw], t, o);
  };
  Cv.prototype.RG = function (cx, cy, r0, r1, t, o) {
    var N = this.N; cx *= N; cy *= N; r0 *= N; r1 = Math.max(r1 * N, r0 + 1);
    this.paint(function (x, y) { var d = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy)); return d >= r0 && d <= r1; }, [cx - r1, cy - r1, cx + r1, cy + r1], t, o);
  };
  Cv.prototype.ST = function (cx, cy, R, r, t, o, rot) {
    var pts = []; rot = rot || 0;
    for (var i = 0; i < 10; i++) { var a = -Math.PI / 2 + rot + i * Math.PI / 5, rad = i % 2 ? r : R; pts.push([cx + Math.cos(a) * rad, cy + Math.sin(a) * rad]); }
    this.P(pts, t, o);
  };
  Cv.prototype.outline = function (col) {
    var N = this.N, s = this.subj, add = [], x, y, i;
    for (y = 0; y < N; y++) for (x = 0; x < N; x++) { i = y * N + x; if (s[i]) continue; if ((x > 0 && s[i - 1]) || (x < N - 1 && s[i + 1]) || (y > 0 && s[i - N]) || (y < N - 1 && s[i + N])) add.push(i); }
    for (var k = 0; k < add.length; k++) this.px[add[k]] = col;
  };
  Cv.prototype.dot = function (ux, uy, col, size) {
    var N = this.N, s = size || (N >= 64 ? 2 : 1), x = Math.floor(ux * N), y = Math.floor(uy * N);
    for (var j = 0; j < s; j++) for (var i = 0; i < s; i++) { var xx = x + i, yy = y + j; if (xx >= 0 && yy >= 0 && xx < N && yy < N) this.px[yy * N + xx] = col; }
  };
  function spark(c, x, y, s, col) { c.L(x - s, y, x + s, y, 0.01, col, { flat: true }); c.L(x, y - s, x, y + s, 0.01, col, { flat: true }); }
  function brick(N) { var h = 4, w = 8; return function (x, y) { var row = Math.floor(y / h); if (y % h < 1) return true; return ((x + (row % 2) * w / 2) % w) < 1; }; }

  /* friendly face: head with eyes, cheeks and a smile (all coordinates are 0..1 of the canvas) */
  function face(c, cx, cy, r, skin, o) {
    o = o || {};
    c.E(cx, cy, r, r * (o.tall || 1.05), skin);
    var ex = r * 0.42, ey = cy - r * 0.02, k = c.c(o.eye || '#1b1a22');
    c.E(cx - ex, ey, r * 0.13, r * 0.17, k, { flat: 1 }); c.E(cx + ex, ey, r * 0.13, r * 0.17, k, { flat: 1 });
    if (!o.noCheek) { var ch = c.c(o.cheek || '#ff9aa8'); c.E(cx - ex * 1.35, cy + r * 0.28, r * 0.14, r * 0.09, ch, { flat: 1 }); c.E(cx + ex * 1.35, cy + r * 0.28, r * 0.14, r * 0.09, ch, { flat: 1 }); }
    if (!o.noMouth) c.L(cx - r * 0.22, cy + r * 0.42, cx + r * 0.22, cy + r * 0.42, 0.011, c.c('#8a2a3a'), { flat: 1 });
  }

  /* ---------- themes and scenes ---------- */
  var THEMES = [
    { a: '#d7263d', b: '#7b2d8e', adj: 'Crimson' }, { a: '#1fa35c', b: '#0e6b6b', adj: 'Emerald' },
    { a: '#2f6fe0', b: '#6a4bd1', adj: 'Sapphire' }, { a: '#8e44ad', b: '#e84393', adj: 'Amethyst' },
    { a: '#f0b429', b: '#d9480f', adj: 'Golden' }, { a: '#ff5c9a', b: '#8e44ad', adj: 'Rosy' },
    { a: '#17b5b0', b: '#2b59c3', adj: 'Seafoam' }, { a: '#ff7a1a', b: '#b5173b', adj: 'Ember' }
  ];
  var ENVS = {
    night: { sky: ['#0b1040', '#17236b', '#2c3a94'], hill: ['#1b2f6b', '#14245a'], grass: ['#1f6b45', '#154d33'], star: 1, moon: 1, fire: 1, adj: 'Moonlit', prep: 'by Moonlight', lines: ['The moon is out and the whole world is whispering.', 'Every star is awake tonight.'] },
    dusk: { sky: ['#3b1d63', '#8e2f7a', '#e8645a', '#ffa94d'], hill: ['#5a2a6e', '#3b1d55'], grass: ['#365a3a', '#26422b'], sun: '#ffd36b', adj: 'Twilight', prep: 'at Twilight', lines: ['The sky is turning the color of a plum pie.', 'Twilight lasts a little longer here.'] },
    day: { sky: ['#3fa9ff', '#7cc7ff', '#bfe6ff'], hill: ['#6fcf8a', '#46b06a'], grass: ['#4cc26a', '#33a152'], sun: '#fff3a8', clouds: 1, adj: 'Sunlit', prep: 'in Full Sun', lines: ['It is a bright and breezy day with nothing on the schedule.', 'The sun is high and the clouds are behaving.'] },
    dawn: { sky: ['#6f5bd6', '#d77fc4', '#ffb59a', '#ffe0a8'], hill: ['#7c6bbd', '#5c4b9c'], grass: ['#4f9a6a', '#3a7e54'], sun: '#fff0b8', clouds: 1, adj: 'Dawn', prep: 'at First Light', lines: ['The morning is just beginning to stretch.', 'First light brings a hush and a good feeling.'] },
    snow: { sky: ['#8aa9d6', '#b7cbe8', '#dce8f6'], hill: ['#c8d8ee', '#a9bfdc'], grass: ['#f4f8ff', '#dbe6f5'], flakes: 1, adj: 'Frosted', prep: 'in the Snow', lines: ['Snow muffles every sound and the world feels wrapped in a blanket.', 'The air is cold and clean and smells like cocoa.'] },
    aurora: { sky: ['#050a2a', '#0b1a4a', '#12306a'], hill: ['#0f2a55', '#0a1f44'], grass: ['#1a3b5f', '#122d4b'], star: 1, aurora: 1, adj: 'Aurora', prep: 'under the Aurora', lines: ['Ribbons of green light ripple across the sky.', 'The northern lights are putting on their best show.'] },
    meadow: { sky: ['#58c1ff', '#a5e1ff', '#d8f3ff'], hill: ['#7ad58a', '#52bb6a'], grass: ['#5bd16f', '#3fb257'], sun: '#fff3a8', clouds: 1, flowers: 1, adj: 'Springtime', prep: 'in the Meadow', lines: ['Wildflowers nod along and the grass hums with bees.', 'A warm breeze carries the smell of clover.'] },
    forest: { sky: ['#0e2b2b', '#17483f', '#2a6b50'], hill: ['#14403a', '#0e2f2d'], grass: ['#2e7a4a', '#1f5a36'], fire: 1, trees: 1, adj: 'Woodland', prep: 'in the Deep Wood', lines: ['Fireflies drift between the trees like tiny lanterns.', 'The woods are quiet and full of secrets.'] },
    storm: { sky: ['#252a36', '#454c5e', '#6c7488'], hill: ['#39404f', '#2a303c'], grass: ['#6a7d4a', '#52653a'], clouds: 1, cloudCol: '#7d8498', adj: 'Stormy', prep: 'in the Storm', lines: ['The wind is rising and the whole sky is holding its breath.', 'Thunder rolls in the distance like someone moving furniture.'] },
    sea: { sky: ['#2d8fe0', '#6cc0f0', '#bfe9ff'], hill: ['#2a7fc0', '#1f6aa8'], grass: ['#ecd9a0', '#d6bc7c'], sun: '#fff3a8', clouds: 1, adj: 'Seaside', prep: 'by the Sea', lines: ['Salt on the wind and gulls overhead, and the tide keeps its own time.', 'The waves come in one at a time, like pages turning.'] },
    desert: { sky: ['#ff9a4a', '#ffc27a', '#ffe3a8'], hill: ['#c9703a', '#a85a2e'], grass: ['#e0b070', '#c99556'], sun: '#fff0b8', adj: 'Dusty', prep: 'on the Dusty Trail', lines: ['The land is wide and gold and the sky goes on forever.', 'Hot wind, long shadows, and not a cloud to argue with.'] },
    autumn: { sky: ['#5a3a6a', '#c0603a', '#f0a050'], hill: ['#8a4a2a', '#6a3420'], grass: ['#a86a2a', '#8a5220'], sun: '#ffd36b', fire: 1, adj: 'Harvest', prep: 'in Autumn', lines: ['Leaves tumble down in every shade of ember.', 'The air smells like woodsmoke, apples and the start of a good story.'] },
    hall: { sky: ['#2a0f1f', '#4a1a2e', '#6b2a3a'], hill: ['#3a1426', '#2a0e1c'], grass: ['#8a6a52', '#654a39'], fire: 1, adj: 'Candlelit', prep: 'in the Great Hall', lines: ['A hundred candles flicker and the shadows lean in to listen.', 'The hall is quiet, grand and a little bit watching.'] }
  };
  var ENV_KEYS = Object.keys(ENVS);
  ENVS.silent = { sky: ['#0b1448', '#1c2c78', '#3a52a8'], hill: ['#dbe6f5', '#b7c9e4'], grass: ['#f4f8ff', '#dbe6f5'], star: 1, flakes: 1, adj: 'Silent', prep: 'on a Silent Night', lines: ['The snow is falling softly and every window glows gold.', 'The whole world is holding its breath for morning.'] };
  ENVS.rosy = { sky: ['#8a2a6a', '#d8508a', '#ff9ab8', '#ffd0d8'], hill: ['#b8406a', '#8a2a58'], grass: ['#6aa86a', '#4a8850'], sun: '#fff0f4', clouds: 1, cloudCol: '#ffe0ea', flowers: 1, adj: 'Rosy', prep: 'in a Rosy Glow', lines: ['The sky is blushing pink from edge to edge.', 'Everything feels a little softer and a little sweeter.'] };
  ENVS.fireworks = { sky: ['#070a2e', '#101a5a', '#24348a'], hill: ['#16286a', '#0e1c52'], grass: ['#1f5a3a', '#154530'], star: 1, fireworks: 1, adj: 'Sparkling', prep: 'under the Fireworks', lines: ['Rockets whistle up and the night sky blooms in color.', 'Every boom is followed by a cheer.'] };
  ENVS.harvest = { sky: ['#6a3a5a', '#d07a3a', '#ffc070', '#ffe2a0'], hill: ['#a8602a', '#82481f'], grass: ['#c89a3a', '#a87a2a'], sun: '#fff0b8', adj: 'Golden', prep: 'at Harvest Time', lines: ['The fields glow gold and the barn smells of hay.', 'Everything is ripe and everyone is hungry.'] };

  function drawScene(c, E, rng, gy, S) {
    var N = c.N, hi = N >= 64, sc = hi ? 4 : 1, x, y, i, ph = rng() * 6.28;
    var skyIdx = E.sky.map(function (h) { return c.c(h); }), K = skyIdx.length;
    for (y = 0; y < N; y++) for (x = 0; x < N; x++) {
      var t = (y + 0.5) / N / gy, k = Math.floor(t * K + Math.sin(x * (hi ? 0.22 : 0.45) + ph) * 0.16);
      c.px[y * N + x] = skyIdx[Math.max(0, Math.min(K - 1, k))];
    }
    if (!S.nohalo) {
      var hx = (S.hx || 0.5) * N, hy = (S.hy || (gy - 0.30)) * N, base = c.pal[c.px[Math.floor(hy) * N + Math.floor(hx)]] || E.sky[1];
      for (var hb = 4; hb >= 1; hb--) {
        var hcol = c.c(lighten(base, 0.05 * (5 - hb))), hr = (0.12 + 0.085 * hb) * N * (S.hs || 1);
        for (y = 0; y < Math.floor(gy * N); y++) for (x = 0; x < N; x++) { var dx = (x - hx) / hr, dy = (y - hy) / (hr * 0.95); if (dx * dx + dy * dy <= 1) c.px[y * N + x] = hcol; }
      }
    }
    var top = rng() < 0.5 ? 0.17 : 0.83;
    if (E.aurora) {
      var p1 = rng() * 6.28, cg = c.c('#2fe6a7'), cm = c.c('#b347e0');
      for (x = 0; x < N; x++) {
        var yc = 0.26 + 0.07 * Math.sin(6.28 * (x / N * 1.2) + p1);
        for (y = 0; y < N; y++) { var uy = (y + 0.5) / N; if (Math.abs(uy - yc) < 0.035) c.px[y * N + x] = cg; else if (Math.abs(uy - (yc + 0.1)) < 0.02) c.px[y * N + x] = cm; }
      }
    }
    if (E.star || E.flakes) {
      var sCol = c.c(E.flakes ? '#ffffff' : '#fff6d0'), sW = c.c('#ffffff'), n = (E.flakes ? 16 : 14) * sc;
      for (i = 0; i < n; i++) {
        var sx = rng(), sy = rng() * gy * 0.7;
        if (E.moon && Math.abs(sx - top) < 0.12 && sy < 0.3) continue;
        if (i % 5 === 0 && !E.flakes) { c.px[Math.floor(sy * N) * N + Math.floor(sx * N)] = sW; var X = Math.floor(sx * N), Y = Math.floor(sy * N); [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) { var xx = X + d[0], yy = Y + d[1]; if (xx >= 0 && yy >= 0 && xx < N && yy < N) c.px[yy * N + xx] = sW; }); }
        else c.dot(sx, sy, sCol, 1);
      }
    }
    if (E.fireworks) {
      var fwc = ['#ff3b5c', '#ffffff', '#5aa8ff', '#ffd23f', '#ff9a3a'], fb, fa, fr;
      for (fb = 0; fb < 3; fb++) {
        var fbx = 0.16 + fb * 0.30 + rng() * 0.1, fby = 0.12 + rng() * 0.20, fbr = 0.08 + rng() * 0.05, fcol = c.c(fwc[(fb * 2 + Math.floor(rng() * 2)) % 5]);
        for (fa = 0; fa < 14; fa++) { var fang = fa * Math.PI * 2 / 14; for (fr = 0.4; fr <= 1.01; fr += 0.3) c.dot(fbx + Math.cos(fang) * fbr * fr, fby + Math.sin(fang) * fbr * fr, fcol, 1); }
        c.dot(fbx, fby, c.c('#ffffff'), 1);
      }
    }
    if (E.moon) {
      var my = 0.17, sky = c.px[Math.floor(my * N) * N + Math.floor(top * N)], mc = c.c('#fff2b8');
      c.E(top, my, 0.075, 0.075, mc, { flat: true }); c.E(top + (top < 0.5 ? 0.035 : -0.035), my - 0.015, 0.07, 0.07, sky, { flat: true });
    }
    if (E.sun) {
      var low = (E === ENVS.dusk || E === ENVS.dawn), sy2 = low ? gy - 0.10 : 0.16, sx2 = low ? (rng() < 0.5 ? 0.25 : 0.75) : top;
      c.E(sx2, sy2, 0.085, 0.085, c.c(E.sun), { flat: true });
    }
    if (E.clouds) {
      var cc = c.c(E.cloudCol || (E === ENVS.dusk || E === ENVS.dawn ? '#ffd9e8' : '#ffffff')), cn = hi ? 3 : 2;
      for (i = 0; i < cn; i++) {
        var cx0 = rng() < 0.5 ? 0.12 + rng() * 0.2 : 0.68 + rng() * 0.2, cy0 = 0.12 + rng() * 0.22;
        c.E(cx0, cy0, 0.09, 0.04, cc, { flat: true }); c.E(cx0 - 0.07, cy0 + 0.012, 0.06, 0.03, cc, { flat: true }); c.E(cx0 + 0.07, cy0 + 0.012, 0.06, 0.03, cc, { flat: true });
      }
    }
    // hills
    var hf = c.c(E.hill[0]), hn = c.c(E.hill[1]), p2 = rng(), p3 = rng(), p4 = rng();
    for (x = 0; x < N; x++) {
      var u = x / N, yf = gy - 0.06 - 0.07 * (0.5 + 0.5 * Math.sin(6.28 * (u * 1.3 + p2))) - 0.03 * Math.sin(6.28 * (u * 3.1 + p3));
      var yn = gy - 0.015 - 0.04 * (0.5 + 0.5 * Math.sin(6.28 * (u * 1.9 + p4)));
      for (y = 0; y < N; y++) { var v = (y + 0.5) / N; if (v >= yn) c.px[y * N + x] = hn; else if (v >= yf) c.px[y * N + x] = hf; }
    }
    if (E.trees) {
      var tc = c.c('#0b2523');
      for (i = 0; i < 6 * (hi ? 2 : 1); i++) { var tx = rng(), th = 0.10 + rng() * 0.10; if (Math.abs(tx - 0.5) < 0.2) continue; c.P([[tx - th * 0.45, gy - 0.04], [tx + th * 0.45, gy - 0.04], [tx, gy - 0.04 - th * 1.6]], tc, { flat: true }); }
    }
    // ground
    var g0 = c.c(E.grass[0]), g1 = c.c(E.grass[1]);
    for (y = Math.floor(gy * N); y < N; y++) for (x = 0; x < N; x++) c.px[y * N + x] = (y + 0.5) / N < gy + 0.08 ? g0 : g1;
    var tuft = c.c(lighten(E.grass[0], 0.3));
    for (i = 0; i < 9 * sc; i++) { var gx = Math.floor(rng() * N), gyy = Math.floor(gy * N); c.px[gyy * N + gx] = tuft; if (hi) c.px[(gyy + 1) * N + gx] = tuft; }
    if (E.flowers) { var fl = ['#ff6fa8', '#ffd23f', '#ffffff', '#b07cff'].map(function (h) { return c.c(h); }); for (i = 0; i < 14 * sc; i++) c.dot(rng(), gy + 0.03 + rng() * 0.15, pick(fl, rng), 1); }
    if (S.float) c.E(0.5, gy + 0.04, S.sh || 0.2, 0.022, c.c(darken(E.grass[0], 0.35)), { flat: true });
  }

  /* ---------- subjects ---------- */
  var SUBJECTS = [
    { k: 'castle', n: 'Castle', lines: ['Every tower has a story, and this one has had a hundred years to practice telling it.', 'The drawbridge is up, the kettle is on, and the guards would like a word about the dragon.'],
      draw: function (c, P, r, o) {
        var g = o.gy, B = o.B;
        c.R(0.15, g - 0.20, 0.85, g, P.stone, { pat: B });
        for (var x = 0.17; x < 0.83; x += 0.09) c.R(x, g - 0.235, x + 0.05, g - 0.20, P.stone);
        c.mir = true;
        c.R(0.10, g - 0.34, 0.25, g, P.stone, { pat: B }); c.R(0.09, g - 0.365, 0.26, g - 0.33, P.stoneD);
        c.P([[0.08, g - 0.365], [0.27, g - 0.365], [0.175, g - 0.51]], P.a);
        c.R(0.165, g - 0.27, 0.185, g - 0.21, P.glow, { flat: 1 });
        c.mir = false;
        c.R(0.36, g - 0.46, 0.64, g, P.stone, { pat: B }); c.R(0.34, g - 0.49, 0.66, g - 0.455, P.stoneD);
        c.P([[0.33, g - 0.49], [0.67, g - 0.49], [0.5, g - 0.66]], P.b);
        c.L(0.5, g - 0.66, 0.5, g - 0.73, 0.014, P.wood, { flat: 1 }); c.P([[0.5, g - 0.73], [0.60, g - 0.70], [0.5, g - 0.67]], P.gold);
        c.R(0.465, g - 0.37, 0.535, g - 0.29, P.glow, { flat: 1 }); c.DM(0.5, g - 0.37, 0.035, 0.03, P.glow, { flat: 1 });
        c.R(0.43, g - 0.12, 0.57, g, P.wood); c.DM(0.5, g - 0.12, 0.07, 0.06, P.wood);
      } },
    { k: 'tower', n: "Wizard's Tower", lines: ['The wizard lives at the top, and the stairs are the real spell.', 'Nobody remembers who built it, but the window is always lit when the stars come out.'],
      draw: function (c, P, r, o) {
        var g = o.gy;
        c.P([[0.36, g], [0.64, g], [0.60, g - 0.40], [0.40, g - 0.40]], P.stone, { pat: o.B });
        c.R(0.33, g - 0.44, 0.67, g - 0.38, P.stoneD);
        c.P([[0.31, g - 0.44], [0.69, g - 0.44], [0.5, g - 0.68]], P.a);
        c.ST(0.5, g - 0.71, 0.05, 0.022, P.gold, { flat: 1 });
        c.E(0.45, g - 0.52, 0.014, 0.014, P.gold, { flat: 1 }); c.E(0.56, g - 0.50, 0.012, 0.012, P.gold, { flat: 1 });
        c.R(0.47, g - 0.33, 0.53, g - 0.25, P.glow, { flat: 1 }); c.DM(0.5, g - 0.33, 0.03, 0.03, P.glow, { flat: 1 });
        c.R(0.47, g - 0.20, 0.53, g - 0.13, P.glow, { flat: 1 }); c.DM(0.5, g - 0.20, 0.03, 0.03, P.glow, { flat: 1 });
        c.R(0.45, g - 0.08, 0.55, g, P.wood); c.DM(0.5, g - 0.08, 0.05, 0.04, P.wood);
        c.R(0.62, g - 0.27, 0.72, g - 0.245, P.wood);
      } },
    { k: 'cottage', n: 'Cottage', lines: ['Smoke from the chimney, bread in the oven, and a path that has never once been lost.', 'Small enough to feel safe and big enough to hold every story you ever heard.'],
      draw: function (c, P, r, o) {
        var g = o.gy;
        c.P([[0.43, g], [0.57, g], [0.64, g + 0.10], [0.36, g + 0.10]], P.tan, { flat: 1 });
        c.R(0.24, g - 0.24, 0.76, g, P.tan);
        c.R(0.63, g - 0.50, 0.72, g - 0.30, P.stoneD);
        c.P([[0.17, g - 0.24], [0.83, g - 0.24], [0.5, g - 0.48]], P.a);
        c.E(0.70, g - 0.55, 0.035, 0.03, P.white, { flat: 1 }); c.E(0.73, g - 0.61, 0.04, 0.03, P.white, { flat: 1 }); c.E(0.70, g - 0.67, 0.045, 0.03, P.white, { flat: 1 });
        c.R(0.44, g - 0.15, 0.56, g, P.wood); c.E(0.535, g - 0.07, 0.01, 0.01, P.gold, { flat: 1 });
        c.mir = true;
        c.R(0.28, g - 0.19, 0.38, g - 0.09, P.glow, { flat: 1 }); c.L(0.33, g - 0.19, 0.33, g - 0.09, 0.012, P.wood, { flat: 1 });
        c.R(0.27, g - 0.09, 0.39, g - 0.065, P.green); c.E(0.30, g - 0.095, 0.012, 0.012, P.b, { flat: 1 }); c.E(0.36, g - 0.095, 0.012, 0.012, P.gold, { flat: 1 });
        c.mir = false;
      } },
    { k: 'mushroom', n: 'Mushroom House', lines: ['It looks like a house, it smells like rain, and it is much bigger on the inside.', 'The neighbors are frogs, the mail comes by snail, and nobody is ever in a hurry.'],
      draw: function (c, P, r, o) {
        var g = o.gy || 0.92, i;
        o.shadow(0.5, g, 0.40, 0.03);
        c.P([[0.34, g], [0.36, 0.50], [0.64, 0.50], [0.66, g]], c.tone('#f4ead2')); c.P([[0.34, g], [0.36, 0.50], [0.44, 0.50], [0.42, g]], c.tone('#e0d2b0'), { flat: 1 });
        c.DM(0.5, 0.52, 0.48, 0.46, P.a); c.E(0.5, 0.52, 0.48, 0.07, P.b); c.DM(0.5, 0.52, 0.48, 0.46, P.b, { flat: 1, pat: function (x, y) { return x < 0.22; } });
        for (i = 0; i < 6; i++) { var sx = [0.20, 0.40, 0.60, 0.78, 0.32, 0.66][i], sy = [0.40, 0.26, 0.32, 0.44, 0.40, 0.18][i]; c.E(sx, sy, 0.05 + (i % 2) * 0.012, 0.04, c.tone('#ffffff')); }
        c.P([[0.44, g], [0.44, 0.72], [0.50, 0.66], [0.56, 0.72], [0.56, g]], c.tone('#6a3a1a')); c.dot(0.53, 0.82, c.c('#ffd23f'), 2);
        c.R(0.36, 0.60, 0.44, 0.68, c.tone('#a8e0ff')); c.R(0.56, 0.60, 0.64, 0.68, c.tone('#a8e0ff')); c.L(0.40, 0.60, 0.40, 0.68, 0.008, c.tone('#6a3a1a'), { flat: 1 }); c.L(0.60, 0.60, 0.60, 0.68, 0.008, c.tone('#6a3a1a'), { flat: 1 });
        c.R(0.68, 0.18, 0.74, 0.34, c.tone('#8a6a4a')); c.E(0.71, 0.14, 0.03, 0.03, c.tone('#e8e8f4'), { flat: 1 }); c.E(0.76, 0.08, 0.025, 0.025, c.tone('#e8e8f4'), { flat: 1 });
        c.E(0.14, g - 0.04, 0.05, 0.04, c.tone('#2fb050')); c.dot(0.12, g - 0.07, c.c('#ffffff'), 2); c.dot(0.16, g - 0.07, c.c('#ffffff'), 2);
        c.E(0.84, g - 0.02, 0.06, 0.03, c.tone('#c8a8e0')); c.E(0.86, g - 0.06, 0.03, 0.03, c.tone('#a888c0')); c.L(0.88, g - 0.08, 0.92, g - 0.14, 0.006, c.tone('#a888c0'), { flat: 1 });
        for (i = 0; i < 3; i++) spark(c, 0.10 + i * 0.4, 0.12 + (i % 2) * 0.1, 0.03, P.glow);
      } },
    { k: 'gingerbread', n: 'Gingerbread House', lines: ['Sweet to look at and sticky to the touch. Read the sign on the door before you take a bite.', 'Someone left a trail of crumbs. Someone else was very hungry.'],
      draw: function (c, P, r, o) {
        var g = o.gy;
        c.R(0.24, g - 0.25, 0.76, g, P.gb);
        c.P([[0.18, g - 0.25], [0.82, g - 0.25], [0.5, g - 0.50]], P.choc);
        c.R(0.18, g - 0.28, 0.82, g - 0.245, P.white, { flat: 1 });
        for (var i = 0; i < 8; i++) c.E(0.22 + i * 0.081, g - 0.245, 0.03, 0.022, P.white, { flat: 1 });
        c.E(0.42, g - 0.34, 0.025, 0.025, P.a, { flat: 1 }); c.E(0.58, g - 0.34, 0.025, 0.025, P.gold, { flat: 1 }); c.E(0.5, g - 0.41, 0.025, 0.025, P.b, { flat: 1 }); c.E(0.5, g - 0.33, 0.02, 0.02, P.green, { flat: 1 });
        c.R(0.44, g - 0.16, 0.56, g, P.white, { flat: 1 }); c.R(0.45, g - 0.15, 0.55, g, P.b);
        c.mir = true; c.R(0.28, g - 0.21, 0.39, g - 0.10, P.white, { flat: 1 }); c.R(0.295, g - 0.195, 0.375, g - 0.115, P.glow, { flat: 1 }); c.mir = false;
        c.L(0.12, g - 0.22, 0.12, g, 0.025, P.white, { flat: 1 }); c.RG(0.145, g - 0.22, 0.02, 0.038, P.a, { flat: 1 }); c.dot(0.12, g - 0.12, c.c('#d7263d'), 1); c.dot(0.12, g - 0.06, c.c('#d7263d'), 1);
        c.L(0.88, g - 0.16, 0.88, g, 0.015, P.cream, { flat: 1 }); c.E(0.88, g - 0.2, 0.05, 0.05, P.b); c.E(0.88, g - 0.2, 0.025, 0.025, P.white, { flat: 1 });
      } },
    { k: 'windmill', n: 'Windmill', lines: ['The sails turn slowly and the wind tells the miller all the gossip.', 'It grinds the grain, it hums the tune, and it has never lost an argument with the weather.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.96, 0.34, 0.03);
        c.P([[0.26, 0.96], [0.36, 0.40], [0.64, 0.40], [0.74, 0.96]], c.tone('#f0e4cc')); c.P([[0.26, 0.96], [0.36, 0.40], [0.44, 0.40], [0.40, 0.96]], c.tone('#d8c8a8'), { flat: 1 });
        for (i = 0; i < 5; i++) c.L(0.28 + i * 0.01, 0.50 + i * 0.1, 0.72 - i * 0.01, 0.50 + i * 0.1, 0.012, c.tone('#c8b890'), { flat: 1 });
        c.P([[0.32, 0.40], [0.50, 0.14], [0.68, 0.40]], P.a); c.P([[0.32, 0.40], [0.50, 0.14], [0.50, 0.40]], P.b, { flat: 1 });
        c.R(0.44, 0.76, 0.56, 0.96, c.tone('#6a3a1a')); c.E(0.50, 0.76, 0.06, 0.05, c.tone('#6a3a1a')); c.dot(0.54, 0.86, c.c('#ffd23f'), 2);
        c.E(0.50, 0.54, 0.05, 0.05, c.tone('#a8e0ff')); c.E(0.50, 0.54, 0.05, 0.05, c.tone('#2a2a3a'), { flat: 1, ring: 1 });
        for (i = 0; i < 4; i++) { var a = 0.4 + i * Math.PI / 2, x = 0.50 + Math.cos(a) * 0.40, y = 0.30 + Math.sin(a) * 0.40; c.L(0.50, 0.30, x, y, 0.016, c.tone('#6a3a1a')); var px = Math.cos(a + 1.5708) * 0.07, py = Math.sin(a + 1.5708) * 0.07; c.P([[0.50 + Math.cos(a) * 0.08, 0.30 + Math.sin(a) * 0.08], [x, y], [x + px, y + py], [0.50 + Math.cos(a) * 0.08 + px, 0.30 + Math.sin(a) * 0.08 + py]], c.tone('#fff4e0')); c.L(0.50 + Math.cos(a) * 0.1 + px * 0.5, 0.30 + Math.sin(a) * 0.1 + py * 0.5, x + px * 0.5, y + py * 0.5, 0.008, c.tone('#c8b890'), { flat: 1 }); }
        c.E(0.50, 0.30, 0.04, 0.04, c.tone('#ffd23f')); c.E(0.50, 0.30, 0.018, 0.018, c.tone('#fff4a0'), { flat: 1 });
      } },
    { k: 'apple', n: 'Poison Apple', float: 1, sh: 0.2, lines: ['It gleamed so red that no one could look away. The bravest thing to do is ask who baked it.', 'One bite is all it takes in the old stories, so leave this one on the windowsill.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.50, 0.30, 0.52, 0.10, 0.03, c.tone('#5a3a1a')); c.L(0.50, 0.28, 0.51, 0.14, 0.01, c.tone('#8a5a2a'), { flat: 1 });
        c.P([[0.52, 0.18], [0.64, 0.06], [0.82, 0.08], [0.76, 0.22], [0.60, 0.24]], c.tone('#2fb050')); c.L(0.54, 0.18, 0.78, 0.10, 0.01, c.tone('#5ad878'), { flat: 1 });
        c.E(0.34, 0.54, 0.26, 0.28, c.tone('#c8102c')); c.E(0.66, 0.54, 0.26, 0.28, c.tone('#c8102c')); c.E(0.50, 0.66, 0.34, 0.26, c.tone('#c8102c')); c.E(0.50, 0.38, 0.14, 0.08, c.tone('#a00a20'), { flat: 1 });
        c.E(0.34, 0.52, 0.12, 0.22, c.tone('#e8283e'), { flat: 1 }); c.E(0.30, 0.42, 0.045, 0.07, c.tone('#ff8a98'), { flat: 1 }); c.dot(0.26, 0.54, c.c('#ffffff'), 2);
        c.E(0.72, 0.70, 0.12, 0.18, c.tone('#8a0a1c'), { flat: 1 });
        c.P([[0.44, 0.50], [0.46, 0.56], [0.50, 0.50], [0.54, 0.56], [0.56, 0.50], [0.54, 0.64], [0.46, 0.64]], c.tone('#2a2038'), { flat: 1 });
        c.E(0.50, 0.44, 0.045, 0.045, c.tone('#2a2038')); c.dot(0.485, 0.435, c.c('#ffffff'), 1); c.dot(0.515, 0.435, c.c('#ffffff'), 1); c.R(0.48, 0.47, 0.52, 0.50, c.tone('#2a2038'), { flat: 1 });
        for (i = 0; i < 3; i++) c.E(0.70 + i * 0.05, 0.78 - i * 0.05, 0.012, 0.012, c.tone('#40ff80'), { flat: 1 });
        spark(c, 0.20, 0.20, 0.04, P.glow); spark(c, 0.86, 0.34, 0.03, P.white);
      } },
    { k: 'pumpkin', n: 'Pumpkin Coach', float: 1, sh: 0.3, gy: 0.82, lines: ['At midnight it will be a plain pumpkin again, so there is no time to waste.', 'Golden wheels, a window of light, and a driver who is secretly a very proud mouse.'],
      draw: function (c, P, r, o) {
        c.RG(0.27, 0.77, 0.035, 0.085, P.gold); c.E(0.27, 0.77, 0.03, 0.03, P.wood, { flat: 1 }); c.RG(0.73, 0.77, 0.035, 0.085, P.gold); c.E(0.73, 0.77, 0.03, 0.03, P.wood, { flat: 1 });
        c.E(0.34, 0.56, 0.17, 0.21, P.orange); c.E(0.66, 0.56, 0.17, 0.21, P.orange); c.E(0.5, 0.56, 0.16, 0.23, P.orange);
        c.R(0.46, 0.30, 0.54, 0.40, P.green); c.L(0.54, 0.33, 0.64, 0.28, 0.025, P.green, { flat: 1 });
        c.R(0.44, 0.48, 0.56, 0.60, P.glow, { flat: 1 }); c.DM(0.5, 0.48, 0.06, 0.04, P.glow, { flat: 1 });
      } },
    { k: 'crown', n: 'Crown', float: 1, sh: 0.26, lines: ['Heavy is the head that wears it, but it looks wonderful on the cushion.', 'It has been lost, stolen, polished and argued over, and it still shines.'],
      draw: function (c, P, r, o) {
        var gd = c.tone('#f0c030'), i;
        c.E(0.50, 0.86, 0.46, 0.08, c.tone('#c8202c')); c.E(0.50, 0.82, 0.46, 0.07, c.tone('#e8404c'), { flat: 1 }); c.E(0.50, 0.90, 0.40, 0.04, c.tone('#a0101c'), { flat: 1 });
        c.P([[0.14, 0.82], [0.10, 0.34], [0.26, 0.52], [0.36, 0.22], [0.50, 0.48], [0.64, 0.22], [0.74, 0.52], [0.90, 0.34], [0.86, 0.82]], gd);
        c.P([[0.14, 0.82], [0.10, 0.34], [0.26, 0.52], [0.30, 0.82]], c.tone('#ffe880'), { flat: 1 });
        c.R(0.12, 0.66, 0.88, 0.80, c.tone('#c8902a')); c.R(0.12, 0.66, 0.88, 0.69, c.tone('#ffe880'), { flat: 1 });
        var gs = [['#e8202c', 0.22], ['#35d8f2', 0.38], ['#2fb050', 0.50], ['#35d8f2', 0.62], ['#e8202c', 0.78]]; for (i = 0; i < 5; i++) { c.E(gs[i][1], 0.73, 0.04, 0.04, c.tone(gs[i][0])); c.dot(gs[i][1] - 0.012, 0.715, c.c('#ffffff'), 1); }
        var ps = [[0.10, 0.30], [0.36, 0.18], [0.64, 0.18], [0.90, 0.30]]; for (i = 0; i < 4; i++) { c.E(ps[i][0], ps[i][1], 0.035, 0.035, c.tone('#ffffff')); c.dot(ps[i][0] - 0.01, ps[i][1] - 0.01, c.c('#ffffff'), 1); }
        c.E(0.50, 0.38, 0.04, 0.04, c.tone('#ffffff')); c.R(0.485, 0.42, 0.515, 0.50, gd);
        spark(c, 0.08, 0.14, 0.04, P.glow); spark(c, 0.92, 0.16, 0.04, P.white);
      } },
    { k: 'slipper', n: 'Glass Slipper', float: 1, sh: 0.26, lines: ['Made of glass and a little bit of luck. It fits exactly one person in the kingdom.', 'It sparkles on the stair and keeps the whole palace guessing.'],
      draw: function (c, P, r, o) {
        var gl = c.tone('#7cc8ff');
        c.P([[0.24, 0.44], [0.37, 0.44], [0.44, 0.58], [0.66, 0.60], [0.84, 0.70], [0.80, 0.78], [0.26, 0.76]], gl);
        c.P([[0.25, 0.72], [0.38, 0.72], [0.34, 0.90], [0.28, 0.90]], gl);
        c.P([[0.28, 0.48], [0.33, 0.48], [0.36, 0.60], [0.30, 0.60]], P.white, { flat: 1 });
        c.E(0.50, 0.60, 0.04, 0.035, P.a, { flat: 1 }); c.E(0.50, 0.60, 0.015, 0.015, P.gold, { flat: 1 });
        spark(c, 0.20, 0.28, 0.04, P.white); spark(c, 0.82, 0.38, 0.035, P.white);
      } },
    { k: 'wand', n: 'Magic Wand', float: 1, sh: 0.18, lines: ['Tap it once for a wish, twice for a surprise, three times for a talking pumpkin.', 'It hums when it is happy and fizzes when it is not. Today it is humming.'],
      draw: function (c, P, r, o) {
        c.L(0.26, 0.80, 0.64, 0.38, 0.06, P.wood); c.L(0.30, 0.75, 0.36, 0.68, 0.075, P.gold); c.L(0.56, 0.47, 0.60, 0.43, 0.075, P.gold);
        c.ST(0.70, 0.30, 0.15, 0.065, P.gold, { flat: 0 });
        spark(c, 0.30, 0.26, 0.05, P.white); spark(c, 0.86, 0.52, 0.04, P.white); spark(c, 0.50, 0.18, 0.035, P.glow); c.E(0.84, 0.18, 0.015, 0.015, P.white, { flat: 1 }); c.E(0.18, 0.46, 0.015, 0.015, P.white, { flat: 1 });
      } },
    { k: 'potion', n: 'Potion', float: 1, sh: 0.2, lines: ['The label has smudged, the color is suspicious, and it smells a little like peppermint.', 'Shake well, stand back, and do not let the cat near it.'],
      draw: function (c, P, r, o) {
        c.E(0.5, 0.64, 0.21, 0.21, P.glass); c.R(0.43, 0.34, 0.57, 0.48, P.glass);
        c.E(0.5, 0.64, 0.18, 0.18, P.a, { flat: 0 }, false);
        c.E(0.5, 0.58, 0.19, 0.12, P.glass, { flat: 1 }, true);
        c.R(0.425, 0.27, 0.575, 0.34, P.wood);
        c.E(0.45, 0.70, 0.03, 0.03, P.a.l, { flat: 1 }); c.E(0.56, 0.74, 0.02, 0.02, P.a.l, { flat: 1 }); c.E(0.52, 0.52, 0.018, 0.018, P.white, { flat: 1 });
        c.E(0.40, 0.58, 0.02, 0.05, P.white, { flat: 1 });
        spark(c, 0.78, 0.30, 0.04, P.white);
      } },
    { k: 'spellbook', n: 'Spellbook', float: 1, sh: 0.26, lines: ['Its pages turn on their own, and the ink changes when nobody is looking.', 'The first rule is written on the cover: ask politely before you open.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.08, 0.84], [0.50, 0.92], [0.92, 0.84], [0.92, 0.28], [0.50, 0.36], [0.08, 0.28]], P.a);
        c.P([[0.12, 0.80], [0.50, 0.88], [0.50, 0.38], [0.12, 0.32]], c.tone('#fff4dc')); c.P([[0.88, 0.80], [0.50, 0.88], [0.50, 0.38], [0.88, 0.32]], c.tone('#f4e8c8'));
        for (i = 0; i < 5; i++) { c.L(0.18, 0.42 + i * 0.08, 0.44, 0.46 + i * 0.08, 0.012, c.tone('#8a6a4a'), { flat: 1 }); c.L(0.56, 0.46 + i * 0.08, 0.82, 0.42 + i * 0.08, 0.012, c.tone('#8a6a4a'), { flat: 1 }); }
        c.L(0.50, 0.38, 0.50, 0.88, 0.014, c.tone('#c8a878'), { flat: 1 });
        c.P([[0.14, 0.28], [0.40, 0.18], [0.50, 0.30], [0.50, 0.36], [0.14, 0.32]], c.tone('#fff4dc'), { flat: 1 }); c.P([[0.86, 0.28], [0.60, 0.16], [0.50, 0.30], [0.50, 0.36], [0.86, 0.32]], c.tone('#f4e8c8'), { flat: 1 });
        c.ST(0.50, 0.10, 0.08, 0.034, c.tone('#ffd23f')); c.E(0.50, 0.10, 0.022, 0.022, c.tone('#fff4a0'), { flat: 1 });
        spark(c, 0.26, 0.14, 0.04, c.tone('#c890ff')); spark(c, 0.76, 0.12, 0.035, c.tone('#8affea')); spark(c, 0.88, 0.22, 0.03, c.tone('#ffffff'));
        c.E(0.26, 0.54, 0.05, 0.05, P.b); c.ST(0.26, 0.54, 0.04, 0.016, c.tone('#ffd23f'));
        c.L(0.60, 0.56, 0.78, 0.56, 0.01, P.b, { flat: 1 });
      } },
    { k: 'key', n: 'Key', float: 1, sh: 0.2, lines: ['It opens exactly one door, and nobody remembers where the door is.', 'Old, golden and a little bit heavy with secrets.'],
      draw: function (c, P, r, o) {
        var gd = c.tone('#e8b830'), i;
        c.RG(0.26, 0.28, 0.08, 0.20, gd); c.RG(0.26, 0.28, 0.10, 0.16, c.tone('#c8902a'), { flat: 1 });
        c.P([[0.18, 0.40], [0.26, 0.44], [0.34, 0.40], [0.30, 0.52], [0.22, 0.52]], gd);
        for (i = 0; i < 3; i++) c.E(0.26 + (i - 1) * 0.1, 0.12, 0.025, 0.025, c.tone('#fff0b0'), { flat: 1 });
        c.L(0.30, 0.46, 0.80, 0.86, 0.065, gd); c.L(0.30, 0.44, 0.78, 0.82, 0.02, c.tone('#fff0b0'), { flat: 1 });
        c.E(0.40, 0.55, 0.045, 0.045, c.tone('#ffd23f')); c.E(0.52, 0.65, 0.04, 0.04, c.tone('#ffd23f'));
        c.P([[0.68, 0.76], [0.84, 0.64], [0.92, 0.72], [0.88, 0.84], [0.78, 0.92]], gd); c.P([[0.70, 0.80], [0.82, 0.72], [0.82, 0.80]], c.tone('#c8902a'), { flat: 1 }); c.R(0.80, 0.78, 0.90, 0.84, c.tone('#c8902a'), { flat: 1 });
        c.E(0.26, 0.28, 0.025, 0.025, c.tone('#ff3fa4')); c.E(0.26, 0.28, 0.012, 0.012, c.tone('#ffffff'), { flat: 1 });
        c.L(0.04, 0.60, 0.12, 0.62, 0.012, P.b, { flat: 1 });
        spark(c, 0.62, 0.30, 0.05, P.glow); spark(c, 0.14, 0.78, 0.04, P.white); spark(c, 0.88, 0.40, 0.035, P.white);
      } },
    { k: 'rose', n: 'Enchanted Rose', sh: 0.22, float: 1, lines: ['Under the glass, one petal falls at a time. There is still time to break the spell.', 'It never wilts, it never fades, and it listens to every wish.'],
      draw: function (c, P, r, o) {
        c.R(0.28, 0.74, 0.72, 0.82, P.wood);
        c.E(0.5, 0.74, 0.22, 0.38, P.glass, { flat: 1 }, true);
        c.L(0.5, 0.40, 0.5, 0.74, 0.03, P.green, { flat: 1 }); c.P([[0.5, 0.60], [0.64, 0.52], [0.56, 0.64]], P.green); c.P([[0.5, 0.66], [0.36, 0.58], [0.44, 0.70]], P.green);
        c.E(0.5, 0.36, 0.11, 0.10, P.a); c.E(0.5, 0.34, 0.06, 0.055, P.a.d, { flat: 1 }); c.E(0.5, 0.33, 0.025, 0.025, P.a.l, { flat: 1 });
        c.E(0.64, 0.66, 0.025, 0.017, P.a, { flat: 1 }); spark(c, 0.40, 0.46, 0.03, P.white);
      } },
    { k: 'lantern', n: 'Lantern', float: 1, sh: 0.18, lines: ['It lights the way home even on the darkest night.', 'The flame inside is older than the village and has never blown out.'],
      draw: function (c, P, r, o) {
        var i;
        c.RG(0.50, 0.08, 0.05, 0.10, c.tone('#2a2a38')); c.R(0.46, 0.14, 0.54, 0.22, c.tone('#2a2a38'));
        c.P([[0.30, 0.28], [0.50, 0.16], [0.70, 0.28]], P.a); c.P([[0.30, 0.28], [0.50, 0.16], [0.50, 0.28]], P.b, { flat: 1 }); c.R(0.28, 0.28, 0.72, 0.34, c.tone('#2a2a38'));
        c.R(0.32, 0.34, 0.68, 0.78, c.tone('#fff4b0')); c.E(0.50, 0.56, 0.20, 0.30, c.tone('#ffe880'), { flat: 1 }); c.E(0.50, 0.58, 0.10, 0.18, c.tone('#fffbe0'), { flat: 1 });
        c.P([[0.50, 0.38], [0.58, 0.54], [0.56, 0.66], [0.50, 0.70], [0.44, 0.66], [0.42, 0.54]], c.tone('#ff8a1f')); c.P([[0.50, 0.46], [0.54, 0.58], [0.50, 0.66], [0.46, 0.58]], c.tone('#ffd23f')); c.P([[0.50, 0.54], [0.52, 0.62], [0.50, 0.66], [0.48, 0.62]], c.tone('#ffffff'));
        for (i = 0; i < 3; i++) c.L(0.40 + i * 0.1, 0.34, 0.40 + i * 0.1, 0.78, 0.016, c.tone('#2a2a38'), { flat: 1 }); c.L(0.32, 0.54, 0.68, 0.54, 0.012, c.tone('#2a2a38'), { flat: 1 });
        c.R(0.28, 0.78, 0.72, 0.86, c.tone('#2a2a38')); c.R(0.34, 0.86, 0.66, 0.92, P.a); c.R(0.28, 0.78, 0.72, 0.80, c.tone('#4a4a60'), { flat: 1 });
        for (i = 0; i < 6; i++) { var a = i * 1.047; c.dot(0.50 + Math.cos(a) * 0.30, 0.56 + Math.sin(a) * 0.30, c.tone('#ffe880'), 1); }
        spark(c, 0.12, 0.40, 0.04, P.glow); spark(c, 0.88, 0.30, 0.04, P.glow); spark(c, 0.84, 0.74, 0.03, P.white);
      } },
    { k: 'dragon', n: 'Dragon', float: 1, sh: 0.22, lines: ['Everyone assumes the dragon is the villain, but he only breathes fire when someone forgets to say please.', 'He guards the cave, the gold and a very good recipe for pepper soup.'],
      draw: function (c, P, r, o) {
        c.mir = true;
        c.P([[0.30, 0.34], [0.18, 0.20], [0.12, 0.06], [0.28, 0.16], [0.40, 0.30]], P.cream);
        c.P([[0.25, 0.50], [0.08, 0.40], [0.12, 0.56], [0.24, 0.62]], P.b);
        c.mir = false;
        c.P([[0.30, 0.28], [0.70, 0.28], [0.78, 0.50], [0.63, 0.62], [0.60, 0.82], [0.40, 0.82], [0.37, 0.62], [0.22, 0.50]], P.a);
        c.R(0.40, 0.64, 0.60, 0.82, P.a.l);
        c.mir = true;
        c.P([[0.30, 0.44], [0.44, 0.48], [0.42, 0.54], [0.31, 0.50]], P.glow, { flat: 1 }); c.R(0.365, 0.46, 0.385, 0.53, P.dark, { flat: 1 });
        c.L(0.27, 0.40, 0.45, 0.46, 0.022, P.a.d, { flat: 1 });
        c.E(0.45, 0.70, 0.016, 0.022, P.dark, { flat: 1 });
        c.P([[0.41, 0.80], [0.45, 0.80], [0.43, 0.88]], P.white, { flat: 1 });
        c.mir = false;
        c.L(0.38, 0.77, 0.62, 0.77, 0.014, P.dark, { flat: 1 });
        c.P([[0.47, 0.32], [0.53, 0.32], [0.5, 0.42]], P.a.d, { flat: 1 });
      } },
    { k: 'frog', n: 'Frog Prince', gy: 0.82, lines: ['One kiss, one crown, one very soggy lily pad. Princes turn up in the strangest places.', 'He is waiting for someone brave, or at least someone who is not afraid of puddles.'],
      draw: function (c, P, r, o) {
        c.E(0.5, 0.80, 0.36, 0.07, P.green.d);
        c.E(0.5, 0.62, 0.30, 0.20, P.green);
        c.E(0.5, 0.70, 0.18, 0.10, P.green.l, { flat: 1 });
        c.mir = true;
        c.E(0.36, 0.44, 0.10, 0.10, P.green); c.E(0.36, 0.44, 0.07, 0.07, P.white, { flat: 1 }); c.E(0.37, 0.45, 0.03, 0.04, P.dark, { flat: 1 });
        c.E(0.25, 0.66, 0.035, 0.025, P.b.l, { flat: 1 });
        c.mir = false;
        c.L(0.30, 0.60, 0.70, 0.60, 0.018, P.dark, { flat: 1 });
        c.P([[0.36, 0.34], [0.36, 0.22], [0.43, 0.29], [0.5, 0.19], [0.57, 0.29], [0.64, 0.22], [0.64, 0.34]], P.gold); c.R(0.36, 0.32, 0.64, 0.37, P.gold);
        c.E(0.5, 0.345, 0.025, 0.025, P.a, { flat: 1 });
      } },
    { k: 'owl', n: 'Owl', gy: 0.84, lines: ['Wise, watchful and a little bit grumpy before breakfast.', 'She has read every book in the forest and still asks who.'],
      draw: function (c, P, r, o) {
        var g = o.gy, i, br = c.tone('#8a6a48'), cr = c.tone('#f0e0c0');
        o.shadow(0.5, g, 0.40, 0.03);
        c.L(0.06, g, 0.94, g - 0.02, 0.045, c.tone('#5a3a1a')); c.L(0.10, g - 0.01, 0.90, g - 0.03, 0.012, c.tone('#8a5a2a'), { flat: 1 });
        c.P([[0.14, g - 0.10], [0.12, 0.36], [0.28, 0.20], [0.72, 0.20], [0.88, 0.36], [0.86, g - 0.10]], br); c.E(0.50, 0.62, 0.30, 0.34, br);
        c.E(0.50, 0.66, 0.20, 0.26, cr); for (i = 0; i < 4; i++) for (var j = 0; j < 3; j++) c.P([[0.38 + j * 0.12, 0.50 + i * 0.1], [0.44 + j * 0.12, 0.56 + i * 0.1], [0.50 + j * 0.12, 0.50 + i * 0.1], [0.44 + j * 0.12, 0.52 + i * 0.1]], c.tone('#c8a878'), { flat: 1 });
        c.P([[0.16, 0.42], [0.08, 0.64], [0.16, g - 0.06], [0.30, 0.76], [0.28, 0.46]], c.tone('#6a4a2a')); c.P([[0.84, 0.42], [0.92, 0.64], [0.84, g - 0.06], [0.70, 0.76], [0.72, 0.46]], c.tone('#6a4a2a'));
        for (i = 0; i < 4; i++) { c.L(0.12 + i * 0.012, 0.50 + i * 0.07, 0.20 + i * 0.012, 0.52 + i * 0.07, 0.01, c.tone('#a88858'), { flat: 1 }); c.L(0.88 - i * 0.012, 0.50 + i * 0.07, 0.80 - i * 0.012, 0.52 + i * 0.07, 0.01, c.tone('#a88858'), { flat: 1 }); }
        c.P([[0.22, 0.26], [0.20, 0.08], [0.38, 0.20]], br); c.P([[0.78, 0.26], [0.80, 0.08], [0.62, 0.20]], br); c.P([[0.24, 0.22], [0.23, 0.13], [0.32, 0.20]], c.tone('#c8a878'), { flat: 1 });
        c.E(0.50, 0.36, 0.30, 0.20, br); c.E(0.34, 0.36, 0.13, 0.13, c.tone('#fff0c8')); c.E(0.66, 0.36, 0.13, 0.13, c.tone('#fff0c8'));
        c.E(0.34, 0.36, 0.09, 0.09, c.tone('#ffc020')); c.E(0.66, 0.36, 0.09, 0.09, c.tone('#ffc020')); c.E(0.34, 0.36, 0.04, 0.05, c.tone('#14101e'), { flat: 1 }); c.E(0.66, 0.36, 0.04, 0.05, c.tone('#14101e'), { flat: 1 }); c.dot(0.32, 0.33, c.c('#ffffff'), 2); c.dot(0.64, 0.33, c.c('#ffffff'), 2);
        c.L(0.22, 0.28, 0.44, 0.31, 0.02, c.tone('#5a3a1a'), { flat: 1 }); c.L(0.78, 0.28, 0.56, 0.31, 0.02, c.tone('#5a3a1a'), { flat: 1 });
        c.P([[0.46, 0.42], [0.54, 0.42], [0.50, 0.52]], c.tone('#ff9a1f')); c.L(0.50, 0.42, 0.50, 0.50, 0.006, c.tone('#c8700a'), { flat: 1 });
        c.E(0.40, g - 0.02, 0.05, 0.03, c.tone('#ff9a1f')); c.E(0.60, g - 0.02, 0.05, 0.03, c.tone('#ff9a1f'));
        spark(c, 0.08, 0.16, 0.04, P.glow); spark(c, 0.92, 0.22, 0.035, P.white);
      } },
    { k: 'cheshire', n: 'Cheshire Cat', float: 1, sh: 0.3, lines: ['The grin arrives first, and the cat follows when he feels like it.', 'Not all who wander are lost, but this one is not telling which way he went.'],
      draw: function (c, P, r, o) {
        c.mir = true; c.P([[0.26, 0.36], [0.22, 0.14], [0.40, 0.28]], P.a); c.P([[0.29, 0.33], [0.27, 0.21], [0.36, 0.29]], P.b, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.50, 0.30, 0.26, P.a);
        c.mir = true; c.L(0.24, 0.40, 0.31, 0.43, 0.025, P.b, { flat: 1 }); c.L(0.22, 0.48, 0.30, 0.49, 0.025, P.b, { flat: 1 }); c.L(0.40, 0.28, 0.42, 0.34, 0.025, P.b, { flat: 1 });
        c.E(0.38, 0.47, 0.065, 0.04, P.glow, { flat: 1 }); c.R(0.375, 0.435, 0.385, 0.505, P.dark, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.56, 0.03, 0.02, P.b.l, { flat: 1 });
        c.E(0.5, 0.63, 0.22, 0.11, P.white, { flat: 1 }); c.E(0.5, 0.555, 0.23, 0.095, P.a, { flat: 1 });
        for (var tk = -2; tk <= 2; tk++) c.R(0.5 + tk * 0.07 - 0.004, 0.62, 0.5 + tk * 0.07 + 0.004, 0.72, P.dark, { flat: 1 });
        c.mir = true; c.L(0.28, 0.58, 0.10, 0.54, 0.01, P.white, { flat: 1 }); c.L(0.28, 0.62, 0.10, 0.66, 0.01, P.white, { flat: 1 }); c.mir = false;
      } },
    { k: 'fox', n: 'Fox', float: 1, sh: 0.3, lines: ['Clever, quick and very polite when he is asking for a favor.', 'He knows three shortcuts and one secret door, and he will trade you one of them.'],
      draw: function (c, P, r, o) {
        var or = c.tone('#e8742a'), cr = c.tone('#fff4e0'), dk = c.tone('#3a2a2a'), i;
        c.P([[0.62, 0.84], [0.86, 0.88], [0.98, 0.70], [0.92, 0.46], [0.78, 0.40], [0.80, 0.58], [0.70, 0.70]], or); c.P([[0.84, 0.46], [0.92, 0.46], [0.98, 0.70], [0.92, 0.80], [0.90, 0.60]], cr);
        c.L(0.74, 0.74, 0.90, 0.54, 0.012, c.tone('#c85a18'), { flat: 1 });
        c.P([[0.26, 0.92], [0.28, 0.58], [0.40, 0.50], [0.62, 0.56], [0.70, 0.76], [0.66, 0.92]], or); c.P([[0.30, 0.92], [0.32, 0.66], [0.44, 0.60], [0.46, 0.92]], cr);
        c.R(0.30, 0.88, 0.38, 0.95, dk); c.R(0.54, 0.88, 0.64, 0.95, dk);
        c.E(0.36, 0.38, 0.24, 0.20, or); c.P([[0.22, 0.38], [0.10, 0.52], [0.36, 0.64], [0.56, 0.54], [0.50, 0.38]], cr); c.P([[0.12, 0.46], [0.36, 0.60], [0.56, 0.50]], cr, { flat: 1 });
        c.P([[0.16, 0.30], [0.12, 0.06], [0.30, 0.20]], or); c.P([[0.50, 0.26], [0.56, 0.04], [0.62, 0.22]], or); c.P([[0.18, 0.26], [0.16, 0.12], [0.26, 0.21]], dk, { flat: 1 }); c.P([[0.52, 0.22], [0.55, 0.11], [0.58, 0.21]], dk, { flat: 1 });
        c.E(0.12, 0.50, 0.035, 0.03, dk); c.dot(0.105, 0.485, c.c('#ffffff'), 1);
        c.E(0.30, 0.40, 0.034, 0.03, c.tone('#fff8a0')); c.L(0.27, 0.40, 0.33, 0.40, 0.018, dk, { flat: 1 }); c.dot(0.29, 0.385, c.c('#ffffff'), 1); c.L(0.26, 0.35, 0.36, 0.37, 0.01, dk, { flat: 1 });
        c.E(0.46, 0.40, 0.03, 0.028, c.tone('#fff8a0')); c.L(0.44, 0.40, 0.48, 0.40, 0.014, dk, { flat: 1 });
        c.L(0.14, 0.54, 0.34, 0.58, 0.008, dk, { flat: 1 }); for (i = 0; i < 3; i++) c.L(0.16, 0.50 + i * 0.01, 0.02, 0.46 + i * 0.04, 0.006, c.tone('#ffffff'), { flat: 1 });
        c.E(0.52, 0.64, 0.05, 0.03, c.tone('#c8321c')); c.L(0.46, 0.60, 0.58, 0.60, 0.018, c.tone('#c8321c'), { flat: 1 });
      } },
    { k: 'butterfly', n: 'Butterfly', float: 1, sh: 0.25, lines: ['Its wings are painted with the colors of a whole summer.', 'It lands only on people who are about to have a good idea.'],
      draw: function (c, P, r, o) {
        var i;
        c.mir = true;
        c.P([[0.46, 0.44], [0.30, 0.18], [0.10, 0.10], [0.04, 0.30], [0.12, 0.50], [0.44, 0.54]], P.a);
        c.P([[0.44, 0.56], [0.16, 0.62], [0.14, 0.82], [0.28, 0.92], [0.40, 0.80], [0.46, 0.66]], P.b);
        c.E(0.20, 0.30, 0.06, 0.06, c.tone('#fff4a0')); c.E(0.20, 0.30, 0.03, 0.03, c.tone('#1a1a40'), { flat: 1 }); c.E(0.28, 0.74, 0.045, 0.045, c.tone('#fff4a0')); c.E(0.28, 0.74, 0.02, 0.02, c.tone('#1a1a40'), { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.08 + i * 0.016, 0.20 + i * 0.05, c.c('#ffffff'), 1);
        c.L(0.44, 0.50, 0.14, 0.14, 0.012, c.tone('#2a1a4a'), { flat: 1 }); c.L(0.44, 0.56, 0.20, 0.70, 0.012, c.tone('#2a1a4a'), { flat: 1 }); c.L(0.44, 0.50, 0.16, 0.46, 0.01, c.tone('#2a1a4a'), { flat: 1 });
        c.mir = false;
        c.E(0.50, 0.54, 0.04, 0.24, c.tone('#2a1a3a')); c.E(0.50, 0.28, 0.05, 0.05, c.tone('#2a1a3a')); c.dot(0.48, 0.27, c.c('#ffffff'), 1); c.dot(0.52, 0.27, c.c('#ffffff'), 1);
        c.L(0.48, 0.25, 0.38, 0.06, 0.008, c.tone('#2a1a3a'), { flat: 1 }); c.L(0.52, 0.25, 0.62, 0.06, 0.008, c.tone('#2a1a3a'), { flat: 1 }); c.E(0.38, 0.06, 0.02, 0.02, c.tone('#2a1a3a')); c.E(0.62, 0.06, 0.02, 0.02, c.tone('#2a1a3a'));
        for (i = 0; i < 4; i++) c.L(0.46, 0.44 + i * 0.07, 0.54, 0.44 + i * 0.07, 0.008, c.tone('#4a3a6a'), { flat: 1 });
        spark(c, 0.10, 0.90, 0.04, P.glow); spark(c, 0.90, 0.20, 0.035, P.white);
      } },
    { k: 'snowflake', n: 'Snowflake', float: 1, sh: 0.2, envs: ['night', 'snow', 'aurora'], lines: ['No two are alike, and this one is the favorite of the north wind.', 'It fell all the way from the clouds just to land here and sparkle.'],
      draw: function (c, P, r, o) {
        var col = c.tone('#e6f6ff');
        for (var k = 0; k < 6; k++) {
          var an = k * Math.PI / 3 - Math.PI / 2, dx = Math.cos(an), dy = Math.sin(an), cx = 0.5, cy = 0.50, L = 0.34;
          c.L(cx, cy, cx + dx * L, cy + dy * L, 0.03, col);
          [0.5, 0.78].forEach(function (f, j) { var bx = cx + dx * L * f, by = cy + dy * L * f, bl = 0.11 - j * 0.04; [-0.8, 0.8].forEach(function (s) { var a2 = an + s; c.L(bx, by, bx + Math.cos(a2) * bl, by + Math.sin(a2) * bl, 0.025, col, { flat: 1 }); }); });
        }
        c.E(0.5, 0.50, 0.05, 0.05, P.glass, { flat: 1 });
      } },
    { k: 'hourglass', n: 'Hourglass', float: 1, sh: 0.2, lines: ['The sand is slow and the story is not. There is just enough time left.', 'Turn it over and a new chapter begins.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.26, 0.20], [0.74, 0.20], [0.74, 0.28], [0.58, 0.46], [0.58, 0.54], [0.74, 0.72], [0.74, 0.80], [0.26, 0.80], [0.26, 0.72], [0.42, 0.54], [0.42, 0.46], [0.26, 0.28]], c.tone('#d8eeff'));
        c.P([[0.30, 0.26], [0.70, 0.26], [0.60, 0.40], [0.52, 0.48], [0.48, 0.48], [0.40, 0.40]], c.tone('#ffd23f')); c.P([[0.30, 0.26], [0.42, 0.26], [0.44, 0.40], [0.40, 0.40]], c.tone('#ffe880'), { flat: 1 });
        c.L(0.50, 0.48, 0.50, 0.66, 0.012, c.tone('#ffd23f'), { flat: 1 });
        c.P([[0.32, 0.76], [0.68, 0.76], [0.62, 0.68], [0.54, 0.58], [0.50, 0.56], [0.46, 0.58], [0.38, 0.68]], c.tone('#ffd23f')); c.P([[0.50, 0.56], [0.62, 0.68], [0.68, 0.76], [0.56, 0.76]], c.tone('#e8b020'), { flat: 1 });
        c.P([[0.28, 0.24], [0.34, 0.30], [0.42, 0.50], [0.36, 0.54]], c.tone('#ffffff'), { flat: 1 });
        c.R(0.20, 0.12, 0.80, 0.20, P.a); c.R(0.20, 0.80, 0.80, 0.88, P.a); c.R(0.20, 0.12, 0.80, 0.14, P.b, { flat: 1 }); c.R(0.20, 0.80, 0.80, 0.82, P.b, { flat: 1 });
        c.L(0.22, 0.20, 0.22, 0.80, 0.025, P.a); c.L(0.78, 0.20, 0.78, 0.80, 0.025, P.a); c.L(0.22, 0.20, 0.22, 0.80, 0.008, P.b, { flat: 1 });
        for (i = 0; i < 4; i++) c.E(0.30 + i * 0.13, 0.84, 0.02, 0.02, P.gold, { flat: 1 });
        spark(c, 0.10, 0.34, 0.04, P.glow); spark(c, 0.90, 0.60, 0.04, P.white);
      } },
    { k: 'watch', n: 'Pocket Watch', float: 1, sh: 0.22, lines: ['It is late, it is very late, and the rabbit has never been this worried.', 'Tick, tock, and a rabbit hole just around the corner.'],
      draw: function (c, P, r, o) {
        c.RG(0.5, 0.18, 0.025, 0.055, P.gold); c.R(0.47, 0.22, 0.53, 0.30, P.gold);
        c.E(0.5, 0.55, 0.26, 0.26, P.gold); c.E(0.5, 0.55, 0.21, 0.21, P.cream, { flat: 1 });
        for (var i = 0; i < 12; i++) { var a = i * Math.PI / 6; c.dot(0.5 + Math.sin(a) * 0.17, 0.55 - Math.cos(a) * 0.17, P.gold.d, 1); }
        c.L(0.5, 0.55, 0.5, 0.42, 0.018, P.dark, { flat: 1 }); c.L(0.5, 0.55, 0.60, 0.60, 0.018, P.a, { flat: 1 }); c.E(0.5, 0.55, 0.02, 0.02, P.dark, { flat: 1 });
      } },
    { k: 'teapot', n: 'Teapot', float: 1, sh: 0.28, lines: ['Tea is served at six o\'clock, and it is always six o\'clock.', 'Pour carefully and keep your cup moving, because the next seat is open.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.74, 0.62], [0.88, 0.40], [0.96, 0.36], [0.96, 0.44], [0.86, 0.56], [0.76, 0.72]], P.a); c.E(0.96, 0.40, 0.03, 0.05, P.b, { flat: 1 });
        c.RG(0.14, 0.58, 0.05, 0.11, P.a); c.RG(0.14, 0.58, 0.035, 0.08, P.b, { flat: 1 });
        c.E(0.46, 0.62, 0.34, 0.28, P.a); c.E(0.34, 0.60, 0.16, 0.22, P.b, { flat: 1 }); c.E(0.46, 0.90, 0.20, 0.04, P.a);
        c.R(0.24, 0.78, 0.68, 0.84, P.b, { flat: 1 });
        c.E(0.46, 0.36, 0.24, 0.07, P.a); c.E(0.46, 0.34, 0.2, 0.05, P.b, { flat: 1 }); c.E(0.46, 0.27, 0.06, 0.05, P.gold); c.E(0.46, 0.22, 0.025, 0.025, P.gold);
        for (i = 0; i < 5; i++) { c.E(0.28 + i * 0.075, 0.62 + (i % 2) * 0.06, 0.028, 0.028, c.tone('#ffffff')); c.dot(0.28 + i * 0.075, 0.62 + (i % 2) * 0.06, P.gold, 2); }
        for (i = 0; i < 6; i++) c.dot(0.26 + i * 0.08, 0.72, c.tone('#ffffff'), 1);
        c.dot(0.34, 0.50, c.c('#ffffff'), 3); c.E(0.30, 0.56, 0.02, 0.05, c.tone('#ffffff'), { flat: 1 });
        spark(c, 0.80, 0.16, 0.04, P.glow); spark(c, 0.06, 0.34, 0.03, P.white);
      } },
    { k: 'hat', n: "Mad Hatter's Hat", float: 1, sh: 0.3, lines: ['It has a price tag, a flower, and a sense of humor of its own.', 'Whoever wears it gets invited to the longest tea party in the world.'],
      draw: function (c, P, r, o) {
        var i;
        c.E(0.50, 0.80, 0.46, 0.10, P.a); c.E(0.50, 0.78, 0.46, 0.08, P.b, { flat: 1, ring: 1 });
        c.P([[0.22, 0.80], [0.24, 0.16], [0.76, 0.16], [0.78, 0.80]], P.a); c.P([[0.22, 0.80], [0.24, 0.16], [0.36, 0.16], [0.34, 0.80]], P.b, { flat: 1 });
        c.E(0.50, 0.16, 0.26, 0.06, P.a); c.E(0.50, 0.15, 0.22, 0.04, c.tone('#ffffff'), { flat: 1, pat: function () { return false; } });
        c.R(0.22, 0.60, 0.78, 0.72, c.tone('#2a2038')); c.R(0.22, 0.60, 0.78, 0.63, c.tone('#4a3a60'), { flat: 1 });
        for (i = 0; i < 7; i++) c.R(0.26 + i * 0.075, 0.62, 0.30 + i * 0.075, 0.70, i % 2 ? c.tone('#ffd23f') : c.tone('#ff3fa4'), { flat: 1 });
        c.R(0.54, 0.38, 0.68, 0.52, c.tone('#fff4d8')); c.R(0.54, 0.38, 0.68, 0.41, c.tone('#ffffff'), { flat: 1 }); c.L(0.56, 0.44, 0.66, 0.44, 0.008, c.tone('#2a2038'), { flat: 1 }); c.L(0.56, 0.48, 0.64, 0.48, 0.008, c.tone('#2a2038'), { flat: 1 }); c.L(0.54, 0.40, 0.50, 0.58, 0.008, c.tone('#c8a060'), { flat: 1 });
        for (i = 0; i < 5; i++) { var a = i * 1.2566 - 1.57; c.E(0.34 + Math.cos(a) * 0.045, 0.52 + Math.sin(a) * 0.045, 0.03, 0.03, c.tone('#ff5fa8')); } c.E(0.34, 0.52, 0.025, 0.025, c.tone('#ffd23f')); c.P([[0.30, 0.54], [0.24, 0.62], [0.34, 0.58]], c.tone('#2fb050'), { flat: 1 });
        c.dot(0.28, 0.30, c.c('#ffffff'), 2); c.L(0.28, 0.24, 0.28, 0.50, 0.012, c.tone('#ffffff'), { flat: 1 });
        spark(c, 0.88, 0.22, 0.04, P.glow); spark(c, 0.10, 0.50, 0.03, P.white);
      } },
    { k: 'beanstalk', n: 'Beanstalk', gy: 0.82, lines: ['It grew overnight, it reaches the clouds, and the view from the top is something else.', 'Climb carefully. The giant is napping, but his snore shakes the leaves.'],
      draw: function (c, P, r, o) {
        var g = o.gy, prev = null;
        for (var y = g; y > 0.30; y -= 0.025) {
          var x = 0.5 + 0.09 * Math.sin((g - y) * 11); if (prev) c.L(prev[0], prev[1], x, y, 0.05, P.green);
          prev = [x, y];
          if (Math.round((g - y) / 0.025) % 3 === 1) { var s = (Math.round((g - y) / 0.025) % 6 === 1) ? 1 : -1; c.E(x + s * 0.09, y - 0.02, 0.07, 0.035, P.green); }
        }
        c.E(0.5, 0.26, 0.22, 0.07, P.white); c.E(0.36, 0.28, 0.12, 0.05, P.white); c.E(0.64, 0.28, 0.12, 0.05, P.white);
        c.R(0.44, 0.12, 0.56, 0.24, P.gold); c.P([[0.43, 0.12], [0.57, 0.12], [0.5, 0.05]], P.a); c.R(0.485, 0.17, 0.515, 0.22, P.glow, { flat: 1 });
      } },
    { k: 'chest', n: 'Treasure Chest', float: 1, sh: 0.3, gy: 0.82, lines: ['It is heavier than it looks and noisier than it should be.', 'X marked the spot, and the map was only a little bit upside down.'],
      draw: function (c, P, r, o) {
        c.R(0.24, 0.50, 0.76, 0.78, P.wood, { pat: o.hi ? function (x, y) { return (x % 8) < 1; } : null });
        c.E(0.5, 0.50, 0.26, 0.17, P.wood, null, true);
        c.R(0.24, 0.50, 0.76, 0.54, P.gold, { flat: 1 });
        c.R(0.24, 0.40, 0.31, 0.78, P.gold); c.R(0.69, 0.40, 0.76, 0.78, P.gold);
        c.R(0.45, 0.48, 0.55, 0.60, P.gold); c.E(0.5, 0.54, 0.014, 0.02, P.dark, { flat: 1 });
        c.E(0.30, 0.82, 0.05, 0.03, P.gold); c.E(0.38, 0.83, 0.04, 0.025, P.gold); c.E(0.74, 0.82, 0.05, 0.03, P.gold);
        spark(c, 0.20, 0.34, 0.04, P.glow); spark(c, 0.82, 0.30, 0.035, P.white);
      } },
    { k: 'sword', n: 'Sword in the Stone', gy: 0.82, lines: ['Many tried and many failed. It was waiting for someone kind.', 'It glows when the right hand is near. Today the whole meadow is glowing.'],
      draw: function (c, P, r, o) {
        var g = o.gy;
        c.E(0.5, g - 0.06, 0.30, 0.10, P.stone); c.R(0.30, g - 0.06, 0.70, g, P.stone);
        c.R(0.475, 0.30, 0.525, 0.70, P.white); c.L(0.5, 0.34, 0.5, 0.66, 0.012, P.stone.d, { flat: 1 });
        c.R(0.38, 0.28, 0.62, 0.33, P.gold); c.R(0.485, 0.12, 0.515, 0.28, P.wood); c.E(0.5, 0.10, 0.035, 0.035, P.gold);
        spark(c, 0.22, 0.30, 0.05, P.glow); spark(c, 0.80, 0.22, 0.04, P.white); spark(c, 0.72, 0.50, 0.03, P.glow);
      } },
    { k: 'lamp', n: 'Genie Lamp', float: 1, sh: 0.3, lines: ['Rub it gently. The wish is the easy part; the three rules are the trick.', 'A curl of smoke, a sparkle of blue, and a voice that says at your service.'],
      draw: function (c, P, r, o) {
        var gd = c.tone('#e8b830'), i;
        for (i = 0; i < 6; i++) { c.E(0.78 - i * 0.02 + Math.sin(i) * 0.04, 0.30 - i * 0.05, 0.05 - i * 0.004, 0.045, i % 2 ? c.tone('#c890ff') : c.tone('#a870f0'), { flat: 1 }); }
        c.P([[0.60, 0.58], [0.72, 0.44], [0.86, 0.38], [0.90, 0.30], [0.96, 0.34], [0.92, 0.46], [0.80, 0.54], [0.70, 0.66]], gd);
        c.E(0.40, 0.66, 0.34, 0.20, gd); c.E(0.34, 0.62, 0.18, 0.12, c.tone('#fff0b0'), { flat: 1 });
        c.R(0.36, 0.42, 0.50, 0.50, gd); c.E(0.43, 0.42, 0.10, 0.045, gd); c.E(0.43, 0.38, 0.05, 0.045, c.tone('#fff0b0')); c.E(0.43, 0.34, 0.03, 0.03, c.tone('#ff3fa4'));
        c.P([[0.12, 0.60], [0.04, 0.46], [0.02, 0.40], [0.10, 0.44], [0.18, 0.54]], gd);
        c.P([[0.26, 0.84], [0.56, 0.84], [0.60, 0.92], [0.22, 0.92]], gd); c.E(0.40, 0.84, 0.18, 0.03, c.tone('#c8902a'), { flat: 1 });
        c.R(0.22, 0.66, 0.60, 0.70, c.tone('#c8902a'), { flat: 1 });
        for (i = 0; i < 5; i++) c.E(0.24 + i * 0.08, 0.68, 0.016, 0.016, [c.tone('#35d8f2'), c.tone('#ff3fa4')][i % 2], { flat: 1 });
        c.E(0.40, 0.58, 0.03, 0.03, c.tone('#35d8f2')); c.L(0.26, 0.76, 0.54, 0.76, 0.008, c.tone('#fff0b0'), { flat: 1 });
        spark(c, 0.10, 0.20, 0.05, P.glow); spark(c, 0.92, 0.70, 0.04, P.white); spark(c, 0.20, 0.30, 0.03, c.tone('#c890ff'));
      } },
    { k: 'cauldron', n: 'Cauldron', gy: 0.84, lines: ['Bubble, bubble, and not too much toad. The soup is almost ready.', 'It smells of sage, mushrooms and mild mischief.'],
      draw: function (c, P, r, o) {
        c.R(0.30, 0.82, 0.70, 0.86, P.wood);
        c.P([[0.28, 0.82], [0.35, 0.68], [0.42, 0.80], [0.5, 0.64], [0.58, 0.80], [0.65, 0.68], [0.72, 0.82]], P.orange); c.P([[0.38, 0.82], [0.5, 0.72], [0.62, 0.82]], P.gold, { flat: 1 });
        c.E(0.5, 0.54, 0.27, 0.22, P.iron); c.R(0.28, 0.76, 0.34, 0.80, P.iron); c.R(0.66, 0.76, 0.72, 0.80, P.iron);
        c.E(0.5, 0.40, 0.27, 0.055, P.iron.d); c.E(0.5, 0.40, 0.23, 0.035, P.green.l, { flat: 1 });
        c.E(0.42, 0.28, 0.04, 0.04, P.green.l, { flat: 1 }); c.E(0.56, 0.22, 0.05, 0.05, P.green.l, { flat: 1 }); c.E(0.50, 0.12, 0.03, 0.03, P.green.l, { flat: 1 });
      } },
    { k: 'rainbow', n: 'Rainbow', envs: ['day', 'meadow', 'dawn'], gy: 0.80, lines: ['It appears after the rain and always ends in a surprise.', 'Seven colors, one sky, and a pot of gold that is mostly gold.'],
      draw: function (c, P, r, o) {
        var g = o.gy, cols = ['#e63946', '#ff8a1f', '#ffd23f', '#3ccf6e', '#2f8fe6', '#6a4bd1'], i;
        for (i = 0; i < cols.length; i++) { var rr = 0.40 - i * 0.045; c.paint(function (cx, cy, r1, r0) { return function (x, y) { var N = c.N, d = Math.sqrt((x - 0.5 * N) * (x - 0.5 * N) + (y - (g + 0.02) * N) * (y - (g + 0.02) * N)); return y <= (g + 0.02) * N && d <= r1 * N && d > r0 * N; }; }(0.5, g, rr, rr - 0.045), [0, 0, c.N, g * c.N], c.c(cols[i]), { flat: 1 }); }
        c.E(0.12, g - 0.02, 0.09, 0.05, P.white, { flat: 1 }); c.E(0.20, g - 0.01, 0.07, 0.04, P.white, { flat: 1 }); c.E(0.88, g - 0.02, 0.09, 0.05, P.white, { flat: 1 }); c.E(0.80, g - 0.01, 0.07, 0.04, P.white, { flat: 1 });
        c.E(0.5, g - 0.03, 0.12, 0.06, P.iron); c.E(0.5, g - 0.07, 0.10, 0.03, P.gold, { flat: 0 });
      } },
    { k: 'fairy', n: 'Fairy', float: 1, sh: 0.2, lines: ['She is as tall as a teacup and twice as brave.', 'Her wand leaves a trail of glitter that the birds follow home.'],
      draw: function (c, P, r, o) {
        function T(cc, h) { return cc.tone(h); }
        var skin = T(c, '#f8d4ae'), i;
        c.mir = true; c.RE(0.30, 0.34, 0.20, 0.10, -0.7, P.b.l, { flat: 1 }); c.RE(0.34, 0.56, 0.14, 0.08, 0.6, P.b.l, { flat: 1 }); c.mir = false;
        c.mir = true; c.RE(0.30, 0.34, 0.14, 0.06, -0.7, T(c, '#ffffff'), { flat: 1 }); c.mir = false;
        c.P([[0.5, 0.46], [0.30, 0.78], [0.70, 0.78]], P.b); c.E(0.5, 0.78, 0.20, 0.03, P.b.l, { flat: 1 });
        c.R(0.44, 0.46, 0.56, 0.56, P.b.l, { flat: 1 }); c.L(0.46, 0.56, 0.54, 0.56, 0.012, P.gold, { flat: 1 });
        c.L(0.46, 0.78, 0.45, 0.92, 0.03, skin, { flat: 1 }); c.L(0.54, 0.78, 0.55, 0.92, 0.03, skin, { flat: 1 });
        c.E(0.45, 0.93, 0.04, 0.02, P.a, { flat: 1 }); c.E(0.55, 0.93, 0.04, 0.02, P.a, { flat: 1 });
        c.L(0.56, 0.50, 0.72, 0.36, 0.03, skin, { flat: 1 }); c.L(0.72, 0.36, 0.80, 0.18, 0.014, P.wood, { flat: 1 }); c.ST(0.81, 0.14, 0.08, 0.035, P.gold, { flat: 1 });
        c.E(0.5, 0.34, 0.11, 0.11, skin); c.E(0.5, 0.25, 0.12, 0.07, T(c, '#e8a040')); c.E(0.5, 0.15, 0.05, 0.045, T(c, '#e8a040')); c.E(0.40, 0.34, 0.04, 0.09, T(c, '#e8a040'));
        c.DM(0.5, 0.20, 0.09, 0.05, P.gold, { flat: 1 });
        c.E(0.46, 0.35, 0.014, 0.02, P.black, { flat: 1 }); c.E(0.54, 0.35, 0.014, 0.02, P.black, { flat: 1 }); c.L(0.47, 0.41, 0.53, 0.41, 0.012, T(c, '#c84a5a'), { flat: 1 });
        c.E(0.43, 0.39, 0.022, 0.014, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.57, 0.39, 0.022, 0.014, T(c, '#ff9aa8'), { flat: 1 });
        for (i = 0; i < 8; i++) c.dot(0.80 - i * 0.045, 0.22 + i * 0.05, c.c(i % 2 ? '#ffe27a' : '#ffffff'), 1);
        spark(c, 0.16, 0.22, 0.04, P.glow); spark(c, 0.18, 0.78, 0.035, P.white); spark(c, 0.86, 0.60, 0.03, P.glow);
      } },
    { k: 'mirror', n: 'Magic Mirror', float: 1, sh: 0.2, gy: 0.84, lines: ['It shows the truth, and it is very polite about it.', 'Ask it a question and you may not like the answer, but it will be right.'],
      draw: function (c, P, r, o) {
        c.E(0.5, 0.50, 0.25, 0.36, P.gold); c.E(0.5, 0.50, 0.20, 0.31, P.glass, { flat: 1 });
        c.L(0.38, 0.38, 0.52, 0.26, 0.04, P.white, { flat: 1 }); c.L(0.34, 0.50, 0.44, 0.42, 0.025, P.white, { flat: 1 });
        c.ST(0.5, 0.10, 0.06, 0.025, P.a, { flat: 0 }); c.R(0.40, 0.84, 0.60, 0.88, P.gold); c.R(0.47, 0.84, 0.53, 0.88, P.gold);
        spark(c, 0.72, 0.30, 0.03, P.white);
      } },
    { k: 'locket', n: 'Heart Locket', float: 1, sh: 0.2, lines: ['Open it and a small song plays. Inside is a very small, very kind secret.', 'It was passed from hand to hand and every hand left a wish inside.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.30, 0.0, 0.46, 0.20, 0.016, c.tone('#e8c060')); c.L(0.70, 0.0, 0.54, 0.20, 0.016, c.tone('#e8c060'));
        for (i = 0; i < 4; i++) { c.E(0.33 + i * 0.04, 0.04 + i * 0.05, 0.015, 0.02, c.tone('#fff0b0'), { flat: 1 }); c.E(0.67 - i * 0.04, 0.04 + i * 0.05, 0.015, 0.02, c.tone('#fff0b0'), { flat: 1 }); }
        c.RG(0.50, 0.19, 0.03, 0.055, c.tone('#e8c060'));
        c.E(0.34, 0.44, 0.24, 0.22, P.a); c.E(0.66, 0.44, 0.24, 0.22, P.a); c.P([[0.12, 0.54], [0.50, 0.96], [0.88, 0.54]], P.a);
        c.E(0.34, 0.44, 0.20, 0.18, P.b, { flat: 1 }); c.E(0.66, 0.44, 0.20, 0.18, P.b, { flat: 1 }); c.P([[0.18, 0.54], [0.50, 0.90], [0.82, 0.54]], P.b, { flat: 1 });
        c.E(0.28, 0.36, 0.06, 0.07, c.tone('#ffffff'), { flat: 1 }); c.dot(0.22, 0.46, c.c('#ffffff'), 2);
        c.E(0.50, 0.56, 0.12, 0.12, c.tone('#e8c060')); c.E(0.50, 0.56, 0.08, 0.08, c.tone('#fff0b0'), { flat: 1 }); c.ST(0.50, 0.56, 0.06, 0.025, c.tone('#e8a020'));
        for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; c.dot(0.50 + Math.cos(a) * 0.24, 0.52 + Math.sin(a) * 0.20, c.c('#fff0b0'), 1); }
        c.L(0.20, 0.46, 0.38, 0.84, 0.01, c.tone('#e8c060'), { flat: 1 }); c.L(0.80, 0.46, 0.62, 0.84, 0.01, c.tone('#e8c060'), { flat: 1 });
        spark(c, 0.10, 0.30, 0.04, P.glow); spark(c, 0.90, 0.62, 0.035, P.white);
      } },
    { k: 'witchhat', n: "Witch's Hat", float: 1, sh: 0.3, lines: ['Pointy, patched and full of stars. The bat who lives in it pays no rent.', 'It tips left in a good mood and right in a bad one.'],
      draw: function (c, P, r, o) {
        c.E(0.5, 0.70, 0.36, 0.08, P.dark);
        c.P([[0.34, 0.70], [0.66, 0.70], [0.58, 0.40], [0.64, 0.14], [0.48, 0.30], [0.42, 0.50]], P.dark);
        c.R(0.34, 0.58, 0.66, 0.68, P.a); c.R(0.46, 0.585, 0.54, 0.675, P.gold, { flat: 1 }); c.R(0.485, 0.60, 0.515, 0.66, P.dark, { flat: 1 });
        c.ST(0.50, 0.45, 0.04, 0.018, P.gold, { flat: 1 }); c.ST(0.55, 0.30, 0.03, 0.013, P.gold, { flat: 1 });
        spark(c, 0.20, 0.38, 0.035, P.glow); spark(c, 0.82, 0.50, 0.035, P.white);
      } },
    { k: 'tree', n: 'Enchanted Tree', gy: 0.84, lines: ['The door in the trunk opens only at twilight.', 'Lanterns hang from every branch, and the owls keep the guest book.'],
      draw: function (c, P, r, o) {
        var i, g = o.gy;
        
        c.P([[0.36, g], [0.42, 0.56], [0.38, 0.40], [0.50, 0.44], [0.62, 0.40], [0.58, 0.56], [0.66, g]], c.tone('#6a4228')); c.P([[0.36, g], [0.42, 0.56], [0.38, 0.40], [0.46, 0.44], [0.44, g]], c.tone('#8a5a38'), { flat: 1 });
        c.P([[0.30, g], [0.36, g - 0.04], [0.40, g]], c.tone('#6a4228'), { flat: 1 }); c.P([[0.62, g], [0.68, g - 0.04], [0.74, g]], c.tone('#6a4228'), { flat: 1 });
        c.E(0.50, 0.24, 0.40, 0.22, P.a); c.E(0.26, 0.34, 0.20, 0.14, P.a); c.E(0.74, 0.34, 0.20, 0.14, P.a); c.E(0.50, 0.14, 0.24, 0.12, P.b, { flat: 1 }); c.E(0.30, 0.30, 0.12, 0.08, P.b, { flat: 1 }); c.E(0.70, 0.30, 0.12, 0.08, P.b, { flat: 1 });
        for (i = 0; i < 12; i++) c.dot(0.12 + (i * 0.17) % 0.78, 0.12 + (i * 0.23) % 0.34, c.tone('#ffffff'), 1);
        c.P([[0.43, g], [0.43, 0.72], [0.50, 0.64], [0.57, 0.72], [0.57, g]], c.tone('#2a1a14')); c.P([[0.46, g], [0.46, 0.74], [0.50, 0.68], [0.54, 0.74], [0.54, g]], c.tone('#ffd23f')); c.dot(0.52, 0.82, c.c('#8a5a1a'), 2);
        var xs = [0.20, 0.34, 0.66, 0.80, 0.50], ys = [0.42, 0.34, 0.36, 0.44, 0.28];
        for (i = 0; i < 5; i++) { c.L(xs[i], ys[i] - 0.06, xs[i], ys[i] - 0.01, 0.008, c.tone('#4a3a2a'), { flat: 1 }); c.E(xs[i], ys[i] + 0.03, 0.03, 0.04, c.tone('#ffd23f')); c.E(xs[i], ys[i] + 0.03, 0.014, 0.022, c.tone('#fffbe0'), { flat: 1 }); }
        c.E(0.60, 0.50, 0.045, 0.05, c.tone('#8a6a4a')); c.dot(0.585, 0.49, c.c('#ffe040'), 2); c.dot(0.615, 0.49, c.c('#ffe040'), 2); c.P([[0.57, 0.46], [0.57, 0.42], [0.60, 0.46]], c.tone('#8a6a4a')); c.P([[0.63, 0.46], [0.63, 0.42], [0.60, 0.46]], c.tone('#8a6a4a'));
        spark(c, 0.08, 0.18, 0.04, P.glow); spark(c, 0.92, 0.12, 0.035, P.white);
      } }
  ];

  function makePalette(c, T) {
    return {
      a: c.tone(T.a), b: c.tone(T.b), gold: c.tone('#ffcc33'), stone: c.tone('#c9ced8'), stoneD: c.tone('#8e96a8'), wood: c.tone('#7a4a21'),
      green: c.tone('#3aa655'), glow: c.tone('#ffe27a'), white: c.tone('#ffffff'), dark: c.tone('#2a1d4a'), cream: c.tone('#f1e3c3'),
      skin: c.tone('#f2c49b'), tan: c.tone('#e8c999'), glass: c.tone('#cfeaff'), orange: c.tone('#ff8a1f'), red: c.tone('#d7263d'),
      gb: c.tone('#c68a4a'), choc: c.tone('#5b3a29'), iron: c.tone('#4a4a5c'),
      ruby: c.tone('#d0103a'), emer: c.tone('#1fbf6a'), silver: c.tone('#c8d0dc'), brick: c.tone('#f2c230'), blue: c.tone('#3b78e8'), black: c.tone('#1b1a22'), pinkS: c.tone('#ffb3c9'), fur: c.tone('#b8793a'), leaf: c.tone('#3f9a4a'), sky: c.tone('#7cc7ff')
    };
  }
  /* patch: allow `P.x.d` / `P.x.l` as plain numbers when passed as a color */
  /* ('bg' string and plain numbers are handled inside Cv._p) */

  /* ---------- color naming ---------- */
  var NAMES = [['Midnight Ink', '#14102a'], ['Raven', '#241f33'], ['Charcoal', '#3a3a4a'], ['Storm Gray', '#6b7590'], ['Pewter', '#8e96a8'], ['Silver', '#c8d0dc'], ['Mist', '#e4e9f2'], ['Snow', '#ffffff'], ['Ivory', '#f6f0dc'],
    ['Poppy Red', '#d7263d'], ['Ruby', '#d0103a'], ['Crimson', '#a3122e'], ['Wine', '#5a1020'], ['Rose', '#d65a85'], ['Blush', '#ffb3c9'], ['Candy Pink', '#ff6fa8'], ['Fuchsia', '#e0338f'], ['Berry', '#8e1b5e'],
    ['Pumpkin', '#ff8a1f'], ['Ember', '#d9480f'], ['Rust', '#a8501a'], ['Apricot', '#ffc09a'], ['Honey', '#f2b84b'], ['Gold', '#e0a800'], ['Brick Gold', '#f2c230'], ['Buttercup', '#ffd23f'], ['Lemon', '#fff27a'], ['Cream', '#fbe6b8'], ['Sand', '#d9b27c'], ['Tan', '#c9a574'],
    ['Chestnut', '#7a4a21'], ['Cocoa', '#5b3a29'], ['Mahogany', '#3e2410'], ['Straw', '#f2d15a'], ['Caramel', '#b8793a'],
    ['Emerald', '#1fbf6a'], ['Jade', '#16a05a'], ['Clover', '#3aa655'], ['Moss', '#4f7a2a'], ['Fern', '#2f7a3a'], ['Forest', '#124a2a'], ['Pine', '#0e2f2d'], ['Lime', '#9be05b'], ['Mint', '#8fe8c1'], ['Pickle', '#6fbf3a'], ['Sage', '#9ab88a'],
    ['Teal', '#17a39f'], ['Lagoon', '#35d8f2'], ['Sky', '#7cc7ff'], ['Cornflower', '#6c9cf0'], ['Sapphire', '#2f6fe0'], ['Royal Blue', '#3b5fd0'], ['Navy', '#14245a'], ['Deep Night', '#0b1040'], ['Ice', '#cfe6fa'], ['Seafoam', '#8de0d0'], ['Steel Blue', '#4b78a8'], ['Denim', '#3b6aa8'],
    ['Violet', '#6a4bd1'], ['Amethyst', '#8e44ad'], ['Plum', '#5a2a6e'], ['Lavender', '#b9a6f0'], ['Orchid', '#c77be0'], ['Indigo', '#4b2f8a'], ['Mauve', '#a87ca8'], ['Grape', '#5d3a8a'], ['Twilight', '#3b1d63']];
  function nameColor(hex, used) {
    var best = null, bd = 1e9;
    NAMES.forEach(function (n) { var d = cdist(hex, n[1]); if (d < bd) { bd = d; best = n; } });
    var nm = best[0], pre = ['Pale ', 'Deep ', 'Soft ', 'Dusky ', 'Bright ', 'Faded '], i = 0, lighter = hexRGB(hex).reduce(function (a, b) { return a + b; }, 0) > hexRGB(best[1]).reduce(function (a, b) { return a + b; }, 0);
    while (used[nm]) { nm = (i === 0 ? (lighter ? 'Pale ' : 'Deep ') : pre[(i + 1) % pre.length]) + best[0]; if (i > 8) nm += ' ' + i; i++; }
    used[nm] = 1; return nm;
  }

  /* ---------- color reduction ---------- */
  function reduce(c, cap) {
    var n = c.pal.length, cnt = new Array(n).fill(0), i, j, remap = [];
    for (i = 0; i < c.px.length; i++) if (c.px[i] >= 0) cnt[c.px[i]]++;
    var alive = []; for (i = 0; i < n; i++) { remap[i] = i; if (cnt[i] > 0) alive.push(i); }
    while (alive.length > cap) {
      var bi = -1, bj = -1, bc = 1e18;
      for (i = 0; i < alive.length; i++) for (j = i + 1; j < alive.length; j++) {
        var a = alive[i], b = alive[j], cost = cdist(c.pal[a], c.pal[b]) * (1 + 0.12 * Math.min(cnt[a], cnt[b]));
        if (cost < bc) { bc = cost; bi = i; bj = j; }
      }
      var A = alive[bi], B = alive[bj], from = cnt[A] < cnt[B] ? A : B, to = from === A ? B : A;
      remap[from] = to; cnt[to] += cnt[from]; cnt[from] = 0; alive.splice(alive.indexOf(from), 1);
    }
    function res(k) { while (remap[k] !== k) k = remap[k]; return k; }
    for (i = 0; i < c.px.length; i++) if (c.px[i] >= 0) c.px[i] = res(c.px[i]);
  }

  /* ---------- categories (books on the shelf) ---------- */
  var CATS = [
    { id: 'oz', name: 'The Yellow Brick Road', tag: 'Oz', sub: 'Tornadoes, scarecrows, slippers and a very green city.', count: 150, emoji: '🌪️', accent: '#2fe6a7' },
    { id: 'beast', name: 'The Enchanted Rose', tag: 'Beauty & the Beast', sub: 'A cursed castle, a candlelit hall and one last petal.', count: 110, emoji: '🌹', accent: '#ff5c9a' },
    { id: 'wonder', name: 'Wonderland', tag: 'Wonderland', sub: 'Down the rabbit hole and through the looking-glass.', count: 160, emoji: '🎩', accent: '#b07cff' },
    { id: 'pan', name: 'Neverland', tag: 'Peter Pan', sub: 'Second to the right and straight on till morning.', count: 110, emoji: '⭐', accent: '#35d8f2' },
    { id: 'classic', name: 'Storybook Classics', tag: 'Classics', sub: 'Glass slippers, wolves, beanstalks and happily ever afters.', count: 190, emoji: '📖', accent: '#ffd23f' },
    { id: 'america', name: 'Tall Tales & Legends', tag: 'American Tales', sub: 'Lumberjacks, lassos and legends from across the States.', count: 130, emoji: '🤠', accent: '#ff8a1f' },
    { id: 'magic', name: 'Realm of Magic', tag: 'Magic', sub: 'Dragons, wizard towers, potions and everything in between.', count: 150, emoji: '🔮', accent: '#8e6bff' }
  ];
  [
    { id: 'xmas', name: 'Christmas Wonderland', tag: 'Christmas', sub: 'Santa, snowmen, stockings, cocoa and a very bright tree.', count: 280, emoji: '🎄', accent: '#ff4d5e', holiday: 1 },
    { id: 'thanks', name: 'Thanksgiving Harvest', tag: 'Thanksgiving', sub: 'Turkeys, pies, pumpkins and a table full of thanks.', count: 200, emoji: '🦃', accent: '#ff9a2a', holiday: 1 },
    { id: 'valentine', name: "Valentine's Day", tag: "Valentine's", sub: 'Roses, hearts, cupids and sweets for someone special.', count: 170, emoji: '💝', accent: '#ff5fa8', holiday: 1 },
    { id: 'july4', name: 'Fourth of July', tag: 'July 4th', sub: 'Fireworks, flags, eagles and a very big picnic.', count: 170, emoji: '🎆', accent: '#4a8aff', holiday: 1 },
    { id: 'halloween', name: 'Halloween Night', tag: 'Halloween', sub: 'Pumpkins, ghosts, bats and just enough spooky.', count: 210, emoji: '🎃', accent: '#ff7a1a', holiday: 1 },
    { id: 'easter', name: 'Easter Spring', tag: 'Easter', sub: 'Bunnies, painted eggs, chicks and spring flowers.', count: 160, emoji: '🐰', accent: '#b88aff', holiday: 1 },
    { id: 'holidays', name: 'More Holidays', tag: 'Holidays', sub: "New Year's, St. Patrick's, Hanukkah, Mother's and Father's Day and more.", count: 190, emoji: '🎉', accent: '#2fd8a8', holiday: 1 }
  ].forEach(function (h) { CATS.push(h); });
  var CATBY = {}; CATS.forEach(function (c) { CATBY[c.id] = c; });
  function register(cat, list) { list.forEach(function (s) { s.cat = cat; SUBJECTS.push(s); }); }

  var catCache = {};
  function catInfo(cat) {
    if (!catCache[cat]) {
      var subs = SUBJECTS.filter(function (s) { return (s.cat || 'magic') === cat; });
      var order = shuffle(subs.map(function (s, i) { return i; }), mulberry(hash('order' + cat)));
      catCache[cat] = { subs: subs, order: order };
    }
    return catCache[cat];
  }
  var HOL_EXTRA = {
    xmas: ['day', 'dawn', 'dusk', 'night', 'storm', 'forest', 'hall', 'snow', 'silent', 'aurora', 'meadow'],
    thanks: ['autumn', 'harvest', 'dusk', 'dawn', 'hall', 'meadow', 'forest', 'day', 'storm', 'night', 'snow'],
    valentine: ['rosy', 'dusk', 'dawn', 'night', 'hall', 'meadow', 'day', 'aurora', 'sea', 'snow', 'forest'],
    july4: ['fireworks', 'day', 'dusk', 'dawn', 'sea', 'meadow', 'night', 'storm', 'desert', 'aurora'],
    halloween: ['night', 'dusk', 'storm', 'forest', 'aurora', 'hall', 'autumn', 'harvest', 'dawn', 'desert'],
    easter: ['dawn', 'meadow', 'day', 'rosy', 'dusk', 'forest', 'sea', 'storm', 'autumn', 'snow'],
    holidays: ENV_KEYS.concat(['silent', 'rosy', 'fireworks', 'harvest'])
  };
  function envsOf(S) { var base = S.envs || ENV_KEYS, ex = HOL_EXTRA[S.cat]; if (!ex || !S.envs) return base; var out = base.slice(); ex.forEach(function (e) { if (out.indexOf(e) < 0) out.push(e); }); return out; }
  function envList(S) { if (!S._envs) S._envs = shuffle(envsOf(S).slice(), mulberry(hash('env' + S.k))); return S._envs; }
  function themeList(S) { if (!S._th) { var a = []; for (var i = 0; i < THEMES.length; i++) a.push(i); S._th = shuffle(a, mulberry(hash('th' + S.k))); } return S._th; }
  function comboList(S) {
    if (!S._combos) { var list = [], envs = envsOf(S); for (var t = 0; t < THEMES.length; t++) for (var e = 0; e < envs.length; e++) list.push([t, envs[e]]); S._combos = shuffle(list, mulberry(hash('combo' + S.k))); }
    return S._combos;
  }
  function plan(cat, j) {
    var ci = catInfo(cat), n = ci.subs.length, S = ci.subs[ci.order[j % n]], rep = Math.floor(j / n), theme, env;
    if (S.fixed) { var es = envList(S); env = es[rep % es.length]; theme = themeList(S)[rep % THEMES.length]; }
    else { var cb = comboList(S)[rep % comboList(S).length]; theme = cb[0]; env = cb[1]; }
    return { S: S, theme: theme, env: env, rep: rep };
  }

  var MARKS = ['fill', 'slash', 'fill', 'back', 'fill', 'star', 'slash', 'back', 'star', 'fill', 'slash', 'back', 'star', 'fill', 'slash', 'back', 'star', 'fill', 'slash', 'back', 'star', 'fill'];
  var KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef';

  function makeTale(cat, j) {
    var pl = plan(cat, j), S = pl.S, T = THEMES[pl.theme], E = ENVS[pl.env], rng = mulberry(hash('tale' + cat + j)), N = 64, hi = true;
    var c = new Cv(N), gy = S.gy || 0.80;
    drawScene(c, E, rng, gy, S);
    c.sj = 1; c.bg = c.px.slice();
    var P = makePalette(c, T);
    S.draw(c, P, rng, { gy: gy, hi: hi, B: brick(N), E: E, shadow: function (cx, cy, rx, ry) { var sj = c.sj; c.sj = 0; c.E(cx, cy, rx, ry, c.c(darken(E.grass[1], 0.35)), { flat: 1 }); c.sj = sj; } });
    c.mir = false;
    c.outline(c.c('#1a1038'));
    c.sj = 0;
    var nf = (E.fire ? 8 : 3) * 3, fcol = c.c(E.fire ? '#fff27a' : '#ffffff');
    for (var i = 0; i < nf; i++) { var fx = rng() < 0.5 ? 0.03 + rng() * 0.13 : 0.84 + rng() * 0.13, fy = 0.2 + rng() * 0.6; c.dot(fx, fy, fcol, 1); }
    if (rng() < 0.35) {
      var fc = c.c('#ffd966'), x, y;
      for (y = 0; y < N; y++) for (x = 0; x < N; x++) if (x < 2 || y < 2 || x >= N - 2 || y >= N - 2) c.px[y * N + x] = fc;
    }
    reduce(c, 30);
    var cnt = {}, k; for (k = 0; k < c.px.length; k++) cnt[c.px[k]] = (cnt[c.px[k]] || 0) + 1;
    var order = Object.keys(cnt).map(Number).sort(function (a, b) { return cnt[b] - cnt[a]; });
    var keyOf = {}, colors = {}, used = {};
    order.forEach(function (pi, r) { var key = KEYS.charAt(r); keyOf[pi] = key; colors[key] = { name: nameColor(c.pal[pi], used), hex: c.pal[pi], mark: 'fill' }; });
    var rows = [];
    for (var y2 = 0; y2 < N; y2++) { var s = ''; for (var x2 = 0; x2 < N; x2++) s += keyOf[c.px[y2 * N + x2]]; rows.push(s); }
    var title = S.fixed ? S.n + ' ' + E.prep : 'The ' + T.adj + ' ' + S.n + ' ' + E.prep;
    var blurb = S.lines[pl.rep % S.lines.length] + ' ' + E.lines[Math.floor(rng() * E.lines.length)];
    return { title: title, blurb: blurb, colors: colors, rows: rows, subject: S.k, env: pl.env, cat: cat };
  }

  /* ---------- the library: 6 pocket tales, then every category as a shelf book ---------- */
  function buildLibrary(pocket) {
    var lib = pocket.map(function (p) { p.cat = 'pocket'; return p; });
    CATS.forEach(function (ct) { for (var j = 0; j < ct.count; j++) lib.push({ id: ct.id + (j + 1), gen: true, cat: ct.id, j: j, size: 64 }); });
    return lib;
  }
  function total() { return CATS.reduce(function (a, c) { return a + c.count; }, 0); }
  root.TaleGen = { makeTale: makeTale, buildLibrary: buildLibrary, CATS: CATS, CATBY: CATBY, SUBJECTS: SUBJECTS, ENV_KEYS: ENV_KEYS, ENVS: ENVS, THEMES: THEMES, plan: plan, total: total, subjectsOf: function (cat) { return catInfo(cat).subs; } };
  root.TaleKit = { register: register, Cv: Cv, spark: spark, brick: brick, lighten: lighten, darken: darken, mix: mix, mulberry: mulberry, hash: hash, pick: pick, face: face };
})(typeof window !== 'undefined' ? window : globalThis);
