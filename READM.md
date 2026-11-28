# NMD Arcana Guide

A reference guide to arcana skills, relays, and rune attributes.

**Read the guide:** https://kris6na.github.io/nmd-arcana-guide/

## About

This is a static, single-page guide. The content is fixed, so the whole page lives in one file with its styling included. There are no build steps and no dependencies.

## Files

- `index.html` is the guide itself, with HTML and CSS together.
- `_config.yml` is the GitHub Pages configuration.
- `README.md` is this file.

## Editing

1. Open `index.html` and find the section you want to change.
2. Edit the text between the tags.
3. Commit the change. GitHub Pages rebuilds the site within a minute or two.

To add a section, copy an existing `<section>` block and replace its contents.

## Colors

Section heading colors are set at the top of `index.html` in the `:root` block (`--lightning`, `--water`, `--fire`, `--wind`). The page follows the reader's light or dark setting automatically.
