/* Once Upon a Hatch — tale data
   Each tale: a pixel grid (rows of palette letters) + palette.
   mark: 'slash' (/), 'back' (\), 'star', 'fill'
   mirror:true means each row is only the LEFT half and gets mirrored.
*/
const PUZZLES = [
  {
    id: 'apple',
    title: 'The Poisoned Apple',
    blurb: 'It gleamed so red that no one could look away. But in the old stories the shiniest things always have a secret, and the bravest thing you can do is ask who baked it.',
    colors: {
      B: { name: 'Violet', hex: '#4b2f8a', mark: 'back' },
      R: { name: 'Red',      hex: '#d7263d', mark: 'fill' },
      r: { name: 'Dark Red',    hex: '#8e1b2e', mark: 'slash' },
      H: { name: 'Pink',     hex: '#ffb3c1', mark: 'star' },
      G: { name: 'Green',      hex: '#2fa84f', mark: 'fill' },
      T: { name: 'Brown',      hex: '#7a4a21', mark: 'fill' },
      S: { name: 'Yellow',    hex: '#ffd23f', mark: 'star' }
    },
    rows: [
      'BBBBBBBBBBBBBBBB',
      'BBBSBBBBBTBBGGBB',
      'BBBBBBBBBTBGGGGB',
      'BBBBBRRRBTBRRBBB',
      'BBBBRRRRRRRRRRBB',
      'BBBRHHRRRRRRRrrB',
      'BBRRHRRRRRRRRrrB',
      'BBRHRRRRRRRRRrrB',
      'BBRRRRRRRRRRRrrB',
      'BBRRRRRRRRRRrrrB',
      'BBRRRRRRRRRrrrrB',
      'BBBRRRRRRRRrrrBB',
      'BBBBRRRRRRRrrBBB',
      'BBBBBRRRRRRrBSBB',
      'BBBBBBRRRRBBBBBB',
      'BBSBBBBBBBBBBBBB'
    ]
  },
  {
    id: 'castle',
    title: 'The Sleeping Castle',
    blurb: 'A hundred years of sleep makes for quiet halls. The moon keeps watch, the roses keep climbing, and one little window stays lit, waiting for whoever knows the way in.',
    colors: {
      K: { name: 'Navy',       hex: '#1b2a6b', mark: 'back' },
      M: { name: 'Cream',    hex: '#ffe9a8', mark: 'star' },
      R: { name: 'Magenta',    hex: '#c2185b', mark: 'fill' },
      W: { name: 'Light Gray',    hex: '#c9ced8', mark: 'fill' },
      w: { name: 'Slate Gray',    hex: '#7d8599', mark: 'slash' },
      Y: { name: 'Gold',     hex: '#ffc928', mark: 'star' },
      D: { name: 'Brown',        hex: '#7b4a1e', mark: 'fill' },
      G: { name: 'Green',          hex: '#2e9e4a', mark: 'fill' },
      g: { name: 'Dark Green',     hex: '#1f6f35', mark: 'slash' }
    },
    rows: [
      'KKKMKKKKKKKKMMKK',
      'KKKKKKKRRKKKMMMK',
      'KKKKKKRRRRKKMMKK',
      'KKKKKRRRRRRKKKKK',
      'KKKKKKWWWwKKKKKK',
      'KKKKKKWYYwKKKKKK',
      'KKKRKKWYYwKKRKKK',
      'KKRRRKWWWwKRRRKK',
      'KKWWwKWWWwKWWwKK',
      'KKWYwKWWWwKWYwKK',
      'KKWWWWWWWWWWWwKK',
      'KKWWWWWWWWWWWwKK',
      'KKWWWWWDDWWWWwKK',
      'KKWWWWWDDWWWWwKK',
      'GGGGGGGGGGGGGGGG',
      'GGgGGGGGGgGGGGgG'
    ]
  },
  {
    id: 'gingerbread',
    title: 'The Gingerbread Cottage',
    blurb: 'The path of crumbs led here: cookie walls, gumdrop buttons, frosting snow. Sweet things are never free in a fairytale, so read the fine print on the door.',
    colors: {
      B: { name: 'Steel Blue',     hex: '#2a4a6e', mark: 'back' },
      F: { name: 'White',  hex: '#ffffff', mark: 'fill' },
      H: { name: 'Dark Brown',  hex: '#5b3a29', mark: 'fill' },
      T: { name: 'Tan',     hex: '#c68a4a', mark: 'fill' },
      O: { name: 'Brown',      hex: '#6b3d1e', mark: 'fill' },
      Y: { name: 'Yellow',     hex: '#ffd34d', mark: 'star' },
      P: { name: 'Pink',  hex: '#ff6fa8', mark: 'star' },
      R: { name: 'Red',       hex: '#e02020', mark: 'star' },
      g: { name: 'Mint Green',   hex: '#2fc46b', mark: 'star' },
      S: { name: 'Ice Blue',            hex: '#e8f1fb', mark: 'slash' }
    },
    rows: [
      'BBFBBBBBBBBBFBBB',
      'BBBBBBBBBBBHHBBB',
      'BBBBBBBHHBBHHBBB',
      'BBBBBBHFFHBHHBBB',
      'BBBBBHHHHHHHHBBB',
      'BBBBHHHHHHHHBBBB',
      'BBBHHHHHHHHHHBBB',
      'BBHHHHHHHHHHHHBB',
      'BBFFFFFFFFFFFFBB',
      'BBBTTYYTTYYTTBBB',
      'BBBTTYYTTYYTTBBB',
      'BBBTPTTOOTTRTBBB',
      'BBBTTTTOOTTTTBBB',
      'BBBTgTTOOTTgTBBB',
      'SSSSSSSSSSSSSSSS',
      'SSFSSSSSSSSSSFSS'
    ]
  },
  {
    id: 'frog',
    title: 'The Frog Who Wore a Crown',
    blurb: 'One kiss, one crown, one very soggy lily pad. Princes turn up in the strangest places, and so do princesses, if you are willing to look at the pond differently.',
    colors: {
      B: { name: 'Lavender', hex: '#7b6bc9', mark: 'back' },
      Y: { name: 'Gold',        hex: '#ffcc00', mark: 'fill' },
      R: { name: 'Crimson',              hex: '#d0143c', mark: 'star' },
      G: { name: 'Green',        hex: '#3fbf4a', mark: 'fill' },
      W: { name: 'Ivory',         hex: '#fffef2', mark: 'fill' },
      K: { name: 'Black',       hex: '#151515', mark: 'fill' },
      g: { name: 'Dark Green',       hex: '#1d6b2c', mark: 'slash' },
      P: { name: 'Rose',        hex: '#ff8fb0', mark: 'star' },
      L: { name: 'Lime',        hex: '#b8ec7a', mark: 'fill' },
      N: { name: 'Forest Green',          hex: '#1f8a3a', mark: 'fill' },
      A: { name: 'Blue',         hex: '#2f8fd6', mark: 'back' }
    },
    rows: [
      'BBBBBBBBBBBBBBBB',
      'BBBBBYBYYBYBBBBB',
      'BBBBBYYRRYYBBBBB',
      'BBGGGGGGGGGGGGBB',
      'BGGWWGGGGGGWWGGB',
      'BGGWKGGGGGGKWGGB',
      'BGGGGGGGGGGGGGGB',
      'BGGGggggggggGGGB',
      'BGPGGGGGGGGGGPGB',
      'BBGGLLLLLLLLGGBB',
      'BBGGLLLLLLLLGGBB',
      'BGGGGLLLLLLGGGGB',
      'BGGGGGGGGGGGGGGB',
      'NNNNNNNNNNNNNNNN',
      'AANNNNNNNNNNNNAA',
      'AAAAAAAAAAAAAAAA'
    ]
  },
  {
    id: 'coach',
    title: 'The Pumpkin Coach',
    blurb: 'At midnight it will be a pumpkin again, so there is no time to waste. The wheels are golden, the night is young, and the ball is waiting.',
    colors: {
      B: { name: 'Navy',   hex: '#1b1f5e', mark: 'back' },
      M: { name: 'Cream',       hex: '#fff2a6', mark: 'star' },
      G: { name: 'Green',      hex: '#3aa655', mark: 'fill' },
      O: { name: 'Orange',  hex: '#ff8a1f', mark: 'fill' },
      o: { name: 'Burnt Orange',      hex: '#c9560a', mark: 'slash' },
      H: { name: 'Peach',   hex: '#ffd199', mark: 'star' },
      T: { name: 'Gold',    hex: '#f2b84b', mark: 'fill' },
      k: { name: 'Brown',       hex: '#6b3a14', mark: 'fill' }
    },
    rows: [
      'BMBBBBBBBBBBBMBB',
      'BBBBBBBGGBBBBBBB',
      'BBBBBBBGGGBBMBBB',
      'BBBBOOOOoOOOOBBB',
      'BBOOOoOOOOoOOOBB',
      'BOHHOoOOOOoOOOOB',
      'BOHOOoOOOOoOOOOB',
      'BOOOOoOOOOoOOOOB',
      'BOOOOoOOOOoOOOOB',
      'BOOOOoOOOOoOOOOB',
      'BBOOOoOOOOoOOOBB',
      'BBBOOoOOOOoOOBBB',
      'BBBBOOOOOOOOBBBB',
      'BBTTTTTTTTTTTTBB',
      'BTkkTBBBBBBTkkTB',
      'BBTTBBBBBBBBTTBB'
    ]
  },
  {
    id: 'dragon',
    title: "The Dragon's Welcome",
    blurb: 'Everyone assumes the dragon is the villain. But he only breathes fire when somebody forgets to say please before knocking on his cave.',
    mirror: true,
    colors: {
      B: { name: 'Plum',    hex: '#5a1f3a', mark: 'back' },
      C: { name: 'Bone',     hex: '#f1e3c3', mark: 'fill' },
      G: { name: 'Green',  hex: '#3fae5a', mark: 'fill' },
      g: { name: 'Dark Green',    hex: '#1e6b3b', mark: 'slash' },
      Y: { name: 'Yellow',      hex: '#ffd21f', mark: 'fill' },
      K: { name: 'Black',   hex: '#111111', mark: 'fill' },
      N: { name: 'Deep Green',       hex: '#0f3b22', mark: 'fill' },
      W: { name: 'White',    hex: '#ffffff', mark: 'star' },
      F: { name: 'Orange',   hex: '#ff6a1a', mark: 'fill' }
    },
    rows: [
      'BBBBBBBB',
      'CBBBBBBB',
      'CCBBBBBB',
      'BCCBBGGG',
      'BBCGGGGG',
      'BBGggGGG',
      'BBGYKGGG',
      'BBGYYGGG',
      'BGGGGGGG',
      'BGGGGGNG',
      'BBGgGGgG',
      'BBGGWGWG',
      'BBBGGGGG',
      'BBBBGGGG',
      'BBBBBFFF',
      'BBBBBBFF'
    ]
  }
];

/* expand mirrored tales */
PUZZLES.forEach(function (p) {
  if (p.mirror) {
    p.rows = p.rows.map(function (r) { return r + r.split('').reverse().join(''); });
  }
});

if (typeof module !== 'undefined') module.exports = PUZZLES;
