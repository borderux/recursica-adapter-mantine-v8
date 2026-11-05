# Avatar Component Implementation Notes

## Architecture Decisions

The `Avatar` component is an adapter over Mantine's `Avatar`. To ensure adherence to the `COMPONENT_GUIDE_WALKTHROUGH.md`:

- We do not wrap `MantineAvatar` in any custom standard `div` elements, preserving DOM structure.
- All styles strictly pull from explicit `--recursica_ui-kit_components_avatar_*` CSS tokens.

## Structural Workarounds

### Scoped CSS contract

The root carries `data-recursica="avatar"` plus one attribute per axis; the CSS reads only the stable root names `--recursica_ui-kit_components_avatar_properties_*`.

- `data-recursica-styles="image|icon|text"` is derived from props (`src` -> image, `icon` -> icon, otherwise text).
- `data-recursica-sizes="small|default|large"` is the `size` prop.
- `data-recursica-types="solid|outline|ghost"` is the `variant` prop. It is omitted for `image`, which has no types axis.

`color` is the one style-gated declaration: the export defines `text-color` only for text and `icon-color` only for icon. `border-size` comes from the types axis (or the image style), not from sizes. `.iconWrapper` and `.textWrapper` read the size-axis `icon-size` / `text_*` names directly since the CSS is unconditional.

### Flex Layout & Internal Spans

Since Avatar children (icons or initials) require robust centering that might differ heavily across Recursica size mappings, all child content defaults to being wrapped in `span` elements (either `.textWrapper` or `.iconWrapper`). These spans enforce 100% height and flex formatting independent of the Mantine container constraints.

### CSS Reset Hacks

Noticeable `/* HARDCODE: ... */` hacks are deployed within `.root` to completely zero-out Mantine's `--avatar-bg` and internal variables statically since Recursica handles background-colors inherently via the CSS variants cascade.

### `variant` mapping is a genuine match here (unlike MUI's)

Mantine's native `Avatar.variant` (`'filled'|'light'|'gradient'|'outline'|'transparent'|...`)
really is the same color-treatment concept Recursica's own `variant` is, so `mapVariant`
(`solid→filled, outline→outline, ghost→transparent`) is a correct, meaningful mapping — even
though the CSS reset hack above means it's visually inert either way. Worth noting only because
the MUI adapter's `Avatar.variant` means something completely different (shape) and had a real
bug from assuming the same word meant the same thing there; see mui-adapter's own
`IMPLEMENTATION_NOTES.md`.
