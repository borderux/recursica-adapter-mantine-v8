# Grid Implementation Notes

The `Grid` component wraps Mantine's `Grid`/`Grid.Col`, but — unlike the other primitive layout
components (`Flex`, `Stack`, `Group`, `Container`) — it now has a formal Recursica prop contract
(`RecursicaGridProps` in `adapter-common`) wiring the design system's `layout-grids` tokens.
Earlier versions of this file documented the opposite policy ("no intrinsic design-system styles
required"); that was revisited on 2026-09-21 once Forge's export added `layout-grids` tokens
(`default_columns`, `default_column-gutter`, `default_row-gutter`, `default_margin` — see
`docs/migration/2026-09-21-forge-token-export.md`) with no equivalent anywhere else to consume
them.

## Only `columns` is an integrator-facing prop

Column-gutter, row-gutter, and margin are design-system-managed values (Forge-controlled, applied
via CSS variables), not per-instance settings — the integrator does not configure them. Only
`columns` is exposed as an override, the same pattern `Container.size` uses for its own
token-backed default. An earlier draft of this component exposed `columnGutter`/`rowGutter`/
`margin` as props too; that was reverted after review — see git history on this file for that
approach if it's ever needed again.

## How each token actually gets applied

- **`columns`** has no CSS-variable equivalent in Mantine — it computes each column's flex-basis
  from a plain number. The design system default (6) is baked into `Grid.tsx` as a JS default
  (`columns ?? 6`), not wired live through CSS. If the token's value changes, this line needs a
  manual update. Callers may still override it (see `CustomColumnCount` story).
- **`columnGutter`** (the design token, not a prop) is passed straight to Mantine's own `gutter`
  prop as `var(--recursica_brand_layout-grids_default_column-gutter)` — always, not
  caller-configurable. This is the only axis Mantine's Grid natively parameterizes, so it drives
  Mantine's own internal width/margin-inline math unmodified.
- **`rowGutter`/`margin`** (the design tokens) have no Mantine equivalent at all. `Grid.module.css`
  reads them directly, always:
  - `.root.root` applies `margin: var(--recursica_brand_layout-grids_default_margin)` (Mantine has
    no root-level margin concept to conflict with).
  - `.inner.inner` overrides only `margin-block` (not the `margin` shorthand) with
    `var(--recursica_brand_layout-grids_default_row-gutter)` so it doesn't disturb Mantine's own
    horizontal `margin-inline` math, which stays driven by `columnGutter`.
  - `.col.col` overrides only `padding-block` for the same reason (`padding-inline` stays Mantine's
    own, driven by `gutter`).
  - All three use the doubled-class-selector trick (`.root.root`, not `.root`) to reliably beat
    Mantine's own compiled single-class specificity regardless of stylesheet load order — same
    idiom used elsewhere in this codebase (e.g. Chip).

## `Grid.Col`'s formal contract is scaffolded, not filled in yet

`RecursicaGridColProps` exists in `adapter-common`, and `Grid.tsx` here intersects `GridColProps`
with it — but as of 2026-09-22 it only contributes `children`. `span`, `order`, `visibleFrom`, and
`hiddenFrom` were all drafted as real contract fields during this work and then commented out
(Matt: get Grid merged first, come back to this later), so `Grid.Col` still types all four
straight off `MantineGridColProps`, same as before any of this started. No runtime change — this
is purely about where the types come from, not behavior.

What's queued up in `adapter-common/src/components/Grid/RecursicaGridColProps.ts` (commented,
with a TODO) for whenever this gets picked back up:

- `span`/`order`: both mantine-v8 and mui-v7 independently built matching versions of these with
  no shared contract driving either — worth formalizing. `span` also resolves a naming mismatch:
  Mantine calls the column-width prop `span`, mui-v7 calls it `size` — Matt already decided on
  Mantine's naming (2026-09-22), so mui-v7 will need to rename `size` to `span` when this lands.
- `visibleFrom`/`hiddenFrom`: same "both adapters independently agree" signal, but blocked on a
  real Recursica breakpoint naming convention — their `xs`/`sm`/`md`/`lg`/`xl` values are
  Mantine's own naming, not Recursica's, and Recursica doesn't have its own yet. Don't just copy
  Mantine's keys back in.
- `offset`: never added — still undiffed between the two adapters.
- Also note: `span`/`order`'s own per-breakpoint map variants (`{ xs: 6, sm: 3 }`) have the same
  `xs`/`sm`/`md`/`lg`/`xl` naming gap as `visibleFrom`/`hiddenFrom` — worth resolving together.

## Brand-layer exemption

`layout-grids` tokens have no `ui-kit`-layer representation in Forge's model — a grid is a
page-layout primitive, not a "component," so there was never going to be a
`ui-kit_components_grid_*` indirection layer for it to go through. `Grid.module.css` reads
`brand_layout-grids_default_*` directly, with `recursica-allow-brand:` exemption headers
documenting why (see the analyzer's own exemption-system docs,
`packages/recursica-token-analyzer/README.md` in the monorepo).

## Stories

`ResponsiveSpans` and `ResponsiveSizes` explicitly override `columns={12}` — they test Mantine's
own breakpoint/span system at standard 12-column proportions and aren't meant to exercise the
design system's 6-column default. `ResponsiveSizes` exists purely so mui-adapter's
`ui-kit-grid--responsive-sizes` story id has a source-of-truth counterpart to diff against (Mantine's
`Grid.Col` has no `size` prop, only `span` — `ResponsiveSpans` already covers that). `Default`,
`Offset`, `Grow`, and `CustomColumnCount` all exercise the real 6-column default (or an explicit
override of it) and were resized from the old 12-column assumptions accordingly.
