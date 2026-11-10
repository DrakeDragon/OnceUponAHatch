/* Halloween, Easter and More Holidays: second volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  function hl(c, x, y) { c.dot(x, y, c.c('#ffffff'), 1); }
  var HE = ['night', 'dusk', 'storm', 'forest', 'aurora', 'hall', 'autumn', 'harvest', 'dawn', 'desert'];
  var EE = ['dawn', 'meadow', 'day', 'rosy', 'dusk', 'forest', 'sea', 'storm', 'autumn', 'snow'];
  var ME = ['day', 'dawn', 'dusk', 'meadow', 'night', 'fireworks', 'snow', 'hall', 'sea', 'aurora', 'rosy', 'silent'];

  K.register('halloween', [
    { k: 'blackcat', n: 'Black Cat', fixed: 1, envs: HE, gy: 0.9, hy: 0.4, lines: ['It crossed the road and nothing bad happened, which is rude.', 'Yellow eyes, arched back, and a very good tail.'],
      draw: function (c, P, r, o) {
        var bk = T(c, '#2a2438');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.P([[0.74, 0.90], [0.96, 0.84], [0.96, 0.52], [0.88, 0.40], [0.84, 0.48], [0.88, 0.56], [0.86, 0.76], [0.72, 0.80]], bk);
        c.E(0.50, 0.70, 0.26, 0.22, bk); c.E(0.38, 0.62, 0.06, 0.16, T(c, '#3a3248'), { flat: 1 }); c.E(0.36, 0.93, 0.09, 0.04, bk); c.E(0.64, 0.93, 0.09, 0.04, bk);
        c.E(0.46, 0.38, 0.21, 0.18, bk); c.P([[0.30, 0.30], [0.28, 0.10], [0.42, 0.24]], bk); c.P([[0.62, 0.28], [0.68, 0.10], [0.56, 0.24]], bk); c.P([[0.31, 0.26], [0.31, 0.15], [0.38, 0.23]], T(c, '#c87a9a'), { flat: 1 });
        c.E(0.38, 0.37, 0.05, 0.06, T(c, '#ffe040')); c.E(0.54, 0.37, 0.05, 0.06, T(c, '#ffe040')); c.E(0.38, 0.37, 0.012, 0.05, T(c, '#0a0a10'), { flat: 1 }); c.E(0.54, 0.37, 0.012, 0.05, T(c, '#0a0a10'), { flat: 1 }); hl(c, 0.36, 0.34); hl(c, 0.52, 0.34);
        c.P([[0.43, 0.43], [0.49, 0.43], [0.46, 0.47]], T(c, '#ff7a98')); for (var i = 0; i < 3; i++) { c.L(0.34, 0.46 + i * 0.012, 0.18, 0.44 + i * 0.03, 0.005, T(c, '#c8c8e0'), { flat: 1 }); c.L(0.58, 0.46 + i * 0.012, 0.74, 0.44 + i * 0.03, 0.005, T(c, '#c8c8e0'), { flat: 1 }); }
        c.L(0.34, 0.56, 0.60, 0.56, 0.03, T(c, '#e87a1f')); c.E(0.46, 0.60, 0.035, 0.035, T(c, '#ffd23f'));
      } },
    { k: 'mummy', n: 'Mummy', fixed: 1, envs: HE, hy: 0.35, lines: ['Wrapped up and wandering, with a very polite groan.', 'Please do not pull the loose bandage.'],
      draw: function (c, P, r, o) {
        var bd = T(c, '#e8e0c8'), i;
        c.P([[0.14, 1.0], [0.86, 1.0], [0.80, 0.68], [0.20, 0.68]], bd); c.L(0.14, 0.78, 0.86, 0.72, 0.03, T(c, '#c8c0a0'), { flat: 1 }); c.L(0.14, 0.88, 0.86, 0.84, 0.03, T(c, '#c8c0a0'), { flat: 1 }); c.L(0.18, 0.96, 0.82, 0.94, 0.03, T(c, '#c8c0a0'), { flat: 1 });
        c.E(0.5, 0.40, 0.26, 0.28, bd);
        for (i = 0; i < 7; i++) c.L(0.26, 0.20 + i * 0.075, 0.74, 0.24 + i * 0.07 - (i % 2) * 0.02, 0.035, i % 2 ? T(c, '#f4eeda') : T(c, '#d0c8a8'), { flat: 1 });
        c.R(0.28, 0.34, 0.72, 0.46, T(c, '#14101e'));
        c.E(0.40, 0.40, 0.055, 0.04, T(c, '#fff8a0')); c.E(0.60, 0.40, 0.055, 0.04, T(c, '#fff8a0')); c.dot(0.40, 0.40, c.c('#1a1020'), 2); c.dot(0.60, 0.40, c.c('#1a1020'), 2);
        c.L(0.72, 0.52, 0.90, 0.74, 0.022, bd); c.L(0.90, 0.74, 0.94, 0.96, 0.02, bd, { flat: 1 });
        c.L(0.26, 0.60, 0.12, 0.70, 0.04, bd); c.L(0.74, 0.62, 0.88, 0.72, 0.04, bd);
      } },
    { k: 'frank', n: 'Gentle Monster', fixed: 1, envs: HE, hy: 0.35, lines: ['Green, bolted and secretly very kind.', 'He only wants to be invited to the party.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#7ac858'), i;
        c.P([[0.08, 1.0], [0.92, 1.0], [0.86, 0.70], [0.14, 0.70]], T(c, '#2a2a3a')); c.R(0.44, 0.70, 0.56, 1.0, T(c, '#f0f0f8')); c.dot(0.38, 0.84, c.c('#c8c8d8'), 2); c.dot(0.62, 0.84, c.c('#c8c8d8'), 2);
        c.R(0.42, 0.62, 0.58, 0.72, gr); c.E(0.12, 0.64, 0.04, 0.03, T(c, '#c8c8d8')); c.R(0.06, 0.68, 0.16, 0.72, T(c, '#c8c8d8')); c.E(0.88, 0.64, 0.04, 0.03, T(c, '#c8c8d8'));
        c.R(0.24, 0.18, 0.76, 0.66, gr); c.R(0.24, 0.12, 0.76, 0.22, T(c, '#1a1a2a')); c.R(0.28, 0.20, 0.72, 0.28, T(c, '#2a2a3a'), { flat: 1 });
        for (i = 0; i < 4; i++) c.L(0.34 + i * 0.1, 0.20, 0.34 + i * 0.1, 0.30, 0.01, T(c, '#1a1a2a'), { flat: 1 });
        c.E(0.38, 0.40, 0.065, 0.05, T(c, '#f8f8e8')); c.E(0.62, 0.40, 0.065, 0.05, T(c, '#f8f8e8')); c.dot(0.39, 0.41, c.c('#1a1a22'), 2); c.dot(0.61, 0.41, c.c('#1a1a22'), 2); c.L(0.30, 0.34, 0.46, 0.35, 0.025, T(c, '#4a8a38'), { flat: 1 }); c.L(0.54, 0.35, 0.70, 0.34, 0.025, T(c, '#4a8a38'), { flat: 1 });
        c.L(0.40, 0.58, 0.60, 0.58, 0.02, T(c, '#2a4a1a'), { flat: 1 }); c.L(0.44, 0.56, 0.44, 0.60, 0.01, T(c, '#f0f0f8'), { flat: 1 }); c.L(0.56, 0.56, 0.56, 0.60, 0.01, T(c, '#f0f0f8'), { flat: 1 });
        c.L(0.14, 0.40, 0.24, 0.42, 0.02, T(c, '#c8c8d8')); c.L(0.86, 0.40, 0.76, 0.42, 0.02, T(c, '#c8c8d8')); c.E(0.12, 0.40, 0.05, 0.04, T(c, '#c8c8d8')); c.E(0.88, 0.40, 0.05, 0.04, T(c, '#c8c8d8'));
        c.L(0.30, 0.50, 0.34, 0.53, 0.01, T(c, '#4a8a38'), { flat: 1 }); c.L(0.62, 0.50, 0.68, 0.52, 0.01, T(c, '#4a8a38'), { flat: 1 }); c.E(0.30, 0.50, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 });
      } },
    { k: 'potion', n: 'Potion Bottle', fixed: 1, envs: HE, gy: 0.9, lines: ['Purple, bubbling, and labeled with a skull and a smiley face.', 'Do not drink, but do admire.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.32, 0.03);
        c.E(0.5, 0.64, 0.30, 0.30, T(c, '#cfe8f8')); c.R(0.42, 0.20, 0.58, 0.40, T(c, '#cfe8f8')); c.E(0.5, 0.64, 0.26, 0.26, T(c, '#a8d0f0'), { flat: 1 });
        c.DM(0.5, 0.74, 0.26, 0.2, T(c, '#a850e8'), { flat: 1 }); c.R(0.24, 0.66, 0.76, 0.84, T(c, '#a850e8'), { flat: 1 }); c.E(0.5, 0.84, 0.26, 0.08, T(c, '#a850e8')); c.E(0.5, 0.66, 0.26, 0.04, T(c, '#c890ff'), { flat: 1 });
        c.R(0.40, 0.12, 0.60, 0.22, T(c, '#8a5a2a')); c.R(0.40, 0.12, 0.60, 0.15, T(c, '#b88040'), { flat: 1 });
        c.E(0.40, 0.58, 0.06, 0.06, T(c, '#e8c0ff'), { flat: 1 }); c.E(0.60, 0.52, 0.04, 0.04, T(c, '#e8c0ff'), { flat: 1 }); c.E(0.50, 0.46, 0.03, 0.03, T(c, '#e8c0ff'), { flat: 1 });
        c.R(0.38, 0.66, 0.62, 0.82, T(c, '#fff4d8')); c.E(0.5, 0.72, 0.05, 0.05, T(c, '#2a2a38'), { flat: 1 }); c.R(0.47, 0.76, 0.53, 0.79, T(c, '#2a2a38'), { flat: 1 }); c.dot(0.48, 0.72, c.c('#fff4d8'), 1); c.dot(0.52, 0.72, c.c('#fff4d8'), 1);
        c.dot(0.34, 0.50, c.c('#ffffff'), 2); c.E(0.36, 0.40, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 });
        c.E(0.36, 0.06, 0.03, 0.03, T(c, '#c890ff')); c.E(0.56, 0.02, 0.02, 0.02, T(c, '#c890ff'));
      } },
    { k: 'tombstone', n: 'Graveyard', fixed: 1, envs: ['night', 'dusk', 'storm', 'forest', 'aurora', 'dawn', 'autumn'], gy: 0.92, lines: ['A few crooked stones and a very polite ghost.', 'RIP: Here lies someone who ate all the candy.'],
      draw: function (c, P, r, o) {
        var gs = T(c, '#8a8aa0'), gd = T(c, '#6a6a80');
        c.R(0.0, 0.84, 1.0, 1.0, T(c, '#2a2438'));
        c.P([[0.50, 0.84], [0.50, 0.30], [0.58, 0.24], [0.84, 0.24], [0.92, 0.30], [0.92, 0.84]], gs); c.R(0.56, 0.36, 0.60, 0.76, gd, { flat: 1 }); c.L(0.64, 0.46, 0.84, 0.46, 0.02, gd, { flat: 1 }); c.L(0.64, 0.56, 0.80, 0.56, 0.02, gd, { flat: 1 }); c.L(0.64, 0.66, 0.76, 0.66, 0.02, gd, { flat: 1 });
        c.R(0.08, 0.84, 0.18, 0.40, gs); c.E(0.13, 0.40, 0.05, 0.04, gs);
        c.R(0.06, 0.52, 0.20, 0.58, gs); c.R(0.10, 0.36, 0.16, 0.74, gs); c.R(0.10, 0.36, 0.12, 0.74, gd, { flat: 1 });
        c.P([[0.22, 0.84], [0.22, 0.52], [0.30, 0.46], [0.42, 0.52], [0.42, 0.84]], gd); c.E(0.32, 0.64, 0.05, 0.05, T(c, '#4a4a60'), { flat: 1 });
        c.dot(0.28, 0.76, c.c('#2a8a3a'), 2); c.dot(0.38, 0.80, c.c('#2a8a3a'), 2); c.dot(0.78, 0.80, c.c('#2a8a3a'), 2);
        c.P([[0.16, 0.30], [0.30, 0.30], [0.30, 0.14], [0.22, 0.06], [0.14, 0.14]], T(c, '#f4f6ff')); c.dot(0.19, 0.16, c.c('#1a1a2a'), 2); c.dot(0.25, 0.16, c.c('#1a1a2a'), 2); c.E(0.22, 0.22, 0.02, 0.025, T(c, '#1a1a2a'), { flat: 1 });
      } },
    { k: 'bucket', n: 'Trick-or-Treat Bucket', fixed: 1, envs: HE, gy: 0.9, lines: ['Piled so high that the handle is jealous.', 'The little pumpkin pail is the best-dressed candy collector.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#e8202c', '#ffd23f', '#2fb050', '#2a6ae0', '#ff8ad8', '#ffffff'];
        o.shadow(0.5, 0.94, 0.38, 0.03);
        c.E(0.5, 0.64, 0.38, 0.30, T(c, '#f08a1f')); c.E(0.34, 0.64, 0.14, 0.29, T(c, '#f89a30'), { flat: 1 }); c.L(0.50, 0.38, 0.50, 0.92, 0.01, T(c, '#c8601a'), { flat: 1 }); c.L(0.30, 0.40, 0.22, 0.88, 0.01, T(c, '#c8601a'), { flat: 1 }); c.L(0.70, 0.40, 0.78, 0.88, 0.01, T(c, '#c8601a'), { flat: 1 });
        c.E(0.5, 0.40, 0.34, 0.07, T(c, '#c8601a')); 
        for (i = 0; i < 9; i++) { var x = 0.22 + (i % 5) * 0.14, y = 0.36 - Math.floor(i / 5) * 0.08 - (i % 2) * 0.03; c.RE(x, y, 0.06, 0.035, i * 0.9, T(c, cs[i % 6])); c.dot(x - 0.02, y - 0.01, c.c('#ffffff'), 1); }
        c.P([[0.30, 0.56], [0.44, 0.52], [0.40, 0.62]], T(c, '#1a1a22'), { flat: 1 }); c.P([[0.70, 0.56], [0.56, 0.52], [0.60, 0.62]], T(c, '#1a1a22'), { flat: 1 }); c.P([[0.32, 0.74], [0.68, 0.74], [0.62, 0.82], [0.54, 0.78], [0.46, 0.82], [0.38, 0.78]], T(c, '#1a1a22'), { flat: 1 });
        c.L(0.12, 0.46, 0.28, 0.10, 0.02, T(c, '#2a2a38')); c.L(0.88, 0.46, 0.72, 0.10, 0.02, T(c, '#2a2a38')); c.L(0.28, 0.10, 0.72, 0.10, 0.02, T(c, '#2a2a38'));
      } },
    { k: 'spookytree', n: 'Spooky Tree', fixed: 1, envs: ['night', 'dusk', 'storm', 'aurora', 'dawn', 'autumn', 'forest'], gy: 0.92, lines: ['Its branches reach like long fingers, and a lantern swings from one.', 'The owl on top has seen things.'],
      draw: function (c, P, r, o) {
        var bk = T(c, '#2a1e32');
        c.P([[0.40, 1.0], [0.46, 0.60], [0.40, 0.40], [0.50, 0.46], [0.60, 0.38], [0.56, 0.60], [0.64, 1.0]], bk);
        c.L(0.44, 0.58, 0.14, 0.44, 0.045, bk); c.L(0.14, 0.44, 0.06, 0.26, 0.03, bk); c.L(0.14, 0.44, 0.22, 0.30, 0.025, bk); c.L(0.26, 0.50, 0.14, 0.58, 0.02, bk);
        c.L(0.56, 0.54, 0.88, 0.40, 0.045, bk); c.L(0.88, 0.40, 0.94, 0.22, 0.03, bk); c.L(0.88, 0.40, 0.78, 0.26, 0.025, bk); c.L(0.74, 0.46, 0.86, 0.58, 0.02, bk);
        c.L(0.48, 0.44, 0.40, 0.20, 0.04, bk); c.L(0.52, 0.42, 0.62, 0.16, 0.035, bk); c.L(0.40, 0.20, 0.30, 0.08, 0.025, bk); c.L(0.62, 0.16, 0.70, 0.06, 0.022, bk);
        c.E(0.50, 0.66, 0.025, 0.04, T(c, '#ffd23f'), { flat: 1 }); c.E(0.46, 0.66, 0.0, 0.0, bk);
        c.L(0.80, 0.34, 0.80, 0.42, 0.01, T(c, '#c8c8d8'), { flat: 1 }); c.R(0.77, 0.42, 0.83, 0.52, T(c, '#5a3a1a')); c.E(0.80, 0.48, 0.035, 0.05, T(c, '#ffd23f')); c.E(0.80, 0.48, 0.015, 0.03, T(c, '#ffffff'), { flat: 1 });
        c.E(0.62, 0.12, 0.05, 0.05, T(c, '#8a6a4a')); c.E(0.60, 0.11, 0.015, 0.015, T(c, '#ffe040'), { flat: 1 }); c.E(0.65, 0.11, 0.015, 0.015, T(c, '#ffe040'), { flat: 1 }); c.P([[0.58, 0.08], [0.58, 0.03], [0.62, 0.07]], T(c, '#8a6a4a')); c.P([[0.66, 0.08], [0.66, 0.03], [0.62, 0.07]], T(c, '#8a6a4a'));
        c.R(0.38, 0.92, 0.66, 1.0, T(c, '#1a1424'), { flat: 1 });
      } },
    { k: 'broom', n: 'Witch’s Broom', fixed: 1, envs: HE, hy: 0.4, lines: ['Swept the sky clean and left a trail of sparks.', 'It only turns left, which is a little bit of a problem.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.10, 0.88, 0.70, 0.30, 0.04, T(c, '#8a5a2a')); c.L(0.14, 0.84, 0.66, 0.34, 0.012, T(c, '#c8903a'), { flat: 1 });
        c.P([[0.66, 0.26], [0.78, 0.20], [0.98, 0.14], [0.98, 0.46], [0.80, 0.42], [0.72, 0.34]], T(c, '#c8a040')); for (i = 0; i < 7; i++) c.L(0.72 + i * 0.01, 0.26 + i * 0.03, 0.98, 0.16 + i * 0.045, 0.012, i % 2 ? T(c, '#a88030') : T(c, '#e8c060'), { flat: 1 });
        c.R(0.66, 0.24, 0.76, 0.40, T(c, '#7a4a1a')); c.L(0.66, 0.32, 0.78, 0.26, 0.03, T(c, '#c8202c'), { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.12 - i * 0.015, 0.90 + i * 0.015, c.c(['#ffd23f', '#ff8a2a', '#ffffff'][i % 3]), 2);
        spark(c, 0.04, 0.94, 0.05, '#ffe680'); spark(c, 0.20, 0.96, 0.04, '#ffffff');
        c.ST(0.30, 0.16, 0.05, 0.02, T(c, '#ffd23f')); c.ST(0.46, 0.08, 0.04, 0.016, T(c, '#c890ff'));
      } }
  ]);

  K.register('easter', [
    { k: 'eggnest', n: 'Nest of Eggs', fixed: 1, envs: EE, gy: 0.9, lines: ['Three pastel eggs in a nest of soft straw.', 'A very proud bird is somewhere nearby.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#ff9ab8', '#9ad8ff', '#fff27a', '#b8ffb0'];
        o.shadow(0.5, 0.94, 0.42, 0.03);
        c.E(0.5, 0.76, 0.44, 0.18, T(c, '#a87028'));
        for (i = 0; i < 3; i++) { var x = 0.30 + i * 0.20, y = 0.54 + (i % 2) * 0.04; c.E(x, y, 0.11, 0.15, T(c, cs[i])); c.E(x - 0.03, y - 0.05, 0.03, 0.05, T(c, '#ffffff'), { flat: 1 }); c.L(x - 0.08, y + 0.02, x + 0.08, y + 0.02, 0.016, T(c, '#ffffff'), { flat: 1 }); c.dot(x - 0.02, y + 0.07, c.c('#ffffff'), 1); c.dot(x + 0.04, y - 0.01, c.c('#ffffff'), 1); }
        c.E(0.5, 0.78, 0.40, 0.10, T(c, '#c8903a')); for (i = 0; i < 12; i++) c.L(0.12 + i * 0.07, 0.72 + (i % 3) * 0.06, 0.18 + i * 0.07, 0.80 + (i % 2) * 0.05, 0.015, T(c, i % 2 ? '#e8b860' : '#a87028'), { flat: 1 });
        c.E(0.5, 0.86, 0.36, 0.06, T(c, '#8a5a1a'), { flat: 1 });
      } },
    { k: 'carrot', n: 'Garden Carrot', fixed: 1, envs: EE, hy: 0.4, lines: ['Orange, crunchy and exactly what the bunny ordered.', 'The leaves are the fancy part.'],
      draw: function (c, P, r, o) {
        var i;
        for (i = 0; i < 5; i++) c.L(0.50, 0.34, 0.26 + i * 0.12, 0.02 + (i % 2) * 0.08, 0.05, T(c, i % 2 ? '#2fb050' : '#4ad070'));
        c.P([[0.26, 0.28], [0.74, 0.28], [0.50, 1.0]], T(c, '#ff8a1f')); c.P([[0.26, 0.28], [0.42, 0.28], [0.50, 1.0]], T(c, '#ffaa4a'), { flat: 1 });
        for (i = 0; i < 6; i++) c.L(0.34 + i * 0.01, 0.38 + i * 0.1, 0.52 - i * 0.02, 0.38 + i * 0.1, 0.016, T(c, '#d86a10'), { flat: 1 });
        c.E(0.5, 0.28, 0.24, 0.05, T(c, '#e87a1a')); c.dot(0.36, 0.34, c.c('#ffd8a0'), 2);
      } },
    { k: 'duckling', n: 'Duckling', fixed: 1, envs: EE, gy: 0.9, hy: 0.4, lines: ['Waddle, waddle, splash.', 'It follows the first thing that walks past, so please walk carefully.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.50, 0.70, 0.28, 0.22, T(c, '#ffe040')); c.E(0.46, 0.76, 0.16, 0.12, T(c, '#fff0a0'), { flat: 1 }); c.P([[0.76, 0.66], [0.92, 0.56], [0.84, 0.72]], T(c, '#ffe040'));
        c.E(0.40, 0.38, 0.22, 0.20, T(c, '#ffe040')); c.E(0.34, 0.30, 0.07, 0.05, T(c, '#fff0a0'), { flat: 1 });
        c.E(0.22, 0.46, 0.11, 0.06, T(c, '#ff8a1f')); c.E(0.20, 0.44, 0.07, 0.025, T(c, '#ffb050'), { flat: 1 });
        c.E(0.34, 0.36, 0.03, 0.04, P.white, { flat: 1 }); c.dot(0.33, 0.37, c.c('#111111'), 1); c.E(0.32, 0.45, 0.035, 0.022, T(c, '#ff9a8a'), { flat: 1 });
        c.E(0.58, 0.66, 0.14, 0.09, T(c, '#f0c820')); c.L(0.38, 0.92, 0.38, 0.84, 0.03, T(c, '#ff8a1f')); c.L(0.60, 0.92, 0.60, 0.84, 0.03, T(c, '#ff8a1f')); c.E(0.36, 0.93, 0.07, 0.025, T(c, '#ff8a1f')); c.E(0.62, 0.93, 0.07, 0.025, T(c, '#ff8a1f'));
        c.E(0.40, 0.18, 0.14, 0.06, T(c, '#ff9ab8')); c.E(0.40, 0.12, 0.08, 0.05, T(c, '#ffb8d0'));
      } },
    { k: 'lily', n: 'Easter Lily', fixed: 1, envs: EE, hy: 0.4, lines: ['A white trumpet that seems to announce the whole season.', 'Spring said it was time and the lily agreed.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.50, 0.50, 0.50, 1.0, 0.045, T(c, '#2a9a3a')); c.RE(0.30, 0.78, 0.16, 0.05, 0.6, T(c, '#3ab04a')); c.RE(0.70, 0.70, 0.16, 0.05, -0.6, T(c, '#3ab04a'));
        c.P([[0.50, 0.52], [0.18, 0.30], [0.12, 0.12], [0.32, 0.22], [0.50, 0.04], [0.68, 0.22], [0.88, 0.12], [0.82, 0.30]], T(c, '#ffffff'));
        c.P([[0.50, 0.52], [0.34, 0.28], [0.50, 0.14], [0.66, 0.28]], T(c, '#e8ecf8'), { flat: 1 }); c.L(0.50, 0.50, 0.50, 0.14, 0.01, T(c, '#c8d0e0'), { flat: 1 });
        c.L(0.46, 0.34, 0.40, 0.18, 0.012, T(c, '#ffe040'), { flat: 1 }); c.L(0.54, 0.34, 0.60, 0.18, 0.012, T(c, '#ffe040'), { flat: 1 }); c.E(0.40, 0.16, 0.025, 0.02, T(c, '#e8a020')); c.E(0.60, 0.16, 0.025, 0.02, T(c, '#e8a020'));
        c.dot(0.30, 0.20, c.c('#ffffff'), 1);
      } },
    { k: 'butterfly', n: 'Spring Butterfly', fixed: 1, envs: EE, hy: 0.4, lines: ['It remembers when it was a caterpillar and does not mind.', 'Every spot on its wings is a tiny piece of sky.'],
      draw: function (c, P, r, o) {
        c.mir = true;
        c.P([[0.46, 0.46], [0.10, 0.14], [0.04, 0.34], [0.16, 0.54], [0.44, 0.54]], T(c, '#ff8ab8')); c.P([[0.44, 0.56], [0.14, 0.62], [0.12, 0.84], [0.30, 0.86], [0.44, 0.68]], T(c, '#a870ff'));
        c.E(0.22, 0.32, 0.07, 0.07, T(c, '#ffffff'), { flat: 1 }); c.E(0.32, 0.46, 0.04, 0.04, T(c, '#ffe040'), { flat: 1 }); c.E(0.24, 0.72, 0.05, 0.05, T(c, '#ffffff'), { flat: 1 });
        c.L(0.44, 0.50, 0.12, 0.20, 0.01, T(c, '#4a2a6a'), { flat: 1 }); c.L(0.44, 0.60, 0.18, 0.76, 0.01, T(c, '#4a2a6a'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.56, 0.035, 0.22, T(c, '#2a2038')); c.E(0.5, 0.32, 0.045, 0.045, T(c, '#2a2038')); c.L(0.48, 0.30, 0.38, 0.10, 0.008, T(c, '#2a2038'), { flat: 1 }); c.L(0.52, 0.30, 0.62, 0.10, 0.008, T(c, '#2a2038'), { flat: 1 }); c.dot(0.38, 0.10, c.c('#2a2038'), 2); c.dot(0.62, 0.10, c.c('#2a2038'), 2);
      } },
    { k: 'sunrisecross', n: 'Sunrise Cross', fixed: 1, envs: ['dawn', 'dusk', 'meadow', 'rosy', 'day', 'storm'], gy: 0.9, lines: ['Three days later, the light came up over the hill.', 'He is risen, and the lilies know it.'],
      draw: function (c, P, r, o) {
        var i;
        c.E(0.5, 0.56, 0.36, 0.36, T(c, '#ffe080')); c.E(0.5, 0.56, 0.28, 0.28, T(c, '#fff4b0'), { flat: 1 });
        for (i = 0; i < 11; i++) { var a = -Math.PI + i * Math.PI / 10; c.L(0.5 + Math.cos(a) * 0.38, 0.56 + Math.sin(a) * 0.38, 0.5 + Math.cos(a) * 0.52, 0.56 + Math.sin(a) * 0.52, 0.025, T(c, '#ffd23f')); }
        c.P([[0.0, 0.86], [0.0, 0.66], [0.26, 0.60], [0.60, 0.66], [1.0, 0.62], [1.0, 0.86]], T(c, '#4aa84a'), { flat: 1 }); c.P([[0.0, 1.0], [0.0, 0.82], [0.4, 0.76], [1.0, 0.82], [1.0, 1.0]], T(c, '#3a9a3a'), { flat: 1 });
        c.R(0.46, 0.20, 0.54, 0.84, P.wood); c.R(0.30, 0.34, 0.70, 0.42, P.wood); c.R(0.46, 0.20, 0.49, 0.84, T(c, '#b88a50'), { flat: 1 }); c.R(0.30, 0.34, 0.70, 0.36, T(c, '#b88a50'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.E(0.10 + i * 0.25, 0.86, 0.045, 0.05, T(c, '#ffffff')); c.L(0.10 + i * 0.25, 0.86, 0.10 + i * 0.25, 0.94, 0.012, T(c, '#2a9a3a'), { flat: 1 }); }
      } },
    { k: 'jellybeans', n: 'Jelly Beans', fixed: 1, envs: EE, gy: 0.9, lines: ['A whole jar of tiny rainbow pebbles.', 'Pick the colors you like and leave the black ones.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#e8202c', '#ffd23f', '#2fb050', '#2a6ae0', '#ff8ad8', '#ff8a1f', '#a050e0', '#ffffff'];
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.P([[0.22, 0.22], [0.78, 0.22], [0.84, 0.50], [0.80, 0.88], [0.20, 0.88], [0.16, 0.50]], T(c, '#d8ecf8'));
        for (i = 0; i < 26; i++) { var x = 0.24 + (i * 0.173 % 0.52), y = 0.28 + Math.floor(i / 5) * 0.115 + ((i * 7) % 3) * 0.01; c.RE(x, y + 0.04, 0.055, 0.035, (i * 1.3) % 3, T(c, cs[i % 8])); c.dot(x - 0.02, y + 0.02, c.c('#ffffff'), 1); }
        c.R(0.14, 0.12, 0.86, 0.22, T(c, '#ffd0e0')); c.R(0.14, 0.12, 0.86, 0.15, T(c, '#fff0f6'), { flat: 1 }); c.R(0.28, 0.06, 0.72, 0.12, T(c, '#ffd0e0'));
        c.R(0.24, 0.24, 0.28, 0.84, T(c, '#f4fbff'), { flat: 1 });
      } },
    { k: 'daffodils', n: 'Daffodils', fixed: 1, envs: EE, hy: 0.4, lines: ['Yellow trumpets, nodding in the first warm wind.', 'They bloom early because they cannot wait.'],
      draw: function (c, P, r, o) {
        var i, xs = [0.26, 0.50, 0.74], ys = [0.34, 0.20, 0.38];
        for (i = 0; i < 3; i++) { c.L(xs[i], ys[i] + 0.10, xs[i] + (i - 1) * -0.04, 1.0, 0.035, T(c, '#2a9a3a')); }
        c.RE(0.36, 0.84, 0.18, 0.04, 0.9, T(c, '#3ab04a')); c.RE(0.66, 0.84, 0.18, 0.04, -0.9, T(c, '#3ab04a'));
        for (i = 0; i < 3; i++) { for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; c.RE(xs[i] + Math.cos(a) * 0.09, ys[i] + Math.sin(a) * 0.09, 0.07, 0.035, a, T(c, '#ffe040')); } c.E(xs[i], ys[i], 0.055, 0.055, T(c, '#ffb020')); c.E(xs[i], ys[i], 0.03, 0.03, T(c, '#e87a1a'), { flat: 1 }); }
        c.L(0.20, 0.96, 0.80, 0.96, 0.02, T(c, '#2a9a3a'), { flat: 1 });
      } }
  ]);

  K.register('holidays', [
    { k: 'leprechaun', n: 'Lucky Hat', fixed: 1, envs: ['meadow', 'day', 'dawn', 'dusk', 'rosy', 'forest', 'sea'], gy: 0.9, lines: ['Tall, green and buckled with a clover on the band.', 'Look for it at the end of any rainbow.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.44, 0.03);
        c.E(0.5, 0.84, 0.46, 0.09, T(c, '#1a7a3a')); c.P([[0.24, 0.84], [0.28, 0.20], [0.72, 0.20], [0.76, 0.84]], T(c, '#2aa84a')); c.E(0.5, 0.20, 0.22, 0.05, T(c, '#3ac85a'));
        c.R(0.25, 0.60, 0.75, 0.76, T(c, '#1a1a22')); c.R(0.42, 0.58, 0.58, 0.78, T(c, '#ffd23f')); c.R(0.46, 0.62, 0.54, 0.74, T(c, '#1a1a22'), { flat: 1 });
        c.E(0.32, 0.32, 0.04, 0.10, T(c, '#5ad878'), { flat: 1 });
        c.E(0.64, 0.46, 0.04, 0.04, T(c, '#2fc060')); c.E(0.70, 0.52, 0.04, 0.04, T(c, '#2fc060')); c.E(0.58, 0.52, 0.04, 0.04, T(c, '#2fc060')); c.E(0.64, 0.56, 0.04, 0.04, T(c, '#2fc060')); c.dot(0.64, 0.51, c.c('#1a7a3a'), 1);
      } },
    { k: 'rainbow', n: 'Rainbow', fixed: 1, envs: ['meadow', 'day', 'dawn', 'dusk', 'sea', 'storm', 'rosy'], gy: 0.9, lines: ['It came out right after the rain, as promised.', 'Seven colors and one pot of gold at the end.'],
      draw: function (c, P, r, o) {
        var cs = ['#e8202c', '#ff8a1f', '#ffd23f', '#2fb050', '#2a8ae0', '#4a3ac8', '#a050e0'], i;
        for (i = 0; i < 7; i++) c.RG(0.5, 0.78, 0.36 - i * 0.04, 0.40 - i * 0.04 + 0.04, T(c, cs[i]), { flat: 1 });
        c.R(0.0, 0.78, 1.0, 1.0, T(c, '#4aa84a'), { flat: 1 }); c.E(0.14, 0.86, 0.22, 0.08, T(c, '#ffffff')); c.E(0.10, 0.82, 0.12, 0.06, T(c, '#ffffff')); c.E(0.86, 0.86, 0.22, 0.08, T(c, '#ffffff')); c.E(0.90, 0.82, 0.12, 0.06, T(c, '#ffffff'));
        c.E(0.50, 0.90, 0.10, 0.06, T(c, '#2a2a38')); c.E(0.46, 0.86, 0.025, 0.025, T(c, '#ffd23f'));
      } },
    { k: 'partyhorn', n: 'Party Horn', fixed: 1, envs: ['night', 'fireworks', 'aurora', 'silent', 'dusk', 'hall'], hy: 0.4, lines: ['A long toot for a long year.', 'The confetti is still coming down.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#ff3fa4', '#ffd23f', '#35d8f2', '#8aff7a', '#ffffff', '#a050e0'];
        c.P([[0.10, 0.90], [0.20, 0.96], [0.62, 0.50], [0.52, 0.40]], T(c, '#ffd23f')); for (i = 0; i < 5; i++) c.L(0.14 + i * 0.10, 0.88 - i * 0.09, 0.22 + i * 0.10, 0.96 - i * 0.09, 0.025, T(c, i % 2 ? '#ff3fa4' : '#35d8f2'), { flat: 1 });
        c.E(0.58, 0.44, 0.10, 0.06, T(c, '#d8b020')); c.P([[0.60, 0.40], [0.72, 0.30], [0.80, 0.18], [0.90, 0.10], [0.94, 0.20], [0.82, 0.32], [0.70, 0.46]], T(c, '#ff3fa4'));
        for (i = 0; i < 14; i++) c.RE(0.30 + (i * 0.137 % 0.62), 0.10 + (i * 0.211 % 0.7), 0.025, 0.012, i, T(c, cs[i % 6]));
        c.ST(0.84, 0.50, 0.05, 0.02, T(c, '#ffd23f')); c.ST(0.30, 0.20, 0.04, 0.016, T(c, '#35d8f2'));
      } },
    { k: 'pinata', n: 'Piñata', fixed: 1, envs: ['day', 'dusk', 'dawn', 'meadow', 'sea', 'desert', 'fireworks'], hy: 0.4, lines: ['Whack it three times and the candy comes down like rain.', 'It is very proud of all those fringes.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#e8202c', '#ffd23f', '#2fb050', '#2a8ae0', '#ff8ad8'];
        c.L(0.5, 0.0, 0.5, 0.20, 0.014, T(c, '#c8a060'), { flat: 1 });
        c.E(0.5, 0.60, 0.30, 0.30, T(c, '#ff8ad8')); c.E(0.50, 0.30, 0.12, 0.12, T(c, '#ff8ad8')); c.E(0.36, 0.78, 0.08, 0.14, T(c, '#ff8ad8')); c.E(0.64, 0.78, 0.08, 0.14, T(c, '#ff8ad8'));
        for (i = 0; i < 6; i++) { c.P([[0.22, 0.34 + i * 0.09], [0.78, 0.34 + i * 0.09], [0.74, 0.40 + i * 0.09], [0.26, 0.40 + i * 0.09]], T(c, cs[i % 5]), { flat: 1 }); }
        c.E(0.5, 0.30, 0.12, 0.12, T(c, '#ffd23f')); c.E(0.46, 0.28, 0.025, 0.03, T(c, '#1a1a22'), { flat: 1 }); c.E(0.56, 0.28, 0.025, 0.03, T(c, '#1a1a22'), { flat: 1 }); c.L(0.46, 0.35, 0.54, 0.35, 0.015, T(c, '#c8202c'), { flat: 1 });
        c.P([[0.44, 0.20], [0.50, 0.08], [0.56, 0.20]], T(c, '#e8202c')); c.P([[0.40, 0.24], [0.34, 0.12], [0.44, 0.20]], T(c, '#2fb050')); c.P([[0.60, 0.24], [0.66, 0.12], [0.56, 0.20]], T(c, '#2a8ae0'));
        for (i = 0; i < 8; i++) c.RE(0.20 + i * 0.09, 0.94 - (i % 2) * 0.03, 0.03, 0.015, i, T(c, cs[i % 5]));
      } },
    { k: 'kinara', n: 'Kinara', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], gy: 0.92, lines: ['Seven candles for seven principles, red, black and green.', 'One more flame is lit each night.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#2fb050', '#e8202c', '#e8202c', '#1a1a22', '#2fb050', '#2fb050', '#2fb050'], xs = [0.08, 0.20, 0.32, 0.46, 0.60, 0.72, 0.84];
        c.R(0.06, 0.84, 0.94, 0.92, T(c, '#8a5a2a')); c.R(0.06, 0.84, 0.94, 0.86, T(c, '#c88a4a'), { flat: 1 });
        for (i = 0; i < 7; i++) { var x = xs[i], y = i === 3 ? 0.40 : (i < 3 ? 0.54 - i * 0.04 : 0.54 - (6 - i) * 0.04); c.R(x, y, x + 0.07, 0.84, T(c, cs[i] === '#1a1a22' ? '#3a3a4a' : cs[i])); c.E(x + 0.035, y - 0.04, 0.03, 0.06, T(c, '#ffd23f')); c.E(x + 0.035, y - 0.03, 0.012, 0.03, T(c, '#ffffff'), { flat: 1 }); }
        c.R(0.40, 0.56, 0.58, 0.84, T(c, '#a8602a'), { flat: 1 }); c.L(0.10, 0.86, 0.90, 0.86, 0.012, T(c, '#ffd23f'), { flat: 1 });
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
