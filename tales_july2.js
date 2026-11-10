/* Fourth of July, second volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var JE = ['fireworks', 'day', 'dusk', 'dawn', 'sea', 'meadow', 'night', 'storm', 'desert', 'aurora'];
  function star5(c, x, y, r, col) { c.ST(x, y, r, r * 0.45, col); }
  function hl(c, x, y) { c.dot(x, y, c.c('#ffffff'), 1); }

  K.register('july4', [
    { k: 'hotdog', n: 'Hot Dog', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'fireworks', 'desert'], gy: 0.88, lines: ['Mustard in a zigzag and relish in a hurry.', 'The bun is toasted exactly right.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.92, 0.44, 0.03);
        c.E(0.5, 0.62, 0.46, 0.20, T(c, '#e0a850')); c.E(0.5, 0.58, 0.40, 0.12, T(c, '#f0c670'), { flat: 1 }); c.R(0.08, 0.66, 0.92, 0.82, T(c, '#d89838')); c.E(0.5, 0.82, 0.42, 0.07, T(c, '#c8842a'));
        c.L(0.10, 0.56, 0.90, 0.56, 0.17, T(c, '#c8482a')); c.E(0.10, 0.56, 0.085, 0.085, T(c, '#c8482a')); c.E(0.90, 0.56, 0.085, 0.085, T(c, '#c8482a')); c.L(0.14, 0.52, 0.86, 0.52, 0.04, T(c, '#e8704a'), { flat: 1 });
        for (i = 0; i < 7; i++) c.L(0.12 + i * 0.12, 0.48, 0.18 + i * 0.12, 0.58, 0.032, T(c, '#f8d020'), { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.20 + i * 0.12, 0.54 + (i % 2) * 0.04, c.c('#2fb050'), 2);
        c.E(0.5, 0.70, 0.40, 0.05, T(c, '#e0a850'), { flat: 1 }); c.dot(0.32, 0.62, c.c('#fff0c0'), 1);
        for (i = 0; i < 3; i++) c.E(0.40 + i * 0.1, 0.12 + (i % 2) * 0.06, 0.02, 0.07, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'popsicle', n: 'Red White and Blue Pop', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'fireworks', 'desert'], hy: 0.4, lines: ['Three colors that melt faster than you can eat them.', 'It dripped on the shirt, as expected.'],
      draw: function (c, P, r, o) {
        c.R(0.44, 0.66, 0.56, 1.0, T(c, '#e8c88a')); c.R(0.44, 0.66, 0.48, 1.0, T(c, '#f8e0aa'), { flat: 1 });
        c.P([[0.26, 0.70], [0.74, 0.70], [0.74, 0.20], [0.66, 0.08], [0.34, 0.08], [0.26, 0.20]], T(c, '#c8202c'));
        c.P([[0.26, 0.50], [0.74, 0.50], [0.74, 0.60], [0.26, 0.60]], T(c, '#ffffff'), { flat: 1 }); c.P([[0.26, 0.60], [0.74, 0.60], [0.74, 0.70], [0.26, 0.70]], T(c, '#1a3a9a'), { flat: 1 });
        c.P([[0.26, 0.26], [0.74, 0.26], [0.74, 0.50], [0.26, 0.50]], T(c, '#ffffff'), { flat: 1, pat: function (x, y) { return false; } });
        c.P([[0.26, 0.40], [0.74, 0.40], [0.74, 0.50], [0.26, 0.50]], T(c, '#f8f8ff'), { flat: 1 });
        c.R(0.30, 0.14, 0.36, 0.64, T(c, '#ff6a7a'), { flat: 1 });
        c.E(0.62, 0.74, 0.03, 0.05, T(c, '#1a3a9a')); c.E(0.34, 0.76, 0.025, 0.04, T(c, '#c8202c'));
        star5(c, 0.50, 0.30, 0.07, T(c, '#ffffff'));
      } },
    { k: 'lemonade', n: 'Lemonade Stand', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'desert'], gy: 0.92, lines: ['Fifty cents a cup and worth every penny.', 'The sign was painted by a very serious entrepreneur.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.95, 0.44, 0.03);
        c.R(0.10, 0.60, 0.90, 0.92, T(c, '#c8923a')); for (i = 0; i < 5; i++) c.L(0.10, 0.66 + i * 0.06, 0.90, 0.66 + i * 0.06, 0.008, T(c, '#a8702a'), { flat: 1 }); c.R(0.06, 0.56, 0.94, 0.62, T(c, '#e0b060'));
        c.R(0.10, 0.18, 0.14, 0.58, P.wood); c.R(0.86, 0.18, 0.90, 0.58, P.wood);
        for (i = 0; i < 8; i++) c.P([[0.06 + i * 0.11, 0.18], [0.17 + i * 0.11, 0.18], [0.17 + i * 0.11, 0.30], [0.115 + i * 0.11, 0.35], [0.06 + i * 0.11, 0.30]], T(c, i % 2 ? '#ffe080' : '#ffffff'), { flat: 1 });
        c.E(0.5, 0.16, 0.44, 0.07, T(c, '#ffe040'));
        c.R(0.28, 0.40, 0.72, 0.54, T(c, '#fff4e0')); c.R(0.30, 0.42, 0.70, 0.52, T(c, '#ffffff'), { flat: 1 }); c.E(0.40, 0.47, 0.025, 0.025, T(c, '#ffd23f'), { flat: 1 }); c.L(0.46, 0.47, 0.64, 0.47, 0.014, T(c, '#c8202c'), { flat: 1 });
        c.P([[0.18, 0.68], [0.30, 0.68], [0.28, 0.88], [0.20, 0.88]], T(c, '#ffe040')); c.E(0.24, 0.68, 0.06, 0.02, T(c, '#fff4a0')); c.P([[0.66, 0.66], [0.82, 0.66], [0.80, 0.88], [0.68, 0.88]], T(c, '#e8f4ff')); c.R(0.68, 0.74, 0.80, 0.86, T(c, '#ffe040'), { flat: 1 }); c.E(0.74, 0.66, 0.08, 0.02, T(c, '#fff4a0'));
        c.E(0.44, 0.66, 0.07, 0.05, T(c, '#ffe040')); c.E(0.44, 0.66, 0.04, 0.025, T(c, '#fff8c0'), { flat: 1 });
        c.L(0.52, 0.60, 0.62, 0.52, 0.01, T(c, '#2a8a3a'), { flat: 1 });
      } },
    { k: 'drum', n: 'Parade Drum', fixed: 1, envs: JE, gy: 0.9, lines: ['Rat-a-tat, and the whole street falls in step.', 'The stripes are red, white and loud.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.38, 0.03);
        c.R(0.16, 0.38, 0.84, 0.84, T(c, '#c8202c')); c.R(0.16, 0.50, 0.84, 0.58, T(c, '#ffffff'), { flat: 1 }); c.R(0.16, 0.66, 0.84, 0.74, T(c, '#ffffff'), { flat: 1 });
        for (i = 0; i < 6; i++) c.L(0.22 + i * 0.11, 0.38, 0.28 + i * 0.11, 0.84, 0.012, T(c, '#e8e8f0'), { flat: 1 });
        c.E(0.5, 0.38, 0.34, 0.12, T(c, '#fdfdff')); c.E(0.5, 0.38, 0.27, 0.08, T(c, '#e8ecf8'), { flat: 1 }); c.E(0.5, 0.84, 0.34, 0.07, T(c, '#a81822'));
        star5(c, 0.5, 0.38, 0.09, T(c, '#1a3a9a'));
        c.RG(0.5, 0.38, 0.30, 0.34, T(c, '#c8c8d8'), { flat: 1 }); c.E(0.5, 0.84, 0.34, 0.07, T(c, '#c8c8d8'), { flat: 1 }); 
        c.E(0.5, 0.84, 0.30, 0.05, T(c, '#a81822'));
        c.L(0.30, 0.16, 0.44, 0.34, 0.022, T(c, '#f4ecd8')); c.L(0.70, 0.16, 0.56, 0.34, 0.022, T(c, '#f4ecd8')); c.E(0.29, 0.14, 0.03, 0.03, T(c, '#f4ecd8')); c.E(0.71, 0.14, 0.03, 0.03, T(c, '#f4ecd8'));
        c.L(0.16, 0.38, 0.84, 0.38, 0.0, T(c, '#e8e8f0'), { flat: 1 });
      } },
    { k: 'burst', n: 'Grand Finale', fixed: 1, envs: ['fireworks', 'night', 'aurora', 'dusk', 'storm', 'sea'], hy: 0.4, lines: ['The whole sky lets go at once, gold, red and blue.', 'Everyone says ooh at the same moment.'],
      draw: function (c, P, r, o) {
        var i, j, cs = ['#ff3b5c', '#ffd23f', '#5aa8ff', '#ffffff', '#ff8a2a'];
        for (j = 0; j < 20; j++) { var a = j * Math.PI * 2 / 20; c.L(0.5, 0.40, 0.5 + Math.cos(a) * 0.40, 0.40 + Math.sin(a) * 0.38, 0.022, T(c, cs[j % 5])); c.E(0.5 + Math.cos(a) * 0.42, 0.40 + Math.sin(a) * 0.40, 0.03, 0.03, T(c, cs[(j + 2) % 5])); c.dot(0.5 + Math.cos(a) * 0.30, 0.40 + Math.sin(a) * 0.29, c.c('#ffffff'), 1); }
        c.E(0.5, 0.40, 0.09, 0.09, T(c, '#fff0a0')); c.E(0.5, 0.40, 0.045, 0.045, T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.40, 0.17, 0.17, T(c, '#ffd23f'), { flat: 1, ring: 1 });
        c.E(0.5, 0.40, 0.09, 0.09, T(c, '#fff0a0')); c.E(0.5, 0.40, 0.045, 0.045, T(c, '#ffffff'), { flat: 1 });
        c.L(0.86, 0.90, 0.86, 0.80, 0.02, T(c, '#ffd23f'), { flat: 1 }); c.E(0.86, 0.76, 0.05, 0.05, T(c, '#5aa8ff')); c.E(0.14, 0.80, 0.045, 0.045, T(c, '#ff3b5c')); c.E(0.22, 0.88, 0.03, 0.03, T(c, '#ffd23f'));
      } },
    { k: 'beachball', n: 'Beach Ball', fixed: 1, envs: ['sea', 'day', 'dusk', 'dawn', 'meadow', 'desert'], gy: 0.88, lines: ['Bounce it, kick it, and chase it into the water.', 'Five colors, no corners.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.34, 0.03);
        c.E(0.5, 0.52, 0.38, 0.38, T(c, '#ffffff'));
        var cs = ['#e8202c', '#2a6ae0', '#ffd23f', '#2fb050', '#ff8a1f', '#a050e0'], i;
        for (i = 0; i < 6; i++) { var a0 = i * Math.PI / 3 - Math.PI / 2, a1 = a0 + Math.PI / 3; c.P([[0.5, 0.52], [0.5 + Math.cos(a0) * 0.40, 0.52 + Math.sin(a0) * 0.40], [0.5 + Math.cos((a0 + a1) / 2) * 0.43, 0.52 + Math.sin((a0 + a1) / 2) * 0.43], [0.5 + Math.cos(a1) * 0.40, 0.52 + Math.sin(a1) * 0.40]], T(c, cs[i])); }
        c.E(0.5, 0.52, 0.06, 0.06, T(c, '#ffffff')); c.E(0.5, 0.52, 0.03, 0.03, T(c, '#e8e8f0'), { flat: 1 });
        c.E(0.36, 0.32, 0.10, 0.06, T(c, '#ffffff'), { flat: 1 }); c.dot(0.28, 0.42, c.c('#ffffff'), 1);
      } },
    { k: 'flagcake', n: 'Flag Cupcakes', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'fireworks', 'night'], gy: 0.9, lines: ['Blueberries for the stars, strawberries for the stripes.', 'Whipped cream is the only clouds you will see today.'],
      draw: function (c, P, r, o) {
        var i, j;
        o.shadow(0.5, 0.94, 0.46, 0.03);
        c.P([[0.12, 0.54], [0.88, 0.54], [0.82, 0.88], [0.18, 0.88]], T(c, '#2a5ac8')); for (i = 0; i < 7; i++) c.L(0.18 + i * 0.1, 0.56, 0.22 + i * 0.09, 0.88, 0.01, T(c, '#1a3a98'), { flat: 1 });
        c.E(0.5, 0.52, 0.40, 0.08, T(c, '#fff8f0'));
        c.R(0.14, 0.14, 0.86, 0.52, T(c, '#fff8f0'));
        for (i = 0; i < 5; i++) c.R(0.14, 0.18 + i * 0.07, 0.86, 0.22 + i * 0.07, T(c, '#ff6a7a'), { flat: 1 });
        c.R(0.14, 0.14, 0.46, 0.34, T(c, '#2a5ac8'), { flat: 1 });
        for (j = 0; j < 2; j++) for (i = 0; i < 3; i++) c.dot(0.18 + i * 0.1, 0.18 + j * 0.08, c.c('#ffffff'), 2);
        for (i = 0; i < 5; i++) c.E(0.18 + i * 0.16, 0.14, 0.065, 0.05, T(c, '#ffffff'));
        for (i = 0; i < 4; i++) c.E(0.26 + i * 0.16, 0.12, 0.04, 0.04, T(c, '#c8202c'));
        c.L(0.50, 0.10, 0.50, 0.0, 0.012, P.wood); star5(c, 0.50, 0.02, 0.04, T(c, '#ffd23f'));
      } },
    { k: 'bike', n: 'Parade Bicycle', fixed: 1, envs: ['day', 'dusk', 'meadow', 'dawn', 'sea', 'desert'], gy: 0.9, lines: ['Streamers on the handlebars and a flag on the back.', 'It leads the neighborhood parade at a very dignified wobble.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.44, 0.02);
        c.RG(0.24, 0.72, 0.16, 0.20, T(c, '#2a2a38')); c.RG(0.76, 0.72, 0.16, 0.20, T(c, '#2a2a38'));
        for (var i = 0; i < 6; i++) { var a = i * Math.PI / 3; c.L(0.24, 0.72, 0.24 + Math.cos(a) * 0.17, 0.72 + Math.sin(a) * 0.17, 0.008, T(c, '#c8c8d8'), { flat: 1 }); c.L(0.76, 0.72, 0.76 + Math.cos(a) * 0.17, 0.72 + Math.sin(a) * 0.17, 0.008, T(c, '#c8c8d8'), { flat: 1 }); }
        c.L(0.24, 0.72, 0.44, 0.44, 0.03, T(c, '#c8202c')); c.L(0.44, 0.44, 0.70, 0.44, 0.03, T(c, '#c8202c')); c.L(0.70, 0.44, 0.76, 0.72, 0.03, T(c, '#c8202c')); c.L(0.24, 0.72, 0.52, 0.72, 0.03, T(c, '#ffffff')); c.L(0.52, 0.72, 0.44, 0.44, 0.03, T(c, '#2a5ac8')); c.L(0.52, 0.72, 0.70, 0.44, 0.03, T(c, '#2a5ac8'));
        c.R(0.38, 0.38, 0.50, 0.42, T(c, '#2a2a38')); c.L(0.70, 0.44, 0.68, 0.30, 0.025, T(c, '#c8c8d8')); c.L(0.62, 0.30, 0.78, 0.30, 0.025, T(c, '#c8c8d8'));
        c.L(0.78, 0.30, 0.90, 0.42, 0.014, T(c, '#c8202c'), { flat: 1 }); c.L(0.78, 0.30, 0.92, 0.32, 0.014, T(c, '#ffffff'), { flat: 1 }); c.L(0.78, 0.30, 0.88, 0.22, 0.014, T(c, '#2a5ac8'), { flat: 1 });
        c.L(0.20, 0.50, 0.20, 0.72, 0.012, P.iron); c.P([[0.20, 0.34], [0.34, 0.38], [0.20, 0.44]], T(c, '#c8202c')); c.P([[0.20, 0.44], [0.34, 0.38], [0.34, 0.50], [0.20, 0.50]], T(c, '#ffffff'), { flat: 1 }); c.L(0.20, 0.34, 0.20, 0.52, 0.012, P.wood);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
