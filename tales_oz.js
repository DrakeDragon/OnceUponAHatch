/* The Yellow Brick Road: hand-designed Oz subjects for Once Upon a Hatch. */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function gingham(x, y) { return (Math.floor(x / 4) + Math.floor(y / 4)) % 2 === 0; }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }

  K.register('oz', [
    { k: 'dorothy', n: 'Dorothy', fixed: 1, hy: 0.4, lines: ['Blue gingham, braided pigtails and a very brave heart.', 'She has a basket, a dog and a long way to walk, and she is not scared of any of it.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), hair = T(c, '#6a3a1e'), bl = T(c, '#3a7ae0'), i;
        c.P([[0.10, 1.0], [0.16, 0.74], [0.30, 0.64], [0.70, 0.64], [0.84, 0.74], [0.90, 1.0]], bl);
        for (i = 0; i < 6; i++) for (var j = 0; j < 4; j++) if ((i + j) % 2 === 0) c.R(0.16 + i * 0.11, 0.70 + j * 0.08, 0.27 + i * 0.11, 0.78 + j * 0.08, T(c, '#ffffff'), { flat: 1 });
        c.R(0.43, 0.54, 0.57, 0.66, skin); c.P([[0.30, 0.64], [0.50, 0.76], [0.70, 0.64], [0.62, 0.62], [0.50, 0.68], [0.38, 0.62]], T(c, '#ffffff'));
        c.L(0.14, 0.46, 0.12, 0.84, 0.05, hair); c.L(0.86, 0.46, 0.88, 0.84, 0.05, hair);
        for (i = 0; i < 5; i++) { c.E(0.13 - (i % 2) * 0.01, 0.52 + i * 0.07, 0.04, 0.035, i % 2 ? T(c, '#8a5028') : hair); c.E(0.87 + (i % 2) * 0.01, 0.52 + i * 0.07, 0.04, 0.035, i % 2 ? T(c, '#8a5028') : hair); }
        c.E(0.12, 0.88, 0.035, 0.035, T(c, '#e8202c')); c.E(0.88, 0.88, 0.035, 0.035, T(c, '#e8202c'));
        c.E(0.5, 0.40, 0.20, 0.22, skin); c.E(0.5, 0.26, 0.22, 0.12, hair); c.P([[0.30, 0.30], [0.34, 0.22], [0.50, 0.34], [0.66, 0.22], [0.70, 0.30], [0.70, 0.38], [0.64, 0.30], [0.50, 0.38], [0.36, 0.30], [0.30, 0.40]], hair);
        c.P([[0.28, 0.24], [0.50, 0.14], [0.72, 0.24], [0.72, 0.28], [0.50, 0.20], [0.28, 0.28]], T(c, '#e8202c'), { flat: 1 });
        c.E(0.42, 0.42, 0.034, 0.042, P.white, { flat: 1 }); c.E(0.58, 0.42, 0.034, 0.042, P.white, { flat: 1 }); c.E(0.43, 0.43, 0.02, 0.028, T(c, '#2a3a8a'), { flat: 1 }); c.E(0.59, 0.43, 0.02, 0.028, T(c, '#2a3a8a'), { flat: 1 }); c.dot(0.42, 0.41, c.c('#ffffff'), 1); c.dot(0.58, 0.41, c.c('#ffffff'), 1);
        c.L(0.36, 0.36, 0.46, 0.35, 0.012, hair, { flat: 1 }); c.L(0.54, 0.35, 0.64, 0.36, 0.012, hair, { flat: 1 });
        c.E(0.5, 0.49, 0.012, 0.01, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.55, 0.06, 0.025, T(c, '#c8405a'), { flat: 1 }); c.L(0.46, 0.54, 0.54, 0.54, 0.008, T(c, '#ffffff'), { flat: 1 });
        c.E(0.36, 0.50, 0.035, 0.022, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.64, 0.50, 0.035, 0.022, T(c, '#ff9aa8'), { flat: 1 }); for (i = 0; i < 3; i++) { c.dot(0.34 + i * 0.02, 0.47, c.c('#d89a78'), 1); c.dot(0.60 + i * 0.02, 0.47, c.c('#d89a78'), 1); }
      } },
    { k: 'scarecrow', n: 'The Scarecrow', fixed: 1, lines: ['He was told he had no brain, but he has solved every problem on the road so far.', 'Straw in his sleeves, a patch on his knee and an idea for everything.'],
      draw: function (c, P, r, o) {
        var burl = T(c, '#e0c088'), straw = T(c, '#f0d060'), blue = T(c, '#4a6ad8'), i;
        c.L(0.50, 1.0, 0.50, 0.50, 0.04, P.wood, { flat: 1 });
        c.L(0.0, 0.70, 1.0, 0.70, 0.045, P.wood, { flat: 1 });
        for (i = 0; i < 5; i++) { c.L(0.06 + i * 0.012, 0.66 + i * 0.016, 0.0, 0.64 + i * 0.028, 0.012, straw, { flat: 1 }); c.L(0.94 - i * 0.012, 0.66 + i * 0.016, 1.0, 0.64 + i * 0.028, 0.012, straw, { flat: 1 }); }
        c.P([[0.10, 1.0], [0.90, 1.0], [0.78, 0.66], [0.22, 0.66]], blue); c.R(0.60, 0.80, 0.74, 0.92, T(c, '#d8304a'), { flat: 1 }); c.L(0.60, 0.80, 0.74, 0.92, 0.006, P.white, { flat: 1 }); c.L(0.60, 0.92, 0.74, 0.80, 0.006, P.white, { flat: 1 });
        c.L(0.32, 0.66, 0.30, 0.80, 0.008, T(c, '#2a3a98'), { flat: 1 });
        for (i = 0; i < 9; i++) c.L(0.34 + i * 0.04, 0.68, 0.32 + i * 0.045, 0.60 + (i % 2) * 0.02, 0.014, straw, { flat: 1 });
        c.E(0.5, 0.42, 0.18, 0.20, burl); c.E(0.5, 0.42, 0.18, 0.20, burl, { pat: function (x, y) { return (Math.floor(x / 3) + Math.floor(y / 3)) % 2 === 0; } });
        c.E(0.5, 0.26, 0.34, 0.05, T(c, '#a8722a')); c.P([[0.32, 0.26], [0.36, 0.08], [0.64, 0.08], [0.68, 0.26]], T(c, '#c8903a')); c.R(0.32, 0.20, 0.68, 0.25, T(c, '#d8304a'), { flat: 1 });
        c.E(0.72, 0.16, 0.06, 0.06, T(c, '#ffc929')); c.E(0.72, 0.16, 0.025, 0.025, T(c, '#6a3a1e'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.L(0.26 + i * 0.01, 0.30 + i * 0.03, 0.14 - i * 0.02, 0.34 + i * 0.05, 0.012, straw, { flat: 1 }); c.L(0.74 - i * 0.01, 0.30 + i * 0.03, 0.86 + i * 0.02, 0.34 + i * 0.05, 0.012, straw, { flat: 1 }); }
        c.E(0.43, 0.40, 0.045, 0.045, P.white, { flat: 1 }); c.E(0.57, 0.38, 0.04, 0.04, P.white, { flat: 1 }); c.E(0.43, 0.405, 0.022, 0.026, P.black, { flat: 1 }); c.E(0.57, 0.385, 0.02, 0.024, P.black, { flat: 1 }); c.dot(0.42, 0.39, P.white, 1);
        c.L(0.38, 0.34, 0.48, 0.36, 0.014, T(c, '#6a3a1e'), { flat: 1 }); c.L(0.52, 0.34, 0.62, 0.32, 0.014, T(c, '#6a3a1e'), { flat: 1 });
        c.P([[0.48, 0.44], [0.54, 0.44], [0.51, 0.50]], T(c, '#e08a5a'), { flat: 1 });
        c.L(0.38, 0.54, 0.62, 0.54, 0.014, T(c, '#4a2a1a'), { flat: 1 }); for (i = 0; i < 6; i++) c.L(0.40 + i * 0.04, 0.51, 0.40 + i * 0.04, 0.57, 0.01, T(c, '#4a2a1a'), { flat: 1 });
        c.E(0.34, 0.48, 0.03, 0.02, T(c, '#e8808a'), { flat: 1 }); c.E(0.66, 0.48, 0.03, 0.02, T(c, '#e8808a'), { flat: 1 });
        spark(c, 0.10, 0.30, 0.04, P.glow); spark(c, 0.92, 0.50, 0.035, P.white);
      } },
    { k: 'tinman', n: 'The Tin Woodman', fixed: 1, lines: ['He just wants a heart, which is funny, because he is the kindest one on the road.', 'Rusty at the elbows and shiny everywhere else, and he never goes anywhere without his oil can.'],
      draw: function (c, P, r, o) {
        var tin = T(c, '#c4ccd8'), tinD = T(c, '#8a96a8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.L(0.84, 0.98, 0.78, 0.30, 0.022, P.wood, { flat: 1 }); c.P([[0.66, 0.26], [0.80, 0.18], [0.86, 0.34], [0.74, 0.40]], T(c, '#e8eef8')); c.L(0.68, 0.30, 0.80, 0.26, 0.01, tinD, { flat: 1 });
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.66], [0.20, 0.66]], tin);
        c.P([[0.14, 1.0], [0.30, 1.0], [0.34, 0.68], [0.22, 0.68]], T(c, '#e8eef8'), { flat: 1 });
        c.E(0.5, 0.84, 0.09, 0.08, T(c, '#d8203a')); c.E(0.47, 0.82, 0.02, 0.02, T(c, '#ff8a9a'), { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.20 + i * 0.12, 0.72, c.c('#6a7688'), 1);
        c.R(0.40, 0.56, 0.60, 0.68, tinD); for (i = 0; i < 3; i++) c.L(0.40, 0.58 + i * 0.035, 0.60, 0.58 + i * 0.035, 0.008, tin, { flat: 1 });
        c.E(0.5, 0.40, 0.17, 0.20, tin); c.E(0.44, 0.32, 0.06, 0.07, T(c, '#e8eef8'), { flat: 1 });
        c.P([[0.50, 0.00], [0.62, 0.20], [0.38, 0.20]], tin); c.R(0.30, 0.18, 0.70, 0.22, tinD); c.P([[0.50, 0.02], [0.44, 0.18], [0.40, 0.18]], T(c, '#e8eef8'), { flat: 1 });
        c.E(0.43, 0.38, 0.045, 0.05, P.white, { flat: 1 }); c.E(0.57, 0.38, 0.045, 0.05, P.white, { flat: 1 }); c.E(0.43, 0.385, 0.022, 0.03, P.black, { flat: 1 }); c.E(0.57, 0.385, 0.022, 0.03, P.black, { flat: 1 }); c.dot(0.42, 0.37, P.white, 1); c.dot(0.56, 0.37, P.white, 1);
        c.L(0.38, 0.32, 0.47, 0.33, 0.014, tinD, { flat: 1 }); c.L(0.53, 0.33, 0.62, 0.32, 0.014, tinD, { flat: 1 });
        c.R(0.48, 0.40, 0.52, 0.46, tinD, { flat: 1 });
        c.R(0.40, 0.49, 0.60, 0.54, T(c, '#4a5468'), { flat: 1 }); for (i = 0; i < 5; i++) c.L(0.42 + i * 0.04, 0.49, 0.42 + i * 0.04, 0.54, 0.006, tin, { flat: 1 });
        c.E(0.34, 0.46, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.66, 0.46, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 });
        spark(c, 0.12, 0.30, 0.04, P.glow); spark(c, 0.90, 0.60, 0.035, P.white);
      } },
    { k: 'lion', n: 'The Cowardly Lion', fixed: 1, lines: ['Roars when no one is listening and runs toward trouble anyway when it counts.', 'His mane is a work of art and his tail has a bow on it.'],
      draw: function (c, P, r, o) {
        var mane = T(c, '#c8661a'), maneL = T(c, '#e8902a'), fur = T(c, '#f0b868'), furL = T(c, '#ffe0a8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.14, 1.0], [0.86, 1.0], [0.76, 0.72], [0.24, 0.72]], fur);
        c.E(0.5, 0.80, 0.14, 0.06, furL, { flat: 1 }); c.E(0.5, 0.85, 0.07, 0.07, T(c, '#ffd23f')); c.E(0.5, 0.85, 0.04, 0.04, T(c, '#fff2b8'), { flat: 1 }); c.L(0.5, 0.78, 0.5, 0.80, 0.04, T(c, '#d8304a'), { flat: 1 });
        c.E(0.5, 0.42, 0.40, 0.40, mane); for (i = 0; i < 14; i++) { var a = i * Math.PI * 2 / 14; c.E(0.5 + Math.cos(a) * 0.40, 0.42 + Math.sin(a) * 0.40, 0.07, 0.07, i % 2 ? mane : maneL); }
        c.E(0.5, 0.42, 0.34, 0.34, maneL); for (i = 0; i < 10; i++) { var b = i * Math.PI * 2 / 10 + 0.3; c.L(0.5 + Math.cos(b) * 0.22, 0.42 + Math.sin(b) * 0.22, 0.5 + Math.cos(b) * 0.33, 0.42 + Math.sin(b) * 0.33, 0.012, mane, { flat: 1 }); }
        c.E(0.30, 0.22, 0.07, 0.07, fur); c.E(0.70, 0.22, 0.07, 0.07, fur); c.E(0.30, 0.22, 0.04, 0.04, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.70, 0.22, 0.04, 0.04, T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.5, 0.44, 0.22, 0.22, fur); c.E(0.5, 0.52, 0.14, 0.11, furL);
        c.E(0.5, 0.18, 0.05, 0.04, T(c, '#ffe0a8'), { flat: 1 }); c.L(0.46, 0.12, 0.50, 0.04, 0.02, mane, { flat: 1 }); c.P([[0.50, 0.14], [0.56, 0.06], [0.58, 0.16]], T(c, '#d8304a'), { flat: 1 }); c.P([[0.50, 0.14], [0.44, 0.06], [0.42, 0.16]], T(c, '#d8304a'), { flat: 1 });
        eye(0.41, 0.40, 1.3); eye(0.59, 0.40, 1.3); c.L(0.34, 0.34, 0.46, 0.36, 0.016, mane, { flat: 1 }); c.L(0.54, 0.36, 0.66, 0.34, 0.016, mane, { flat: 1 });
        c.P([[0.45, 0.47], [0.55, 0.47], [0.50, 0.53]], T(c, '#e0507a')); c.L(0.50, 0.53, 0.50, 0.57, 0.01, P.black, { flat: 1 }); c.L(0.50, 0.57, 0.44, 0.60, 0.012, P.black, { flat: 1 }); c.L(0.50, 0.57, 0.56, 0.60, 0.012, P.black, { flat: 1 });
        for (i = 0; i < 3; i++) { c.dot(0.40 - i * 0.012, 0.54 + i * 0.015, P.black, 1); c.dot(0.60 + i * 0.012, 0.54 + i * 0.015, P.black, 1); }
        spark(c, 0.08, 0.30, 0.04, P.glow); spark(c, 0.92, 0.60, 0.035, P.white);
      } },
    { k: 'toto', n: 'Toto in the Basket', fixed: 1, lines: ['Small, scruffy, brave and absolutely sure the basket is a first-class seat.', 'He barks at witches, wizards and curtains, in that order.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#4a3a34'), fl = T(c, '#6a5248'), i;
        c.E(0.50, 0.90, 0.40, 0.05, T(c, '#6a4a20'), { flat: 1 });
        c.E(0.34, 0.20, 0.07, 0.15, fur); c.E(0.66, 0.20, 0.07, 0.15, fur); c.E(0.34, 0.22, 0.03, 0.09, T(c, '#c8808a'), { flat: 1 }); c.E(0.66, 0.22, 0.03, 0.09, T(c, '#c8808a'), { flat: 1 });
        c.E(0.50, 0.36, 0.22, 0.21, fur); c.E(0.50, 0.46, 0.13, 0.09, fl, { flat: 1 });
        c.E(0.40, 0.32, 0.04, 0.045, P.white, { flat: 1 }); c.E(0.60, 0.32, 0.04, 0.045, P.white, { flat: 1 }); c.dot(0.41, 0.33, c.c('#1a1010'), 3); c.dot(0.61, 0.33, c.c('#1a1010'), 3); c.dot(0.40, 0.31, c.c('#ffffff'), 1); c.dot(0.60, 0.31, c.c('#ffffff'), 1);
        c.L(0.35, 0.26, 0.44, 0.27, 0.014, T(c, '#2a1e1a'), { flat: 1 }); c.L(0.56, 0.27, 0.65, 0.26, 0.014, T(c, '#2a1e1a'), { flat: 1 });
        c.E(0.50, 0.42, 0.045, 0.035, T(c, '#14101a')); c.dot(0.49, 0.41, c.c('#ffffff'), 1); c.P([[0.44, 0.50], [0.56, 0.50], [0.54, 0.58], [0.50, 0.62], [0.46, 0.58]], T(c, '#e8808a')); c.L(0.50, 0.46, 0.50, 0.52, 0.01, T(c, '#2a1e1a'), { flat: 1 });
        for (i = 0; i < 5; i++) c.L(0.34 + i * 0.08, 0.50, 0.30 + i * 0.1, 0.46, 0.008, T(c, '#c8c0b8'), { flat: 1 });
        c.E(0.50, 0.66, 0.24, 0.12, fur); c.E(0.38, 0.72, 0.06, 0.05, fl); c.E(0.62, 0.72, 0.06, 0.05, fl);
        c.P([[0.14, 0.60], [0.86, 0.60], [0.78, 0.92], [0.22, 0.92]], T(c, '#c8903a')); for (i = 0; i < 4; i++) c.L(0.16 + i * 0.02, 0.66 + i * 0.07, 0.84 - i * 0.02, 0.66 + i * 0.07, 0.025, i % 2 ? T(c, '#a87028') : T(c, '#e8b860'), { flat: 1 });
        for (i = 0; i < 6; i++) c.L(0.22 + i * 0.11, 0.62, 0.24 + i * 0.1, 0.92, 0.012, T(c, '#8a5a1a'), { flat: 1 });
        c.E(0.50, 0.60, 0.36, 0.045, T(c, '#e8b860')); c.E(0.50, 0.60, 0.30, 0.03, T(c, '#c8903a'), { flat: 1 });
        c.L(0.18, 0.62, 0.26, 0.24, 0.02, T(c, '#c8903a')); c.L(0.82, 0.62, 0.74, 0.24, 0.02, T(c, '#c8903a')); c.L(0.26, 0.24, 0.74, 0.24, 0.02, T(c, '#e8b860'), { flat: 1 });
      } },
    { k: 'slippers', n: 'The Ruby Slippers', fixed: 1, float: 1, sh: 0.3, gy: 0.86, hy: 0.45, lines: ['They click three times and the whole story turns around.', 'They sparkle in every light, and there is no place like home in either one.'],
      draw: function (c, P, r, o) {
        var rb = P.ruby;
        function shoe(dx, dy, tone) {
          c.P([[0.12 + dx, 0.69 + dy], [0.18 + dx, 0.60 + dy], [0.34 + dx, 0.55 + dy], [0.50 + dx, 0.54 + dy], [0.62 + dx, 0.49 + dy], [0.78 + dx, 0.33 + dy], [0.86 + dx, 0.35 + dy], [0.86 + dx, 0.70 + dy]], tone);
          c.P([[0.50 + dx, 0.54 + dy], [0.62 + dx, 0.49 + dy], [0.78 + dx, 0.33 + dy], [0.70 + dx, 0.45 + dy], [0.62 + dx, 0.55 + dy]], T(c, '#4a0a1a'), { flat: 1 });
          c.R(0.12 + dx, 0.69 + dy, 0.78 + dx, 0.725 + dy, T(c, '#7a0a28')); c.P([[0.70 + dx, 0.725 + dy], [0.88 + dx, 0.725 + dy], [0.86 + dx, 0.88 + dy], [0.74 + dx, 0.88 + dy]], T(c, '#a80c30'));
        }
        c.mir = false; shoe(0.0, -0.06, rb);
        c.P([[0.36, 0.545], [0.46, 0.525], [0.44, 0.60], [0.36, 0.595]], P.red, { flat: 1 }); c.P([[0.36, 0.565], [0.27, 0.525], [0.27, 0.61]], P.red, { flat: 1 }); c.P([[0.44, 0.565], [0.53, 0.525], [0.53, 0.61]], P.red, { flat: 1 });
        c.E(0.40, 0.565, 0.035, 0.035, P.silver, { flat: 1 }); c.E(0.40, 0.565, 0.02, 0.02, P.white, { flat: 1 });
        var rr = K.mulberry(7), i; for (i = 0; i < 26; i++) { var gx = 0.16 + rr() * 0.6, gyy = 0.50 + rr() * 0.14; c.dot(gx, gyy, c.c(rr() < 0.5 ? '#ff7a96' : '#ffd0dc'), 1); }
        for (i = 0; i < 12; i++) { var jx = 0.60 + rr() * 0.22, jy = 0.46 + rr() * 0.16; c.dot(jx, jy, c.c('#ff7a96'), 1); }
        spark(c, 0.16, 0.30, 0.06, P.white); spark(c, 0.86, 0.22, 0.045, P.glow); spark(c, 0.46, 0.20, 0.035, P.white); spark(c, 0.90, 0.58, 0.04, P.white); spark(c, 0.10, 0.54, 0.03, P.glow);
      } },
    { k: 'road', n: 'The Yellow Brick Road', fixed: 1, gy: 0.58, lines: ['Follow it, they said, and it curls through every kind of country there is.', 'Every brick is a little different, and every turn is a little closer.'],
      draw: function (c, P, r, o) {
        var g = o.gy, S = 26, br = P.brick, i;
        function cx(t) { return 0.52 + 0.22 * Math.sin(t * 3.6 + 0.4) * (0.4 + t); } function wd(t) { return 0.03 + 0.55 * t * t; }
        for (i = 0; i < S; i++) {
          var t0 = i / S, t1 = (i + 1) / S, y0 = g + (1 - g) * t0, y1 = g + (1 - g) * t1;
          c.P([[cx(t0) - wd(t0) / 2, y0], [cx(t0) + wd(t0) / 2, y0], [cx(t1) + wd(t1) / 2, y1 + 0.004], [cx(t1) - wd(t1) / 2, y1 + 0.004]], i % 2 ? br : T(c, '#e6a91e'), { flat: 1 });
          for (var k = -2; k <= 2; k++) c.L(cx(t0) + k * wd(t0) / 5 * 0.9, y0, cx(t1) + k * wd(t1) / 5 * 0.9, y1, 0.008, T(c, '#b87a14'), { flat: 1 });
        }
        c.mir = false; var em = T(c, '#1fbf6a');
        c.R(0.455, g - 0.20, 0.50, g, em); c.P([[0.455, g - 0.20], [0.4775, g - 0.27], [0.50, g - 0.20]], P.gold); c.R(0.50, g - 0.14, 0.54, g, em.d ? T(c, '#16a05a') : em); c.P([[0.50, g - 0.14], [0.52, g - 0.19], [0.54, g - 0.14]], P.gold);
        c.R(0.42, g - 0.10, 0.455, g, T(c, '#16a05a')); c.R(0.54, g - 0.09, 0.58, g, em); c.E(0.4775, g - 0.12, 0.012, 0.014, P.glow, { flat: 1 });
        c.E(0.22, g - 0.04, 0.12, 0.03, P.green); c.E(0.80, g - 0.05, 0.14, 0.035, P.green);
        c.L(0.10, g + 0.20, 0.10, g + 0.34, 0.012, P.wood, { flat: 1 }); c.P([[0.10, g + 0.20], [0.20, g + 0.23], [0.10, g + 0.26]], P.a);
      } },
    { k: 'city', n: 'The Emerald City', fixed: 1, lines: ['Everything glitters and everyone wears green glasses, so nobody can say for sure how green it really is.', 'Towers of green glass with gold on top. The gates alone take a whole afternoon to admire.'],
      draw: function (c, P, r, o) {
        var g = o.gy, em = T(c, '#1fbf6a'), em2 = T(c, '#16a05a'), gold = P.gold;
        c.R(0.14, g - 0.20, 0.86, g, em2);
        c.mir = true;
        c.R(0.14, g - 0.34, 0.22, g, em); c.P([[0.13, g - 0.34], [0.23, g - 0.34], [0.18, g - 0.46]], gold);
        c.R(0.26, g - 0.44, 0.35, g, em); c.DM(0.305, g - 0.44, 0.045, 0.05, gold);
        c.R(0.38, g - 0.56, 0.45, g, em2); c.P([[0.37, g - 0.56], [0.46, g - 0.56], [0.415, g - 0.70]], em);
        c.mir = false;
        c.R(0.465, g - 0.66, 0.535, g, em); c.R(0.455, g - 0.68, 0.545, g - 0.64, gold); c.P([[0.465, g - 0.68], [0.535, g - 0.68], [0.5, g - 0.82]], em); c.L(0.5, g - 0.82, 0.5, g - 0.88, 0.012, gold, { flat: 1 }); c.ST(0.5, g - 0.90, 0.035, 0.015, gold, { flat: 1 });
        c.mir = true; for (var i = 0; i < 3; i++) { c.R(0.17 + i * 0.09, g - 0.28 - i * 0.04 - 0.0, 0.185 + i * 0.09, g - 0.24 - i * 0.04, P.glow, { flat: 1 }); } c.mir = false;
        c.R(0.46, g - 0.40, 0.54, g - 0.30, P.glow, { flat: 1 }); c.R(0.43, g - 0.12, 0.57, g, gold); c.DM(0.5, g - 0.12, 0.07, 0.06, gold); c.R(0.47, g - 0.10, 0.53, g, T(c, '#0e6b4a'), { flat: 1 });
        c.P([[0.30, g + 0.00], [0.70, g + 0.00], [0.76, g + 0.14], [0.24, g + 0.14]], P.brick, { flat: 1 });
      } },
    { k: 'tornado', n: 'The Twister', fixed: 1, lines: ['It picked up a house, a fence, a cow and a whole lot of daydreams.', 'The sky has turned the color of a bruise and everything is about to change.'],
      draw: function (c, P, r, o) {
        var gray = T(c, '#7c8396'), dk = T(c, '#4a5062'), i;
        for (i = 0; i < 12; i++) { var t = i / 11, y = 0.14 + t * 0.64, w = 0.34 - t * 0.28 + 0.01, x = 0.5 + Math.sin(t * 5 + 1) * 0.07; c.E(x, y, w, 0.04, i % 2 ? gray : dk); }
        c.E(0.5, 0.12, 0.44, 0.07, dk); c.E(0.3, 0.10, 0.2, 0.06, gray); c.E(0.72, 0.09, 0.2, 0.06, gray);
        c.R(0.44, 0.30, 0.56, 0.38, P.white, { flat: 0 }); c.P([[0.42, 0.30], [0.58, 0.30], [0.50, 0.24]], P.red); c.R(0.485, 0.325, 0.515, 0.375, P.glow, { flat: 1 });
        c.R(0.22, 0.46, 0.30, 0.50, P.wood); c.R(0.70, 0.40, 0.76, 0.44, P.wood); c.E(0.74, 0.56, 0.05, 0.03, P.white); c.E(0.30, 0.62, 0.04, 0.025, P.white);
        c.R(0.40, 0.82, 0.60, 0.86, gray); c.E(0.5, 0.80, 0.18, 0.04, dk);
        c.L(0.08, 0.80, 0.30, 0.80, 0.012, P.wood, { flat: 1 }); c.L(0.70, 0.84, 0.92, 0.84, 0.012, P.wood, { flat: 1 });
      } },
    { k: 'farm', n: 'The Kansas Farmhouse', fixed: 1, lines: ['A gray, plain, quiet farm under a very big sky, which is exactly the problem.', 'It was the smallest house on the biggest flat country, and it was home.'],
      draw: function (c, P, r, o) {
        var g = o.gy || 0.86, i;
        c.R(0.0, g, 1.0, 1.0, T(c, '#7a8a4a'), { flat: 1 });
        c.R(0.22, g - 0.36, 0.76, g, T(c, '#e2dccb')); c.R(0.22, g - 0.04, 0.76, g, T(c, '#a8a090'), { flat: 1 });
        c.P([[0.16, g - 0.34], [0.49, g - 0.62], [0.82, g - 0.34]], T(c, '#8a3a2a')); c.R(0.62, g - 0.62, 0.69, g - 0.44, T(c, '#a84a3a'));
        c.E(0.49, g - 0.44, 0.045, 0.045, T(c, '#ffd88a'), { flat: 1 });
        c.R(0.44, g - 0.22, 0.54, g, T(c, '#6a4a2a')); c.dot(0.52, g - 0.10, c.c('#ffd23f'), 1);
        c.R(0.28, g - 0.28, 0.39, g - 0.12, T(c, '#ffd88a'), { flat: 1 }); c.R(0.59, g - 0.28, 0.70, g - 0.12, T(c, '#ffd88a'), { flat: 1 });
        c.L(0.335, g - 0.28, 0.335, g - 0.12, 0.008, P.wood, { flat: 1 }); c.L(0.645, g - 0.28, 0.645, g - 0.12, 0.008, P.wood, { flat: 1 });
        c.R(0.40, g - 0.03, 0.58, g + 0.02, T(c, '#a8a090'), { flat: 1 });
        c.P([[0.84, g], [0.94, g], [0.92, g - 0.52], [0.86, g - 0.52]], P.wood);
        c.L(0.89, g - 0.54, 0.89, g - 0.72, 0.016, P.iron, { flat: 1 }); c.L(0.89, g - 0.54, 0.80, g - 0.50, 0.022, P.silver, { flat: 1 }); c.L(0.89, g - 0.54, 0.98, g - 0.58, 0.022, P.silver, { flat: 1 }); c.L(0.89, g - 0.54, 0.84, g - 0.64, 0.022, P.silver, { flat: 1 }); c.L(0.89, g - 0.54, 0.94, g - 0.44, 0.022, P.silver, { flat: 1 });
        c.E(0.89, g - 0.54, 0.02, 0.02, P.iron, { flat: 1 });
        o.shadow(0.5, g + 0.02, 0.30, 0.02);
        c.E(0.10, g - 0.03, 0.08, 0.05, T(c, '#e8c25a')); c.L(0.04, g - 0.04, 0.16, g - 0.04, 0.008, T(c, '#b8923a'), { flat: 1 });
        for (i = 0; i < 6; i++) { c.R(0.04 + i * 0.03, g + 0.04, 0.055 + i * 0.03, g + 0.12, P.white, { flat: 1 }); }
        c.L(0.04, g + 0.07, 0.205, g + 0.07, 0.01, P.white, { flat: 1 });
      } },
    { k: 'wizard', n: 'The Great and Terrible Head', fixed: 1, lines: ['Smoke, fire and a booming voice, and behind the curtain a very ordinary man.', 'Pay no attention to the glow of the green fire; nothing is going on in here.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#3fd878'), grD = T(c, '#1f9a50'), i;
        c.R(0.0, 0.0, 0.14, 1.0, T(c, '#c8203a')); c.R(0.86, 0.0, 1.0, 1.0, T(c, '#c8203a')); for (i = 0; i < 4; i++) { c.L(0.03 + i * 0.03, 0.0, 0.03 + i * 0.03, 1.0, 0.006, T(c, '#8a1228'), { flat: 1 }); c.L(0.89 + i * 0.03, 0.0, 0.89 + i * 0.03, 1.0, 0.006, T(c, '#8a1228'), { flat: 1 }); }
        c.E(0.20, 0.86, 0.12, 0.10, T(c, '#6a6a7e')); c.E(0.80, 0.86, 0.12, 0.10, T(c, '#6a6a7e')); c.E(0.30, 0.80, 0.10, 0.08, T(c, '#8a8a9e')); c.E(0.70, 0.80, 0.10, 0.08, T(c, '#8a8a9e'));
        c.P([[0.14, 1.0], [0.18, 0.84], [0.26, 0.92], [0.32, 0.76], [0.40, 0.90], [0.50, 0.70], [0.60, 0.90], [0.68, 0.76], [0.74, 0.92], [0.82, 0.84], [0.86, 1.0]], T(c, '#e8401a'));
        c.P([[0.24, 1.0], [0.32, 0.88], [0.40, 0.96], [0.50, 0.80], [0.60, 0.96], [0.68, 0.88], [0.76, 1.0]], T(c, '#ff8a1f'), { flat: 1 }); c.P([[0.36, 1.0], [0.44, 0.94], [0.50, 0.88], [0.56, 0.94], [0.64, 1.0]], T(c, '#ffd23f'), { flat: 1 });
        c.E(0.5, 0.42, 0.30, 0.38, gr); c.E(0.5, 0.52, 0.22, 0.24, T(c, '#58e890'), { flat: 1 });
        c.E(0.22, 0.46, 0.05, 0.08, grD); c.E(0.78, 0.46, 0.05, 0.08, grD);
        c.P([[0.34, 0.08], [0.38, 0.0], [0.44, 0.06], [0.50, 0.0], [0.56, 0.06], [0.62, 0.0], [0.66, 0.08], [0.62, 0.12], [0.38, 0.12]], P.gold); c.dot(0.50, 0.06, c.c('#d8203a'), 2);
        c.P([[0.30, 0.34], [0.46, 0.38], [0.46, 0.30], [0.32, 0.26]], grD); c.P([[0.70, 0.34], [0.54, 0.38], [0.54, 0.30], [0.68, 0.26]], grD);
        c.E(0.39, 0.40, 0.07, 0.055, T(c, '#fff2b8')); c.E(0.61, 0.40, 0.07, 0.055, T(c, '#fff2b8')); c.E(0.39, 0.40, 0.03, 0.05, P.black, { flat: 1 }); c.E(0.61, 0.40, 0.03, 0.05, P.black, { flat: 1 }); c.dot(0.38, 0.38, P.white, 2); c.dot(0.60, 0.38, P.white, 2);
        c.P([[0.48, 0.42], [0.46, 0.54], [0.54, 0.54], [0.52, 0.42]], grD, { flat: 1 });
        c.E(0.5, 0.68, 0.17, 0.10, T(c, '#4a0a1a')); c.R(0.36, 0.60, 0.64, 0.64, P.white, { flat: 1 }); c.E(0.5, 0.74, 0.09, 0.03, T(c, '#e8404a'), { flat: 1 });
        for (i = 0; i < 6; i++) c.P([[0.37 + i * 0.05, 0.64], [0.395 + i * 0.05, 0.68], [0.42 + i * 0.05, 0.64]], P.white, { flat: 1 });
        for (i = 0; i < 10; i++) c.dot(0.20 + (i * 0.37 % 0.6), 0.10 + (i * 0.23 % 0.3), c.c('#a8ffd0'), 1);
        spark(c, 0.20, 0.20, 0.04, P.glow); spark(c, 0.80, 0.20, 0.04, P.glow);
      } },
    { k: 'witch', n: 'The Wicked Witch', fixed: 1, lines: ['Green as a pickle, sharp as a tack and very, very afraid of buckets.', 'She cackles in the key of E-flat and her broom has never once been parked legally.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#58b84a'), blk = T(c, '#1e1a2e'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.L(0.10, 0.98, 0.20, 0.50, 0.022, P.wood, { flat: 1 }); for (i = 0; i < 6; i++) c.L(0.06 + i * 0.016, 0.98, 0.04 + i * 0.016, 0.88, 0.014, T(c, '#c8a060'), { flat: 1 });
        c.P([[0.06, 1.0], [0.94, 1.0], [0.80, 0.68], [0.20, 0.68]], blk); c.P([[0.38, 0.66], [0.50, 0.80], [0.62, 0.66]], T(c, '#3a2a5e'));
        c.R(0.42, 0.56, 0.58, 0.68, skin);
        c.P([[0.30, 0.34], [0.22, 0.70], [0.34, 0.60]], blk); c.P([[0.70, 0.34], [0.78, 0.70], [0.66, 0.60]], blk);
        c.E(0.5, 0.42, 0.17, 0.20, skin); c.E(0.36, 0.44, 0.03, 0.06, skin); c.E(0.64, 0.44, 0.03, 0.06, skin);
        c.P([[0.30, 0.26], [0.50, 0.30], [0.70, 0.26], [0.74, 0.20], [0.26, 0.20]], blk, { flat: 1 });
        c.E(0.5, 0.22, 0.34, 0.04, blk); c.P([[0.34, 0.22], [0.42, 0.02], [0.56, 0.0], [0.66, 0.22]], blk); c.P([[0.56, 0.0], [0.72, 0.0], [0.60, 0.06]], blk); c.R(0.34, 0.17, 0.66, 0.22, T(c, '#8a4ab8'), { flat: 1 }); c.R(0.47, 0.16, 0.53, 0.23, P.gold, { flat: 1 });
        c.E(0.43, 0.40, 0.045, 0.04, P.white, { flat: 1 }); c.E(0.57, 0.40, 0.045, 0.04, P.white, { flat: 1 }); c.E(0.44, 0.405, 0.016, 0.026, T(c, '#c0102a'), { flat: 1 }); c.E(0.56, 0.405, 0.016, 0.026, T(c, '#c0102a'), { flat: 1 });
        c.L(0.36, 0.33, 0.47, 0.37, 0.02, blk, { flat: 1 }); c.L(0.53, 0.37, 0.64, 0.33, 0.02, blk, { flat: 1 });
        c.P([[0.50, 0.40], [0.56, 0.52], [0.50, 0.53]], T(c, '#4aa03c')); c.dot(0.545, 0.52, c.c('#2a6a24'), 2);
        c.E(0.5, 0.58, 0.09, 0.04, T(c, '#6a0a1a'), { flat: 1 }); c.P([[0.44, 0.56], [0.46, 0.60], [0.48, 0.56]], P.white, { flat: 1 }); c.P([[0.52, 0.56], [0.54, 0.60], [0.56, 0.56]], P.white, { flat: 1 });
        spark(c, 0.88, 0.40, 0.04, P.glow); spark(c, 0.14, 0.30, 0.035, T(c, '#58ff9a'));
      } },
    { k: 'monkey', n: 'The Winged Monkey', fixed: 1, float: 1, sh: 0.2, lines: ['Wings the size of bedsheets and a fez that has never once stayed on.', 'He does not like the job, but he is very good at it.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#6a7a98'), face = T(c, '#b8c4dc'), red = T(c, '#d8304a'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.38, 0.52], [0.02, 0.22], [0.08, 0.54], [0.16, 0.50], [0.20, 0.72], [0.40, 0.66]], T(c, '#4a6ad8')); c.P([[0.62, 0.52], [0.98, 0.22], [0.92, 0.54], [0.84, 0.50], [0.80, 0.72], [0.60, 0.66]], T(c, '#4a6ad8'));
        for (i = 0; i < 3; i++) { c.L(0.36, 0.54, 0.06 + i * 0.05, 0.28 + i * 0.12, 0.012, T(c, '#2a3a98'), { flat: 1 }); c.L(0.64, 0.54, 0.94 - i * 0.05, 0.28 + i * 0.12, 0.012, T(c, '#2a3a98'), { flat: 1 }); }
        c.P([[0.22, 1.0], [0.78, 1.0], [0.68, 0.62], [0.32, 0.62]], fur); c.P([[0.36, 1.0], [0.64, 1.0], [0.60, 0.70], [0.40, 0.70]], red); c.R(0.46, 0.70, 0.54, 1.0, T(c, '#ffd23f'), { flat: 1 });
        c.E(0.28, 0.42, 0.07, 0.08, fur); c.E(0.72, 0.42, 0.07, 0.08, fur); c.E(0.28, 0.42, 0.04, 0.05, face, { flat: 1 }); c.E(0.72, 0.42, 0.04, 0.05, face, { flat: 1 });
        c.E(0.5, 0.40, 0.20, 0.20, fur); c.E(0.5, 0.45, 0.14, 0.13, face);
        c.P([[0.34, 0.26], [0.66, 0.26], [0.62, 0.12], [0.38, 0.12]], red); c.E(0.5, 0.12, 0.12, 0.025, T(c, '#ff5a7a'), { flat: 1 });
        c.L(0.50, 0.10, 0.62, 0.02, 0.014, P.gold, { flat: 1 }); c.dot(0.63, 0.02, P.gold, 2);
        eye(0.44, 0.38, 1.2); eye(0.56, 0.38, 1.2); c.L(0.40, 0.33, 0.47, 0.35, 0.014, T(c, '#2a3a54'), { flat: 1 }); c.L(0.53, 0.35, 0.60, 0.33, 0.014, T(c, '#2a3a54'), { flat: 1 });
        c.E(0.5, 0.45, 0.04, 0.025, T(c, '#2a3a54'), { flat: 1 }); c.L(0.44, 0.52, 0.56, 0.52, 0.016, P.black, { flat: 1 }); c.P([[0.46, 0.52], [0.48, 0.56], [0.50, 0.52]], P.white, { flat: 1 }); c.P([[0.50, 0.52], [0.52, 0.56], [0.54, 0.52]], P.white, { flat: 1 });
        spark(c, 0.12, 0.84, 0.035, P.white); spark(c, 0.90, 0.14, 0.03, P.glow);
      } },
    { k: 'glinda', n: "The Good Witch's Bubble", fixed: 1, float: 1, sh: 0.1, gy: 0.86, lines: ['She floats in on a bubble and says everything is going to be all right.', 'Pink and sparkling and always on time, which is very rare in a fairy godmother.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), pink = T(c, '#ff8ac8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.E(0.5, 0.56, 0.46, 0.46, T(c, '#cfe8ff'), { flat: 1 }); c.E(0.5, 0.56, 0.42, 0.42, T(c, '#e6f3ff'), { flat: 1 }); c.E(0.30, 0.34, 0.06, 0.03, P.white, { flat: 1 });
        c.P([[0.14, 1.0], [0.86, 1.0], [0.72, 0.64], [0.28, 0.64]], pink);
        for (i = 0; i < 9; i++) c.dot(0.24 + (i * 0.37 % 0.54), 0.70 + (i * 0.23 % 0.26), c.c('#ffffff'), 1);
        c.E(0.30, 0.68, 0.10, 0.06, T(c, '#ffb0d8')); c.E(0.70, 0.68, 0.10, 0.06, T(c, '#ffb0d8'));
        c.R(0.44, 0.52, 0.56, 0.64, skin);
        c.E(0.5, 0.36, 0.17, 0.19, skin);
        c.E(0.5, 0.24, 0.20, 0.11, T(c, '#f8d870')); c.E(0.50, 0.14, 0.09, 0.07, T(c, '#f8d870')); c.E(0.34, 0.36, 0.05, 0.10, T(c, '#f8d870')); c.E(0.66, 0.36, 0.05, 0.10, T(c, '#f8d870'));
        c.P([[0.36, 0.20], [0.40, 0.06], [0.45, 0.14], [0.50, 0.02], [0.55, 0.14], [0.60, 0.06], [0.64, 0.20]], P.gold);
        c.dot(0.50, 0.10, c.c('#ff3fa4'), 2);
        eye(0.44, 0.38, 1.1); eye(0.56, 0.38, 1.1); c.L(0.46, 0.46, 0.54, 0.46, 0.012, T(c, '#c84a5a'), { flat: 1 }); c.E(0.38, 0.43, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.62, 0.43, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 });
        c.L(0.74, 0.70, 0.84, 0.24, 0.014, P.wood, { flat: 1 }); c.ST(0.85, 0.20, 0.08, 0.035, P.gold, { flat: 1 }); c.E(0.74, 0.70, 0.04, 0.035, skin, { flat: 1 });
        spark(c, 0.14, 0.30, 0.04, P.glow); spark(c, 0.20, 0.80, 0.03, P.white);
      } },
    { k: 'poppies', n: 'The Poppy Field', fixed: 1, gy: 0.52, lines: ['They smell lovely and they make you sleepy, which is exactly the trouble.', 'A whole red sea of flowers between the travelers and the green city on the hill.'],
      draw: function (c, P, r, o) {
        var g = o.gy, em = T(c, '#1fbf6a');
        c.R(0.44, g - 0.12, 0.48, g, em); c.P([[0.44, g - 0.12], [0.46, g - 0.18], [0.48, g - 0.12]], P.gold); c.R(0.50, g - 0.20, 0.55, g, T(c, '#16a05a')); c.P([[0.50, g - 0.20], [0.525, g - 0.27], [0.55, g - 0.20]], P.gold); c.R(0.56, g - 0.09, 0.59, g, em);
        var rows = 9;
        for (var j = 0; j < rows; j++) {
          var t = j / (rows - 1), y = g + 0.03 + t * 0.40, sc = 0.45 + t * 1.0, n = 5 + j;
          for (var i = 0; i < n; i++) {
            var x = (i + 0.5 + (j % 2) * 0.25) / n * 1.1 - 0.05 + 0.02 * Math.sin(i * 3 + j);
            c.L(x, y, x + 0.01, y + 0.07 * sc, 0.012, P.leaf, { flat: 1 }); c.E(x, y - 0.005, 0.034 * sc, 0.032 * sc, j % 3 === 0 ? P.ruby : P.red); c.dot(x, y - 0.012, c.c('#2a1020'), 1);
          }
        }
      } },
    { k: 'balloon', n: "The Wizard's Balloon", fixed: 1, float: 1, sh: 0.12, gy: 0.9, lines: ['Patchwork silk, a wicker basket and a promise to come right back.', 'The ropes creak, the wind picks up and Kansas is a long way down.'],
      draw: function (c, P, r, o) {
        var cols = [P.a, P.gold, P.green, P.b];
        c.E(0.5, 0.34, 0.27, 0.28, P.a); c.E(0.5, 0.34, 0.19, 0.28, P.gold); c.E(0.5, 0.34, 0.10, 0.28, P.green); c.E(0.5, 0.34, 0.035, 0.28, P.b);
        c.P([[0.26, 0.50], [0.74, 0.50], [0.60, 0.62], [0.40, 0.62]], P.a);
        c.mir = true; c.L(0.37, 0.60, 0.42, 0.74, 0.008, P.wood, { flat: 1 }); c.mir = false;
        c.R(0.40, 0.74, 0.60, 0.88, P.wood, { pat: stripe(3) }); c.R(0.38, 0.72, 0.62, 0.745, P.tan);
        c.E(0.5, 0.70, 0.04, 0.04, T(c, '#f6cfa6')); c.R(0.47, 0.68, 0.53, 0.70, P.dark, { flat: 1 }); c.ST(0.5, 0.86, 0.04, 0.02, P.gold, { flat: 1 });
      } },
    { k: 'munchkin', n: 'The Munchkin Cottage', fixed: 1, lines: ['Round windows, round doors and a round little garden with a very short fence.', 'Everything is the right size here, as long as you are three feet tall.'],
      draw: function (c, P, r, o) {
        var i;
        c.E(0.5, 0.94, 0.5, 0.08, T(c, '#4aa84a'), { flat: 1 });
        c.P([[0.14, 0.90], [0.14, 0.52], [0.86, 0.52], [0.86, 0.90]], T(c, '#f4ecd8')); c.P([[0.14, 0.90], [0.14, 0.52], [0.28, 0.52], [0.28, 0.90]], T(c, '#e0d4b8'), { flat: 1 });
        c.E(0.50, 0.54, 0.40, 0.30, T(c, '#2a78d8')); c.E(0.50, 0.50, 0.40, 0.26, T(c, '#2a78d8')); c.DM(0.5, 0.52, 0.42, 0.34, T(c, '#2a78d8'));
        for (i = 0; i < 6; i++) c.L(0.12 + i * 0.152, 0.52, 0.14 + i * 0.14, 0.24, 0.012, T(c, '#4a98f0'), { flat: 1 });
        c.E(0.5, 0.26, 0.05, 0.04, T(c, '#ffd23f')); c.L(0.5, 0.22, 0.5, 0.10, 0.016, T(c, '#ffd23f')); c.E(0.5, 0.08, 0.035, 0.035, T(c, '#ffd23f'));
        c.E(0.5, 0.74, 0.11, 0.16, T(c, '#e8202c')); c.R(0.39, 0.74, 0.61, 0.90, T(c, '#e8202c')); c.E(0.5, 0.74, 0.07, 0.12, T(c, '#c8102c'), { flat: 1 }); c.R(0.43, 0.74, 0.57, 0.90, T(c, '#c8102c'), { flat: 1 }); c.dot(0.55, 0.80, c.c('#ffd23f'), 3);
        c.E(0.26, 0.68, 0.07, 0.07, T(c, '#ffd23f')); c.E(0.26, 0.68, 0.045, 0.045, T(c, '#a8e0ff'), { flat: 1 }); c.L(0.26, 0.64, 0.26, 0.72, 0.008, T(c, '#ffd23f'), { flat: 1 }); c.L(0.22, 0.68, 0.30, 0.68, 0.008, T(c, '#ffd23f'), { flat: 1 });
        c.E(0.74, 0.68, 0.07, 0.07, T(c, '#ffd23f')); c.E(0.74, 0.68, 0.045, 0.045, T(c, '#a8e0ff'), { flat: 1 }); c.L(0.74, 0.64, 0.74, 0.72, 0.008, T(c, '#ffd23f'), { flat: 1 }); c.L(0.70, 0.68, 0.78, 0.68, 0.008, T(c, '#ffd23f'), { flat: 1 });
        for (i = 0; i < 9; i++) { c.R(0.04 + i * 0.105, 0.82, 0.07 + i * 0.105, 0.96, T(c, '#ffffff')); c.P([[0.04 + i * 0.105, 0.82], [0.055 + i * 0.105, 0.78], [0.07 + i * 0.105, 0.82]], T(c, '#ffffff')); }
        c.R(0.02, 0.86, 0.98, 0.88, T(c, '#e8e8f0'), { flat: 1 });
        for (i = 0; i < 6; i++) { c.E(0.08 + i * 0.17, 0.96, 0.03, 0.03, T(c, ['#ff5fa8', '#ffe040', '#a870ff', '#ff8a1f', '#ffffff', '#ff5fa8'][i])); }
      } },
    { k: 'bucket', n: 'The Bucket of Water', fixed: 1, lines: ['A splash, a shriek and a pointy black hat sinking into a puddle.', 'Sometimes the plainest bucket in the barn saves the whole kingdom.'],
      draw: function (c, P, r, o) {
        var water = T(c, '#58b8ff'), blk = T(c, '#241f33');
        o.shadow(0.5, 0.90, 0.40, 0.04);
        c.E(0.5, 0.89, 0.42, 0.06, water); c.E(0.34, 0.89, 0.12, 0.025, T(c, '#b9e3ff'), { flat: 1 }); c.E(0.74, 0.90, 0.07, 0.02, T(c, '#b9e3ff'), { flat: 1 });
        c.P([[0.56, 0.90], [0.88, 0.90], [0.80, 0.82], [0.76, 0.66], [0.70, 0.80]], blk); c.R(0.56, 0.86, 0.90, 0.90, blk); c.R(0.62, 0.84, 0.82, 0.865, P.ruby, { flat: 1 });
        c.P([[0.24, 0.52], [0.76, 0.52], [0.68, 0.86], [0.32, 0.86]], P.wood, { pat: stripe(4) });
        c.R(0.255, 0.60, 0.745, 0.635, P.iron); c.R(0.285, 0.76, 0.715, 0.795, P.iron);
        c.E(0.5, 0.52, 0.26, 0.055, P.wood); c.E(0.5, 0.52, 0.225, 0.04, water); c.E(0.44, 0.51, 0.06, 0.012, T(c, '#b9e3ff'), { flat: 1 });
        for (var i = 0; i < 9; i++) { var a0 = Math.PI + i * Math.PI / 8, a1 = a0 + Math.PI / 8; c.L(0.5 + Math.cos(a0) * 0.27, 0.52 + Math.sin(a0) * 0.30, 0.5 + Math.cos(a1) * 0.27, 0.52 + Math.sin(a1) * 0.30, 0.018, P.iron, { flat: 1 }); }
        c.P([[0.32, 0.50], [0.20, 0.42], [0.26, 0.30], [0.30, 0.38], [0.36, 0.28], [0.40, 0.44]], water); c.E(0.17, 0.28, 0.03, 0.04, water); c.E(0.40, 0.18, 0.025, 0.035, water); c.E(0.62, 0.30, 0.03, 0.04, water); c.E(0.78, 0.40, 0.025, 0.03, water); c.E(0.30, 0.18, 0.02, 0.026, T(c, '#b9e3ff'), { flat: 1 });
        spark(c, 0.10, 0.50, 0.035, P.white); spark(c, 0.88, 0.26, 0.04, P.glow);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
