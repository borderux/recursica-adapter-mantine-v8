---
"@recursica/adapter-mantine-v8": patch
---

Removed `.storybook/preview-head.html`'s hardcoded Google Fonts `@import`s, which had drifted out of sync with `recursica_tokens.json`'s actual typefaces (still referencing Inter/Roboto, missing Quattrocento/Dongle/Nunito Sans). Fonts are already loaded dynamically from the JSON via `preview.tsx`'s `withRecursicaFonts` decorator, so the static file was redundant and wrong.
