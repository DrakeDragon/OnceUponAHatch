/* The Enchanted Rose: Beauty-and-the-Beast-inspired subjects for Once Upon a Hatch (original designs). */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }

  K.register('beast', [
    { k: 'beast', n: 'The Beast', fixed: 1, hy: 0.42, lines: ['Horns, fangs and a very big sigh. The loudest roar in the castle hides the softest heart.', 'He looks fierce until you notice that he is holding a book upside down, trying to read.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#8a5a2e'), mane = T(c, '#4a2a18'), tan = T(c, '#d9b27c'), bone = T(c, '#f3e8cc'), coat = T(c, '#2d4fb8');
        c.P([[0.06, 1.0], [0.94, 1.0], [0.84, 0.76], [0.16, 0.76]], coat); c.P([[0.38, 0.78], [0.62, 0.78], [0.50, 1.0]], P.white); c.R(0.16, 0.76, 0.84, 0.80, P.gold);
        c.mir = true; c.R(0.20, 0.86, 0.26, 1.0, P.gold, { flat: 1 }); c.mir = false;
        c.mir = true; c.P([[0.34, 0.34], [0.20, 0.26], [0.10, 0.10], [0.08, 0.04], [0.22, 0.12], [0.30, 0.20], [0.42, 0.28]], bone); c.P([[0.14, 0.14], [0.10, 0.04], [0.16, 0.10]], bone.l, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.50, 0.34, 0.33, mane);
        for (var i = 0; i < 9; i++) { var a = 2.5 + i * 0.28; c.P([[0.5 + Math.cos(a) * 0.30, 0.50 + Math.sin(a) * 0.30], [0.5 + Math.cos(a - 0.14) * 0.37, 0.50 + Math.sin(a - 0.14) * 0.37], [0.5 + Math.cos(a + 0.22) * 0.32, 0.50 + Math.sin(a + 0.22) * 0.32]], mane); }
        c.mir = true; c.E(0.34, 0.36, 0.055, 0.06, fur); c.E(0.345, 0.37, 0.03, 0.035, T(c, '#c98a6a'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.50, 0.21, 0.22, fur); c.E(0.5, 0.60, 0.13, 0.095, tan);
        c.mir = true; c.L(0.34, 0.40, 0.46, 0.44, 0.03, mane, { flat: 1 }); c.E(0.43, 0.48, 0.05, 0.04, P.white, { flat: 1 }); c.E(0.43, 0.48, 0.032, 0.032, T(c, '#4ab8ff'), { flat: 1 }); c.dot(0.43, 0.48, c.c('#0b1040'), 2); c.dot(0.418, 0.468, c.c('#ffffff'), 1); c.mir = false;
        c.P([[0.455, 0.545], [0.545, 0.545], [0.50, 0.595]], P.black, { flat: 1 }); c.L(0.50, 0.59, 0.50, 0.63, 0.012, P.black, { flat: 1 });
        c.L(0.42, 0.66, 0.50, 0.63, 0.012, P.black, { flat: 1 }); c.L(0.58, 0.66, 0.50, 0.63, 0.012, P.black, { flat: 1 });
        c.mir = true; c.P([[0.43, 0.645], [0.47, 0.645], [0.45, 0.71]], P.white, { flat: 1 }); c.mir = false;
        c.P([[0.40, 0.72], [0.60, 0.72], [0.55, 0.84], [0.45, 0.84]], mane);
      } },
    { k: 'rose', n: 'The Enchanted Rose', fixed: 1, float: 1, sh: 0.2, gy: 0.9, hy: 0.45, lines: ['The last petal is hanging on, and everyone in the castle is holding their breath.', 'It glows a little under its glass, as if it knew exactly how much time is left.'],
      draw: function (c, P, r, o) {
        var glass = T(c, '#bfe8ff');
        c.E(0.5, 0.86, 0.30, 0.05, P.gold); c.E(0.5, 0.83, 0.26, 0.04, P.wood);
        c.E(0.5, 0.64, 0.26, 0.40, glass, { flat: 1 }, true); c.R(0.24, 0.64, 0.76, 0.80, glass, { flat: 1 }); c.E(0.5, 0.80, 0.26, 0.035, T(c, '#9ed3f2'), { flat: 1 });
        c.E(0.5, 0.64, 0.22, 0.36, T(c, '#e6f6ff'), { flat: 1 }, true); c.R(0.28, 0.64, 0.72, 0.79, T(c, '#e6f6ff'), { flat: 1 });
        c.L(0.5, 0.40, 0.5, 0.80, 0.025, P.leaf); c.P([[0.52, 0.66], [0.66, 0.58], [0.60, 0.70]], P.leaf); c.P([[0.48, 0.72], [0.34, 0.64], [0.40, 0.76]], P.leaf);
        c.E(0.5, 0.40, 0.12, 0.11, P.ruby); c.E(0.44, 0.38, 0.07, 0.08, P.red); c.E(0.56, 0.38, 0.07, 0.08, P.red); c.E(0.5, 0.36, 0.06, 0.06, P.ruby.l ? T(c, '#ff4a6a') : P.ruby); c.E(0.5, 0.35, 0.03, 0.03, P.ruby.d ? T(c, '#a80c30') : P.ruby);
        c.E(0.5, 0.20, 0.02, 0.015, P.gold, { flat: 1 }); c.R(0.48, 0.16, 0.52, 0.20, P.gold);
        c.E(0.30, 0.62, 0.03, 0.045, P.ruby, { flat: 1 }); c.E(0.74, 0.70, 0.03, 0.04, P.ruby, { flat: 1 }); c.E(0.38, 0.84, 0.035, 0.02, P.ruby, { flat: 1 });
        c.E(0.34, 0.50, 0.025, 0.12, T(c, '#ffffff'), { flat: 1 });
        spark(c, 0.16, 0.30, 0.04, P.glow); spark(c, 0.84, 0.26, 0.05, P.white); spark(c, 0.78, 0.52, 0.03, P.glow);
      } },
    { k: 'castle', n: 'The Cursed Castle', fixed: 1, gy: 0.82, lines: ['Too many towers, too many windows and not one visitor in a hundred years.', 'The gargoyles have all stopped pretending to be statues.'],
      draw: function (c, P, r, o) {
        var g = o.gy, wall = T(c, '#6a6488'), roof = T(c, '#4a2a6e'), rock = T(c, '#4a4a5c');
        c.P([[0.0, 1.0], [0.0, g - 0.02], [0.14, g - 0.10], [0.30, g - 0.06], [0.70, g - 0.06], [0.86, g - 0.10], [1.0, g - 0.02], [1.0, 1.0]], rock);
        c.R(0.18, g - 0.30, 0.82, g - 0.06, wall, { pat: o.B });
        c.mir = true;
        c.R(0.12, g - 0.46, 0.24, g - 0.06, wall, { pat: o.B }); c.P([[0.10, g - 0.46], [0.26, g - 0.46], [0.18, g - 0.64]], roof);
        c.R(0.28, g - 0.58, 0.38, g - 0.30, wall, { pat: o.B }); c.P([[0.26, g - 0.58], [0.40, g - 0.58], [0.33, g - 0.78]], roof);
        c.R(0.175, g - 0.40, 0.195, g - 0.34, P.glow, { flat: 1 }); c.R(0.325, g - 0.50, 0.345, g - 0.43, P.glow, { flat: 1 });
        c.mir = false;
        c.R(0.44, g - 0.70, 0.56, g - 0.06, wall, { pat: o.B }); c.P([[0.42, g - 0.70], [0.58, g - 0.70], [0.50, g - 0.94]], roof); c.L(0.5, g - 0.94, 0.5, g - 1.0, 0.012, P.iron, { flat: 1 }); c.P([[0.5, g - 1.0], [0.6, g - 0.98], [0.5, g - 0.95]], P.ruby, { flat: 1 });
        c.R(0.48, g - 0.56, 0.52, g - 0.44, P.glow, { flat: 1 }); c.DM(0.5, g - 0.56, 0.02, 0.025, P.glow, { flat: 1 }); c.R(0.48, g - 0.34, 0.52, g - 0.24, P.glow, { flat: 1 });
        c.R(0.45, g - 0.14, 0.55, g - 0.06, P.iron); c.DM(0.5, g - 0.14, 0.05, 0.05, P.iron); c.R(0.47, g - 0.12, 0.53, g - 0.06, P.dark, { flat: 1 });
        var bt = T(c, '#1a1038'); c.E(0.15, 0.20, 0.035, 0.012, bt, { flat: 1 }); c.E(0.12, 0.17, 0.02, 0.02, bt, { flat: 1 }); c.E(0.82, 0.30, 0.035, 0.012, bt, { flat: 1 }); c.E(0.86, 0.27, 0.02, 0.02, bt, { flat: 1 });
      } },
    { k: 'chandelier', n: 'The Great Chandelier', fixed: 1, float: 1, sh: 0.2, gy: 0.88, lines: ['A hundred candles, a thousand crystals and one very long chain.', 'It lights the whole ballroom and drips on only the most deserving dancers.'],
      draw: function (c, P, r, o) {
        var crys = T(c, '#bfe8ff'), i;
        c.L(0.5, 0.0, 0.5, 0.26, 0.02, P.gold, { flat: 1 }); c.E(0.5, 0.26, 0.04, 0.03, P.gold);
        c.R(0.485, 0.26, 0.515, 0.62, P.gold);
        function tier(y, rx, n) {
          c.E(0.5, y, rx, 0.04, P.gold); c.E(0.5, y, rx - 0.02, 0.025, T(c, '#8a6a10'), { flat: 1 });
          for (var k = 0; k < n; k++) { var x = 0.5 - rx + 0.03 + k * (2 * rx - 0.06) / (n - 1); c.R(x - 0.012, y - 0.075, x + 0.012, y - 0.02, P.cream); c.E(x, y - 0.095, 0.014, 0.024, P.glow, { flat: 1 }); c.dot(x, y - 0.08, c.c('#ff9a2a'), 1);
            c.P([[x, y + 0.03], [x - 0.014, y + 0.07], [x, y + 0.105], [x + 0.014, y + 0.07]], crys); }
        }
        tier(0.40, 0.14, 4); tier(0.56, 0.28, 6);
        for (i = 0; i < 7; i++) { var x2 = 0.30 + i * 0.066; c.L(x2, 0.60, x2, 0.62 + (i % 2) * 0.03, 0.006, P.gold, { flat: 1 }); }
        c.P([[0.5, 0.64], [0.45, 0.72], [0.5, 0.82], [0.55, 0.72]], crys);
        spark(c, 0.14, 0.26, 0.04, P.white); spark(c, 0.86, 0.34, 0.05, P.glow); spark(c, 0.20, 0.70, 0.03, P.white); spark(c, 0.82, 0.74, 0.04, P.white);
      } },
    { k: 'candelabra', n: 'The Candelabra', fixed: 1, lines: ['Five little flames and one big opinion about the way the evening is going.', 'He walks, he talks, and he is extremely careful around curtains.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.90, 0.20, 0.025);
        c.E(0.5, 0.88, 0.17, 0.04, P.gold); c.R(0.47, 0.50, 0.53, 0.86, P.gold); c.E(0.5, 0.68, 0.045, 0.04, P.gold); c.E(0.5, 0.78, 0.04, 0.03, P.gold);
        c.mir = true; c.P([[0.50, 0.58], [0.40, 0.56], [0.32, 0.48], [0.30, 0.44], [0.34, 0.44], [0.37, 0.50], [0.44, 0.52], [0.50, 0.52]], P.gold); c.P([[0.50, 0.66], [0.30, 0.60], [0.18, 0.46], [0.16, 0.40], [0.21, 0.40], [0.24, 0.46], [0.34, 0.54], [0.50, 0.60]], P.gold); c.mir = false;
        var xs = [0.17, 0.32, 0.50, 0.68, 0.83], ys = [0.42, 0.46, 0.50, 0.46, 0.42];
        for (i = 0; i < 5; i++) {
          var h = i === 2 ? 0.26 : 0.20; c.R(xs[i] - 0.025, ys[i] - h + 0.02, xs[i] + 0.025, ys[i], P.cream); c.E(xs[i], ys[i] + 0.004, 0.04, 0.014, P.gold);
          c.E(xs[i], ys[i] - h - 0.03, 0.026, 0.05, T(c, '#ff9a2a'), { flat: 1 }); c.E(xs[i], ys[i] - h - 0.02, 0.014, 0.032, T(c, '#fff27a'), { flat: 1 });
          c.E(xs[i] + 0.012, ys[i] - h + 0.05, 0.007, 0.018, P.white, { flat: 1 });
        }
        K.face(c, 0.5, 0.64, 0.06, P.gold, { noCheek: 0 });
        spark(c, 0.10, 0.20, 0.04, P.glow); spark(c, 0.90, 0.20, 0.04, P.glow);
      } },
    { k: 'teaset', n: 'The Enchanted Tea Set', fixed: 1, lines: ['A little pot with a big heart, and a teacup who always chips in.', 'Tea at five, gossip at six, and not a single spill in the history of the pantry.'],
      draw: function (c, P, r, o) {
        var china = T(c, '#f4f6ff'), blue = T(c, '#3b78e8');
        o.shadow(0.5, 0.88, 0.40, 0.03);
        c.E(0.40, 0.66, 0.26, 0.22, china); c.R(0.28, 0.43, 0.52, 0.47, china); c.E(0.40, 0.43, 0.08, 0.035, china);
        c.E(0.40, 0.37, 0.025, 0.025, blue, { flat: 1 }); c.R(0.14, 0.60, 0.66, 0.64, blue, { flat: 1 }); c.R(0.14, 0.74, 0.66, 0.77, blue, { flat: 1 });
        c.P([[0.64, 0.60], [0.86, 0.46], [0.90, 0.50], [0.68, 0.72]], china); c.RG(0.14, 0.62, 0.05, 0.09, china);
        c.mir = false; K.face(c, 0.40, 0.60, 0.085, china);
        c.E(0.78, 0.82, 0.16, 0.035, china); c.E(0.78, 0.80, 0.12, 0.025, blue, { flat: 1 }); c.R(0.68, 0.64, 0.88, 0.80, china); c.E(0.78, 0.80, 0.10, 0.03, china); c.RG(0.90, 0.72, 0.02, 0.045, china);
        c.E(0.78, 0.64, 0.10, 0.02, T(c, '#8a4a1e'), { flat: 1 }); K.face(c, 0.78, 0.73, 0.045, china, { noCheek: 1 });
        for (var i = 0; i < 4; i++) c.E(0.20 + i * 0.07, 0.40 - (i % 2) * 0.05, 0.015, 0.03, T(c, '#e8f2ff'), { flat: 1 });
        c.E(0.78, 0.46, 0.015, 0.03, P.white, { flat: 1 }); c.E(0.74, 0.40, 0.012, 0.025, P.white, { flat: 1 });
        spark(c, 0.14, 0.24, 0.04, P.white); spark(c, 0.88, 0.30, 0.03, P.glow);
      } },
    { k: 'library', n: 'The Grand Library', fixed: 1, gy: 0.9, hy: 0.4, lines: ['Two floors of books, one very long ladder and a chair that has been waiting for you.', 'It smells like dust and adventure and a hundred cups of cold tea.'],
      draw: function (c, P, r, o) {
        var rng = K.mulberry(41), i, j, cols = [P.a, P.b, P.green, P.gold, P.red, T(c, '#2d4fb8'), T(c, '#8e44ad'), T(c, '#e8d9a8'), T(c, '#c2185b'), T(c, '#17a39f')];
        c.R(0.04, 0.04, 0.96, 0.84, P.wood); c.R(0.07, 0.07, 0.93, 0.81, T(c, '#3a2112'), { flat: 1 });
        for (j = 0; j < 4; j++) {
          var y = 0.09 + j * 0.18, x = 0.08;
          while (x < 0.91) { var w = 0.025 + rng() * 0.03, h = 0.10 + rng() * 0.06, col = cols[Math.floor(rng() * cols.length)]; if (x + w > 0.92) break; c.R(x, y + 0.16 - h, x + w, y + 0.16, col); c.R(x + 0.004, y + 0.16 - h + 0.02, x + w - 0.004, y + 0.16 - h + 0.03, P.gold, { flat: 1 }); x += w + 0.002; }
          c.R(0.07, y + 0.16, 0.93, y + 0.18, P.wood);
        }
        c.L(0.80, 0.08, 0.76, 0.84, 0.02, T(c, '#d6a05a'), { flat: 1 }); c.L(0.86, 0.08, 0.82, 0.84, 0.02, T(c, '#d6a05a'), { flat: 1 }); for (i = 0; i < 6; i++) c.L(0.79 - i * 0.005, 0.18 + i * 0.12, 0.855 - i * 0.005, 0.18 + i * 0.12, 0.012, T(c, '#d6a05a'), { flat: 1 });
        c.R(0.30, 0.76, 0.46, 0.86, P.ruby); c.R(0.28, 0.72, 0.48, 0.78, P.ruby); c.R(0.32, 0.86, 0.34, 0.92, P.wood); c.R(0.42, 0.86, 0.44, 0.92, P.wood);
        c.R(0.55, 0.78, 0.65, 0.88, P.wood); c.R(0.58, 0.70, 0.62, 0.78, P.cream); c.E(0.60, 0.67, 0.02, 0.04, T(c, '#ff9a2a'), { flat: 1 }); c.E(0.60, 0.68, 0.01, 0.025, T(c, '#fff27a'), { flat: 1 });
      } },
    { k: 'wardrobe', n: 'The Painted Wardrobe', fixed: 1, gy: 0.9, lines: ['Tall, carved and covered in painted roses. The doors creak, and it has a lot to say.', 'Inside there are gowns, gloves and one very old secret.'],
      draw: function (c, P, r, o) {
        var wood = T(c, '#8a4a28');
        o.shadow(0.5, 0.92, 0.30, 0.03);
        c.R(0.26, 0.82, 0.74, 0.90, wood); c.mir = true; c.R(0.28, 0.88, 0.34, 0.95, wood); c.mir = false;
        c.R(0.28, 0.20, 0.72, 0.84, wood); c.R(0.24, 0.12, 0.76, 0.22, wood); c.R(0.30, 0.06, 0.70, 0.13, wood); c.E(0.5, 0.06, 0.12, 0.05, wood, {}, true);
        c.mir = true; c.R(0.31, 0.26, 0.49, 0.78, T(c, '#a65a30')); c.R(0.33, 0.28, 0.47, 0.76, P.a);
        c.E(0.40, 0.40, 0.04, 0.045, P.red, { flat: 1 }); c.E(0.40, 0.40, 0.02, 0.02, P.ruby.d ? T(c, '#a80c30') : P.red, { flat: 1 }); c.L(0.40, 0.45, 0.40, 0.56, 0.01, P.leaf, { flat: 1 }); c.P([[0.40, 0.52], [0.45, 0.48], [0.43, 0.55]], P.leaf, { flat: 1 }); c.E(0.40, 0.66, 0.035, 0.04, P.pinkS, { flat: 1 }); c.E(0.40, 0.66, 0.015, 0.018, P.red, { flat: 1 });
        c.E(0.47, 0.52, 0.013, 0.013, P.gold, { flat: 1 }); c.mir = false;
        c.R(0.495, 0.24, 0.505, 0.80, T(c, '#5a2e14'), { flat: 1 }); c.E(0.5, 0.16, 0.03, 0.025, P.gold, { flat: 1 }); c.E(0.5, 0.09, 0.04, 0.03, P.gold, { flat: 1 });
        spark(c, 0.14, 0.36, 0.04, P.glow); spark(c, 0.88, 0.50, 0.035, P.white);
      } },
    { k: 'gown', n: 'The Ballgown', fixed: 1, gy: 0.9, lines: ['Ten yards of silk and a skirt that has its own weather.', 'It was made for exactly one dance and will be remembered for a hundred.'],
      draw: function (c, P, r, o) {
        var g = o.gy, gold = T(c, '#ffc929'), gl = T(c, '#ffe27a'), i;
        o.shadow(0.5, g + 0.02, 0.40, 0.03);
        c.P([[0.42, 0.52], [0.58, 0.52], [0.94, g], [0.06, g]], gold);
        for (i = 0; i < 6; i++) { var x = 0.14 + i * 0.14; c.L(0.46 + i * 0.016, 0.54, x, g - 0.02, 0.012, T(c, '#e0a010'), { flat: 1 }); }
        for (i = 0; i < 7; i++) c.E(0.10 + i * 0.13, g - 0.01, 0.07, 0.04, gl, { flat: 1 });
        c.E(0.5, g - 0.07, 0.40, 0.035, P.white, { flat: 1 });
        c.P([[0.40, 0.30], [0.60, 0.30], [0.59, 0.54], [0.41, 0.54]], gold);
        c.P([[0.37, 0.31], [0.63, 0.31], [0.60, 0.40], [0.50, 0.37], [0.40, 0.40]], P.white);
        c.E(0.34, 0.33, 0.06, 0.04, gl); c.E(0.66, 0.33, 0.06, 0.04, gl);
        c.R(0.40, 0.50, 0.60, 0.55, T(c, '#e0a010'), { flat: 1 });
        c.E(0.5, 0.52, 0.035, 0.03, T(c, '#e0245a')); c.dot(0.5, 0.52, c.c('#ff7a9a'), 1);
        c.E(0.5, 0.31, 0.09, 0.025, T(c, '#e0245a'), { flat: 1 }); c.E(0.5, 0.31, 0.012, 0.012, T(c, '#ffe27a'), { flat: 1 });
        c.L(0.44, 0.31, 0.56, 0.31, 0.01, P.white, { flat: 1 });
        for (i = 0; i < 6; i++) c.dot(0.20 + i * 0.12, g - 0.2 + (i % 2) * 0.08, c.c('#ffffff'), 1);
        spark(c, 0.14, 0.30, 0.05, P.glow); spark(c, 0.86, 0.22, 0.04, P.glow);
      } },
    { k: 'wolves', n: 'The Wolves in the Snow', fixed: 1, lines: ['Silver coats, gold eyes and a howl that makes the whole forest hold still.', 'They follow at a respectful distance and they never blink.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#7a8298'), furD = T(c, '#4a5068'), furL = T(c, '#b8c0d0'), i;
        c.P([[0.62, 0.74], [0.60, 0.40], [0.68, 0.30], [0.72, 0.40], [0.80, 0.30], [0.86, 0.42], [0.92, 0.74]], furD); c.E(0.76, 0.46, 0.10, 0.07, furD);
        c.E(0.70, 0.40, 0.022, 0.016, T(c, '#ffe84a'), { flat: 1 }); c.E(0.82, 0.40, 0.022, 0.016, T(c, '#ffe84a'), { flat: 1 });
        c.P([[0.04, 1.0], [0.96, 1.0], [0.84, 0.72], [0.16, 0.72]], fur);
        for (i = 0; i < 9; i++) c.P([[0.06 + i * 0.105, 1.0], [0.10 + i * 0.105, 0.82], [0.15 + i * 0.105, 1.0]], furL, { flat: 1 });
        c.P([[0.24, 0.38], [0.20, 0.08], [0.40, 0.24]], fur); c.P([[0.74, 0.38], [0.78, 0.08], [0.58, 0.24]], fur); c.P([[0.26, 0.34], [0.24, 0.16], [0.36, 0.26]], T(c, '#c85a6a'), { flat: 1 }); c.P([[0.72, 0.34], [0.74, 0.16], [0.62, 0.26]], T(c, '#c85a6a'), { flat: 1 });
        c.E(0.5, 0.46, 0.26, 0.24, fur);
        c.P([[0.36, 0.52], [0.64, 0.52], [0.60, 0.80], [0.40, 0.80]], furL);
        c.P([[0.36, 0.50], [0.50, 0.54], [0.64, 0.50], [0.60, 0.70], [0.40, 0.70]], T(c, '#d8dce8'));
        c.P([[0.40, 0.70], [0.60, 0.70], [0.58, 0.76], [0.42, 0.76]], T(c, '#5a0a1a'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.P([[0.42 + i * 0.045, 0.70], [0.44 + i * 0.045, 0.74], [0.46 + i * 0.045, 0.70]], P.white, { flat: 1 }); }
        c.E(0.5, 0.60, 0.05, 0.035, P.black, { flat: 1 }); c.dot(0.49, 0.585, c.c('#6a7288'), 1);
        c.E(0.40, 0.42, 0.055, 0.04, T(c, '#ffd23f')); c.E(0.60, 0.42, 0.055, 0.04, T(c, '#ffd23f')); c.E(0.40, 0.42, 0.012, 0.035, P.black, { flat: 1 }); c.E(0.60, 0.42, 0.012, 0.035, P.black, { flat: 1 }); c.dot(0.385, 0.405, P.white, 1); c.dot(0.585, 0.405, P.white, 1);
        c.L(0.32, 0.34, 0.45, 0.39, 0.022, furD, { flat: 1 }); c.L(0.68, 0.34, 0.55, 0.39, 0.022, furD, { flat: 1 });
        c.L(0.50, 0.30, 0.50, 0.50, 0.012, furD, { flat: 1 });
        spark(c, 0.12, 0.22, 0.035, P.white); spark(c, 0.90, 0.16, 0.03, P.glow);
      } },
    { k: 'bakery', n: 'The Village Bakery', fixed: 1, lines: ['Warm bread, sugar and a bell on the door that rings twice for good customers.', 'The whole street smells like morning even at midnight.'],
      draw: function (c, P, r, o) {
        var g = o.gy || 0.9, i;
        c.R(0.0, g, 1.0, 1.0, T(c, '#8a7a6a'), { flat: 1 }); for (i = 0; i < 10; i++) c.E(0.05 + i * 0.10, g + 0.05 + (i % 2) * 0.04, 0.04, 0.02, T(c, '#a8988a'), { flat: 1 });
        c.R(0.16, g - 0.44, 0.84, g, T(c, '#f4e0b8')); for (i = 0; i < 6; i++) c.L(0.16, g - 0.40 + i * 0.07, 0.84, g - 0.40 + i * 0.07, 0.006, T(c, '#d8c090'), { flat: 1 });
        c.P([[0.12, g - 0.44], [0.50, g - 0.70], [0.88, g - 0.44]], T(c, '#a8482a')); c.R(0.66, g - 0.70, 0.74, g - 0.52, T(c, '#8a5a3a')); c.E(0.70, g - 0.76, 0.04, 0.03, P.white, { flat: 1 }); c.E(0.74, g - 0.84, 0.05, 0.04, P.white, { flat: 1 });
        for (i = 0; i < 8; i++) c.P([[0.14 + i * 0.09, g - 0.34], [0.23 + i * 0.09, g - 0.34], [0.22 + i * 0.09, g - 0.28], [0.15 + i * 0.09, g - 0.28]], i % 2 ? P.white : T(c, '#d8304a'), { flat: 1 });
        c.R(0.22, g - 0.26, 0.58, g - 0.06, T(c, '#5a3a22')); c.R(0.24, g - 0.24, 0.56, g - 0.08, T(c, '#ffe8a8'), { flat: 1 });
        c.E(0.32, g - 0.14, 0.06, 0.035, T(c, '#d8903a')); c.E(0.42, g - 0.14, 0.06, 0.035, T(c, '#c8803a')); c.E(0.50, g - 0.16, 0.04, 0.04, T(c, '#e8a858')); c.R(0.24, g - 0.10, 0.56, g - 0.08, T(c, '#8a5a3a'), { flat: 1 });
        c.R(0.64, g - 0.28, 0.78, g, T(c, '#6a4a2a')); c.R(0.66, g - 0.26, 0.76, g - 0.02, T(c, '#8a5a3a'), { flat: 1 }); c.dot(0.74, g - 0.14, P.gold, 2); c.E(0.71, g - 0.20, 0.025, 0.025, T(c, '#ffe27a'), { flat: 1 });
        c.L(0.84, g - 0.38, 0.92, g - 0.38, 0.012, P.iron, { flat: 1 }); c.E(0.93, g - 0.32, 0.05, 0.05, T(c, '#e8a858')); c.E(0.93, g - 0.32, 0.03, 0.03, T(c, '#c8803a'), { flat: 1 });
        c.R(0.84, g - 0.12, 0.98, g, T(c, '#8a5a3a')); for (i = 0; i < 3; i++) c.L(0.88 + i * 0.04, g - 0.12, 0.90 + i * 0.04, g - 0.26, 0.022, T(c, '#e8b868'), { flat: 1 });
        spark(c, 0.10, 0.20, 0.04, P.glow);
      } },
    { k: 'gates', n: 'The Iron Gates', fixed: 1, gy: 0.86, lines: ['Thorns on the left, thorns on the right and an invitation hidden in the middle.', 'They creak open for anyone brave, lost or very polite.'],
      draw: function (c, P, r, o) {
        var g = o.gy, iron = T(c, '#3a3a4c'), stone = T(c, '#8a8aa0');
        c.P([[0.30, g - 0.10], [0.36, g - 0.36], [0.44, g - 0.10]], T(c, '#3a2a5e'), { flat: 1 }); c.R(0.40, g - 0.52, 0.60, g - 0.10, T(c, '#4a3a6e'), { flat: 1 }); c.P([[0.38, g - 0.52], [0.62, g - 0.52], [0.50, g - 0.74]], T(c, '#2a1a4e'), { flat: 1 });
        c.R(0.48, g - 0.40, 0.52, g - 0.30, P.glow, { flat: 1 });
        c.mir = true; c.R(0.08, g - 0.54, 0.20, g, stone, { pat: o.B }); c.R(0.06, g - 0.58, 0.22, g - 0.54, stone); c.E(0.14, g - 0.62, 0.05, 0.05, stone); c.E(0.14, g - 0.67, 0.012, 0.03, P.glow, { flat: 1 }); c.mir = false;
        c.mir = true; for (var i = 0; i < 4; i++) { var x = 0.23 + i * 0.065; c.R(x, g - 0.40, x + 0.018, g, iron); c.P([[x - 0.006, g - 0.40], [x + 0.024, g - 0.40], [x + 0.009, g - 0.47]], iron); }
        c.R(0.22, g - 0.30, 0.50, g - 0.27, iron); c.R(0.22, g - 0.12, 0.50, g - 0.09, iron); c.mir = false;
        c.RG(0.5, g - 0.19, 0.045, 0.065, iron); c.E(0.5, g - 0.19, 0.03, 0.03, P.ruby, { flat: 1 }); c.E(0.5, g - 0.20, 0.012, 0.012, P.red, { flat: 1 });
        c.mir = true; c.L(0.12, g, 0.18, g - 0.26, 0.016, P.leaf, { flat: 1 }); c.L(0.18, g - 0.26, 0.26, g - 0.38, 0.014, P.leaf, { flat: 1 }); c.E(0.17, g - 0.12, 0.022, 0.022, P.ruby, { flat: 1 }); c.E(0.24, g - 0.33, 0.02, 0.02, P.red, { flat: 1 }); c.mir = false;
      } },
    { k: 'dinner', n: 'The Enchanted Dinner', fixed: 1, gy: 0.9, hy: 0.5, lines: ['The plates are dancing, the goblets are singing and the soup is trying very hard to be elegant.', 'You are the guest, so please sit, and do not ask who cooked it.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.0, 0.70, 1.0, 1.0, T(c, '#f8f0e0')); c.R(0.0, 0.70, 1.0, 0.74, T(c, '#c83a4a')); for (i = 0; i < 6; i++) c.R(0.04 + i * 0.17, 0.74, 0.08 + i * 0.17, 1.0, T(c, '#e8dcc8'), { flat: 1 });
        c.P([[0.10, 0.70], [0.10, 0.40], [0.14, 0.38], [0.14, 0.70]], T(c, '#ffd23f')); c.L(0.12, 0.40, 0.12, 0.30, 0.02, T(c, '#ffd23f'));
        for (i = 0; i < 3; i++) { c.R(0.08 + i * 0.0, 0.64, 0.16, 0.70, T(c, '#ffd23f'), { flat: 1 }); }
        c.E(0.12, 0.28, 0.025, 0.04, T(c, '#ffa020')); c.E(0.12, 0.29, 0.012, 0.025, T(c, '#fff4a0'), { flat: 1 });
        c.P([[0.84, 0.70], [0.84, 0.40], [0.88, 0.38], [0.88, 0.70]], T(c, '#ffd23f')); c.E(0.86, 0.28, 0.025, 0.04, T(c, '#ffa020')); c.E(0.86, 0.29, 0.012, 0.025, T(c, '#fff4a0'), { flat: 1 }); c.L(0.86, 0.38, 0.86, 0.32, 0.02, T(c, '#ffd23f'));
        c.E(0.50, 0.68, 0.27, 0.045, T(c, '#a8a8bc')); c.DM(0.5, 0.66, 0.23, 0.32, T(c, '#d8d8e8')); c.DM(0.5, 0.66, 0.23, 0.32, T(c, '#f4f4fc'), { flat: 1, pat: function (x, y) { return x < 0.42 && y > 0.1; } });
        c.L(0.34, 0.52, 0.40, 0.42, 0.016, T(c, '#ffffff'), { flat: 1 }); c.E(0.50, 0.32, 0.035, 0.035, T(c, '#ffd23f')); c.E(0.49, 0.31, 0.012, 0.012, T(c, '#fff4a0'), { flat: 1 }); c.R(0.495, 0.34, 0.505, 0.36, T(c, '#c8a020'), { flat: 1 });
        c.E(0.50, 0.68, 0.27, 0.02, T(c, '#c8c8d8'), { flat: 1 });
        c.L(0.20, 0.82, 0.20, 0.70, 0.02, T(c, '#e8e8f0'), { flat: 1 }); c.E(0.20, 0.64, 0.05, 0.06, T(c, '#ffd23f')); c.E(0.20, 0.64, 0.025, 0.04, T(c, '#fff4a0'), { flat: 1 });
        c.E(0.30, 0.86, 0.10, 0.045, T(c, '#ffffff')); c.E(0.30, 0.85, 0.075, 0.03, T(c, '#c8e0ff'), { flat: 1 }); c.dot(0.28, 0.85, c.c('#ff8a3a'), 2); c.dot(0.32, 0.84, c.c('#2fb050'), 2);
        c.E(0.72, 0.86, 0.10, 0.045, T(c, '#ffffff')); c.E(0.72, 0.84, 0.07, 0.04, T(c, '#a0602a')); c.E(0.70, 0.83, 0.02, 0.02, T(c, '#ff5a6a'), { flat: 1 });
        c.E(0.50, 0.90, 0.10, 0.04, T(c, '#ffffff')); c.E(0.50, 0.89, 0.07, 0.025, T(c, '#e8a040'), { flat: 1 });
        c.dot(0.60, 0.58, c.c('#ffffff'), 2); c.E(0.78, 0.60, 0.04, 0.04, T(c, '#ffd23f')); c.L(0.78, 0.64, 0.78, 0.70, 0.012, T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'rosewindow', n: 'The Rose Window', fixed: 1, gy: 0.92, hy: 0.45, hs: 1.1, lines: ['Light pours through every color and paints the whole floor.', 'A thousand pieces of glass, and not one of them is the same.'],
      draw: function (c, P, r, o) {
        var stone = T(c, '#8e8aa8'), cols = [T(c, '#d0103a'), T(c, '#2f6fe0'), T(c, '#ffc83a'), T(c, '#1fbf6a'), T(c, '#8e44ad'), T(c, '#ff7a1a')], i;
        c.R(0.10, 0.50, 0.90, 1.0, stone, { pat: o.B }); c.E(0.5, 0.50, 0.40, 0.46, stone, {}, true);
        c.E(0.5, 0.40, 0.34, 0.34, T(c, '#2a2438'), { flat: 1 });
        for (i = 0; i < 12; i++) { var a0 = i * Math.PI / 6 - 0.1, a1 = (i + 1) * Math.PI / 6 - 0.1; c.P([[0.5, 0.40], [0.5 + Math.cos(a0) * 0.32, 0.40 + Math.sin(a0) * 0.32], [0.5 + Math.cos((a0 + a1) / 2) * 0.335, 0.40 + Math.sin((a0 + a1) / 2) * 0.335], [0.5 + Math.cos(a1) * 0.32, 0.40 + Math.sin(a1) * 0.32]], cols[i % 6], { flat: 1 }); }
        for (i = 0; i < 12; i++) { var a = i * Math.PI / 6 - 0.1; c.L(0.5, 0.40, 0.5 + Math.cos(a) * 0.32, 0.40 + Math.sin(a) * 0.32, 0.012, T(c, '#1a1038'), { flat: 1 }); }
        c.RG(0.5, 0.40, 0.18, 0.20, T(c, '#1a1038'), { flat: 1 }); c.E(0.5, 0.40, 0.17, 0.17, T(c, '#ffe27a'), { flat: 1 });
        for (i = 0; i < 8; i++) { var b = i * Math.PI / 4; c.E(0.5 + Math.cos(b) * 0.10, 0.40 + Math.sin(b) * 0.10, 0.04, 0.04, cols[(i + 3) % 6], { flat: 1 }); }
        c.E(0.5, 0.40, 0.04, 0.04, P.ruby, { flat: 1 }); c.RG(0.5, 0.40, 0.31, 0.34, T(c, '#1a1038'), { flat: 1 });
        c.R(0.30, 0.82, 0.70, 1.0, P.glow, { flat: 1 }); c.P([[0.30, 0.82], [0.70, 0.82], [0.80, 1.0], [0.20, 1.0]], T(c, '#ffe27a'), { flat: 1 });
        for (i = 0; i < 6; i++) c.E(0.28 + i * 0.09, 0.93, 0.03, 0.02, cols[i], { flat: 1 });
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
