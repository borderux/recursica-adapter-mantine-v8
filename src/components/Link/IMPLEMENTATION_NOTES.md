# Link Component Implementation Notes

## States in Design Tokens

The design tokens (`recursica_variables_scoped.css`) provide the base link styling directly on `--recursica_ui-kit_components_link_properties_*` (no distinct `default` state), plus a `visited` state that the export remaps onto those same names via `data-recursica-visited`. Hover is not a per-component `link_variants_states_hover_*` token; it's driven by the brand-level `--recursica_brand_states_link_decoration` token (resolves to `underline`), applied on `.root:hover`. Earlier this token was exported as an invalid quoted string (`"underline"`), which silently failed and was mistaken for the token not existing at all — now fixed upstream to a bare keyword. There is no token for `active`. There isn't a per-component `focus` token either, but focus isn't left to the browser default: like every other interactive component (see Button), `.root:focus-visible` replaces the native outline with the global `--recursica_brand_states_focus_*` ring. This was previously missing here — Link (and anything composing it, e.g. Breadcrumb) fell back to the browser's native focus outline instead.

## Overriding Mantine's underline Prop

Mantine's `Anchor` component uses `underline="hover"` by default. Because our design system specifies exact `text-decoration` styles via CSS tokens, we explicitly pass `underline="never"` to the underlying Mantine component. This prevents Mantine from injecting its own text-decoration inline or via generic classnames, ensuring our scoped CSS remains the single source of truth.

## Base Layout

Mantine's `Anchor` renders an inline element by default and does not natively support `leftSection` like the `Button` component. To support an optional `icon` alongside the text, we enforce a baseline layout of `display: inline-flex` and `align-items: center` in `Link.module.css`.

When an icon is present, the component conditionally passes a `data-has-icon` attribute to the root element. The CSS module uses this attribute to apply the `icon-text-gap` token via the CSS `gap` property.

## Inner Wrappers

The icon and children are wrapped in internal `<span>` tags (`.iconWrapper` and `.labelText` respectively). This follows the component development guide for structural robustness, allowing us to enforce specific sizing on the icon and intrinsic text truncation behavior if the link is placed in a bounded container.

## Scoped CSS contract

`Link.tsx` sets `data-recursica="link"` on the root; Link has no variant axes. The CSS reads only `--recursica_ui-kit_components_link_properties_*` (see `docs/SCOPED_CSS_INTEGRATION_GUIDE.md`).

The export emits visited as `[data-recursica="link"][data-recursica-visited], [data-recursica="link"]:visited`, so the browser's `:visited` state remaps the root colour names by itself. Link reads only the root names and needs no visited prop or rules.
