/* Storybook Classics: original pixel designs for the best-loved public-domain fairytales. */
(function (root) {
  'use strict';
  var K = root.TaleKit, spark = K.spark;
  function T(c, h) { return c.tone(h); }
  function stripe(w) { return function (x, y) { return Math.floor(x / w) % 2 === 0; }; }

  K.register('classic', [
    { k: 'glassstairs', n: 'The Glass Slipper on the Stairs', fixed: 1, gy: 0.9, hy: 0.4, lines: ['The clock strikes twelve and someone runs, and all that is left behind is one small shoe.', 'It fits exactly one foot in the whole kingdom, and everyone is about to find out whose.'],
      draw: function (c, P, r, o) {
        var i;
        c.R(0.0, 0.0, 1.0, 0.54, T(c, '#2a2a3e'), { flat: 1 }); c.R(0.06, 0.0, 0.16, 0.56, T(c, '#d8d0e0')); c.R(0.84, 0.0, 0.94, 0.56, T(c, '#d8d0e0')); c.R(0.04, 0.0, 0.18, 0.04, T(c, '#e8e0f0'), { flat: 1 }); c.R(0.82, 0.0, 0.96, 0.04, T(c, '#e8e0f0'), { flat: 1 });
        c.E(0.5, 0.18, 0.15, 0.15, P.gold); c.E(0.5, 0.18, 0.12, 0.12, T(c, '#fff6dc'), { flat: 1 }); c.L(0.5, 0.18, 0.5, 0.08, 0.014, P.black, { flat: 1 }); c.L(0.5, 0.18, 0.5, 0.07, 0.014, P.black, { flat: 1 });
        for (i = 0; i < 12; i++) c.L(0.5 + Math.sin(i * Math.PI / 6) * 0.10, 0.18 - Math.cos(i * Math.PI / 6) * 0.10, 0.5 + Math.sin(i * Math.PI / 6) * 0.115, 0.18 - Math.cos(i * Math.PI / 6) * 0.115, 0.008, P.black, { flat: 1 });
        for (i = 0; i < 6; i++) { var y = 0.56 + i * 0.075, inset = 0.0 + i * 0.0; c.R(0.04, y, 0.96, y + 0.075, i % 2 ? T(c, '#e6dff0') : T(c, '#f4eefa')); c.R(0.04, y + 0.06, 0.96, y + 0.075, T(c, '#b8b0d0'), { flat: 1 }); }
        c.R(0.34, 0.54, 0.66, 1.0, T(c, '#d8203a'), { flat: 1 }); c.R(0.34, 0.54, 0.37, 1.0, T(c, '#ffd23f'), { flat: 1 }); c.R(0.63, 0.54, 0.66, 1.0, T(c, '#ffd23f'), { flat: 1 });
        c.P([[0.32, 0.64], [0.44, 0.64], [0.45, 0.78], [0.66, 0.82], [0.72, 0.92], [0.28, 0.94], [0.30, 0.84]], T(c, '#a8e0ff')); c.P([[0.34, 0.66], [0.40, 0.66], [0.40, 0.78], [0.34, 0.84]], T(c, '#e8faff'), { flat: 1 }); c.R(0.28, 0.90, 0.72, 0.94, T(c, '#58a8e8'), { flat: 1 });
        c.E(0.62, 0.84, 0.03, 0.025, T(c, '#ff6aa8')); c.dot(0.61, 0.83, P.white, 1); c.L(0.32, 0.64, 0.44, 0.64, 0.01, T(c, '#58a8e8'), { flat: 1 });
        spark(c, 0.26, 0.68, 0.05, P.glow); spark(c, 0.74, 0.76, 0.04, P.white); spark(c, 0.50, 0.96, 0.03, P.glow);
      } },
    { k: 'snowwhite', n: 'Snow White', fixed: 1, hy: 0.4, lines: ['Skin as white as snow, lips as red as a rose and hair as black as ebony, and a very good eye for dwarves.', 'She sings to the birds, they sing back and the whole forest is in harmony.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#fdeee4'), hair = T(c, '#16121c'), i;
        function eye(x, y) { c.E(x, y, 0.034, 0.04, P.white, { flat: 1 }); c.E(x + 0.002, y + 0.003, 0.021, 0.029, c.c('#3a2a58'), { flat: 1 }); c.dot(x - 0.005, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.06, 1.0], [0.12, 0.76], [0.28, 0.64], [0.72, 0.64], [0.88, 0.76], [0.94, 1.0]], T(c, '#2a68d8'));
        c.P([[0.06, 1.0], [0.12, 0.76], [0.24, 0.68], [0.30, 1.0]], T(c, '#4a88f0'), { flat: 1 });
        c.P([[0.28, 0.64], [0.50, 0.74], [0.72, 0.64], [0.66, 0.62], [0.50, 0.68], [0.34, 0.62]], T(c, '#ffffff'));
        c.E(0.20, 0.70, 0.07, 0.07, T(c, '#e8202c')); c.E(0.80, 0.70, 0.07, 0.07, T(c, '#e8202c')); c.E(0.20, 0.70, 0.045, 0.045, T(c, '#ffd23f'), { flat: 1 }); c.E(0.80, 0.70, 0.045, 0.045, T(c, '#ffd23f'), { flat: 1 });
        c.P([[0.30, 0.78], [0.70, 0.78], [0.74, 1.0], [0.26, 1.0]], T(c, '#ffd23f'), { flat: 1 });
        c.R(0.43, 0.54, 0.57, 0.66, skin);
        c.E(0.5, 0.36, 0.26, 0.28, hair); c.E(0.5, 0.42, 0.19, 0.21, skin);
        c.P([[0.31, 0.38], [0.32, 0.28], [0.42, 0.24], [0.50, 0.27], [0.58, 0.24], [0.68, 0.28], [0.69, 0.38], [0.64, 0.30], [0.50, 0.32], [0.36, 0.30]], hair, { flat: 1 });
        c.L(0.34, 0.20, 0.66, 0.20, 0.0, hair, { flat: 1 });
        c.P([[0.28, 0.16], [0.40, 0.10], [0.50, 0.14], [0.60, 0.10], [0.72, 0.16], [0.66, 0.22], [0.34, 0.22]], T(c, '#e8202c'));
        c.P([[0.50, 0.14], [0.44, 0.04], [0.56, 0.04]], T(c, '#e8202c')); c.P([[0.44, 0.04], [0.50, 0.0], [0.56, 0.04]], T(c, '#ff5a64'), { flat: 1 });
        eye(0.42, 0.43); eye(0.58, 0.43);
        c.L(0.35, 0.40, 0.38, 0.39, 0.01, hair, { flat: 1 }); c.L(0.62, 0.39, 0.65, 0.40, 0.01, hair, { flat: 1 }); c.L(0.37, 0.38, 0.47, 0.38, 0.012, hair, { flat: 1 }); c.L(0.53, 0.38, 0.63, 0.38, 0.012, hair, { flat: 1 });
        c.E(0.5, 0.49, 0.011, 0.01, T(c, '#e8b8a0'), { flat: 1 }); c.E(0.5, 0.56, 0.05, 0.022, T(c, '#e0102c'), { flat: 1 }); c.L(0.46, 0.555, 0.54, 0.555, 0.006, T(c, '#a0081c'), { flat: 1 });
        c.E(0.37, 0.52, 0.03, 0.02, T(c, '#ffb0b8'), { flat: 1 }); c.E(0.63, 0.52, 0.03, 0.02, T(c, '#ffb0b8'), { flat: 1 });
        c.E(0.88, 0.90, 0.07, 0.07, T(c, '#e8202c')); c.E(0.86, 0.88, 0.02, 0.02, T(c, '#ff8a8a'), { flat: 1 }); c.L(0.88, 0.84, 0.90, 0.78, 0.01, T(c, '#5a3a1a'), { flat: 1 }); c.P([[0.90, 0.80], [0.96, 0.78], [0.92, 0.84]], T(c, '#2fb050'));
      } },
    { k: 'dwarfhouse', n: 'The Seven Little Beds', fixed: 1, gy: 0.82, lines: ['Seven tiny beds, seven tiny hats and one very big girl who just wanted a nap.', 'Heigh-ho, they say, and everyone goes to work digging for diamonds.'],
      draw: function (c, P, r, o) {
        var g = o.gy, i;
        c.R(0.0, g, 1.0, 1.0, T(c, '#4a8a3a'), { flat: 1 });
        for (i = 0; i < 5; i++) { c.P([[0.0 + i * 0.04, g], [0.02 + i * 0.04, g - 0.10], [0.04 + i * 0.04, g]], T(c, '#2f6a30'), { flat: 1 }); }
        c.R(0.22, g - 0.36, 0.78, g, T(c, '#e8d0a0')); c.R(0.22, g - 0.04, 0.78, g, T(c, '#a8a090'), { flat: 1 }); for (i = 0; i < 7; i++) c.L(0.22, g - 0.34 + i * 0.045, 0.78, g - 0.34 + i * 0.045, 0.006, T(c, '#c8b080'), { flat: 1 });
        c.P([[0.14, g - 0.34], [0.50, g - 0.66], [0.86, g - 0.34]], T(c, '#d8304a')); c.P([[0.20, g - 0.36], [0.50, g - 0.62], [0.80, g - 0.36]], T(c, '#e8505a'), { flat: 1 });
        for (i = 0; i < 6; i++) c.E(0.30 + (i * 0.31 % 0.40), g - 0.40 - (i * 0.17 % 0.18), 0.025, 0.02, P.white, { flat: 1 });
        c.R(0.66, g - 0.66, 0.74, g - 0.46, T(c, '#a8723a')); c.E(0.70, g - 0.72, 0.04, 0.03, P.white, { flat: 1 }); c.E(0.74, g - 0.80, 0.05, 0.04, P.white, { flat: 1 });
        c.E(0.50, g - 0.14, 0.08, 0.14, T(c, '#6a4a2a')); c.R(0.42, g - 0.14, 0.58, g, T(c, '#6a4a2a')); c.dot(0.55, g - 0.10, P.gold, 2); c.E(0.50, g - 0.24, 0.025, 0.025, T(c, '#ff6aa8'), { flat: 1 });
        c.E(0.34, g - 0.22, 0.05, 0.06, T(c, '#ffd88a'), { flat: 1 }); c.E(0.66, g - 0.22, 0.05, 0.06, T(c, '#ffd88a'), { flat: 1 }); c.R(0.28, g - 0.14, 0.40, g - 0.10, T(c, '#a8723a')); c.R(0.60, g - 0.14, 0.72, g - 0.10, T(c, '#a8723a'));
        for (i = 0; i < 3; i++) { c.dot(0.30 + i * 0.04, g - 0.15, c.c('#ff6aa8'), 1); c.dot(0.62 + i * 0.04, g - 0.15, c.c('#ffd23f'), 1); }
        for (i = 0; i < 7; i++) { var x = 0.02 + i * 0.045; c.L(x + 0.02, g + 0.02, x, g + 0.14, 0.01, P.wood, { flat: 1 }); c.L(x - 0.014, g + 0.14, x + 0.03, g + 0.14, 0.012, P.silver, { flat: 1 }); }
        c.P([[0.82, g], [0.90, g - 0.08], [0.98, g]], T(c, '#58d0ff')); c.P([[0.86, g], [0.92, g - 0.12], [0.96, g]], T(c, '#ff6aa8'), { flat: 1 }); spark(c, 0.90, g - 0.14, 0.04, P.glow);
        for (i = 0; i < 4; i++) { c.L(0.80 + i * 0.05, g - 0.02, 0.80 + i * 0.05, g - 0.22 - (i % 2) * 0.04, 0.012, P.leaf, { flat: 1 }); c.E(0.80 + i * 0.05, g - 0.24 - (i % 2) * 0.04, 0.03, 0.03, T(c, '#ffc929'), { flat: 1 }); }
      } },
    { k: 'spinning', n: 'The Spinning Wheel', fixed: 1, gy: 0.9, hy: 0.45, lines: ['One tiny prick, one hundred years and a whole castle that turned into a nap.', 'The roses climbed right up the walls while nobody was looking.'],
      draw: function (c, P, r, o) {
        var i, wood = T(c, '#8a5a2e');
        o.shadow(0.5, 0.92, 0.34, 0.03);
        c.RG(0.40, 0.58, 0.20, 0.26, wood); for (i = 0; i < 8; i++) { var a = i * Math.PI / 4; c.L(0.40, 0.58, 0.40 + Math.cos(a) * 0.23, 0.58 + Math.sin(a) * 0.23, 0.012, wood, { flat: 1 }); }
        c.E(0.40, 0.58, 0.04, 0.04, P.gold); c.L(0.40, 0.58, 0.62, 0.30, 0.016, P.silver, { flat: 1 }); c.P([[0.60, 0.32], [0.70, 0.18], [0.64, 0.34]], P.silver); c.E(0.66, 0.26, 0.012, 0.012, P.ruby, { flat: 1 }); c.E(0.668, 0.254, 0.02, 0.02, P.ruby, { flat: 1 });
        c.L(0.40, 0.82, 0.30, 0.94, 0.03, wood); c.L(0.40, 0.82, 0.54, 0.94, 0.03, wood); c.R(0.38, 0.30, 0.42, 0.84, wood); c.R(0.60, 0.40, 0.66, 0.84, wood); c.E(0.60, 0.40, 0.045, 0.045, wood);
        c.L(0.63, 0.40, 0.70, 0.30, 0.02, wood); c.E(0.70, 0.26, 0.06, 0.05, T(c, '#fff3d0')); c.L(0.66, 0.30, 0.40, 0.58, 0.006, T(c, '#fff3d0'), { flat: 1 });
        c.mir = true; c.L(0.10, 0.94, 0.14, 0.50, 0.014, P.leaf, { flat: 1 }); c.E(0.14, 0.58, 0.04, 0.04, P.red, { flat: 1 }); c.E(0.12, 0.72, 0.035, 0.035, P.pinkS, { flat: 1 }); c.P([[0.14, 0.80], [0.20, 0.74], [0.17, 0.84]], P.leaf, { flat: 1 }); c.mir = false;
        spark(c, 0.50, 0.14, 0.04, P.glow);
      } },
    { k: 'rapunzel', n: 'The Tower and the Braid', fixed: 1, gy: 0.88, lines: ['Let down your hair, said the visitor, and the whole kingdom learned how long a braid can be.', 'A tower with no door, one little window and an extremely well-kept head of hair.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), hair = T(c, '#ffc929'), g = o.gy || 0.9, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.R(0.0, g, 1.0, 1.0, T(c, '#58a84a'), { flat: 1 });
        c.R(0.28, 0.24, 0.64, g, T(c, '#a8a8b8')); for (i = 0; i < 8; i++) { c.L(0.28, 0.30 + i * 0.075, 0.64, 0.30 + i * 0.075, 0.008, T(c, '#7a7a8e'), { flat: 1 }); for (var j = 0; j < 3; j++) c.L(0.34 + j * 0.12 + (i % 2) * 0.06, 0.30 + i * 0.075, 0.34 + j * 0.12 + (i % 2) * 0.06, 0.375 + i * 0.075, 0.008, T(c, '#7a7a8e'), { flat: 1 }); }
        c.R(0.24, 0.20, 0.68, 0.26, T(c, '#8a8a9e')); for (i = 0; i < 5; i++) c.R(0.25 + i * 0.09, 0.16, 0.30 + i * 0.09, 0.20, T(c, '#8a8a9e'), { flat: 1 });
        c.P([[0.22, 0.16], [0.46, -0.04], [0.70, 0.16]], T(c, '#3f9a5a')); c.P([[0.28, 0.16], [0.46, 0.02], [0.64, 0.16]], T(c, '#58b878'), { flat: 1 });
        c.E(0.46, 0.38, 0.12, 0.12, T(c, '#5a3a22')); c.R(0.34, 0.38, 0.58, 0.52, T(c, '#5a3a22')); c.E(0.46, 0.38, 0.09, 0.09, T(c, '#ffe8b0'), { flat: 1 }); c.R(0.37, 0.38, 0.55, 0.50, T(c, '#ffe8b0'), { flat: 1 });
        c.E(0.46, 0.42, 0.065, 0.075, skin); c.E(0.46, 0.36, 0.075, 0.05, hair); c.E(0.38, 0.46, 0.025, 0.06, hair); c.E(0.54, 0.46, 0.025, 0.06, hair);
        c.E(0.435, 0.43, 0.011, 0.014, P.black, { flat: 1 }); c.E(0.485, 0.43, 0.011, 0.014, P.black, { flat: 1 }); c.L(0.44, 0.465, 0.48, 0.465, 0.008, T(c, '#c8405a'), { flat: 1 });
        c.E(0.40, 0.45, 0.014, 0.01, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.52, 0.45, 0.014, 0.01, T(c, '#ff9aa8'), { flat: 1 });
        c.R(0.30, 0.50, 0.62, 0.53, T(c, '#5a3a22'), { flat: 1 });
        var px = [0.52, 0.60, 0.70, 0.76, 0.72, 0.80, 0.88];
        for (i = 0; i < 6; i++) { c.L(px[i], 0.52 + i * 0.07, px[i + 1], 0.52 + (i + 1) * 0.07, 0.05, hair); c.L(px[i], 0.52 + i * 0.07, px[i + 1], 0.52 + (i + 1) * 0.07, 0.012, T(c, '#e0a010'), { flat: 1 }); }
        c.E(0.88, g - 0.02, 0.06, 0.03, hair);
        c.R(0.44, g - 0.20, 0.52, g, T(c, '#5a3a22'), { flat: 1 }); c.E(0.48, g - 0.20, 0.04, 0.04, T(c, '#5a3a22'), { flat: 1 });
        for (i = 0; i < 6; i++) c.E(0.06 + (i * 0.41 % 0.9), g + 0.04 + (i % 2) * 0.04, 0.025, 0.02, T(c, i % 2 ? '#ff6aa8' : '#ffffff'), { flat: 1 });
        spark(c, 0.14, 0.30, 0.04, P.glow); spark(c, 0.90, 0.22, 0.035, P.white);
      } },
    { k: 'redhood', n: 'Little Red Riding Hood', fixed: 1, hy: 0.4, lines: ['What big eyes you have, said the girl, and what a lovely forest, and what a lot of suspicious fur.', 'A basket of cakes and a bright red hood, and a very long way to grandmother s house.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), red = T(c, '#d8202c'), i;
        c.P([[0.04, 1.0], [0.10, 0.70], [0.26, 0.54], [0.74, 0.54], [0.90, 0.70], [0.96, 1.0]], red); c.P([[0.04, 1.0], [0.10, 0.70], [0.22, 0.58], [0.30, 1.0]], T(c, '#f04a52'), { flat: 1 });
        c.L(0.50, 0.66, 0.50, 1.0, 0.016, T(c, '#a8101c'), { flat: 1 }); c.E(0.50, 0.68, 0.045, 0.03, T(c, '#ffd23f')); c.E(0.50, 0.68, 0.02, 0.012, T(c, '#fff4a0'), { flat: 1 });
        c.E(0.5, 0.40, 0.30, 0.34, red); c.E(0.5, 0.26, 0.24, 0.17, T(c, '#f04a52'), { flat: 1 });
        c.E(0.5, 0.44, 0.19, 0.20, skin); c.P([[0.30, 0.30], [0.50, 0.18], [0.70, 0.30], [0.66, 0.34], [0.50, 0.28], [0.34, 0.34]], red);
        c.P([[0.31, 0.34], [0.36, 0.30], [0.50, 0.38], [0.64, 0.30], [0.69, 0.34], [0.50, 0.42]], T(c, '#7a4a28'), { flat: 1 });
        c.E(0.42, 0.45, 0.032, 0.04, P.white, { flat: 1 }); c.E(0.58, 0.45, 0.032, 0.04, P.white, { flat: 1 }); c.E(0.43, 0.46, 0.019, 0.027, T(c, '#2a5a2a'), { flat: 1 }); c.E(0.59, 0.46, 0.019, 0.027, T(c, '#2a5a2a'), { flat: 1 }); c.dot(0.42, 0.44, c.c('#ffffff'), 1); c.dot(0.58, 0.44, c.c('#ffffff'), 1);
        c.L(0.37, 0.39, 0.47, 0.40, 0.012, T(c, '#5a3418'), { flat: 1 }); c.L(0.53, 0.40, 0.63, 0.39, 0.012, T(c, '#5a3418'), { flat: 1 });
        c.E(0.5, 0.52, 0.012, 0.01, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.58, 0.05, 0.02, T(c, '#c8405a'), { flat: 1 }); c.E(0.37, 0.54, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.63, 0.54, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.82, 0.78, 0.13, 0.10, T(c, '#c8903a')); c.R(0.69, 0.78, 0.95, 0.92, T(c, '#c8903a')); for (i = 0; i < 4; i++) c.L(0.70, 0.80 + i * 0.03, 0.94, 0.80 + i * 0.03, 0.01, T(c, '#a87028'), { flat: 1 }); c.R(0.72, 0.82, 0.92, 0.90, T(c, '#fff4e0'), { flat: 1 });
        c.L(0.70, 0.78, 0.76, 0.62, 0.014, T(c, '#a87028')); c.L(0.94, 0.78, 0.88, 0.62, 0.014, T(c, '#a87028')); c.L(0.76, 0.62, 0.88, 0.62, 0.014, T(c, '#a87028'), { flat: 1 });
        c.E(0.12, 0.90, 0.03, 0.03, T(c, '#ff5fa8')); c.E(0.20, 0.94, 0.03, 0.03, T(c, '#ffe040')); c.E(0.06, 0.95, 0.025, 0.025, T(c, '#ffffff'));
      } },
    { k: 'wolf', n: 'The Big Bad Wolf', fixed: 1, hy: 0.4, lines: ['He will huff, he will puff and he has never once blown a house down on a Tuesday.', 'Very sly, very hungry and very bad at hiding behind a bush.'],
      draw: function (c, P, r, o) {
        var gray = T(c, '#7a8396'), lt = T(c, '#c8ccd8'), i;
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.72], [0.20, 0.72]], gray); c.P([[0.34, 1.0], [0.66, 1.0], [0.58, 0.74], [0.42, 0.74]], lt);
        c.mir = true; c.P([[0.34, 0.34], [0.20, 0.08], [0.46, 0.22]], gray); c.P([[0.34, 0.31], [0.25, 0.14], [0.42, 0.22]], P.pinkS, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.46, 0.27, 0.26, gray); for (i = 0; i < 5; i++) c.P([[0.24 - i * 0.01, 0.46 + i * 0.05], [0.18, 0.52 + i * 0.05], [0.28, 0.54 + i * 0.05]], gray);
        c.E(0.5, 0.60, 0.17, 0.13, lt); c.P([[0.42, 0.52], [0.58, 0.52], [0.5, 0.60]], P.black, { flat: 1 });
        c.E(0.5, 0.56, 0.05, 0.035, P.black, { flat: 1 }); c.dot(0.49, 0.55, c.c('#ffffff'), 1);
        c.mir = true; c.E(0.40, 0.42, 0.05, 0.038, P.white, { flat: 1 }); c.E(0.40, 0.42, 0.04, 0.03, T(c, '#ffd23f'), { flat: 1 }); c.E(0.405, 0.42, 0.012, 0.028, P.black, { flat: 1 }); c.L(0.32, 0.35, 0.46, 0.39, 0.02, P.black, { flat: 1 }); c.mir = false;
        c.E(0.5, 0.67, 0.12, 0.05, P.red, { flat: 1 }); c.R(0.38, 0.64, 0.62, 0.66, P.black, { flat: 1 });
        c.mir = true; for (i = 0; i < 3; i++) c.P([[0.40 + i * 0.045, 0.665], [0.43 + i * 0.045, 0.665], [0.415 + i * 0.045, 0.72]], P.white, { flat: 1 }); c.mir = false;
        c.E(0.86, 0.20, 0.06, 0.04, P.white, { flat: 1 }); c.E(0.78, 0.14, 0.04, 0.03, P.white, { flat: 1 }); c.E(0.94, 0.12, 0.035, 0.025, P.white, { flat: 1 });
      } },
    { k: 'pigs', n: 'The Three Little Houses', fixed: 1, gy: 0.8, lines: ['One of straw, one of sticks and one of bricks, and only one of them was still standing in the morning.', 'The pigs have decided that building codes are a good idea.'],
      draw: function (c, P, r, o) {
        var g = o.gy + 0.06, i;
        o.shadow(0.5, g + 0.02, 0.46, 0.03);
        c.R(0.04, g - 0.22, 0.30, g, T(c, '#e8c64a'), { pat: stripe(2) }); c.P([[0.02, g - 0.22], [0.32, g - 0.22], [0.17, g - 0.38]], T(c, '#d6a82a')); for (i = 0; i < 6; i++) c.L(0.05 + i * 0.045, g - 0.22, 0.10 + i * 0.03, g - 0.34, 0.008, T(c, '#a8821a'), { flat: 1 }); c.R(0.13, g - 0.12, 0.21, g, P.wood);
        c.R(0.36, g - 0.28, 0.64, g, T(c, '#8a5a2e')); for (i = 0; i < 6; i++) c.L(0.38 + i * 0.045, g - 0.28, 0.38 + i * 0.045, g, 0.01, T(c, '#5a3a1e'), { flat: 1 }); c.P([[0.34, g - 0.28], [0.66, g - 0.28], [0.50, g - 0.46]], T(c, '#6a4a2a')); c.R(0.45, g - 0.14, 0.55, g, P.wood); c.R(0.38, g - 0.22, 0.44, g - 0.14, P.glow, { flat: 1 });
        c.R(0.70, g - 0.36, 0.96, g, P.red, { pat: o.B }); c.P([[0.68, g - 0.36], [0.98, g - 0.36], [0.83, g - 0.52]], T(c, '#4a4a5c')); c.R(0.88, g - 0.58, 0.93, g - 0.40, P.stoneD); c.R(0.79, g - 0.16, 0.87, g, P.wood); c.R(0.72, g - 0.28, 0.78, g - 0.20, P.glow, { flat: 1 });
        c.E(0.50, g + 0.09, 0.44, 0.03, T(c, '#e8d29a'), { flat: 1 });
        for (i = 0; i < 3; i++) { var x = 0.17 + i * 0.33; c.E(x, g + 0.08, 0.03, 0.025, T(c, '#ffb3c9')); c.dot(x - 0.012, g + 0.075, c.c('#1b1a22'), 1); c.dot(x + 0.012, g + 0.075, c.c('#1b1a22'), 1); }
      } },
    { k: 'porridge', n: 'Three Bowls of Porridge', fixed: 1, gy: 0.9, hy: 0.5, lines: ['Too hot, too cold and just right, and a bed to match, and a very surprised family of bears.', 'Somebody has been eating my porridge, and somebody has left a tiny golden hair.'],
      draw: function (c, P, r, o) {
        var g = o.gy, bowls = [[0.20, 0.17, '#4a78d8'], [0.50, 0.14, '#3fb86a'], [0.79, 0.11, '#e0489a']], i, j;
        c.R(0.0, g - 0.14, 1.0, 1.0, T(c, '#8a5a2e'), { pat: stripe(6) }); c.R(0.0, g - 0.14, 1.0, g - 0.11, T(c, '#a8723a'), { flat: 1 });
        for (i = 0; i < 3; i++) {
          var x = bowls[i][0], rx = bowls[i][1], col = T(c, bowls[i][2]);
          c.E(x, g - 0.02, rx * 0.5, 0.025, col, { flat: 1 }); c.R(x - rx * 0.55, g - 0.12, x + rx * 0.55, g - 0.02, col);
          c.P([[x - rx, g - 0.26], [x + rx, g - 0.26], [x + rx * 0.85, g - 0.10], [x - rx * 0.85, g - 0.10]], col);
          c.E(x, g - 0.26, rx, 0.04, T(c, '#f4efe0'), { flat: 1 }); c.E(x, g - 0.26, rx * 0.84, 0.028, T(c, '#e6c98a'), { flat: 1 });
          c.E(x, g - 0.285, rx * 0.5, 0.03, T(c, '#e6c98a')); for (j = 0; j < 4; j++) c.dot(x - rx * 0.4 + j * rx * 0.26, g - 0.27, c.c('#b8923a'), 1);
          c.L(x + rx * 0.3, g - 0.28, x + rx * 1.1, g - 0.46, 0.014, P.silver, { flat: 1 });
          for (j = 0; j < 3; j++) { var yy = g - 0.34 - j * 0.09; c.E(x - 0.02 + (j % 2) * 0.04, yy, 0.03 - j * 0.004, 0.022, T(c, '#ffffff'), { flat: 1 }); }
        }
        spark(c, 0.36, g - 0.62, 0.035, P.glow); spark(c, 0.66, g - 0.60, 0.03, P.glow);
      } },
    { k: 'trail', n: 'The Crumb Trail', fixed: 1, gy: 0.56, lines: ['Two children, one trail of breadcrumbs and a lot of hungry birds with excellent timing.', 'Follow the pebbles home, if you can find them.'],
      draw: function (c, P, r, o) {
        var g = o.gy, i;
        c.R(0.0, g, 1.0, 1.0, T(c, '#4a6a3a'), { flat: 1 });
        c.P([[0.45, g], [0.56, g], [0.92, 1.0], [0.20, 1.0]], T(c, '#c8a870'));
        for (i = 0; i < 6; i++) { var y = g + 0.06 + i * 0.07, w = 0.04 + i * 0.05; c.E(0.50 + (i * 0.03), y, w, 0.012, T(c, '#a88850'), { flat: 1 }); }
        var tx = [0.04, 0.16, 0.30, 0.74, 0.88, 0.97];
        for (i = 0; i < 6; i++) { var h = 0.30 + (i % 3) * 0.12, w = 0.03 + (i % 2) * 0.014; var tt = T(c, i % 2 ? '#5a3a22' : '#6a4a2c'); c.R(tx[i] - w, g - h * 0.6, tx[i] + w, g + 0.04 + (i % 3) * 0.06, tt); c.E(tx[i], g - h * 0.7, 0.10, 0.12, T(c, i % 2 ? '#2f7a3a' : '#3f9a48')); c.E(tx[i] - 0.03, g - h * 0.9, 0.07, 0.08, T(c, '#58b84a')); }
        c.R(0.48, g - 0.08, 0.57, g, T(c, '#9a5a2a')); c.P([[0.46, g - 0.08], [0.525, g - 0.15], [0.59, g - 0.08]], T(c, '#f4efe0')); c.dot(0.50, g - 0.04, c.c('#ff5a8a'), 1); c.dot(0.55, g - 0.05, c.c('#58d0ff'), 1); c.R(0.51, g - 0.04, 0.54, g, T(c, '#5a3a1e'), { flat: 1 });
        for (i = 0; i < 12; i++) { var t = i / 12, y = g + 0.04 + t * (0.96 - g), x = 0.505 + t * 0.20 + (i % 2) * 0.03; c.dot(x, y, c.c('#fff6dc'), 1 + (t > 0.5 ? 1 : 0)); }
        c.E(0.30, 0.82, 0.07, 0.05, T(c, '#4a8ae0')); c.E(0.24, 0.79, 0.04, 0.035, T(c, '#4a8ae0')); c.P([[0.20, 0.79], [0.16, 0.80], [0.20, 0.82]], T(c, '#ffb000'), { flat: 1 }); c.dot(0.23, 0.78, c.c('#14102a'), 1); c.L(0.36, 0.84, 0.44, 0.86, 0.016, T(c, '#2a5ab8'), { flat: 1 }); c.E(0.30, 0.82, 0.04, 0.025, T(c, '#2a5ab8'), { flat: 1 });
        c.E(0.78, 0.76, 0.05, 0.035, T(c, '#4a8ae0')); c.E(0.74, 0.74, 0.03, 0.025, T(c, '#4a8ae0')); c.P([[0.71, 0.74], [0.68, 0.75], [0.71, 0.77]], T(c, '#ffb000'), { flat: 1 }); c.dot(0.73, 0.73, c.c('#14102a'), 1);
      } },
    { k: 'giantcastle', n: 'The Castle in the Clouds', fixed: 1, float: 1, sh: 0.0, gy: 0.9, lines: ['Fee, fi, fo, fum, and a very long climb up a very green beanstalk.', 'The giant s house is huge, the harp is singing and the goose is laying.'],
      draw: function (c, P, r, o) {
        var cl = T(c, '#ffffff'), i;
        c.E(0.5, 0.76, 0.50, 0.14, cl); c.E(0.18, 0.72, 0.18, 0.12, cl); c.E(0.82, 0.72, 0.20, 0.12, cl); c.E(0.5, 0.86, 0.40, 0.10, T(c, '#dfe9f8'), { flat: 1 }); c.E(0.30, 0.64, 0.10, 0.08, T(c, '#ffffff'));
        c.mir = true; c.R(0.20, 0.30, 0.36, 0.72, P.stone, { pat: o.B }); c.R(0.18, 0.26, 0.38, 0.32, P.stoneD); c.P([[0.16, 0.26], [0.40, 0.26], [0.28, 0.10]], P.a); c.R(0.265, 0.40, 0.295, 0.48, P.glow, { flat: 1 }); c.mir = false;
        c.R(0.36, 0.20, 0.64, 0.72, P.stone, { pat: o.B }); c.R(0.33, 0.15, 0.67, 0.22, P.stoneD); for (i = 0; i < 5; i++) c.R(0.34 + i * 0.07, 0.10, 0.38 + i * 0.07, 0.15, P.stone);
        c.P([[0.30, 0.10], [0.70, 0.10], [0.5, -0.04]], P.b); c.R(0.46, 0.32, 0.54, 0.44, P.glow, { flat: 1 }); c.DM(0.5, 0.32, 0.04, 0.03, P.glow, { flat: 1 }); c.R(0.44, 0.58, 0.56, 0.72, P.wood); c.DM(0.5, 0.58, 0.06, 0.05, P.wood);
        c.L(0.52, 0.82, 0.40, 1.0, 0.04, P.leaf); c.P([[0.48, 0.90], [0.34, 0.86], [0.42, 0.96]], P.leaf, { flat: 1 }); c.P([[0.46, 0.96], [0.60, 0.92], [0.54, 1.0]], P.leaf, { flat: 1 });
        c.E(0.78, 0.66, 0.06, 0.045, P.gold); c.E(0.84, 0.60, 0.03, 0.03, P.gold); c.P([[0.86, 0.60], [0.92, 0.62], [0.86, 0.64]], T(c, '#ff7a1a'), { flat: 1 }); c.dot(0.845, 0.595, c.c('#1b1a22'), 1); c.E(0.70, 0.70, 0.02, 0.026, P.white, { flat: 1 }); c.E(0.70, 0.70, 0.012, 0.016, P.gold, { flat: 1 });
        spark(c, 0.12, 0.22, 0.04, P.glow); spark(c, 0.88, 0.30, 0.04, P.white);
      } },
    { k: 'goose', n: 'The Golden Goose', fixed: 1, gy: 0.88, lines: ['One goose, one nest and eggs that are gold all the way through, and a lot of very greedy visitors.', 'She is not a bit impressed with the attention.'],
      draw: function (c, P, r, o) {
        var g = T(c, '#ffcc33'), i;
        o.shadow(0.5, 0.92, 0.36, 0.03);
        c.E(0.5, 0.84, 0.34, 0.08, P.wood); c.E(0.5, 0.82, 0.30, 0.05, T(c, '#d6a05a'), { flat: 1 }); for (i = 0; i < 5; i++) c.E(0.28 + i * 0.11, 0.80 + (i % 2) * 0.02, 0.05, 0.065, P.gold);
        c.E(0.46, 0.56, 0.28, 0.20, g); c.P([[0.70, 0.52], [0.90, 0.42], [0.84, 0.62], [0.72, 0.66]], T(c, '#ffe27a')); c.E(0.46, 0.62, 0.18, 0.09, T(c, '#fff3b8'), { flat: 1 });
        c.P([[0.30, 0.50], [0.52, 0.46], [0.56, 0.58], [0.42, 0.66], [0.28, 0.60]], T(c, '#e8a818'));
        c.L(0.28, 0.44, 0.22, 0.26, 0.06, g); c.E(0.22, 0.20, 0.09, 0.08, g); c.P([[0.14, 0.18], [0.04, 0.22], [0.14, 0.26]], T(c, '#ff7a1a')); c.dot(0.22, 0.18, c.c('#1b1a22'), 2); c.dot(0.215, 0.175, c.c('#ffffff'), 1);
        c.L(0.40, 0.72, 0.40, 0.88, 0.02, T(c, '#ff7a1a'), { flat: 1 }); c.L(0.52, 0.72, 0.52, 0.88, 0.02, T(c, '#ff7a1a'), { flat: 1 });
        spark(c, 0.14, 0.46, 0.05, P.white); spark(c, 0.86, 0.30, 0.05, P.glow); spark(c, 0.60, 0.20, 0.035, P.white); spark(c, 0.12, 0.72, 0.03, P.glow);
      } },
    { k: 'puss', n: 'Puss in Boots', fixed: 1, hy: 0.4, lines: ['A cat, a hat, a feather and a very persuasive way of talking to kings.', 'He bows, he schemes and he has never once lost a pair of boots.'],
      draw: function (c, P, r, o) {
        var fur = T(c, '#f0922a'), furL = T(c, '#ffe0b0'), i;
        c.P([[0.06, 1.0], [0.94, 1.0], [0.82, 0.68], [0.18, 0.68]], T(c, '#d8304a'));
        c.P([[0.18, 1.0], [0.34, 1.0], [0.40, 0.70], [0.26, 0.70]], T(c, '#a8102a'));
        for (i = 0; i < 3; i++) c.dot(0.56 + i * 0.10, 0.80, P.gold, 2);
        c.P([[0.34, 0.68], [0.50, 0.80], [0.66, 0.68]], T(c, '#f4efe0'));
        c.P([[0.26, 0.36], [0.22, 0.14], [0.40, 0.26]], fur); c.P([[0.74, 0.36], [0.78, 0.14], [0.60, 0.26]], fur); c.P([[0.28, 0.32], [0.26, 0.20], [0.36, 0.28]], T(c, '#ff9aa8'), { flat: 1 }); c.P([[0.72, 0.32], [0.74, 0.20], [0.64, 0.28]], T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.5, 0.46, 0.25, 0.24, fur); c.E(0.5, 0.56, 0.14, 0.11, furL);
        for (i = 0; i < 3; i++) { c.L(0.34 + i * 0.03, 0.30, 0.38 + i * 0.03, 0.38, 0.01, T(c, '#c8661a'), { flat: 1 }); c.L(0.66 - i * 0.03, 0.30, 0.62 - i * 0.03, 0.38, 0.01, T(c, '#c8661a'), { flat: 1 }); }
        c.E(0.5, 0.20, 0.30, 0.04, T(c, '#2a4ab8')); c.P([[0.34, 0.20], [0.38, 0.08], [0.62, 0.08], [0.66, 0.20]], T(c, '#3a5ad8')); c.R(0.34, 0.15, 0.66, 0.19, T(c, '#ffd23f'), { flat: 1 });
        c.P([[0.60, 0.10], [0.86, 0.0], [0.92, 0.04], [0.78, 0.12], [0.64, 0.16]], P.white); c.L(0.64, 0.12, 0.88, 0.02, 0.008, T(c, '#c8d0e0'), { flat: 1 });
        c.E(0.40, 0.42, 0.06, 0.06, T(c, '#58d868')); c.E(0.60, 0.42, 0.06, 0.06, T(c, '#58d868')); c.E(0.40, 0.42, 0.014, 0.05, P.black, { flat: 1 }); c.E(0.60, 0.42, 0.014, 0.05, P.black, { flat: 1 }); c.dot(0.385, 0.40, P.white, 1); c.dot(0.585, 0.40, P.white, 1);
        c.L(0.33, 0.36, 0.46, 0.37, 0.016, T(c, '#c8661a'), { flat: 1 });
        c.P([[0.47, 0.49], [0.53, 0.49], [0.50, 0.53]], T(c, '#ff7a9a')); c.L(0.50, 0.53, 0.50, 0.56, 0.008, P.black, { flat: 1 }); c.L(0.50, 0.56, 0.45, 0.58, 0.01, P.black, { flat: 1 }); c.L(0.50, 0.56, 0.55, 0.58, 0.01, P.black, { flat: 1 });
        for (i = 0; i < 3; i++) { c.L(0.40, 0.53 + i * 0.02, 0.14, 0.50 + i * 0.05, 0.008, P.white, { flat: 1 }); c.L(0.60, 0.53 + i * 0.02, 0.86, 0.50 + i * 0.05, 0.008, P.white, { flat: 1 }); }
        spark(c, 0.10, 0.30, 0.04, P.glow);
      } },
    { k: 'pinocchio', n: 'Pinocchio', fixed: 1, hy: 0.4, lines: ['Made of wood, longing to be real and sure that every little lie can only grow a little.', 'His nose is the most honest thing about him.'],
      draw: function (c, P, r, o) {
        var wd = T(c, '#e8b068'), i;
        function eye(x, y) { c.E(x, y, 0.036, 0.042, P.white, { flat: 1 }); c.E(x + 0.002, y + 0.004, 0.022, 0.03, c.c('#2a4a9a'), { flat: 1 }); c.dot(x - 0.005, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.08, 1.0], [0.14, 0.72], [0.30, 0.64], [0.70, 0.64], [0.86, 0.72], [0.92, 1.0]], T(c, '#ffd23f')); c.P([[0.08, 1.0], [0.14, 0.72], [0.24, 0.68], [0.30, 1.0]], T(c, '#ffe880'), { flat: 1 });
        c.P([[0.30, 0.64], [0.50, 0.86], [0.70, 0.64], [0.64, 0.62], [0.50, 0.74], [0.36, 0.62]], T(c, '#ffffff')); c.P([[0.42, 0.70], [0.50, 0.78], [0.58, 0.70], [0.54, 0.80], [0.50, 0.92], [0.46, 0.80]], T(c, '#2a5ad8'));
        c.R(0.40, 0.76, 0.46, 1.0, T(c, '#2a5ad8'), { flat: 1 }); c.R(0.54, 0.76, 0.60, 1.0, T(c, '#2a5ad8'), { flat: 1 });
        c.R(0.44, 0.54, 0.56, 0.66, wd); for (i = 0; i < 3; i++) c.L(0.44, 0.57 + i * 0.03, 0.56, 0.57 + i * 0.03, 0.006, T(c, '#c8883a'), { flat: 1 });
        c.E(0.5, 0.40, 0.20, 0.22, wd); c.L(0.34, 0.30, 0.66, 0.30, 0.0, wd, { flat: 1 }); for (i = 0; i < 5; i++) c.L(0.32, 0.34 + i * 0.05, 0.40, 0.34 + i * 0.05, 0.006, T(c, '#c8883a'), { flat: 1 });
        c.E(0.30, 0.42, 0.04, 0.06, wd); c.E(0.70, 0.42, 0.04, 0.06, wd); c.E(0.30, 0.42, 0.018, 0.035, T(c, '#c8883a'), { flat: 1 }); c.E(0.70, 0.42, 0.018, 0.035, T(c, '#c8883a'), { flat: 1 });
        c.P([[0.32, 0.34], [0.34, 0.22], [0.46, 0.20], [0.50, 0.26], [0.54, 0.20], [0.66, 0.22], [0.68, 0.34], [0.60, 0.28], [0.50, 0.30], [0.40, 0.28]], T(c, '#8a4a20'));
        c.P([[0.62, 0.20], [0.66, 0.08], [0.84, 0.0], [0.80, 0.14], [0.70, 0.22]], T(c, '#e8202c')); c.P([[0.34, 0.22], [0.40, 0.08], [0.60, 0.10], [0.66, 0.22]], T(c, '#2fa850')); c.R(0.34, 0.20, 0.66, 0.24, T(c, '#1a7a3a'), { flat: 1 });
        eye(0.42, 0.40); eye(0.58, 0.40); c.L(0.36, 0.34, 0.46, 0.35, 0.014, T(c, '#8a4a20'), { flat: 1 }); c.L(0.54, 0.35, 0.64, 0.34, 0.014, T(c, '#8a4a20'), { flat: 1 });
        c.P([[0.48, 0.44], [0.52, 0.44], [0.86, 0.50], [0.84, 0.54], [0.50, 0.50]], wd); c.L(0.52, 0.47, 0.84, 0.51, 0.008, T(c, '#c8883a'), { flat: 1 }); c.E(0.88, 0.50, 0.03, 0.035, T(c, '#c8883a'), { flat: 1 }); c.P([[0.78, 0.50], [0.84, 0.40], [0.88, 0.44]], T(c, '#3a9a3a')); c.E(0.84, 0.40, 0.02, 0.015, T(c, '#5ac85a'), { flat: 1 });
        c.E(0.5, 0.56, 0.06, 0.022, T(c, '#c8405a'), { flat: 1 }); c.E(0.36, 0.50, 0.03, 0.02, T(c, '#ff9a6a'), { flat: 1 });
      } },
    { k: 'swan', n: 'The Swan', fixed: 1, gy: 0.58, lines: ['Once an ugly duckling, now the most elegant bird on the pond, and the only one who never forgot.', 'She glides, she glows and her reflection is just as lovely.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#fdfdff'), pond = T(c, '#58b8ff');
        c.R(0.0, 0.58, 1.0, 1.0, pond, { flat: 1 }); for (var i = 0; i < 6; i++) c.E(0.2 + (i % 3) * 0.3, 0.66 + i * 0.05, 0.14, 0.012, T(c, '#a8d8ff'), { flat: 1 });
        c.E(0.5, 0.88, 0.22, 0.05, T(c, '#cfe6ff'), { flat: 1 }); c.E(0.5, 0.80, 0.10, 0.10, T(c, '#cfe6ff'), { flat: 1 });
        c.E(0.50, 0.66, 0.30, 0.15, w); c.P([[0.70, 0.62], [0.96, 0.50], [0.82, 0.70]], w); c.E(0.46, 0.66, 0.18, 0.09, T(c, '#e8f0ff'), { flat: 1 }); c.P([[0.30, 0.60], [0.56, 0.52], [0.60, 0.66], [0.40, 0.72]], T(c, '#f0f4ff'));
        c.L(0.28, 0.64, 0.24, 0.48, 0.05, w); c.L(0.24, 0.48, 0.30, 0.34, 0.045, w); c.L(0.30, 0.34, 0.26, 0.22, 0.045, w); c.E(0.26, 0.18, 0.06, 0.055, w);
        c.P([[0.20, 0.18], [0.10, 0.22], [0.20, 0.24]], T(c, '#ff7a1a')); c.E(0.215, 0.16, 0.03, 0.02, P.black, { flat: 1 }); c.dot(0.27, 0.165, c.c('#1b1a22'), 2);
        spark(c, 0.14, 0.40, 0.04, P.white); spark(c, 0.84, 0.20, 0.04, P.glow);
      } },
    { k: 'thumbelina', n: 'Thumbelina', fixed: 1, gy: 0.9, lines: ['She was no bigger than a thumb, so a tulip was the perfect bed.', 'The swallow knows where the warm country is, and she knows how to hold on.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f8d4ae'), hair = T(c, '#f4cc58'), pink = T(c, '#ff6aa8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.L(0.50, 1.0, 0.50, 0.80, 0.04, T(c, '#3f9a3a')); c.P([[0.50, 0.94], [0.20, 0.84], [0.30, 0.92]], T(c, '#58b84a')); c.P([[0.50, 0.90], [0.80, 0.80], [0.70, 0.90]], T(c, '#58b84a'));
        c.P([[0.14, 0.34], [0.10, 0.74], [0.50, 0.90], [0.50, 0.40]], T(c, '#e0488e')); c.P([[0.86, 0.34], [0.90, 0.74], [0.50, 0.90], [0.50, 0.40]], T(c, '#e0488e'));
        c.RE(0.28, 0.40, 0.20, 0.10, -0.7, T(c, '#fff2fc'), { flat: 1 }); c.RE(0.72, 0.40, 0.20, 0.10, 0.7, T(c, '#fff2fc'), { flat: 1 });
        c.P([[0.30, 0.14], [0.36, 0.06], [0.50, 0.10], [0.50, 0.40], [0.30, 0.40]], hair); c.P([[0.70, 0.14], [0.64, 0.06], [0.50, 0.10], [0.50, 0.40], [0.70, 0.40]], hair);
        c.E(0.32, 0.38, 0.06, 0.16, hair); c.E(0.68, 0.38, 0.06, 0.16, hair);
        c.P([[0.30, 0.74], [0.70, 0.74], [0.62, 0.52], [0.38, 0.52]], T(c, '#a8f0c8')); c.P([[0.38, 0.52], [0.50, 0.60], [0.62, 0.52]], P.white);
        c.R(0.45, 0.46, 0.55, 0.54, skin);
        c.E(0.5, 0.34, 0.15, 0.17, skin);
        c.P([[0.34, 0.28], [0.40, 0.18], [0.50, 0.24], [0.60, 0.18], [0.66, 0.28], [0.58, 0.24], [0.50, 0.30], [0.42, 0.24]], hair);
        for (i = 0; i < 5; i++) c.E(0.36 + i * 0.07, 0.16 - (i === 2 ? 0.03 : (i % 2) * 0.01), 0.026, 0.026, i % 2 ? T(c, '#ff6aa8') : T(c, '#ffffff'), { flat: 1 });
        eye(0.44, 0.35, 1.2); eye(0.56, 0.35, 1.2); c.L(0.40, 0.30, 0.47, 0.31, 0.01, T(c, '#c8982a'), { flat: 1 }); c.L(0.53, 0.31, 0.60, 0.30, 0.01, T(c, '#c8982a'), { flat: 1 });
        c.E(0.5, 0.41, 0.012, 0.01, T(c, '#e0a07a'), { flat: 1 }); c.E(0.5, 0.45, 0.035, 0.018, T(c, '#c8405a'), { flat: 1 });
        c.E(0.38, 0.42, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.62, 0.42, 0.025, 0.016, T(c, '#ff9aa8'), { flat: 1 });
        c.P([[0.12, 0.40], [0.14, 0.06], [0.28, 0.30]], pink); c.P([[0.88, 0.40], [0.86, 0.06], [0.72, 0.30]], pink); c.P([[0.12, 0.60], [0.50, 0.96], [0.50, 0.74], [0.34, 0.66]], T(c, '#ff4a9a')); c.P([[0.88, 0.60], [0.50, 0.96], [0.50, 0.74], [0.66, 0.66]], T(c, '#ff4a9a'));
        spark(c, 0.06, 0.20, 0.04, P.glow); spark(c, 0.94, 0.54, 0.035, P.white);
      } },
    { k: 'pea', n: 'The Princess and the Pea', fixed: 1, gy: 0.92, lines: ['Twenty mattresses and twenty feather beds, and she still felt that tiny little pea.', 'Only a real princess could be so very sensitive to peas.'],
      draw: function (c, P, r, o) {
        var i, cols = [P.a, P.b, P.gold, P.green, T(c, '#2d6fe0'), T(c, '#ff7a1a'), T(c, '#c2185b'), T(c, '#17a39f'), P.a, P.b];
        c.R(0.14, 0.30, 0.20, 0.92, P.wood); c.R(0.80, 0.30, 0.86, 0.92, P.wood); c.E(0.17, 0.28, 0.05, 0.04, P.gold); c.E(0.83, 0.28, 0.05, 0.04, P.gold);
        c.R(0.10, 0.88, 0.90, 0.94, P.wood); o.shadow(0.5, 0.96, 0.42, 0.02);
        for (i = 0; i < 10; i++) { var y = 0.82 - i * 0.056, w = 0.30 + ((i * 7) % 3) * 0.015 - i * 0.001; c.R(0.50 - w, y, 0.50 + w, y + 0.06, cols[i]); c.E(0.50 - w, y + 0.03, 0.01, 0.03, cols[i]); c.E(0.50 + w, y + 0.03, 0.01, 0.03, cols[i]); c.R(0.50 - w + 0.02, y + 0.02, 0.50 + w - 0.02, y + 0.024, P.white, { flat: 1 }); }
        c.E(0.50, 0.855, 0.025, 0.025, P.leaf, { flat: 1 }); c.dot(0.495, 0.85, c.c('#c8f0a0'), 1);
        c.E(0.5, 0.22, 0.11, 0.045, P.red); c.R(0.40, 0.14, 0.60, 0.22, P.red); c.P([[0.40, 0.14], [0.45, 0.04], [0.50, 0.12], [0.55, 0.04], [0.60, 0.14]], P.gold); c.E(0.5, 0.17, 0.02, 0.02, P.white, { flat: 1 });
        spark(c, 0.30, 0.12, 0.04, P.glow); spark(c, 0.72, 0.16, 0.04, P.white);
      } },
    { k: 'piper', n: 'The Pied Piper', fixed: 1, gy: 0.9, lines: ['One flute, one cloak of two colors and every rat in town following in perfect time.', 'The mayor should have paid him, and the music is not yet over.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f0c8a0'), i;
        o.shadow(0.5, 0.94, 0.48, 0.03);
        for (i = 0; i < 5; i++) { var x = 0.06 + i * 0.07, s = 1 - i * 0.12; c.E(x, 0.92, 0.06 * s, 0.04 * s, T(c, '#8a7a6a')); c.E(x - 0.04 * s, 0.88, 0.02 * s, 0.02 * s, T(c, '#8a7a6a')); c.dot(x - 0.03 * s, 0.91, c.c('#111111'), 1); c.L(x + 0.05 * s, 0.93, x + 0.10 * s, 0.9 - i * 0.01, 0.01, T(c, '#c88a8a'), { flat: 1 }); }
        c.P([[0.30, 0.94], [0.34, 0.50], [0.52, 0.42], [0.74, 0.50], [0.80, 0.94]], T(c, '#e8202c')); c.P([[0.52, 0.42], [0.74, 0.50], [0.80, 0.94], [0.56, 0.94]], T(c, '#ffd23f'));
        c.L(0.52, 0.44, 0.56, 0.94, 0.01, T(c, '#a8101c'), { flat: 1 });
        c.R(0.36, 0.86, 0.46, 0.96, T(c, '#4a2a14')); c.R(0.62, 0.86, 0.72, 0.96, T(c, '#4a2a14'));
        c.E(0.56, 0.34, 0.14, 0.15, skin); c.P([[0.46, 0.32], [0.52, 0.18], [0.68, 0.18], [0.72, 0.32], [0.66, 0.26], [0.52, 0.26]], T(c, '#c8602a'));
        c.P([[0.42, 0.24], [0.50, 0.08], [0.64, 0.02], [0.80, 0.06], [0.70, 0.12], [0.64, 0.20], [0.50, 0.24]], T(c, '#2fa850')); c.P([[0.64, 0.02], [0.80, 0.06], [0.96, 0.0], [0.82, 0.10]], T(c, '#e8202c'));
        c.E(0.62, 0.34, 0.024, 0.03, P.white, { flat: 1 }); c.dot(0.63, 0.35, c.c('#2a3a2a'), 2); c.L(0.56, 0.30, 0.66, 0.30, 0.012, T(c, '#a05a20'), { flat: 1 });
        c.E(0.62, 0.43, 0.025, 0.015, T(c, '#c8405a'), { flat: 1 });
        c.L(0.34, 0.60, 0.62, 0.42, 0.024, T(c, '#e8c880')); c.E(0.64, 0.42, 0.03, 0.03, T(c, '#f4d890')); for (i = 0; i < 4; i++) c.dot(0.40 + i * 0.05, 0.57 - i * 0.03, c.c('#8a5a1a'), 1);
        c.E(0.30, 0.62, 0.05, 0.04, skin);
        K.spark(c, 0.20, 0.30, 0.05, T(c, '#fff4a0')); c.E(0.10, 0.20, 0.02, 0.03, T(c, '#c890ff')); c.L(0.12, 0.20, 0.12, 0.10, 0.008, T(c, '#c890ff'), { flat: 1 }); c.E(0.22, 0.12, 0.02, 0.03, T(c, '#ffd23f')); c.L(0.24, 0.12, 0.24, 0.02, 0.008, T(c, '#ffd23f'), { flat: 1 });
      } },
    { k: 'rumpel', n: 'Rumpelstiltskin', fixed: 1, gy: 0.86, lines: ['Guess my name, said the little man, dancing around the fire, and nobody did, for three whole days.', 'He spins straw into gold and he is very particular about the price.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e8b890'), org = T(c, '#e8761a'), g = o.gy, i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        o.shadow(0.5, g + 0.03, 0.30, 0.03);
        c.E(0.78, g - 0.06, 0.12, 0.04, T(c, '#3a3a48')); c.P([[0.66, g - 0.06], [0.90, g - 0.06], [0.86, g - 0.14], [0.70, g - 0.14]], T(c, '#3a3a48'));
        c.P([[0.72, g - 0.12], [0.76, g - 0.30], [0.80, g - 0.18], [0.84, g - 0.36], [0.88, g - 0.12]], T(c, '#ff7a1a'), { flat: 1 }); c.P([[0.76, g - 0.12], [0.80, g - 0.24], [0.84, g - 0.12]], T(c, '#ffd23f'), { flat: 1 });
        c.L(0.40, g - 0.30, 0.34, g, 0.05, T(c, '#4a3a2e')); c.L(0.60, g - 0.30, 0.64, g, 0.05, T(c, '#4a3a2e')); c.E(0.31, g + 0.01, 0.06, 0.025, T(c, '#2a1a14')); c.E(0.67, g + 0.01, 0.06, 0.025, T(c, '#2a1a14'));
        c.P([[0.34, g - 0.28], [0.66, g - 0.28], [0.62, g - 0.52], [0.38, g - 0.52]], org); c.L(0.34, g - 0.46, 0.14, g - 0.64, 0.06, org); c.L(0.66, g - 0.46, 0.86, g - 0.64, 0.06, org);
        c.E(0.12, g - 0.66, 0.04, 0.035, skin); c.E(0.88, g - 0.66, 0.04, 0.035, skin); c.R(0.34, g - 0.36, 0.66, g - 0.32, T(c, '#8a4a1e'), { flat: 1 }); c.dot(0.50, g - 0.34, P.gold, 2);
        c.E(0.5, g - 0.64, 0.14, 0.14, skin); c.E(0.35, g - 0.64, 0.025, 0.045, skin); c.E(0.65, g - 0.64, 0.025, 0.045, skin);
        c.P([[0.34, g - 0.68], [0.50, g - 0.98], [0.66, g - 0.68], [0.50, g - 0.74]], org); c.E(0.5, g - 0.70, 0.17, 0.03, T(c, '#c85a12'), { flat: 1 });
        c.P([[0.38, g - 0.56], [0.50, g - 0.40], [0.62, g - 0.56], [0.50, g - 0.52]], T(c, '#f0f0f8'));
        eye(0.45, g - 0.65, 1.1); eye(0.55, g - 0.65, 1.1); c.L(0.40, g - 0.70, 0.48, g - 0.68, 0.016, P.black, { flat: 1 }); c.L(0.52, g - 0.68, 0.60, g - 0.70, 0.016, P.black, { flat: 1 });
        c.E(0.5, g - 0.60, 0.016, 0.014, T(c, '#e0a07a'), { flat: 1 });
        for (i = 0; i < 5; i++) c.dot(0.08 + i * 0.06, g - 0.06 - (i % 2) * 0.03, c.c('#ffd23f'), 2);
        spark(c, 0.14, g - 0.30, 0.035, P.glow);
      } },
    { k: 'frogprince', n: 'The Frog and the Golden Ball', fixed: 1, gy: 0.58, lines: ['A golden ball, a deep pond, a polite frog and a promise made in a hurry.', 'Somewhere under the green there is a prince, and he is not a very good swimmer.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#4fc84a'), pond = T(c, '#58b8c8'), i;
        c.R(0.0, 0.56, 1.0, 1.0, pond, { flat: 1 }); for (i = 0; i < 6; i++) c.E(0.16 + (i % 3) * 0.3, 0.70 + i * 0.05, 0.14, 0.012, T(c, '#a8e0f0'), { flat: 1 });
        c.E(0.50, 0.80, 0.34, 0.08, T(c, '#2f9a3a')); c.P([[0.50, 0.80], [0.84, 0.76], [0.80, 0.82]], pond, { flat: 1 }); c.E(0.50, 0.78, 0.30, 0.05, T(c, '#58c850'), { flat: 1 });
        c.E(0.50, 0.58, 0.20, 0.14, gr); c.E(0.50, 0.68, 0.12, 0.06, T(c, '#c8f080'), { flat: 1 }); c.mir = true; c.E(0.36, 0.72, 0.09, 0.05, gr); c.E(0.30, 0.78, 0.06, 0.025, gr); c.mir = false;
        c.mir = true; c.E(0.40, 0.44, 0.065, 0.065, gr); c.E(0.40, 0.44, 0.045, 0.045, P.white, { flat: 1 }); c.E(0.40, 0.45, 0.026, 0.03, P.black, { flat: 1 }); c.mir = false;
        c.E(0.50, 0.52, 0.16, 0.08, gr); c.L(0.40, 0.56, 0.60, 0.56, 0.01, T(c, '#2a6a20'), { flat: 1 });
        c.P([[0.42, 0.40], [0.58, 0.40], [0.56, 0.32], [0.54, 0.36], [0.50, 0.28], [0.46, 0.36], [0.44, 0.32]], P.gold); c.E(0.50, 0.30, 0.014, 0.014, P.ruby, { flat: 1 });
        c.E(0.84, 0.46, 0.10, 0.10, P.gold); c.E(0.81, 0.43, 0.025, 0.04, P.white, { flat: 1 }); c.E(0.86, 0.50, 0.05, 0.03, T(c, '#e8a818'), { flat: 1 });
        c.mir = true; c.L(0.08, 0.60, 0.10, 0.30, 0.012, P.leaf, { flat: 1 }); c.E(0.10, 0.28, 0.025, 0.04, T(c, '#8a5a2e')); c.mir = false;
        spark(c, 0.76, 0.24, 0.04, P.white);
      } },
    { k: 'snowqueen', n: 'The Ice Palace', fixed: 1, gy: 0.86, hy: 0.4, lines: ['A palace of ice, a heart of ice and a little splinter of a mirror in someone s eye.', 'Every wall is a window and every window is cold.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#e8f4ff'), ice = T(c, '#8ad8f8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        for (i = 0; i < 12; i++) c.dot(0.06 + (i * 0.37 % 0.9), 0.06 + (i * 0.29 % 0.9), c.c('#ffffff'), 1 + (i % 2));
        c.P([[0.04, 1.0], [0.96, 1.0], [0.84, 0.68], [0.16, 0.68]], T(c, '#4a8ae0'));
        c.P([[0.04, 1.0], [0.20, 1.0], [0.30, 0.70], [0.16, 0.68]], P.white); c.P([[0.96, 1.0], [0.80, 1.0], [0.70, 0.70], [0.84, 0.68]], P.white);
        for (i = 0; i < 6; i++) c.dot(0.30 + i * 0.08, 0.80 + (i % 2) * 0.08, c.c('#ffffff'), 2);
        c.R(0.44, 0.56, 0.56, 0.68, skin);
        c.E(0.5, 0.42, 0.17, 0.20, skin);
        c.E(0.5, 0.28, 0.21, 0.12, T(c, '#e8f0ff')); c.P([[0.30, 0.30], [0.26, 0.64], [0.34, 0.56]], T(c, '#e8f0ff')); c.P([[0.70, 0.30], [0.74, 0.64], [0.66, 0.56]], T(c, '#e8f0ff'));
        c.P([[0.30, 0.26], [0.30, 0.08], [0.38, 0.18], [0.44, 0.0], [0.50, 0.14], [0.56, 0.0], [0.62, 0.18], [0.70, 0.08], [0.70, 0.26]], ice); c.R(0.30, 0.22, 0.70, 0.27, T(c, '#5ab8e8'), { flat: 1 });
        c.P([[0.44, 0.0], [0.47, 0.10], [0.42, 0.08]], P.white, { flat: 1 }); c.dot(0.50, 0.24, c.c('#ffffff'), 2);
        eye(0.43, 0.42, 1.2); eye(0.57, 0.42, 1.2); c.E(0.43, 0.43, 0.014, 0.02, c.c('#4aa8e8'), { flat: 1 }); c.E(0.57, 0.43, 0.014, 0.02, c.c('#4aa8e8'), { flat: 1 });
        c.L(0.37, 0.36, 0.47, 0.37, 0.012, T(c, '#8aa0c0'), { flat: 1 }); c.L(0.53, 0.37, 0.63, 0.36, 0.012, T(c, '#8aa0c0'), { flat: 1 });
        c.E(0.5, 0.49, 0.012, 0.01, T(c, '#b8c8e0'), { flat: 1 }); c.E(0.5, 0.54, 0.035, 0.016, T(c, '#5a8ae0'), { flat: 1 });
        c.L(0.88, 0.96, 0.88, 0.40, 0.014, P.silver, { flat: 1 }); c.P([[0.88, 0.22], [0.94, 0.34], [0.88, 0.44], [0.82, 0.34]], T(c, '#aef0ff')); c.P([[0.88, 0.26], [0.90, 0.34], [0.88, 0.40]], P.white, { flat: 1 });
        spark(c, 0.10, 0.30, 0.04, P.white); spark(c, 0.90, 0.12, 0.035, P.glow);
      } },
    { k: 'nutcracker', n: 'The Nutcracker', fixed: 1, gy: 0.9, lines: ['A wooden soldier with a big jaw and a very big adventure on Christmas Eve.', 'He bows to the tree, salutes the mouse king and cracks the toughest nuts in the kingdom.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f4cba0'), red = T(c, '#d8203a'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.P([[0.06, 1.0], [0.94, 1.0], [0.82, 0.68], [0.18, 0.68]], red); c.R(0.44, 0.68, 0.56, 1.0, T(c, '#ffd23f'), { flat: 1 }); for (i = 0; i < 4; i++) c.dot(0.50, 0.74 + i * 0.07, P.gold, 2);
        c.E(0.16, 0.76, 0.10, 0.06, P.gold); c.E(0.84, 0.76, 0.10, 0.06, P.gold); c.R(0.30, 0.66, 0.70, 0.70, P.gold, { flat: 1 });
        c.E(0.5, 0.40, 0.17, 0.18, skin); c.R(0.36, 0.48, 0.64, 0.70, skin);
        c.R(0.40, 0.54, 0.60, 0.68, T(c, '#e8b890'), { flat: 1 }); c.L(0.40, 0.61, 0.60, 0.61, 0.014, T(c, '#2a1a14'), { flat: 1 }); for (i = 0; i < 5; i++) c.L(0.42 + i * 0.04, 0.56, 0.42 + i * 0.04, 0.66, 0.006, P.white, { flat: 1 });
        c.P([[0.30, 0.30], [0.28, 0.02], [0.72, 0.02], [0.70, 0.30]], red); c.R(0.28, 0.22, 0.72, 0.28, P.gold, { flat: 1 }); c.E(0.5, 0.14, 0.07, 0.07, P.gold); c.dot(0.50, 0.14, c.c('#d8203a'), 2); c.R(0.28, 0.0, 0.72, 0.03, P.white, { flat: 1 });
        c.E(0.30, 0.38, 0.06, 0.12, P.white); c.E(0.70, 0.38, 0.06, 0.12, P.white); c.E(0.5, 0.50, 0.14, 0.06, P.white);
        eye(0.43, 0.38, 1.2); eye(0.57, 0.38, 1.2); c.L(0.38, 0.32, 0.47, 0.33, 0.014, P.white, { flat: 1 }); c.L(0.53, 0.33, 0.62, 0.32, 0.014, P.white, { flat: 1 });
        c.E(0.5, 0.45, 0.02, 0.016, T(c, '#d8987a'), { flat: 1 }); c.E(0.36, 0.45, 0.03, 0.02, T(c, '#ff7a8a'), { flat: 1 }); c.E(0.64, 0.45, 0.03, 0.02, T(c, '#ff7a8a'), { flat: 1 });
        spark(c, 0.10, 0.20, 0.04, P.glow); spark(c, 0.90, 0.30, 0.035, P.white);
      } },
    { k: 'tinsoldier', n: 'The Tin Soldier', fixed: 1, gy: 0.76, lines: ['He has only one leg, one brave face and one paper boat on a very big gutter.', 'Steadfast to the end, and a little bit soggy.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#f4cba0'), blue = T(c, '#2a4ab8'), i;
        function eye(x, y, s) { c.E(x, y, 0.03 * s, 0.036 * s, P.white, { flat: 1 }); c.E(x, y + 0.004, 0.017 * s, 0.024 * s, c.c('#2a1a14'), { flat: 1 }); c.dot(x - 0.006, y - 0.006, c.c('#ffffff'), 1); }
        c.L(0.88, 1.0, 0.86, 0.10, 0.022, T(c, '#5a3a22'), { flat: 1 }); c.P([[0.86, 0.12], [0.84, 0.0], [0.88, 0.0]], T(c, '#e8eef8'), { flat: 1 });
        c.P([[0.08, 1.0], [0.92, 1.0], [0.80, 0.68], [0.20, 0.68]], blue); c.R(0.44, 0.68, 0.56, 1.0, P.white, { flat: 1 }); c.L(0.30, 0.68, 0.70, 0.98, 0.018, P.white, { flat: 1 }); c.L(0.70, 0.68, 0.30, 0.98, 0.018, P.white, { flat: 1 });
        c.E(0.16, 0.74, 0.10, 0.06, T(c, '#ffd23f')); c.E(0.84, 0.74, 0.10, 0.06, T(c, '#ffd23f')); for (i = 0; i < 4; i++) c.dot(0.50, 0.74 + i * 0.07, P.gold, 2);
        c.R(0.44, 0.56, 0.56, 0.68, skin);
        c.E(0.5, 0.42, 0.17, 0.19, skin);
        c.R(0.30, 0.04, 0.70, 0.30, T(c, '#d8203a')); c.R(0.28, 0.24, 0.72, 0.29, P.gold, { flat: 1 }); c.R(0.30, 0.04, 0.70, 0.08, P.gold, { flat: 1 }); c.E(0.5, 0.17, 0.05, 0.06, P.gold); c.E(0.5, 0.17, 0.02, 0.025, T(c, '#d8203a'), { flat: 1 });
        c.R(0.34, 0.29, 0.66, 0.33, T(c, '#14102a'), { flat: 1 });
        eye(0.43, 0.42, 1.2); eye(0.57, 0.42, 1.2); c.L(0.38, 0.37, 0.47, 0.38, 0.012, T(c, '#4a2a1a'), { flat: 1 }); c.L(0.53, 0.38, 0.62, 0.37, 0.012, T(c, '#4a2a1a'), { flat: 1 });
        c.E(0.5, 0.48, 0.016, 0.014, T(c, '#e0a07a'), { flat: 1 });
        c.E(0.40, 0.52, 0.06, 0.02, T(c, '#4a2a1a'), { flat: 1 }); c.E(0.60, 0.52, 0.06, 0.02, T(c, '#4a2a1a'), { flat: 1 }); c.L(0.46, 0.56, 0.54, 0.56, 0.012, T(c, '#a8283a'), { flat: 1 });
        c.E(0.35, 0.50, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 }); c.E(0.65, 0.50, 0.03, 0.02, T(c, '#ff9aa8'), { flat: 1 });
        c.E(0.16, 0.94, 0.07, 0.04, T(c, '#a8b0c0')); c.L(0.10, 0.94, 0.0, 0.88, 0.014, T(c, '#e8eef8'), { flat: 1 });
        spark(c, 0.12, 0.20, 0.04, P.glow);
      } },
    { k: 'gingerman', n: 'The Gingerbread Man', fixed: 1, gy: 0.88, lines: ['Run, run as fast as you can, you can not catch me, I m the gingerbread man.', 'He is made of spice and sugar and an extremely good sense of timing.'],
      draw: function (c, P, r, o) {
        var cookie = T(c, '#c8803a'), icing = T(c, '#fff8ee');
        o.shadow(0.4, 0.92, 0.26, 0.03);
        c.E(0.40, 0.24, 0.17, 0.17, cookie); c.E(0.40, 0.58, 0.18, 0.22, cookie);
        c.L(0.30, 0.46, 0.08, 0.36, 0.1, cookie); c.L(0.50, 0.46, 0.72, 0.38, 0.1, cookie); c.L(0.34, 0.74, 0.20, 0.92, 0.10, cookie); c.L(0.46, 0.74, 0.58, 0.88, 0.10, cookie);
        c.L(0.10, 0.36, 0.06, 0.34, 0.01, icing, { flat: 1 }); c.L(0.70, 0.38, 0.74, 0.36, 0.01, icing, { flat: 1 }); c.L(0.20, 0.92, 0.14, 0.92, 0.01, icing, { flat: 1 }); c.L(0.58, 0.88, 0.64, 0.88, 0.01, icing, { flat: 1 });
        c.E(0.34, 0.22, 0.026, 0.032, icing, { flat: 1 }); c.E(0.46, 0.22, 0.026, 0.032, icing, { flat: 1 }); c.dot(0.34, 0.225, c.c('#3a2112'), 2); c.dot(0.46, 0.225, c.c('#3a2112'), 2);
        c.L(0.32, 0.30, 0.38, 0.33, 0.012, icing, { flat: 1 }); c.L(0.38, 0.33, 0.42, 0.33, 0.012, icing, { flat: 1 }); c.L(0.42, 0.33, 0.48, 0.30, 0.012, icing, { flat: 1 });
        c.E(0.30, 0.28, 0.025, 0.017, T(c, '#ff7a96'), { flat: 1 }); c.E(0.50, 0.28, 0.025, 0.017, T(c, '#ff7a96'), { flat: 1 });
        c.E(0.40, 0.52, 0.025, 0.025, P.red, { flat: 1 }); c.E(0.40, 0.62, 0.025, 0.025, P.green, { flat: 1 }); c.E(0.40, 0.72, 0.025, 0.025, P.b, { flat: 1 });
        for (var i = 0; i < 4; i++) c.P([[0.26 + i * 0.07, 0.46], [0.30 + i * 0.07, 0.46], [0.28 + i * 0.07, 0.50]], icing, { flat: 1 });
        c.L(0.76, 0.20, 0.96, 0.20, 0.008, P.white, { flat: 1 }); c.L(0.80, 0.30, 0.98, 0.30, 0.008, P.white, { flat: 1 }); c.L(0.82, 0.40, 0.96, 0.40, 0.008, P.white, { flat: 1 });
      } },
    { k: 'troll', n: 'The Bridge Troll', fixed: 1, gy: 0.56, lines: ['Who s that trip-trapping over my bridge, he growls, and three goats grin back.', 'Big nose, small patience and a very strict toll.'],
      draw: function (c, P, r, o) {
        var skin = T(c, '#7aa84a'), i;
        c.R(0.0, 0.56, 1.0, 1.0, T(c, '#58b8c8'), { flat: 1 }); for (i = 0; i < 5; i++) c.E(0.2 + (i % 3) * 0.3, 0.88 + (i % 2) * 0.04, 0.12, 0.012, T(c, '#a8e0f0'), { flat: 1 });
        c.R(0.0, 0.50, 0.18, 1.0, T(c, '#58a84a')); c.R(0.82, 0.50, 1.0, 1.0, T(c, '#58a84a'));
        c.P([[0.0, 0.46], [1.0, 0.46], [1.0, 0.54], [0.80, 0.58], [0.50, 0.50], [0.20, 0.58], [0.0, 0.54]], P.stone, { flat: 0 });
        c.R(0.0, 0.40, 1.0, 0.46, P.wood); for (i = 0; i < 10; i++) c.R(0.02 + i * 0.1, 0.30, 0.04 + i * 0.1, 0.40, P.wood);
        c.E(0.5, 0.76, 0.34, 0.20, P.stone, {}, true); c.R(0.16, 0.76, 0.84, 0.86, P.stone, { pat: o.B }); c.E(0.5, 0.78, 0.26, 0.17, T(c, '#14102a'), { flat: 1 }, true); c.R(0.24, 0.78, 0.76, 0.88, T(c, '#14102a'), { flat: 1 });
        c.E(0.5, 0.74, 0.17, 0.14, skin); c.E(0.5, 0.60, 0.12, 0.05, skin); c.mir = true; c.P([[0.38, 0.66], [0.28, 0.56], [0.40, 0.68]], skin); c.mir = false;
        c.mir = true; c.E(0.44, 0.70, 0.04, 0.035, P.white, { flat: 1 }); c.dot(0.44, 0.705, c.c('#1b1a22'), 2); c.L(0.38, 0.64, 0.47, 0.67, 0.016, T(c, '#3a6a20'), { flat: 1 }); c.mir = false;
        c.E(0.5, 0.76, 0.045, 0.06, T(c, '#5a8a30')); c.E(0.5, 0.82, 0.10, 0.03, P.black, { flat: 1 }); c.R(0.44, 0.80, 0.46, 0.84, P.white, { flat: 1 }); c.R(0.54, 0.80, 0.56, 0.84, P.white, { flat: 1 });
        function goat(x, y, s) { c.E(x, y, 0.06 * s, 0.035 * s, P.white); c.E(x + 0.05 * s, y - 0.03 * s, 0.026 * s, 0.026 * s, P.white); c.P([[x + 0.05 * s, y - 0.05 * s], [x + 0.06 * s, y - 0.09 * s], [x + 0.07 * s, y - 0.05 * s]], T(c, '#c8b88a')); c.R(x - 0.04 * s, y, x - 0.025 * s, y + 0.04 * s, P.white); c.R(x + 0.02 * s, y, x + 0.035 * s, y + 0.04 * s, P.white); c.dot(x + 0.055 * s, y - 0.03 * s, c.c('#1b1a22'), 1); }
        goat(0.22, 0.30, 0.9); goat(0.50, 0.28, 1.2); goat(0.80, 0.30, 0.8);
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
