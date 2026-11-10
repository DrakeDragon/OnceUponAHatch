/* Valentine's Day: original pixel designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var VE = ['rosy', 'dusk', 'dawn', 'night', 'hall', 'meadow', 'day', 'aurora'];
  function heart(c, x, y, s, col) { c.E(x - s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.E(x + s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.P([[x - s * 1.02, y - s * 0.05], [x + s * 1.02, y - s * 0.05], [x, y + s * 1.05]], col); }

  K.register('valentine', [
    { k: 'bigheart', n: 'Big Heart', fixed: 1, envs: VE, lines: ['It beats a little faster whenever you walk in.', 'Wrapped in a ribbon that says exactly what it means.'],
      draw: function (c, P, r, o) {
        heart(c, 0.5, 0.40, 0.40, T(c, '#d8102c')); heart(c, 0.5, 0.44, 0.30, T(c, '#ff4a78'));
        c.E(0.30, 0.28, 0.07, 0.05, T(c, '#ffffff'), { flat: 1 }); c.dot(0.24, 0.36, c.c('#ffffff'), 1);
        c.L(0.18, 0.60, 0.82, 0.32, 0.03, T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'rose', n: 'Red Rose', fixed: 1, envs: VE, lines: ['One perfect rose, thorns and all.', 'It says the thing that words keep tripping over.'],
      draw: function (c, P, r, o) {
        var rd = T(c, '#d0102c'), i, g = T(c, '#2fa04a');
        c.L(0.5, 0.46, 0.50, 1.0, 0.045, T(c, '#2a8a3a'));
        c.RE(0.74, 0.74, 0.17, 0.07, -0.6, g); c.L(0.58, 0.84, 0.88, 0.64, 0.01, T(c, '#1a6a2a'), { flat: 1 }); c.RE(0.74, 0.72, 0.12, 0.03, -0.6, T(c, '#4ac86a'), { flat: 1 });
        c.RE(0.26, 0.62, 0.17, 0.07, 0.6, g); c.L(0.42, 0.72, 0.12, 0.52, 0.01, T(c, '#1a6a2a'), { flat: 1 }); c.RE(0.26, 0.60, 0.12, 0.03, 0.6, T(c, '#4ac86a'), { flat: 1 });
        c.dot(0.46, 0.84, c.c('#1a5a28'), 2); c.dot(0.55, 0.64, c.c('#1a5a28'), 2);
        c.P([[0.30, 0.46], [0.70, 0.46], [0.60, 0.58], [0.40, 0.58]], T(c, '#2a8a3a'));
        c.E(0.5, 0.28, 0.30, 0.27, rd); c.E(0.30, 0.34, 0.10, 0.12, T(c, '#e82040')); c.E(0.70, 0.34, 0.10, 0.12, T(c, '#b80c28'));
        c.E(0.5, 0.20, 0.24, 0.16, T(c, '#e82040')); c.E(0.5, 0.28, 0.20, 0.17, T(c, '#b80c28'), { flat: 1 }); c.E(0.5, 0.26, 0.14, 0.12, T(c, '#e82040'));
        c.E(0.5, 0.26, 0.09, 0.08, T(c, '#a80c24'), { flat: 1 }); c.E(0.5, 0.25, 0.05, 0.045, T(c, '#e82040'), { flat: 1 }); c.E(0.5, 0.25, 0.022, 0.022, T(c, '#7a0818'), { flat: 1 });
        c.L(0.30, 0.30, 0.42, 0.40, 0.012, T(c, '#7a0818'), { flat: 1 }); c.L(0.70, 0.30, 0.58, 0.40, 0.012, T(c, '#7a0818'), { flat: 1 });
        c.dot(0.32, 0.22, c.c('#ff8098'), 1); c.dot(0.62, 0.14, c.c('#ff8098'), 1); c.dot(0.40, 0.14, c.c('#ffc0cc'), 1);
      } },
    { k: 'cupid', n: 'Cupid', fixed: 1, envs: VE, hy: 0.3, lines: ['He aims with his heart, not his eyes.', 'Nobody is ever quite sure when he has been.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8c4a0'), sk2 = T(c, '#f0a888');
        c.mir = true; c.P([[0.40, 0.56], [0.14, 0.30], [0.02, 0.30], [0.04, 0.50], [0.12, 0.64], [0.32, 0.68]], T(c, '#ffffff')); c.P([[0.38, 0.56], [0.18, 0.38], [0.10, 0.40], [0.14, 0.56], [0.32, 0.62]], T(c, '#ffd8e8'), { flat: 1 });
        c.L(0.34, 0.58, 0.10, 0.34, 0.012, T(c, '#e8c0d0'), { flat: 1 }); c.L(0.32, 0.62, 0.10, 0.46, 0.012, T(c, '#e8c0d0'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.68, 0.17, 0.20, skin); c.E(0.5, 0.74, 0.10, 0.12, sk2, { flat: 1 });
        c.L(0.38, 0.62, 0.62, 0.50, 0.075, skin); c.E(0.64, 0.49, 0.045, 0.045, skin); c.L(0.64, 0.74, 0.74, 0.62, 0.07, skin);
        c.E(0.42, 0.92, 0.06, 0.08, skin); c.E(0.58, 0.92, 0.06, 0.08, skin); c.P([[0.34, 0.76], [0.66, 0.76], [0.68, 0.88], [0.32, 0.88]], T(c, '#ffffff')); c.R(0.34, 0.80, 0.66, 0.84, T(c, '#ffd0e0'), { flat: 1 });
        c.E(0.5, 0.36, 0.17, 0.17, skin);
        c.E(0.5, 0.24, 0.20, 0.09, T(c, '#f0c040')); c.E(0.35, 0.30, 0.06, 0.09, T(c, '#f0c040')); c.E(0.65, 0.30, 0.06, 0.09, T(c, '#f0c040')); c.E(0.44, 0.20, 0.07, 0.04, T(c, '#fde070'), { flat: 1 });
        c.mir = true; c.E(0.43, 0.38, 0.035, 0.04, P.white, { flat: 1 }); c.E(0.43, 0.385, 0.022, 0.03, T(c, '#4a7ad0'), { flat: 1 }); c.dot(0.43, 0.385, c.c('#0b1030'), 1); c.E(0.37, 0.45, 0.04, 0.025, T(c, '#ff8aa0'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.04, 0.015, T(c, '#c8506a'), { flat: 1 });
        c.L(0.78, 0.30, 0.78, 0.94, 0.02, P.wood); c.L(0.78, 0.30, 0.66, 0.40, 0.02, P.wood); c.L(0.78, 0.94, 0.66, 0.84, 0.02, P.wood); c.L(0.66, 0.40, 0.66, 0.84, 0.008, T(c, '#fff0f4'), { flat: 1 });
        c.L(0.66, 0.62, 0.40, 0.58, 0.014, P.wood); c.P([[0.40, 0.58], [0.34, 0.54], [0.34, 0.62]], T(c, '#e8203c'));
        heart(c, 0.14, 0.16, 0.06, T(c, '#e8203c')); heart(c, 0.88, 0.14, 0.04, T(c, '#ff6a98'));
      } },
    { k: 'chocolates', n: 'Box of Chocolates', fixed: 1, envs: VE, gy: 0.9, lines: ['Nobody knows which one has the caramel.', 'Every single one is somebody’s favorite.'],
      draw: function (c, P, r, o) {
        var i, j;
        o.shadow(0.5, 0.92, 0.42, 0.03);
        c.R(0.08, 0.30, 0.92, 0.90, T(c, '#d0102c')); c.R(0.14, 0.38, 0.86, 0.84, T(c, '#5a1a2a'), { flat: 1 });
        for (i = 0; i < 4; i++) for (j = 0; j < 3; j++) { var col = ['#7a3a1a', '#3a1a10', '#c8a060', '#a82a4a'][(i + j * 2) % 4]; c.E(0.26 + i * 0.16, 0.48 + j * 0.14, 0.065, 0.055, T(c, col)); c.dot(0.24 + i * 0.16, 0.46 + j * 0.14, c.c('#ffffff'), 1); }
        c.P([[0.04, 0.18], [0.96, 0.14], [0.92, 0.30], [0.08, 0.32]], T(c, '#e8203c')); c.R(0.46, 0.14, 0.54, 0.32, T(c, '#ffd0e0'), { flat: 1 });
        heart(c, 0.5, 0.10, 0.07, T(c, '#ffd0e0'));
      } },
    { k: 'loveletter', n: 'Love Letter', fixed: 1, envs: VE, gy: 0.9, lines: ['It took eleven drafts and one brave stamp.', 'The seal is warm and the handwriting is wobbly.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.88, 0.42, 0.03);
        c.R(0.08, 0.28, 0.92, 0.84, T(c, '#fff0f4')); c.P([[0.08, 0.28], [0.5, 0.60], [0.92, 0.28]], T(c, '#ffd0e0'));
        c.P([[0.08, 0.84], [0.44, 0.52], [0.5, 0.56], [0.56, 0.52], [0.92, 0.84]], T(c, '#ffe0ea'), { flat: 1 });
        c.L(0.08, 0.28, 0.5, 0.60, 0.01, T(c, '#e8a0b8'), { flat: 1 }); c.L(0.92, 0.28, 0.5, 0.60, 0.01, T(c, '#e8a0b8'), { flat: 1 });
        c.E(0.5, 0.58, 0.09, 0.09, T(c, '#d0102c')); heart(c, 0.5, 0.56, 0.045, T(c, '#ff8098'));
        c.R(0.30, 0.04, 0.70, 0.30, T(c, '#ffffff')); for (var i = 0; i < 3; i++) c.L(0.34, 0.10 + i * 0.06, 0.66 - i * 0.04, 0.10 + i * 0.06, 0.012, T(c, '#e8789a'), { flat: 1 });
        heart(c, 0.82, 0.24, 0.05, T(c, '#e82040'));
      } },
    { k: 'balloons', n: 'Heart Balloons', fixed: 1, envs: VE, hy: 0.4, lines: ['They float up on every wish.', 'Three hearts on three strings, all pulling toward the sky.'],
      draw: function (c, P, r, o) {
        heart(c, 0.28, 0.30, 0.22, T(c, '#e82040')); heart(c, 0.68, 0.24, 0.24, T(c, '#ff6aa8')); heart(c, 0.50, 0.50, 0.20, T(c, '#c030a0'));
        c.L(0.28, 0.52, 0.50, 0.98, 0.008, T(c, '#e8e8f0'), { flat: 1 }); c.L(0.68, 0.48, 0.50, 0.98, 0.008, T(c, '#e8e8f0'), { flat: 1 }); c.L(0.50, 0.70, 0.50, 0.98, 0.008, T(c, '#e8e8f0'), { flat: 1 });
        c.E(0.20, 0.22, 0.04, 0.03, T(c, '#ffffff'), { flat: 1 }); c.E(0.60, 0.15, 0.04, 0.03, T(c, '#ffffff'), { flat: 1 }); c.E(0.44, 0.43, 0.035, 0.025, T(c, '#ffffff'), { flat: 1 });
        c.P([[0.50, 0.96], [0.40, 1.0], [0.60, 1.0]], T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'bouquet', n: 'Bouquet', fixed: 1, envs: VE, hy: 0.4, lines: ['Roses, tulips and a little baby’s breath.', 'It smells like a very good decision.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#e8203c', '#ff6aa8', '#ffffff', '#ffb0c8', '#d0102c'];
        for (i = 0; i < 7; i++) c.L(0.5, 0.62, 0.22 + i * 0.09, 0.30 + (i % 3) * 0.06, 0.02, T(c, '#2a8a3a'));
        c.RE(0.30, 0.52, 0.09, 0.035, 0.5, T(c, '#34b858')); c.RE(0.70, 0.52, 0.09, 0.035, -0.5, T(c, '#34b858'));
        var pos = [[0.26, 0.40], [0.40, 0.26], [0.60, 0.26], [0.74, 0.40], [0.50, 0.40], [0.38, 0.48], [0.62, 0.48], [0.50, 0.14]];
        for (i = 0; i < pos.length; i++) { var col = cs[i % 5]; c.E(pos[i][0], pos[i][1], 0.12, 0.11, T(c, col)); c.E(pos[i][0] + 0.01, pos[i][1] + 0.015, 0.07, 0.055, T(c, ['#a80c24', '#e04a88', '#dcdcec', '#f080a0', '#a80c24'][i % 5]), { flat: 1 }); c.E(pos[i][0] - 0.01, pos[i][1] - 0.01, 0.04, 0.03, T(c, col), { flat: 1 }); c.dot(pos[i][0] - 0.05, pos[i][1] - 0.05, c.c('#ffffff'), 1); }
        for (i = 0; i < 6; i++) c.dot(0.20 + i * 0.12, 0.54 + (i % 2) * 0.02, c.c('#ffffff'), 2);
        c.P([[0.50, 1.0], [0.18, 0.54], [0.82, 0.54]], T(c, '#fff0f4')); c.P([[0.50, 1.0], [0.34, 0.58], [0.66, 0.58]], T(c, '#ff8ab8'), { flat: 1 });
        c.R(0.30, 0.64, 0.70, 0.70, T(c, '#e8203c'), { flat: 1 }); heart(c, 0.5, 0.80, 0.07, T(c, '#e8203c')); c.dot(0.47, 0.78, c.c('#ff9aa8'), 1);
      } },
    { k: 'lovebirds', n: 'Lovebirds', fixed: 1, envs: VE, gy: 0.9, lines: ['Two little birds who finish each other’s songs.', 'They share the same branch and the same blanket of sky.'],
      draw: function (c, P, r, o) {
        c.L(0.04, 0.78, 0.96, 0.74, 0.03, P.wood);
        c.mir = false;
        c.E(0.32, 0.56, 0.17, 0.20, T(c, '#2fb050')); c.E(0.32, 0.36, 0.11, 0.11, T(c, '#2fb050')); c.E(0.30, 0.34, 0.06, 0.06, T(c, '#ff6a2a')); c.P([[0.40, 0.34], [0.48, 0.38], [0.40, 0.42]], T(c, '#ffd23f')); c.dot(0.34, 0.33, c.c('#111111'), 1);
        c.P([[0.24, 0.60], [0.10, 0.84], [0.24, 0.80]], T(c, '#1a8a40'));
        c.E(0.68, 0.56, 0.17, 0.20, T(c, '#4a8aff')); c.E(0.68, 0.36, 0.11, 0.11, T(c, '#4a8aff')); c.E(0.70, 0.34, 0.06, 0.06, T(c, '#ffd23f')); c.P([[0.60, 0.34], [0.52, 0.38], [0.60, 0.42]], T(c, '#ff8a1f')); c.dot(0.66, 0.33, c.c('#111111'), 1);
        c.P([[0.76, 0.60], [0.90, 0.84], [0.76, 0.80]], T(c, '#2a5ac8'));
        c.E(0.32, 0.62, 0.09, 0.10, T(c, '#a0e8a0'), { flat: 1 }); c.E(0.68, 0.62, 0.09, 0.10, T(c, '#a8d0ff'), { flat: 1 });
        heart(c, 0.5, 0.22, 0.09, T(c, '#e82040')); c.R(0.28, 0.74, 0.34, 0.80, T(c, '#ff8a1f'), { flat: 1 }); c.R(0.64, 0.74, 0.70, 0.80, T(c, '#ff8a1f'), { flat: 1 });
      } },
    { k: 'candyhearts', n: 'Candy Hearts', fixed: 1, envs: VE, gy: 0.9, lines: ['Little pastel hearts with very big feelings.', 'They are chalky, they are sweet and they say BE MINE.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.40, 0.03);
        c.P([[0.14, 0.72], [0.86, 0.72], [0.80, 0.96], [0.20, 0.96]], T(c, '#ffd0dc')); c.E(0.5, 0.72, 0.36, 0.06, T(c, '#ffe4ec')); c.R(0.14, 0.80, 0.86, 0.84, T(c, '#e8506a'), { flat: 1 });
        heart(c, 0.30, 0.40, 0.20, T(c, '#ff8ab8')); heart(c, 0.70, 0.44, 0.20, T(c, '#a8e8c8')); heart(c, 0.50, 0.58, 0.20, T(c, '#ffe080')); heart(c, 0.22, 0.62, 0.12, T(c, '#c8a0ff')); heart(c, 0.80, 0.64, 0.12, T(c, '#ffb070'));
        c.L(0.22, 0.38, 0.38, 0.38, 0.012, T(c, '#c8305a'), { flat: 1 }); c.L(0.62, 0.42, 0.78, 0.42, 0.012, T(c, '#2a7a5a'), { flat: 1 }); c.L(0.42, 0.56, 0.58, 0.56, 0.012, T(c, '#c89018'), { flat: 1 });
        c.dot(0.24, 0.30, c.c('#ffffff'), 1); c.dot(0.64, 0.34, c.c('#ffffff'), 1); c.dot(0.44, 0.48, c.c('#ffffff'), 1);
      } },
    { k: 'ring', n: 'Sparkling Ring', fixed: 1, envs: VE, gy: 0.9, lines: ['A tiny circle that holds a very big question.', 'The answer, as always, is yes.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.4, 0.025);
        c.R(0.10, 0.62, 0.90, 0.94, T(c, '#5a1a50')); c.R(0.10, 0.62, 0.90, 0.70, T(c, '#8a2a78'), { flat: 1 }); c.E(0.5, 0.62, 0.40, 0.05, T(c, '#a83a90'));
        c.E(0.5, 0.64, 0.24, 0.20, T(c, '#e8c040')); c.E(0.5, 0.64, 0.16, 0.13, T(c, '#5a1a50'), { flat: 1 });
        c.E(0.40, 0.56, 0.05, 0.03, T(c, '#fff0a0'), { flat: 1 });
        c.P([[0.42, 0.46], [0.58, 0.46], [0.64, 0.38], [0.5, 0.24], [0.36, 0.38]], T(c, '#a8e8ff'));
        c.P([[0.42, 0.46], [0.5, 0.38], [0.36, 0.38]], T(c, '#e8faff'), { flat: 1 }); c.P([[0.58, 0.46], [0.5, 0.38], [0.64, 0.38]], T(c, '#6ac8f0'), { flat: 1 });
        c.dot(0.5, 0.14, c.c('#ffffff'), 2); c.dot(0.5, 0.08, c.c('#ffffff'), 1); c.dot(0.40, 0.18, c.c('#ffffff'), 1); c.dot(0.60, 0.18, c.c('#ffffff'), 1); c.dot(0.28, 0.30, c.c('#ffffff'), 1); c.dot(0.72, 0.30, c.c('#ffffff'), 1);
      } },
    { k: 'teddy', n: 'Teddy with a Heart', fixed: 1, envs: VE, gy: 0.9, hy: 0.4, lines: ['He is soft, he is loyal, and he is holding something for you.', 'Hugs come free with every bear.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#b8782a'), lt = T(c, '#e8c088');
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.E(0.5, 0.70, 0.28, 0.26, br); c.E(0.5, 0.74, 0.17, 0.17, lt, { flat: 1 });
        c.E(0.26, 0.58, 0.07, 0.12, br); c.E(0.74, 0.58, 0.07, 0.12, br); c.E(0.32, 0.92, 0.10, 0.06, br); c.E(0.68, 0.92, 0.10, 0.06, br);
        c.E(0.32, 0.92, 0.06, 0.035, lt, { flat: 1 }); c.E(0.68, 0.92, 0.06, 0.035, lt, { flat: 1 });
        c.E(0.5, 0.34, 0.22, 0.20, br); c.E(0.30, 0.18, 0.07, 0.07, br); c.E(0.70, 0.18, 0.07, 0.07, br); c.E(0.30, 0.18, 0.035, 0.035, lt, { flat: 1 }); c.E(0.70, 0.18, 0.035, 0.035, lt, { flat: 1 });
        c.E(0.5, 0.42, 0.10, 0.075, lt); c.E(0.5, 0.40, 0.04, 0.025, P.black, { flat: 1 });
        c.mir = true; c.E(0.40, 0.31, 0.025, 0.03, P.black, { flat: 1 }); c.mir = false;
        c.L(0.5, 0.42, 0.5, 0.46, 0.008, P.black, { flat: 1 });
        c.P([[0.34, 0.54], [0.5, 0.60], [0.66, 0.54], [0.5, 0.54]], T(c, '#e82040'), { flat: 1 }); heart(c, 0.5, 0.74, 0.10, T(c, '#e82040')); c.dot(0.46, 0.70, c.c('#ff9aa8'), 1);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
