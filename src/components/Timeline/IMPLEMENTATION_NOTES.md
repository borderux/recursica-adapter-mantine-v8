# Timeline Implementation Notes

## Architecture

The `Timeline` component is a strict structural wrapper around Mantine's `<Timeline>` and `<Timeline.Item>` components.

- `Timeline.tsx` intercepts overarching properties like `lineWidth` and `bulletSize` to strip them out via `overStyled`, strictly adhering to the CSS token mapping in `.item` rules instead.
- `TimelineItem.tsx` implements a custom `timestamp` React node rendering slot to match the design system, positioning the text directly below the item's `children`.
- `TimelineItem.tsx` supports a custom `bulletVariant` prop (`"default" | "avatar" | "icon" | "icon-alternative"`) mapped onto `data-variant` to handle CSS variations dynamically.

## Limitations & Missing Tokens

- **Avatar Bullet Size**: `avatar-size` sizes the avatar bullet (see "Scoped CSS contract").

## Scoped CSS contract

**Decision:** Timeline reads only the stable root names `--recursica_ui-kit_components_timeline_properties_*` and `--recursica_ui-kit_components_timeline-bullet_properties_*`. See `docs/SCOPED_CSS_INTEGRATION_GUIDE.md`.

- `TimelineItem.tsx` sets `data-recursica="timeline"` and `data-recursica-selection-states="active|inactive"` on the item root. Title, description and timestamp inherit the colours from it. The Timeline root sets nothing, because the contract has no root-level axis.
- The active state is Mantine's `__active`, which `Timeline` injects into each item. It is passed through to Mantine unchanged.
- Mantine's own bullet element takes no per-item attributes, so it is an invisible, default-sized shell (it still positions the bullet on the connector; the root `--offset` keeps Mantine's default). `TimelineItem.tsx` always passes a `.bulletFace` span through Mantine's `bullet` prop; the span carries `data-recursica="timeline-bullet"`, `data-recursica-types` (the `bulletVariant`) and `data-recursica-selection-states`, and paints the visible bullet (size, border, background, radius, icon, avatar). The caller's `bullet` content renders inside it. Verified in Storybook: output is pixel-identical to the previous layout-effect approach.
- Icon colour/size apply only to the `icon` and `icon-alternative` types, and avatar opacity only to `avatar`, because those names exist only for those types.
- The avatar bullet face is sized by `avatar-size` (40px) instead of `bullet-size`; the avatar image fills it. `avatar-size` exists only for the `avatar` type.
