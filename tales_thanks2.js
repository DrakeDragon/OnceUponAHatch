/* Thanksgiving Harvest, second volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var TE = ['harvest', 'dusk', 'dawn', 'hall', 'meadow', 'forest', 'day', 'storm', 'autumn'];
  function hl(c, x, y) { c.dot(x, y, c.c('#ffffff'), 1); }

  K.register('thanks', [
    { k: 'roast', n: 'Roast Turkey', fixed: 1, envs: ['hall', 'dusk', 'dawn', 'harvest', 'autumn', 'night'], gy: 0.9, lines: ['Golden-brown and glistening, and the whole house smells like it.', 'Someone has been sneaking a taste of the skin.'],
      draw: function (c, P, r, o) {
        var sk = T(c, '#c8782a'), sk2 = T(c, '#e8a040'), i;
        o.shadow(0.5, 0.95, 0.46, 0.03);
        c.E(0.5, 0.84, 0.47, 0.10, T(c, '#eceef8')); c.E(0.5, 0.82, 0.39, 0.065, T(c, '#cfd4e4'), { flat: 1 });
        // drumsticks
        c.L(0.20, 0.70, 0.32, 0.56, 0.11, sk); c.E(0.20, 0.72, 0.075, 0.075, sk); c.L(0.14, 0.78, 0.18, 0.74, 0.045, T(c, '#f4ecd8')); c.E(0.12, 0.80, 0.035, 0.035, T(c, '#f4ecd8')); c.E(0.15, 0.82, 0.03, 0.03, T(c, '#f4ecd8'));
        c.L(0.80, 0.70, 0.68, 0.56, 0.11, sk); c.E(0.80, 0.72, 0.075, 0.075, sk); c.L(0.86, 0.78, 0.82, 0.74, 0.045, T(c, '#f4ecd8')); c.E(0.88, 0.80, 0.035, 0.035, T(c, '#f4ecd8')); c.E(0.85, 0.82, 0.03, 0.03, T(c, '#f4ecd8'));
        // body
        c.E(0.5, 0.56, 0.36, 0.24, sk); c.E(0.50, 0.50, 0.28, 0.17, sk2, { flat: 1 }); c.E(0.42, 0.42, 0.10, 0.07, T(c, '#ffd890'), { flat: 1 });
        for (i = 0; i < 9; i++) c.dot(0.30 + (i % 3) * 0.14 + (i > 5 ? 0.04 : 0), 0.46 + Math.floor(i / 3) * 0.08, c.c('#ffe8b0'), 1);
        c.E(0.50, 0.66, 0.24, 0.05, T(c, '#a8601a'), { flat: 1 }); c.E(0.24, 0.52, 0.08, 0.10, sk2, { flat: 1 }); c.E(0.76, 0.52, 0.08, 0.10, sk2, { flat: 1 });
        // garnish
        for (i = 0; i < 4; i++) { c.E(0.30 + i * 0.05, 0.90, 0.033, 0.033, T(c, '#c8202c')); c.dot(0.29 + i * 0.05, 0.89, c.c('#ff9aa0'), 1); }
        c.RE(0.66, 0.90, 0.06, 0.025, 0.2, T(c, '#2fa04a')); c.RE(0.74, 0.90, 0.06, 0.025, -0.3, T(c, '#2fa04a')); c.E(0.60, 0.89, 0.035, 0.035, T(c, '#e07a1f'));
        c.E(0.44, 0.20, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 }); c.E(0.54, 0.14, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'applepie', n: 'Apple Pie', fixed: 1, envs: TE, gy: 0.84, lines: ['A lattice top and a golden crust with cinnamon steam.', 'It cooled on the windowsill for about four seconds.'],
      draw: function (c, P, r, o) {
        var cr = T(c, '#e0a850'), cr2 = T(c, '#f0c670'), i;
        o.shadow(0.5, 0.9, 0.46, 0.03);
        c.P([[0.04, 0.56], [0.96, 0.56], [0.86, 0.86], [0.14, 0.86]], T(c, '#c8a0a0')); c.P([[0.06, 0.58], [0.94, 0.58], [0.84, 0.84], [0.16, 0.84]], T(c, '#e8e0e8'), { flat: 1 }); c.R(0.04, 0.62, 0.96, 0.66, T(c, '#c8c8d8'), { flat: 1 });
        c.E(0.5, 0.56, 0.46, 0.20, cr); c.E(0.5, 0.54, 0.42, 0.17, cr2, { flat: 1 }); c.E(0.5, 0.54, 0.34, 0.13, T(c, '#d89238'));
        for (i = 0; i < 20; i++) c.E(0.07 + i * 0.043, 0.56 + 0.15 * Math.abs(Math.sin(i * 0.99)) * 0 + 0.07 * Math.sin(Math.PI * i / 20), 0.03, 0.03, cr);
        for (i = 0; i < 5; i++) { c.L(0.24 + i * 0.12, 0.42, 0.14 + i * 0.12, 0.66, 0.045, cr2); c.L(0.14 + i * 0.12 + 0.0, 0.44, 0.24 + i * 0.12, 0.66, 0.045, T(c, '#e8b060')); }
        c.E(0.5, 0.56, 0.0, 0.0, cr); for (i = 0; i < 7; i++) c.dot(0.30 + (i * 0.11 % 0.4), 0.46 + (i * 0.07 % 0.1), c.c('#fff0c0'), 1);
        c.dot(0.30, 0.12, c.c('#ffffff'), 1); c.E(0.40, 0.18, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 }); c.E(0.56, 0.12, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 }); c.E(0.70, 0.20, 0.022, 0.06, T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.30, 0.0, 0.0, cr);
      } },
    { k: 'scarecrow3', n: 'Friendly Scarecrow', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'day', 'autumn', 'storm'], hy: 0.38, lines: ['He has watched the corn since spring and has never once been scary.', 'The crows treat him like a very tall friend.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e8c088'), hay = T(c, '#e8c040'), i;
        c.R(0.46, 0.50, 0.54, 1.0, P.wood); c.R(0.08, 0.52, 0.92, 0.58, P.wood);
        for (i = 0; i < 7; i++) { c.L(0.10 + i * 0.015, 0.56, 0.04 + i * 0.01, 0.66 + (i % 3) * 0.02, 0.02, hay, { flat: 1 }); c.L(0.90 - i * 0.015, 0.56, 0.96 - i * 0.01, 0.66 + (i % 3) * 0.02, 0.02, hay, { flat: 1 }); }
        c.P([[0.26, 0.96], [0.74, 0.96], [0.70, 0.52], [0.30, 0.52]], T(c, '#c8502a')); c.P([[0.26, 0.96], [0.74, 0.96], [0.70, 0.52], [0.30, 0.52]], T(c, '#2a4a8a'), { pat: function (x, y) { return Math.floor(x / 5) % 2 === 0 && Math.floor(y / 5) % 2 === 0; } });
        c.R(0.40, 0.56, 0.60, 0.74, T(c, '#8a3a20')); c.R(0.44, 0.60, 0.56, 0.68, T(c, '#e8c040'), { flat: 1 }); c.R(0.24, 0.84, 0.34, 0.92, T(c, '#e8c040'), { flat: 1 });
        c.E(0.5, 0.36, 0.17, 0.16, skin); c.E(0.40, 0.34, 0.03, 0.04, P.black, { flat: 1 }); c.E(0.60, 0.34, 0.03, 0.04, P.black, { flat: 1 }); c.E(0.5, 0.40, 0.03, 0.03, T(c, '#e8704a'), { flat: 1 });
        for (i = 0; i < 5; i++) c.dot(0.40 + i * 0.05, 0.46 - (i % 2 === 0 ? 0 : 0.01) + (i === 2 ? 0.015 : 0), c.c('#6a3a1a'), 1);
        c.E(0.34, 0.42, 0.03, 0.02, T(c, '#ff9a8a'), { flat: 1 }); c.E(0.66, 0.42, 0.03, 0.02, T(c, '#ff9a8a'), { flat: 1 });
        c.E(0.5, 0.24, 0.26, 0.04, T(c, '#6a4a22')); c.P([[0.34, 0.24], [0.38, 0.06], [0.62, 0.06], [0.66, 0.24]], T(c, '#7a5a2a')); c.R(0.34, 0.16, 0.66, 0.20, T(c, '#c8202c'), { flat: 1 });
        c.E(0.66, 0.15, 0.03, 0.04, T(c, '#e07a1f')); c.RE(0.72, 0.18, 0.04, 0.02, -0.5, T(c, '#c8202c'));
        c.L(0.72, 0.28, 0.80, 0.34, 0.015, hay, { flat: 1 });
      } },
    { k: 'barn', n: 'Red Barn', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'day', 'autumn', 'storm', 'night'], gy: 0.92, lines: ['The big red doors have been open since the first hay.', 'A weathervane rooster points where the wind has been.'],
      draw: function (c, P, r, o) {
        var rd = T(c, '#b8202c');
        o.shadow(0.5, 0.95, 0.46, 0.03);
        c.R(0.10, 0.44, 0.90, 0.92, rd); for (var i = 0; i < 12; i++) c.L(0.14 + i * 0.065, 0.44, 0.14 + i * 0.065, 0.92, 0.008, T(c, '#8a1620'), { flat: 1 });
        c.P([[0.04, 0.46], [0.18, 0.22], [0.50, 0.10], [0.82, 0.22], [0.96, 0.46]], T(c, '#c82a36')); c.P([[0.04, 0.46], [0.18, 0.22], [0.50, 0.10], [0.82, 0.22], [0.96, 0.46], [0.92, 0.46], [0.80, 0.26], [0.50, 0.15], [0.20, 0.26], [0.08, 0.46]], T(c, '#ffffff'), { flat: 1 });
        c.R(0.30, 0.52, 0.70, 0.92, T(c, '#e8e0d0')); c.R(0.33, 0.55, 0.67, 0.92, T(c, '#a8202c')); c.L(0.33, 0.55, 0.67, 0.92, 0.02, T(c, '#e8e0d0'), { flat: 1 }); c.L(0.67, 0.55, 0.33, 0.92, 0.02, T(c, '#e8e0d0'), { flat: 1 }); c.L(0.50, 0.55, 0.50, 0.92, 0.02, T(c, '#e8e0d0'), { flat: 1 });
        c.R(0.42, 0.24, 0.58, 0.38, T(c, '#e8e0d0')); c.R(0.45, 0.26, 0.55, 0.36, T(c, '#2a1a30'), { flat: 1 }); c.L(0.5, 0.26, 0.5, 0.36, 0.01, T(c, '#e8e0d0'), { flat: 1 });
        c.L(0.5, 0.10, 0.5, 0.0, 0.015, P.iron); c.E(0.5, 0.02, 0.05, 0.03, T(c, '#ffd23f'));
        c.R(0.14, 0.64, 0.26, 0.76, T(c, '#e8e0d0')); c.R(0.74, 0.64, 0.86, 0.76, T(c, '#e8e0d0')); c.R(0.16, 0.66, 0.24, 0.74, T(c, '#ffe080'), { flat: 1 }); c.R(0.76, 0.66, 0.84, 0.74, T(c, '#ffe080'), { flat: 1 });
        c.E(0.06, 0.88, 0.07, 0.07, T(c, '#e8b020')); c.E(0.94, 0.88, 0.07, 0.07, T(c, '#e87a1f'));
      } },
    { k: 'squirrel', n: 'Busy Squirrel', fixed: 1, envs: ['harvest', 'autumn', 'forest', 'dawn', 'day', 'dusk', 'meadow', 'storm'], gy: 0.9, hy: 0.4, lines: ['Nuts are for winter, and winter is always coming.', 'He has forgotten where eleven of them are.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#b8682a'), lt = T(c, '#e8c088');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.78, 0.50, 0.14, 0.36, br); c.E(0.80, 0.34, 0.10, 0.16, T(c, '#d88a3a'), { flat: 1 }); c.E(0.74, 0.50, 0.04, 0.26, lt, { flat: 1 });
        c.E(0.46, 0.68, 0.24, 0.24, br); c.E(0.42, 0.74, 0.14, 0.16, lt, { flat: 1 });
        c.E(0.30, 0.92, 0.08, 0.04, br); c.E(0.58, 0.92, 0.09, 0.04, br);
        c.E(0.36, 0.40, 0.18, 0.16, br); c.P([[0.26, 0.30], [0.28, 0.14], [0.38, 0.28]], br); c.P([[0.46, 0.28], [0.52, 0.14], [0.52, 0.32]], br); c.dot(0.30, 0.24, c.c('#e8a0a0'), 1);
        c.E(0.26, 0.44, 0.08, 0.06, lt); c.E(0.20, 0.42, 0.025, 0.02, T(c, '#1a1a22'), { flat: 1 });
        c.mir = false; c.E(0.34, 0.37, 0.03, 0.035, P.white, { flat: 1 }); c.dot(0.33, 0.37, c.c('#111111'), 1);
        c.E(0.30, 0.50, 0.0, 0.0, br);
        c.E(0.26, 0.60, 0.06, 0.06, T(c, '#8a5a2a')); c.E(0.26, 0.57, 0.045, 0.025, T(c, '#c89a5a')); hl(c, 0.24, 0.58);
        c.L(0.34, 0.60, 0.28, 0.58, 0.04, br); c.L(0.46, 0.60, 0.34, 0.60, 0.04, br);
      } },
    { k: 'cider', n: 'Warm Cider', fixed: 1, envs: ['hall', 'dusk', 'dawn', 'harvest', 'autumn', 'night', 'storm'], gy: 0.9, lines: ['Apple cider with a cinnamon stick, hot enough to hold with both hands.', 'The steam smells like orchards.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.34, 0.03);
        c.P([[0.20, 0.42], [0.72, 0.42], [0.68, 0.88], [0.24, 0.88]], T(c, '#a8602a')); 
        c.L(0.74, 0.52, 0.90, 0.58, 0.05, T(c, '#a8602a')); c.L(0.90, 0.58, 0.84, 0.76, 0.05, T(c, '#a8602a')); c.L(0.84, 0.76, 0.70, 0.78, 0.05, T(c, '#a8602a'));
        c.E(0.46, 0.42, 0.26, 0.06, T(c, '#e8a020')); c.E(0.46, 0.42, 0.20, 0.04, T(c, '#c87a10'), { flat: 1 });
        c.L(0.40, 0.42, 0.70, 0.08, 0.035, T(c, '#8a4a1a')); c.L(0.40, 0.42, 0.52, 0.28, 0.015, T(c, '#a8602a'), { flat: 1 });
        c.E(0.52, 0.40, 0.05, 0.025, T(c, '#ffffff'), { flat: 1 });
        c.E(0.34, 0.26, 0.025, 0.08, T(c, '#ffffff'), { flat: 1 }); c.E(0.50, 0.20, 0.025, 0.08, T(c, '#ffffff'), { flat: 1 });
        c.R(0.26, 0.46, 0.30, 0.82, T(c, '#c8803a'), { flat: 1 });
        c.E(0.80, 0.90, 0.08, 0.06, T(c, '#c8202c')); c.dot(0.78, 0.88, c.c('#ff9aa0'), 1); c.R(0.80, 0.82, 0.82, 0.86, T(c, '#5a3a1a'), { flat: 1 }); c.RE(0.86, 0.84, 0.04, 0.02, -0.4, T(c, '#2fa04a'));
      } },
    { k: 'fallwreath', n: 'Autumn Door Wreath', fixed: 1, envs: TE, hy: 0.4, lines: ['A ring of leaves, berries and one very small pumpkin.', 'It hangs on the door and says come in and stay a while.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#c8202c', '#e8761f', '#f0b020', '#a8501a', '#8a2a1a'];
        for (i = 0; i < 20; i++) { var a = i * Math.PI * 2 / 20; c.RE(0.5 + Math.cos(a) * 0.32, 0.48 + Math.sin(a) * 0.32, 0.10, 0.05, a + Math.PI / 2 + 0.4, T(c, cs[i % 5])); }
        for (i = 0; i < 14; i++) { var b = i * Math.PI * 2 / 14 + 0.2; c.RE(0.5 + Math.cos(b) * 0.30, 0.48 + Math.sin(b) * 0.30, 0.07, 0.035, b - Math.PI / 2 - 0.5, T(c, cs[(i + 2) % 5])); }
        for (i = 0; i < 7; i++) { var d = i * Math.PI * 2 / 7; c.E(0.5 + Math.cos(d) * 0.32, 0.48 + Math.sin(d) * 0.32, 0.03, 0.03, T(c, '#7a1a2a')); }
        c.E(0.38, 0.80, 0.075, 0.07, T(c, '#f08a1f')); c.E(0.44, 0.80, 0.045, 0.07, T(c, '#f89a30'), { flat: 1 }); c.R(0.39, 0.72, 0.43, 0.76, T(c, '#4a6a2a'));
        c.E(0.58, 0.82, 0.05, 0.05, T(c, '#c8923a')); c.E(0.58, 0.79, 0.04, 0.025, T(c, '#8a5a2a'), { flat: 1 });
        c.P([[0.52, 0.76], [0.74, 0.84], [0.70, 0.94], [0.50, 0.86]], T(c, '#c8501a')); c.P([[0.52, 0.76], [0.70, 0.94], [0.60, 0.90]], T(c, '#a8381a'), { flat: 1 });
      } },
    { k: 'corncob', n: 'Sweet Corn', fixed: 1, envs: TE, gy: 0.9, lines: ['Butter on top and napkins on standby.', 'Every row is a perfect little stripe of sunshine.'],
      draw: function (c, P, r, o) {
        var i, j;
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.P([[0.46, 0.96], [0.14, 0.58], [0.20, 0.30], [0.42, 0.66]], T(c, '#4aa84a')); c.P([[0.54, 0.96], [0.86, 0.58], [0.80, 0.30], [0.58, 0.66]], T(c, '#3a9a3a'));
        c.E(0.5, 0.42, 0.16, 0.36, T(c, '#f8d840'));
        for (j = 0; j < 9; j++) for (i = 0; i < 5; i++) { c.E(0.40 + i * 0.05 + (j % 2) * 0.012, 0.14 + j * 0.065, 0.024, 0.03, T(c, '#fbe868')); c.dot(0.395 + i * 0.05 + (j % 2) * 0.012, 0.13 + j * 0.065, c.c('#fff6b0'), 1); }
        c.P([[0.34, 0.66], [0.50, 0.58], [0.66, 0.66], [0.56, 0.96], [0.44, 0.96]], T(c, '#5ac85a')); c.L(0.50, 0.60, 0.50, 0.96, 0.012, T(c, '#2a7a2a'), { flat: 1 });
        c.R(0.38, 0.14, 0.62, 0.24, T(c, '#ffe880'), { flat: 1 }); c.E(0.5, 0.20, 0.07, 0.025, T(c, '#fffbd0'), { flat: 1 }); c.dot(0.48, 0.19, c.c('#ffffff'), 1);
      } },
    { k: 'thankcard', n: 'Thankful Card', fixed: 1, envs: TE, gy: 0.9, lines: ['Today I am thankful for pie, and also for you.', 'The leaf border was drawn very carefully.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#c8202c', '#e8761f', '#f0b020', '#a8501a'];
        o.shadow(0.5, 0.92, 0.38, 0.03);
        c.R(0.14, 0.10, 0.86, 0.90, T(c, '#fff4d8')); c.R(0.14, 0.10, 0.86, 0.14, T(c, '#f4e0b0'), { flat: 1 }); c.R(0.18, 0.14, 0.82, 0.86, T(c, '#fffaf0'), { flat: 1 });
        for (i = 0; i < 6; i++) { c.RE(0.20 + i * 0.12, 0.17, 0.05, 0.025, 0.3, T(c, cs[i % 4])); c.RE(0.20 + i * 0.12, 0.83, 0.05, 0.025, -0.3, T(c, cs[(i + 1) % 4])); }
        for (i = 0; i < 4; i++) { c.L(0.28, 0.34 + i * 0.12, 0.72, 0.34 + i * 0.12, 0.014, T(c, '#a8501a'), { flat: 1 }); }
        c.L(0.28, 0.34, 0.50, 0.34, 0.03, T(c, '#c8202c'), { flat: 1 });
        c.E(0.66, 0.74, 0.06, 0.06, T(c, '#f08a1f')); c.R(0.65, 0.66, 0.68, 0.69, T(c, '#4a6a2a'));
      } },
    { k: 'rolls', n: 'Dinner Rolls', fixed: 1, envs: ['hall', 'dusk', 'dawn', 'harvest', 'autumn', 'night', 'day'], gy: 0.88, lines: ['Warm, soft and gone before the turkey is carved.', 'The butter is already melting.'],
      draw: function (c, P, r, o) {
        var i, pos = [[0.30, 0.50], [0.50, 0.44], [0.70, 0.50], [0.24, 0.66], [0.44, 0.62], [0.64, 0.66], [0.36, 0.78], [0.58, 0.78]];
        o.shadow(0.5, 0.92, 0.42, 0.03);
        c.R(0.08, 0.20, 0.92, 0.84, T(c, '#a8602a'), { flat: 1 }); c.R(0.08, 0.20, 0.92, 0.26, T(c, '#c8803a'), { flat: 1 });         c.R(0.06, 0.84, 0.94, 0.90, T(c, '#c0c0d0')); c.R(0.06, 0.18, 0.94, 0.22, T(c, '#d8d8e8'));
        c.R(0.12, 0.26, 0.88, 0.82, T(c, '#f4ecd8'), { flat: 1 }); c.R(0.12, 0.26, 0.88, 0.82, T(c, '#f4ecd8'), { flat: 1 });
        for (i = 0; i < pos.length; i++) { c.E(pos[i][0], pos[i][1], 0.12, 0.10, T(c, '#d89a42')); c.E(pos[i][0] - 0.02, pos[i][1] - 0.03, 0.08, 0.05, T(c, '#f0b862'), { flat: 1 }); c.L(pos[i][0] - 0.04, pos[i][1] + 0.0, pos[i][0] + 0.04, pos[i][1] + 0.0, 0.01, T(c, '#a8601a'), { flat: 1 }); }
        c.E(0.5, 0.20, 0.08, 0.04, T(c, '#ffe880')); c.dot(0.5, 0.18, c.c('#ffffff'), 1);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
