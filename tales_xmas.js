/* Christmas Wonderland: original pixel designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var XE = ['snow', 'night', 'aurora', 'dusk', 'hall', 'forest', 'dawn', 'storm', 'silent'];
  function ball(c, x, y, r, col) { c.E(x, y, r, r, col); c.dot(x - r * 0.35, y - r * 0.35, c.c('#ffffff'), 1); }

  K.register('xmas', [
    { k: 'tree', n: 'Christmas Tree', fixed: 1, envs: XE, lines: ['Every branch holds a little light and a little secret.', 'The star on top can see all the way to the North Pole.'],
      draw: function (c, P, r, o) {
        var g = T(c, '#1f8a3a'), g2 = T(c, '#2aa84a'), i, cols = ['#ff3b4a', '#ffd23f', '#4aa8ff', '#ff8ad8', '#ffffff'];
        o.shadow(0.5, 0.95, 0.30, 0.025);
        c.R(0.45, 0.84, 0.55, 0.95, P.wood);
        c.P([[0.50, 0.14], [0.78, 0.46], [0.68, 0.46], [0.90, 0.72], [0.76, 0.72], [0.96, 0.88], [0.04, 0.88], [0.24, 0.72], [0.10, 0.72], [0.32, 0.46], [0.22, 0.46]], g);
        c.P([[0.50, 0.24], [0.66, 0.46], [0.56, 0.44], [0.50, 0.30]], g2, { flat: 1 });
        c.P([[0.50, 0.50], [0.76, 0.72], [0.58, 0.70]], g2, { flat: 1 });
        c.P([[0.26, 0.04], [0.72, 0.0], [0.5, 0.02]], g2, { flat: 1 });
        // garland
        c.L(0.30, 0.48, 0.70, 0.52, 0.018, T(c, '#ffd23f'), { flat: 1 }); c.L(0.16, 0.74, 0.84, 0.70, 0.018, T(c, '#ffd23f'), { flat: 1 }); c.L(0.14, 0.84, 0.86, 0.82, 0.018, T(c, '#ffd23f'), { flat: 1 });
        var pos = [[0.40, 0.34], [0.58, 0.40], [0.50, 0.56], [0.34, 0.62], [0.66, 0.62], [0.22, 0.80], [0.46, 0.76], [0.64, 0.80], [0.80, 0.82], [0.40, 0.46], [0.56, 0.28]];
        for (i = 0; i < pos.length; i++) ball(c, pos[i][0], pos[i][1], 0.03, T(c, cols[i % 5]));
        c.ST(0.5, 0.10, 0.07, 0.03, T(c, '#ffd23f'));
        spark(c, 0.5, 0.09, 0.07, '#fff6b0');
        c.R(0.12, 0.90, 0.30, 0.99, T(c, '#d0202a')); c.R(0.19, 0.90, 0.23, 0.99, T(c, '#ffd23f'), { flat: 1 });
        c.R(0.68, 0.92, 0.86, 0.99, T(c, '#2a6ae0')); c.R(0.75, 0.92, 0.79, 0.99, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'santa', n: 'Santa Claus', fixed: 1, envs: XE, hy: 0.38, lines: ['He knows who is naughty, who is nice, and who left out extra cookies.', 'His laugh rolls across the rooftops like sleigh bells.'],
      draw: function (c, P, r, o) {
        var red = T(c, '#d8202c'), skin = T(c, '#f4b894'), white = T(c, '#ffffff');
        c.P([[0.06, 1.0], [0.94, 1.0], [0.84, 0.70], [0.16, 0.70]], red); c.R(0.06, 0.86, 0.94, 0.95, T(c, '#1a1a22')); c.R(0.44, 0.86, 0.56, 0.95, T(c, '#ffd23f'));
        c.R(0.14, 0.70, 0.86, 0.76, white);
        c.E(0.5, 0.46, 0.21, 0.19, skin);
        c.E(0.5, 0.66, 0.26, 0.20, white); c.E(0.5, 0.52, 0.12, 0.07, skin);
        c.E(0.5, 0.58, 0.16, 0.06, white);
        c.E(0.31, 0.50, 0.07, 0.07, white); c.E(0.69, 0.50, 0.07, 0.07, white);
        c.mir = true; c.E(0.41, 0.40, 0.03, 0.03, P.white, { flat: 1 }); c.dot(0.41, 0.40, c.c('#10204a'), 1); c.L(0.34, 0.34, 0.46, 0.355, 0.03, white, { flat: 1 }); c.E(0.33, 0.46, 0.04, 0.026, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.04, 0.032, T(c, '#e88a7a'), { flat: 1 });
        c.E(0.5, 0.60, 0.06, 0.025, T(c, '#8a2030'), { flat: 1 });
        c.P([[0.26, 0.34], [0.74, 0.34], [0.70, 0.12], [0.50, 0.02], [0.30, 0.12]], red);
        c.P([[0.66, 0.10], [0.90, 0.24], [0.84, 0.30], [0.64, 0.18]], red); c.E(0.90, 0.28, 0.05, 0.05, white);
        c.R(0.22, 0.30, 0.78, 0.38, white);
      } },
    { k: 'snowman', n: 'Snowman', fixed: 1, envs: XE, gy: 0.92, lines: ['He was built at noon and has been grinning ever since.', 'Nobody dares tell him about spring.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#f4f8ff');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.5, 0.78, 0.28, 0.17, w); c.E(0.5, 0.54, 0.21, 0.15, w); c.E(0.5, 0.33, 0.16, 0.13, w);
        c.L(0.30, 0.52, 0.08, 0.38, 0.02, P.wood); c.L(0.70, 0.52, 0.92, 0.36, 0.02, P.wood); c.L(0.14, 0.42, 0.08, 0.34, 0.012, P.wood);
        c.R(0.30, 0.45, 0.70, 0.52, T(c, '#d8202c')); c.R(0.62, 0.50, 0.72, 0.66, T(c, '#d8202c')); c.R(0.64, 0.58, 0.70, 0.62, T(c, '#ffd23f'), { flat: 1 });
        c.R(0.30, 0.46, 0.70, 0.49, T(c, '#ffffff'), { flat: 1 });
        c.mir = true; c.E(0.42, 0.30, 0.022, 0.022, P.black, { flat: 1 }); c.mir = false;
        c.P([[0.5, 0.33], [0.66, 0.36], [0.5, 0.38]], T(c, '#ff8a1f'), { flat: 1 });
        for (var i = 0; i < 5; i++) c.dot(0.40 + i * 0.05, 0.40 + Math.abs(i - 2) * -0.008 + 0.012 * Math.abs(i - 2), c.c('#222222'), 1);
        c.dot(0.5, 0.60, c.c('#222222'), 2); c.dot(0.5, 0.70, c.c('#222222'), 2); c.dot(0.5, 0.80, c.c('#222222'), 2);
        c.R(0.34, 0.20, 0.66, 0.24, T(c, '#1a1a22')); c.R(0.40, 0.04, 0.60, 0.20, T(c, '#1a1a22')); c.R(0.40, 0.14, 0.60, 0.18, T(c, '#d8202c'), { flat: 1 });
      } },
    { k: 'stocking', n: 'Stocking', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], lines: ['Hung by the chimney with care, and bulging at the toe.', 'Somebody got a tangerine, and somebody got a surprise.'],
      draw: function (c, P, r, o) {
        var rd = T(c, '#d8202c'), wh = T(c, '#ffffff');
        c.R(0.0, 0.0, 1.0, 0.07, P.wood); c.L(0.34, 0.02, 0.34, 0.14, 0.02, T(c, '#ffd23f'), { flat: 1 });
        c.P([[0.30, 0.14], [0.64, 0.14], [0.64, 0.56], [0.92, 0.74], [0.86, 0.94], [0.44, 0.94], [0.20, 0.78], [0.30, 0.70]], rd);
        c.P([[0.62, 0.68], [0.92, 0.76], [0.86, 0.94], [0.50, 0.94], [0.62, 0.84]], wh);
        c.P([[0.30, 0.14], [0.36, 0.14], [0.36, 0.70], [0.30, 0.70]], T(c, '#f03a4a'), { flat: 1 });
        c.R(0.26, 0.12, 0.68, 0.28, wh); c.R(0.26, 0.12, 0.68, 0.16, T(c, '#e8f0ff'), { flat: 1 });
        c.R(0.30, 0.36, 0.62, 0.42, T(c, '#1f8a3a'), { flat: 1 }); c.R(0.30, 0.48, 0.62, 0.54, T(c, '#1f8a3a'), { flat: 1 });
        c.ST(0.46, 0.70, 0.07, 0.03, T(c, '#ffd23f'));
        c.E(0.78, 0.40, 0.07, 0.07, T(c, '#ff8a1f')); c.dot(0.75, 0.37, c.c('#ffd070'), 1); c.P([[0.76, 0.34], [0.82, 0.30], [0.80, 0.36]], T(c, '#2fa04a'), { flat: 1 });
        c.P([[0.84, 0.50], [0.94, 0.44], [0.92, 0.56]], T(c, '#2a6ae0')); c.E(0.88, 0.50, 0.03, 0.03, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'wreath', n: 'Wreath', fixed: 1, envs: ['hall', 'snow', 'silent', 'dusk', 'forest', 'dawn'], lines: ['A circle of evergreen with no beginning and no end.', 'The red bow says come in, come in.'],
      draw: function (c, P, r, o) {
        var i, g = T(c, '#1f8a3a'), g2 = T(c, '#34b858'), g3 = T(c, '#14602a');
        for (i = 0; i < 20; i++) { var a = i * Math.PI * 2 / 20; c.RE(0.5 + Math.cos(a) * 0.33, 0.48 + Math.sin(a) * 0.33, 0.10, 0.06, a + Math.PI / 2 + 0.5, i % 3 === 0 ? g3 : (i % 2 ? g : g2)); }
        for (i = 0; i < 20; i++) { var b = i * Math.PI * 2 / 20 + 0.16; c.RE(0.5 + Math.cos(b) * 0.31, 0.48 + Math.sin(b) * 0.31, 0.08, 0.04, b - Math.PI / 2 - 0.6, i % 2 ? g2 : g); }
        for (i = 0; i < 8; i++) { var d = i * Math.PI * 2 / 8 + 0.3; c.E(0.5 + Math.cos(d) * 0.33, 0.48 + Math.sin(d) * 0.33, 0.035, 0.035, T(c, '#e8202c')); c.dot(0.5 + Math.cos(d) * 0.33 - 0.012, 0.48 + Math.sin(d) * 0.33 - 0.012, c.c('#ffffff'), 1); }
        for (i = 0; i < 6; i++) { var e = i * Math.PI / 3 + 0.9; c.E(0.5 + Math.cos(e) * 0.33, 0.48 + Math.sin(e) * 0.33, 0.022, 0.022, T(c, '#ffd23f')); }
        c.P([[0.50, 0.84], [0.28, 0.98], [0.30, 0.76]], T(c, '#d8202c')); c.P([[0.50, 0.84], [0.72, 0.98], [0.70, 0.76]], T(c, '#d8202c'));
        c.P([[0.50, 0.84], [0.34, 0.92], [0.34, 0.82]], T(c, '#f03a4a'), { flat: 1 }); c.P([[0.50, 0.84], [0.66, 0.92], [0.66, 0.82]], T(c, '#f03a4a'), { flat: 1 });
        c.P([[0.44, 0.78], [0.56, 0.78], [0.58, 0.90], [0.42, 0.90]], T(c, '#a81822')); c.E(0.5, 0.84, 0.06, 0.05, T(c, '#d8202c')); c.dot(0.48, 0.82, c.c('#ff8090'), 1);
      } },
    { k: 'gingerhouse', n: 'Gingerbread House', fixed: 1, envs: XE, gy: 0.92, lines: ['The walls are gingerbread and the windows are sugar glass.', 'Nobody has ever walked past without nibbling a shingle.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#a8602a'), br2 = T(c, '#8a481c'), ic = T(c, '#ffffff'), i;
        o.shadow(0.5, 0.94, 0.40, 0.03);
        c.R(0.14, 0.50, 0.86, 0.92, br);
        c.P([[0.06, 0.52], [0.50, 0.14], [0.94, 0.52]], br2);
        c.P([[0.06, 0.52], [0.50, 0.14], [0.94, 0.52], [0.90, 0.52], [0.50, 0.20], [0.10, 0.52]], ic, { flat: 1 });
        for (i = 0; i < 6; i++) c.E(0.18 + i * 0.13, 0.52 + (i % 2) * 0.02, 0.04, 0.035, ic);
        c.R(0.66, 0.16, 0.76, 0.34, br2); c.R(0.64, 0.14, 0.78, 0.18, ic);
        c.R(0.42, 0.68, 0.58, 0.92, T(c, '#d8202c')); c.dot(0.55, 0.80, c.c('#ffd23f'), 1);
        c.R(0.20, 0.62, 0.34, 0.76, T(c, '#ffe08a')); c.R(0.66, 0.62, 0.80, 0.76, T(c, '#ffe08a'));
        c.L(0.27, 0.62, 0.27, 0.76, 0.01, ic, { flat: 1 }); c.L(0.73, 0.62, 0.73, 0.76, 0.01, ic, { flat: 1 });
        var gc = ['#ff3b4a', '#4aa8ff', '#2fc060', '#ffd23f'];
        for (i = 0; i < 5; i++) c.E(0.30 + i * 0.1, 0.40 - Math.abs(i - 2) * 0.07 + 0.14, 0.022, 0.022, T(c, gc[i % 4]));
        c.L(0.06, 0.94, 0.94, 0.94, 0.03, T(c, '#f4f8ff'), { flat: 1 });
        c.L(0.82, 0.94, 0.82, 0.80, 0.02, T(c, '#ff3b4a'), { flat: 1 }); c.L(0.88, 0.94, 0.88, 0.80, 0.02, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'reindeer', n: 'Reindeer', fixed: 1, envs: XE, gy: 0.86, hy: 0.36, lines: ['His nose glows like a lantern in the fog.', 'He is nervous about flying but brave about it.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#94602e'), dk = T(c, '#6a4220'), cr = T(c, '#efd9a8'), i;
        o.shadow(0.5, 0.95, 0.36, 0.03);
        // legs
        c.L(0.36, 0.70, 0.34, 0.92, 0.075, dk); c.L(0.46, 0.72, 0.46, 0.92, 0.075, br); c.L(0.64, 0.72, 0.64, 0.92, 0.075, dk); c.L(0.74, 0.70, 0.76, 0.92, 0.075, br);
        for (i = 0; i < 4; i++) c.R([0.30, 0.42, 0.60, 0.72][i], 0.90, [0.38, 0.50, 0.68, 0.80][i], 0.94, T(c, '#1a1a22'));
        // body
        c.E(0.56, 0.62, 0.31, 0.17, br); c.E(0.52, 0.69, 0.19, 0.08, cr, { flat: 1 }); c.P([[0.84, 0.56], [0.94, 0.50], [0.90, 0.64]], br); c.E(0.90, 0.57, 0.04, 0.03, T(c, '#fff0e0'), { flat: 1 });
        // neck + head
        c.P([[0.34, 0.56], [0.40, 0.44], [0.30, 0.34], [0.20, 0.44], [0.26, 0.60]], br); c.E(0.30, 0.50, 0.06, 0.1, cr, { flat: 1 });
        c.E(0.20, 0.34, 0.11, 0.09, br); c.E(0.10, 0.40, 0.08, 0.055, br); c.E(0.05, 0.40, 0.04, 0.04, T(c, '#ff2a2a')); c.dot(0.04, 0.385, c.c('#ffffff'), 1); spark(c, 0.05, 0.40, 0.08, '#ff8080');
        c.E(0.26, 0.28, 0.04, 0.06, br); c.E(0.26, 0.28, 0.02, 0.035, T(c, '#e8a0a0'), { flat: 1 });
        c.E(0.19, 0.32, 0.02, 0.025, T(c, '#ffffff'), { flat: 1 }); c.dot(0.19, 0.32, c.c('#111111'), 1);
        // antlers
        c.L(0.20, 0.26, 0.18, 0.08, 0.022, cr); c.L(0.19, 0.18, 0.08, 0.10, 0.018, cr); c.L(0.19, 0.14, 0.28, 0.06, 0.018, cr); c.L(0.18, 0.12, 0.12, 0.04, 0.014, cr);
        c.L(0.26, 0.26, 0.36, 0.10, 0.022, cr); c.L(0.33, 0.16, 0.44, 0.12, 0.018, cr); c.L(0.31, 0.19, 0.24, 0.12, 0.016, cr); c.L(0.35, 0.12, 0.38, 0.04, 0.014, cr);
        // collar & bell
        c.P([[0.26, 0.50], [0.38, 0.52], [0.36, 0.58], [0.24, 0.56]], T(c, '#d8202c')); c.E(0.30, 0.59, 0.03, 0.03, T(c, '#ffd23f'));
        // saddle blanket
        c.P([[0.50, 0.50], [0.70, 0.52], [0.68, 0.66], [0.52, 0.64]], T(c, '#2a9a4a')); c.R(0.50, 0.54, 0.70, 0.56, T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'gift', n: 'Gift', envs: ['hall', 'snow', 'silent', 'dusk', 'night', 'forest'], gy: 0.90, lines: ['Wrapped so well that nobody can guess what is inside.', 'The ribbon was tied with three tries and one sigh.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.38, 0.03);
        c.R(0.14, 0.40, 0.86, 0.92, P.a);
        c.R(0.10, 0.30, 0.90, 0.44, P.b);
        c.R(0.44, 0.30, 0.56, 0.92, T(c, '#ffd23f'));
        c.E(0.40, 0.20, 0.12, 0.09, T(c, '#ffd23f')); c.E(0.60, 0.20, 0.12, 0.09, T(c, '#ffd23f')); c.E(0.40, 0.20, 0.05, 0.04, P.a, { flat: 1 }); c.E(0.60, 0.20, 0.05, 0.04, P.a, { flat: 1 });
        c.E(0.5, 0.26, 0.05, 0.05, T(c, '#e8b020'));
        c.L(0.5, 0.30, 0.34, 0.08, 0.012, T(c, '#ffd23f'), { flat: 1 }); c.L(0.5, 0.30, 0.66, 0.08, 0.012, T(c, '#ffd23f'), { flat: 1 });
        c.dot(0.26, 0.56, c.c('#ffffff'), 1); c.dot(0.72, 0.70, c.c('#ffffff'), 1); c.dot(0.30, 0.80, c.c('#ffffff'), 1);
      } },
    { k: 'ornament', n: 'Ornament', envs: ['hall', 'snow', 'silent', 'night', 'forest', 'aurora'], lines: ['It has hung on the tree since before anyone can remember.', 'If you look closely, the whole room is reflected in it.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.5, 0.0, 0.5, 0.16, 0.012, T(c, '#e8e8f0'), { flat: 1 });
        c.R(0.43, 0.14, 0.57, 0.26, T(c, '#e8b020')); c.R(0.43, 0.14, 0.57, 0.17, T(c, '#fff0a0'), { flat: 1 }); c.E(0.5, 0.15, 0.05, 0.025, T(c, '#c89018'), { flat: 1 });
        c.E(0.5, 0.60, 0.36, 0.34, P.a);
        c.RG(0.5, 0.60, 0.23, 0.26, P.b, { flat: 1 });
        for (i = 0; i < 6; i++) { var a = i * Math.PI / 3; c.E(0.5 + Math.cos(a) * 0.16, 0.60 + Math.sin(a) * 0.15, 0.05, 0.05, P.b, { flat: 1 }); }
        c.ST(0.5, 0.60, 0.14, 0.06, T(c, '#ffe680'));
        c.E(0.5, 0.60, 0.04, 0.04, P.b, { flat: 1 });
        c.E(0.35, 0.44, 0.08, 0.045, T(c, '#ffffff'), { flat: 1 }); c.dot(0.30, 0.52, c.c('#ffffff'), 1); c.dot(0.66, 0.78, c.c('#ffffff'), 1);
      } },
    { k: 'cocoa', n: 'Cocoa Mug', fixed: 1, envs: ['hall', 'snow', 'silent', 'night', 'dusk', 'storm'], gy: 0.88, lines: ['Hot cocoa with marshmallows, the way the winter intended.', 'A candy cane is the only spoon it needs.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.34, 0.03);
        c.R(0.22, 0.38, 0.72, 0.88, T(c, '#d8202c')); c.R(0.22, 0.54, 0.72, 0.60, T(c, '#ffffff'), { flat: 1 }); c.R(0.22, 0.70, 0.72, 0.76, T(c, '#ffffff'), { flat: 1 });
        c.E(0.47, 0.88, 0.25, 0.04, T(c, '#a81822'));
        c.L(0.74, 0.46, 0.90, 0.52, 0.045, T(c, '#d8202c')); c.L(0.90, 0.52, 0.86, 0.72, 0.045, T(c, '#d8202c')); c.L(0.86, 0.72, 0.72, 0.76, 0.045, T(c, '#d8202c'));
        c.E(0.47, 0.38, 0.25, 0.06, T(c, '#5a2a14'));
        c.E(0.38, 0.35, 0.06, 0.05, T(c, '#ffffff')); c.E(0.52, 0.34, 0.06, 0.05, T(c, '#ffffff')); c.E(0.60, 0.37, 0.05, 0.04, T(c, '#ffffff'));
        c.L(0.56, 0.36, 0.76, 0.06, 0.035, T(c, '#ffffff')); for (var i = 0; i < 4; i++) c.dot(0.60 + i * 0.045, 0.30 - i * 0.07, c.c('#e8202c'), 2);
        c.P([[0.34, 0.26], [0.30, 0.16], [0.36, 0.08]], T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'sleigh', n: 'Sleigh', fixed: 1, envs: ['snow', 'night', 'aurora', 'silent', 'dusk', 'storm', 'dawn'], gy: 0.84, lines: ['It carries more presents than seem possible.', 'The runners hum when it flies.'],
      draw: function (c, P, r, o) {
        var rd = T(c, '#d8202c'), i;
        o.shadow(0.5, 0.94, 0.42, 0.025);
        // sack of gifts
        c.E(0.46, 0.34, 0.26, 0.22, T(c, '#a8602a')); c.E(0.40, 0.30, 0.16, 0.14, T(c, '#c8803a'), { flat: 1 }); c.R(0.28, 0.22, 0.60, 0.30, T(c, '#8a4a1f'), { flat: 1 });
        c.R(0.24, 0.20, 0.34, 0.38, T(c, '#2a6ae0')); c.R(0.28, 0.20, 0.30, 0.38, T(c, '#ffffff'), { flat: 1 }); c.R(0.54, 0.14, 0.66, 0.36, T(c, '#2fb050')); c.R(0.59, 0.14, 0.61, 0.36, T(c, '#ffd23f'), { flat: 1 });
        c.R(0.66, 0.24, 0.76, 0.38, T(c, '#ffd23f')); c.R(0.70, 0.24, 0.72, 0.38, T(c, '#d8202c'), { flat: 1 });
        // body
        c.P([[0.10, 0.44], [0.30, 0.42], [0.86, 0.44], [0.92, 0.30], [0.99, 0.26], [0.98, 0.52], [0.90, 0.70], [0.70, 0.78], [0.22, 0.78], [0.10, 0.62]], rd);
        c.P([[0.14, 0.64], [0.88, 0.66], [0.80, 0.76], [0.70, 0.78], [0.22, 0.78]], T(c, '#a81822'), { flat: 1 });
        c.R(0.10, 0.52, 0.96, 0.57, T(c, '#ffd23f'), { flat: 1 }); c.R(0.10, 0.52, 0.96, 0.53, T(c, '#fff0a0'), { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.20 + i * 0.12, 0.66, c.c('#ffd23f'), 2);
        c.E(0.97, 0.28, 0.035, 0.05, T(c, '#ffd23f'));
        // runners
        c.L(0.04, 0.90, 0.84, 0.90, 0.03, T(c, '#d0d0e0')); c.E(0.06, 0.86, 0.045, 0.06, T(c, '#d0d0e0')); c.L(0.18, 0.90, 0.20, 0.76, 0.022, T(c, '#a0a0b8')); c.L(0.62, 0.90, 0.64, 0.78, 0.022, T(c, '#a0a0b8'));
        c.L(0.84, 0.90, 0.98, 0.84, 0.02, T(c, '#d0d0e0'));
        for (i = 0; i < 4; i++) c.dot(0.80 + i * 0.045, 0.86 - i * 0.012, c.c('#ffd23f'), 1);
      } },
    { k: 'angel', n: 'Angel', fixed: 1, envs: ['silent', 'night', 'aurora', 'dusk', 'snow', 'dawn'], hy: 0.3, lines: ['She sings so softly the snow slows down to listen.', 'Her wings are made of starlight and one very tidy feather.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8c8a4'), hair = T(c, '#f4c84a'), robe = T(c, '#ffffff');
        c.mir = true; c.P([[0.40, 0.56], [0.06, 0.30], [0.02, 0.54], [0.10, 0.70], [0.30, 0.74]], T(c, '#e8f0ff')); c.P([[0.38, 0.60], [0.12, 0.42], [0.10, 0.56]], T(c, '#ffffff'), { flat: 1 }); c.mir = false;
        c.P([[0.30, 1.0], [0.70, 1.0], [0.62, 0.58], [0.38, 0.58]], robe); c.R(0.44, 0.60, 0.56, 0.68, skin);
        c.P([[0.38, 0.62], [0.50, 0.66], [0.62, 0.62], [0.62, 0.70], [0.38, 0.70]], T(c, '#ffd23f'), { flat: 1 });
        c.E(0.5, 0.40, 0.17, 0.17, hair); c.E(0.5, 0.42, 0.14, 0.14, skin);
        c.mir = true; c.E(0.43, 0.43, 0.02, 0.02, P.black, { flat: 1 }); c.E(0.38, 0.49, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false;
        c.L(0.46, 0.51, 0.54, 0.51, 0.01, T(c, '#c05a5a'), { flat: 1 });
        c.E(0.5, 0.17, 0.17, 0.04, T(c, '#ffd23f')); c.E(0.5, 0.17, 0.11, 0.018, T(c, '#fff6b0'), { flat: 1 });
      } },
    { k: 'nutcracker', n: 'Nutcracker', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], hy: 0.3, lines: ['He stands guard over the sugar plums.', 'At midnight, the legend goes, he marches.'],
      draw: function (c, P, r, o) {
        var red = T(c, '#d8202c'), skin = T(c, '#f4c4a0');
        c.R(0.30, 0.96, 0.70, 1.0, T(c, '#5a3a14')); c.R(0.34, 0.84, 0.46, 0.96, T(c, '#1a1a22')); c.R(0.54, 0.84, 0.66, 0.96, T(c, '#1a1a22'));
        c.R(0.30, 0.50, 0.70, 0.86, red); c.R(0.30, 0.62, 0.70, 0.66, T(c, '#ffd23f'), { flat: 1 }); c.R(0.30, 0.74, 0.70, 0.78, T(c, '#1a1a22'), { flat: 1 });
        c.dot(0.40, 0.56, c.c('#ffd23f'), 2); c.dot(0.60, 0.56, c.c('#ffd23f'), 2);
        c.R(0.16, 0.52, 0.30, 0.76, red); c.R(0.70, 0.52, 0.84, 0.76, red); c.E(0.23, 0.78, 0.05, 0.04, T(c, '#ffffff')); c.E(0.77, 0.78, 0.05, 0.04, T(c, '#ffffff'));
        c.L(0.84, 0.76, 0.92, 0.40, 0.02, P.wood); c.E(0.92, 0.38, 0.04, 0.04, T(c, '#ffd23f'));
        c.E(0.5, 0.38, 0.18, 0.15, skin); c.E(0.5, 0.52, 0.16, 0.06, T(c, '#f0f0f8'));
        c.mir = true; c.E(0.43, 0.36, 0.03, 0.03, P.white, { flat: 1 }); c.dot(0.43, 0.36, c.c('#111111'), 1); c.E(0.36, 0.44, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false;
        c.R(0.40, 0.46, 0.60, 0.52, T(c, '#ffffff'), { flat: 1 }); for (var i = 0; i < 4; i++) c.L(0.43 + i * 0.045, 0.46, 0.43 + i * 0.045, 0.52, 0.006, T(c, '#c8c8d0'), { flat: 1 });
        c.R(0.30, 0.18, 0.70, 0.30, red); c.R(0.36, 0.04, 0.64, 0.20, T(c, '#1a1a22')); c.R(0.36, 0.10, 0.64, 0.13, T(c, '#ffd23f'), { flat: 1 }); c.R(0.28, 0.28, 0.72, 0.32, T(c, '#ffd23f'));
        c.dot(0.5, 0.02, c.c('#ffd23f'), 2);
      } },
    { k: 'gingerman', n: 'Gingerbread Man', fixed: 1, envs: XE, hy: 0.3, lines: ['Run, run, as fast as you can!', 'Three buttons, two raisin eyes, and a very confident smile.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#b86a2a'), ic = T(c, '#ffffff');
        c.E(0.5, 0.20, 0.17, 0.16, br);
        c.R(0.30, 0.30, 0.70, 0.62, br);
        c.L(0.30, 0.38, 0.08, 0.54, 0.17, br); c.L(0.70, 0.38, 0.92, 0.54, 0.17, br);
        c.L(0.40, 0.60, 0.26, 0.94, 0.18, br); c.L(0.60, 0.60, 0.74, 0.94, 0.18, br);
        c.mir = true; c.E(0.43, 0.18, 0.025, 0.025, P.black, { flat: 1 }); c.mir = false;
        c.P([[0.40, 0.25], [0.5, 0.29], [0.60, 0.25], [0.5, 0.33]], ic, { flat: 1 });
        c.dot(0.5, 0.40, c.c('#e8202c'), 3); c.dot(0.5, 0.50, c.c('#2fb050'), 3); c.dot(0.5, 0.60, c.c('#2a6ae0'), 3);
        c.L(0.08, 0.57, 0.04, 0.60, 0.012, ic, { flat: 1 }); c.L(0.92, 0.57, 0.96, 0.60, 0.012, ic, { flat: 1 });
        c.L(0.24, 0.94, 0.20, 0.97, 0.012, ic, { flat: 1 }); c.L(0.76, 0.94, 0.80, 0.97, 0.012, ic, { flat: 1 });
        c.L(0.34, 0.31, 0.66, 0.31, 0.012, ic, { flat: 1 }); c.L(0.30, 0.62, 0.70, 0.62, 0.012, ic, { flat: 1 });
        c.E(0.5, 0.31, 0.07, 0.025, T(c, '#d8202c'), { flat: 1 });
      } },
    { k: 'candle', n: 'Advent Candles', fixed: 1, envs: ['hall', 'night', 'silent', 'snow', 'dusk'], gy: 0.9, lines: ['One more flame for every Sunday before the big day.', 'The room goes quiet and golden.'],
      draw: function (c, P, r, o) {
        var i, hs = [0.50, 0.44, 0.52, 0.40];
        c.R(0.04, 0.84, 0.96, 0.94, T(c, '#2a6a3a')); 
        for (i = 0; i < 4; i++) { var x = 0.10 + i * 0.22, col = i === 2 ? '#ff8ab8' : '#c8202c'; c.R(x, hs[i] + 0.12, x + 0.14, 0.86, T(c, col)); c.R(x + 0.06, hs[i] + 0.02, x + 0.08, hs[i] + 0.12, P.black, { flat: 1 }); c.E(x + 0.07, hs[i] - 0.04, 0.035, 0.07, T(c, '#ffd23f')); c.E(x + 0.07, hs[i] - 0.02, 0.018, 0.04, T(c, '#ffffff'), { flat: 1 }); spark(c, x + 0.07, hs[i] - 0.04, 0.07, '#ffe680'); }
        for (i = 0; i < 6; i++) c.E(0.08 + i * 0.17, 0.84, 0.05, 0.035, T(c, '#2fb050'));
        for (i = 0; i < 5; i++) c.dot(0.16 + i * 0.17, 0.84, c.c('#e8202c'), 2);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
