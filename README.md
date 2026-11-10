# Once Upon a Hatch

A mobile-first **fairytale mystery color-by-number** game. Every picture starts as a grid of numbered, dark cells. Pick a color chip, fill the matching cells, and a hand-built pixel illustration "hatches" out of the shadows. When the last cell is filled, the tale gets its title and a short story line, and it is hung on your shelf.

It is a static web app: plain HTML, CSS and JavaScript on a `<canvas>`. No build step, no framework, no server, no account, no tracking. Everything is saved in your own browser.

---

## Table of contents

1. [Quick start](#quick-start)
2. [Deploy on GitHub Pages](#deploy-on-github-pages)
3. [What's in the box](#whats-in-the-box)
4. [How to play](#how-to-play)
5. [The library](#the-library)
6. [Holidays and seasons](#holidays-and-seasons)
7. [Puzzle of the Day and streaks](#puzzle-of-the-day-and-streaks)
8. [Settings](#settings)
9. [Saved data](#saved-data)
10. [Project structure](#project-structure)
11. [How the art works](#how-the-art-works)
12. [Extending the game](#extending-the-game)
13. [Testing and validation](#testing-and-validation)
14. [Browser support and requirements](#browser-support-and-requirements)
15. [Known limitations](#known-limitations)
16. [Troubleshooting](#troubleshooting)
17. [License and credits](#license-and-credits)

---

## Quick start

**Run locally.** Because the game loads several `.js` files, serve the folder rather than double-clicking `index.html` (some browsers restrict `file://`, although most modern ones will still run it):

```bash
cd once-upon-a-hatch
python3 -m http.server 8000
# open http://localhost:8000
```

Any static server works (`npx serve`, `php -S localhost:8000`, VS Code Live Server, etc.).

**Nothing to install.** There are no dependencies and no `npm install`.

---

## Deploy on GitHub Pages

1. Create a new repository on GitHub (for example `once-upon-a-hatch`). Public is required for free Pages on personal accounts.
2. Upload **the contents of this folder** to the **root** of the repository, so that `index.html` sits at the top level, not inside a subfolder. On github.com choose **Add file → Upload files**, drag in every file (including the hidden `.nojekyll`; if your file picker hides dotfiles, create an empty file called `.nojekyll` in the web editor afterwards), then commit.
   - Or with git:
     ```bash
     cd once-upon-a-hatch
     git init
     git add -A
     git commit -m "Once Upon a Hatch"
     git branch -M main
     git remote add origin https://github.com/<you>/once-upon-a-hatch.git
     git push -u origin main
     ```
3. In the repository go to **Settings → Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main`**, **Folder: `/ (root)`**, and save.
4. Wait a minute or two. Your game appears at `https://<you>.github.io/once-upon-a-hatch/`.

Notes:

- `.nojekyll` tells GitHub Pages to skip Jekyll processing and serve the files exactly as they are.
- All script paths are relative, so the game also works from any sub-path or any other static host (Netlify, Cloudflare Pages, S3, a school web server).
- After changing files, commit and push; Pages redeploys automatically. Hard-refresh (or clear the site cache) if you still see an old version.
- Saved progress is stored per site origin. If you move the game to a new address, players start with an empty shelf there.

---

## What's in the box

| Item | Detail |
|---|---|
| Library | **2,386 tales**: 6 hand-drawn "pocket" puzzles + 2,380 generated tales |
| Story worlds | 7 core worlds + 7 holiday collections = **14 categories** |
| Grid size | 64 × 64 cells per picture |
| Colors per tale | 19 to about 30 chips (varies by picture) |
| Zoom | Whole-picture view plus pinch/scroll zoom and drag-to-pan |
| Daily puzzle | One featured mystery per calendar day, with streaks |
| Holidays | 14 holidays with automatic seasonal windows, themed title screen and themed Puzzle of the Day |
| Saving | Auto-save in the browser; "Save picture" exports a PNG of any finished tale |
| Input | Touch, mouse and pen (pointer events) |
| Dependencies | None (Google Fonts are optional; fallback fonts are built in) |

---

## How to play

1. **Pick a tale** from the shelf, tap **Puzzle of the Day**, or tap **Surprise me** for a random one.
2. **Pick a color chip** at the bottom. Chips show a number and a swatch. A completed color's chip is checked off.
3. **Tap or drag across cells** with that number to fill them. Dragging paints a stroke of matching cells; cells of other numbers are left alone.
4. **Zoom in** for small areas: pinch on touch screens, or use the mouse wheel. Drag with a second finger (or when not painting) to pan. Use **Whole picture** to zoom out and see everything.
5. **Guide glow** (optional) softly lights up the remaining cells for the selected color.
6. When every cell is filled the tale is **solved**: the picture is revealed in full, its title and story line appear, progress is saved, and you can go **Next tale**, **Save picture**, **Back to shelf** or **Play again**.

### Controls

| Action | Touch | Mouse / trackpad |
|---|---|---|
| Fill a cell | Tap | Click |
| Fill a run of cells | Drag | Click and drag |
| Zoom | Pinch | Wheel / trackpad scroll |
| Pan | Two-finger drag | Drag (when zoomed) |
| Choose color | Tap a chip | Click a chip |
| Settings | ⚙ button | ⚙ button |

---

## The library

Counts below are verified by `validate.js` (every tale is generated and checked: 2,380 generated tales, 0 errors, 0 duplicate titles).

### Story worlds

| Category id | Name | Tales | Distinct subjects |
|---|---|---:|---:|
| `oz` | The Yellow Brick Road | 150 | 18 |
| `beast` | The Enchanted Rose | 110 | 14 |
| `wonder` | Wonderland | 160 | 20 |
| `pan` | Neverland | 110 | 12 |
| `classic` | Storybook Classics | 190 | 25 |
| `america` | Tall Tales & Legends | 130 | 14 |
| `magic` | Realm of Magic | 150 | 38 |

### Holiday collections

| Category id | Name | Tales | Distinct subjects |
|---|---|---:|---:|
| `xmas` | Christmas Wonderland | 280 | 29 |
| `thanks` | Thanksgiving Harvest | 200 | 22 |
| `valentine` | Valentine's Day | 170 | 19 |
| `july4` | Fourth of July | 170 | 19 |
| `halloween` | Halloween Night | 210 | 24 |
| `easter` | Easter Spring | 160 | 20 |
| `holidays` | More Holidays (New Year's, St. Patrick's, Hanukkah, Mother's Day, Father's Day, Juneteenth, Memorial Day, Labor Day, Veterans Day and more) | 190 | 22 |

### How a "tale" is made (important to understand)

Tales are **not** one unique hand-drawing each. A tale is a **subject** (a hand-authored illustration, such as a windmill, a fox or a crown) placed into an **environment/scene** (sky, ground, weather, time of day, props), with a generated title and story line. The total library is therefore the product of well-drawn subjects and a set of scenes, with deterministic variety. **296 distinct subjects** are authored in total (the per-category counts in the tables above); many fixed subjects vary only by environment, so the number of visually unique pictures is smaller than 2,380. Titles are guaranteed unique across the whole library.

---

## Holidays and seasons

Holiday logic lives in `index.html` (`HOL`, `holidayList`, `seasonFor`, `MAJOR`). Dates are computed for any year (including Easter via the standard computus and "nth weekday" rules). Each holiday has a **window**, the number of days before the holiday during which it counts as "in season".

| Holiday | Date rule | Window (days before) | Collection |
|---|---|---:|---|
| New Year's Day | Jan 1 | 7 | holidays |
| Valentine's Day | Feb 14 | 21 | valentine |
| St. Patrick's Day | Mar 17 | 10 | holidays |
| Easter | Computed (Western) | 21 | easter |
| Mother's Day | 2nd Sunday of May | 10 | holidays |
| Memorial Day | Last Monday of May | 7 | holidays |
| Father's Day | 3rd Sunday of June | 10 | holidays |
| Juneteenth | Jun 19 | 6 | holidays |
| Fourth of July | Jul 4 | 21 | july4 |
| Labor Day | 1st Monday of Sept | 7 | holidays |
| Halloween | Oct 31 | 21 | halloween |
| Veterans Day | Nov 11 | 7 | holidays |
| Thanksgiving | 4th Thursday of Nov | 25 | thanks |
| Christmas | Dec 25 | 29 | xmas |

How the active season is chosen (`seasonFor`):

1. If today **is** a holiday, that holiday wins.
2. Otherwise the nearest upcoming **major** holiday (Christmas, Thanksgiving, Valentine's, July 4th, Halloween, Easter) whose window has opened wins.
3. Otherwise the nearest upcoming minor holiday inside its window.
4. Otherwise there is no season and the normal title screen and daily pick are used.

During a season:

- The **title screen** gets themed effects (falling snow, leaves, hearts, fireworks, bats and so on, defined in `title.js`).
- A **holiday card** appears on the shelf with a greeting and a countdown.
- **Puzzle of the Day** and **Surprise me** prefer that holiday's collection.
- Out-of-season holiday collections stay on the shelf, but their picks are kept out of random and daily selection so a July 4th picture doesn't show up in December.

Hanukkah and Kwanzaa have illustrations in the `holidays` collection, but those celebrations (and others such as Diwali or Lunar New Year, which have no art yet) are **not** given date-driven seasonal windows because their dates follow non-Gregorian calendars. Adding that is listed under [Extending](#extending-the-game).

---

## Puzzle of the Day and streaks

- The daily puzzle is derived from the **calendar date** (a deterministic hash of the local `YYYY-MM-DD` key), so it is the same all day and changes at local midnight. No server is involved.
- Solving the daily puzzle records the day. Consecutive solved days build a **streak**; missing a day resets it.
- The daily pick respects the season logic above.

---

## Settings

Open with the ⚙ button.

| Setting | What it does |
|---|---|
| **Classic hatch mode** | Marks unfilled cells with slashes and stars instead of solid color — the traditional "hatching" look. |
| **Guide glow** | Softly highlights the remaining cells that match the selected color chip. |

Both are saved with your progress.

---

## Saved data

- Storage: browser `localStorage`, key **`onceUponAHatch.v3`** (older `v1`/`v2` keys are read for migration where applicable).
- Contains: in-progress boards, solved tales, shelf order, streak and last-played day, and the two settings.
- It never leaves the device. There is no analytics, no network call for data and no login.
- To reset: clear site data for the page in your browser, or run `localStorage.removeItem('onceUponAHatch.v3')` in the console.
- If storage is unavailable (private window, blocked cookies), the game still plays but won't remember progress after you leave. All storage access is wrapped in `try/catch`.

### Save picture

After solving, **Save picture** renders the finished tale to a PNG (`once-upon-a-hatch-<id>.png`) via `canvas.toBlob`. On GitHub Pages this uses a standard download link. (When the game is hosted as a Claude Artifact, it uses that viewer's `downloads` capability instead; the standard link is the automatic fallback.) On some phone browsers the hint "Press and hold the picture to save it" is shown as a backup.

---

## Project structure

```
once-upon-a-hatch/
├── index.html          Page shell, CSS, game engine, UI, holidays, settings, save logic
├── puzzles.js          6 hand-drawn "pocket" puzzles (apple, castle, gingerbread, ...)
├── tales.js            TaleGen engine: canvas API, environments, planner, title/story
│                       generator, category list (CATS), "Realm of Magic" subjects
├── title.js            Title-screen animation and seasonal effects
├── tales_oz.js         Subjects: The Yellow Brick Road
├── tales_beast.js      Subjects: The Enchanted Rose
├── tales_wonder.js     Subjects: Wonderland
├── tales_pan.js        Subjects: Neverland
├── tales_classic.js    Subjects: Storybook Classics
├── tales_america.js    Subjects: Tall Tales & Legends
├── tales_xmas.js       Subjects: Christmas (part 1)
├── tales_xmas2.js      Subjects: Christmas (part 2)
├── tales_thanks.js     Subjects: Thanksgiving (part 1)
├── tales_thanks2.js    Subjects: Thanksgiving (part 2)
├── tales_val.js        Subjects: Valentine's (part 1)
├── tales_val2.js       Subjects: Valentine's (part 2)
├── tales_july.js       Subjects: Fourth of July (part 1)
├── tales_july2.js      Subjects: Fourth of July (part 2)
├── tales_more.js       Subjects: More Holidays (Juneteenth and others)
├── tales_more2.js      Subjects: Halloween, Easter, More Holidays additions
├── tales_more3.js      Subjects: Easter and More Holidays additions
├── tales_more4.js      Subjects: Halloween additions
├── .nojekyll           Tells GitHub Pages not to run Jekyll
└── README.md           This file
```

### Script load order (matters)

`index.html` loads scripts in this order, each as a classic `<script>`:

```
puzzles.js → tales.js → tales_oz → tales_beast → tales_wonder → tales_pan →
tales_classic → tales_america → tales_xmas → tales_xmas2 → tales_thanks →
tales_thanks2 → tales_val → tales_val2 → tales_july → tales_july2 →
tales_more → tales_more2 → tales_more3 → tales_more4 → title.js
```

`tales.js` must come first among the tale files because it defines the global `TaleGen`; every `tales_*.js` file registers more subjects onto it. `title.js` is last. The game builds its library from `TaleGen.buildLibrary(...)` after all of them have loaded.

### Page layout

`index.html` is a single document with inline CSS and one main script. It is mobile-first (`viewport-fit=cover`, safe-area padding, touch-action rules) and scales up for desktop. Fonts: Google Fonts are requested, with system serif/sans fallbacks if offline.

---

## How the art works

Pictures are drawn **procedurally at load time**, not shipped as image files. Each 64 × 64 picture is painted in code onto an offscreen canvas, then **quantized to a limited palette** (the chips). That palette is what the player fills in.

### A subject

Each illustration is an object registered with the engine:

```js
{
  k: 'windmill',            // unique key
  n: 'Windmill',            // display noun used in titles
  fixed: 1,                 // optional: varies only by environment
  envs: ['meadow', 'dusk'], // which scenes it may appear in
  gy: 0.8,                  // ground line (0..1)
  hy: 0.5,                  // horizon / focal height
  float: 0,                 // 1 if the subject floats (no ground)
  sh: 1,                    // draw a ground shadow
  lines: ['A windmill turned all night...'],  // story lines
  draw: function (c, P, r, o) { /* drawing code */ }
}
```

### Drawing API (`c`)

All coordinates are **0..1** across the 64 × 64 canvas.

| Call | Purpose |
|---|---|
| `c.P(points, tone, opts)` | Filled polygon. `points` is a flat array `[x1,y1,x2,y2,...]`. |
| `c.R(x,y,w,h,tone,opts)` | Rectangle |
| `c.E(cx,cy,rx,ry,tone,opts)` | Ellipse |
| `c.DM(cx,cy,rx,ry,tone,opts)` | Top-half ellipse (domes) |
| `c.RE(...)` | Rounded rectangle/ellipse variant |
| `c.RG(cx,cy,r0,r1,tone,opts)` | Ring (outer radius `r1`, inner `r0`) |
| `c.ST(cx,cy,R,r,tone,opts,rot)` | Five-point star |
| `c.L(x1,y1,x2,y2,w,tone,opts)` | Thick line |
| `c.dot(x,y,color,size)` | Single-cell highlight |
| `c.c(hex)` / `c.tone(hex)` | Register a color / get its tonal ramp |
| `opts.flat` | Disable shading on this shape |
| `opts.pat` | Pattern function (stripes, checks, ...) |
| `c.mir` | Mirror drawing around the vertical axis |

`P` is the scene palette (`P.a`, `P.b`, `P.gold`, `P.glow`, `P.white`, ...). Colors must be **6-digit hex** (`#e8c880`, not `#ec8`). Shapes are shaded automatically with light/mid/dark tones so a flat polygon still reads as a lit object.

### Titles and uniqueness

Titles come from the subject noun plus scene/adjective pools. `dupcheck.js` (in the development repo) verifies there are no duplicate titles across the whole library; add subjects or environments and rerun it.

---

## Extending the game

### Add a new subject

1. Open the relevant `tales_*.js` file (or create `tales_mynew.js`).
2. Add an entry with `k`, `n`, `envs`, `lines` and `draw` as above. Keep new keys unique.
3. If you created a new file, add a `<script src="tales_mynew.js">` line in `index.html` **after `tales.js` and before `title.js`**.
4. Make sure the category's `count` in `CATS` (in `tales.js`) does not exceed what its subjects × environments can produce uniquely.
5. Reload and play it; check it reads clearly at 64 × 64 (thumbnails are small!).

### Add a new category

1. Push an entry onto `CATS` in `tales.js` with `id`, `name`, `tag`, `sub`, `count`, `emoji`, `accent`.
2. Register subjects whose `cat`/category membership includes the new id (see how `subjectsOf(cat)` and the `HOL_EXTRA` / env lists widen holiday categories).
3. For a holiday, also add a `HOL` entry in `index.html` and, if it should rank as a major season, add its id to `MAJOR`.

### Add a holiday with a lunar/non-Gregorian date

Add an `at: function (y) { ... }` that returns the right `Date` for year `y` (a lookup table of future dates is the simplest reliable approach), set a `win`, and point `cat` at a collection.

### Change difficulty

Grid size and palette size are set in the engine in `tales.js`. Fewer chips and bigger regions make easier tales.

---

## Testing and validation

The development workflow used these checks (the scripts are not included in this folder; they were Node/Playwright scripts kept alongside the source):

- **Library validation**: generate every tale and assert no exceptions, a sensible color count (19–30), and zero duplicate titles. Last run: **2,380 tales, 0 errors, 0 duplicates**.
- **Art review**: contact sheets of every subject per category were rendered and inspected, and weak designs were redrawn by hand.
- **Mobile emulation**: Playwright with touch emulation, CDP touch events, tap and drag painting, pinch zoom.
- **End-to-end**: a full solve of a tale, solved modal appears, picture saves, progress persists across reload.
- **Seasonal smoke test**: the page was loaded under faked dates to confirm that each holiday theme, card and daily pick activates correctly.
- **Packaging test**: this exact folder was served over HTTP and loaded with zero console errors and every script resolving.

You can do a quick manual check yourself: open the page, open the browser console, and confirm there are no red errors.

---

## Browser support and requirements

- Current Chrome, Edge, Firefox and Safari (desktop and mobile), roughly the last few years of releases.
- Needs JavaScript, `<canvas>`, `localStorage` (optional but recommended), Pointer Events.
- Works offline once loaded **except** for Google Fonts, which fall back to system fonts.
- No cookies, no external scripts.

---

## Known limitations

Stated plainly:

- **Tested in emulation only.** Touch behavior was verified with Playwright's mobile emulation and synthesized touch events, **not on a physical phone or tablet**. Please try it on your own device and report anything odd.
- **Not 2,386 unique drawings.** The library is hand-designed subjects × scenes with generated titles; many tales share an illustration with a different setting. See [How a "tale" is made](#how-a-tale-is-made-important-to-understand).
- **Art quality is uneven.** Around 45 designs received a dedicated redraw pass; others, particularly some Realm of Magic and older designs, are plainer than the best ones. At 64 × 64, some objects will always be abstract.
- **Non-Gregorian holidays** (Hanukkah, Kwanzaa) have some art but no automatic seasonal window yet; Diwali and Lunar New Year have no art yet.
- **Save picture** is verified in a normal browser flow; the Claude Artifact viewer's save prompt was not seen on a real device.
- **Fonts** need internet for the intended look; otherwise fallbacks are used.
- **Progress is per-browser, per-site.** No sync between devices.
- No sound, no accessibility audit beyond labelled buttons and `aria-pressed` toggles; color-blind players can use **Classic hatch mode** and the numbers on cells.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page on GitHub Pages | Make sure `index.html` is at the repo **root**, Pages is set to the right branch/folder, and you waited a couple of minutes. |
| 404 for `tales_*.js` in the console | A file was missed in the upload. All 21 `.js` files must sit next to `index.html`. Filenames are case-sensitive. |
| "TaleGen is not defined" | `tales.js` failed to load or loads after a `tales_*.js`; check the script order above. |
| Old version still showing | Hard-refresh, or clear site data / disable cache. |
| Progress vanished | Browser data was cleared, private browsing was used, or the site's address changed. |
| Layout huge on phone | Make sure the `<meta name="viewport">` tag in `index.html` is intact. |
| Fonts look plain | Offline or blocked Google Fonts; the fallback fonts are intentional. |

---

## License and credits

- **Game, code and art:** made for Tim (techtimmyd) with Claude. All illustrations are original procedural drawings generated by the code in this repository.
- Story worlds are inspired by public-domain classics and folklore (Oz, Beauty and the Beast, Alice's Adventures in Wonderland, Peter Pan, fairy tales, American tall tales). Character designs are original interpretations, not reproductions of any film or branded artwork.
- **No license has been chosen yet.** Until you add a `LICENSE` file, default copyright applies (all rights reserved by the owner). If you want others to reuse the code, pick a license on github.com via **Add file → Create new file → `LICENSE`** (GitHub offers templates such as MIT).
- Fonts: Google Fonts, under their own open licenses, loaded from Google's servers at runtime.

Enjoy the hatch.
