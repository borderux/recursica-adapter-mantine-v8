# LayoutGrid - Usage Guide

This document describes how to integrate and use the `LayoutGrid` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { LayoutGrid } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { LayoutGrid } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  return (
    // No layout props needed: columns, column-gutter, row-gutter and margin come from the design
    // system's layout-grids tokens and change per breakpoint.
    <LayoutGrid>
      <LayoutGrid.Col span={3}>Half width at 6 columns</LayoutGrid.Col>
      <LayoutGrid.Col span={{ xs: 6, sm: 3, md: 2 }}>
        Responsive width
      </LayoutGrid.Col>
    </LayoutGrid>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mantine-v8` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Variables and Theming**: LayoutGrid follows the design system's own `layout-grids` tokens — columns, column-gutter, row-gutter and margin — applied automatically. Forge can define these per breakpoint, and the grid follows. None of them are configurable via props.

> [!NOTE] > **Recommended: build your Mantine theme's breakpoints from the Forge manifest with `breakpointsFromRecManifest`.** Responsive keys such as `{ base, sm, md }` on `LayoutGrid.Col` (and on Flex, Stack, Group) come from `theme.breakpoints`, while Forge's layout grids switch via plain CSS `@media`. If the two differ, tokens flip at Forge's width and props at the theme's. `breakpointsFromRecManifest(manifest)` (exported from `@recursica/adapter-mantine-v8`) gives you a `theme.breakpoints` object that matches Forge, so both switch at the same widths (Mantine keeps its default `xs`–`xl` keys alongside Forge's names, so use Forge's names in responsive props). See [SETUP.md](../../../SETUP.md):
>
> ```tsx
> import { createTheme } from "@mantine/core";
> import { breakpointsFromRecManifest } from "@recursica/adapter-mantine-v8";
> import manifest from "./recursica_manifest.json";
>
> const theme = createTheme({
>   breakpoints: breakpointsFromRecManifest(manifest),
> });
> ```

---

## 4. Key Integration Features & Constraints

`LayoutGrid.Col`'s `span`, `offset`, `order`, `visibleFrom`, `hiddenFrom` match Mantine's own naming and
accept the same shapes, including per-breakpoint objects (`{ xs, sm, md, lg, xl }`) — all still a
straight Mantine pass-through for now. A formal `RecursicaLayoutGridColProps` contract in
`adapter-common` is scaffolded but not filled in yet (TODO, tracked in
`LAYOUT_GRID_IMPLEMENTATION_NOTES.md`).

`LayoutGrid` does not accept Mantine's `gutter` or `columns` props — column count, column-gutter,
row-gutter, and margin are design-system-managed (Forge-controlled, breakpoint-aware, applied via
CSS variables). For a fixed N-column grid unrelated to page layout, use Mantine's `Grid` directly.

`span` and `offset` (numeric, or a breakpoint map like `{ base: 12, md: 6 }`) are relative to
Forge's current column count, and `span` is clamped to it (span 6 fills the row at 3 columns).
Breakpoint maps switch at the app's Mantine theme breakpoints. `"auto"` and `"content"` don't
depend on the column count.

`grow`, `justify`, `align` are unchanged, matching Mantine's own naming.
