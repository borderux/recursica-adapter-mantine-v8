# Pagination Implementation Notes

## Architecture: Recursica Buttons driven by the manifest

Forge's `ui-kit.components.pagination` defines its page and navigation controls as `Button`
variants (`active-pages`, `inactive-pages`, `navigation-controls`, each with a `selected-variants`
style and size). Pagination therefore renders Recursica `Button`s with those props and does no
button styling of its own: radius, padding, colors, hover and disabled all come from `Button`.

- `Pagination` reads the selected `style` and `size` per role from the manifest with
  `useRecursicaManifest()` (`adapter-common`), provided by `RecursicaThemeProvider`'s `manifest`
  prop. It throws if there is no manifest or if a role has no `selected-variants`. The values are
  passed to `Button` as is, with no validation and no fallbacks.
- `content` (`label`, `icon-label`, `icon-only`) is not read: `Button` derives it from its own
  children and icon, so page numbers are `label` and the navigation buttons are `icon-only`
  (`icon-label` with `withLabels`).

## Why not Mantine's `Pagination.Control`

Mantine's `Pagination.Control` is not polymorphic, so it can't render our `Button`. The component is
built on `usePagination` from `@mantine/hooks` instead (page state, ranges, siblings/boundaries),
with its own context shared by `Pagination.Root`, `Items`, `Control`, `Dots`, `Next`, `Previous`,
`First` and `Last`. Page buttons set `aria-current="page"` on the active page, and the navigation
buttons have fixed `aria-label`s.

## Labels

`withLabels` adds a text label to each navigation button. `Previous`/`First` put the icon first
(`Button`'s `icon`); `Next`/`Last` put it after the label (`rightSection`, sized to the Button's
icon token via `[data-size]` in `Pagination.module.css`).

## Styling

`Pagination.module.css` only lays out the row (`item-gap`) and styles the dots (`dots-color`).

- The root is a `<nav aria-label="Pagination">` landmark, and each page button has `aria-label="Page N"`
  (`Previous page`, `Next page`, etc. for the navigation buttons). Both can be overridden by props.
