/* Wonderland and the Looking-Glass: original pixel designs inspired by Lewis Carroll's public-domain books. */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }
  function chk(w) { return function (x, y) { return (Math.floor(x / w) + Math.floor(y / w)) % 2 === 0; }; }

  K.register('wonder', [
    { k: 'alice', n: 'Alice', fixed: 1, hy: 0.40, lines: ['A girl, a blue dress and a very curious mind. The rabbit never stood a chance.', 'She has stopped being surprised, which is the most surprising thing about her.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), hair = T(c, '#f4cc58'), blue = T(c, '#58a8f0'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.E(0.5, 0.44, 0.26, 0.34, hair); c.P([[0.26, 0.40], [0.18, 0.74], [0.30, 0.66], [0.34, 0.50]], hair); c.P([[0.74, 0.40], [0.82, 0.74], [0.70, 0.66], [0.66, 0.50]], hair);
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.66], [0.20, 0.66]], blue);
        c.E(0.22, 0.74, 0.10, 0.08, blue); c.E(0.78, 0.74, 0.10, 0.08, blue); c.E(0.22, 0.74, 0.05, 0.04, T(c, '#8ac8ff'), { flat: 1 }); c.E(0.78, 0.74, 0.05, 0.04, T(c, '#8ac8ff'), { flat: 1 });
        c.P([[0.36, 1.0], [0.64, 1.0], [0.60, 0.70], [0.40, 0.70]], P.white); c.R(0.44, 0.76, 0.56, 0.86, T(c, '#e8eefc'), { flat: 1 });
        c.P([[0.40, 0.66], [0.50, 0.72], [0.60, 0.66], [0.56, 0.62], [0.44, 0.62]], P.white);
        c.R(0.44, 0.54, 0.56, 0.64, skin);
        c.E(0.5, 0.40, 0.17, 0.19, skin);
        c.P([[0.30, 0.34], [0.36, 0.22], [0.50, 0.28], [0.64, 0.22], [0.70, 0.34], [0.62, 0.28], [0.50, 0.34], [0.38, 0.28]], hair);
        c.R(0.30, 0.22, 0.70, 0.27, T(c, '#2a5ab8'), { flat: 1 }); c.E(0.66, 0.24, 0.045, 0.045, T(c, '#2a5ab8')); c.E(0.74, 0.28, 0.035, 0.035, T(c, '#2a5ab8'));
        eye(0.43, 0.41, 1.3); eye(0.57, 0.41, 1.3); c.E(0.43, 0.42, 0.012, 0.016, c.c('#3a7ad8'), { flat: 1 }); c.E(0.57, 0.42, 0.012, 0.016, c.c('#3a7ad8'), { flat: 1 });
        c.L(0.38, 0.36, 0.47, 0.37, 0.012, T(c, '#c8982a'), { flat: 1 }); c.L(0.53, 0.37, 0.62, 0.36, 0.012, T(c, '#c8982a'), { flat: 1 });
        c.E(0.5, 0.48, 0.013, 0.012, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.53, 0.04, 0.02, T(c, '#c8405a'), { flat: 1 });
        c.E(0.37, 0.49, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.63, 0.49, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 });
        spark(c, 0.10, 0.24, 0.04, P.glow); spark(c, 0.92, 0.50, 0.035, P.white);
      } },
    { k: 'rabbit', n: 'The White Rabbit', fixed: 1, hy: 0.40, lines: ['Late, late, late, and he has the watch to prove it.', 'He runs a perfect schedule and has never once been on time.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#fbf8f4'), pink = T(c, '#ffb3c9'), vest = T(c, '#c2185b');
        c.mir = true; c.RE(0.40, 0.17, 0.065, 0.18, -0.28, fur); c.RE(0.40, 0.17, 0.03, 0.13, -0.28, pink, { flat: 1 }); c.mir = false;
        c.P([[0.18, 1.0], [0.82, 1.0], [0.72, 0.68], [0.28, 0.68]], vest); c.P([[0.38, 1.0], [0.62, 1.0], [0.56, 0.72], [0.44, 0.72]], P.white); c.R(0.28, 0.66, 0.72, 0.72, T(c, '#2d4fb8'));
        c.mir = true; c.E(0.43, 0.88, 0.015, 0.015, P.gold, { flat: 1 }); c.E(0.43, 0.80, 0.015, 0.015, P.gold, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.19, 0.21, fur); c.E(0.5, 0.54, 0.10, 0.08, fur);
        c.mir = true; c.E(0.42, 0.43, 0.04, 0.05, P.white, { flat: 1 }); c.E(0.42, 0.44, 0.026, 0.034, T(c, '#e0338f'), { flat: 1 }); c.dot(0.42, 0.44, c.c('#1b1a22'), 1); c.dot(0.41, 0.43, c.c('#ffffff'), 1); c.E(0.35, 0.53, 0.035, 0.022, pink, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.50, 0.03, 0.022, pink, { flat: 1 }); c.L(0.5, 0.52, 0.5, 0.56, 0.01, P.black, { flat: 1 }); c.R(0.485, 0.56, 0.515, 0.62, P.white); c.L(0.485, 0.56, 0.515, 0.56, 0.01, P.black, { flat: 1 });
        c.P([[0.42, 0.66], [0.5, 0.74], [0.58, 0.66], [0.5, 0.70]], T(c, '#2d4fb8'), { flat: 1 });
        c.L(0.64, 0.74, 0.80, 0.86, 0.012, P.gold, { flat: 1 }); c.E(0.82, 0.88, 0.11, 0.11, P.gold); c.E(0.82, 0.88, 0.085, 0.085, P.white, { flat: 1 }); c.L(0.82, 0.88, 0.82, 0.82, 0.01, P.black, { flat: 1 }); c.L(0.82, 0.88, 0.86, 0.90, 0.01, P.black, { flat: 1 }); c.E(0.82, 0.775, 0.02, 0.02, P.gold);
      } },
    { k: 'hatter', n: 'The Mad Hatter', fixed: 1, hy: 0.4, lines: ['Wild hair, wilder hat and a tea party that never ends. Ask him why a raven is like a writing desk, and then run.', 'It is always six o clock, and he does not mind a bit.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f6cfa6'), hair = T(c, '#ff8a1f'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.10, 1.0], [0.90, 1.0], [0.78, 0.68], [0.22, 0.68]], T(c, '#3a5ad8'));
        c.P([[0.40, 0.66], [0.60, 0.66], [0.50, 0.74]], P.white);
        c.P([[0.50, 0.70], [0.36, 0.64], [0.36, 0.78]], T(c, '#ff3fa4')); c.P([[0.50, 0.70], [0.64, 0.64], [0.64, 0.78]], T(c, '#ff3fa4')); c.E(0.5, 0.71, 0.03, 0.03, T(c, '#c2185b'));
        for (i = 0; i < 5; i++) c.dot(0.30 + i * 0.10, 0.84 + (i % 2) * 0.06, c.c('#ffd23f'), 1);
        c.E(0.26, 0.40, 0.10, 0.17, hair); c.E(0.74, 0.40, 0.10, 0.17, hair); c.E(0.30, 0.28, 0.10, 0.07, hair); c.E(0.70, 0.28, 0.10, 0.07, hair);
        c.E(0.5, 0.42, 0.17, 0.20, skin); c.E(0.34, 0.45, 0.03, 0.04, skin, { flat: 1 }); c.E(0.66, 0.45, 0.03, 0.04, skin, { flat: 1 });
        c.R(0.30, 0.20, 0.70, 0.28, T(c, '#3a2a5e')); c.E(0.5, 0.28, 0.27, 0.04, T(c, '#3a2a5e'));
        c.P([[0.34, 0.24], [0.66, 0.24], [0.62, 0.02], [0.38, 0.02]], T(c, '#4a3a7e')); c.R(0.34, 0.20, 0.66, 0.25, T(c, '#2fb868'), { flat: 1 });
        c.R(0.44, 0.07, 0.58, 0.19, P.white, { flat: 1 }); c.L(0.46, 0.10, 0.52, 0.10, 0.008, P.black, { flat: 1 }); c.L(0.46, 0.13, 0.55, 0.13, 0.008, P.black, { flat: 1 });
        c.E(0.43, 0.40, 0.05, 0.05, P.white, { flat: 1 }); c.E(0.57, 0.40, 0.05, 0.05, P.white, { flat: 1 }); c.E(0.43, 0.40, 0.028, 0.03, T(c, '#2fb868'), { flat: 1 }); c.E(0.57, 0.40, 0.028, 0.03, T(c, '#2fb868'), { flat: 1 }); c.dot(0.43, 0.40, P.black, 1); c.dot(0.57, 0.40, P.black, 1);
        c.L(0.36, 0.33, 0.47, 0.35, 0.014, hair, { flat: 1 }); c.L(0.53, 0.35, 0.64, 0.31, 0.014, hair, { flat: 1 });
        c.E(0.5, 0.47, 0.02, 0.018, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.55, 0.11, 0.045, T(c, '#8a1a2a'), { flat: 1 }); c.R(0.40, 0.52, 0.60, 0.555, P.white, { flat: 1 });
        c.E(0.38, 0.51, 0.025, 0.018, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.62, 0.51, 0.025, 0.018, T(c, '#ff9aa8'), { flat: 1 });
        spark(c, 0.10, 0.20, 0.04, P.glow); spark(c, 0.90, 0.30, 0.035, P.white);
      } },
    { k: 'cheshire', n: 'The Cheshire Cat', fixed: 1, hy: 0.4, lines: ['It fades in, grin first, and fades out the same way, and no one can say when it was really there.', 'We are all mad here, it says, and you are probably no exception.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#5a3a1e'), cat = T(c, '#c25ad8'), i;
        c.L(0.0, 0.76, 1.0, 0.70, 0.05, br); c.L(0.78, 0.72, 0.98, 0.56, 0.03, br); c.L(0.06, 0.74, 0.0, 0.64, 0.025, br);
        c.E(0.84, 0.66, 0.09, 0.05, P.leaf); c.E(0.12, 0.80, 0.08, 0.04, P.leaf); c.E(0.94, 0.52, 0.06, 0.04, P.leaf);
        c.E(0.5, 0.58, 0.27, 0.18, cat, { pat: stripe(5) }); c.L(0.74, 0.60, 0.92, 0.48, 0.05, cat); c.L(0.92, 0.48, 0.88, 0.30, 0.045, cat); c.E(0.88, 0.28, 0.03, 0.035, T(c, '#7a2a8a'));
        c.R(0.30, 0.66, 0.36, 0.76, cat); c.R(0.62, 0.66, 0.68, 0.76, cat); c.E(0.33, 0.77, 0.045, 0.02, cat); c.E(0.65, 0.77, 0.045, 0.02, cat);
        c.mir = true; c.P([[0.36, 0.28], [0.32, 0.10], [0.46, 0.20]], cat); c.P([[0.36, 0.26], [0.345, 0.15], [0.42, 0.21]], P.pinkS, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.40, 0.21, 0.17, cat);
        for (i = 0; i < 3; i++) { c.L(0.50 + (i - 1) * 0.06, 0.24, 0.50 + (i - 1) * 0.07, 0.29, 0.016, T(c, '#7a2a8a'), { flat: 1 }); }
        c.mir = true; c.E(0.40, 0.36, 0.055, 0.045, P.white, { flat: 1 }); c.E(0.40, 0.36, 0.045, 0.04, T(c, '#ffe27a'), { flat: 1 }); c.E(0.405, 0.36, 0.012, 0.035, P.black, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.44, 0.02, 0.015, P.pinkS, { flat: 1 });
        c.E(0.5, 0.49, 0.15, 0.065, P.white, { flat: 1 }, false); c.E(0.5, 0.465, 0.17, 0.03, cat, { flat: 1 }); for (i = 0; i < 9; i++) c.L(0.37 + i * 0.032, 0.455, 0.37 + i * 0.032, 0.54, 0.008, T(c, '#c8c8d8'), { flat: 1 });
        c.L(0.34, 0.50, 0.66, 0.50, 0.008, P.black, { flat: 1 });
      } },
    { k: 'queen', n: 'The Queen of Hearts', fixed: 1, hy: 0.4, lines: ['Off with their heads, she shouts, usually at lunch, and usually at someone who only wanted a tart.', 'She rules by volume, and the whole court is wearing earplugs.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f6cfa6'), red = T(c, '#d8203a'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.68], [0.20, 0.68]], red, { pat: function (x, y) { return (Math.floor(x / 5) + Math.floor(y / 5)) % 2 === 0; } });
        c.P([[0.22, 0.68], [0.50, 0.80], [0.78, 0.68], [0.72, 0.62], [0.28, 0.62]], P.white);
        for (i = 0; i < 7; i++) c.E(0.28 + i * 0.07, 0.66, 0.04, 0.035, P.white, { flat: 1 });
        c.E(0.5, 0.40, 0.18, 0.21, skin);
        c.E(0.27, 0.32, 0.07, 0.14, T(c, '#2a1a2a')); c.E(0.73, 0.32, 0.07, 0.14, T(c, '#2a1a2a')); c.E(0.5, 0.24, 0.17, 0.08, T(c, '#2a1a2a'));
        c.P([[0.30, 0.24], [0.28, 0.06], [0.38, 0.14], [0.44, 0.0], [0.50, 0.12], [0.56, 0.0], [0.62, 0.14], [0.72, 0.06], [0.70, 0.24]], P.gold);
        c.R(0.30, 0.20, 0.70, 0.26, P.gold, { flat: 1 }); c.dot(0.40, 0.23, c.c('#d8203a'), 2); c.dot(0.50, 0.23, c.c('#d8203a'), 2); c.dot(0.60, 0.23, c.c('#d8203a'), 2);
        c.E(0.50, 0.10, 0.02, 0.025, red, { flat: 1 });
        eye(0.43, 0.40, 1.2); eye(0.57, 0.40, 1.2);
        c.L(0.36, 0.34, 0.47, 0.37, 0.018, P.black, { flat: 1 }); c.L(0.53, 0.37, 0.64, 0.34, 0.018, P.black, { flat: 1 });
        c.E(0.5, 0.47, 0.016, 0.014, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.55, 0.06, 0.04, T(c, '#8a0a1a'), { flat: 1 }); c.R(0.46, 0.53, 0.54, 0.55, P.white, { flat: 1 });
        c.E(0.36, 0.49, 0.04, 0.03, T(c, '#ff6a8a'), { flat: 1 }); c.E(0.64, 0.49, 0.04, 0.03, T(c, '#ff6a8a'), { flat: 1 });
        c.L(0.86, 0.96, 0.86, 0.50, 0.014, P.wood, { flat: 1 }); c.E(0.86, 0.46, 0.06, 0.06, T(c, '#ff3a5a')); c.dot(0.84, 0.44, P.white, 1);
        spark(c, 0.12, 0.24, 0.04, P.glow);
      } },
    { k: 'caterpillar', n: 'The Caterpillar', fixed: 1, gy: 0.9, lines: ['Who are YOU, he asks, with a puff of blue bubbles, and nobody has a good answer.', 'A mushroom, a good seat and all the time in the world to be unhelpful.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#4fcf3a'), i;
        o.shadow(0.5, 0.92, 0.35, 0.03);
        c.R(0.42, 0.62, 0.58, 0.92, P.cream); c.R(0.40, 0.84, 0.60, 0.92, P.cream); c.E(0.5, 0.62, 0.34, 0.12, P.a, {}, true); c.E(0.5, 0.62, 0.33, 0.04, P.cream.d ? T(c, '#d0c090') : P.cream);
        c.E(0.34, 0.54, 0.05, 0.03, P.white, { flat: 1 }); c.E(0.58, 0.50, 0.06, 0.035, P.white, { flat: 1 }); c.E(0.72, 0.60, 0.035, 0.02, P.white, { flat: 1 }); c.E(0.50, 0.60, 0.04, 0.025, P.white, { flat: 1 });
        for (i = 0; i < 5; i++) { var x = 0.22 + i * 0.1, y = 0.58 - Math.sin(i * 0.8) * 0.06; c.E(x, y, 0.065, 0.065, i % 2 ? gr : T(c, '#8fe05a')); c.L(x, y + 0.05, x - 0.01, y + 0.09, 0.012, P.dark, { flat: 1 }); }
        c.E(0.64, 0.38, 0.12, 0.12, gr); c.mir = false; c.E(0.60, 0.36, 0.035, 0.04, P.white, { flat: 1 }); c.dot(0.61, 0.36, c.c('#1b1a22'), 2); c.E(0.69, 0.36, 0.035, 0.04, P.white, { flat: 1 }); c.dot(0.70, 0.36, c.c('#1b1a22'), 2); c.L(0.57, 0.31, 0.64, 0.30, 0.012, P.black, { flat: 1 }); c.L(0.66, 0.30, 0.73, 0.31, 0.012, P.black, { flat: 1 });
        c.E(0.56, 0.18, 0.04, 0.04, P.red); c.E(0.64, 0.30, 0.012, 0.012, P.dark, { flat: 1 }); c.L(0.64, 0.42, 0.52, 0.42, 0.014, P.wood, { flat: 1 }); c.E(0.51, 0.42, 0.025, 0.03, P.wood);
        c.E(0.42, 0.30, 0.04, 0.04, T(c, '#cfe8ff'), { flat: 1 }); c.E(0.36, 0.20, 0.05, 0.05, T(c, '#cfe8ff'), { flat: 1 }); c.E(0.30, 0.10, 0.04, 0.04, T(c, '#cfe8ff'), { flat: 1 });
      } },
    { k: 'teaparty', n: 'The Tea Party', fixed: 1, hy: 0.5, lines: ['Clean cup, move down! Everyone shifts one seat and nothing changes but the tea.', 'There is plenty of room and absolutely no more tea.'],
      draw: function (c, P, r, o) {
        var cloth = T(c, '#fff8ee'), china = T(c, '#fdfdff'), i;
        c.R(0.0, 0.66, 1.0, 1.0, P.b); c.P([[0.0, 0.66], [1.0, 0.66], [1.0, 0.74], [0.0, 0.74]], cloth);
        c.P([[0.0, 0.74], [1.0, 0.74], [1.0, 1.0], [0.0, 1.0]], cloth);
        for (i = 0; i < 6; i++) c.R(0.04 + i * 0.18, 0.74, 0.07 + i * 0.18, 1.0, P.a, { flat: 1 });
        c.R(0.38, 0.62, 0.62, 0.70, china); c.E(0.50, 0.62, 0.12, 0.03, china); c.E(0.5, 0.45, 0.14, 0.13, china); c.R(0.40, 0.31, 0.60, 0.34, china); c.E(0.5, 0.30, 0.05, 0.04, china); c.E(0.5, 0.265, 0.02, 0.02, P.gold, { flat: 1 });
        c.P([[0.62, 0.48], [0.80, 0.34], [0.82, 0.40], [0.64, 0.56]], china); c.RG(0.37, 0.47, 0.045, 0.085, china); c.R(0.36, 0.45, 0.64, 0.48, P.a, { flat: 1 });
        c.E(0.16, 0.62, 0.07, 0.025, china); c.R(0.10, 0.52, 0.22, 0.62, china); c.E(0.16, 0.52, 0.06, 0.02, T(c, '#8a4a1e'), { flat: 1 });
        c.E(0.16, 0.46, 0.07, 0.025, china); c.R(0.10, 0.36, 0.22, 0.46, china); c.E(0.16, 0.36, 0.06, 0.02, T(c, '#8a4a1e'), { flat: 1 });
        c.R(0.72, 0.60, 0.92, 0.70, P.cream); c.R(0.72, 0.52, 0.92, 0.60, P.pinkS); c.R(0.72, 0.60, 0.92, 0.62, P.white, { flat: 1 }); c.E(0.82, 0.50, 0.04, 0.03, P.red, { flat: 1 }); c.R(0.815, 0.40, 0.825, 0.50, P.glow, { flat: 1 }); c.E(0.82, 0.38, 0.012, 0.02, T(c, '#ff9a2a'), { flat: 1 });
        c.E(0.88, 0.24, 0.07, 0.07, P.gold); c.E(0.88, 0.24, 0.055, 0.055, P.white, { flat: 1 }); c.L(0.88, 0.24, 0.88, 0.19, 0.01, P.black, { flat: 1 }); c.L(0.88, 0.24, 0.91, 0.26, 0.01, P.black, { flat: 1 });
        c.E(0.30, 0.78, 0.05, 0.04, T(c, '#fff3d0'), { flat: 1 }); c.E(0.66, 0.82, 0.05, 0.04, T(c, '#ffd0e0'), { flat: 1 });
      } },
    { k: 'watch', n: 'The Pocket Watch', fixed: 1, float: 1, sh: 0.2, gy: 0.9, lines: ['Tick, tock, and it is always later than you think.', 'The gold is warm, the hands are quick and the rabbit wants it back.'],
      draw: function (c, P, r, o) {
        var i;
        c.mir = true; c.L(0.5, 0.18, 0.28, 0.06, 0.016, P.gold, { flat: 1 }); c.mir = false; c.RG(0.5, 0.13, 0.025, 0.05, P.gold);
        c.R(0.46, 0.15, 0.54, 0.26, P.gold); c.E(0.5, 0.56, 0.36, 0.36, P.gold); c.E(0.5, 0.56, 0.31, 0.31, T(c, '#e8d9a8'), { flat: 1 }); c.E(0.5, 0.56, 0.29, 0.29, P.white, { flat: 1 });
        for (i = 0; i < 12; i++) { var a = i * Math.PI / 6; c.L(0.5 + Math.cos(a) * 0.23, 0.56 + Math.sin(a) * 0.23, 0.5 + Math.cos(a) * 0.27, 0.56 + Math.sin(a) * 0.27, i % 3 ? 0.016 : 0.03, P.black, { flat: 1 }); }
        c.L(0.5, 0.56, 0.5, 0.36, 0.024, P.dark, { flat: 1 }); c.L(0.5, 0.56, 0.64, 0.62, 0.032, P.dark, { flat: 1 }); c.L(0.5, 0.56, 0.38, 0.72, 0.012, P.ruby, { flat: 1 }); c.E(0.5, 0.56, 0.028, 0.028, P.gold, { flat: 1 });
        c.E(0.34, 0.38, 0.05, 0.02, P.white, { flat: 1 });
        spark(c, 0.14, 0.28, 0.04, P.glow); spark(c, 0.88, 0.76, 0.04, P.white);
      } },
    { k: 'drinkme', n: 'The Drink Me Bottle', fixed: 1, gy: 0.9, lines: ['It says DRINK ME, and your common sense says maybe not, and your curiosity wins every time.', 'The label is a little crooked and the liquid is a little too pink.'],
      draw: function (c, P, r, o) {
        var glass = T(c, '#cfeaff'), liq = P.a;
        o.shadow(0.5, 0.90, 0.30, 0.03); c.E(0.30, 0.88, 0.12, 0.04, P.wood);
        c.E(0.5, 0.64, 0.26, 0.24, glass, { flat: 1 }); c.R(0.43, 0.20, 0.57, 0.46, glass, { flat: 1 }); c.E(0.5, 0.62, 0.22, 0.20, liq); c.R(0.28, 0.62, 0.72, 0.84, liq); c.E(0.5, 0.84, 0.22, 0.05, liq);
        c.E(0.5, 0.82, 0.27, 0.04, glass, { flat: 1 }); c.E(0.50, 0.62, 0.22, 0.045, T(c, '#fff0f8'), { flat: 1 }); c.R(0.43, 0.26, 0.57, 0.40, liq);
        c.R(0.44, 0.10, 0.56, 0.22, P.wood); c.E(0.5, 0.10, 0.06, 0.025, P.wood);
        c.R(0.34, 0.56, 0.66, 0.74, P.cream); c.R(0.34, 0.56, 0.66, 0.575, P.wood, { flat: 1 }); c.R(0.40, 0.62, 0.60, 0.635, P.black, { flat: 1 }); c.R(0.44, 0.67, 0.56, 0.68, P.black, { flat: 1 });
        c.E(0.34, 0.50, 0.025, 0.07, T(c, '#ffffff'), { flat: 1 });
        c.R(0.70, 0.80, 0.92, 0.88, P.cream); c.E(0.81, 0.80, 0.11, 0.03, P.white, { flat: 1 }); c.dot(0.76, 0.84, c.c('#5a2a14'), 2); c.dot(0.82, 0.82, c.c('#5a2a14'), 2); c.dot(0.86, 0.85, c.c('#5a2a14'), 2);
        spark(c, 0.16, 0.34, 0.04, P.glow); spark(c, 0.86, 0.38, 0.04, P.white);
      } },
    { k: 'tinydoor', n: 'The Tiny Door', fixed: 1, gy: 0.88, hy: 0.55, lines: ['The door is the size of a loaf of bread and the key is the size of a loaf of nothing.', 'Somewhere on the other side is the loveliest garden you have ever not been able to fit into.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.0, 0.0, 1.0, 1.0, T(c, '#5a3a22'));
        for (i = 0; i < 8; i++) c.L(0.08 + i * 0.12, 0.0, 0.08 + i * 0.12, 1.0, 0.015, i % 2 ? T(c, '#4a2e1a') : T(c, '#6e4a2c'), { flat: 1 });
        c.P([[0.26, 0.90], [0.26, 0.40], [0.34, 0.22], [0.50, 0.14], [0.66, 0.22], [0.74, 0.40], [0.74, 0.90]], T(c, '#3a2214'));
        c.P([[0.30, 0.90], [0.30, 0.42], [0.37, 0.26], [0.50, 0.20], [0.63, 0.26], [0.70, 0.42], [0.70, 0.90]], T(c, '#ffd23f'));
        c.P([[0.30, 0.90], [0.30, 0.42], [0.37, 0.26], [0.45, 0.22], [0.42, 0.90]], T(c, '#ffe880'), { flat: 1 });
        for (i = 0; i < 3; i++) c.L(0.34, 0.40 + i * 0.16, 0.66, 0.40 + i * 0.16, 0.012, T(c, '#c8a020'), { flat: 1 });
        c.L(0.50, 0.22, 0.50, 0.90, 0.012, T(c, '#c8a020'), { flat: 1 });
        c.E(0.62, 0.62, 0.04, 0.04, T(c, '#2a2a38')); c.E(0.62, 0.62, 0.015, 0.015, T(c, '#c8c8d8'), { flat: 1 }); c.R(0.60, 0.64, 0.64, 0.68, T(c, '#2a2a38'), { flat: 1 });
        c.P([[0.18, 0.90], [0.82, 0.90], [0.86, 0.96], [0.14, 0.96]], T(c, '#7a5a3a')); c.E(0.50, 0.95, 0.38, 0.03, T(c, '#4a8a3a'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.E(0.14 + i * 0.24, 0.94, 0.05, 0.035, T(c, '#2fb050')); c.E(0.12 + i * 0.26, 0.90, 0.025, 0.025, T(c, ['#ff5fa8', '#ffe040', '#ffffff', '#a870ff'][i])); }
        c.E(0.50, 0.08, 0.05, 0.05, T(c, '#fff0a0')); c.E(0.50, 0.08, 0.02, 0.02, T(c, '#ffffff'), { flat: 1 });
        c.R(0.74, 0.76, 0.86, 0.90, T(c, '#c83a4a')); c.E(0.80, 0.76, 0.06, 0.03, T(c, '#e86a7a')); c.dot(0.78, 0.82, c.c('#ffffff'), 1); c.dot(0.82, 0.86, c.c('#ffffff'), 1);
      } },
    { k: 'cards', n: 'The Card Soldiers', fixed: 1, gy: 0.9, lines: ['Three flat guards with very serious spears, painting the roses red before the Queen walks by.', 'They fall over in a gust and stand back up in a single motion.'],
      draw: function (c, P, r, o) {
        function card(x, y, h, kind) {
          var col = (kind === 'h' || kind === 'd') ? P.red : P.black;
          o.shadow(x, y + 0.02, 0.10, 0.02);
          c.R(x - 0.015, y - 0.10, x - 0.003, y, P.black, { flat: 1 }); c.R(x + 0.003, y - 0.10, x + 0.015, y, P.black, { flat: 1 }); c.E(x - 0.03, y + 0.005, 0.03, 0.014, P.black, { flat: 1 }); c.E(x + 0.03, y + 0.005, 0.03, 0.014, P.black, { flat: 1 });
          c.L(x - 0.11, y - 0.20, x - 0.07, y - 0.10 - h / 2, 0.022, P.black, { flat: 1 }); c.L(x + 0.11, y - 0.30, x + 0.07, y - 0.10 - h / 2, 0.022, P.black, { flat: 1 });
          c.L(x + 0.14, y - 0.10, x + 0.14, y - 0.46, 0.012, P.wood, { flat: 1 }); c.P([[x + 0.12, y - 0.46], [x + 0.16, y - 0.46], [x + 0.14, y - 0.54]], P.iron);
          c.R(x - 0.085, y - 0.10 - h, x + 0.085, y - 0.10, P.white); c.R(x - 0.07, y - 0.09 - h, x + 0.07, y - 0.11, P.cream, { flat: 1 });
          var cy = y - 0.10 - h / 2;
          if (kind === 'h') { c.E(x - 0.025, cy - 0.015, 0.03, 0.03, col, { flat: 1 }); c.E(x + 0.025, cy - 0.015, 0.03, 0.03, col, { flat: 1 }); c.P([[x - 0.055, cy], [x + 0.055, cy], [x, cy + 0.07]], col, { flat: 1 }); }
          else if (kind === 's') { c.E(x - 0.025, cy + 0.01, 0.03, 0.03, col, { flat: 1 }); c.E(x + 0.025, cy + 0.01, 0.03, 0.03, col, { flat: 1 }); c.P([[x - 0.055, cy], [x + 0.055, cy], [x, cy - 0.08]], col, { flat: 1 }); c.R(x - 0.008, cy + 0.02, x + 0.008, cy + 0.07, col, { flat: 1 }); }
          else { c.E(x, cy - 0.04, 0.03, 0.03, col, { flat: 1 }); c.E(x - 0.035, cy + 0.015, 0.03, 0.03, col, { flat: 1 }); c.E(x + 0.035, cy + 0.015, 0.03, 0.03, col, { flat: 1 }); c.R(x - 0.008, cy + 0.02, x + 0.008, cy + 0.08, col, { flat: 1 }); }
          c.dot(x - 0.065, y - 0.09 - h + 0.01, col === P.red ? c.c('#d7263d') : c.c('#1b1a22'), 2);
        }
        card(0.20, 0.88, 0.40, 'h'); card(0.50, 0.90, 0.46, 's'); card(0.80, 0.88, 0.40, 'c');
        c.E(0.5, 0.18, 0.05, 0.05, P.red, { flat: 1 }); c.L(0.42, 0.26, 0.58, 0.26, 0.012, P.gold, { flat: 1 });
      } },
    { k: 'flamingo', n: 'The Croquet Flamingo', fixed: 1, gy: 0.9, lines: ['A mallet with opinions, and a hedgehog ball who would very much prefer to stay rolled up.', 'The rules of this croquet are made up as it goes and everyone loses on purpose.'],
      draw: function (c, P, r, o) {
        var pk = T(c, '#ff7aa8'), pl = T(c, '#ffa8c8'), i;
        o.shadow(0.5, 0.94, 0.36, 0.03);
        c.L(0.46, 0.96, 0.48, 0.66, 0.025, T(c, '#e8508a')); c.L(0.56, 0.96, 0.54, 0.68, 0.025, T(c, '#e8508a')); c.L(0.40, 0.96, 0.52, 0.96, 0.02, T(c, '#e8508a'), { flat: 1 }); c.L(0.50, 0.96, 0.62, 0.96, 0.02, T(c, '#e8508a'), { flat: 1 });
        c.E(0.52, 0.62, 0.26, 0.17, pk); c.P([[0.72, 0.58], [0.94, 0.56], [0.84, 0.70], [0.70, 0.70]], pk); for (i = 0; i < 5; i++) c.L(0.34 + i * 0.07, 0.60 + (i % 2) * 0.03, 0.42 + i * 0.07, 0.66 + (i % 2) * 0.03, 0.02, pl, { flat: 1 });
        c.P([[0.30, 0.56], [0.22, 0.44], [0.20, 0.30], [0.26, 0.18], [0.34, 0.22], [0.30, 0.34], [0.36, 0.48], [0.40, 0.56]], pk);
        c.E(0.30, 0.14, 0.11, 0.09, pk); c.P([[0.22, 0.12], [0.06, 0.12], [0.04, 0.22], [0.14, 0.24], [0.22, 0.20]], T(c, '#ffe0e8')); c.P([[0.14, 0.20], [0.04, 0.22], [0.08, 0.30], [0.18, 0.24]], T(c, '#2a2030'));
        c.E(0.28, 0.12, 0.028, 0.03, P.white, { flat: 1 }); c.dot(0.27, 0.13, c.c('#1a1020'), 2); c.L(0.22, 0.07, 0.34, 0.09, 0.012, T(c, '#c83a6a'), { flat: 1 });
        c.L(0.60, 0.50, 0.84, 0.22, 0.03, T(c, '#a06a2a')); c.R(0.72, 0.10, 0.94, 0.24, T(c, '#c8903a')); c.L(0.72, 0.14, 0.94, 0.14, 0.01, T(c, '#e8b860'), { flat: 1 });
        c.E(0.18, 0.88, 0.09, 0.07, T(c, '#8a6a4a')); for (i = 0; i < 5; i++) c.L(0.12 + i * 0.03, 0.84, 0.12 + i * 0.03, 0.80, 0.01, T(c, '#5a4030'), { flat: 1 }); c.dot(0.14, 0.88, c.c('#2a1a10'), 1);
        c.R(0.80, 0.84, 0.82, 0.96, T(c, '#e8e8f0'), { flat: 1 }); c.P([[0.76, 0.84], [0.88, 0.84], [0.82, 0.76]], T(c, '#e8e8f0'), { flat: 1 }); c.R(0.90, 0.84, 0.92, 0.96, T(c, '#e8e8f0'), { flat: 1 });
      } },
    { k: 'dodo', n: 'The Dodo', fixed: 1, gy: 0.9, lines: ['Round, gray, pompous and in charge of a caucus race that nobody can win.', 'Everybody has won and all must have prizes, said the dodo, and then ate the prizes.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#8a96a8'), gl = T(c, '#b4bfcf'), i;
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.L(0.40, 0.88, 0.38, 0.96, 0.03, T(c, '#e8a020')); c.L(0.60, 0.88, 0.62, 0.96, 0.03, T(c, '#e8a020'));
        c.E(0.36, 0.97, 0.07, 0.025, T(c, '#e8a020')); c.E(0.64, 0.97, 0.07, 0.025, T(c, '#e8a020'));
        c.P([[0.74, 0.62], [0.96, 0.46], [0.98, 0.58], [0.92, 0.72], [0.80, 0.78]], T(c, '#4aa8c8')); c.L(0.80, 0.64, 0.94, 0.52, 0.012, T(c, '#7ad0e8'), { flat: 1 }); c.L(0.80, 0.70, 0.95, 0.60, 0.012, T(c, '#2a78a0'), { flat: 1 });
        c.E(0.50, 0.66, 0.32, 0.26, gr); c.E(0.46, 0.74, 0.20, 0.14, gl, { flat: 1 });
        c.E(0.26, 0.62, 0.09, 0.15, T(c, '#6a7688')); for (i = 0; i < 4; i++) c.L(0.22 + i * 0.015, 0.54 + i * 0.05, 0.28 + i * 0.01, 0.58 + i * 0.05, 0.012, T(c, '#a8b4c4'), { flat: 1 });
        c.E(0.42, 0.34, 0.17, 0.17, gr); c.E(0.38, 0.28, 0.06, 0.04, gl, { flat: 1 });
        c.P([[0.30, 0.30], [0.08, 0.34], [0.04, 0.48], [0.14, 0.58], [0.28, 0.50], [0.34, 0.40]], T(c, '#f0c040')); c.L(0.10, 0.44, 0.30, 0.44, 0.018, T(c, '#c88a10'), { flat: 1 }); c.P([[0.10, 0.46], [0.30, 0.46], [0.22, 0.56], [0.14, 0.56]], T(c, '#e8a020'), { flat: 1 }); c.E(0.14, 0.36, 0.018, 0.014, T(c, '#5a3a00'), { flat: 1 });
        c.E(0.36, 0.28, 0.035, 0.04, P.white, { flat: 1 }); c.dot(0.35, 0.29, c.c('#1a1020'), 2); c.dot(0.34, 0.27, c.c('#ffffff'), 1); c.L(0.30, 0.22, 0.42, 0.24, 0.02, T(c, '#4a5568'), { flat: 1 });
        c.P([[0.44, 0.18], [0.50, 0.04], [0.54, 0.16]], T(c, '#6a7688')); c.P([[0.50, 0.18], [0.58, 0.08], [0.58, 0.20]], T(c, '#8a96a8'));
        c.E(0.60, 0.94, 0.0, 0.0, gr);
        c.E(0.54, 0.46, 0.06, 0.04, T(c, '#e8202c')); c.P([[0.50, 0.46], [0.46, 0.54], [0.54, 0.50]], T(c, '#c8102c')); c.P([[0.58, 0.46], [0.66, 0.54], [0.58, 0.52]], T(c, '#c8102c'));
      } },
    { k: 'jabberwock', n: 'The Jabberwock', fixed: 1, hy: 0.4, lines: ['Jaws that bite, claws that catch, and a vorpal sword going snicker-snack.', 'Beware it, my son, but also maybe bring a very sharp stick.'],
      draw: function (c, P, r, o) {
        var sc = T(c, '#4a9a48'), scD = T(c, '#2f6a30'), i;
        c.P([[0.50, 0.46], [0.0, 0.14], [0.06, 0.40], [0.14, 0.36], [0.20, 0.60], [0.36, 0.60]], T(c, '#8a4ab8')); c.P([[0.50, 0.46], [1.0, 0.14], [0.94, 0.40], [0.86, 0.36], [0.80, 0.60], [0.64, 0.60]], T(c, '#8a4ab8'));
        for (i = 0; i < 3; i++) { c.L(0.46, 0.46, 0.04 + i * 0.07, 0.18 + i * 0.12, 0.012, T(c, '#5a2a88'), { flat: 1 }); c.L(0.54, 0.46, 0.96 - i * 0.07, 0.18 + i * 0.12, 0.012, T(c, '#5a2a88'), { flat: 1 }); }
        c.P([[0.30, 1.0], [0.70, 1.0], [0.62, 0.62], [0.38, 0.62]], sc); for (i = 0; i < 5; i++) c.E(0.50, 0.68 + i * 0.07, 0.10 - i * 0.004, 0.025, T(c, '#c8d868'), { flat: 1 });
        c.P([[0.30, 0.40], [0.18, 0.10], [0.38, 0.28]], T(c, '#f4efd0')); c.P([[0.70, 0.40], [0.82, 0.10], [0.62, 0.28]], T(c, '#f4efd0'));
        c.P([[0.50, 0.06], [0.44, 0.22], [0.56, 0.22]], scD); for (i = 0; i < 3; i++) c.P([[0.30 + i * 0.02, 0.62 - i * 0.04], [0.26, 0.58 - i * 0.04], [0.32, 0.56 - i * 0.04]], scD, { flat: 1 });
        c.E(0.5, 0.40, 0.22, 0.22, sc); c.E(0.5, 0.52, 0.15, 0.13, T(c, '#78c868'));
        c.E(0.40, 0.36, 0.055, 0.06, T(c, '#ffe84a')); c.E(0.60, 0.36, 0.055, 0.06, T(c, '#ffe84a')); c.E(0.40, 0.37, 0.012, 0.05, P.black, { flat: 1 }); c.E(0.60, 0.37, 0.012, 0.05, P.black, { flat: 1 }); c.dot(0.385, 0.34, P.white, 1); c.dot(0.585, 0.34, P.white, 1);
        c.L(0.32, 0.28, 0.46, 0.34, 0.024, scD, { flat: 1 }); c.L(0.68, 0.28, 0.54, 0.34, 0.024, scD, { flat: 1 });
        c.E(0.46, 0.46, 0.014, 0.012, scD, { flat: 1 }); c.E(0.54, 0.46, 0.014, 0.012, scD, { flat: 1 });
        c.P([[0.38, 0.56], [0.62, 0.56], [0.60, 0.64], [0.40, 0.64]], T(c, '#6a0a1a'), { flat: 1 }); for (i = 0; i < 5; i++) c.P([[0.40 + i * 0.045, 0.56], [0.42 + i * 0.045, 0.62], [0.44 + i * 0.045, 0.56]], P.white, { flat: 1 });
        c.L(0.36, 0.52, 0.18, 0.60, 0.008, T(c, '#c8d868'), { flat: 1 }); c.L(0.64, 0.52, 0.82, 0.60, 0.008, T(c, '#c8d868'), { flat: 1 });
        c.L(0.90, 0.98, 0.88, 0.60, 0.018, P.wood, { flat: 1 }); c.P([[0.88, 0.60], [0.84, 0.50], [0.92, 0.50]], P.silver);
        spark(c, 0.10, 0.20, 0.04, P.glow);
      } },
    { k: 'humpty', n: 'Humpty Dumpty', fixed: 1, gy: 0.86, lines: ['He sat on a wall, and he had a very great fall, and he is still quite cross about it.', 'A very smart egg who says what he means, and also several things he does not.'],
      draw: function (c, P, r, o) {
        var egg = T(c, '#fdf3dc'), g = 0.80;
        c.R(0.0, g, 1.0, 1.0, T(c, '#a8643a'), { pat: o.B }); c.R(0.0, g - 0.03, 1.0, g + 0.02, T(c, '#c98a5a'));
        c.mir = true; c.L(0.40, g - 0.18, 0.34, g - 0.04, 0.05, P.b); c.R(0.28, g - 0.07, 0.40, g - 0.02, P.red); c.mir = false;
        c.E(0.5, 0.42, 0.25, 0.36, egg); c.E(0.5, 0.58, 0.22, 0.16, P.a, { }, false); c.R(0.28, 0.56, 0.72, 0.60, P.gold, { flat: 1 });
        c.mir = true; c.L(0.28, 0.50, 0.14, 0.54, 0.035, egg); c.E(0.12, 0.55, 0.04, 0.04, egg); c.mir = false;
        c.mir = true; c.E(0.42, 0.34, 0.04, 0.05, P.white, { flat: 1 }); c.dot(0.42, 0.35, c.c('#1b1a22'), 2); c.L(0.36, 0.28, 0.46, 0.30, 0.014, P.black, { flat: 1 }); c.E(0.36, 0.43, 0.03, 0.02, T(c, '#ffa8b8'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.40, 0.012, 0.015, T(c, '#e8c9a0'), { flat: 1 }); c.L(0.42, 0.47, 0.50, 0.50, 0.012, P.black, { flat: 1 }); c.L(0.58, 0.47, 0.50, 0.50, 0.012, P.black, { flat: 1 });
        c.P([[0.42, 0.52], [0.5, 0.58], [0.58, 0.52], [0.5, 0.55]], P.a, { flat: 1 });
        c.L(0.34, 0.14, 0.40, 0.22, 0.012, P.black, { flat: 1 }); c.L(0.40, 0.22, 0.38, 0.30, 0.012, P.black, { flat: 1 }); c.L(0.38, 0.30, 0.44, 0.38, 0.012, P.black, { flat: 1 });
        c.E(0.5, 0.08, 0.001, 0.001, P.black, { flat: 1 });
      } },
    { k: 'tweedles', n: 'Tweedledum and Tweedledee', fixed: 1, gy: 0.9, lines: ['Two plump brothers, identical in every way except the ones that matter, always arm in arm and nearly always arguing.', 'They have a rattle, a battle and a very big bolster.'],
      draw: function (c, P, r, o) {
        function bro(x, col) {
          o.shadow(x, 0.92, 0.17, 0.025);
          c.E(x, 0.70, 0.17, 0.20, col, { pat: stripe(4) }); c.R(x - 0.10, 0.84, x - 0.04, 0.92, P.white); c.R(x + 0.04, 0.84, x + 0.10, 0.92, P.white); c.E(x - 0.07, 0.93, 0.06, 0.02, P.black); c.E(x + 0.07, 0.93, 0.06, 0.02, P.black);
          c.E(x, 0.34, 0.12, 0.125, T(c, '#f4cba2')); c.E(x, 0.22, 0.12, 0.05, col, {}, true); c.R(x - 0.13, 0.22, x + 0.13, 0.245, col); c.L(x, 0.17, x, 0.09, 0.012, P.gold, { flat: 1 }); c.L(x - 0.06, 0.10, x + 0.06, 0.08, 0.016, P.silver, { flat: 1 }); c.E(x, 0.09, 0.015, 0.015, P.gold, { flat: 1 });
          c.mir = false; c.E(x - 0.04, 0.33, 0.016, 0.022, P.black, { flat: 1 }); c.E(x + 0.04, 0.33, 0.016, 0.022, P.black, { flat: 1 }); c.E(x - 0.07, 0.40, 0.025, 0.017, T(c, '#ff9aa8'), { flat: 1 }); c.E(x + 0.07, 0.40, 0.025, 0.017, T(c, '#ff9aa8'), { flat: 1 }); c.L(x - 0.03, 0.40, x + 0.03, 0.40, 0.012, T(c, '#8a2a3a'), { flat: 1 });
          c.R(x - 0.06, 0.45, x + 0.06, 0.52, P.white); c.P([[x - 0.06, 0.50], [x, 0.56], [x + 0.06, 0.50]], P.a, { flat: 1 });
        }
        bro(0.28, P.a); bro(0.72, P.b);
        c.L(0.42, 0.62, 0.58, 0.62, 0.05, T(c, '#f4cba2')); c.E(0.5, 0.74, 0.05, 0.05, P.gold, { flat: 1 }); c.E(0.5, 0.74, 0.03, 0.03, P.glow, { flat: 1 });
      } },
    { k: 'walrus', n: 'The Walrus', fixed: 1, gy: 0.82, lines: ['The time has come, the walrus said, to talk of many things, and also of oysters, mostly oysters.', 'Big whiskers, bigger appetite and a very sincere sniffle.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#9a6a44'), furL = T(c, '#c8946a'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.E(0.5, 0.86, 0.46, 0.30, fur); c.E(0.14, 0.78, 0.10, 0.06, fur); c.E(0.86, 0.78, 0.10, 0.06, fur);
        c.E(0.5, 0.42, 0.32, 0.32, fur); c.E(0.5, 0.52, 0.26, 0.20, furL);
        for (i = 0; i < 9; i++) c.dot(0.28 + i * 0.055, 0.28 + (i % 3) * 0.06, c.c('#7a4a2a'), 1);
        c.E(0.5, 0.26, 0.28, 0.07, T(c, '#14102a')); c.P([[0.34, 0.24], [0.38, 0.10], [0.62, 0.10], [0.66, 0.24]], T(c, '#2a2438')); c.R(0.34, 0.19, 0.66, 0.23, T(c, '#d8203a'), { flat: 1 });
        eye(0.38, 0.38, 1.3); eye(0.62, 0.38, 1.3); c.L(0.30, 0.32, 0.43, 0.34, 0.016, T(c, '#5a3a22'), { flat: 1 }); c.L(0.57, 0.34, 0.70, 0.32, 0.016, T(c, '#5a3a22'), { flat: 1 });
        c.E(0.5, 0.48, 0.12, 0.07, T(c, '#5a3a22')); c.E(0.44, 0.47, 0.03, 0.02, P.black, { flat: 1 }); c.E(0.56, 0.47, 0.03, 0.02, P.black, { flat: 1 });
        c.E(0.5, 0.56, 0.20, 0.07, furL); for (i = 0; i < 12; i++) c.dot(0.36 + i * 0.026, 0.54 + (i % 2) * 0.03, c.c('#3a2212'), 1);
        c.P([[0.38, 0.54], [0.34, 0.92], [0.43, 0.92], [0.46, 0.58]], T(c, '#f4efd0')); c.P([[0.62, 0.54], [0.66, 0.92], [0.57, 0.92], [0.54, 0.58]], T(c, '#f4efd0'));
        c.P([[0.36, 0.64], [0.36, 0.86], [0.40, 0.88]], T(c, '#d8d0b0'), { flat: 1 });
        c.E(0.5, 0.70, 0.10, 0.045, T(c, '#5a3a22'), { flat: 1 });
        for (i = 0; i < 3; i++) c.E(0.14 + i * 0.03, 0.94 - i * 0.03, 0.025, 0.02, P.white, { flat: 1 });
        spark(c, 0.10, 0.20, 0.035, P.glow);
      } },
    { k: 'rabbithole', n: 'The Rabbit Hole', fixed: 1, hy: 0.5, hs: 1.5, lines: ['Down, down, down, past clocks and teacups and a very surprised marmalade jar.', 'It is a long fall, and a long time to think about what you would say at the bottom.'],
      draw: function (c, P, r, o) {
        var i, cols = [T(c, '#6a3a1e'), T(c, '#8a4a22'), T(c, '#a85a2a'), T(c, '#7a3a1a'), T(c, '#5a2a14'), T(c, '#3a1a0e'), T(c, '#2a1008'), T(c, '#14080a')];
        for (i = 0; i < 8; i++) c.E(0.5, 0.5, 0.50 - i * 0.055, 0.50 - i * 0.055, cols[i], { flat: 1 });
        for (i = 0; i < 6; i++) { var a = i * 1.05, rr = 0.30 - i * 0.03; c.L(0.5 + Math.cos(a) * rr, 0.5 + Math.sin(a) * rr, 0.5 + Math.cos(a + 0.5) * (rr - 0.04), 0.5 + Math.sin(a + 0.5) * (rr - 0.04), 0.016, T(c, '#c98a5a'), { flat: 1 }); }
        c.E(0.30, 0.30, 0.06, 0.06, P.gold); c.E(0.30, 0.30, 0.045, 0.045, P.white, { flat: 1 }); c.L(0.30, 0.30, 0.30, 0.26, 0.008, P.black, { flat: 1 }); c.L(0.30, 0.30, 0.33, 0.31, 0.008, P.black, { flat: 1 });
        c.E(0.70, 0.30, 0.06, 0.04, P.white); c.R(0.65, 0.30, 0.75, 0.38, P.white); c.RG(0.76, 0.34, 0.015, 0.035, P.white, { flat: 1 }); c.R(0.66, 0.31, 0.74, 0.33, P.a, { flat: 1 });
        c.R(0.28, 0.62, 0.40, 0.76, P.white); c.R(0.28, 0.62, 0.40, 0.64, P.red, { flat: 1 }); c.E(0.34, 0.69, 0.025, 0.03, P.red, { flat: 1 }); c.P([[0.31, 0.68], [0.37, 0.68], [0.34, 0.74]], P.red, { flat: 1 });
        c.L(0.64, 0.60, 0.76, 0.70, 0.014, P.gold, { flat: 1 }); c.RG(0.62, 0.58, 0.012, 0.03, P.gold, { flat: 1 }); c.L(0.74, 0.68, 0.74, 0.74, 0.012, P.gold, { flat: 1 });
        c.E(0.5, 0.5, 0.05, 0.05, T(c, '#fff3b8'), { flat: 1 });
        spark(c, 0.16, 0.14, 0.04, P.glow); spark(c, 0.86, 0.80, 0.04, P.white); spark(c, 0.14, 0.82, 0.03, P.glow);
      } },
    { k: 'chess', n: 'The Looking-Glass Chessboard', fixed: 1, gy: 0.5, lines: ['The whole country is a giant chessboard and everyone is somebody else s pawn.', 'Red queen to the front, white knight to the rescue, and the squares go on forever.'],
      draw: function (c, P, r, o) {
        var i, j, A = T(c, '#fff3d6'), B = P.a, y0 = 0.46, y1 = 1.0;
        for (j = 0; j < 8; j++) {
          var t0 = j / 8, t1 = (j + 1) / 8, ya = y0 + (y1 - y0) * t0 * t0 * 0.9 - 0 + (y1 - y0) * 0.1 * t0, yb = y0 + (y1 - y0) * t1 * t1 * 0.9 + (y1 - y0) * 0.1 * t1;
          var wa = 0.20 + 0.80 * t0, wb = 0.20 + 0.80 * t1;
          for (i = 0; i < 8; i++) { var xa = 0.5 + (i - 4) * wa / 4 * 0.9, xb = 0.5 + (i - 3) * wa / 4 * 0.9, xc = 0.5 + (i - 3) * wb / 4 * 0.9, xd = 0.5 + (i - 4) * wb / 4 * 0.9; c.P([[xa, ya], [xb, ya], [xc, yb + 0.004], [xd, yb + 0.004]], (i + j) % 2 ? A : B, { flat: 1 }); }
        }
        function piece(x, y, s, col, queen) {
          o.shadow(x, y + 0.01, 0.07 * s, 0.015 * s);
          c.E(x, y - 0.01 * s, 0.07 * s, 0.025 * s, col); c.P([[x - 0.055 * s, y - 0.02 * s], [x + 0.055 * s, y - 0.02 * s], [x + 0.025 * s, y - 0.26 * s], [x - 0.025 * s, y - 0.26 * s]], col);
          c.E(x, y - 0.27 * s, 0.05 * s, 0.018 * s, col); c.E(x, y - 0.32 * s, 0.035 * s, 0.035 * s, col);
          if (queen) { c.P([[x - 0.05 * s, y - 0.31 * s], [x - 0.04 * s, y - 0.40 * s], [x - 0.02 * s, y - 0.34 * s], [x, y - 0.42 * s], [x + 0.02 * s, y - 0.34 * s], [x + 0.04 * s, y - 0.40 * s], [x + 0.05 * s, y - 0.31 * s]], P.gold); }
          else { c.R(x - 0.008 * s, y - 0.44 * s, x + 0.008 * s, y - 0.35 * s, col); c.R(x - 0.03 * s, y - 0.41 * s, x + 0.03 * s, y - 0.39 * s, col); }
        }
        piece(0.34, 0.74, 1.0, T(c, '#d7263d'), true); piece(0.68, 0.64, 0.85, T(c, '#f4f6ff'), false); piece(0.50, 0.96, 1.25, T(c, '#c2102e'), false);
        spark(c, 0.12, 0.22, 0.04, P.glow); spark(c, 0.88, 0.30, 0.04, P.white);
      } },
    { k: 'lookingglass', n: 'The Looking-Glass', fixed: 1, gy: 0.92, hy: 0.45, lines: ['It looks like a mirror, but touch it and it feels like cool water.', 'On the other side everything is backward, including the best advice.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.28, 0.03);
        c.R(0.40, 0.84, 0.60, 0.94, P.wood); c.R(0.32, 0.90, 0.68, 0.95, P.wood);
        c.E(0.5, 0.46, 0.31, 0.42, P.gold); c.E(0.5, 0.46, 0.27, 0.38, T(c, '#8a6a10'), { flat: 1 }); c.E(0.5, 0.46, 0.255, 0.365, T(c, '#2a3a8a'), { flat: 1 });
        var cols = [T(c, '#4a6af0'), T(c, '#7a8af8'), T(c, '#b0c0ff'), T(c, '#e0e8ff'), T(c, '#ffffff')], i;
        for (i = 0; i < 5; i++) c.E(0.5 + 0.01 * i, 0.46 - 0.005 * i, 0.245 - i * 0.045, 0.355 - i * 0.07, cols[i], { flat: 1 });
        for (i = 0; i < 6; i++) { var a = i * 1.1; c.L(0.5 + Math.cos(a) * 0.04, 0.46 + Math.sin(a) * 0.06, 0.5 + Math.cos(a) * 0.20, 0.46 + Math.sin(a) * 0.30, 0.01, T(c, '#c0d0ff'), { flat: 1 }); }
        c.mir = true; c.E(0.36, 0.14, 0.04, 0.04, P.gold); c.E(0.30, 0.26, 0.03, 0.03, P.gold); c.mir = false; c.ST(0.5, 0.08, 0.05, 0.022, P.gold, { flat: 1 }); c.E(0.5, 0.88, 0.035, 0.035, P.gold);
        c.E(0.38, 0.26, 0.04, 0.09, T(c, '#ffffff'), { flat: 1 });
        spark(c, 0.14, 0.40, 0.04, P.white); spark(c, 0.86, 0.56, 0.05, P.glow); spark(c, 0.80, 0.20, 0.03, P.white);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
