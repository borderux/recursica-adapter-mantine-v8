---
"@recursica/adapter-mantine-v8": major
---

`Pagination` now renders Recursica Buttons whose style and size come from the Forge manifest, so `RecursicaThemeProvider` needs the `manifest` prop or Pagination throws; its compound parts are rebuilt on `usePagination` and Mantine's `Pagination` props are no longer passed through.
