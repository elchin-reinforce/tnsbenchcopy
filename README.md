# TnSBench — internal demo site

A static, single-page information site for the internal TnSBench demo. No backend, no build step.

## Files

- `index.html` — the document (all content)
- `styles.css` — light, document-style theme
- `script.js` — outline scrollspy, reading progress, mobile drawer

## Preview locally

Open `index.html` directly, or serve the folder:

```bash
cd site
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy to Vercel

This is a pure static site, so no config is needed.

```bash
# from inside the site/ folder
npx vercel        # preview deploy
npx vercel --prod # production
```

Or drag-and-drop the `site/` folder into the Vercel dashboard. (You can also point Vercel
at the repo and set the project root / output directory to `site`.)

## Editing notes

- Content is plain HTML in `index.html`, grouped into `<section>` blocks (`overview`,
  `infra`, `tasks`, `evaluation`, `simulator`, `policy`, `results`, `outlook`).
- The outline/table-of-contents lives in the `<aside class="outline">` at the top of the body.
- The "frontier failure" trajectory currently features DeepSeek-V4-Pro and uses dialogue
  reconstructed from real tool traces; swap in another model or verbatim transcripts as needed.
