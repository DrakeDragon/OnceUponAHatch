/* Halloween: third volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function T(c, h) { return c.tone(h); }
  var HE = ['night', 'dusk', 'storm', 'forest', 'aurora', 'hall', 'autumn', 'harvest', 'dawn', 'desert'];

  K.register('halloween', [
    { k: 'pumpkinpatch', n: 'Pumpkin Patch', fixed: 1, envs: HE, gy: 0.9, lines: ['Three round pumpkins and one very patient vine.', 'Pick the one that is smiling back at you.'],
      draw: function (c, P, r, o) {
        var i, xs = [0.24, 0.62, 0.44], ys = [0.74, 0.72, 0.52], rs = [0.20, 0.22, 0.16];
        o.shadow(0.5, 0.94, 0.46, 0.03);
        c.L(0.0, 0.26, 0.40, 0.40, 0.02, T(c, '#2a8a3a')); c.L(0.40, 0.40, 0.44, 0.36, 0.02, T(c, '#2a8a3a')); c.RE(0.14, 0.24, 0.07, 0.04, 0.5, T(c, '#3ab04a')); c.RE(0.32, 0.46, 0.07, 0.04, -0.5, T(c, '#3ab04a'));
        for (i = 0; i < 3; i++) { var x = xs[i], y = ys[i], R = rs[i]; c.R(x - 0.025, y - R - 0.07, x + 0.025, y - R + 0.02, T(c, '#4a7a2a')); c.E(x, y, R, R * 0.86, T(c, '#f08a1f')); c.E(x - R * 0.5, y, R * 0.45, R * 0.82, T(c, '#f89a30'), { flat: 1 }); c.E(x + R * 0.5, y, R * 0.45, R * 0.82, T(c, '#e07a14'), { flat: 1 }); c.L(x, y - R * 0.8, x, y + R * 0.8, 0.01, T(c, '#c8601a'), { flat: 1 }); c.dot(x - R * 0.5, y - R * 0.4, c.c('#ffc070'), 2); }
        c.P([[0.52, 0.64], [0.57, 0.68], [0.60, 0.64], [0.64, 0.68], [0.68, 0.64], [0.66, 0.74], [0.54, 0.74]], T(c, '#1a1a22'), { flat: 1 }); c.P([[0.52, 0.60], [0.56, 0.56], [0.58, 0.62]], T(c, '#1a1a22'), { flat: 1 }); c.P([[0.70, 0.60], [0.66, 0.56], [0.64, 0.62]], T(c, '#1a1a22'), { flat: 1 });
        c.R(0.0, 0.88, 1.0, 0.94, T(c, '#2a6a2a'), { flat: 1 });
      } },
    { k: 'moonhowl', n: 'Howling at the Moon', fixed: 1, envs: ['night', 'dusk', 'storm', 'forest', 'aurora', 'dawn'], gy: 0.9, lines: ['One long note, one very big moon.', 'The neighbors have learned to sleep through the second verse.'],
      draw: function (c, P, r, o) {
        var bk = T(c, '#1a1424');
        c.E(0.50, 0.30, 0.34, 0.34, T(c, '#fff4c0')); c.E(0.50, 0.30, 0.28, 0.28, T(c, '#fffbe0'), { flat: 1 }); c.E(0.38, 0.22, 0.05, 0.05, T(c, '#e8dca0'), { flat: 1 }); c.E(0.60, 0.38, 0.07, 0.07, T(c, '#e8dca0'), { flat: 1 }); c.E(0.56, 0.18, 0.03, 0.03, T(c, '#e8dca0'), { flat: 1 });
        c.P([[0.0, 1.0], [0.0, 0.78], [0.20, 0.70], [0.50, 0.74], [0.80, 0.68], [1.0, 0.76], [1.0, 1.0]], T(c, '#2a2438'));
        c.P([[0.40, 0.76], [0.42, 0.62], [0.45, 0.50], [0.43, 0.42], [0.39, 0.38], [0.30, 0.30], [0.27, 0.22], [0.31, 0.20], [0.42, 0.26], [0.46, 0.17], [0.52, 0.27], [0.58, 0.34], [0.62, 0.50], [0.72, 0.62], [0.78, 0.76]], bk);
        c.P([[0.74, 0.70], [0.88, 0.72], [0.96, 0.62], [0.90, 0.66], [0.80, 0.62]], bk);
        c.P([[0.26, 0.24], [0.31, 0.28], [0.32, 0.22]], bk, { flat: 1 }); c.dot(0.38, 0.30, c.c('#ffe040'), 2);
        c.L(0.44, 0.76, 0.44, 0.88, 0.05, bk); c.L(0.66, 0.74, 0.70, 0.88, 0.05, bk);
        c.P([[0.0, 1.0], [0.0, 0.86], [0.12, 0.84], [0.10, 1.0]], bk, { flat: 1 }); c.L(0.88, 0.80, 0.88, 0.60, 0.012, bk); c.L(0.88, 0.70, 0.96, 0.62, 0.01, bk); c.L(0.88, 0.66, 0.80, 0.58, 0.01, bk);
      } },
    { k: 'spiderweb', n: 'Spider Web', fixed: 1, envs: HE, hy: 0.4, lines: ['Spun overnight, and every thread is covered in dew.', 'The spider is out front, taking a bow.'],
      draw: function (c, P, r, o) {
        var i, j, cx = 0.5, cy = 0.5;
        for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; c.L(cx, cy, cx + Math.cos(a) * 0.48, cy + Math.sin(a) * 0.48, 0.012, T(c, '#e8ecf8'), { flat: 1 }); }
        for (j = 1; j <= 5; j++) for (i = 0; i < 8; i++) { var a1 = i * Math.PI / 4, a2 = (i + 1) * Math.PI / 4, R = j * 0.09 + 0.02; c.L(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R + j * 0.004, cx + Math.cos(a2) * R, cy + Math.sin(a2) * R + j * 0.004, 0.01, T(c, '#e8ecf8'), { flat: 1 }); c.dot(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R, c.c('#c8e8ff'), 1); }
        c.L(0.44, 0.0, 0.5, 0.34, 0.01, T(c, '#e8ecf8'), { flat: 1 });
        c.E(0.50, 0.40, 0.05, 0.06, T(c, '#2a2038')); c.E(0.50, 0.32, 0.035, 0.035, T(c, '#2a2038')); c.dot(0.485, 0.31, c.c('#ff3a3a'), 1); c.dot(0.515, 0.31, c.c('#ff3a3a'), 1); c.E(0.50, 0.42, 0.015, 0.02, T(c, '#e8202c'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.L(0.47, 0.38 + i * 0.015, 0.36 - i * 0.02, 0.32 + i * 0.07, 0.01, T(c, '#2a2038'), { flat: 1 }); c.L(0.53, 0.38 + i * 0.015, 0.64 + i * 0.02, 0.32 + i * 0.07, 0.01, T(c, '#2a2038'), { flat: 1 }); }
      } },
    { k: 'candybowl', n: 'Candy Bowl', fixed: 1, envs: HE, gy: 0.9, lines: ['Take one, said the sign, so everyone took a handful.', 'The little witch at the door got the last chocolate bar.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#e8202c', '#ffd23f', '#2fb050', '#2a6ae0', '#ff8ad8', '#ff8a1f', '#ffffff', '#a050e0'];
        o.shadow(0.5, 0.94, 0.40, 0.03);
        c.R(0.42, 0.84, 0.58, 0.92, T(c, '#2a2438')); c.E(0.5, 0.92, 0.22, 0.035, T(c, '#2a2438'));
        c.E(0.5, 0.62, 0.40, 0.26, T(c, '#2a2438')); c.E(0.36, 0.64, 0.14, 0.22, T(c, '#4a4258'), { flat: 1 }); c.R(0.10, 0.40, 0.90, 0.56, T(c, '#2a2438')); c.E(0.5, 0.44, 0.42, 0.07, T(c, '#4a4258')); c.E(0.5, 0.44, 0.38, 0.05, T(c, '#14101e'), { flat: 1 });
        for (i = 0; i < 16; i++) { var x = 0.18 + (i % 6) * 0.13 + (Math.floor(i / 6) % 2) * 0.05, y = 0.40 - Math.floor(i / 6) * 0.08 + ((i * 3) % 2) * 0.02; c.RE(x, y, 0.065, 0.04, i * 0.8, T(c, cs[i % 8])); c.P([[x - 0.09, y - 0.03], [x - 0.065, y], [x - 0.09, y + 0.03]], T(c, cs[i % 8]), { flat: 1 }); c.dot(x - 0.02, y - 0.015, c.c('#ffffff'), 1); }
        
        c.P([[0.28, 0.58], [0.72, 0.58], [0.68, 0.70], [0.32, 0.70]], T(c, '#f08a1f'), { flat: 1 }); for (i = 0; i < 4; i++) c.dot(0.36 + i * 0.09, 0.64, c.c('#1a1a22'), 2);
      } },
    { k: 'coffin', n: 'Creaky Coffin', fixed: 1, envs: ['night', 'dusk', 'storm', 'forest', 'aurora', 'dawn', 'hall'], gy: 0.92, lines: ['The lid is open a crack, and something inside is yawning.', 'It is only a nap, and the cobwebs are for decoration.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.95, 0.40, 0.03);
        c.P([[0.50, 0.04], [0.74, 0.22], [0.66, 0.94], [0.34, 0.94], [0.26, 0.22]], T(c, '#6a3a1a')); c.P([[0.50, 0.04], [0.40, 0.14], [0.30, 0.22], [0.38, 0.94], [0.34, 0.94], [0.26, 0.22]], T(c, '#8a5028'), { flat: 1 });
        c.P([[0.50, 0.10], [0.68, 0.24], [0.62, 0.88], [0.38, 0.88], [0.32, 0.24]], T(c, '#4a2a14'), { flat: 1 });
        c.R(0.46, 0.20, 0.54, 0.62, T(c, '#c8c8d8')); c.R(0.38, 0.30, 0.62, 0.38, T(c, '#c8c8d8')); c.R(0.46, 0.20, 0.49, 0.62, T(c, '#e8e8f4'), { flat: 1 });
        c.P([[0.68, 0.30], [0.84, 0.20], [0.92, 0.34], [0.80, 0.50], [0.72, 0.44]], T(c, '#6a3a1a')); c.L(0.70, 0.34, 0.86, 0.26, 0.01, T(c, '#4a2a14'), { flat: 1 });
        c.P([[0.36, 0.82], [0.34, 0.76], [0.38, 0.72], [0.42, 0.78], [0.40, 0.84]], T(c, '#f4f6ff')); c.P([[0.10, 0.94], [0.20, 0.80], [0.26, 0.94]], T(c, '#e8ecf8'), { flat: 1 }); c.L(0.10, 0.94, 0.28, 0.80, 0.008, T(c, '#c8d0e0'), { flat: 1 });
        c.dot(0.34, 0.74, c.c('#ff3a3a'), 1); c.dot(0.40, 0.74, c.c('#ff3a3a'), 1);
        c.L(0.30, 0.90, 0.70, 0.90, 0.0, T(c, '#2a1e32'), { flat: 1 });
      } },
    { k: 'witchcottage', n: 'Witch’s Cottage', fixed: 1, envs: HE, gy: 0.92, lines: ['A crooked chimney, a purple door and a cauldron on the porch.', 'The sign says no soliciting, but the cats say come in.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.96, 0.46, 0.03);
        c.P([[0.16, 0.94], [0.16, 0.50], [0.84, 0.50], [0.84, 0.94]], T(c, '#5a4a62')); c.P([[0.16, 0.94], [0.16, 0.50], [0.26, 0.50], [0.26, 0.94]], T(c, '#4a3a52'), { flat: 1 });
        c.P([[0.08, 0.52], [0.30, 0.20], [0.70, 0.18], [0.92, 0.52]], T(c, '#2a2438')); c.P([[0.08, 0.52], [0.30, 0.20], [0.40, 0.20], [0.24, 0.52]], T(c, '#3a3248'), { flat: 1 });
        for (i = 0; i < 4; i++) c.L(0.16 + i * 0.1, 0.48 - i * 0.08, 0.36 + i * 0.1, 0.48 - i * 0.08, 0.012, T(c, '#4a4258'), { flat: 1 });
        c.P([[0.62, 0.30], [0.62, 0.04], [0.72, 0.02], [0.72, 0.30]], T(c, '#6a5a72')); c.R(0.60, 0.0, 0.74, 0.04, T(c, '#4a3a52')); c.E(0.68, -0.02, 0.0, 0.0, T(c, '#ffffff'));
        c.E(0.62, 0.62, 0.0, 0.0, T(c, '#ffffff'));
        c.R(0.30, 0.58, 0.44, 0.74, T(c, '#ffd23f')); c.R(0.36, 0.58, 0.38, 0.74, T(c, '#2a2438'), { flat: 1 }); c.R(0.30, 0.65, 0.44, 0.67, T(c, '#2a2438'), { flat: 1 });
        c.P([[0.56, 0.94], [0.56, 0.66], [0.62, 0.60], [0.68, 0.66], [0.68, 0.94]], T(c, '#8a4ad8')); c.dot(0.65, 0.80, c.c('#ffd23f'), 2);
        c.E(0.80, 0.86, 0.09, 0.07, T(c, '#1a1a22')); c.E(0.80, 0.80, 0.07, 0.02, T(c, '#4aff7a')); c.dot(0.78, 0.74, c.c('#4aff7a'), 2); c.dot(0.83, 0.72, c.c('#4aff7a'), 2);
        c.L(0.10, 0.94, 0.10, 0.78, 0.012, T(c, '#8a5a2a'), { flat: 1 }); c.R(0.04, 0.78, 0.16, 0.84, T(c, '#c8a060')); c.dot(0.07, 0.81, c.c('#2a2018'), 1); c.dot(0.12, 0.81, c.c('#2a2018'), 1);
        c.P([[0.34, 0.60], [0.34, 0.54], [0.38, 0.58]], T(c, '#1a1a22'), { flat: 1 }); c.P([[0.40, 0.60], [0.40, 0.54], [0.44, 0.58]], T(c, '#1a1a22'), { flat: 1 });
        for (i = 0; i < 3; i++) { c.E(0.66 + i * 0.03, 0.0 - i * 0.0, 0.0, 0.0, T(c, '#ffffff')); }
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
