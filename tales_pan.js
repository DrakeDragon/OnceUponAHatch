/* Neverland: original pixel designs inspired by J. M. Barrie's Peter and Wendy. */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }

  K.register('pan', [
    { k: 'peter', n: 'Peter Pan', fixed: 1, hy: 0.38, lines: ['The boy who would not grow up, grinning like he knows something you forgot.', 'A feather in his cap and a whole sky underneath his feet.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f6cfa6'), hair = T(c, '#c8601e'), leaf = T(c, '#3f9a3a'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.66], [0.20, 0.66]], leaf);
        for (i = 0; i < 7; i++) c.P([[0.10 + i * 0.12, 1.0], [0.16 + i * 0.12, 0.88], [0.22 + i * 0.12, 1.0]], T(c, '#2f7a3a'), { flat: 1 });
        c.R(0.42, 0.56, 0.58, 0.68, skin);
        c.E(0.30, 0.42, 0.045, 0.06, skin); c.P([[0.27, 0.38], [0.24, 0.30], [0.32, 0.36]], skin); c.E(0.70, 0.42, 0.045, 0.06, skin); c.P([[0.73, 0.38], [0.76, 0.30], [0.68, 0.36]], skin);
        c.E(0.5, 0.42, 0.19, 0.21, skin);
        c.E(0.5, 0.28, 0.21, 0.10, hair); c.P([[0.30, 0.30], [0.36, 0.22], [0.44, 0.32], [0.52, 0.22], [0.60, 0.32], [0.66, 0.22], [0.71, 0.32], [0.66, 0.38], [0.34, 0.38]], hair);
        c.P([[0.30, 0.28], [0.34, 0.12], [0.52, 0.10], [0.70, 0.22], [0.70, 0.28]], leaf); c.P([[0.30, 0.28], [0.50, 0.34], [0.70, 0.28], [0.70, 0.24], [0.30, 0.24]], T(c, '#2f7a3a'));
        c.P([[0.62, 0.16], [0.80, 0.04], [0.92, 0.0], [0.80, 0.12], [0.66, 0.22]], T(c, '#d8304a')); c.L(0.64, 0.18, 0.88, 0.02, 0.01, T(c, '#ff7a8a'), { flat: 1 });
        eye(0.43, 0.43, 1.25); eye(0.57, 0.43, 1.25); c.E(0.43, 0.44, 0.012, 0.016, c.c('#2fb868'), { flat: 1 }); c.E(0.57, 0.44, 0.012, 0.016, c.c('#2fb868'), { flat: 1 });
        c.L(0.37, 0.37, 0.47, 0.37, 0.014, hair, { flat: 1 }); c.L(0.53, 0.37, 0.63, 0.37, 0.014, hair, { flat: 1 });
        c.E(0.5, 0.50, 0.014, 0.012, T(c, '#e0a07a'), { flat: 1 });
        c.E(0.5, 0.56, 0.09, 0.04, T(c, '#a8283a'), { flat: 1 }); c.R(0.43, 0.545, 0.57, 0.565, P.white, { flat: 1 });
        c.E(0.37, 0.52, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.63, 0.52, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 });
        spark(c, 0.12, 0.30, 0.04, P.glow); spark(c, 0.90, 0.46, 0.035, P.white);
      } },
    { k: 'tinker', n: 'The Pixie', fixed: 1, float: 1, sh: 0.1, gy: 0.92, hy: 0.45, lines: ['A trail of gold, a little bell of a laugh and a temper to match.', 'She is exactly as small as she is bright, and nobody is bossier.'],
      draw: function (c, P, r, o) {
        var wing = T(c, '#d8f0ff'), dress = T(c, '#58c85a'), skin = T(c, '#f8d4ae'), hair = T(c, '#ffd35a');
        c.mir = true; c.RE(0.34, 0.40, 0.16, 0.26, -0.5, wing); c.RE(0.36, 0.40, 0.10, 0.20, -0.5, T(c, '#ffffff'), { flat: 1 }); c.RE(0.38, 0.62, 0.08, 0.15, 0.7, wing); c.mir = false;
        c.E(0.5, 0.38, 0.17, 0.21, hair); c.E(0.5, 0.40, 0.12, 0.13, skin); c.E(0.5, 0.20, 0.07, 0.07, hair);
        c.mir = true; c.E(0.45, 0.40, 0.024, 0.032, P.black, { flat: 1 }); c.E(0.40, 0.46, 0.025, 0.017, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false; c.L(0.47, 0.47, 0.53, 0.47, 0.01, P.ruby.b ? T(c, '#c23a5a') : P.red, { flat: 1 });
        c.P([[0.44, 0.52], [0.56, 0.52], [0.62, 0.72], [0.38, 0.72]], dress); for (var i = 0; i < 4; i++) c.P([[0.38 + i * 0.08, 0.72], [0.42 + i * 0.08, 0.72], [0.40 + i * 0.08, 0.78]], dress);
        c.L(0.46, 0.72, 0.44, 0.84, 0.02, skin); c.L(0.54, 0.72, 0.56, 0.84, 0.02, skin);
        c.L(0.60, 0.58, 0.82, 0.44, 0.012, P.wood, { flat: 1 }); c.ST(0.84, 0.42, 0.06, 0.026, P.gold, { flat: 1 });
        var rr = K.mulberry(5); for (i = 0; i < 24; i++) { var t = i / 24; c.dot(0.30 - t * 0.28 + (rr() - 0.5) * 0.06, 0.86 + Math.sin(t * 5) * 0.06 + (rr() - 0.5) * 0.06, c.c(i % 3 ? '#ffe27a' : '#ffffff'), i % 4 ? 1 : 2); }
        spark(c, 0.14, 0.24, 0.05, P.white); spark(c, 0.84, 0.74, 0.05, P.glow); spark(c, 0.88, 0.20, 0.03, P.white);
      } },
    { k: 'hook', n: 'Captain Hook', fixed: 1, hy: 0.4, lines: ['Villainous, dramatic and dreadfully afraid of one ticking clock.', 'He has the best hat on the whole sea and the worst luck with children.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f0c8a0'), hair = T(c, '#1a1620'), coat = T(c, '#b01c2c'), i;
        function eye(x, y) { c.E(x, y, 0.032, 0.036, P.white, { flat: 1 }); c.E(x + 0.003, y + 0.004, 0.019, 0.026, c.c('#1a1a22'), { flat: 1 }); c.dot(x - 0.005, y - 0.005, c.c('#ffffff'), 1); }
        c.P([[0.02, 1.0], [0.08, 0.72], [0.26, 0.62], [0.74, 0.62], [0.92, 0.72], [0.98, 1.0]], coat); c.P([[0.02, 1.0], [0.08, 0.72], [0.20, 0.66], [0.26, 1.0]], T(c, '#d8384a'), { flat: 1 });
        for (i = 0; i < 4; i++) c.E(0.50, 0.80 + i * 0.05, 0.016, 0.016, T(c, '#ffd23f'));
        c.P([[0.38, 0.62], [0.50, 0.84], [0.62, 0.62], [0.58, 0.60], [0.50, 0.70], [0.42, 0.60]], T(c, '#ffffff')); c.L(0.40, 0.66, 0.50, 0.80, 0.01, T(c, '#c8c8d8'), { flat: 1 });
        c.P([[0.16, 0.24], [0.10, 0.64], [0.22, 0.70], [0.28, 0.40]], hair); c.P([[0.84, 0.24], [0.90, 0.64], [0.78, 0.70], [0.72, 0.40]], hair);
        c.E(0.5, 0.44, 0.20, 0.22, skin);
        c.P([[0.34, 0.40], [0.50, 0.46], [0.66, 0.40], [0.64, 0.30], [0.50, 0.34], [0.36, 0.30]], hair, { flat: 1 });
        c.L(0.34, 0.38, 0.46, 0.40, 0.016, hair, { flat: 1 }); c.L(0.54, 0.40, 0.66, 0.38, 0.016, hair, { flat: 1 });
        eye(0.42, 0.44); c.P([[0.52, 0.40], [0.66, 0.40], [0.66, 0.50], [0.52, 0.50]], T(c, '#1a1620')); c.L(0.50, 0.40, 0.70, 0.34, 0.016, T(c, '#1a1620'), { flat: 1 }); c.L(0.34, 0.34, 0.70, 0.34, 0.01, T(c, '#1a1620'), { flat: 1 });
        c.P([[0.48, 0.48], [0.46, 0.56], [0.52, 0.54]], T(c, '#e0a07a'), { flat: 1 });
        c.P([[0.38, 0.58], [0.50, 0.55], [0.62, 0.58], [0.60, 0.62], [0.50, 0.58], [0.40, 0.62]], hair, { flat: 1 });
        c.L(0.42, 0.60, 0.36, 0.68, 0.016, hair, { flat: 1 }); c.L(0.58, 0.60, 0.64, 0.68, 0.016, hair, { flat: 1 });
        c.P([[0.30, 0.64], [0.50, 0.58], [0.70, 0.64], [0.66, 0.70], [0.50, 0.66], [0.34, 0.70]], hair, { flat: 1 });
        c.E(0.50, 0.62, 0.05, 0.015, T(c, '#c8405a'), { flat: 1 });
        c.P([[0.06, 0.30], [0.16, 0.20], [0.30, 0.08], [0.50, 0.04], [0.70, 0.08], [0.84, 0.20], [0.94, 0.30], [0.82, 0.28], [0.50, 0.30], [0.18, 0.28]], hair);
        c.P([[0.30, 0.12], [0.50, 0.06], [0.70, 0.12], [0.50, 0.14]], T(c, '#3a3040'), { flat: 1 });
        c.E(0.50, 0.16, 0.035, 0.035, P.white, { flat: 1 }); c.dot(0.485, 0.15, c.c('#1a1620'), 2); c.dot(0.515, 0.15, c.c('#1a1620'), 2); c.L(0.47, 0.20, 0.53, 0.20, 0.01, P.white, { flat: 1 }); c.L(0.46, 0.2, 0.54, 0.12, 0.006, P.white, { flat: 1 });
        c.P([[0.76, 0.12], [0.96, 0.0], [0.92, 0.18], [0.80, 0.22]], T(c, '#ffffff')); c.L(0.78, 0.18, 0.94, 0.04, 0.01, T(c, '#c8c8d8'), { flat: 1 });
        c.L(0.82, 0.90, 0.92, 0.96, 0.02, T(c, '#c8c8d8')); c.P([[0.92, 0.96], [0.98, 0.84], [0.94, 0.80], [0.90, 0.86]], T(c, '#d8d8e8'), { flat: 1 }); c.E(0.80, 0.90, 0.045, 0.04, T(c, '#a8a8bc'));
      } },
    { k: 'ship', n: 'The Pirate Ship', fixed: 1, gy: 0.80, lines: ['Black sails, a skull on the flag and a crew that is mostly afraid of a crocodile.', 'It creaks, it groans and it has never once reached port on time.'],
      draw: function (c, P, r, o) {
        var i, wood = T(c, '#7a4a22'), sail = T(c, '#2a2438');
        c.E(0.5, 0.92, 0.50, 0.08, T(c, '#2a6ab8')); for (i = 0; i < 7; i++) c.E(0.06 + i * 0.15, 0.90 + (i % 2) * 0.04, 0.07, 0.025, T(c, '#58a8e8'), { flat: 1 });
        c.L(0.28, 0.76, 0.28, 0.10, 0.022, wood, { flat: 1 }); c.L(0.52, 0.76, 0.52, 0.04, 0.026, wood, { flat: 1 }); c.L(0.76, 0.76, 0.76, 0.14, 0.022, wood, { flat: 1 });
        c.P([[0.14, 0.14], [0.42, 0.14], [0.40, 0.62], [0.16, 0.62]], sail); c.P([[0.36, 0.10], [0.68, 0.10], [0.66, 0.56], [0.38, 0.56]], T(c, '#3a3050')); c.P([[0.64, 0.18], [0.90, 0.18], [0.88, 0.62], [0.66, 0.62]], sail);
        c.L(0.12, 0.14, 0.44, 0.14, 0.014, wood, { flat: 1 }); c.L(0.34, 0.10, 0.70, 0.10, 0.014, wood, { flat: 1 }); c.L(0.62, 0.18, 0.92, 0.18, 0.014, wood, { flat: 1 });
        c.E(0.52, 0.33, 0.06, 0.07, P.white); c.dot(0.50, 0.32, c.c('#14102a'), 2); c.dot(0.54, 0.32, c.c('#14102a'), 2); c.L(0.50, 0.37, 0.54, 0.37, 0.01, c.c('#14102a'), { flat: 1 }); c.L(0.44, 0.40, 0.60, 0.26, 0.012, P.white, { flat: 1 }); c.L(0.44, 0.26, 0.60, 0.40, 0.012, P.white, { flat: 1 });
        c.P([[0.52, 0.04], [0.64, 0.08], [0.52, 0.12]], T(c, '#d8203a'), { flat: 1 });
        c.R(0.44, 0.0, 0.60, 0.02, wood, { flat: 1 });
        c.P([[0.06, 0.72], [0.94, 0.72], [0.84, 0.90], [0.18, 0.90]], wood); c.P([[0.90, 0.72], [0.98, 0.64], [0.94, 0.80]], wood); c.P([[0.06, 0.72], [0.0, 0.62], [0.12, 0.78]], wood);
        c.R(0.10, 0.74, 0.90, 0.78, T(c, '#ffc929'), { flat: 1 }); for (i = 0; i < 6; i++) c.E(0.20 + i * 0.12, 0.83, 0.025, 0.025, P.black, { flat: 1 });
        c.R(0.78, 0.62, 0.94, 0.72, T(c, '#5a3a1a')); c.R(0.82, 0.64, 0.86, 0.69, T(c, '#ffe27a'), { flat: 1 }); c.R(0.88, 0.64, 0.92, 0.69, T(c, '#ffe27a'), { flat: 1 });
        c.L(0.04, 0.70, 0.12, 0.76, 0.01, wood, { flat: 1 });
        spark(c, 0.10, 0.30, 0.04, P.glow);
      } },
    { k: 'croc', n: 'The Ticking Crocodile', fixed: 1, gy: 0.86, lines: ['Tick, tock, tick, tock. It swallowed a clock and now it follows the same man everywhere.', 'He is smiling, which should worry you.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#3f9a3a'), grD = T(c, '#2a6a2a'), grL = T(c, '#a8d868'), g = o.gy, i;
        c.E(0.5, 0.92, 0.50, 0.08, T(c, '#2a6ab8')); for (i = 0; i < 5; i++) c.E(0.10 + i * 0.20, 0.90 + (i % 2) * 0.04, 0.07, 0.022, T(c, '#58a8e8'), { flat: 1 });
        c.P([[0.0, 0.74], [0.0, 0.60], [0.40, 0.46], [0.94, 0.46], [0.98, 0.56], [0.90, 0.60], [0.50, 0.60]], gr);
        c.P([[0.0, 0.74], [0.50, 0.60], [0.90, 0.60], [0.98, 0.68], [0.80, 0.84], [0.30, 0.90], [0.0, 0.86]], gr);
        c.P([[0.04, 0.60], [0.50, 0.60], [0.92, 0.60], [0.80, 0.68], [0.30, 0.68]], T(c, '#7a0a1a'), { flat: 1 });
        for (i = 0; i < 11; i++) { c.P([[0.08 + i * 0.08, 0.60], [0.11 + i * 0.08, 0.66], [0.14 + i * 0.08, 0.60]], P.white, { flat: 1 }); if (i < 10) c.P([[0.12 + i * 0.08, 0.68], [0.15 + i * 0.08, 0.62], [0.18 + i * 0.08, 0.68]], P.white, { flat: 1 }); }
        c.E(0.50, 0.62, 0.16, 0.16, T(c, '#fff6dc')); c.E(0.50, 0.62, 0.13, 0.13, T(c, '#f4efe0'), { flat: 1 }); c.E(0.50, 0.62, 0.15, 0.15, P.gold, { flat: 1 }); c.E(0.50, 0.62, 0.12, 0.12, T(c, '#fff6dc'), { flat: 1 });
        c.L(0.50, 0.62, 0.50, 0.52, 0.016, P.black, { flat: 1 }); c.L(0.50, 0.62, 0.58, 0.64, 0.016, P.black, { flat: 1 }); for (i = 0; i < 12; i++) c.dot(0.50 + Math.sin(i * Math.PI / 6) * 0.10, 0.62 - Math.cos(i * Math.PI / 6) * 0.10, P.black, 1);
        c.E(0.30, 0.44, 0.10, 0.10, gr); c.E(0.30, 0.44, 0.07, 0.07, T(c, '#ffe84a')); c.E(0.30, 0.45, 0.012, 0.06, P.black, { flat: 1 }); c.dot(0.285, 0.42, P.white, 2); c.L(0.20, 0.38, 0.40, 0.42, 0.024, grD, { flat: 1 });
        c.E(0.06, 0.56, 0.02, 0.014, grD, { flat: 1 }); for (i = 0; i < 6; i++) c.E(0.50 + i * 0.08, 0.46 - (i % 2) * 0.01, 0.025, 0.02, grD, { flat: 1 });
        c.P([[0.80, 0.84], [1.0, 0.80], [1.0, 0.96], [0.84, 0.94]], gr); for (i = 0; i < 4; i++) c.E(0.90 + (i % 2) * 0.04, 0.84 + i * 0.03, 0.02, 0.015, grL, { flat: 1 });
        spark(c, 0.14, 0.20, 0.04, P.glow); spark(c, 0.84, 0.24, 0.035, P.white);
      } },
    { k: 'island', n: 'Neverland', fixed: 1, gy: 0.72, hy: 0.35, lines: ['Second star to the right and straight on till morning, and there it is, with a lagoon and a rainbow.', 'Jungle, beach, mountain and mischief, all on one little island.'],
      draw: function (c, P, r, o) {
        var g = o.gy, i, k;
        c.E(0.5, g + 0.05, 0.48, 0.09, T(c, '#e8d29a'));
        c.P([[0.04, g + 0.02], [0.14, g - 0.14], [0.28, g - 0.22], [0.40, g - 0.30], [0.46, g - 0.50], [0.50, g - 0.60], [0.54, g - 0.50], [0.62, g - 0.30], [0.74, g - 0.20], [0.88, g - 0.12], [0.96, g + 0.02]], T(c, '#3a8a4a'));
        c.P([[0.44, g - 0.44], [0.50, g - 0.62], [0.56, g - 0.44], [0.52, g - 0.38], [0.48, g - 0.38]], T(c, '#8a7a6a'));
        c.P([[0.46, g - 0.52], [0.50, g - 0.62], [0.54, g - 0.52], [0.51, g - 0.55], [0.49, g - 0.54]], P.white, { flat: 1 });
        c.E(0.50, g - 0.63, 0.03, 0.016, T(c, '#ff7a1a'), { flat: 1 });
        c.R(0.30, g - 0.20, 0.34, g - 0.04, T(c, '#58b8ff'), { flat: 1 }); c.E(0.32, g - 0.03, 0.07, 0.03, T(c, '#58b8ff'), { flat: 1 }); c.E(0.32, g - 0.02, 0.03, 0.012, P.white, { flat: 1 });
        for (i = 0; i < 3; i++) { var x = 0.14 + i * 0.36, h = 0.22 + (i % 2) * 0.04; c.L(x, g + 0.04, x + 0.03, g - h, 0.022, P.wood, { flat: 1 }); for (k = 0; k < 6; k++) { var a = -3.0 + k * 0.62; c.L(x + 0.03, g - h, x + 0.03 + Math.cos(a) * 0.12, g - h + Math.sin(a) * 0.06 + 0.04, 0.02, P.leaf, { flat: 1 }); } }
        c.P([[0.62, g - 0.04], [0.70, g - 0.12], [0.80, g - 0.04]], T(c, '#9a9aa8')); c.E(0.70, g - 0.08, 0.012, 0.014, P.black, { flat: 1 }); c.E(0.74, g - 0.08, 0.012, 0.014, P.black, { flat: 1 });
        c.P([[0.02, g + 0.16], [0.12, g + 0.16], [0.10, g + 0.20], [0.04, g + 0.20]], T(c, '#6a3a1e'), { flat: 1 }); c.L(0.07, g + 0.16, 0.07, g + 0.08, 0.01, P.wood, { flat: 1 }); c.P([[0.07, g + 0.08], [0.12, g + 0.14], [0.07, g + 0.14]], P.white, { flat: 1 });
      } },
    { k: 'mermaid', n: 'The Lagoon Mermaid', fixed: 1, gy: 0.74, lines: ['She sings to the sailors, flicks her tail at the pirates and has no time for either.', 'The lagoon glitters and every wave has a little song in it.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), hair = T(c, '#e8541e'), tail = T(c, '#17b5b0'), g = o.gy, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.0, g - 0.10], [0.14, g - 0.26], [0.40, g - 0.30], [0.50, g + 0.04], [0.0, g + 0.06]], T(c, '#6a6a88'));
        c.E(0.52, 0.34, 0.20, 0.22, hair); c.P([[0.34, 0.34], [0.30, 0.64], [0.40, 0.60]], hair); c.P([[0.70, 0.34], [0.74, 0.64], [0.62, 0.60]], hair);
        c.P([[0.42, 0.60], [0.64, 0.60], [0.66, 0.74], [0.40, 0.74]], T(c, '#ff8ac8')); c.P([[0.40, 0.74], [0.66, 0.74], [0.72, 0.86], [0.60, 0.94], [0.84, 0.96], [0.90, 0.78], [0.80, 0.62], [0.64, 0.74]], tail);
        c.P([[0.66, 0.60], [0.80, 0.56], [0.92, 0.70], [0.86, 0.90], [0.84, 0.96], [0.78, 0.82], [0.70, 0.76]], tail); c.P([[0.84, 0.96], [0.98, 0.88], [0.96, 1.0], [0.86, 1.0]], T(c, '#58e0d8'), { flat: 1 });
        for (i = 0; i < 6; i++) c.E(0.70 + (i % 3) * 0.06, 0.66 + Math.floor(i / 3) * 0.08, 0.02, 0.016, T(c, '#58e0d8'), { flat: 1 });
        c.L(0.50, 0.56, 0.38, 0.72, 0.05, skin); c.R(0.44, 0.50, 0.58, 0.60, skin);
        c.E(0.52, 0.38, 0.14, 0.16, skin); c.E(0.52, 0.26, 0.15, 0.07, hair);
        eye(0.47, 0.40, 1.1); eye(0.58, 0.40, 1.1); c.L(0.49, 0.47, 0.56, 0.47, 0.012, T(c, '#c84a5a'), { flat: 1 }); c.E(0.43, 0.44, 0.022, 0.014, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.62, 0.44, 0.022, 0.014, T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.56, 0.18, 0.05, 0.04, T(c, '#ff7ab8')); c.dot(0.56, 0.18, P.white, 1);
        c.E(0.22, g - 0.30, 0.04, 0.03, P.white, { flat: 1 }); c.L(0.16, g - 0.04, 0.34, g - 0.10, 0.01, P.white, { flat: 1 });
        spark(c, 0.18, 0.30, 0.04, P.glow); spark(c, 0.88, 0.30, 0.035, P.white);
      } },
    { k: 'hideout', n: 'The Lost Boys\' Hideout', fixed: 1, gy: 0.82, lines: ['A hollow tree, a rope ladder and a dozen little bunks all squeezed in.', 'Smoke from the chimney and a very strict rule about knocking.'],
      draw: function (c, P, r, o) {
        var g = o.gy, bark = T(c, '#7a4a21'), i;
        o.shadow(0.5, g + 0.08, 0.40, 0.04);
        c.P([[0.18, g + 0.08], [0.24, g - 0.30], [0.34, g - 0.50], [0.66, g - 0.50], [0.76, g - 0.30], [0.82, g + 0.08]], bark, { pat: stripe(5) });
        c.E(0.5, g - 0.52, 0.34, 0.14, P.leaf); c.E(0.30, g - 0.46, 0.16, 0.12, P.leaf); c.E(0.70, g - 0.46, 0.16, 0.12, P.leaf); c.E(0.50, g - 0.66, 0.22, 0.10, T(c, '#58b84a'));
        c.R(0.66, g - 0.78, 0.72, g - 0.52, P.stoneD); c.E(0.69, g - 0.84, 0.03, 0.025, P.white, { flat: 1 }); c.E(0.72, g - 0.90, 0.04, 0.03, P.white, { flat: 1 });
        c.E(0.5, g - 0.06, 0.09, 0.11, T(c, '#3a2112'), { flat: 1 }); c.R(0.41, g - 0.06, 0.59, g + 0.08, T(c, '#3a2112'), { flat: 1 }); c.R(0.43, g - 0.04, 0.57, g + 0.08, P.a); c.E(0.5, g - 0.04, 0.07, 0.08, P.a);
        c.E(0.55, g + 0.02, 0.01, 0.01, P.gold, { flat: 1 });
        c.mir = true; c.E(0.34, g - 0.20, 0.05, 0.05, P.glow, { flat: 1 }); c.RG(0.34, g - 0.20, 0.045, 0.06, bark.d ? T(c, '#3a2112') : bark, { flat: 1 }); c.mir = false;
        for (i = 0; i < 6; i++) c.L(0.82 + (i % 2) * 0.02, g - 0.34 + i * 0.07, 0.88, g - 0.34 + i * 0.07, 0.012, P.cream, { flat: 1 });
        c.L(0.82, g - 0.40, 0.82, g + 0.08, 0.008, P.cream, { flat: 1 }); c.L(0.88, g - 0.40, 0.88, g + 0.08, 0.008, P.cream, { flat: 1 });
        c.R(0.10, g + 0.0, 0.14, g + 0.08, P.cream); c.DM(0.12, g, 0.07, 0.05, P.red); c.R(0.88, g + 0.02, 0.92, g + 0.08, P.cream); c.DM(0.90, g + 0.02, 0.06, 0.04, P.b);
      } },
    { k: 'bigben', n: 'The Clock Tower', fixed: 1, gy: 0.90, hy: 0.4, lines: ['Over the rooftops of London and out the window, straight on till morning.', 'Three children and a boy are flying past the clock, and not a single one of them is looking down.'],
      draw: function (c, P, r, o) {
        var g = o.gy, stone = T(c, '#c9b88a'), i;
        c.R(0.38, g - 0.62, 0.62, g, stone, { pat: o.B }); c.R(0.35, g - 0.76, 0.65, g - 0.58, stone); c.R(0.32, g - 0.80, 0.68, g - 0.76, T(c, '#a89868'));
        c.E(0.5, g - 0.68, 0.13, 0.13, P.gold); c.E(0.5, g - 0.68, 0.105, 0.105, P.white, { flat: 1 });
        for (i = 0; i < 12; i++) { var a = i * Math.PI / 6; c.L(0.5 + Math.cos(a) * 0.075, g - 0.68 + Math.sin(a) * 0.075, 0.5 + Math.cos(a) * 0.095, g - 0.68 + Math.sin(a) * 0.095, 0.01, P.black, { flat: 1 }); }
        c.L(0.5, g - 0.68, 0.5, g - 0.76, 0.014, P.black, { flat: 1 }); c.L(0.5, g - 0.68, 0.56, g - 0.66, 0.014, P.black, { flat: 1 });
        c.P([[0.33, g - 0.80], [0.67, g - 0.80], [0.5, g - 1.05]], T(c, '#4a6a7a')); c.P([[0.40, g - 0.80], [0.60, g - 0.80], [0.5, g - 0.98]], T(c, '#6a8a9a'), { flat: 1 });
        c.R(0.46, g - 0.52, 0.54, g - 0.44, P.glow, { flat: 1 }); c.DM(0.5, g - 0.52, 0.04, 0.035, P.glow, { flat: 1 }); c.R(0.46, g - 0.34, 0.54, g - 0.26, P.glow, { flat: 1 }); c.R(0.46, g - 0.18, 0.54, g - 0.10, P.glow, { flat: 1 });
        c.R(0.0, g - 0.14, 0.34, g, T(c, '#4a3a5e')); c.R(0.66, g - 0.20, 1.0, g, T(c, '#4a3a5e')); c.P([[0.0, g - 0.14], [0.17, g - 0.24], [0.34, g - 0.14]], T(c, '#6a2a3a')); c.P([[0.66, g - 0.20], [0.83, g - 0.30], [1.0, g - 0.20]], T(c, '#6a2a3a'));
        for (i = 0; i < 4; i++) { c.R(0.06 + i * 0.07, g - 0.10, 0.08 + i * 0.07, g - 0.06, P.glow, { flat: 1 }); c.R(0.72 + i * 0.07, g - 0.14, 0.74 + i * 0.07, g - 0.10, P.glow, { flat: 1 }); }
        function fly(x, y, s) { c.E(x, y, 0.016 * s, 0.016 * s, P.black, { flat: 1 }); c.L(x, y + 0.01, x + 0.03 * s, y + 0.03, 0.014, P.black, { flat: 1 }); c.L(x, y + 0.01, x - 0.04 * s, y + 0.0, 0.01, P.black, { flat: 1 }); c.L(x, y + 0.01, x + 0.04 * s, y - 0.01, 0.01, P.black, { flat: 1 }); }
        fly(0.16, 0.22, 1); fly(0.24, 0.32, 1); fly(0.82, 0.26, 1); fly(0.88, 0.36, 1);
        spark(c, 0.22, 0.12, 0.05, P.glow); spark(c, 0.78, 0.14, 0.04, P.white);
      } },
    { k: 'skullrock', n: 'Skull Rock', fixed: 1, gy: 0.78, lines: ['A big gray rock that looks like a skull when the tide is in and when it is not.', 'Nobody is brave enough to ask what is in the cave.'],
      draw: function (c, P, r, o) {
        var g = o.gy, rock = T(c, '#7a7a88');
        c.P([[0.14, g + 0.10], [0.12, g - 0.10], [0.22, g - 0.32], [0.38, g - 0.46], [0.62, g - 0.46], [0.78, g - 0.32], [0.88, g - 0.10], [0.86, g + 0.10]], rock);
        c.R(0.34, g - 0.04, 0.66, g + 0.10, rock); c.R(0.38, g + 0.0, 0.62, g + 0.12, T(c, '#5a5a68'));
        c.mir = true; c.E(0.38, g - 0.20, 0.09, 0.10, T(c, '#14102a'), { flat: 1 }); c.E(0.385, g - 0.17, 0.04, 0.05, P.glow, { flat: 1 }); c.mir = false;
        c.P([[0.5, g - 0.14], [0.46, g - 0.04], [0.54, g - 0.04]], T(c, '#14102a'), { flat: 1 });
        for (var i = 0; i < 6; i++) c.R(0.38 + i * 0.045, g + 0.02, 0.405 + i * 0.045, g + 0.11, T(c, '#e8e4d8'));
        c.L(0.38, g + 0.06, 0.62, g + 0.06, 0.01, T(c, '#14102a'), { flat: 1 });
        c.mir = true; c.L(0.18, g - 0.14, 0.24, g - 0.20, 0.02, T(c, '#9a9aa8'), { flat: 1 }); c.mir = false;
        for (i = 0; i < 8; i++) c.E(0.06 + i * 0.125, g + 0.12 + (i % 2) * 0.015, 0.08, 0.03, T(c, '#ffffff'), { flat: 1 });
        c.L(0.92, g + 0.0, 0.92, g - 0.20, 0.008, P.wood, { flat: 1 }); c.P([[0.92, g - 0.20], [0.99, g - 0.17], [0.92, g - 0.14]], T(c, '#1b1a22'), { flat: 1 });
      } },
    { k: 'dust', n: 'The Pouch of Pixie Dust', fixed: 1, float: 1, sh: 0.2, gy: 0.9, lines: ['A sprinkle of gold and a happy thought is all it takes.', 'It is heavier than it looks, which is lucky, because everything else in Neverland is lighter.'],
      draw: function (c, P, r, o) {
        var gold = c.c('#ffd23f'), wh = c.c('#ffffff'), i;
        c.E(0.5, 0.70, 0.27, 0.24, T(c, '#5a3ab8'));
        c.P([[0.38, 0.50], [0.62, 0.50], [0.68, 0.62], [0.32, 0.62]], T(c, '#5a3ab8'));
        c.P([[0.34, 0.38], [0.44, 0.44], [0.50, 0.36], [0.56, 0.44], [0.66, 0.38], [0.62, 0.52], [0.38, 0.52]], T(c, '#7a5ad8'));
        c.R(0.36, 0.50, 0.64, 0.55, T(c, '#ffd23f'), { flat: 1 }); c.E(0.66, 0.57, 0.025, 0.04, T(c, '#ffd23f'), { flat: 1 }); c.L(0.66, 0.58, 0.70, 0.68, 0.014, T(c, '#ffd23f'), { flat: 1 });
        spark(c, 0.50, 0.76, 0.09, P.glow); c.E(0.40, 0.82, 0.05, 0.03, T(c, '#7a5ad8'), { flat: 1 });
        for (i = 0; i < 40; i++) { var t = i / 40, x = 0.5 + Math.sin(i * 2.3) * (0.06 + t * 0.30), y = 0.38 - t * 0.34 + Math.cos(i * 1.7) * 0.03; c.dot(x, y, i % 3 === 0 ? wh : gold, i % 5 === 0 ? 2 : 1); }
        spark(c, 0.26, 0.16, 0.05, P.glow); spark(c, 0.76, 0.12, 0.04, P.glow); spark(c, 0.66, 0.30, 0.03, P.white);
      } },
    { k: 'nursery', n: 'The Nursery Window', fixed: 1, gy: 0.9, hy: 0.4, lines: ['The window is open just a crack, and the night is full of someone else s adventures.', 'The second star to the right is shining right at you.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.0, 0.0, 1.0, 0.80, T(c, '#7aa0d8')); for (i = 0; i < 10; i++) c.R(i * 0.10, 0.0, i * 0.10 + 0.05, 0.80, T(c, '#a8c4ec'), { flat: 1 });
        c.R(0.0, 0.78, 1.0, 1.0, T(c, '#8a5a2e'), { pat: stripe(6) });
        c.R(0.26, 0.10, 0.74, 0.66, T(c, '#f4efe0')); c.E(0.50, 0.14, 0.24, 0.12, T(c, '#f4efe0')); c.R(0.29, 0.14, 0.71, 0.63, T(c, '#14204a')); c.E(0.50, 0.16, 0.21, 0.10, T(c, '#14204a'));
        c.L(0.50, 0.04, 0.50, 0.63, 0.012, T(c, '#f4efe0'), { flat: 1 }); c.L(0.29, 0.38, 0.71, 0.38, 0.012, T(c, '#f4efe0'), { flat: 1 });
        c.E(0.62, 0.26, 0.05, 0.05, T(c, '#fff2b8')); c.E(0.64, 0.25, 0.04, 0.04, T(c, '#14204a'), { flat: 1 }); spark(c, 0.36, 0.24, 0.035, P.white); spark(c, 0.40, 0.50, 0.025, P.white); spark(c, 0.66, 0.50, 0.03, P.glow);
        c.P([[0.52, 0.52], [0.56, 0.44], [0.60, 0.52], [0.58, 0.58], [0.54, 0.58]], T(c, '#0a0e22'), { flat: 1 }); c.E(0.56, 0.42, 0.025, 0.025, T(c, '#0a0e22'), { flat: 1 }); c.L(0.54, 0.50, 0.46, 0.46, 0.014, T(c, '#0a0e22'), { flat: 1 }); c.L(0.58, 0.50, 0.66, 0.46, 0.014, T(c, '#0a0e22'), { flat: 1 }); c.P([[0.54, 0.40], [0.56, 0.34], [0.58, 0.40]], T(c, '#0a0e22'), { flat: 1 });
        c.E(0.40, 0.44, 0.02, 0.02, T(c, '#ffe27a')); spark(c, 0.40, 0.44, 0.04, P.glow);
        c.P([[0.12, 0.60], [0.18, 0.32], [0.26, 0.60]], T(c, '#c8203a')); c.R(0.0, 0.60, 0.26, 0.70, T(c, '#c8203a'), { flat: 1 });
        c.R(0.0, 0.66, 0.26, 0.90, T(c, '#a8723a')); c.R(0.01, 0.62, 0.24, 0.74, T(c, '#ff8ac8')); c.R(0.01, 0.62, 0.08, 0.68, P.white, { flat: 1 }); c.R(0.0, 0.88, 0.04, 0.96, T(c, '#6a4a2a'), { flat: 1 }); c.R(0.22, 0.88, 0.26, 0.96, T(c, '#6a4a2a'), { flat: 1 });
        c.R(0.74, 0.66, 1.0, 0.90, T(c, '#a8723a')); c.R(0.76, 0.62, 0.99, 0.74, T(c, '#58a8f0')); c.R(0.91, 0.62, 0.99, 0.68, P.white, { flat: 1 }); c.R(0.74, 0.88, 0.78, 0.96, T(c, '#6a4a2a'), { flat: 1 }); c.R(0.96, 0.88, 1.0, 0.96, T(c, '#6a4a2a'), { flat: 1 });
        c.R(0.34, 0.84, 0.42, 0.92, T(c, '#ffd23f')); c.R(0.40, 0.88, 0.48, 0.96, T(c, '#d8304a')); c.R(0.46, 0.84, 0.54, 0.92, T(c, '#3a7ad8'));
        c.E(0.64, 0.92, 0.06, 0.04, T(c, '#c8903a')); c.E(0.60, 0.89, 0.025, 0.025, T(c, '#c8903a')); c.E(0.68, 0.89, 0.025, 0.025, T(c, '#c8903a'));
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
