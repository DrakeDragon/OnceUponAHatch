/* Tall Tales and Legends: original pixel designs for American folk heroes and storybook legends. */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }
  function chk(w) { return function (x, y) { return (Math.floor(x / w) + Math.floor(y / w)) % 2 === 0; }; }

  K.register('america', [
    { k: 'paul', n: 'Paul Bunyan', fixed: 1, hy: 0.4, lines: ['So tall that he scratched the sky, and so friendly that the lakes just kind of stayed where he stepped.', 'He cut a forest before breakfast and planted three more before lunch.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e8b088'), beard = T(c, '#7a3a1a'), i;
        function eye(x, y) { c.E(x, y, 0.03, 0.034, P.white, { flat: 1 }); c.E(x, y + 0.003, 0.018, 0.024, c.c('#2a4a8a'), { flat: 1 }); c.dot(x - 0.005, y - 0.005, c.c('#ffffff'), 1); }
        c.P([[0.0, 1.0], [0.06, 0.70], [0.26, 0.60], [0.74, 0.60], [0.94, 0.70], [1.0, 1.0]], T(c, '#c8202c'));
        for (i = 0; i < 6; i++) { c.R(0.04 + i * 0.16, 0.66, 0.10 + i * 0.16, 1.0, T(c, '#1a1a22'), { flat: 1, pat: function (x, y) { return ((Math.floor(x * 24) + Math.floor(y * 24)) % 2) === 0; } }); }
        c.L(0.0, 0.80, 1.0, 0.80, 0.02, T(c, '#1a1a22'), { flat: 1 }); c.L(0.0, 0.92, 1.0, 0.92, 0.02, T(c, '#1a1a22'), { flat: 1 });
        c.R(0.40, 0.52, 0.60, 0.66, skin);
        c.E(0.5, 0.38, 0.22, 0.24, skin);
        c.P([[0.26, 0.44], [0.30, 0.64], [0.40, 0.78], [0.50, 0.82], [0.60, 0.78], [0.70, 0.64], [0.74, 0.44], [0.66, 0.54], [0.56, 0.56], [0.50, 0.54], [0.44, 0.56], [0.34, 0.54]], beard);
        c.P([[0.34, 0.64], [0.40, 0.76], [0.46, 0.66]], T(c, '#9a4a28'), { flat: 1 }); c.P([[0.66, 0.64], [0.60, 0.76], [0.54, 0.66]], T(c, '#9a4a28'), { flat: 1 });
        c.E(0.5, 0.57, 0.07, 0.022, T(c, '#d8605a'), { flat: 1 }); c.L(0.45, 0.57, 0.55, 0.57, 0.007, T(c, '#a02a2a'), { flat: 1 });
        c.P([[0.28, 0.30], [0.26, 0.14], [0.50, 0.08], [0.74, 0.14], [0.72, 0.30], [0.66, 0.22], [0.50, 0.20], [0.34, 0.22]], T(c, '#5a2a10'));
        c.P([[0.26, 0.22], [0.50, 0.14], [0.74, 0.22], [0.76, 0.28], [0.50, 0.20], [0.24, 0.28]], T(c, '#1a1a22'));
        c.P([[0.30, 0.14], [0.36, 0.0], [0.64, 0.0], [0.70, 0.14], [0.50, 0.18]], T(c, '#1a1a22')); c.R(0.38, 0.0, 0.62, 0.08, T(c, '#3a3a48'), { flat: 1 }); c.L(0.30, 0.14, 0.70, 0.14, 0.012, T(c, '#c8202c'), { flat: 1 });
        eye(0.41, 0.38); eye(0.59, 0.38); c.L(0.34, 0.33, 0.46, 0.34, 0.02, beard, { flat: 1 }); c.L(0.54, 0.34, 0.66, 0.33, 0.02, beard, { flat: 1 });
        c.E(0.5, 0.45, 0.034, 0.028, T(c, '#d89870'), { flat: 1 }); c.E(0.36, 0.46, 0.035, 0.022, T(c, '#e8808a'), { flat: 1 }); c.E(0.64, 0.46, 0.035, 0.022, T(c, '#e8808a'), { flat: 1 });
        c.L(0.92, 0.36, 0.90, 1.0, 0.03, T(c, '#a06a2a')); c.P([[0.90, 0.26], [1.0, 0.24], [1.0, 0.46], [0.92, 0.50], [0.86, 0.40]], T(c, '#c8c8d8')); c.L(0.94, 0.28, 0.98, 0.42, 0.01, T(c, '#f4f4fc'), { flat: 1 });
      } },
    { k: 'babe', n: 'Babe the Blue Ox', fixed: 1, gy: 0.82, lines: ['Seven axe handles between the eyes, and so blue that the snow turned sky-colored when she walked by.', 'She is gentle, hungry and very good at hauling.'],
      draw: function (c, P, r, o) {
        var blue = T(c, '#4a7af0'), cream = T(c, '#f0e8d0');
        o.shadow(0.5, 0.92, 0.38, 0.03);
        c.E(0.52, 0.64, 0.34, 0.20, blue); c.E(0.50, 0.70, 0.22, 0.09, T(c, '#7a9aff'), { flat: 1 }); c.R(0.28, 0.76, 0.36, 0.92, blue); c.R(0.40, 0.78, 0.48, 0.92, blue); c.R(0.58, 0.78, 0.66, 0.92, blue); c.R(0.70, 0.76, 0.78, 0.92, blue); c.E(0.32, 0.93, 0.06, 0.02, P.black); c.E(0.44, 0.93, 0.06, 0.02, P.black); c.E(0.62, 0.93, 0.06, 0.02, P.black); c.E(0.74, 0.93, 0.06, 0.02, P.black);
        c.L(0.84, 0.60, 0.94, 0.78, 0.035, blue); c.E(0.95, 0.80, 0.04, 0.05, T(c, '#2a4ab8'));
        c.R(0.30, 0.38, 0.40, 0.56, P.wood); c.R(0.28, 0.38, 0.42, 0.42, P.wood); c.P([[0.24, 0.52], [0.52, 0.52], [0.52, 0.58], [0.24, 0.58]], P.wood);
        c.E(0.22, 0.44, 0.13, 0.15, blue); c.E(0.15, 0.52, 0.09, 0.07, cream); c.E(0.12, 0.52, 0.014, 0.012, P.black, { flat: 1 }); c.E(0.17, 0.52, 0.014, 0.012, P.black, { flat: 1 });
        c.P([[0.14, 0.34], [0.04, 0.22], [0.02, 0.14], [0.10, 0.24], [0.18, 0.30]], cream); c.P([[0.30, 0.34], [0.38, 0.22], [0.42, 0.14], [0.34, 0.26], [0.26, 0.32]], cream);
        c.E(0.22, 0.38, 0.03, 0.028, P.white, { flat: 1 }); c.dot(0.215, 0.385, c.c('#1b1a22'), 2); c.dot(0.205, 0.37, c.c('#ffffff'), 1); c.E(0.26, 0.34, 0.04, 0.03, blue); c.E(0.10, 0.44, 0.02, 0.012, P.pinkS, { flat: 1 });
        c.L(0.60, 0.56, 0.60, 0.60, 0.012, P.gold, { flat: 1 }); c.E(0.60, 0.60, 0.03, 0.03, P.gold);
      } },
    { k: 'appleseed', n: 'Johnny Appleseed', fixed: 1, gy: 0.9, lines: ['A pot for a hat, a sack of seeds and a whole country of orchards still waiting to bloom.', 'He walked barefoot from town to town and left a little apple tree in every footprint.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e8b890'), g = o.gy, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.R(0.0, g, 1.0, 1.0, T(c, '#5a9a4a'), { flat: 1 });
        c.R(0.78, 0.30, 0.86, g, P.wood, { pat: stripe(4) }); c.E(0.82, 0.24, 0.20, 0.18, P.leaf); c.E(0.70, 0.34, 0.10, 0.08, T(c, '#58b84a')); c.E(0.94, 0.36, 0.08, 0.07, P.leaf);
        for (i = 0; i < 6; i++) c.E(0.70 + (i * 0.37 % 0.26), 0.18 + (i * 0.23 % 0.20), 0.025, 0.025, T(c, '#d8203a'), { flat: 1 });
        o.shadow(0.40, g + 0.02, 0.26, 0.03);
        c.P([[0.18, g], [0.62, g], [0.58, 0.54], [0.22, 0.54]], T(c, '#8a5a3a')); c.R(0.28, 0.54, 0.52, g, T(c, '#a8723a'), { pat: stripe(4) }); c.L(0.20, 0.60, 0.10, 0.74, 0.06, T(c, '#8a5a3a')); c.L(0.60, 0.60, 0.72, 0.52, 0.06, T(c, '#8a5a3a'));
        c.E(0.09, 0.76, 0.04, 0.035, skin); c.E(0.74, 0.50, 0.04, 0.035, skin); c.E(0.78, 0.46, 0.035, 0.035, T(c, '#d8203a'));
        c.L(0.34, g, 0.32, g + 0.08, 0.045, skin); c.L(0.46, g, 0.48, g + 0.08, 0.045, skin);
        c.E(0.40, 0.40, 0.14, 0.15, skin);
        c.E(0.40, 0.52, 0.14, 0.11, T(c, '#c8c8d8')); c.P([[0.28, 0.46], [0.40, 0.62], [0.52, 0.46], [0.40, 0.50]], T(c, '#e8e8f0'));
        c.E(0.40, 0.32, 0.17, 0.035, T(c, '#4a4a58')); c.P([[0.30, 0.31], [0.32, 0.18], [0.48, 0.18], [0.50, 0.31]], T(c, '#6a6a78')); c.L(0.46, 0.18, 0.56, 0.12, 0.016, T(c, '#6a6a78'), { flat: 1 }); c.E(0.56, 0.12, 0.02, 0.02, P.silver, { flat: 1 });
        eye(0.35, 0.40, 1.1); eye(0.45, 0.40, 1.1); c.L(0.31, 0.36, 0.38, 0.37, 0.012, T(c, '#c8c8d8'), { flat: 1 }); c.L(0.42, 0.37, 0.49, 0.36, 0.012, T(c, '#c8c8d8'), { flat: 1 });
        c.E(0.40, 0.45, 0.014, 0.012, T(c, '#d8987a'), { flat: 1 }); c.E(0.40, 0.49, 0.04, 0.015, T(c, '#8a2a3a'), { flat: 1 });
        spark(c, 0.14, 0.20, 0.035, P.glow);
      } },
    { k: 'pecos', n: 'Pecos Bill', fixed: 1, hy: 0.4, lines: ['Raised by coyotes, trained by rattlesnakes and the only cowboy to ever lasso a tornado.', 'He rides a twister like a pony and keeps his hat on through all of it.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e0a878'), hat = T(c, '#a8703a'), i;
        function eye(x, y) { c.E(x, y, 0.03, 0.034, P.white, { flat: 1 }); c.E(x, y + 0.003, 0.018, 0.024, c.c('#3a5a8a'), { flat: 1 }); c.dot(x - 0.005, y - 0.005, c.c('#ffffff'), 1); }
        c.P([[0.04, 1.0], [0.10, 0.74], [0.28, 0.64], [0.72, 0.64], [0.90, 0.74], [0.96, 1.0]], T(c, '#2a68c8')); c.P([[0.04, 1.0], [0.10, 0.74], [0.22, 0.68], [0.28, 1.0]], T(c, '#4a88e8'), { flat: 1 });
        c.P([[0.34, 0.64], [0.50, 0.84], [0.66, 0.64], [0.60, 0.62], [0.50, 0.72], [0.40, 0.62]], T(c, '#e8202c')); c.L(0.40, 0.66, 0.50, 0.80, 0.01, T(c, '#a8101c'), { flat: 1 });
        c.R(0.42, 0.54, 0.58, 0.66, skin);
        c.E(0.5, 0.42, 0.20, 0.22, skin); c.P([[0.30, 0.44], [0.34, 0.56], [0.50, 0.60], [0.66, 0.56], [0.70, 0.44], [0.62, 0.52], [0.50, 0.54], [0.38, 0.52]], T(c, '#a07040'), { flat: 1 });
        eye(0.42, 0.42); eye(0.58, 0.42); c.L(0.35, 0.37, 0.47, 0.38, 0.018, T(c, '#6a3a1a'), { flat: 1 }); c.L(0.53, 0.38, 0.65, 0.37, 0.018, T(c, '#6a3a1a'), { flat: 1 });
        c.E(0.5, 0.48, 0.03, 0.026, T(c, '#c88a60'), { flat: 1 }); c.P([[0.40, 0.54], [0.50, 0.52], [0.60, 0.54], [0.58, 0.57], [0.50, 0.55], [0.42, 0.57]], T(c, '#6a3a1a'), { flat: 1 });
        c.L(0.44, 0.58, 0.56, 0.58, 0.014, T(c, '#8a3030'), { flat: 1 });
        c.E(0.5, 0.26, 0.36, 0.05, hat); c.P([[0.26, 0.26], [0.26, 0.12], [0.36, 0.04], [0.64, 0.04], [0.74, 0.12], [0.74, 0.26]], hat); c.P([[0.26, 0.26], [0.26, 0.12], [0.34, 0.06], [0.40, 0.26]], T(c, '#c8903a'), { flat: 1 });
        c.R(0.27, 0.19, 0.73, 0.24, T(c, '#4a2a14')); c.E(0.50, 0.215, 0.025, 0.025, T(c, '#ffd23f'));
        c.E(0.14, 0.26, 0.14, 0.03, hat, { flat: 1 }); c.E(0.86, 0.26, 0.14, 0.03, hat, { flat: 1 });
        c.L(0.78, 0.74, 0.84, 0.58, 0.022, T(c, '#e8c880')); c.L(0.78, 0.74, 0.84, 0.58, 0.008, T(c, '#a88848'), { flat: 1 });
        c.RG(0.84, 0.43, 0.085, 0.125, T(c, '#e8c880')); c.RG(0.84, 0.43, 0.10, 0.115, T(c, '#a88848'), { flat: 1 });
        for (i = 0; i < 10; i++) { var a = i * 0.628; c.dot(0.84 + Math.cos(a) * 0.105, 0.43 + Math.sin(a) * 0.105, c.c('#fff0c0'), 1); }
        c.E(0.84, 0.56, 0.032, 0.032, T(c, '#a88848')); c.E(0.84, 0.56, 0.015, 0.015, T(c, '#e8c880'), { flat: 1 });
        c.ST(0.30, 0.76, 0.06, 0.026, T(c, '#ffd23f'));
      } },
    { k: 'henry', n: 'John Henry', fixed: 1, gy: 0.88, lines: ['A hammer in each hand and a mountain to get through, and he beat the steam drill by a hair.', 'The song is still being sung, and the hammer is still ringing.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#8a5a3a'), ov = T(c, '#2d4fb8'), i;
        c.R(0.0, 0.0, 1.0, 1.0, T(c, '#6a6a78'), { flat: 1 });
        for (i = 0; i < 7; i++) c.L(0.05 + i * 0.16, 0.05 + (i % 3) * 0.1, 0.12 + i * 0.16, 0.2 + (i % 2) * 0.1, 0.012, T(c, '#55556a'), { flat: 1 });
        c.E(0.5, 0.62, 0.40, 0.52, T(c, '#14102a'), { flat: 1 }); c.R(0.10, 0.62, 0.90, 1.0, T(c, '#14102a'), { flat: 1 });
        c.E(0.5, 0.60, 0.16, 0.20, T(c, '#ffd88a'), { flat: 1 });
        c.R(0.0, 0.88, 1.0, 1.0, T(c, '#8a8a98'), { flat: 1 });
        for (i = 0; i < 7; i++) c.R(0.06 + i * 0.14, 0.92, 0.12 + i * 0.14, 0.99, T(c, '#a8643a'), { flat: 1 });
        c.L(0.0, 0.90, 1.0, 0.90, 0.014, P.silver, { flat: 1 });
        o.shadow(0.5, 0.90, 0.22, 0.02);
        c.R(0.38, 0.68, 0.48, 0.90, ov); c.R(0.52, 0.68, 0.62, 0.90, ov); c.R(0.36, 0.88, 0.50, 0.92, P.black); c.R(0.50, 0.88, 0.64, 0.92, P.black);
        c.P([[0.30, 0.52], [0.70, 0.52], [0.66, 0.74], [0.34, 0.74]], skin); c.R(0.34, 0.64, 0.66, 0.74, ov); c.L(0.40, 0.64, 0.38, 0.52, 0.02, ov, { flat: 1 }); c.L(0.60, 0.64, 0.62, 0.52, 0.02, ov, { flat: 1 });
        c.L(0.66, 0.56, 0.78, 0.40, 0.07, skin); c.L(0.34, 0.56, 0.24, 0.72, 0.07, skin);
        c.L(0.20, 0.92, 0.24, 0.72, 0.022, P.iron, { flat: 1 }); c.E(0.26, 0.70, 0.04, 0.03, skin);
        c.L(0.72, 0.62, 0.88, 0.12, 0.022, P.wood, { flat: 1 }); c.P([[0.82, 0.12], [0.96, 0.18], [0.94, 0.26], [0.80, 0.20]], P.silver); c.E(0.78, 0.42, 0.045, 0.04, skin);
        c.E(0.5, 0.36, 0.13, 0.13, skin); c.R(0.37, 0.26, 0.63, 0.31, T(c, '#c2185b'), { flat: 1 }); c.L(0.62, 0.28, 0.72, 0.34, 0.02, T(c, '#c2185b'), { flat: 1 });
        c.E(0.45, 0.37, 0.016, 0.022, P.black, { flat: 1 }); c.E(0.55, 0.37, 0.016, 0.022, P.black, { flat: 1 });
        c.L(0.41, 0.33, 0.48, 0.34, 0.012, P.black, { flat: 1 }); c.L(0.52, 0.34, 0.59, 0.33, 0.012, P.black, { flat: 1 });
        c.L(0.44, 0.43, 0.56, 0.43, 0.018, P.white, { flat: 1 });
        for (i = 0; i < 7; i++) c.dot(0.12 + (i * 0.37 % 0.2), 0.88 - (i * 0.21 % 0.2), c.c(i % 2 ? '#ffd23f' : '#ffffff'), 1);
        spark(c, 0.22, 0.92, 0.04, P.glow);
      } },
    { k: 'horseman', n: 'The Headless Horseman', fixed: 1, gy: 0.78, hy: 0.3, lines: ['A galloping shadow, a swirling cape and a glowing pumpkin where a head ought to be.', 'The covered bridge is only a few strides away, so ride like the wind.'],
      draw: function (c, P, r, o) {
        var g = o.gy, blk = T(c, '#2a2838'), cape = T(c, '#4a3a7e'), i;
        c.E(0.40, 0.30, 0.24, 0.24, T(c, '#fff2b8'), { flat: 1 });
        c.R(0.0, g - 0.18, 0.22, g + 0.02, T(c, '#5a3a2a')); c.P([[0.0, g - 0.18], [0.11, g - 0.30], [0.22, g - 0.18]], T(c, '#3a2a2a'));
        c.P([[0.30, g - 0.12], [0.14, g - 0.06], [0.04, g + 0.04], [0.16, g + 0.02], [0.30, g - 0.02]], blk);
        c.E(0.46, g - 0.08, 0.26, 0.12, blk);
        c.P([[0.60, g - 0.14], [0.72, g - 0.40], [0.80, g - 0.38], [0.74, g - 0.08]], blk);
        c.P([[0.72, g - 0.40], [0.90, g - 0.34], [0.92, g - 0.28], [0.80, g - 0.26], [0.74, g - 0.30]], blk);
        c.P([[0.72, g - 0.40], [0.74, g - 0.48], [0.78, g - 0.40]], blk);
        c.E(0.82, g - 0.34, 0.012, 0.012, T(c, '#ff5a1a'), { flat: 1 }); c.L(0.66, g - 0.34, 0.62, g - 0.20, 0.03, T(c, '#14102a'), { flat: 1 });
        c.L(0.62, g - 0.02, 0.76, g + 0.10, 0.04, blk); c.L(0.70, g - 0.04, 0.84, g + 0.04, 0.04, blk);
        c.L(0.30, g - 0.02, 0.24, g + 0.12, 0.04, blk); c.L(0.40, g, 0.38, g + 0.14, 0.04, blk);
        c.P([[0.36, g - 0.16], [0.54, g - 0.16], [0.52, g - 0.50], [0.40, g - 0.50]], cape);
        c.P([[0.38, g - 0.50], [0.50, g - 0.46], [0.18, g - 0.30], [0.08, g - 0.14], [0.22, g - 0.20], [0.12, g - 0.04], [0.34, g - 0.20]], T(c, '#3a2a5e'));
        c.R(0.42, g - 0.56, 0.50, g - 0.48, T(c, '#14102a'), { flat: 1 }); c.R(0.40, g - 0.52, 0.52, g - 0.49, P.white, { flat: 1 });
        c.L(0.50, g - 0.44, 0.60, g - 0.58, 0.04, cape);
        c.E(0.62, g - 0.65, 0.08, 0.07, T(c, '#ff8a1f')); c.P([[0.58, g - 0.67], [0.60, g - 0.71], [0.62, g - 0.67]], T(c, '#ffe27a'), { flat: 1 }); c.P([[0.64, g - 0.67], [0.66, g - 0.71], [0.68, g - 0.67]], T(c, '#ffe27a'), { flat: 1 });
        c.L(0.58, g - 0.62, 0.66, g - 0.62, 0.012, T(c, '#ffe27a'), { flat: 1 }); c.L(0.62, g - 0.73, 0.62, g - 0.77, 0.012, P.leaf, { flat: 1 });
        c.L(0.40, g - 0.34, 0.26, g - 0.46, 0.014, T(c, '#d0d8e8'), { flat: 1 });
        for (i = 0; i < 5; i++) c.dot(0.1 + i * 0.2, 0.1 + (i % 3) * 0.08, c.c('#2a2838'), 1);
      } },
    { k: 'ripvan', n: 'Rip Van Winkle', fixed: 1, gy: 0.86, lines: ['Just a quick nap under a tree, and twenty years went by without a single phone call.', 'His beard has grown past his knees and the world has gone all wrong.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.64, 0.94], [0.68, 0.50], [0.62, 0.34], [0.74, 0.40], [0.80, 0.30], [0.92, 0.36], [0.90, 0.50], [0.84, 0.94]], T(c, '#6a4228')); c.L(0.74, 0.52, 0.74, 0.90, 0.012, T(c, '#4a2e18'), { flat: 1 });
        c.E(0.78, 0.26, 0.22, 0.20, T(c, '#2f7a3a')); c.E(0.60, 0.32, 0.12, 0.10, T(c, '#3a8a44')); c.E(0.94, 0.34, 0.09, 0.10, T(c, '#2a6a32')); c.E(0.72, 0.18, 0.06, 0.04, T(c, '#4aa858'), { flat: 1 });
        o.shadow(0.46, 0.92, 0.46, 0.03);
        c.E(0.30, 0.82, 0.24, 0.06, T(c, '#5a3a22'), { flat: 1 });
        c.E(0.62, 0.80, 0.07, 0.05, T(c, '#3a2a1a')); c.E(0.70, 0.78, 0.045, 0.05, T(c, '#3a2a1a'));
        c.P([[0.22, 0.70], [0.60, 0.72], [0.62, 0.84], [0.22, 0.84]], T(c, '#7a4a28')); c.P([[0.22, 0.70], [0.60, 0.72], [0.60, 0.75], [0.22, 0.74]], T(c, '#9a6038'), { flat: 1 });
        c.E(0.62, 0.78, 0.05, 0.04, T(c, '#2a2418'));
        c.P([[0.14, 0.62], [0.44, 0.62], [0.52, 0.80], [0.32, 0.96], [0.14, 0.80]], T(c, '#f4f4fc')); for (i = 0; i < 5; i++) c.L(0.18 + i * 0.06, 0.70 + i * 0.03, 0.22 + i * 0.07, 0.88 + i * 0.01, 0.01, T(c, '#c8c8e0'), { flat: 1 });
        c.E(0.16, 0.60, 0.11, 0.10, T(c, '#e8b088')); c.P([[0.04, 0.56], [0.08, 0.46], [0.20, 0.42], [0.28, 0.50], [0.26, 0.58], [0.10, 0.62]], T(c, '#3a4a8a')); c.R(0.04, 0.54, 0.28, 0.58, T(c, '#2a3a6a'), { flat: 1 });
        c.dot(0.14, 0.62, c.c('#c8a080'), 2); c.L(0.06, 0.58, 0.06, 0.74, 0.04, T(c, '#e8b088'), { flat: 1 });
        c.L(0.22, 0.36, 0.28, 0.32, 0.012, T(c, '#ffffff'), { flat: 1 });
        for (i = 0; i < 3; i++) { c.E(0.30 + i * 0.06, 0.40 - i * 0.08, 0.02 + i * 0.012, 0.016 + i * 0.008, T(c, '#fff8e0'), { flat: 1 }); }
        c.R(0.34, 0.10, 0.40, 0.14, T(c, '#fff8e0'), { flat: 1 });
        c.L(0.46, 0.60, 0.78, 0.74, 0.02, T(c, '#a06a2a')); c.E(0.80, 0.76, 0.03, 0.03, T(c, '#5a3a1a'));
      } },
    { k: 'brer', n: "Br'er Rabbit", fixed: 1, gy: 0.88, lines: ['Please, please, whatever you do, do not throw me in the briar patch, he says, grinning from ear to ear.', 'Born and bred in the briar patch, and cleverer than every fox in the county.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#c8a068'), cream = T(c, '#fff0d8'), th = T(c, '#4a6a2a'), i;
        c.mir = true; c.RE(0.40, 0.18, 0.055, 0.17, -0.12, fur); c.RE(0.405, 0.19, 0.025, 0.12, -0.12, P.pinkS, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.20, 0.22, fur); c.E(0.5, 0.56, 0.11, 0.09, cream);
        c.mir = true; c.E(0.43, 0.42, 0.045, 0.05, P.white, { flat: 1 }); c.E(0.435, 0.425, 0.03, 0.035, T(c, '#5a3a1e'), { flat: 1 }); c.dot(0.435, 0.425, c.c('#0b1040'), 1); c.dot(0.425, 0.41, c.c('#ffffff'), 1); c.L(0.36, 0.35, 0.47, 0.37, 0.016, T(c, '#8a5a2a'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.52, 0.03, 0.022, P.pinkS, { flat: 1 }); c.L(0.5, 0.54, 0.5, 0.58, 0.01, P.black, { flat: 1 }); c.P([[0.40, 0.58], [0.50, 0.66], [0.60, 0.58], [0.5, 0.60]], P.black, { flat: 1 }); c.R(0.48, 0.60, 0.52, 0.65, P.white, { flat: 1 });
        c.L(0.40, 0.54, 0.26, 0.50, 0.006, P.white, { flat: 1 }); c.L(0.40, 0.56, 0.26, 0.58, 0.006, P.white, { flat: 1 }); c.L(0.60, 0.54, 0.74, 0.50, 0.006, P.white, { flat: 1 }); c.L(0.60, 0.56, 0.74, 0.58, 0.006, P.white, { flat: 1 });
        c.E(0.5, 0.70, 0.17, 0.12, fur); c.E(0.5, 0.72, 0.10, 0.09, cream);
        for (i = 0; i < 14; i++) { var x = 0.02 + i * 0.07, h = 0.20 + (i * 37 % 5) * 0.03; c.L(x, 0.92, x + 0.03 * (i % 2 ? 1 : -1), 0.92 - h, 0.02, th, { flat: 1 }); c.L(x, 0.92 - h * 0.5, x + 0.06, 0.92 - h * 0.7, 0.01, th, { flat: 1 }); c.L(x + 0.012, 0.92 - h * 0.3, x - 0.05, 0.92 - h * 0.45, 0.01, th, { flat: 1 }); if (i % 3 === 0) c.E(x + 0.02, 0.92 - h, 0.016, 0.016, P.red, { flat: 1 }); }
        c.E(0.5, 0.94, 0.52, 0.04, P.leaf, { flat: 1 });
      } },
    { k: 'jumpingfrog', n: 'The Jumping Frog of Calaveras', fixed: 1, gy: 0.82, lines: ['The best jumper in the county, until he was filled with quail shot, and then he was the best sitter.', 'A mining town, a pan of gold and a very big bet on a very small frog.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#58c84a'), grD = T(c, '#3a9a38'), grL = T(c, '#c8f0a0'), g = o.gy, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.R(0.0, g - 0.34, 1.0, g - 0.28, P.wood, { flat: 1 }); for (i = 0; i < 5; i++) c.R(0.04 + i * 0.24, g - 0.40, 0.09 + i * 0.24, g + 0.04, P.wood, { flat: 1 });
        o.shadow(0.5, g + 0.03, 0.34, 0.03);
        c.L(0.30, g - 0.12, 0.14, g + 0.02, 0.07, grD); c.L(0.70, g - 0.12, 0.86, g + 0.02, 0.07, grD); c.E(0.12, g + 0.03, 0.07, 0.025, grD); c.E(0.88, g + 0.03, 0.07, 0.025, grD);
        c.E(0.5, 0.66, 0.34, 0.30, gr); c.E(0.5, 0.74, 0.22, 0.20, grL);
        c.E(0.5, 0.40, 0.30, 0.22, gr); c.E(0.5, 0.46, 0.22, 0.14, grL, { flat: 1 });
        c.E(0.32, 0.22, 0.10, 0.10, gr); c.E(0.68, 0.22, 0.10, 0.10, gr);
        c.E(0.32, 0.22, 0.075, 0.08, P.white, { flat: 1 }); c.E(0.68, 0.22, 0.075, 0.08, P.white, { flat: 1 }); c.E(0.33, 0.23, 0.04, 0.05, P.black, { flat: 1 }); c.E(0.67, 0.23, 0.04, 0.05, P.black, { flat: 1 }); c.dot(0.315, 0.21, P.white, 2); c.dot(0.655, 0.21, P.white, 2);
        c.L(0.30, 0.46, 0.50, 0.52, 0.016, T(c, '#2a6a2a'), { flat: 1 }); c.L(0.50, 0.52, 0.70, 0.46, 0.016, T(c, '#2a6a2a'), { flat: 1 });
        c.E(0.40, 0.38, 0.012, 0.01, grD, { flat: 1 }); c.E(0.60, 0.38, 0.012, 0.01, grD, { flat: 1 });
        c.E(0.26, 0.46, 0.04, 0.025, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.74, 0.46, 0.04, 0.025, T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.5, 0.80, 0.08, 0.08, T(c, '#3a5ad8')); c.E(0.5, 0.80, 0.045, 0.045, T(c, '#ffd23f'), { flat: 1 }); c.P([[0.46, 0.86], [0.42, 0.98], [0.50, 0.92]], T(c, '#3a5ad8'), { flat: 1 }); c.P([[0.54, 0.86], [0.58, 0.98], [0.50, 0.92]], T(c, '#3a5ad8'), { flat: 1 });
        for (i = 0; i < 4; i++) c.dot(0.20 + i * 0.20, g - 0.20 - (i % 2) * 0.04, c.c('#ffe27a'), 1);
        spark(c, 0.10, 0.16, 0.04, P.glow); spark(c, 0.90, 0.18, 0.035, P.white);
      } },
    { k: 'jackalope', n: 'The Jackalope', fixed: 1, gy: 0.84, lines: ['Half jackrabbit, half antelope and entirely made up, which is exactly why it is so hard to catch.', 'It only appears at sunset and only sings along when you are not listening.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#c8a878'), cream = T(c, '#fff0d8'), horn = T(c, '#e8d8b0');
        o.shadow(0.5, 0.93, 0.32, 0.03);
        c.E(0.50, 0.70, 0.26, 0.17, fur); c.E(0.50, 0.76, 0.16, 0.09, cream); c.E(0.78, 0.74, 0.07, 0.07, cream); c.mir = true; c.E(0.40, 0.90, 0.07, 0.03, fur); c.E(0.30, 0.86, 0.05, 0.05, fur); c.mir = false;
        c.E(0.40, 0.52, 0.17, 0.15, fur); c.E(0.30, 0.58, 0.10, 0.08, cream);
        c.mir = false; c.RE(0.50, 0.30, 0.04, 0.15, 0.25, fur); c.RE(0.50, 0.30, 0.018, 0.11, 0.25, P.pinkS, { flat: 1 }); c.RE(0.60, 0.34, 0.04, 0.15, 0.55, fur);
        c.L(0.34, 0.40, 0.28, 0.22, 0.02, horn); c.L(0.28, 0.22, 0.20, 0.14, 0.016, horn); c.L(0.28, 0.22, 0.34, 0.12, 0.016, horn); c.L(0.28, 0.30, 0.20, 0.30, 0.014, horn); c.L(0.42, 0.38, 0.44, 0.16, 0.02, horn); c.L(0.44, 0.16, 0.38, 0.08, 0.016, horn); c.L(0.44, 0.16, 0.52, 0.08, 0.016, horn); c.L(0.43, 0.26, 0.50, 0.24, 0.014, horn);
        c.E(0.40, 0.48, 0.03, 0.034, P.white, { flat: 1 }); c.dot(0.40, 0.485, c.c('#1b1a22'), 2); c.dot(0.39, 0.47, c.c('#ffffff'), 1); c.E(0.25, 0.56, 0.02, 0.016, P.pinkS, { flat: 1 }); c.L(0.25, 0.58, 0.25, 0.62, 0.008, P.black, { flat: 1 });
        c.L(0.28, 0.60, 0.16, 0.58, 0.006, P.white, { flat: 1 }); c.L(0.28, 0.62, 0.16, 0.66, 0.006, P.white, { flat: 1 });
        c.R(0.24, 0.80, 0.30, 0.94, fur); c.R(0.62, 0.80, 0.68, 0.94, fur); c.E(0.26, 0.95, 0.06, 0.02, fur); c.E(0.66, 0.95, 0.06, 0.02, fur);
      } },
    { k: 'bigfoot', n: 'Bigfoot', fixed: 1, gy: 0.82, lines: ['Seven feet tall, shy as a deer and very good at being blurry in exactly the right photographs.', 'He peeks out between the pines and goes right back in when you wave.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#6a4a30'), furL = T(c, '#8a6a48'), g = o.gy, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        for (i = 0; i < 6; i++) { c.P([[0.04 + i * 0.16, g], [0.10 + i * 0.16, g - 0.34 - (i % 3) * 0.08], [0.16 + i * 0.16, g]], T(c, i % 2 ? '#2f6a3a' : '#3f7a48'), { flat: 1 }); }
        o.shadow(0.5, g + 0.02, 0.34, 0.03);
        c.L(0.36, g - 0.10, 0.34, g, 0.07, fur); c.L(0.64, g - 0.10, 0.66, g, 0.07, fur); c.E(0.31, g + 0.01, 0.08, 0.03, T(c, '#4a3220')); c.E(0.69, g + 0.01, 0.08, 0.03, T(c, '#4a3220'));
        c.E(0.5, 0.56, 0.30, 0.30, fur); c.E(0.5, 0.60, 0.18, 0.18, furL);
        c.L(0.24, 0.40, 0.14, 0.70, 0.09, fur); c.L(0.76, 0.40, 0.86, 0.70, 0.09, fur); c.E(0.13, 0.74, 0.06, 0.05, furL); c.E(0.87, 0.74, 0.06, 0.05, furL);
        for (i = 0; i < 8; i++) c.L(0.26 + i * 0.07, 0.62 + (i % 2) * 0.1, 0.25 + i * 0.07, 0.68 + (i % 2) * 0.1, 0.01, T(c, '#4a3220'), { flat: 1 });
        c.E(0.5, 0.28, 0.17, 0.17, fur); c.E(0.5, 0.15, 0.13, 0.06, fur); c.P([[0.38, 0.14], [0.50, 0.04], [0.62, 0.14]], fur);
        c.E(0.5, 0.32, 0.12, 0.12, T(c, '#c8a07a'));
        c.R(0.40, 0.26, 0.60, 0.30, T(c, '#4a3220'), { flat: 1 });
        eye(0.44, 0.31, 1.1); eye(0.56, 0.31, 1.1); c.E(0.5, 0.35, 0.03, 0.02, T(c, '#4a3220'), { flat: 1 }); c.L(0.45, 0.40, 0.55, 0.40, 0.014, T(c, '#4a2a20'), { flat: 1 }); c.L(0.44, 0.39, 0.45, 0.41, 0.01, T(c, '#4a2a20'), { flat: 1 });
        c.E(0.26, 0.15, 0.03, 0.04, fur);
        for (i = 0; i < 6; i++) c.dot(0.12 + (i * 0.43 % 0.76), 0.10 + (i * 0.29 % 0.4), c.c('#ffe27a'), 1);
      } },
    { k: 'wagon', n: 'The Prairie Wagon', fixed: 1, gy: 0.76, lines: ['Canvas top, creaking wheels and a whole family headed west with a pie on the seat.', 'The prairie goes on and on, and so does the wagon.'],
      draw: function (c, P, r, o) {
        var g = o.gy + 0.0, cov = T(c, '#f4ecd8'), i;
        o.shadow(0.5, g + 0.12, 0.44, 0.03);
        c.R(0.22, g - 0.12, 0.84, g + 0.02, P.wood, { pat: stripe(3) }); c.R(0.22, g - 0.14, 0.84, g - 0.11, T(c, '#a86a3a'));
        c.E(0.52, g - 0.12, 0.34, 0.30, cov, {}, true); c.R(0.20, g - 0.12, 0.84, g - 0.10, T(c, '#e0d4b8'), { flat: 1 }); c.E(0.52, g - 0.12, 0.28, 0.24, T(c, '#fff8ee'), { flat: 1 }, true);
        for (i = 0; i < 5; i++) c.L(0.52 + (i - 2) * 0.12, g - 0.12, 0.52 + (i - 2) * 0.10, g - 0.34 + Math.abs(i - 2) * 0.03, 0.01, T(c, '#c8b898'), { flat: 1 });
        c.E(0.84, g - 0.10, 0.07, 0.12, T(c, '#2a2a3a'), { flat: 1 });
        c.L(0.22, g - 0.06, 0.10, g - 0.02, 0.016, P.wood, { flat: 1 });
        function wheel(x, rr) { c.RG(x, g + 0.10, rr * 0.8, rr, P.wood); c.RG(x, g + 0.10, rr * 0.98, rr * 1.06, P.iron, { flat: 1 }); for (var k = 0; k < 8; k++) { var a = k * Math.PI / 4; c.L(x, g + 0.10, x + Math.cos(a) * rr * 0.9, g + 0.10 + Math.sin(a) * rr * 0.9, 0.012, P.wood, { flat: 1 }); } c.E(x, g + 0.10, 0.025, 0.025, P.iron); }
        wheel(0.34, 0.13); wheel(0.72, 0.13);
        c.P([[0.06, g + 0.01], [0.22, g - 0.04], [0.22, g + 0.02], [0.08, g + 0.04]], P.wood);
        c.E(0.50, g - 0.34, 0.001, 0.001, P.black, { flat: 1 });
        for (i = 0; i < 12; i++) c.L(0.04 + i * 0.085, 0.96, 0.05 + i * 0.085, 0.88, 0.008, T(c, '#c8a840'), { flat: 1 });
      } },
    { k: 'engine', n: 'The Steam Engine', fixed: 1, gy: 0.82, lines: ['Chugga-chugga, whistle and a plume of steam, and Casey is at the throttle with a grin.', 'It runs right on time and only slightly on coal.'],
      draw: function (c, P, r, o) {
        var g = o.gy + 0.04, i;
        c.R(0.0, g + 0.10, 1.0, g + 0.13, T(c, '#5a5a68')); for (i = 0; i < 12; i++) c.R(0.02 + i * 0.085, g + 0.13, 0.05 + i * 0.085, g + 0.17, P.wood);
        c.E(0.30, g - 0.10, 0.32, 0.18, P.a, { }, false); c.R(0.14, g - 0.20, 0.82, g + 0.02, P.black); c.E(0.46, g - 0.18, 0.32, 0.08, P.iron, {}, true); c.R(0.14, g - 0.20, 0.46, g + 0.02, P.iron);
        c.E(0.22, g - 0.10, 0.18, 0.12, P.a); c.R(0.04, g - 0.10, 0.40, g + 0.04, P.a); c.E(0.04, g - 0.04, 0.03, 0.06, P.gold); c.R(0.62, g - 0.34, 0.82, g + 0.04, P.red); c.R(0.60, g - 0.38, 0.84, g - 0.34, P.gold); c.R(0.66, g - 0.30, 0.78, g - 0.18, P.glow, { flat: 1 });
        c.R(0.16, g - 0.26, 0.26, g - 0.18, P.black); c.P([[0.14, g - 0.26], [0.28, g - 0.26], [0.26, g - 0.34], [0.16, g - 0.34]], P.black); c.E(0.17, g - 0.38, 0.05, 0.04, P.white, { flat: 1 }); c.E(0.24, g - 0.46, 0.07, 0.05, P.white, { flat: 1 }); c.E(0.30, g - 0.56, 0.08, 0.06, T(c, '#e8e4f0'), { flat: 1 });
        c.E(0.40, g - 0.24, 0.035, 0.035, P.gold); c.R(0.385, g - 0.22, 0.415, g - 0.18, P.gold);
        c.E(0.12, g - 0.14, 0.04, 0.04, P.glow, { flat: 1 }); c.P([[0.0, g + 0.08], [0.14, g + 0.0], [0.14, g + 0.10]], P.red);
        function wheel(x, rr) { c.E(x, g + 0.06, rr, rr, P.red); c.E(x, g + 0.06, rr * 0.75, rr * 0.75, P.iron, { flat: 1 }); c.E(x, g + 0.06, rr * 0.2, rr * 0.2, P.gold); for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; c.L(x, g + 0.06, x + Math.cos(a) * rr * 0.9, g + 0.06 + Math.sin(a) * rr * 0.9, 0.01, P.red, { flat: 1 }); } }
        wheel(0.62, 0.11); wheel(0.78, 0.11); c.E(0.22, g + 0.08, 0.05, 0.05, P.red); c.E(0.38, g + 0.08, 0.05, 0.05, P.red); c.L(0.22, g + 0.08, 0.80, g + 0.04, 0.012, P.silver, { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.88 + (i * 0.021 % 0.1), 0.2 + i * 0.1, c.c('#ffe27a'), 1);
      } },
    { k: 'riverboat', n: 'The Riverboat', fixed: 1, gy: 0.72, lines: ['Mark twain, mark twain, the leadsman sings, and the big wheel keeps turning on the Mississippi.', 'White decks, two tall stacks and a whistle you can hear around the bend.'],
      draw: function (c, P, r, o) {
        var g = o.gy, i;
        c.R(0.0, g + 0.04, 1.0, 1.0, T(c, '#58b8c8'), { flat: 1 }); for (i = 0; i < 7; i++) c.E(0.10 + (i % 3) * 0.32, g + 0.14 + i * 0.04, 0.14, 0.012, T(c, '#a8e0f0'), { flat: 1 });
        c.R(0.14, g - 0.06, 0.86, g + 0.06, P.white); c.R(0.14, g + 0.03, 0.86, g + 0.07, P.red, { flat: 1 });
        c.R(0.20, g - 0.20, 0.78, g - 0.06, T(c, '#f4f4fa')); c.R(0.28, g - 0.30, 0.70, g - 0.20, P.white); c.R(0.40, g - 0.38, 0.58, g - 0.30, P.white); c.E(0.49, g - 0.40, 0.10, 0.025, P.red);
        for (i = 0; i < 6; i++) c.R(0.24 + i * 0.09, g - 0.17, 0.27 + i * 0.09, g - 0.10, P.glow, { flat: 1 });
        for (i = 0; i < 4; i++) c.R(0.31 + i * 0.09, g - 0.28, 0.34 + i * 0.09, g - 0.22, P.glow, { flat: 1 });
        c.R(0.26, g - 0.46, 0.32, g - 0.30, P.black); c.R(0.24, g - 0.50, 0.34, g - 0.46, P.gold); c.R(0.66, g - 0.46, 0.72, g - 0.30, P.black); c.R(0.64, g - 0.50, 0.74, g - 0.46, P.gold);
        c.E(0.30, g - 0.56, 0.04, 0.03, P.white, { flat: 1 }); c.E(0.36, g - 0.62, 0.05, 0.04, P.white, { flat: 1 }); c.E(0.70, g - 0.56, 0.04, 0.03, P.white, { flat: 1 });
        c.L(0.49, g - 0.38, 0.49, g - 0.48, 0.01, P.wood, { flat: 1 }); c.P([[0.49, g - 0.48], [0.60, g - 0.45], [0.49, g - 0.42]], P.red, { flat: 1 });
        c.E(0.92, g + 0.02, 0.10, 0.14, P.red); c.E(0.92, g + 0.02, 0.07, 0.10, P.white, { flat: 1 }); for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; c.L(0.92, g + 0.02, 0.92 + Math.cos(a) * 0.09, g + 0.02 + Math.sin(a) * 0.13, 0.01, P.red, { flat: 1 }); }
        c.E(0.92, g + 0.16, 0.08, 0.02, T(c, '#ffffff'), { flat: 1 });
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
