# Ninja Must Die — High-Tier Arcana System Guide

A clean, mobile-friendly static web article covering High-Tier (4-Rune) Arcana sets, weekly 4SE portal farming, Lv. 1–10 upgrade milestones, stat caps, and battle relay rules.

## Repository Structure

```text
nmd-arcana-guide/
├── index.html      # Semantic article layout & collapsible side-dock index
├── css/
│   └── styles.css  # Typography hierarchy, indentation guides & collapsible side-dock styles
├── js/
│   ├── data.js     # Structured data for all 5 Arcana Sets & Common Effects (edit here)
│   └── app.js      # Collapsible side-dock logic, level inspector & article renderer
└── README.md       # Editing & GitHub Pages deployment instructions
```

## How to Edit Content

- **Update Rune Stats, Caps, or Descriptions:** Edit `js/data.js` (`ARCANA_SETS` and `COMMON_EFFECT_GROUPS`).
- **Adjust Typography, Indentation, or Colors:** Edit `css/styles.css` (CSS variables at the top under `:root`).
- **Edit Core Guide Sections:** Edit `index.html` (Sections `1`, `2`, and `5`).

## Hosting on GitHub Pages

1. Create a new repository on GitHub (e.g., `nmd-arcana-guide`).
2. Upload `index.html`, `css/`, `js/`, and `README.md` to the repository root.
3. Open **Settings -> Pages**, set **Source** to **Deploy from a branch** (`main` / `root`), and click **Save**.
