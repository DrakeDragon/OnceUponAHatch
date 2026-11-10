/* Fourth of July: original pixel designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var JE = ['fireworks', 'day', 'dusk', 'dawn', 'sea', 'meadow', 'night', 'storm'];
  function star5(c, x, y, r, col) { c.ST(x, y, r, r * 0.45, col); }

  K.register('july4', [
    { k: 'flag', n: 'Waving Flag', fixed: 1, envs: JE, hy: 0.4, lines: ['Thirteen stripes and fifty stars, rippling in the warm wind.', 'It has been flying at parades since before you were born.'],
      draw: function (c, P, r, o) {
        var i, rd = T(c, '#c8202c'), wh = T(c, '#ffffff');
        c.R(0.06, 0.04, 0.12, 1.0, P.wood); c.E(0.09, 0.03, 0.04, 0.03, T(c, '#ffd23f'));
        for (i = 0; i < 7; i++) {
          var y0 = 0.10 + i * 0.11, w = Math.sin(i) * 0.012;
          c.P([[0.12, y0], [0.38, y0 - 0.03], [0.66, y0 + 0.03], [0.94, y0 - 0.01], [0.94, y0 + 0.11], [0.66, y0 + 0.14], [0.38, y0 + 0.08], [0.12, y0 + 0.11]], i % 2 ? wh : rd, { flat: 1 });
        }
        c.P([[0.12, 0.10], [0.50, 0.04], [0.50, 0.50], [0.12, 0.54]], T(c, '#1a3a9a'));
        for (i = 0; i < 12; i++) star5(c, 0.19 + (i % 4) * 0.095, 0.15 + Math.floor(i / 4) * 0.11, 0.032, T(c, '#ffffff'));
        c.P([[0.50, 0.04], [0.66, 0.08], [0.66, 0.20], [0.50, 0.16]], T(c, '#c8202c'), { flat: 1 });
      } },
    { k: 'eagle', n: 'Bald Eagle', fixed: 1, envs: JE, hy: 0.35, lines: ['He rides the wind over every river and field.', 'His look says freedom, and his wingspan agrees.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#5a3a1a'), br2 = T(c, '#7a5226'), wh = T(c, '#fafaff'), i;
        c.mir = true;
        c.P([[0.46, 0.54], [0.30, 0.34], [0.12, 0.22], [0.0, 0.26], [0.04, 0.38], [0.0, 0.46], [0.08, 0.50], [0.04, 0.60], [0.14, 0.62], [0.12, 0.74], [0.24, 0.72], [0.28, 0.82], [0.42, 0.74]], br);
        c.P([[0.44, 0.54], [0.30, 0.40], [0.14, 0.32], [0.14, 0.44], [0.26, 0.52], [0.40, 0.62]], br2, { flat: 1 });
        for (i = 0; i < 5; i++) c.L(0.10 + i * 0.05, 0.52 + i * 0.05, 0.08 + i * 0.05, 0.64 + i * 0.045, 0.014, T(c, '#3a2410'), { flat: 1 });
        c.mir = false;
        c.E(0.5, 0.66, 0.15, 0.25, br); c.E(0.5, 0.70, 0.09, 0.17, br2, { flat: 1 });
        c.P([[0.40, 0.88], [0.5, 1.0], [0.60, 0.88]], wh); c.P([[0.42, 0.88], [0.46, 0.96], [0.5, 0.88]], T(c, '#d8d8ec'), { flat: 1 });
        c.E(0.5, 0.34, 0.17, 0.17, wh); c.P([[0.36, 0.40], [0.64, 0.40], [0.58, 0.56], [0.42, 0.56]], wh);
        c.P([[0.46, 0.30], [0.66, 0.36], [0.60, 0.50], [0.52, 0.52], [0.46, 0.44]], T(c, '#f4b020')); c.P([[0.52, 0.52], [0.60, 0.50], [0.58, 0.56]], T(c, '#c88a10'), { flat: 1 }); c.dot(0.62, 0.38, c.c('#fff0a0'), 1);
        c.mir = true; c.E(0.43, 0.30, 0.035, 0.035, P.white, { flat: 1 }); c.dot(0.43, 0.30, c.c('#111111'), 1); c.L(0.36, 0.25, 0.48, 0.28, 0.025, T(c, '#c8c8dc'), { flat: 1 }); c.mir = false;
        c.R(0.40, 0.90, 0.60, 0.95, T(c, '#f4b020'));
      } },
    { k: 'rocket', n: 'Firework Rocket', fixed: 1, envs: ['fireworks', 'night', 'dusk', 'dawn', 'day', 'sea'], hy: 0.4, lines: ['It whistles up the dark and says its piece in color.', 'The fuse is lit, so everybody take three steps back.'],
      draw: function (c, P, r, o) {
        c.L(0.5, 0.60, 0.5, 1.0, 0.025, P.wood);
        c.R(0.38, 0.36, 0.62, 0.66, T(c, '#c8202c')); c.R(0.38, 0.44, 0.62, 0.52, T(c, '#ffffff'), { flat: 1 }); c.R(0.38, 0.56, 0.62, 0.60, T(c, '#1a3a9a'), { flat: 1 });
        c.P([[0.38, 0.36], [0.5, 0.10], [0.62, 0.36]], T(c, '#1a3a9a')); star5(c, 0.5, 0.26, 0.05, T(c, '#ffffff'));
        c.P([[0.38, 0.60], [0.28, 0.72], [0.38, 0.66]], T(c, '#c8202c')); c.P([[0.62, 0.60], [0.72, 0.72], [0.62, 0.66]], T(c, '#c8202c'));
        c.P([[0.42, 0.66], [0.5, 0.80], [0.58, 0.66]], T(c, '#ffb020')); c.P([[0.46, 0.66], [0.5, 0.74], [0.54, 0.66]], T(c, '#ffffff'), { flat: 1 }); 
      } },
    { k: 'uncle', n: 'Stars and Stripes Hat', fixed: 1, envs: JE, gy: 0.9, lines: ['Tall, striped and covered in stars.', 'It goes to every parade and sits in the front row.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.92, 0.42, 0.03);
        c.E(0.5, 0.84, 0.44, 0.09, T(c, '#1a3a9a'));
        c.P([[0.26, 0.84], [0.30, 0.14], [0.70, 0.14], [0.74, 0.84]], T(c, '#ffffff'));
        for (i = 0; i < 3; i++) c.P([[0.27 + i * 0.0, 0.22 + i * 0.2], [0.73, 0.22 + i * 0.2], [0.74, 0.32 + i * 0.2], [0.27, 0.32 + i * 0.2]], T(c, '#c8202c'), { flat: 1 });
        c.E(0.5, 0.14, 0.20, 0.05, T(c, '#e8e8f0'));
        c.R(0.27, 0.66, 0.73, 0.78, T(c, '#1a3a9a')); for (i = 0; i < 4; i++) star5(c, 0.34 + i * 0.1, 0.72, 0.03, T(c, '#ffffff'));
      } },
    { k: 'bbq', n: 'Backyard Grill', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'fireworks'], gy: 0.92, lines: ['The smoke smells like summer and everybody is hungry.', 'Burgers, dogs and corn on the cob are all on the way.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.95, 0.34, 0.03);
        c.E(0.5, 0.40, 0.30, 0.26, T(c, '#2a2a38')); c.R(0.20, 0.40, 0.80, 0.48, T(c, '#2a2a38')); c.E(0.5, 0.44, 0.30, 0.05, T(c, '#4a4a60'));
        c.E(0.5, 0.30, 0.22, 0.12, T(c, '#3a3a4c'), { flat: 1 }); c.R(0.46, 0.04, 0.54, 0.14, T(c, '#2a2a38'));
        c.L(0.30, 0.50, 0.22, 0.94, 0.03, P.iron); c.L(0.70, 0.50, 0.78, 0.94, 0.03, P.iron); c.L(0.5, 0.52, 0.5, 0.80, 0.025, P.iron);
        c.E(0.5, 0.82, 0.22, 0.05, T(c, '#3a3a4c'));
        c.L(0.82, 0.38, 0.94, 0.22, 0.03, P.iron);
        c.E(0.40, 0.10, 0.04, 0.05, T(c, '#e8e8f0'), { flat: 1 }); c.E(0.60, 0.05, 0.03, 0.04, T(c, '#e8e8f0'), { flat: 1 });
        c.E(0.5, 0.52, 0.16, 0.02, T(c, '#ff6a1a'), { flat: 1 }); c.E(0.40, 0.49, 0.06, 0.02, T(c, '#8a3a1a')); c.E(0.58, 0.49, 0.06, 0.02, T(c, '#8a3a1a'));
      } },
    { k: 'sparkler', n: 'Sparklers', fixed: 1, envs: ['fireworks', 'night', 'dusk', 'dawn', 'sea'], hy: 0.4, lines: ['Write your name in the dark and watch it vanish.', 'The little stars go whoosh and fizz.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.30, 1.0, 0.40, 0.40, 0.025, T(c, '#c8c8d8')); c.L(0.70, 1.0, 0.60, 0.40, 0.025, T(c, '#c8c8d8')); c.L(0.50, 1.0, 0.50, 0.34, 0.025, T(c, '#e8e8f0'));
        var pts = [[0.40, 0.38], [0.60, 0.38], [0.50, 0.32]];
        for (var p = 0; p < 3; p++) { c.ST(pts[p][0], pts[p][1], 0.16, 0.05, T(c, '#fff0a0')); for (i = 0; i < 10; i++) { var a = i * Math.PI * 2 / 10 + p; c.dot(pts[p][0] + Math.cos(a) * 0.21, pts[p][1] + Math.sin(a) * 0.21, c.c(['#ffd23f', '#ff8a2a', '#ffffff'][i % 3]), 2); } c.E(pts[p][0], pts[p][1], 0.03, 0.03, T(c, '#ffffff')); }
      } },
    { k: 'liberty', n: 'Lady Liberty', fixed: 1, envs: JE, hy: 0.4, lines: ['A green lady with a golden torch and a crown of rays.', 'She has been welcoming ships since long before the fireworks.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#5ac8a8'), gd = T(c, '#3a9a82'), i;
        c.P([[0.14, 1.0], [0.86, 1.0], [0.74, 0.74], [0.26, 0.74]], gr); c.P([[0.50, 1.0], [0.62, 0.78], [0.86, 1.0]], gd, { flat: 1 }); c.L(0.30, 1.0, 0.40, 0.76, 0.01, gd, { flat: 1 }); c.L(0.20, 1.0, 0.34, 0.78, 0.01, gd, { flat: 1 });
        c.R(0.42, 0.62, 0.58, 0.76, gr);
        c.E(0.5, 0.46, 0.18, 0.21, gr); c.E(0.5, 0.52, 0.12, 0.13, T(c, '#78e0c0'), { flat: 1 });
        for (i = 0; i < 7; i++) { var a = -Math.PI + 0.15 + i * (Math.PI - 0.3) / 6; c.L(0.5 + Math.cos(a) * 0.19, 0.36 + Math.sin(a) * 0.19, 0.5 + Math.cos(a) * 0.40, 0.36 + Math.sin(a) * 0.38, 0.045, T(c, '#4ab090')); c.dot(0.5 + Math.cos(a) * 0.40, 0.36 + Math.sin(a) * 0.38, c.c('#d0fff0'), 2); }
        c.E(0.5, 0.30, 0.20, 0.07, gd); c.R(0.30, 0.30, 0.70, 0.36, gr, { flat: 1 }); 
        c.mir = true; c.L(0.38, 0.42, 0.46, 0.42, 0.02, gd, { flat: 1 }); c.mir = false; c.L(0.40, 0.55, 0.46, 0.57, 0.014, gd, { flat: 1 }); c.L(0.54, 0.57, 0.60, 0.55, 0.014, gd, { flat: 1 });
        c.dot(0.42, 0.47, c.c('#0e3a30'), 2); c.dot(0.56, 0.47, c.c('#0e3a30'), 2);
        c.R(0.46, 0.50, 0.54, 0.54, T(c, '#4ab090'), { flat: 1 }); c.R(0.45, 0.64, 0.55, 0.68, gd, { flat: 1 });
        c.dot(0.40, 0.84, c.c('#9affe0'), 2);
      } },
    { k: 'watermelon', n: 'Watermelon Slice', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'fireworks'], gy: 0.86, lines: ['Cold, sweet and a little bit sticky.', 'Seed-spitting contests start at noon.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.9, 0.42, 0.03);
        c.P([[0.06, 0.40], [0.94, 0.40], [0.80, 0.78], [0.5, 0.88], [0.20, 0.78]], T(c, '#2a9a3a'));
        c.P([[0.10, 0.42], [0.90, 0.42], [0.76, 0.74], [0.5, 0.82], [0.24, 0.74]], T(c, '#f0f0d0'), { flat: 1 });
        c.P([[0.14, 0.44], [0.86, 0.44], [0.72, 0.70], [0.5, 0.76], [0.28, 0.70]], T(c, '#ff4a5a'));
        c.E(0.5, 0.40, 0.44, 0.05, T(c, '#ff6a78'));
        for (i = 0; i < 7; i++) c.E(0.24 + (i % 4) * 0.17 + (i > 3 ? 0.08 : 0), 0.52 + (i > 3 ? 0.12 : 0), 0.022, 0.034, T(c, '#1a1a22'));
        c.dot(0.30, 0.46, c.c('#ff9aa8'), 1);
      } },
    { k: 'bunting', n: 'Bunting', fixed: 1, envs: JE, lines: ['Red, white and blue flags strung across the street.', 'The whole town is dressed for a party.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#c8202c', '#ffffff', '#1a3a9a'];
        c.L(0.0, 0.14, 0.5, 0.34, 0.012, T(c, '#e8e8f0'), { flat: 1 }); c.L(0.5, 0.34, 1.0, 0.14, 0.012, T(c, '#e8e8f0'), { flat: 1 });
        for (i = 0; i < 8; i++) { var x = 0.06 + i * 0.12, y = x < 0.5 ? 0.14 + x * 0.4 : 0.14 + (1 - x) * 0.4; c.P([[x - 0.05, y], [x + 0.05, y], [x, y + 0.20]], T(c, cs[i % 3])); if (i % 3 === 2) star5(c, x, y + 0.07, 0.025, T(c, '#ffffff')); }
        c.L(0.0, 0.62, 0.5, 0.80, 0.012, T(c, '#e8e8f0'), { flat: 1 }); c.L(0.5, 0.80, 1.0, 0.62, 0.012, T(c, '#e8e8f0'), { flat: 1 });
        for (i = 0; i < 8; i++) { var x2 = 0.06 + i * 0.12, y2 = x2 < 0.5 ? 0.62 + x2 * 0.36 : 0.62 + (1 - x2) * 0.36; c.P([[x2 - 0.05, y2], [x2 + 0.05, y2], [x2, y2 + 0.16]], T(c, cs[(i + 1) % 3])); }
      } },
    { k: 'liberty_bell', n: 'Liberty Bell', fixed: 1, envs: JE, gy: 0.9, lines: ['One crack, and a very loud idea.', 'Ring it and the whole country listens.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.3, 0.03);
        c.R(0.10, 0.08, 0.90, 0.18, P.wood); c.R(0.44, 0.18, 0.56, 0.28, T(c, '#6a4a2a'));
        c.P([[0.38, 0.28], [0.62, 0.28], [0.72, 0.54], [0.90, 0.84], [0.10, 0.84], [0.28, 0.54]], T(c, '#c8923a'));
        c.P([[0.38, 0.28], [0.50, 0.28], [0.50, 0.84], [0.10, 0.84], [0.28, 0.54]], T(c, '#e8b860'), { flat: 1 });
        c.E(0.5, 0.84, 0.40, 0.05, T(c, '#a87a2a')); c.R(0.14, 0.62, 0.86, 0.68, T(c, '#a87a2a'), { flat: 1 }); 
        c.L(0.50, 0.58, 0.46, 0.74, 0.012, T(c, '#4a2a10'), { flat: 1 }); c.L(0.46, 0.74, 0.52, 0.82, 0.01, T(c, '#4a2a10'), { flat: 1 });
        c.E(0.5, 0.92, 0.05, 0.04, T(c, '#6a4a2a'));
      } },
    { k: 'picnic', n: 'Picnic Basket', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'desert'], gy: 0.9, lines: ['Lemonade, sandwiches and a pie that did not survive the walk.', 'The blanket is red and white and the ants have been informed.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.0, 1.0], [0.10, 0.80], [0.94, 0.80], [1.0, 1.0]], T(c, '#ffffff')); for (i = 0; i < 6; i++) c.P([[i * 0.18, 1.0], [0.1 + i * 0.16, 0.80], [0.18 + i * 0.16, 0.80], [0.08 + i * 0.18, 1.0]], T(c, '#c8202c'), { flat: 1 });
        c.R(0.0, 0.80, 1.0, 0.82, T(c, '#e8e8f0'), { flat: 1 });
        c.L(0.20, 0.44, 0.34, 0.14, 0.04, T(c, '#a87028')); c.L(0.80, 0.44, 0.66, 0.14, 0.04, T(c, '#a87028')); c.L(0.34, 0.14, 0.66, 0.14, 0.04, T(c, '#a87028'));
        c.P([[0.16, 0.50], [0.84, 0.50], [0.80, 0.88], [0.20, 0.88]], T(c, '#d8a248')); for (i = 0; i < 6; i++) c.L(0.18, 0.56 + i * 0.055, 0.82, 0.56 + i * 0.055, 0.01, T(c, '#a87028'), { flat: 1 }); for (i = 0; i < 8; i++) c.L(0.22 + i * 0.08, 0.50, 0.22 + i * 0.075, 0.88, 0.008, T(c, '#b88030'), { flat: 1 });
        c.E(0.5, 0.50, 0.36, 0.06, T(c, '#e8b860'));
        c.P([[0.18, 0.50], [0.5, 0.40], [0.82, 0.50], [0.5, 0.56]], T(c, '#ffffff')); c.P([[0.18, 0.50], [0.5, 0.40], [0.5, 0.46]], T(c, '#c8202c'), { flat: 1 }); c.P([[0.82, 0.50], [0.5, 0.40], [0.5, 0.46]], T(c, '#1a3a9a'), { flat: 1 });
        c.R(0.24, 0.30, 0.34, 0.46, T(c, '#c8202c')); c.R(0.64, 0.24, 0.72, 0.46, T(c, '#ffe040')); c.E(0.69, 0.22, 0.045, 0.04, T(c, '#ffd23f')); c.RE(0.50, 0.38, 0.10, 0.04, 0.3, T(c, '#e0a850')); c.E(0.50, 0.36, 0.08, 0.025, T(c, '#2fb050'));
        c.R(0.84, 0.64, 0.94, 0.88, T(c, '#ffe040')); c.R(0.86, 0.58, 0.92, 0.64, T(c, '#ffffff')); c.E(0.12, 0.90, 0.08, 0.06, T(c, '#c8202c')); c.dot(0.10, 0.88, c.c('#ff9aa0'), 1);
        c.R(0.72, 0.90, 0.76, 0.92, T(c, '#2a2a38'), { flat: 1 });
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
