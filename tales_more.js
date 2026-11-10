/* Halloween, Easter and More Holidays: original pixel designs. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  function heart(c, x, y, s, col) { c.E(x - s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.E(x + s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.P([[x - s * 1.02, y - s * 0.05], [x + s * 1.02, y - s * 0.05], [x, y + s * 1.05]], col); }
  var HE = ['night', 'dusk', 'storm', 'forest', 'aurora', 'hall'];
  var EE = ['dawn', 'meadow', 'day', 'rosy', 'dusk'];
  var ME = ['day', 'dawn', 'dusk', 'meadow', 'night', 'fireworks', 'snow', 'hall'];

  K.register('halloween', [
    { k: 'jack', n: 'Jack-o’-Lantern', fixed: 1, envs: HE, gy: 0.88, lines: ['A candle inside and a grin that never quits.', 'It guards the porch with enormous cheer.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.9, 0.38, 0.03);
        c.E(0.26, 0.58, 0.2, 0.28, T(c, '#c8601a')); c.E(0.74, 0.58, 0.2, 0.28, T(c, '#c8601a')); c.E(0.5, 0.58, 0.24, 0.30, T(c, '#f08a1f')); c.E(0.38, 0.58, 0.18, 0.29, T(c, '#f08a1f'));
        c.R(0.46, 0.14, 0.55, 0.30, T(c, '#4a6a2a'));
        c.P([[0.26, 0.46], [0.42, 0.50], [0.30, 0.34]], T(c, '#ffe040')); c.P([[0.74, 0.46], [0.58, 0.50], [0.70, 0.34]], T(c, '#ffe040')); c.P([[0.50, 0.56], [0.44, 0.64], [0.56, 0.64]], T(c, '#ffe040'));
        c.P([[0.24, 0.68], [0.76, 0.68], [0.70, 0.78], [0.62, 0.74], [0.54, 0.80], [0.46, 0.74], [0.38, 0.80], [0.30, 0.74]], T(c, '#ffe040'));
        spark(c, 0.50, 0.70, 0.08, '#fff0a0');
      } },
    { k: 'ghost', n: 'Friendly Ghost', fixed: 1, envs: HE, hy: 0.4, lines: ['Boo! It said, very politely, and then waved.', 'It only wants someone to share the candy with.'],
      draw: function (c, P, r, o) {
        c.P([[0.18, 0.96], [0.18, 0.40], [0.30, 0.18], [0.50, 0.10], [0.70, 0.18], [0.82, 0.40], [0.82, 0.96], [0.72, 0.86], [0.62, 0.96], [0.50, 0.86], [0.38, 0.96], [0.28, 0.86]], T(c, '#f4f6ff'));
        c.E(0.34, 0.5, 0.1, 0.2, T(c, '#dce2f8'), { flat: 1 });
        c.E(0.40, 0.38, 0.06, 0.09, T(c, '#1a1a2a')); c.E(0.60, 0.38, 0.06, 0.09, T(c, '#1a1a2a')); c.E(0.5, 0.56, 0.07, 0.08, T(c, '#1a1a2a'));
        c.E(0.30, 0.50, 0.05, 0.03, T(c, '#ffb0c0'), { flat: 1 }); c.E(0.70, 0.50, 0.05, 0.03, T(c, '#ffb0c0'), { flat: 1 });
        c.L(0.18, 0.60, 0.04, 0.46, 0.06, T(c, '#f4f6ff'));
      } },
    { k: 'witchhat', n: 'Witch’s Hat', fixed: 1, envs: HE, gy: 0.9, lines: ['Pointy, patched, and slightly bent from a lot of flying.', 'The buckle is the only shiny thing in the whole spooky wardrobe.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.44, 0.03);
        c.E(0.5, 0.82, 0.46, 0.09, T(c, '#2a1a4a'));
        c.P([[0.26, 0.82], [0.40, 0.40], [0.52, 0.22], [0.76, 0.10], [0.62, 0.30], [0.74, 0.82]], T(c, '#3a2a6a'));
        c.R(0.27, 0.66, 0.73, 0.78, T(c, '#8a2ac8')); c.R(0.42, 0.64, 0.58, 0.80, T(c, '#ffd23f')); c.R(0.46, 0.68, 0.54, 0.76, T(c, '#2a1a4a'), { flat: 1 });
        c.dot(0.36, 0.52, c.c('#8a6ae8'), 2); c.dot(0.60, 0.44, c.c('#8a6ae8'), 1);
      } },
    { k: 'bat', n: 'Bat', fixed: 1, envs: HE, hy: 0.4, lines: ['It hangs around at night and has a wonderful time.', 'Do not be fooled by the fangs: it is mostly ears.'],
      draw: function (c, P, r, o) {
        c.mir = true; c.P([[0.46, 0.48], [0.30, 0.28], [0.06, 0.24], [0.14, 0.44], [0.04, 0.60], [0.22, 0.56], [0.28, 0.72], [0.40, 0.58]], T(c, '#3a2a58')); c.mir = false;
        c.E(0.5, 0.56, 0.12, 0.18, T(c, '#4a3a6a')); c.E(0.5, 0.36, 0.13, 0.12, T(c, '#4a3a6a'));
        c.P([[0.38, 0.30], [0.36, 0.10], [0.46, 0.26]], T(c, '#4a3a6a')); c.P([[0.62, 0.30], [0.64, 0.10], [0.54, 0.26]], T(c, '#4a3a6a'));
        c.mir = true; c.E(0.45, 0.34, 0.025, 0.03, T(c, '#ffd23f'), { flat: 1 }); c.mir = false;
        c.P([[0.46, 0.42], [0.48, 0.48], [0.5, 0.42]], T(c, '#ffffff'), { flat: 1 }); c.P([[0.5, 0.42], [0.52, 0.48], [0.54, 0.42]], T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'cauldron', n: 'Bubbling Cauldron', fixed: 1, envs: HE, gy: 0.9, lines: ['Something green is bubbling and it smells like toast.', 'Please do not stir with the good spoon.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.36, 0.03);
        c.E(0.5, 0.64, 0.38, 0.28, T(c, '#2a2a38')); c.R(0.20, 0.38, 0.80, 0.48, T(c, '#2a2a38')); c.E(0.5, 0.42, 0.32, 0.07, T(c, '#4a4a60'));
        c.E(0.5, 0.42, 0.27, 0.05, T(c, '#5ae83a'));
        c.E(0.40, 0.30, 0.07, 0.07, T(c, '#8aff6a')); c.E(0.58, 0.26, 0.05, 0.05, T(c, '#8aff6a')); c.E(0.50, 0.16, 0.035, 0.035, T(c, '#8aff6a')); c.E(0.66, 0.12, 0.03, 0.03, T(c, '#8aff6a'));
        c.L(0.28, 0.90, 0.22, 0.98, 0.05, T(c, '#2a2a38')); c.L(0.72, 0.90, 0.78, 0.98, 0.05, T(c, '#2a2a38'));
        c.R(0.42, 0.56, 0.58, 0.60, T(c, '#4a4a60'), { flat: 1 }); c.E(0.34, 0.58, 0.05, 0.05, T(c, '#8aff6a'), { flat: 1 });
      } },
    { k: 'candycorn', n: 'Candy Corn', fixed: 1, envs: HE, gy: 0.9, lines: ['Three colors in one tiny triangle.', 'People argue about it every year, and every year it is eaten.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.34, 0.03);
        c.P([[0.50, 0.08], [0.78, 0.50], [0.22, 0.50]], T(c, '#ffffff')); c.P([[0.22, 0.50], [0.78, 0.50], [0.86, 0.72], [0.14, 0.72]], T(c, '#ff9a1f')); c.P([[0.14, 0.72], [0.86, 0.72], [0.90, 0.90], [0.10, 0.90]], T(c, '#ffe040'));
        c.P([[0.50, 0.08], [0.42, 0.22], [0.50, 0.50], [0.22, 0.50]], T(c, '#f0f0f0'), { flat: 1 });
        c.dot(0.40, 0.30, c.c('#ffffff'), 1);
      } },
    { k: 'haunted', n: 'Haunted House', fixed: 1, envs: ['night', 'storm', 'dusk', 'aurora'], gy: 0.92, lines: ['One window glows and it is not the one you hoped.', 'The door creaks politely before it opens.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.95, 0.42, 0.03);
        c.R(0.16, 0.46, 0.84, 0.92, T(c, '#4a3a58')); c.P([[0.10, 0.48], [0.50, 0.16], [0.90, 0.48]], T(c, '#2a1a3a')); c.R(0.64, 0.14, 0.76, 0.34, T(c, '#2a1a3a'));
        c.R(0.20, 0.20, 0.34, 0.50, T(c, '#4a3a58')); c.P([[0.18, 0.22], [0.27, 0.06], [0.36, 0.22]], T(c, '#2a1a3a'));
        c.R(0.42, 0.66, 0.58, 0.92, T(c, '#1a1020')); c.E(0.5, 0.66, 0.08, 0.05, T(c, '#1a1020'));
        c.R(0.22, 0.60, 0.34, 0.74, T(c, '#ffd23f')); c.R(0.66, 0.60, 0.78, 0.74, T(c, '#ffb020')); c.R(0.25, 0.26, 0.29, 0.36, T(c, '#ffd23f'), { flat: 1 });
        c.L(0.28, 0.60, 0.28, 0.74, 0.008, T(c, '#2a1a3a'), { flat: 1 }); c.L(0.72, 0.60, 0.72, 0.74, 0.008, T(c, '#2a1a3a'), { flat: 1 });
        c.R(0.38, 0.44, 0.62, 0.50, T(c, '#6a5a78'), { flat: 1 });
      } },
    { k: 'spider', n: 'Spider', fixed: 1, envs: HE, hy: 0.4, lines: ['It spun a web and it is very proud of it.', 'Eight legs and not one of them is in a hurry.'],
      draw: function (c, P, r, o) {
        var i;
        c.L(0.5, 0.0, 0.5, 0.42, 0.008, T(c, '#e8e8f0'), { flat: 1 });
        for (i = 0; i < 4; i++) { c.L(0.46, 0.56 + i * 0.05, 0.10 - i * 0.02, 0.38 + i * 0.16, 0.025, T(c, '#2a2a38')); c.L(0.54, 0.56 + i * 0.05, 0.90 + i * 0.02, 0.38 + i * 0.16, 0.025, T(c, '#2a2a38')); }
        c.E(0.5, 0.68, 0.17, 0.20, T(c, '#2a2a38')); c.E(0.5, 0.50, 0.11, 0.09, T(c, '#3a3a4c'));
        c.P([[0.44, 0.64], [0.50, 0.76], [0.56, 0.64]], T(c, '#e82020'), { flat: 1 });
        c.E(0.46, 0.48, 0.025, 0.025, T(c, '#ff4040'), { flat: 1 }); c.E(0.54, 0.48, 0.025, 0.025, T(c, '#ff4040'), { flat: 1 });
      } },
    { k: 'skull', n: 'Silly Skeleton', fixed: 1, envs: HE, hy: 0.4, lines: ['It has no sense of fear, and no stomach for candy.', 'Every bone is rattling a happy tune.'],
      draw: function (c, P, r, o) {
        var b = T(c, '#f4f0e0');
        c.E(0.5, 0.36, 0.26, 0.28, b); c.R(0.36, 0.56, 0.64, 0.74, b); c.E(0.36, 0.38, 0.08, 0.10, T(c, '#1a1a22')); c.E(0.64, 0.38, 0.08, 0.10, T(c, '#1a1a22')); c.P([[0.46, 0.50], [0.54, 0.50], [0.5, 0.42]], T(c, '#1a1a22'));
        for (var i = 0; i < 5; i++) c.L(0.40 + i * 0.05, 0.58, 0.40 + i * 0.05, 0.72, 0.01, T(c, '#1a1a22'), { flat: 1 });
        c.L(0.20, 0.90, 0.80, 0.80, 0.045, b); c.L(0.20, 0.80, 0.80, 0.90, 0.045, b);
        c.E(0.5, 0.20, 0.0, 0.0, b);
      } },
    { k: 'moonowl', n: 'Hooting Owl', fixed: 1, envs: ['night', 'storm', 'dusk', 'forest', 'aurora'], gy: 0.88, lines: ['Who-who-who is out so late?', 'It is, and it likes it that way.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#7a5a3a');
        c.L(0.04, 0.88, 0.96, 0.84, 0.045, P.wood);
        c.E(0.5, 0.58, 0.26, 0.30, br); c.E(0.5, 0.66, 0.16, 0.20, T(c, '#c8a878'), { flat: 1 });
        c.E(0.5, 0.32, 0.26, 0.22, br); c.P([[0.26, 0.20], [0.24, 0.04], [0.40, 0.14]], br); c.P([[0.74, 0.20], [0.76, 0.04], [0.60, 0.14]], br);
        c.E(0.38, 0.32, 0.11, 0.11, T(c, '#ffe080')); c.E(0.62, 0.32, 0.11, 0.11, T(c, '#ffe080')); c.E(0.38, 0.32, 0.045, 0.05, T(c, '#1a1a22'), { flat: 1 }); c.E(0.62, 0.32, 0.045, 0.05, T(c, '#1a1a22'), { flat: 1 });
        c.P([[0.46, 0.38], [0.54, 0.38], [0.5, 0.48]], T(c, '#f0a020'));
        c.L(0.22, 0.54, 0.12, 0.78, 0.07, T(c, '#5a3a22')); c.L(0.78, 0.54, 0.88, 0.78, 0.07, T(c, '#5a3a22'));
        c.R(0.38, 0.84, 0.44, 0.90, T(c, '#f0a020'), { flat: 1 }); c.R(0.56, 0.84, 0.62, 0.90, T(c, '#f0a020'), { flat: 1 });
      } }
  ]);

  K.register('easter', [
    { k: 'bunny', n: 'Easter Bunny', fixed: 1, envs: EE, gy: 0.9, hy: 0.4, lines: ['Soft ears, twitchy nose, and a basket he is very proud of.', 'He hops from garden to garden before anyone wakes.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#f8f4ee');
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.E(0.5, 0.74, 0.24, 0.22, w); c.E(0.5, 0.80, 0.14, 0.12, T(c, '#ffffff'), { flat: 1 }); c.E(0.30, 0.92, 0.09, 0.05, w); c.E(0.70, 0.92, 0.09, 0.05, w);
        c.E(0.5, 0.42, 0.20, 0.18, w); c.E(0.38, 0.16, 0.07, 0.20, w); c.E(0.62, 0.16, 0.07, 0.20, w); c.E(0.38, 0.18, 0.035, 0.14, T(c, '#ffb0c8'), { flat: 1 }); c.E(0.62, 0.18, 0.035, 0.14, T(c, '#ffb0c8'), { flat: 1 });
        c.mir = true; c.E(0.42, 0.40, 0.025, 0.03, P.black, { flat: 1 }); c.E(0.35, 0.46, 0.035, 0.022, T(c, '#ffb0c8'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.025, 0.02, T(c, '#ff8aa8')); c.L(0.5, 0.48, 0.5, 0.52, 0.008, T(c, '#c05a70'), { flat: 1 });
        c.E(0.78, 0.76, 0.12, 0.10, T(c, '#c8923a')); c.R(0.66, 0.70, 0.90, 0.74, T(c, '#a87028'), { flat: 1 }); c.E(0.74, 0.70, 0.04, 0.04, T(c, '#ff6aa8')); c.E(0.82, 0.69, 0.04, 0.04, T(c, '#4aa8ff')); c.E(0.78, 0.66, 0.04, 0.04, T(c, '#ffd23f'));
        c.L(0.66, 0.76, 0.84, 0.56, 0.015, T(c, '#a87028'), { flat: 1 });
      } },
    { k: 'egg', n: 'Painted Egg', envs: EE, gy: 0.9, lines: ['Every swirl was painted with a very steady hand.', 'It is hidden somewhere you already looked.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.3, 0.03);
        c.E(0.5, 0.56, 0.27, 0.36, P.a); c.E(0.5, 0.30, 0.2, 0.2, P.a);
        c.R(0.24, 0.34, 0.76, 0.42, P.b, { flat: 1 }); c.R(0.23, 0.58, 0.77, 0.66, P.b, { flat: 1 }); c.R(0.28, 0.76, 0.72, 0.82, P.b, { flat: 1 });
        for (var i = 0; i < 5; i++) { c.E(0.30 + i * 0.1, 0.50, 0.03, 0.03, T(c, '#ffffff'), { flat: 1 }); c.E(0.34 + i * 0.09, 0.72, 0.025, 0.025, T(c, '#ffffff'), { flat: 1 }); }
        c.E(0.40, 0.28, 0.05, 0.08, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'chick', n: 'Baby Chick', fixed: 1, envs: EE, gy: 0.9, lines: ['Peep. Peep. It has just discovered the whole world.', 'The shell makes a pretty good hat.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.3, 0.03);
        c.E(0.5, 0.56, 0.30, 0.30, T(c, '#ffe040')); c.E(0.5, 0.64, 0.17, 0.18, T(c, '#fff0a0'), { flat: 1 });
        c.E(0.24, 0.60, 0.07, 0.10, T(c, '#f0c820')); c.E(0.76, 0.60, 0.07, 0.10, T(c, '#f0c820'));
        c.mir = true; c.E(0.40, 0.46, 0.03, 0.04, P.black, { flat: 1 }); c.dot(0.39, 0.44, c.c('#ffffff'), 1); c.E(0.30, 0.54, 0.04, 0.025, T(c, '#ff9a6a'), { flat: 1 }); c.mir = false;
        c.P([[0.44, 0.52], [0.56, 0.52], [0.5, 0.62]], T(c, '#ff8a1f'));
        c.L(0.5, 0.26, 0.46, 0.14, 0.015, T(c, '#f0c820'), { flat: 1 });
        c.R(0.40, 0.90, 0.44, 0.94, T(c, '#ff8a1f'), { flat: 1 }); c.R(0.56, 0.90, 0.60, 0.94, T(c, '#ff8a1f'), { flat: 1 });
        c.P([[0.14, 0.88], [0.24, 0.76], [0.30, 0.86], [0.40, 0.76], [0.46, 0.88], [0.54, 0.76], [0.60, 0.88], [0.70, 0.76], [0.76, 0.86], [0.86, 0.88], [0.8, 0.96], [0.2, 0.96]], T(c, '#ffffff'));
      } },
    { k: 'basket', n: 'Easter Basket', fixed: 1, envs: EE, gy: 0.9, lines: ['Grass on the bottom and surprises on top.', 'The handle has a bow tied in the nick of time.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.38, 0.03);
        c.L(0.18, 0.56, 0.5, 0.06, 0.04, T(c, '#a87028')); c.L(0.82, 0.56, 0.5, 0.06, 0.04, T(c, '#a87028'));
        c.P([[0.10, 0.54], [0.90, 0.54], [0.78, 0.92], [0.22, 0.92]], T(c, '#c8923a')); for (i = 0; i < 4; i++) c.L(0.14 + i * 0.01, 0.62 + i * 0.07, 0.86 - i * 0.01, 0.62 + i * 0.07, 0.012, T(c, '#a87028'), { flat: 1 });
        for (i = 0; i < 8; i++) c.L(0.14 + i * 0.1, 0.56, 0.12 + i * 0.1, 0.46, 0.03, T(c, '#5ad870'), { flat: 1 });
        var cs = ['#ff6aa8', '#4aa8ff', '#ffd23f', '#a870ff']; for (i = 0; i < 4; i++) c.E(0.26 + i * 0.16, 0.46 - (i % 2) * 0.06, 0.07, 0.09, T(c, cs[i]));
        c.P([[0.5, 0.06], [0.40, 0.0], [0.42, 0.12]], T(c, '#ff6aa8')); c.P([[0.5, 0.06], [0.60, 0.0], [0.58, 0.12]], T(c, '#ff6aa8'));
      } },
    { k: 'tulip', n: 'Spring Tulip', envs: EE, hy: 0.4, lines: ['It woke up first and told all the others.', 'The sun made it blush.'],
      draw: function (c, P, r, o) {
        c.L(0.5, 0.40, 0.5, 1.0, 0.045, T(c, '#2a9a3a')); c.P([[0.52, 0.96], [0.84, 0.64], [0.78, 0.92]], T(c, '#3ab04a')); c.P([[0.48, 0.80], [0.18, 0.56], [0.24, 0.84]], T(c, '#3ab04a'));
        c.E(0.5, 0.28, 0.24, 0.26, P.a); c.P([[0.26, 0.30], [0.30, 0.04], [0.42, 0.20], [0.5, 0.02], [0.58, 0.20], [0.70, 0.04], [0.74, 0.30]], P.a);
        c.E(0.5, 0.30, 0.10, 0.2, P.b, { flat: 1 }); c.E(0.40, 0.22, 0.04, 0.08, T(c, '#ffffff'), { flat: 1 });
      } },
    { k: 'lamb', n: 'Spring Lamb', fixed: 1, envs: EE, gy: 0.9, lines: ['Fluffy as a cloud and just as quiet.', 'It skips across the meadow on four shaky legs.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#f8f4ee'), i;
        o.shadow(0.5, 0.94, 0.34, 0.03);
        c.R(0.30, 0.74, 0.36, 0.92, T(c, '#4a3a3a')); c.R(0.42, 0.76, 0.48, 0.92, T(c, '#4a3a3a')); c.R(0.58, 0.76, 0.64, 0.92, T(c, '#4a3a3a')); c.R(0.68, 0.74, 0.74, 0.92, T(c, '#4a3a3a'));
        for (i = 0; i < 6; i++) c.E(0.34 + (i % 3) * 0.17, 0.56 + Math.floor(i / 3) * 0.12, 0.13, 0.12, w);
        c.E(0.5, 0.60, 0.30, 0.18, w); 
        c.E(0.22, 0.42, 0.12, 0.12, T(c, '#4a3a3a')); c.E(0.14, 0.36, 0.05, 0.03, T(c, '#4a3a3a')); c.E(0.30, 0.34, 0.04, 0.07, T(c, '#4a3a3a'));
        c.E(0.22, 0.30, 0.09, 0.07, w);
        c.dot(0.20, 0.40, c.c('#ffffff'), 1); c.dot(0.17, 0.46, c.c('#ff9aa8'), 1);
        c.P([[0.30, 0.50], [0.38, 0.54], [0.34, 0.60]], T(c, '#ff6aa8'), { flat: 1 });
      } }
  ]);

  K.register('holidays', [
    { k: 'newyear', n: 'Midnight Clock', fixed: 1, envs: ['night', 'fireworks', 'snow', 'silent', 'aurora'], hy: 0.4, lines: ['Ten, nine, eight, and then everybody cheers.', 'A brand-new year, still folded, still shiny.'],
      draw: function (c, P, r, o) {
        var i;
        c.E(0.5, 0.50, 0.40, 0.40, T(c, '#ffd23f')); c.E(0.5, 0.50, 0.34, 0.34, T(c, '#fffaf0'));
        for (i = 0; i < 12; i++) { var a = i * Math.PI / 6; c.dot(0.5 + Math.cos(a) * 0.28, 0.50 + Math.sin(a) * 0.28, c.c('#2a2a4a'), i % 3 === 0 ? 3 : 1); }
        c.L(0.5, 0.50, 0.5, 0.22, 0.025, T(c, '#1a1a2a')); c.L(0.5, 0.50, 0.5, 0.20, 0.025, T(c, '#1a1a2a')); c.L(0.5, 0.50, 0.50, 0.24, 0.02, T(c, '#c8202c'), { flat: 1 });
        c.E(0.5, 0.50, 0.03, 0.03, T(c, '#ffd23f'));
        c.R(0.40, 0.92, 0.60, 0.98, T(c, '#8a5a1a')); 
        c.P([[0.08, 0.20], [0.20, 0.0], [0.32, 0.20]], T(c, '#ff6aa8')); c.P([[0.68, 0.20], [0.80, 0.0], [0.92, 0.20]], T(c, '#4aa8ff')); c.dot(0.20, 0.0, c.c('#ffd23f'), 2); c.dot(0.80, 0.0, c.c('#ffd23f'), 2);
      } },
    { k: 'champagne', n: 'Midnight Toast', fixed: 1, envs: ['night', 'fireworks', 'hall', 'silent', 'aurora'], hy: 0.4, lines: ['Two glasses clink and the sparkles jump out.', 'A toast to everything still to come.'],
      draw: function (c, P, r, o) {
        var g = T(c, '#e8f4ff'), gl = T(c, '#ffe080');
        c.P([[0.14, 0.30], [0.42, 0.20], [0.40, 0.58], [0.30, 0.66]], g); c.P([[0.16, 0.34], [0.40, 0.26], [0.38, 0.56], [0.30, 0.62]], gl, { flat: 1 }); c.L(0.28, 0.64, 0.28, 0.90, 0.025, g); c.R(0.18, 0.90, 0.38, 0.94, g);
        c.P([[0.86, 0.30], [0.58, 0.20], [0.60, 0.58], [0.70, 0.66]], g); c.P([[0.84, 0.34], [0.60, 0.26], [0.62, 0.56], [0.70, 0.62]], gl, { flat: 1 }); c.L(0.72, 0.64, 0.72, 0.90, 0.025, g); c.R(0.62, 0.90, 0.82, 0.94, g);
        spark(c, 0.5, 0.20, 0.10, '#fff6b0'); for (var i = 0; i < 6; i++) c.dot(0.40 + (i % 3) * 0.1, 0.06 + Math.floor(i / 3) * 0.08, c.c(['#ffd23f', '#ff8ad8', '#8ae0ff'][i % 3]), 2);
      } },
    { k: 'shamrock', n: 'Four-Leaf Clover', fixed: 1, envs: ['meadow', 'day', 'dawn', 'dusk', 'rosy', 'forest'], hy: 0.4, lines: ['One in ten thousand, and you found it.', 'Luck is just a very green accident.'],
      draw: function (c, P, r, o) {
        var g = T(c, '#2fb050'), g2 = T(c, '#4ad070');
        heart(c, 0.5, 0.28, 0.16, g); c.P([[0.5, 0.0], [0.5, 0.0], [0.5, 0.0]], g);
        heart(c, 0.28, 0.46, 0.16, g2); heart(c, 0.72, 0.46, 0.16, g2); heart(c, 0.5, 0.64, 0.16, g);
        c.L(0.5, 0.50, 0.5, 0.60, 0.01, T(c, '#1a7a30'), { flat: 1 });
        c.L(0.5, 0.78, 0.56, 1.0, 0.04, T(c, '#1a7a30'));
        c.dot(0.38, 0.20, c.c('#bfffd0'), 1); c.dot(0.20, 0.38, c.c('#bfffd0'), 1);
      } },
    { k: 'potgold', n: 'Pot of Gold', fixed: 1, envs: ['rosy', 'meadow', 'day', 'dawn', 'storm', 'forest'], gy: 0.9, lines: ['At the end of the rainbow, as promised.', 'The leprechaun is somewhere nearby, grinning.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.38, 0.03);
        c.E(0.5, 0.74, 0.34, 0.20, T(c, '#2a2a38')); c.R(0.20, 0.52, 0.80, 0.70, T(c, '#2a2a38')); c.E(0.5, 0.52, 0.30, 0.06, T(c, '#4a4a60'));
        for (var i = 0; i < 7; i++) c.E(0.26 + i * 0.08, 0.46 - Math.abs(i - 3) * 0.02, 0.065, 0.06, T(c, '#ffd23f')); for (i = 0; i < 4; i++) c.E(0.34 + i * 0.1, 0.38 - (i % 2) * 0.02, 0.06, 0.055, T(c, '#ffe680'));
        c.E(0.5, 0.30, 0.05, 0.05, T(c, '#fff0a0')); c.dot(0.36, 0.42, c.c('#ffffff'), 1);
        c.R(0.34, 0.64, 0.66, 0.70, T(c, '#4a4a60'), { flat: 1 });
        c.L(0.20, 0.30, 0.10, 0.50, 0.02, T(c, '#2fb050'), { flat: 1 });
      } },
    { k: 'menorah', n: 'Menorah', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], gy: 0.92, lines: ['Eight nights, eight little lights and one helper in the middle.', 'A miracle of oil, remembered every winter.'],
      draw: function (c, P, r, o) {
        var i, gold = T(c, '#e8b020');
        c.R(0.46, 0.34, 0.54, 0.90, gold); c.R(0.28, 0.88, 0.72, 0.96, gold);
        for (i = 0; i < 9; i++) { var x = 0.06 + i * 0.11, top = i === 4 ? 0.30 : 0.42; c.R(x, top, x + 0.04, 0.80, gold); c.R(x - 0.02, 0.80, x + 0.06, 0.82, gold); c.E(x + 0.02, top - 0.02, 0.035, 0.035, T(c, '#c8c8e8')); c.E(x + 0.02, top - 0.10, 0.03, 0.06, T(c, '#ffd23f')); c.E(x + 0.02, top - 0.09, 0.012, 0.03, T(c, '#ffffff'), { flat: 1 }); }
        c.L(0.08, 0.78, 0.50, 0.90, 0.02, gold); c.L(0.92, 0.78, 0.50, 0.90, 0.02, gold);
      } },
    { k: 'dreidel', n: 'Dreidel', fixed: 1, envs: ['hall', 'night', 'silent', 'dusk', 'snow'], gy: 0.9, lines: ['Spin it and see who wins the gelt.', 'Gimel, hey, shin and nun, a very old game.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.92, 0.26, 0.03);
        c.R(0.46, 0.04, 0.54, 0.22, T(c, '#2a6ae0')); c.R(0.20, 0.22, 0.80, 0.62, T(c, '#2a6ae0')); c.R(0.20, 0.22, 0.80, 0.28, T(c, '#4a8aff'), { flat: 1 });
        c.P([[0.20, 0.62], [0.80, 0.62], [0.5, 0.92]], T(c, '#1a4ab0'));
        c.ST(0.5, 0.42, 0.12, 0.05, T(c, '#ffffff')); c.L(0.5, 0.88, 0.5, 0.96, 0.03, T(c, '#c8c8e8'));
      } },
    { k: 'mothers', n: 'Mother’s Day Flowers', fixed: 1, envs: ['day', 'meadow', 'dawn', 'dusk', 'rosy', 'hall'], gy: 0.9, lines: ['Picked with muddy hands and a very big grin.', 'The card says best mom, with the S written backward.'],
      draw: function (c, P, r, o) {
        var i, cs = ['#ff6aa8', '#ffd23f', '#ff8a5a', '#c8a0ff', '#ffffff'];
        o.shadow(0.5, 0.94, 0.3, 0.03);
        c.P([[0.26, 0.94], [0.30, 0.56], [0.70, 0.56], [0.74, 0.94]], T(c, '#a8c8f0')); c.R(0.24, 0.52, 0.76, 0.60, T(c, '#c8e0ff'));
        c.L(0.40, 0.56, 0.34, 0.30, 0.02, T(c, '#2a9a3a')); c.L(0.5, 0.56, 0.5, 0.22, 0.02, T(c, '#2a9a3a')); c.L(0.6, 0.56, 0.68, 0.28, 0.02, T(c, '#2a9a3a'));
        var pos = [[0.34, 0.26], [0.50, 0.16], [0.68, 0.24]]; for (i = 0; i < 3; i++) { for (var k = 0; k < 6; k++) { var a = k * Math.PI / 3; c.E(pos[i][0] + Math.cos(a) * 0.07, pos[i][1] + Math.sin(a) * 0.07, 0.045, 0.045, T(c, cs[(i + k) % 5 === 4 ? 0 : [0, 3, 1][i]])); } c.E(pos[i][0], pos[i][1], 0.04, 0.04, T(c, '#ffd23f')); }
        heart(c, 0.5, 0.74, 0.07, T(c, '#e82040'));
      } },
    { k: 'fathers', n: 'Best Dad Necktie', fixed: 1, envs: ['day', 'meadow', 'dawn', 'dusk', 'hall'], hy: 0.4, lines: ['Bold stripes and a knot tied on the third try.', 'It says world’s best dad, and nobody argues.'],
      draw: function (c, P, r, o) {
        var i;
        c.P([[0.38, 0.04], [0.62, 0.04], [0.58, 0.24], [0.42, 0.24]], T(c, '#1a3a98'));
        c.P([[0.42, 0.24], [0.58, 0.24], [0.76, 0.92], [0.5, 1.0], [0.24, 0.92]], T(c, '#2a5ac8'));
        for (i = 0; i < 5; i++) c.P([[0.36 + i * 0.0, 0.34 + i * 0.12], [0.64 + 0.0, 0.34 + i * 0.12], [0.66, 0.40 + i * 0.12], [0.34, 0.40 + i * 0.12]], T(c, i % 2 ? '#ffd23f' : '#c8202c'), { flat: 1 });
        c.P([[0.44, 0.08], [0.50, 0.10], [0.56, 0.08], [0.56, 0.22], [0.44, 0.22]], T(c, '#3a6ae0'), { flat: 1 }); c.dot(0.40, 0.50, c.c('#ffffff'), 1);
      } },
    { k: 'memorial', n: 'Poppy Field', fixed: 1, envs: ['dawn', 'dusk', 'day', 'meadow', 'storm'], hy: 0.4, lines: ['A thousand little red flowers for those who rest beneath.', 'We remember, quietly, with flowers.'],
      draw: function (c, P, r, o) {
        var i;
        for (i = 0; i < 3; i++) { var x = 0.22 + i * 0.28, y = 0.34 + (i % 2) * 0.12; c.L(x, y + 0.08, x - 0.02 + i * 0.02, 1.0, 0.03, T(c, '#2a8a3a')); for (var k = 0; k < 5; k++) { var a = k * Math.PI * 2 / 5; c.E(x + Math.cos(a) * 0.08, y + Math.sin(a) * 0.08, 0.075, 0.075, T(c, '#d8102c')); } c.E(x, y, 0.045, 0.045, T(c, '#1a1a22')); c.dot(x - 0.02, y - 0.02, c.c('#ff8090'), 1); }
        c.P([[0.30, 0.96], [0.40, 0.80], [0.38, 0.96]], T(c, '#3ab04a'), { flat: 1 }); c.P([[0.76, 0.96], [0.64, 0.74], [0.68, 0.96]], T(c, '#3ab04a'), { flat: 1 });
      } },
    { k: 'labor', n: 'Hard Hat and Hammer', fixed: 1, envs: ['day', 'dawn', 'dusk', 'meadow', 'storm'], gy: 0.9, lines: ['For everyone who built it, fixed it and carried it.', 'The day off was well earned.'],
      draw: function (c, P, r, o) {
        o.shadow(0.5, 0.94, 0.4, 0.03);
        c.E(0.5, 0.60, 0.34, 0.30, T(c, '#ffd23f')); c.R(0.14, 0.56, 0.86, 0.72, T(c, '#ffd23f')); c.R(0.46, 0.20, 0.54, 0.52, T(c, '#e8b020'), { flat: 1 }); c.R(0.34, 0.26, 0.38, 0.52, T(c, '#e8b020'), { flat: 1 }); c.R(0.62, 0.26, 0.66, 0.52, T(c, '#e8b020'), { flat: 1 });
        c.E(0.5, 0.74, 0.40, 0.05, T(c, '#e8b020')); c.E(0.40, 0.46, 0.08, 0.04, T(c, '#fff0a0'), { flat: 1 });
        c.L(0.26, 0.92, 0.80, 0.34, 0.035, P.wood); c.R(0.62, 0.20, 0.94, 0.30, T(c, '#8a8a98'));
      } },
    { k: 'veterans', n: 'Honor Medal', fixed: 1, envs: ['dawn', 'dusk', 'day', 'storm', 'hall'], hy: 0.4, lines: ['A small star on a ribbon, carrying a very large thank-you.', 'It is worn on the heart.'],
      draw: function (c, P, r, o) {
        c.P([[0.24, 0.0], [0.50, 0.40], [0.76, 0.0], [0.62, 0.0], [0.50, 0.20], [0.38, 0.0]], T(c, '#c8202c')); c.P([[0.38, 0.0], [0.50, 0.20], [0.62, 0.0], [0.56, 0.0], [0.50, 0.10], [0.44, 0.0]], T(c, '#ffffff'), { flat: 1 });
        c.E(0.5, 0.64, 0.34, 0.34, T(c, '#e8b020')); c.E(0.5, 0.64, 0.27, 0.27, T(c, '#f8d860'), { flat: 1 }); c.ST(0.5, 0.64, 0.24, 0.10, T(c, '#1a3a9a')); c.dot(0.38, 0.50, c.c('#ffffff'), 1);
      } },
    { k: 'juneteenth', n: 'Freedom Sunrise', fixed: 1, envs: ['dawn', 'dusk', 'day', 'rosy', 'meadow'], hy: 0.4, lines: ['The sun came up over Galveston and everything changed.', 'Red, black and green, and a long day of music.'],
      draw: function (c, P, r, o) {
        var i;
        c.E(0.5, 0.60, 0.34, 0.34, c.tone('#ffd23f')); c.E(0.5, 0.60, 0.26, 0.26, c.tone('#fff4b0'), { flat: 1 });
        for (i = 0; i < 9; i++) { var a = -Math.PI + i * Math.PI / 8; c.L(0.5 + Math.cos(a) * 0.38, 0.60 + Math.sin(a) * 0.38, 0.5 + Math.cos(a) * 0.50, 0.60 + Math.sin(a) * 0.50, 0.025, c.tone('#ff8a1f')); }
        c.P([[0.0, 0.64], [1.0, 0.58], [1.0, 0.70], [0.0, 0.76]], c.tone('#e8202c')); c.P([[0.0, 0.76], [1.0, 0.70], [1.0, 0.82], [0.0, 0.88]], c.tone('#1a1a22')); c.P([[0.0, 0.88], [1.0, 0.82], [1.0, 0.94], [0.0, 1.0]], c.tone('#2fb050'));
        c.ST(0.5, 0.78, 0.14, 0.055, c.tone('#ffffff'));
      } },
    { k: 'groundhog', n: 'Groundhog', fixed: 1, envs: ['dawn', 'snow', 'day', 'meadow', 'dusk'], gy: 0.9, hy: 0.4, lines: ['Does he see his shadow? The whole town holds its breath.', 'Six more weeks, or an early spring.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#8a6a42');
        c.E(0.5, 0.96, 0.46, 0.14, T(c, '#4a3220'));
        c.E(0.5, 0.64, 0.26, 0.32, br); c.E(0.5, 0.70, 0.14, 0.2, T(c, '#c8a878'), { flat: 1 });
        c.E(0.5, 0.36, 0.22, 0.20, br); c.E(0.32, 0.20, 0.05, 0.06, br); c.E(0.68, 0.20, 0.05, 0.06, br);
        c.E(0.5, 0.44, 0.10, 0.07, T(c, '#c8a878')); c.E(0.5, 0.41, 0.03, 0.02, P.black, { flat: 1 });
        c.mir = true; c.E(0.40, 0.32, 0.025, 0.03, P.black, { flat: 1 }); c.mir = false;
        c.E(0.46, 0.50, 0.015, 0.025, P.white, { flat: 1 }); c.E(0.54, 0.50, 0.015, 0.025, P.white, { flat: 1 });
        c.L(0.28, 0.66, 0.24, 0.80, 0.05, br); c.L(0.72, 0.66, 0.76, 0.80, 0.05, br);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
