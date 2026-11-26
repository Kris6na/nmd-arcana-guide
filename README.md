# Ninja Must Die — High-Tier Arcana System Guide

A clean, mobile-first static web guide covering High-Tier (4-Rune) Arcana sets, 4SE weekly portal farming, Lv. 1–10 upgrade milestones, stat caps, and battle stacking rules.

## Project Structure

```text
nmd-arcana-guide/
├── index.html      # Main page layout & section structure
├── css/
│   └── styles.css  # Mobile-first theme, colors & responsive layout
├── js/
│   ├── data.js     # All Arcana Set stats, Common Effects & caps (edit here!)
│   └── app.js      # Interactive level slider, filters & DOM rendering
└── README.md       # Hosting & editing instructions
```

## How to Edit Content

- **Update Rune Stats, Caps, or Descriptions:** Open `js/data.js` and edit the `ARCANA_SETS` or `COMMON_EFFECT_GROUPS` objects. No HTML changes needed.
- **Change Colors or Styling:** Open `css/styles.css` and adjust the CSS variables inside `:root` at the top of the file.
- **Edit Overview Rules:** Open `index.html` and update the text inside Sections `01`, `02`, or `05`.

## How to Host on GitHub Pages

1. Create a new public repository on GitHub (for example, `nmd-arcana-guide`).
2. Upload all files and folders (`index.html`, `css/`, `js/`, `README.md`) to the root of the repository.
3. Go to **Settings -> Pages** in your GitHub repository.
4. Under **Build and deployment -> Source**, select **Deploy from a branch**, choose `main` and `/ (root)`, and click **Save**.
5. Wait ~1 minute and refresh the Pages settings screen to get your live URL (`https://<your-username>.github.io/nmd-arcana-guide/`).
