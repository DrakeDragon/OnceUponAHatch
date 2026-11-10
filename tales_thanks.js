/* Thanksgiving Harvest: original pixel designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var TE = ['harvest', 'dusk', 'dawn', 'hall', 'meadow', 'forest', 'day', 'storm'];

  K.register('thanks', [
    { k: 'turkey', n: 'Turkey', fixed: 1, envs: TE, gy: 0.9, lines: ['He fans his tail like a rainbow made of autumn.', 'He has been very suspicious of the calendar lately.'],
      draw: function (c, P, r, o) {
        var cols = ['#c8202c', '#e8761f', '#f0b020', '#8a5a2a', '#2a8a4a'], i;
        o.shadow(0.5, 0.94, 0.28, 0.03);
        for (i = 0; i < 7; i++) { var a = -Math.PI * 0.86 + i * Math.PI * 0.12; c.L(0.5, 0.56, 0.5 + Math.cos(a) * 0.40, 0.56 + Math.sin(a) * 0.46, 0.15, T(c, cols[i % 5])); c.E(0.5 + Math.cos(a) * 0.40, 0.56 + Math.sin(a) * 0.46, 0.06, 0.06, T(c, cols[(i + 2) % 5])); c.dot(0.5 + Math.cos(a) * 0.40, 0.56 + Math.sin(a) * 0.46, c.c('#ffe8a0'), 2); }
        c.E(0.5, 0.60, 0.22, 0.24, T(c, '#8a5a2a')); c.E(0.5, 0.66, 0.14, 0.13, T(c, '#a8723a'), { flat: 1 });
        c.R(0.40, 0.80, 0.45, 0.94, T(c, '#e8a020')); c.R(0.55, 0.80, 0.60, 0.94, T(c, '#e8a020')); c.R(0.36, 0.92, 0.47, 0.95, T(c, '#e8a020')); c.R(0.53, 0.92, 0.64, 0.95, T(c, '#e8a020'));
        c.R(0.46, 0.34, 0.54, 0.50, T(c, '#4a8ae0')); c.E(0.5, 0.30, 0.09, 0.09, T(c, '#4a8ae0'));
        c.mir = true; c.E(0.46, 0.28, 0.022, 0.022, P.white, { flat: 1 }); c.dot(0.46, 0.28, c.c('#111111'), 1); c.mir = false;
        c.P([[0.48, 0.33], [0.52, 0.33], [0.50, 0.40]], T(c, '#f0b020'), { flat: 1 });
        c.E(0.52, 0.42, 0.025, 0.05, T(c, '#e8202c'), { flat: 1 }); c.E(0.5, 0.20, 0.02, 0.025, T(c, '#e8202c'));
      } },
    { k: 'pumpkinpie', n: 'Pumpkin Pie', fixed: 1, envs: TE, gy: 0.82, lines: ['The best slice has already been spoken for.', 'Whipped cream is not optional.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.88, 0.44, 0.03);
        c.P([[0.06, 0.60], [0.94, 0.60], [0.84, 0.86], [0.16, 0.86]], T(c, '#d89a4a'));
        c.E(0.5, 0.60, 0.46, 0.17, T(c, '#e8b060'));
        c.E(0.5, 0.60, 0.38, 0.12, T(c, '#e07a1f'));
        c.E(0.5, 0.58, 0.28, 0.08, T(c, '#f09a3a'), { flat: 1 });
        for (var i = 0; i < 12; i++) c.E(0.08 + i * 0.075, 0.50 + 0.06 * Math.abs(Math.sin(i)) * 0 + 0.02, 0.035, 0.035, T(c, '#c88a3a'));
        c.E(0.5, 0.44, 0.17, 0.14, T(c, '#ffffff')); c.E(0.44, 0.36, 0.09, 0.08, T(c, '#ffffff')); c.E(0.56, 0.34, 0.07, 0.07, T(c, '#ffffff')); c.E(0.5, 0.26, 0.05, 0.05, T(c, '#ffffff'));
        c.dot(0.5, 0.40, c.c('#e8d8c0'), 1); c.E(0.50, 0.20, 0.012, 0.012, T(c, '#a8501a'), { flat: 1 });
      } },
    { k: 'pumpkin', n: 'Pumpkin', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'forest', 'day', 'storm', 'night'], gy: 0.88, lines: ['It grew all summer for this very moment.', 'Round, orange and proud of it.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.9, 0.38, 0.03);
        c.E(0.26, 0.60, 0.20, 0.28, T(c, '#c8601a')); c.E(0.74, 0.60, 0.20, 0.28, T(c, '#c8601a')); c.E(0.5, 0.60, 0.22, 0.30, T(c, '#f08a1f')); c.E(0.38, 0.60, 0.18, 0.29, T(c, '#f08a1f')); c.E(0.62, 0.60, 0.18, 0.29, T(c, '#f08a1f'));
        c.L(0.5, 0.34, 0.5, 0.90, 0.006, T(c, '#c8601a'), { flat: 1 }); c.L(0.38, 0.34, 0.30, 0.88, 0.006, T(c, '#c8601a'), { flat: 1 }); c.L(0.62, 0.34, 0.70, 0.88, 0.006, T(c, '#c8601a'), { flat: 1 });
        c.R(0.46, 0.14, 0.55, 0.34, T(c, '#4a6a2a')); c.P([[0.55, 0.26], [0.76, 0.18], [0.70, 0.34], [0.58, 0.32]], T(c, '#3a9a3a'));
        c.L(0.50, 0.22, 0.34, 0.14, 0.012, T(c, '#4aa84a'), { flat: 1 });
        c.E(0.40, 0.48, 0.05, 0.05, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'cornucopia', n: 'Cornucopia', fixed: 1, envs: TE, gy: 0.88, lines: ['The horn of plenty never runs empty, and neither does the table.', 'Everything spills out in a happy hurry.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.42, 0.025);
        c.P([[0.90, 0.80], [0.64, 0.88], [0.34, 0.76], [0.12, 0.54], [0.08, 0.34], [0.14, 0.30], [0.34, 0.46], [0.58, 0.52], [0.80, 0.58]], T(c, '#c89a4a'));
        c.P([[0.84, 0.74], [0.62, 0.80], [0.36, 0.70], [0.16, 0.52]], T(c, '#e8c070'), { flat: 1 });
        c.E(0.30, 0.50, 0.12, 0.14, T(c, '#c8202c')); c.E(0.46, 0.44, 0.11, 0.12, T(c, '#f0a020')); c.E(0.36, 0.30, 0.10, 0.12, T(c, '#2f9a3a')); c.E(0.52, 0.28, 0.09, 0.1, T(c, '#e07a1f'));
        c.E(0.20, 0.30, 0.08, 0.07, T(c, '#8a2a8a')); c.E(0.24, 0.24, 0.05, 0.05, T(c, '#8a2a8a')); c.E(0.17, 0.35, 0.05, 0.05, T(c, '#8a2a8a'));
        c.E(0.64, 0.38, 0.08, 0.14, T(c, '#f0d030')); c.L(0.64, 0.28, 0.64, 0.46, 0.006, T(c, '#c8a020'), { flat: 1 }); c.P([[0.60, 0.28], [0.68, 0.28], [0.64, 0.22]], T(c, '#4a9a3a'), { flat: 1 });
        c.E(0.50, 0.58, 0.09, 0.09, T(c, '#e07a1f')); c.E(0.72, 0.52, 0.07, 0.07, T(c, '#c8202c'));
        c.dot(0.28, 0.44, c.c('#ffffff'), 1); c.dot(0.44, 0.40, c.c('#fff0a0'), 1);
      } },
    { k: 'acorn', n: 'Acorn', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'forest', 'day', 'storm'], gy: 0.88, lines: ['A whole oak tree is hiding in there, waiting patiently.', 'The squirrels know exactly where they buried it.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.3, 0.025);
        c.E(0.5, 0.60, 0.26, 0.30, T(c, '#c8923a')); c.P([[0.46, 0.84], [0.54, 0.84], [0.50, 0.94]], T(c, '#c8923a'));
        c.E(0.5, 0.42, 0.32, 0.22, T(c, '#7a4a22'));
        for (var i = 0; i < 4; i++) for (var j = 0; j < 3; j++) c.E(0.30 + i * 0.13 + (j % 2) * 0.06, 0.34 + j * 0.08, 0.05, 0.04, T(c, '#6a3a1a'), { flat: 1 });
        c.R(0.47, 0.12, 0.54, 0.24, T(c, '#5a3a1a'));
        c.E(0.40, 0.62, 0.05, 0.1, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'leaf', n: 'Autumn Leaf', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'forest', 'day', 'storm'], lines: ['It let go of the branch and decided to enjoy the ride.', 'Every vein is a tiny golden road.'],
      draw: function (c, P, r, o) {
        c.P([[0.5, 0.06], [0.62, 0.22], [0.84, 0.18], [0.76, 0.40], [0.96, 0.52], [0.76, 0.62], [0.82, 0.78], [0.58, 0.72], [0.5, 0.96], [0.42, 0.72], [0.18, 0.78], [0.24, 0.62], [0.04, 0.52], [0.24, 0.40], [0.16, 0.18], [0.38, 0.22]], T(c, '#f08a1f'));
        c.P([[0.5, 0.12], [0.58, 0.28], [0.5, 0.60], [0.42, 0.28]], T(c, '#c8202c'), { flat: 1 });
        c.L(0.5, 0.20, 0.5, 0.98, 0.014, T(c, '#8a3a1a'), { flat: 1 }); c.L(0.5, 0.50, 0.26, 0.34, 0.01, T(c, '#8a3a1a'), { flat: 1 }); c.L(0.5, 0.50, 0.74, 0.34, 0.01, T(c, '#8a3a1a'), { flat: 1 }); c.L(0.5, 0.64, 0.28, 0.58, 0.01, T(c, '#8a3a1a'), { flat: 1 }); c.L(0.5, 0.64, 0.72, 0.58, 0.01, T(c, '#8a3a1a'), { flat: 1 });
      } },
    { k: 'pilgrimhat', n: 'Buckled Hat', fixed: 1, envs: TE, gy: 0.9, lines: ['Plain, black and very sensible, with one shiny buckle.', 'It has crossed an ocean and still looks neat.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.42, 0.03);
        c.E(0.5, 0.80, 0.46, 0.10, T(c, '#1c1c2a'));
        c.P([[0.26, 0.80], [0.30, 0.18], [0.70, 0.18], [0.74, 0.80]], T(c, '#2a2a3c'));
        c.E(0.5, 0.18, 0.20, 0.05, T(c, '#34344a'));
        c.R(0.27, 0.62, 0.73, 0.76, T(c, '#0e0e18'));
        c.R(0.42, 0.60, 0.58, 0.78, T(c, '#ffd23f')); c.R(0.46, 0.64, 0.54, 0.74, T(c, '#0e0e18'), { flat: 1 });
        c.L(0.34, 0.26, 0.34, 0.58, 0.02, T(c, '#4a4a60'), { flat: 1 });
      } },
    { k: 'mayflower', n: 'Sailing Ship', fixed: 1, envs: ['dawn', 'dusk', 'day', 'harvest', 'storm', 'night'], gy: 0.82, lines: ['A small ship with a big hope.', 'Sixty-six days of waves, and then, land.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#f4ecd8');
        c.E(0.5, 0.90, 0.56, 0.12, T(c, '#2a5a9a')); c.E(0.3, 0.92, 0.2, 0.05, T(c, '#4a82c8'), { flat: 1 });
        c.P([[0.08, 0.64], [0.92, 0.60], [0.84, 0.86], [0.22, 0.88]], T(c, '#8a4a1f')); c.R(0.10, 0.66, 0.90, 0.70, T(c, '#c88a3a'), { flat: 1 });
        c.R(0.48, 0.12, 0.52, 0.64, P.wood); c.R(0.28, 0.26, 0.32, 0.64, P.wood); c.R(0.70, 0.30, 0.74, 0.64, P.wood);
        c.P([[0.52, 0.14], [0.52, 0.52], [0.84, 0.48], [0.80, 0.18]], w); c.P([[0.48, 0.14], [0.48, 0.52], [0.18, 0.48], [0.22, 0.20]], w);
        c.P([[0.32, 0.30], [0.32, 0.56], [0.50, 0.54], [0.50, 0.32]], T(c, '#ede0c0'), { flat: 1 });
        c.R(0.40, 0.18, 0.46, 0.24, T(c, '#c8202c'), { flat: 1 }); c.R(0.56, 0.26, 0.62, 0.32, T(c, '#c8202c'), { flat: 1 });
        c.P([[0.52, 0.12], [0.66, 0.08], [0.52, 0.04]], T(c, '#c8202c'));
      } },
    { k: 'feast', n: 'Feast Table', fixed: 1, envs: ['hall', 'dusk', 'dawn', 'harvest', 'autumn'], gy: 0.9, lines: ['Every chair is taken and every plate is full.', 'Somebody is about to say what they are thankful for.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.0, 0.58, 1.0, 1.0, T(c, '#8a4a1f')); c.R(0.0, 0.58, 1.0, 0.64, T(c, '#c88a4a'));
        c.P([[0.0, 0.66], [1.0, 0.66], [1.0, 0.96], [0.0, 0.96]], T(c, '#fff4e0')); c.R(0.0, 0.66, 1.0, 0.70, T(c, '#ffffff'), { flat: 1 }); c.R(0.0, 0.92, 1.0, 0.96, T(c, '#e8d0a0'), { flat: 1 }); for (i = 0; i < 10; i++) c.dot(0.05 + i * 0.1, 0.94, c.c('#c8501a'), 1);
        c.E(0.5, 0.64, 0.30, 0.05, T(c, '#e8ecf4')); c.E(0.5, 0.52, 0.20, 0.13, T(c, '#c8782a')); c.E(0.45, 0.47, 0.12, 0.06, T(c, '#e8a040'), { flat: 1 }); c.L(0.34, 0.60, 0.26, 0.54, 0.05, T(c, '#c8782a')); c.L(0.66, 0.60, 0.74, 0.54, 0.05, T(c, '#c8782a')); c.E(0.25, 0.53, 0.025, 0.025, T(c, '#f4ecd8')); c.E(0.75, 0.53, 0.025, 0.025, T(c, '#f4ecd8'));
        c.E(0.14, 0.78, 0.11, 0.06, T(c, '#e8ecf4')); c.E(0.14, 0.74, 0.08, 0.05, T(c, '#e07a1f')); c.E(0.86, 0.78, 0.11, 0.06, T(c, '#e8ecf4')); c.E(0.86, 0.74, 0.08, 0.05, T(c, '#c8202c'));
        c.E(0.36, 0.84, 0.10, 0.05, T(c, '#e8ecf4')); c.E(0.36, 0.82, 0.07, 0.035, T(c, '#f4e8c0')); c.E(0.64, 0.84, 0.10, 0.05, T(c, '#e8ecf4')); c.E(0.64, 0.82, 0.07, 0.035, T(c, '#c8a040'));
        c.R(0.05, 0.14, 0.11, 0.56, T(c, '#fff0c0')); c.R(0.89, 0.14, 0.95, 0.56, T(c, '#fff0c0'));
        c.E(0.08, 0.08, 0.03, 0.07, T(c, '#ffd23f')); c.E(0.08, 0.09, 0.012, 0.035, T(c, '#ffffff'), { flat: 1 }); c.E(0.92, 0.08, 0.03, 0.07, T(c, '#ffd23f')); c.E(0.92, 0.09, 0.012, 0.035, T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.34, 0.12, 0.05, T(c, '#e8761f')); c.E(0.40, 0.31, 0.04, 0.04, T(c, '#c8202c')); c.E(0.60, 0.31, 0.04, 0.04, T(c, '#f0b020'));
      } },
    { k: 'corn', n: 'Indian Corn', fixed: 1, envs: TE, gy: 0.9, lines: ['Every kernel is a different jewel.', 'Hung on the door, it says autumn lives here.'],
      draw: function (c, P, r, o) {
        var cols = ['#c8202c', '#e8a020', '#8a2a8a', '#f0e0a0', '#e07a1f', '#2a4a9a'], i, j;
        c.P([[0.52, 0.98], [0.30, 0.64], [0.34, 0.46], [0.46, 0.62]], T(c, '#c8a040')); c.P([[0.48, 0.98], [0.70, 0.64], [0.66, 0.46], [0.54, 0.62]], T(c, '#a88030'));
        c.E(0.5, 0.38, 0.15, 0.32, T(c, '#f0d880'));
        for (j = 0; j < 9; j++) for (i = 0; i < 5; i++) { c.E(0.40 + i * 0.05 + (j % 2) * 0.012, 0.14 + j * 0.058, 0.023, 0.027, T(c, cols[(i * 3 + j * 5) % 6])); }
        c.P([[0.36, 0.62], [0.50, 0.52], [0.64, 0.62], [0.56, 0.98], [0.44, 0.98]], T(c, '#d8b050')); c.L(0.5, 0.56, 0.5, 0.98, 0.012, T(c, '#a88030'), { flat: 1 });
        c.R(0.46, 0.02, 0.54, 0.12, T(c, '#6a4a1a')); c.L(0.5, 0.12, 0.5, 0.02, 0.02, T(c, '#a88030'), { flat: 1 });
        c.dot(0.44, 0.20, c.c('#ffffff'), 1);
      } },
    { k: 'scarecrow2', n: 'Harvest Hay Bale', fixed: 1, envs: ['harvest', 'dusk', 'dawn', 'meadow', 'day', 'storm'], gy: 0.88, lines: ['A pumpkin sits on top as if it owns the place.', 'The crows have decided to let it be.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.92, 0.46, 0.03);
        c.R(0.06, 0.46, 0.94, 0.90, T(c, '#e0b040')); c.R(0.06, 0.46, 0.94, 0.54, T(c, '#f0d070'), { flat: 1 }); c.R(0.28, 0.46, 0.32, 0.90, T(c, '#8a5a2a'), { flat: 1 }); c.R(0.68, 0.46, 0.72, 0.90, T(c, '#8a5a2a'), { flat: 1 });
        for (i = 0; i < 10; i++) c.L(0.10 + i * 0.09, 0.60 + (i % 3) * 0.08, 0.16 + i * 0.09, 0.64 + (i % 3) * 0.08, 0.01, T(c, '#c89a30'), { flat: 1 });
        for (i = 0; i < 8; i++) c.L(0.08 + i * 0.12, 0.46, 0.04 + i * 0.12, 0.40, 0.012, T(c, '#e0b040'), { flat: 1 });
        c.E(0.5, 0.30, 0.20, 0.16, T(c, '#e87a1f')); c.E(0.40, 0.30, 0.10, 0.15, T(c, '#f09a3a'), { flat: 1 }); c.R(0.48, 0.10, 0.53, 0.18, T(c, '#4a6a2a'));
        c.P([[0.60, 0.14], [0.76, 0.10], [0.68, 0.22]], T(c, '#3a9a3a'), { flat: 1 });
      } },
    { k: 'cranberry', n: 'Cranberry Bowl', fixed: 1, envs: ['hall', 'dusk', 'dawn', 'harvest', 'day'], gy: 0.88, lines: ['Tart, ruby red, and passed hand to hand.', 'The bowl is blue, and so is the spoon.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.9, 0.38, 0.03);
        c.P([[0.14, 0.50], [0.86, 0.50], [0.76, 0.86], [0.24, 0.86]], T(c, '#2a6ae0')); c.E(0.5, 0.86, 0.26, 0.04, T(c, '#1a4aa8'));
        c.R(0.14, 0.60, 0.86, 0.66, T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.50, 0.36, 0.08, T(c, '#4a8aff'));
        for (i = 0; i < 14; i++) c.E(0.20 + (i % 7) * 0.10, 0.44 - Math.floor(i / 7) * 0.08 + (i % 2) * 0.02, 0.05, 0.05, T(c, '#c8102c'));
        for (i = 0; i < 6; i++) c.dot(0.22 + i * 0.11, 0.40 - (i % 2) * 0.06, c.c('#ff8090'), 1);
        c.L(0.64, 0.30, 0.84, 0.06, 0.03, P.silver); c.E(0.86, 0.06, 0.06, 0.04, P.silver);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
