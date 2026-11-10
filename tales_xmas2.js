/* Christmas Wonderland, second volume: more hand-built designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var XE = ['snow', 'night', 'aurora', 'dusk', 'hall', 'forest', 'dawn', 'storm', 'silent', 'day', 'meadow'];
  function hl(c, x, y, col) { c.dot(x, y, c.c(col || '#ffffff'), 1); }

  K.register('xmas', [
    { k: 'elf', n: 'Workshop Elf', fixed: 1, envs: XE, hy: 0.36, lines: ['Seven thousand toys by Tuesday and not one complaint.', 'The bells on his hat jingle when he is very busy, which is always.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f6c8a0'), gr = T(c, '#1f9a3a'), rd = T(c, '#d8202c');
        c.P([[0.14, 1.0], [0.86, 1.0], [0.78, 0.70], [0.22, 0.70]], gr); c.R(0.14, 0.86, 0.86, 0.93, T(c, '#1a1a22')); c.R(0.44, 0.86, 0.56, 0.93, T(c, '#ffd23f'));
        c.P([[0.28, 0.70], [0.5, 0.80], [0.72, 0.70], [0.72, 0.74], [0.5, 0.84], [0.28, 0.74]], rd, { flat: 1 }); c.dot(0.5, 0.82, c.c('#ffd23f'), 2);
        c.R(0.44, 0.60, 0.56, 0.72, skin);
        c.E(0.22, 0.44, 0.07, 0.11, skin); c.E(0.78, 0.44, 0.07, 0.11, skin); c.P([[0.18, 0.40], [0.08, 0.30], [0.20, 0.34]], skin); c.P([[0.82, 0.40], [0.92, 0.30], [0.80, 0.34]], skin);
        c.E(0.5, 0.46, 0.25, 0.22, skin);
        c.mir = true; c.E(0.40, 0.44, 0.045, 0.055, P.white, { flat: 1 }); c.E(0.405, 0.445, 0.028, 0.034, T(c, '#2a8a4a'), { flat: 1 }); c.dot(0.405, 0.445, c.c('#0b1a10'), 1); c.L(0.33, 0.37, 0.45, 0.385, 0.018, T(c, '#c8782a'), { flat: 1 }); c.E(0.33, 0.55, 0.05, 0.03, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.52, 0.03, 0.025, T(c, '#e8907a'), { flat: 1 }); c.P([[0.40, 0.58], [0.5, 0.64], [0.60, 0.58], [0.5, 0.60]], T(c, '#8a2030'), { flat: 1 }); c.R(0.46, 0.60, 0.54, 0.62, P.white, { flat: 1 });
        c.P([[0.24, 0.34], [0.76, 0.34], [0.70, 0.22], [0.58, 0.10], [0.80, 0.06], [0.84, 0.14], [0.50, 0.0], [0.30, 0.14]], gr);
        c.R(0.24, 0.30, 0.76, 0.38, T(c, '#ffffff')); c.dot(0.30, 0.34, c.c('#e8e8f0'), 1); c.dot(0.50, 0.34, c.c('#e8e8f0'), 1); c.dot(0.70, 0.34, c.c('#e8e8f0'), 1);
        c.E(0.82, 0.12, 0.04, 0.04, T(c, '#ffd23f')); hl(c, 0.80, 0.10);
      } },
    { k: 'penguin', n: 'Penguin in a Scarf', fixed: 1, envs: ['snow', 'night', 'aurora', 'silent', 'dawn', 'day', 'storm', 'dusk'], gy: 0.9, lines: ['He waddled all the way from the pole for the party.', 'The scarf was knitted by somebody who loves him very much.'],
      draw: function (c, P, r, o) {
        var bk = T(c, '#2a3048');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.5, 0.60, 0.28, 0.34, bk); c.E(0.5, 0.66, 0.19, 0.25, T(c, '#fafcff')); c.E(0.40, 0.56, 0.05, 0.12, T(c, '#e0e8f4'), { flat: 1 });
        c.E(0.22, 0.62, 0.07, 0.17, bk); c.E(0.78, 0.62, 0.07, 0.17, bk);
        c.E(0.38, 0.94, 0.11, 0.04, T(c, '#ff9a1f')); c.E(0.62, 0.94, 0.11, 0.04, T(c, '#ff9a1f'));
        c.E(0.5, 0.30, 0.22, 0.20, bk); c.E(0.5, 0.34, 0.15, 0.13, T(c, '#fafcff'));
        c.mir = true; c.E(0.42, 0.30, 0.04, 0.045, P.white, { flat: 1 }); c.dot(0.42, 0.30, c.c('#0a0a14'), 1); c.mir = false;
        c.P([[0.44, 0.36], [0.56, 0.36], [0.5, 0.46]], T(c, '#ff9a1f'));
        c.R(0.28, 0.50, 0.72, 0.58, T(c, '#d8202c')); c.R(0.28, 0.52, 0.72, 0.54, T(c, '#ffffff'), { flat: 1 }); c.R(0.62, 0.56, 0.72, 0.78, T(c, '#d8202c')); c.R(0.62, 0.62, 0.72, 0.64, T(c, '#ffffff'), { flat: 1 }); c.R(0.62, 0.72, 0.72, 0.74, T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.14, 0.12, 0.07, T(c, '#2a9a4a')); c.E(0.5, 0.08, 0.04, 0.04, T(c, '#ffffff'));
      } },
    { k: 'polarbear', n: 'Polar Bear Cub', fixed: 1, envs: ['snow', 'night', 'aurora', 'silent', 'dawn', 'day', 'storm', 'dusk'], gy: 0.9, hy: 0.4, lines: ['Fluffier than the snow and twice as curious.', 'The ornament he is sniffing is going to be an adventure.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#fafcff'), sh = T(c, '#d6e0f0');
        o.shadow(0.5, 0.94, 0.36, 0.03);
        c.E(0.5, 0.70, 0.30, 0.26, w); c.E(0.5, 0.78, 0.18, 0.14, sh, { flat: 1 }); c.E(0.30, 0.92, 0.09, 0.05, w); c.E(0.70, 0.92, 0.09, 0.05, w);
        c.E(0.5, 0.36, 0.23, 0.21, w); c.E(0.30, 0.20, 0.07, 0.07, w); c.E(0.70, 0.20, 0.07, 0.07, w); c.E(0.30, 0.20, 0.035, 0.035, T(c, '#ffb8c0'), { flat: 1 }); c.E(0.70, 0.20, 0.035, 0.035, T(c, '#ffb8c0'), { flat: 1 });
        c.E(0.5, 0.44, 0.11, 0.08, sh); c.E(0.5, 0.41, 0.045, 0.03, T(c, '#1a1a28'), { flat: 1 }); c.L(0.5, 0.43, 0.5, 0.48, 0.008, T(c, '#1a1a28'), { flat: 1 });
        c.mir = true; c.E(0.40, 0.33, 0.025, 0.03, T(c, '#1a1a28'), { flat: 1 }); c.E(0.34, 0.40, 0.035, 0.022, T(c, '#ffb8c0'), { flat: 1 }); c.mir = false;
        c.P([[0.30, 0.54], [0.5, 0.60], [0.70, 0.54], [0.70, 0.62], [0.5, 0.68], [0.30, 0.62]], T(c, '#d8202c'));
        c.E(0.30, 0.74, 0.06, 0.06, T(c, '#d8202c'), { flat: 1 }); c.dot(0.28, 0.72, c.c('#ffffff'), 1);
        c.E(0.78, 0.74, 0.08, 0.08, T(c, '#2a6ae0')); hl(c, 0.75, 0.71); c.R(0.76, 0.64, 0.80, 0.68, T(c, '#e8b020'));
      } },
    { k: 'candycane', n: 'Candy Cane', fixed: 1, envs: XE, hy: 0.4, lines: ['Peppermint stripes from the crook to the tip.', 'Everybody wants one, and nobody can resist a lick.'],
      draw: function (c, P, r, o) {
        var i, rd = T(c, '#e8202c'), wh = T(c, '#ffffff');
        function stripe(x, y, ang) { c.RE(x, y, 0.045, 0.14, ang, rd, { flat: 1 }); }
        // body: straight shaft plus a round hook, drawn as thick strokes
        c.L(0.32, 0.98, 0.32, 0.34, 0.17, wh);
        for (i = 0; i <= 12; i++) { var a = Math.PI + i * Math.PI / 12; c.E(0.50 + Math.cos(a) * 0.18, 0.34 + Math.sin(a) * 0.20, 0.085, 0.085, wh); }
        c.L(0.68, 0.34, 0.68, 0.46, 0.17, wh);
        for (i = 0; i < 7; i++) { var y = 0.94 - i * 0.095; c.P([[0.235, y], [0.405, y - 0.075], [0.405, y - 0.02], [0.235, y + 0.055]], rd, { flat: 1 }); }
        for (i = 0; i < 5; i++) { var q = Math.PI + 0.1 + i * 0.58, cx = 0.50 + Math.cos(q) * 0.18, cy = 0.34 + Math.sin(q) * 0.20; c.RE(cx, cy, 0.05, 0.095, q + Math.PI / 2 - 0.5, rd, { flat: 1 }); }
        c.P([[0.60, 0.40], [0.76, 0.34], [0.76, 0.40], [0.60, 0.48]], rd, { flat: 1 });
        c.L(0.28, 0.40, 0.28, 0.92, 0.018, T(c, '#fff0f4'), { flat: 1 }); c.dot(0.42, 0.18, c.c('#ffffff'), 2);
        c.P([[0.36, 0.64], [0.56, 0.54], [0.56, 0.62], [0.36, 0.72]], T(c, '#2fa04a')); c.E(0.38, 0.68, 0.05, 0.05, T(c, '#d8102c')); c.E(0.58, 0.60, 0.05, 0.05, T(c, '#d8102c')); c.dot(0.36, 0.66, c.c('#ffffff'), 1);
      } },
    { k: 'holly', n: 'Holly and Berries', fixed: 1, envs: XE, hy: 0.4, lines: ['Prickly leaves and berries as red as a cheerful nose.', 'Hang it over the door and everyone gets a cheer.'],
      draw: function (c, P, r, o) {
        var g = T(c, '#1a8a3a'), g2 = T(c, '#34b858');
        function leaf(cx, cy, ang, s) {
          var pts = [], i, n = 14;
          for (i = 0; i < n; i++) { var t = i / (n - 1), x = (t - 0.5) * 0.44 * s, w = Math.sin(t * Math.PI) * 0.115 * s, sp = (i % 2 ? 0.045 : 0) * s * Math.sin(t * Math.PI); pts.push([x, -w - sp]); }
          for (i = n - 1; i >= 0; i--) { var t2 = i / (n - 1), x2 = (t2 - 0.5) * 0.44 * s, w2 = Math.sin(t2 * Math.PI) * 0.115 * s, sp2 = (i % 2 ? 0.045 : 0) * s * Math.sin(t2 * Math.PI); pts.push([x2, w2 + sp2]); }
          var ca = Math.cos(ang), sa = Math.sin(ang);
          function rot(p) { return [cx + p[0] * ca - p[1] * sa, cy + p[0] * sa + p[1] * ca]; }
          c.P(pts.map(rot), g);
          c.P([[-0.20 * s, 0], [0.0, -0.05 * s], [0.20 * s, 0], [0.0, 0.02 * s]].map(rot), g2, { flat: 1 });
          c.L(rot([-0.21 * s, 0])[0], rot([-0.21 * s, 0])[1], rot([0.21 * s, 0])[0], rot([0.21 * s, 0])[1], 0.01, T(c, '#0e5a24'), { flat: 1 });
        }
        leaf(0.28, 0.34, -0.55, 1.0); leaf(0.72, 0.34, -2.59, 1.0); leaf(0.26, 0.66, 0.5, 0.95); leaf(0.74, 0.66, 2.64, 0.95);
        var b = [[0.44, 0.52], [0.57, 0.52], [0.50, 0.43]];
        for (var i = 0; i < b.length; i++) { c.E(b[i][0], b[i][1], 0.075, 0.075, T(c, '#d8102c')); c.dot(b[i][0] - 0.03, b[i][1] - 0.035, c.c('#ffd0d4'), 1); }
        c.dot(0.50, 0.50, c.c('#7a0818'), 1); c.R(0.46, 0.60, 0.54, 0.74, T(c, '#e83a4a'), { flat: 1 }); c.L(0.5, 0.70, 0.5, 0.90, 0.02, T(c, '#5a3a1a'));
      } },
    { k: 'snowglobe', n: 'Snow Globe', fixed: 1, envs: ['hall', 'night', 'silent', 'snow', 'dusk', 'storm'], gy: 0.92, lines: ['Shake it and the whole little town gets snowy.', 'Inside, it is always Christmas Eve.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.95, 0.36, 0.025);
        c.E(0.5, 0.44, 0.40, 0.40, T(c, '#cfeaff')); c.E(0.5, 0.46, 0.34, 0.34, T(c, '#e8f6ff'), { flat: 1 });
        c.DM(0.5, 0.66, 0.30, 0.14, T(c, '#f4f8ff'), { flat: 1 }); c.R(0.20, 0.64, 0.80, 0.78, T(c, '#f4f8ff'), { flat: 1 });
        c.P([[0.50, 0.26], [0.60, 0.46], [0.56, 0.46], [0.64, 0.58], [0.36, 0.58], [0.44, 0.46], [0.40, 0.46]], T(c, '#1f8a3a')); c.R(0.48, 0.58, 0.52, 0.64, P.wood); c.dot(0.50, 0.24, c.c('#ffd23f'), 2);
        c.R(0.28, 0.54, 0.40, 0.66, T(c, '#a8602a')); c.P([[0.26, 0.54], [0.34, 0.46], [0.42, 0.54]], T(c, '#d8202c')); c.R(0.32, 0.58, 0.36, 0.62, T(c, '#ffe080'), { flat: 1 });
        for (var i = 0; i < 9; i++) c.dot(0.26 + (i * 0.37 % 0.5), 0.24 + (i * 0.23 % 0.34), c.c('#ffffff'), 1);
        c.E(0.34, 0.26, 0.06, 0.04, T(c, '#ffffff'), { flat: 1 });
        c.P([[0.22, 0.80], [0.78, 0.80], [0.84, 0.94], [0.16, 0.94]], T(c, '#8a2a20')); c.R(0.20, 0.78, 0.80, 0.84, T(c, '#b8452a'), { flat: 1 }); c.R(0.22, 0.86, 0.78, 0.88, T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'cookies', n: 'Cookies and Milk', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow', 'dawn'], gy: 0.9, lines: ['A plate of cookies and a glass of milk, left out with a note.', 'By morning there is only one crumb and a thank-you.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.42, 0.03);
        c.E(0.36, 0.84, 0.32, 0.08, T(c, '#fafcff')); c.E(0.36, 0.82, 0.26, 0.05, T(c, '#e0e8f4'), { flat: 1 });
        c.E(0.22, 0.76, 0.12, 0.10, T(c, '#c8863a')); c.E(0.40, 0.74, 0.12, 0.10, T(c, '#d8963e')); c.E(0.30, 0.66, 0.10, 0.09, T(c, '#c8863a'));
        for (i = 0; i < 5; i++) c.dot(0.20 + i * 0.05 + (i % 2) * 0.02, 0.70 + (i % 3) * 0.04, c.c('#4a2a14'), 2);
        c.dot(0.28, 0.62, c.c('#4a2a14'), 2); c.dot(0.40, 0.72, c.c('#e8202c'), 2); c.dot(0.18, 0.78, c.c('#2fa04a'), 2);
        c.P([[0.64, 0.38], [0.92, 0.38], [0.88, 0.90], [0.68, 0.90]], T(c, '#eaf4ff')); c.P([[0.66, 0.52], [0.90, 0.52], [0.88, 0.90], [0.68, 0.90]], T(c, '#ffffff'));
        c.E(0.78, 0.38, 0.14, 0.03, T(c, '#cfe0f4')); c.R(0.68, 0.56, 0.72, 0.84, T(c, '#cfe0f4'), { flat: 1 });
        c.L(0.82, 0.58, 0.92, 0.14, 0.03, T(c, '#e8202c')); c.dot(0.86, 0.42, c.c('#ffffff'), 2); c.dot(0.89, 0.30, c.c('#ffffff'), 2); c.dot(0.91, 0.20, c.c('#ffffff'), 2);
        c.R(0.30, 0.90, 0.44, 0.98, T(c, '#fffbe8'), { flat: 1 }); c.L(0.32, 0.93, 0.42, 0.93, 0.01, T(c, '#c8506a'), { flat: 1 }); c.L(0.32, 0.96, 0.40, 0.96, 0.01, T(c, '#c8506a'), { flat: 1 });
      } },
    { k: 'poinsettia', n: 'Poinsettia', fixed: 1, envs: XE, gy: 0.9, lines: ['Its red leaves are not petals at all, and nobody minds.', 'It sits on the table and makes the whole room feel warm.'],
      draw: function (c, P, r, o) {
        var i, rd = T(c, '#d8102c'), rd2 = T(c, '#f03a4a'), gr = T(c, '#1f8a3a');
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.P([[0.30, 0.74], [0.70, 0.74], [0.64, 0.94], [0.36, 0.94]], T(c, '#c8862a')); c.R(0.26, 0.70, 0.74, 0.78, T(c, '#e8a83a')); c.R(0.30, 0.82, 0.70, 0.86, T(c, '#a8601a'), { flat: 1 });
        for (i = 0; i < 6; i++) { var a = -Math.PI / 2 + i * Math.PI / 3 + 0.25; c.RE(0.5 + Math.cos(a) * 0.20, 0.44 + Math.sin(a) * 0.18, 0.16, 0.07, a, gr); }
        for (i = 0; i < 6; i++) { var b = -Math.PI / 2 + i * Math.PI / 3; c.RE(0.5 + Math.cos(b) * 0.18, 0.40 + Math.sin(b) * 0.17, 0.17, 0.075, b, i % 2 ? rd : rd2); c.L(0.5 + Math.cos(b) * 0.04, 0.40 + Math.sin(b) * 0.04, 0.5 + Math.cos(b) * 0.30, 0.40 + Math.sin(b) * 0.28, 0.008, T(c, '#a00c20'), { flat: 1 }); }
        for (i = 0; i < 5; i++) { var d = i * 1.26; c.E(0.5 + Math.cos(d) * 0.04, 0.40 + Math.sin(d) * 0.04, 0.025, 0.025, T(c, '#ffd23f')); }
      } },
    { k: 'nativity', n: 'Star over the Stable', fixed: 1, envs: ['night', 'silent', 'aurora', 'dusk', 'dawn', 'snow'], gy: 0.92, lines: ['One bright star, a quiet stable and a very small baby.', 'Everyone who followed the light found what they were looking for.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.95, 0.44, 0.03);
        c.ST(0.5, 0.20, 0.16, 0.06, T(c, '#ffe680')); c.L(0.5, 0.30, 0.5, 0.46, 0.05, T(c, '#fff0a0'), { flat: 1 }); c.E(0.5, 0.20, 0.04, 0.04, T(c, '#ffffff'), { flat: 1 });
        c.R(0.14, 0.50, 0.86, 0.92, T(c, '#8a5a2a')); c.P([[0.08, 0.52], [0.5, 0.34], [0.92, 0.52]], T(c, '#c8a050')); for (var i = 0; i < 6; i++) c.L(0.14 + i * 0.12, 0.50, 0.22 + i * 0.1, 0.40, 0.012, T(c, '#a8803a'), { flat: 1 });
        c.R(0.08, 0.50, 0.14, 0.94, P.wood); c.R(0.86, 0.50, 0.92, 0.94, P.wood);
        c.R(0.22, 0.58, 0.78, 0.90, T(c, '#2a1a30'), { flat: 1 });
        c.E(0.5, 0.88, 0.22, 0.04, T(c, '#e8c060')); c.R(0.36, 0.78, 0.64, 0.86, T(c, '#c8923a'));
        c.E(0.5, 0.76, 0.06, 0.05, T(c, '#fdf0e0')); c.E(0.5, 0.80, 0.08, 0.04, T(c, '#fff8e8')); c.E(0.5, 0.80, 0.14, 0.05, T(c, '#ffe080'), { flat: 1 }); spark(c, 0.5, 0.74, 0.1, '#fff6b0');
        c.E(0.28, 0.76, 0.06, 0.07, T(c, '#4a6ac8')); c.E(0.28, 0.68, 0.035, 0.04, T(c, '#f6c8a0')); c.E(0.72, 0.76, 0.06, 0.07, T(c, '#c8506a')); c.E(0.72, 0.68, 0.035, 0.04, T(c, '#f6c8a0'));
      } },
    { k: 'cardinal', n: 'Cardinal on a Branch', fixed: 1, envs: ['snow', 'silent', 'dawn', 'day', 'forest', 'storm', 'dusk'], hy: 0.4, lines: ['A spot of red on a white morning.', 'It sings a short song and the whole yard listens.'],
      draw: function (c, P, r, o) {
        var rd = T(c, '#d8202c');
        c.L(0.02, 0.84, 0.98, 0.76, 0.05, T(c, '#6a4a2a')); c.L(0.78, 0.78, 0.90, 0.62, 0.025, T(c, '#6a4a2a')); c.L(0.20, 0.84, 0.12, 0.70, 0.022, T(c, '#6a4a2a'));
        for (var i = 0; i < 6; i++) { c.E(0.14 + i * 0.14, 0.80 - (i % 2) * 0.02 - 0.0, 0.07, 0.04, T(c, '#ffffff'), { flat: 1 }); }
        c.RE(0.34, 0.70, 0.08, 0.04, 0.5, T(c, '#1f8a3a')); c.RE(0.66, 0.84, 0.08, 0.04, -0.5, T(c, '#1f8a3a')); c.dot(0.36, 0.84, c.c('#d8102c'), 2); c.dot(0.40, 0.86, c.c('#d8102c'), 2);
        c.P([[0.36, 0.56], [0.14, 0.50], [0.22, 0.68], [0.34, 0.66]], T(c, '#a8101c'));
        c.E(0.52, 0.56, 0.24, 0.20, rd); c.E(0.50, 0.62, 0.15, 0.12, T(c, '#e8404a'), { flat: 1 });
        c.E(0.62, 0.34, 0.15, 0.14, rd); c.P([[0.60, 0.24], [0.64, 0.10], [0.72, 0.26]], rd);
        c.E(0.70, 0.34, 0.075, 0.065, T(c, '#1a1a22')); c.P([[0.74, 0.30], [0.86, 0.36], [0.74, 0.42]], T(c, '#ffa020'));
        c.dot(0.66, 0.31, c.c('#ffffff'), 1); c.R(0.46, 0.74, 0.50, 0.80, T(c, '#ff9a1f'), { flat: 1 }); c.R(0.56, 0.74, 0.60, 0.80, T(c, '#ff9a1f'), { flat: 1 });
        c.P([[0.76, 0.58], [0.98, 0.64], [0.78, 0.68]], T(c, '#a8101c'));
      } },
    { k: 'village', n: 'Snowy Village', fixed: 1, envs: ['night', 'silent', 'snow', 'dusk', 'aurora', 'dawn', 'storm'], gy: 0.92, lines: ['Smoke curls from every chimney and a lantern glows in every window.', 'It is the kind of town that has a sleigh bell for a doorbell.'],
      draw: function (c, P, r, o) {
        var g = 0.90;
        function house(x, w, h, wall, roof) { c.R(x, g - h, x + w, g, T(c, wall)); c.P([[x - 0.02, g - h], [x + w / 2, g - h - 0.18], [x + w + 0.02, g - h]], T(c, roof)); c.P([[x - 0.02, g - h], [x + w / 2, g - h - 0.18], [x + w + 0.02, g - h], [x + w, g - h - 0.01], [x + w / 2, g - h - 0.14], [x, g - h - 0.01]], T(c, '#ffffff'), { flat: 1 }); c.R(x + w * 0.2, g - h * 0.62, x + w * 0.4, g - h * 0.36, T(c, '#ffe080'), { flat: 1 }); c.R(x + w * 0.62, g - h * 0.62, x + w * 0.8, g - h * 0.36, T(c, '#ffe080'), { flat: 1 }); c.R(x + w * 0.44, g - h * 0.30, x + w * 0.58, g, T(c, '#8a3a20')); }
        house(0.04, 0.26, 0.30, '#b8502a', '#4a5a8a'); house(0.36, 0.30, 0.38, '#d8a04a', '#8a2a30'); house(0.72, 0.24, 0.28, '#6a8ac8', '#2a6a4a');
        c.R(0.14, 0.40, 0.18, 0.50, T(c, '#8a4a30')); c.R(0.60, 0.34, 0.65, 0.44, T(c, '#8a4a30')); c.E(0.17, 0.34, 0.03, 0.04, T(c, '#e8e8f0'), { flat: 1 }); c.E(0.63, 0.28, 0.03, 0.04, T(c, '#e8e8f0'), { flat: 1 });
        c.L(0.30, 0.96, 0.34, 0.66, 0.012, P.iron); c.E(0.34, 0.64, 0.025, 0.035, T(c, '#ffe080')); c.P([[0.10, 0.96], [0.90, 0.96], [0.80, 0.90], [0.20, 0.90]], T(c, '#f4f8ff'), { flat: 1 });
        c.P([[0.68, 0.90], [0.74, 0.68], [0.80, 0.90]], T(c, '#1f8a3a')); c.P([[0.66, 0.90], [0.74, 0.74], [0.82, 0.90]], T(c, '#2aa84a'), { flat: 1 });
      } },
    { k: 'fireplace', n: 'Fireplace and Stockings', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], gy: 0.92, lines: ['The fire is crackling and the stockings are hung in a row.', 'Somewhere above the chimney, bells.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.06, 0.30, 0.94, 0.98, T(c, '#a84a30'), { pat: o.B }); c.R(0.02, 0.22, 0.98, 0.32, T(c, '#e8d4a0')); c.R(0.02, 0.22, 0.98, 0.25, T(c, '#fff0c8'), { flat: 1 });
        c.R(0.24, 0.46, 0.76, 0.98, T(c, '#1a0e12')); c.DM(0.5, 0.46, 0.26, 0.10, T(c, '#1a0e12'));
        c.L(0.34, 0.96, 0.66, 0.88, 0.07, T(c, '#6a4a2a')); c.L(0.36, 0.88, 0.64, 0.96, 0.07, T(c, '#5a3a1a'));
        c.P([[0.36, 0.90], [0.42, 0.62], [0.48, 0.76], [0.54, 0.54], [0.60, 0.76], [0.66, 0.90]], T(c, '#ff8a1f')); c.P([[0.42, 0.90], [0.48, 0.70], [0.54, 0.80], [0.58, 0.90]], T(c, '#ffd23f'), { flat: 1 }); c.P([[0.47, 0.90], [0.51, 0.78], [0.55, 0.90]], T(c, '#fff6b0'), { flat: 1 });
        var cs = ['#d8202c', '#1f8a3a', '#2a6ae0']; for (i = 0; i < 3; i++) { var x = 0.22 + i * 0.28; c.P([[x, 0.26], [x + 0.10, 0.26], [x + 0.10, 0.12], [x + 0.18, 0.06], [x + 0.20, 0.14], [x + 0.14, 0.20], [x, 0.20]].map(function (p) { return [p[0], p[1] - 0.02]; }), T(c, cs[i])); c.R(x - 0.02, 0.06, x + 0.12, 0.10, T(c, '#ffffff')); }
        c.R(0.02, 0.0, 0.98, 0.05, P.wood);
        c.dot(0.12, 0.46, c.c('#ffd23f'), 2); c.dot(0.86, 0.44, c.c('#ffd23f'), 2);
      } },
    { k: 'letter', n: 'Letter to Santa', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow', 'dawn'], gy: 0.9, lines: ['Dear Santa, I have been very good, mostly.', 'The envelope is sealed with a candy cane sticker and big hopes.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.9, 0.42, 0.03);
        c.R(0.10, 0.30, 0.90, 0.88, T(c, '#fff4e0')); c.P([[0.10, 0.30], [0.5, 0.64], [0.90, 0.30]], T(c, '#ffe4c0')); c.L(0.10, 0.30, 0.5, 0.64, 0.01, T(c, '#c8a070'), { flat: 1 }); c.L(0.90, 0.30, 0.5, 0.64, 0.01, T(c, '#c8a070'), { flat: 1 });
        c.R(0.10, 0.84, 0.90, 0.88, T(c, '#d8202c'), { flat: 1 }); c.R(0.10, 0.30, 0.90, 0.34, T(c, '#1f8a3a'), { flat: 1 });
        c.E(0.5, 0.60, 0.07, 0.07, T(c, '#d8102c')); c.L(0.46, 0.64, 0.54, 0.56, 0.02, T(c, '#ffffff'), { flat: 1 });
        c.R(0.70, 0.40, 0.86, 0.52, T(c, '#ffffff')); c.R(0.72, 0.42, 0.84, 0.50, T(c, '#2a6ae0'), { flat: 1 }); c.dot(0.78, 0.46, c.c('#ffd23f'), 2);
        c.L(0.16, 0.44, 0.40, 0.44, 0.012, T(c, '#2a3a6a'), { flat: 1 });
        c.ST(0.50, 0.14, 0.07, 0.03, T(c, '#ffe680')); hl(c, 0.50, 0.14);
      } },
    { k: 'mittens', n: 'Mittens', envs: ['snow', 'silent', 'dawn', 'day', 'hall', 'dusk', 'night'], lines: ['Knitted by hand and slightly different sizes.', 'The cord means nobody ever loses just one.'],
      draw: function (c, P, r, o) {
        function mitt(x, y, flip) { c.mir = false; var s = flip ? -1 : 1; c.P([[x - 0.14 * s, y + 0.50], [x + 0.14 * s, y + 0.50], [x + 0.16 * s, y + 0.14], [x + 0.08 * s, y + 0.0], [x - 0.06 * s, y + 0.04], [x - 0.16 * s, y + 0.26]], P.a); c.E(x - 0.20 * s, y + 0.30, 0.06, 0.10, P.a); c.R(Math.min(x - 0.15, x + 0.15), y + 0.44, Math.max(x - 0.15, x + 0.15), y + 0.54, P.b); c.R(Math.min(x - 0.15, x + 0.15), y + 0.28, Math.max(x - 0.15, x + 0.15), y + 0.32, P.b, { flat: 1 }); c.R(Math.min(x - 0.15, x + 0.15), y + 0.20, Math.max(x - 0.15, x + 0.15), y + 0.24, P.b, { flat: 1 }); }
        mitt(0.30, 0.30, false); mitt(0.70, 0.30, true);
        c.L(0.30, 0.84, 0.5, 0.96, 0.02, T(c, '#e8e8f0')); c.L(0.70, 0.84, 0.5, 0.96, 0.02, T(c, '#e8e8f0')); c.E(0.5, 0.96, 0.03, 0.03, T(c, '#ffd23f'));
        c.E(0.30, 0.50, 0.04, 0.03, T(c, '#ffffff'), { flat: 1 }); c.E(0.70, 0.50, 0.04, 0.03, T(c, '#ffffff'), { flat: 1 });
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
