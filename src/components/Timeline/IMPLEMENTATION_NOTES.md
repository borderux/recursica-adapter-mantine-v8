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
- Mantine renders the bullet and has no per-item attribute hook, so a layout effect sets `data-recursica="timeline-bullet"`, `data-recursica-types` (the `bulletVariant`) and `data-recursica-selection-states` on it. Until the effect runs (server render) the bullet has no contract values.
- `--tl-bullet-size` is set on the bullet only. Mantine reads it nowhere else that this adapter changes (the root `--offset` keeps Mantine's default).
- Icon colour/size apply only to the `icon` and `icon-alternative` types, and avatar opacity only to `avatar`, because those names exist only for those types.
- The avatar bullet is sized by `avatar-size` (40px) instead of `bullet-size`, via `--tl-bullet-size` on the avatar type; the avatar image fills it, and Mantine's offset follows the larger size. `avatar-size` exists only for the `avatar` type.
