/* Easter and holidays: third volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function T(c, h) { return c.tone(h); }
  var EE = ['dawn', 'meadow', 'day', 'rosy', 'dusk', 'forest', 'sea', 'storm', 'autumn', 'snow'];

  K.register('easter', [
    { k: 'eggbasket2', n: 'Egg Hunt Pail', fixed: 1, envs: EE, gy: 0.9, lines: ['A little blue pail, already half full of treasure.', 'The best eggs are always under the bush.'],
      draw: function (c, P, r, o) {
        var cs = ['#ff9ab8', '#fff27a', '#9ad8ff', '#b8ffb0'], i;
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.L(0.18, 0.46, 0.50, 0.04, 0.025, T(c, '#c8c8e0')); c.L(0.82, 0.46, 0.50, 0.04, 0.025, T(c, '#c8c8e0'));
        for (i = 0; i < 4; i++) { var x = 0.30 + i * 0.13, y = 0.38 + (i % 2) * 0.05; c.E(x, y, 0.085, 0.11, T(c, cs[i])); c.L(x - 0.07, y + 0.01, x + 0.07, y + 0.01, 0.014, T(c, '#ffffff'), { flat: 1 }); c.dot(x - 0.02, y - 0.05, c.c('#ffffff'), 1); }
        c.P([[0.14, 0.46], [0.86, 0.46], [0.76, 0.92], [0.24, 0.92]], T(c, '#4aa8ff')); c.P([[0.14, 0.46], [0.30, 0.46], [0.36, 0.92], [0.24, 0.92]], T(c, '#78c4ff'), { flat: 1 });
        c.E(0.5, 0.46, 0.36, 0.05, T(c, '#2a78d8')); c.R(0.22, 0.60, 0.78, 0.68, T(c, '#ffe040'), { flat: 1 });
        c.E(0.40, 0.64, 0.025, 0.025, T(c, '#ff5fa8'), { flat: 1 }); c.E(0.50, 0.64, 0.025, 0.025, T(c, '#ff5fa8'), { flat: 1 }); c.E(0.60, 0.64, 0.025, 0.025, T(c, '#ff5fa8'), { flat: 1 });
      } },
    { k: 'bunnyears', n: 'Bunny Ears Hat', fixed: 1, envs: EE, hy: 0.4, lines: ['Two tall pink ears and a very serious bow.', 'It makes everyone hop a little.'],
      draw: function (c, P, r, o) {
        c.E(0.34, 0.30, 0.11, 0.28, T(c, '#ffffff')); c.E(0.66, 0.30, 0.11, 0.28, T(c, '#ffffff')); c.E(0.34, 0.32, 0.055, 0.21, T(c, '#ffb0cc'), { flat: 1 }); c.E(0.66, 0.32, 0.055, 0.21, T(c, '#ffb0cc'), { flat: 1 });
        c.E(0.5, 0.74, 0.40, 0.20, T(c, '#ffffff')); c.E(0.5, 0.80, 0.34, 0.12, T(c, '#e8ecf8'), { flat: 1 });
        c.R(0.10, 0.60, 0.90, 0.72, T(c, '#a870ff')); c.R(0.10, 0.60, 0.90, 0.63, T(c, '#c8a0ff'), { flat: 1 });
        c.P([[0.50, 0.66], [0.38, 0.56], [0.38, 0.76]], T(c, '#ff5fa8')); c.P([[0.50, 0.66], [0.62, 0.56], [0.62, 0.76]], T(c, '#ff5fa8')); c.E(0.5, 0.66, 0.04, 0.05, T(c, '#e83a88'));
        c.E(0.20, 0.84, 0.06, 0.04, T(c, '#fff0f6'), { flat: 1 }); c.E(0.80, 0.84, 0.06, 0.04, T(c, '#fff0f6'), { flat: 1 });
      } },
    { k: 'chocbunny', n: 'Chocolate Bunny', fixed: 1, envs: EE, gy: 0.9, hy: 0.4, lines: ['Sweet, shiny, and wearing a tiny gold ribbon.', 'Ears first is the only correct way to eat it.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#7a4a2a');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.34, 0.20, 0.07, 0.19, br); c.E(0.62, 0.20, 0.07, 0.19, br); c.E(0.34, 0.22, 0.03, 0.12, T(c, '#a06a40'), { flat: 1 });
        c.E(0.48, 0.80, 0.30, 0.15, br); c.E(0.48, 0.58, 0.22, 0.24, br); c.E(0.40, 0.50, 0.05, 0.12, T(c, '#a06a40'), { flat: 1 });
        c.E(0.46, 0.38, 0.17, 0.15, br); c.dot(0.40, 0.36, c.c('#1a0e08'), 2); c.dot(0.52, 0.36, c.c('#1a0e08'), 2); c.E(0.46, 0.42, 0.03, 0.02, T(c, '#2a1608'), { flat: 1 });
        c.E(0.78, 0.84, 0.08, 0.08, T(c, '#a06a40'));
        c.L(0.30, 0.54, 0.64, 0.54, 0.04, T(c, '#ffd23f')); c.P([[0.47, 0.56], [0.36, 0.50], [0.38, 0.66]], T(c, '#ffd23f')); c.P([[0.47, 0.56], [0.58, 0.50], [0.56, 0.66]], T(c, '#ffd23f')); c.dot(0.42, 0.52, c.c('#fff4a0'), 1);
        c.dot(0.38, 0.30, c.c('#d0a070'), 1);
      } },
    { k: 'hatchegg', n: 'Cracked Egg', fixed: 1, envs: EE, gy: 0.9, lines: ['Something inside is tapping to be let out.', 'A beak, then a wing, then a whole new spring.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.P([[0.18, 0.60], [0.24, 0.46], [0.34, 0.60], [0.44, 0.44], [0.54, 0.60], [0.64, 0.46], [0.76, 0.60], [0.82, 0.60], [0.82, 0.76], [0.18, 0.76]], T(c, '#ffffff'));
        c.E(0.5, 0.40, 0.17, 0.18, T(c, '#ffe040')); c.E(0.44, 0.34, 0.05, 0.04, T(c, '#fff0a0'), { flat: 1 }); c.dot(0.44, 0.38, c.c('#111111'), 2); c.dot(0.56, 0.38, c.c('#111111'), 2); c.P([[0.46, 0.44], [0.54, 0.44], [0.50, 0.50]], T(c, '#ff8a1f'));
        c.E(0.5, 0.80, 0.34, 0.14, T(c, '#fff0f6')); c.E(0.5, 0.82, 0.32, 0.12, T(c, '#ffb0cc'), { flat: 1 }); c.P([[0.18, 0.80], [0.26, 0.72], [0.34, 0.82], [0.44, 0.72], [0.54, 0.82], [0.66, 0.72], [0.74, 0.82], [0.82, 0.74]], T(c, '#ffffff'), { flat: 1 });
        c.P([[0.50, 0.60], [0.46, 0.68], [0.52, 0.72]], T(c, '#c8c8d8'), { flat: 1 });
      } },
    { k: 'pastelcake', n: 'Spring Cake', fixed: 1, envs: EE, gy: 0.9, lines: ['Two layers, pink icing, and a flower on top.', 'Everyone wants the corner with the most frosting.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.38, 0.03);
        c.R(0.10, 0.88, 0.90, 0.92, T(c, '#e8e8f0')); c.R(0.14, 0.60, 0.86, 0.88, T(c, '#fff0f6')); c.R(0.24, 0.34, 0.76, 0.60, T(c, '#ffd0e4'));
        c.R(0.14, 0.60, 0.86, 0.68, T(c, '#ff9ab8')); c.R(0.24, 0.34, 0.76, 0.42, T(c, '#a8e8ff'));
        for (i = 0; i < 6; i++) { c.E(0.20 + i * 0.12, 0.69, 0.04, 0.045, T(c, '#ff9ab8')); } for (i = 0; i < 4; i++) c.E(0.30 + i * 0.13, 0.43, 0.04, 0.04, T(c, '#a8e8ff'));
        for (i = 0; i < 5; i++) c.dot(0.20 + i * 0.15, 0.78, c.c(['#ffe040', '#9ad8ff', '#b8ffb0', '#ffffff', '#ff5fa8'][i]), 3);
        for (i = 0; i < 5; i++) c.E(0.5 + Math.cos(i * 1.256) * 0.07, 0.22 + Math.sin(i * 1.256) * 0.07, 0.045, 0.045, T(c, '#ff5fa8')); c.E(0.5, 0.22, 0.04, 0.04, T(c, '#ffe040')); c.L(0.5, 0.28, 0.5, 0.34, 0.015, T(c, '#2a9a3a'), { flat: 1 });
      } },
    { k: 'songbird', n: 'Spring Songbird', fixed: 1, envs: EE, hy: 0.4, lines: ['It sings the same three notes and means every one.', 'A blue wing on a pink branch means the cold is over.'],
      draw: function (c, P, r, o) {
        c.L(0.0, 0.84, 1.0, 0.78, 0.04, T(c, '#8a5a2a')); for (var i = 0; i < 4; i++) { c.E(0.14 + i * 0.07, 0.72 - (i % 2) * 0.05, 0.05, 0.05, T(c, '#ffb0cc')); c.E(0.78 + i * 0.05, 0.70 - (i % 2) * 0.05, 0.05, 0.05, T(c, '#ffb0cc')); }
        c.P([[0.72, 0.66], [0.98, 0.64], [0.80, 0.76]], T(c, '#2a78d8'));
        c.E(0.46, 0.54, 0.26, 0.22, T(c, '#4aa8ff')); c.E(0.40, 0.62, 0.15, 0.12, T(c, '#fff0d0'), { flat: 1 }); c.E(0.56, 0.54, 0.14, 0.10, T(c, '#2a78d8'));
        c.E(0.30, 0.34, 0.14, 0.14, T(c, '#4aa8ff')); c.P([[0.16, 0.34], [0.04, 0.38], [0.16, 0.42]], T(c, '#ffb020')); c.dot(0.28, 0.32, c.c('#111111'), 2); c.dot(0.27, 0.31, c.c('#ffffff'), 1);
        c.L(0.40, 0.76, 0.40, 0.82, 0.015, T(c, '#ffb020'), { flat: 1 }); c.L(0.52, 0.76, 0.52, 0.82, 0.015, T(c, '#ffb020'), { flat: 1 });
        c.L(0.10, 0.18, 0.12, 0.08, 0.012, T(c, '#c8d8ff'), { flat: 1 }); c.E(0.14, 0.08, 0.025, 0.02, T(c, '#c8d8ff'), { flat: 1 }); c.L(0.20, 0.22, 0.22, 0.12, 0.012, T(c, '#c8d8ff'), { flat: 1 }); c.E(0.24, 0.12, 0.025, 0.02, T(c, '#c8d8ff'), { flat: 1 });
      } }
  ]);

  K.register('holidays', [
    { k: 'fourleaf', n: 'Lucky Clover Patch', fixed: 1, envs: ['meadow', 'day', 'dawn', 'dusk', 'rosy', 'forest', 'sea'], gy: 0.9, lines: ['One in ten thousand and it grew right at your feet.', 'Luck is mostly looking down at the right moment.'],
      draw: function (c, P, r, o) {
        var i, a, g = [['#2fb050', 0.34, 0.34], ['#2fb050', 0.66, 0.34], ['#3ac85a', 0.34, 0.62], ['#3ac85a', 0.66, 0.62]];
        c.L(0.5, 0.52, 0.64, 1.0, 0.04, T(c, '#2a8a3a'));
        for (i = 0; i < 4; i++) { var x = g[i][1], y = g[i][2]; c.E(x - 0.06, y, 0.10, 0.10, T(c, g[i][0])); c.E(x + 0.06, y, 0.10, 0.10, T(c, g[i][0])); c.P([[x, y + 0.14], [x - 0.12, y - 0.02], [x + 0.12, y - 0.02]], T(c, g[i][0])); c.L(x, y + 0.10, x, y - 0.06, 0.012, T(c, '#1a7a2a'), { flat: 1 }); c.dot(x - 0.06, y - 0.04, c.c('#8af0a0'), 2); }
        c.E(0.5, 0.48, 0.045, 0.045, T(c, '#1a7a2a'));
      } },
    { k: 'ballotstar', n: 'Ballot Box', fixed: 1, envs: ['day', 'dawn', 'dusk', 'fireworks', 'night', 'hall'], gy: 0.9, lines: ['One folded paper slides in, and a voice is counted.', 'Everyone gets a sticker for showing up.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.40, 0.03);
        c.R(0.16, 0.46, 0.84, 0.92, c.tone('#2a4ac8')); c.R(0.16, 0.46, 0.26, 0.92, c.tone('#4a6ae8'), { flat: 1 }); c.R(0.12, 0.40, 0.88, 0.50, c.tone('#e8202c')); c.R(0.12, 0.40, 0.88, 0.43, c.tone('#ff5a64'), { flat: 1 });
        c.R(0.36, 0.44, 0.64, 0.48, c.tone('#0a0a1a'), { flat: 1 });
        c.P([[0.38, 0.40], [0.62, 0.40], [0.62, 0.10], [0.38, 0.10]], c.tone('#ffffff')); c.L(0.43, 0.18, 0.57, 0.18, 0.015, c.tone('#a0a0b8'), { flat: 1 }); c.L(0.43, 0.25, 0.57, 0.25, 0.015, c.tone('#a0a0b8'), { flat: 1 }); c.L(0.43, 0.32, 0.54, 0.32, 0.015, c.tone('#a0a0b8'), { flat: 1 });
        c.E(0.5, 0.70, 0.15, 0.15, c.tone('#ffffff')); c.ST(0.5, 0.70, 0.11, 0.045, c.tone('#e8202c')); c.R(0.12, 0.92, 0.88, 0.96, c.tone('#1a2a7a'), { flat: 1 });
      } },
    { k: 'hearthmother', n: 'Mother’s Teacup', fixed: 1, envs: ['dawn', 'day', 'rosy', 'meadow', 'dusk', 'hall'], gy: 0.9, lines: ['Warm tea, a pink rose, and a note that says thanks.', 'She sits down for a minute, which is the best gift.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.42, 0.03);
        c.E(0.5, 0.88, 0.40, 0.06, T(c, '#fff0f6')); c.P([[0.16, 0.50], [0.76, 0.50], [0.68, 0.84], [0.24, 0.84]], T(c, '#ffffff')); c.P([[0.16, 0.50], [0.30, 0.50], [0.34, 0.84], [0.24, 0.84]], T(c, '#e8ecf8'), { flat: 1 });
        c.E(0.46, 0.50, 0.30, 0.05, T(c, '#a0602a')); c.E(0.46, 0.50, 0.26, 0.035, T(c, '#c8803a'), { flat: 1 });
        c.RG(0.78, 0.64, 0.07, 0.13, T(c, '#ffffff'));
        c.R(0.28, 0.62, 0.64, 0.70, T(c, '#ff9ab8'), { flat: 1 }); for (var i = 0; i < 4; i++) c.E(0.34 + i * 0.09, 0.66, 0.022, 0.022, T(c, '#ffffff'), { flat: 1 });
        c.L(0.40, 0.42, 0.40, 0.32, 0.015, T(c, '#e8e8f0'), { flat: 1 }); c.L(0.52, 0.42, 0.52, 0.28, 0.015, T(c, '#e8e8f0'), { flat: 1 });
        c.E(0.88, 0.20, 0.06, 0.06, T(c, '#ff5fa8')); c.E(0.88, 0.20, 0.03, 0.03, T(c, '#c8205a'), { flat: 1 }); c.L(0.88, 0.26, 0.88, 0.44, 0.015, T(c, '#2a9a3a'), { flat: 1 });
      } },
    { k: 'fireside', n: 'Fireside Mug', fixed: 1, envs: ['snow', 'night', 'silent', 'hall', 'aurora', 'dusk'], gy: 0.9, lines: ['Winter outside, warm hands inside.', 'The steam curls into a tiny cloud.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.P([[0.22, 0.34], [0.70, 0.34], [0.66, 0.88], [0.26, 0.88]], T(c, '#c8202c')); c.P([[0.22, 0.34], [0.34, 0.34], [0.36, 0.88], [0.26, 0.88]], T(c, '#e8505a'), { flat: 1 });
        c.RG(0.78, 0.56, 0.07, 0.14, T(c, '#c8202c')); c.E(0.46, 0.34, 0.24, 0.05, T(c, '#5a3018')); c.E(0.46, 0.34, 0.20, 0.03, T(c, '#8a5a30'), { flat: 1 });
        c.R(0.24, 0.52, 0.68, 0.64, T(c, '#ffffff'), { flat: 1 }); for (var i = 0; i < 5; i++) c.E(0.30 + i * 0.09, 0.58, 0.02, 0.02, T(c, '#c8202c'), { flat: 1 });
        for (i = 0; i < 3; i++) { c.E(0.34 + i * 0.12, 0.26, 0.035, 0.05, T(c, '#fff0f6'), { flat: 1 }); c.E(0.36 + i * 0.12, 0.14, 0.03, 0.05, T(c, '#fff0f6'), { flat: 1 }); }
        c.E(0.40, 0.30, 0.05, 0.03, T(c, '#ffffff')); c.E(0.50, 0.30, 0.05, 0.03, T(c, '#ffffff'));
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
