# Grid - Usage Guide

This document describes how to integrate and use the `Grid` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { Grid } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Grid } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  return (
    // No props needed for the design system default: 6 columns, with the design system's own
    // column-gutter/row-gutter/margin values.
    <Grid>
      <Grid.Col span={3}>Half width (of 6)</Grid.Col>
      <Grid.Col span={{ xs: 6, sm: 3, md: 2 }}>Responsive width</Grid.Col>
    </Grid>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mantine-v8` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Anti-override protection**: `Grid` is a primitive layout component (see [OVERSTYLING.md](../../../OVERSTYLING.md)), so standard Mantine layout props pass through freely without needing `overStyled`.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Grid follows the design system's own `layout-grids` tokens — 6 columns, with column-gutter/row-gutter/margin applied automatically. Only `columns` is an integrator-facing override; the gutter/margin values are design-system-managed and not configurable via props.

---

## 4. Key Integration Features & Constraints

`Grid.Col`'s `span`, `offset`, `order`, `visibleFrom`, `hiddenFrom` match Mantine's own naming and
accept the same shapes, including per-breakpoint objects (`{ xs, sm, md, lg, xl }`) — all still a
straight Mantine pass-through for now. A formal `RecursicaGridColProps` contract in
`adapter-common` is scaffolded but not filled in yet (TODO, tracked in
`GRID_IMPLEMENTATION_NOTES.md`).

`Grid` no longer accepts Mantine's own `gutter` prop — column-gutter, row-gutter, and margin are
design-system-managed (Forge-controlled, applied via CSS variables) rather than integrator
settings:

- `columns?: number` — the only design-token-backed override on Grid; defaults to 6.

`grow`, `justify`, `align` are unchanged, matching Mantine's own naming.
