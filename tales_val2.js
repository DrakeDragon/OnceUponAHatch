/* Valentine's Day, second volume. */
(function (root) {
  'use strict';
  var K = root.TaleKit;
  function spark(c, x, y, s, col) { K.spark(c, x, y, s, typeof col === 'string' ? c.tone(col) : col); }
  function T(c, h) { return c.tone(h); }
  var VE = ['rosy', 'dusk', 'dawn', 'night', 'hall', 'meadow', 'day', 'aurora', 'snow', 'sea'];
  function heart(c, x, y, s, col) { c.E(x - s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.E(x + s * 0.5, y - s * 0.25, s * 0.55, s * 0.5, col); c.P([[x - s * 1.02, y - s * 0.05], [x + s * 1.02, y - s * 0.05], [x, y + s * 1.05]], col); }
  function hl(c, x, y) { c.dot(x, y, c.c('#ffffff'), 1); }

  K.register('valentine', [
    { k: 'heartcake', n: 'Heart Cake', fixed: 1, envs: VE, gy: 0.9, lines: ['Pink frosting, red berries and one very large heart.', 'The knife is waiting but nobody wants to be the first to cut.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.42, 0.03);
        c.E(0.5, 0.86, 0.46, 0.08, T(c, '#e8ecf4')); c.R(0.10, 0.80, 0.90, 0.88, T(c, '#e8ecf4'), { flat: 1 });
        heart(c, 0.5, 0.40, 0.40, T(c, '#ff7aa8')); c.P([[0.12, 0.45], [0.88, 0.45], [0.5, 0.84]], T(c, '#f06090'));
        c.P([[0.18, 0.54], [0.82, 0.54], [0.5, 0.80]], T(c, '#c83a6a'), { flat: 1 });
        c.E(0.34, 0.30, 0.10, 0.06, T(c, '#ffd0e0'), { flat: 1 });
        for (i = 0; i < 7; i++) { c.E(0.2 + i * 0.1, 0.52 + Math.abs(i - 3) * 0.04 + (i % 2) * 0.01, 0.05, 0.06, T(c, '#ffffff')); }
        c.E(0.5, 0.22, 0.06, 0.05, T(c, '#d8102c')); c.E(0.36, 0.26, 0.05, 0.05, T(c, '#d8102c')); c.E(0.64, 0.26, 0.05, 0.05, T(c, '#d8102c')); c.E(0.50, 0.34, 0.05, 0.05, T(c, '#d8102c'));
        for (i = 0; i < 4; i++) hl(c, 0.34 + i * 0.1, 0.20 + (i % 2) * 0.1);
        c.RE(0.26, 0.20, 0.05, 0.025, -0.6, T(c, '#2fa04a')); c.RE(0.74, 0.20, 0.05, 0.025, 0.6, T(c, '#2fa04a'));
      } },
    { k: 'cupcake', n: 'Valentine Cupcake', fixed: 1, envs: VE, gy: 0.9, lines: ['Swirled frosting and candy hearts on top.', 'It disappeared faster than the card did.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.94, 0.30, 0.03);
        c.P([[0.22, 0.52], [0.78, 0.52], [0.68, 0.92], [0.32, 0.92]], T(c, '#e8506a'));
        for (i = 0; i < 6; i++) c.L(0.28 + i * 0.09, 0.54, 0.34 + i * 0.07, 0.92, 0.012, T(c, '#c8305a'), { flat: 1 });
        c.R(0.22, 0.50, 0.78, 0.56, T(c, '#ff8aa8'), { flat: 1 });
        c.E(0.5, 0.46, 0.30, 0.10, T(c, '#ffb0c8')); c.E(0.5, 0.34, 0.24, 0.10, T(c, '#ff90b0')); c.E(0.5, 0.22, 0.17, 0.08, T(c, '#ffb0c8')); c.E(0.5, 0.12, 0.09, 0.06, T(c, '#ff90b0'));
        c.E(0.40, 0.44, 0.08, 0.025, T(c, '#ffe0ec'), { flat: 1 }); c.E(0.42, 0.32, 0.07, 0.02, T(c, '#ffe0ec'), { flat: 1 });
        heart(c, 0.5, 0.04, 0.055, T(c, '#d8102c')); hl(c, 0.48, 0.02);
        c.dot(0.30, 0.44, c.c('#ffffff'), 1); c.dot(0.66, 0.40, c.c('#fff6b0'), 1); c.dot(0.40, 0.26, c.c('#ffd23f'), 1); c.dot(0.60, 0.28, c.c('#ffffff'), 1);
      } },
    { k: 'keylock', n: 'Heart Lock and Key', fixed: 1, envs: VE, hy: 0.4, lines: ['The key was hiding in a love letter all along.', 'It fits only one heart, and that is the point.'],
      draw: function (c, P, r, o) {
        var gd = T(c, '#e8b020');
        c.E(0.5, 0.36, 0.19, 0.19, T(c, '#c8c8d8'), { flat: 1, ring: 1 }); c.RG(0.5, 0.30, 0.12, 0.18, T(c, '#d0d4e4'));
        heart(c, 0.5, 0.58, 0.32, T(c, '#e8203c')); c.P([[0.2, 0.55], [0.8, 0.55], [0.5, 0.88]], T(c, '#c8102c'), { flat: 1 });
        c.E(0.36, 0.48, 0.07, 0.05, T(c, '#ff8098'), { flat: 1 });
        c.E(0.5, 0.60, 0.05, 0.05, T(c, '#1a1a28')); c.P([[0.47, 0.62], [0.53, 0.62], [0.55, 0.76], [0.45, 0.76]], T(c, '#1a1a28'));
        c.L(0.74, 0.96, 0.54, 0.62, 0.03, gd); c.RG(0.80, 0.98, 0.05, 0.09, gd); c.R(0.60, 0.74, 0.68, 0.78, gd); c.R(0.64, 0.82, 0.70, 0.86, gd);
        c.dot(0.40, 0.66, c.c('#ffffff'), 1);
      } },
    { k: 'swans', n: 'Swan Heart', fixed: 1, envs: ['day', 'dawn', 'dusk', 'rosy', 'meadow', 'night', 'aurora', 'sea'], gy: 0.88, lines: ['Two swans, necks curved, making a heart on the water.', 'They have been together longer than the pond has had a name.'],
      draw: function (c, P, r, o) {
        var w = T(c, '#fafcff'), sh = T(c, '#d0d8ec'), i;
        c.E(0.5, 0.88, 0.50, 0.12, T(c, '#4a8ae0')); c.E(0.5, 0.90, 0.38, 0.05, T(c, '#78b0f0'), { flat: 1 });
        c.E(0.30, 0.74, 0.22, 0.13, w); c.E(0.24, 0.78, 0.12, 0.06, sh, { flat: 1 }); c.P([[0.50, 0.70], [0.56, 0.62], [0.52, 0.76]], w);
        c.E(0.70, 0.74, 0.22, 0.13, w); c.E(0.76, 0.78, 0.12, 0.06, sh, { flat: 1 }); c.P([[0.50, 0.70], [0.44, 0.62], [0.48, 0.76]], w);
        for (i = 0; i <= 12; i++) { var a = Math.PI * 0.95 - i * (Math.PI * 0.78) / 12; c.E(0.42 + Math.cos(a) * 0.16, 0.50 - Math.sin(a) * 0.22 + 0.16 * 0, 0.045, 0.045, w); }
        for (i = 0; i <= 12; i++) { var b = Math.PI * 0.05 + i * (Math.PI * 0.78) / 12; c.E(0.58 + Math.cos(b) * 0.16, 0.50 - Math.sin(b) * 0.22, 0.045, 0.045, w); }
        heart(c, 0.5, 0.36, 0.13, T(c, '#ff6a98')); hl(c, 0.46, 0.33);
        c.E(0.28, 0.50, 0.06, 0.05, w); c.E(0.72, 0.50, 0.06, 0.05, w); c.P([[0.22, 0.50], [0.14, 0.54], [0.22, 0.54]], T(c, '#ff9a1f')); c.P([[0.78, 0.50], [0.86, 0.54], [0.78, 0.54]], T(c, '#ff9a1f'));
        c.dot(0.27, 0.49, c.c('#111111'), 1); c.dot(0.72, 0.49, c.c('#111111'), 1);
      } },
    { k: 'puppy', n: 'Valentine Puppy', fixed: 1, envs: VE, gy: 0.9, hy: 0.4, lines: ['A big heart tag and an even bigger wag.', 'He brought you a stick, which is how dogs say it.'],
      draw: function (c, P, r, o) {
        var br = T(c, '#e0a860'), dk = T(c, '#a86a2a'), wh = T(c, '#fff4e0');
        o.shadow(0.5, 0.94, 0.32, 0.03);
        c.E(0.5, 0.74, 0.24, 0.20, br); c.E(0.5, 0.80, 0.14, 0.12, wh, { flat: 1 }); c.E(0.34, 0.93, 0.08, 0.04, wh); c.E(0.66, 0.93, 0.08, 0.04, wh); c.L(0.78, 0.84, 0.92, 0.62, 0.05, br);
        c.E(0.5, 0.38, 0.22, 0.20, br); c.E(0.26, 0.34, 0.08, 0.17, dk); c.E(0.74, 0.34, 0.08, 0.17, dk);
        c.E(0.5, 0.46, 0.12, 0.09, wh); c.E(0.5, 0.42, 0.045, 0.03, T(c, '#1a1a28')); c.P([[0.46, 0.52], [0.5, 0.58], [0.54, 0.52]], T(c, '#ff7a98'), { flat: 1 }); c.L(0.5, 0.45, 0.5, 0.52, 0.01, T(c, '#1a1a28'), { flat: 1 });
        c.mir = true; c.E(0.40, 0.34, 0.035, 0.04, P.white, { flat: 1 }); c.dot(0.40, 0.34, c.c('#111111'), 1); c.E(0.30, 0.44, 0.04, 0.025, T(c, '#ff9aa8'), { flat: 1 }); c.mir = false;
        c.L(0.30, 0.56, 0.70, 0.56, 0.035, T(c, '#d8202c')); heart(c, 0.5, 0.62, 0.07, T(c, '#ffd23f')); hl(c, 0.48, 0.60);
        heart(c, 0.86, 0.50, 0.06, T(c, '#e8203c'));
      } },
    { k: 'macarons', n: 'Macarons', fixed: 1, envs: VE, gy: 0.9, lines: ['Pink, rose and cream, stacked like tiny pillows.', 'Each one is a small, sweet decision.'],
      draw: function (c, P, r, o) {
        var i, cs = [['#ff9ab8', '#ffd0dc'], ['#c8a0ff', '#e8d0ff'], ['#8ad8b8', '#c8f0e0'], ['#ffd070', '#fff0c0']];
        o.shadow(0.5, 0.94, 0.42, 0.03);
        for (i = 0; i < 4; i++) { var x = 0.20 + i * 0.20, y = 0.86; c.E(x, y - 0.02, 0.10, 0.04, T(c, cs[i][0])); c.R(x - 0.08, y - 0.03, x + 0.08, y + 0.01, T(c, '#fff8f0')); c.E(x, y + 0.01, 0.10, 0.035, T(c, cs[i][0])); }
        var st = [[0.5, 0.64, 0], [0.5, 0.48, 1], [0.5, 0.32, 2]];
        for (i = 0; i < 3; i++) { var yy = st[i][1], cc = cs[(i + 1) % 4]; c.E(0.5, yy - 0.04, 0.17, 0.065, T(c, cc[0])); c.E(0.5, yy - 0.06, 0.13, 0.03, T(c, cc[1]), { flat: 1 }); c.R(0.36, yy - 0.04, 0.64, yy + 0.02, T(c, '#fff8f0')); c.E(0.5, yy + 0.04, 0.17, 0.06, T(c, cc[0])); }
        heart(c, 0.5, 0.12, 0.08, T(c, '#e8203c')); hl(c, 0.47, 0.10);
      } },
    { k: 'rosevase', n: 'Roses in a Vase', fixed: 1, envs: VE, gy: 0.92, lines: ['A dozen red roses and a glass vase full of morning light.', 'The card says nothing, and means everything.'],
      draw: function (c, P, r, o) {
        var i;
        o.shadow(0.5, 0.95, 0.30, 0.025);
        c.P([[0.34, 0.54], [0.66, 0.54], [0.74, 0.76], [0.66, 0.94], [0.34, 0.94], [0.26, 0.76]], T(c, '#cfe8f8')); c.P([[0.38, 0.60], [0.62, 0.60], [0.68, 0.76], [0.62, 0.90], [0.38, 0.90], [0.32, 0.76]], T(c, '#a8d0f0'), { flat: 1 }); c.R(0.40, 0.58, 0.44, 0.88, T(c, '#e8f6ff'), { flat: 1 });
        for (i = 0; i < 5; i++) c.L(0.5, 0.80, 0.26 + i * 0.12, 0.34 + (i % 2) * 0.1, 0.022, T(c, '#2a8a3a'));
        var pos = [[0.26, 0.38], [0.38, 0.22], [0.52, 0.14], [0.66, 0.24], [0.76, 0.40], [0.52, 0.36]];
        for (i = 0; i < pos.length; i++) { c.E(pos[i][0], pos[i][1], 0.11, 0.10, T(c, '#d0102c')); c.E(pos[i][0], pos[i][1], 0.07, 0.065, T(c, '#a80c24'), { flat: 1 }); c.E(pos[i][0], pos[i][1], 0.03, 0.03, T(c, '#e82040'), { flat: 1 }); c.dot(pos[i][0] - 0.05, pos[i][1] - 0.05, c.c('#ff8098'), 1); }
        c.RE(0.34, 0.60, 0.06, 0.025, 0.5, T(c, '#2fa04a')); c.RE(0.66, 0.62, 0.06, 0.025, -0.5, T(c, '#2fa04a'));
        c.L(0.40, 0.78, 0.60, 0.78, 0.025, T(c, '#ff6a98'), { flat: 1 });
      } },
    { k: 'kitten', n: 'Kitten Love', fixed: 1, envs: VE, gy: 0.9, hy: 0.4, lines: ['It left a paw print on every page of the love letter.', 'Purring, with a heart-shaped tag.'],
      draw: function (c, P, r, o) {
        var gr = T(c, '#c8c8d8'), dk = T(c, '#8a8aa0');
        o.shadow(0.5, 0.94, 0.32, 0.03);
        c.E(0.5, 0.74, 0.24, 0.20, gr); c.E(0.5, 0.80, 0.13, 0.11, T(c, '#f4f4fa'), { flat: 1 }); c.E(0.34, 0.93, 0.08, 0.04, T(c, '#f4f4fa')); c.E(0.66, 0.93, 0.08, 0.04, T(c, '#f4f4fa'));
        c.P([[0.74, 0.86], [0.96, 0.80], [0.92, 0.56], [0.86, 0.60], [0.88, 0.76], [0.74, 0.78]], gr); c.R(0.84, 0.64, 0.94, 0.68, dk, { flat: 1 }); c.R(0.86, 0.72, 0.94, 0.76, dk, { flat: 1 });
        c.E(0.5, 0.38, 0.22, 0.19, gr); c.P([[0.30, 0.30], [0.28, 0.12], [0.42, 0.24]], gr); c.P([[0.70, 0.30], [0.72, 0.12], [0.58, 0.24]], gr); c.P([[0.31, 0.26], [0.31, 0.17], [0.38, 0.24]], T(c, '#ffb0c0'), { flat: 1 }); c.P([[0.69, 0.26], [0.69, 0.17], [0.62, 0.24]], T(c, '#ffb0c0'), { flat: 1 });
        c.R(0.44, 0.22, 0.46, 0.30, dk, { flat: 1 }); c.R(0.54, 0.22, 0.56, 0.30, dk, { flat: 1 });
        c.mir = true; c.E(0.40, 0.38, 0.045, 0.05, T(c, '#8ae8a0')); c.dot(0.40, 0.385, c.c('#0a1a10'), 1); c.dot(0.385, 0.365, c.c('#ffffff'), 1); c.E(0.32, 0.46, 0.04, 0.025, T(c, '#ffb0c0'), { flat: 1 }); c.mir = false;
        c.P([[0.47, 0.44], [0.53, 0.44], [0.5, 0.48]], T(c, '#ff7a98')); for (var i = 0; i < 3; i++) { c.L(0.34, 0.46 + i * 0.015, 0.20, 0.44 + i * 0.03, 0.006, T(c, '#f4f4fa'), { flat: 1 }); c.L(0.66, 0.46 + i * 0.015, 0.80, 0.44 + i * 0.03, 0.006, T(c, '#f4f4fa'), { flat: 1 }); }
        c.L(0.34, 0.56, 0.66, 0.56, 0.03, T(c, '#d8202c')); heart(c, 0.5, 0.60, 0.06, T(c, '#ffd23f')); hl(c, 0.48, 0.58);
        heart(c, 0.16, 0.30, 0.06, T(c, '#ff6a98'));
      } }
  ]);
})(typeof window !== 'undefined' ? window : globalThis);
