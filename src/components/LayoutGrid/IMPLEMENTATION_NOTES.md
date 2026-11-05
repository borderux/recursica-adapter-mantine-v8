# LayoutGrid Implementation Notes

`LayoutGrid` is the Recursica layout grid. It wraps Mantine's `Grid`/`Grid.Col`, but unlike the other
primitive layout components (`Flex`, `Stack`, `Group`, `Container`) it has a formal Recursica prop
contract (`RecursicaLayoutGridProps` in `adapter-common`) and wires the design system's
`layout-grids` tokens. It was named `Grid` before 2026-10-02.

## Forge contract

Forge always emits a default grid with columns (default 6, editable), column-gutter, row-gutter and
side margin, in the CSS and in `recursica_manifest.json`. Additional breakpoints are overrides.
Because the variables are always defined, nothing here has a fallback value.

## No integrator-facing layout props

Columns, column-gutter, row-gutter and margin are design-system-managed, not per-instance settings.
`columns` was removed 2026-10-01 because Forge defines `layout-grids` per breakpoint, so no fixed
number is right at every viewport. For an arbitrary N-column grid, use Mantine's `Grid` directly.

## Breakpoints

Forge emits a responsive alias per grid var (`--recursica_brand_layout-grids_{columns,row-gutter,column-gutter,margin}`),
set from `_default_*` at `:root` and redefined inside Forge's `@media` blocks per non-default grid.
`LayoutGrid` reads only the alias, so tokens follow breakpoints with no JS. Overlapping ranges are
not guarded by Forge; the later `@media` block wins.

Responsive props (`span={{ base, md }}`, `visibleFrom`, and Flex/Stack/Group props) switch at the
Mantine theme's breakpoints, which Forge never edits. Integrators should build `theme.breakpoints`
with `breakpointsFromRecManifest` so both switch at the same widths. `RecursicaThemeProvider` is UI-kit agnostic and does not
compare the manifest against the theme.

## Why it is more than a thin wrapper

Mantine's Grid divides widths by a JS number; Forge's column count is a CSS variable redefined in
`@media` blocks, so Mantine's math can't follow it. All of `LayoutGrid.Col`'s span/offset handling
(`ColLayoutStyles`) exists to bridge that gap. Alternatives considered and rejected (2026-10-02):

- **Read the manifest in JS and pass Mantine the active column count.** Removes the per-column
  styles, but makes the manifest required, flips the layout after hydration (flash with SSR),
  creates a second source of truth next to the CSS variable, and loses span clamping.
- **Rewrite on native CSS grid.** Numeric spans get trivial, but breakpoint-map spans still need
  per-breakpoint rules, and Mantine's `grow`, `justify`, `align` and `type="container"` are lost.
- **Drop breakpoint-map spans.** Removes most of the code but is a real feature loss.

## How each token is applied

- **Columns**: Mantine computes widths from a JS number, which can't follow a CSS var.
  `LayoutGrid.Col` emits its own `<style>` rule (via Mantine's `InlineStyles`; inline styles would
  beat the breakpoint rules) setting `--rec-col-basis`, `--rec-col-max-width` and `--rec-col-offset`
  to `calc(min(span, columns) / columns * 100%)`, for the base value and every key of a
  breakpoint-map `span`/`offset`. It uses the theme's breakpoints, or the grid's `breakpoints` with
  `type="container"`. `.col.col` in `LayoutGrid.module.css` applies them in place of Mantine's
  `--col-flex-basis`/`--col-max-width`/`--col-offset`. An omitted span is 12, like Mantine.
  `"auto"` and `"content"` point the hooks back at Mantine's own variables, since they don't depend
  on the column count. Mantine still needs a `columns` number but it never decides a width
  (`MANTINE_UNUSED_COLUMNS`). `grow` is surfaced as `data-recursica-grow` on the root so CSS can keep
  Mantine's `max-width: 100%` for grown columns.
- **Column gutter**: passed to Mantine's `gutter` as `var(--recursica_brand_layout-grids_column-gutter)`.
- **Row gutter / margin**: no Mantine equivalent; `LayoutGrid.module.css` reads them directly.
  `.root.root` applies the margin, `.inner.inner` overrides `margin-block`, `.col.col` overrides
  `padding-block`. The doubled-class selectors beat Mantine's single-class specificity.
- Internal override hooks use the `--rec-*` prefix, never `--recursica*` (the build treats that as a
  real token) and never a name Mantine uses itself.

## `LayoutGrid.Col` contract is scaffolded

`RecursicaLayoutGridColProps` currently only contributes `children`. `span`, `order`, `visibleFrom`
and `hiddenFrom` were drafted and commented out (2026-09-22), so `LayoutGrid.Col` types them straight
off Mantine's `GridColProps`. No runtime effect. Queued in
`adapter-common/src/components/LayoutGrid/RecursicaLayoutGridColProps.ts`:

- `span`/`order`: mantine-v8 and mui-v7 independently built matching versions, worth formalizing.
  Mantine's name `span` was chosen over mui-v7's `size` (2026-09-22), so mui-v7 renames when this lands.
- `visibleFrom`/`hiddenFrom` and per-breakpoint maps: blocked on a Recursica breakpoint naming
  convention; `xs`/`sm`/`md`/`lg`/`xl` are Mantine's names. Don't copy them in.
- `offset`: never added, still undiffed between the adapters.

## Brand-layer exemption

`layout-grids` tokens have no `ui-kit` layer in Forge's model (a grid is a page-layout primitive, not
a component), so `LayoutGrid.module.css` reads `brand_layout-grids_*` directly, with
`recursica-allow-brand:` headers (see `packages/recursica-token-analyzer/README.md` in the monorepo).

## Stories

A single `Default` story reads `brand.layout-grids.default.columns` from the manifest (via `useRecursicaManifest()`) and fills two rows of that many single-column cells. Stories only use what the
`adapter-common` contract defines plus `span`, so they stay valid for every adapter; Mantine-only
props (`offset`, `grow`, `visibleFrom`/`hiddenFrom`, breakpoint-map spans) are not demonstrated.
