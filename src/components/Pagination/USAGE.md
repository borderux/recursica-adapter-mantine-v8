# Pagination - Usage Guide

This document describes how to integrate and use the `Pagination` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { Pagination } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Pagination } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  return <Pagination total={10} value={activePage} onChange={setPage} />;
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mantine-v8` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Requires the manifest**: Pagination reads which Button `style` and `size` to use for its pages and navigation controls from the Forge manifest, so `RecursicaThemeProvider` must be given `manifest={manifest}` (the parsed `recursica_manifest.json`). It throws without it. See [SETUP.md](../../../SETUP.md).
> - **Anti-override protection**: Rogues style injections (like inline `style` or arbitrary `className`) are automatically blocked by our prop layer unless `overStyled={true}` is explicitly provided.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Styling is entirely determined by local CSS variables defined in `recursica_variables_scoped.css` and mapped in the component's CSS module.
