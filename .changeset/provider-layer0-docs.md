---
"@recursica/adapter-mantine-v8": patch
---

`RecursicaThemeProvider` now sets layer 0 on `document.body` instead of wrapping the app in a padded `<Layer layer={0}>`, matching adapter-common 1.5.0 and its docs.
