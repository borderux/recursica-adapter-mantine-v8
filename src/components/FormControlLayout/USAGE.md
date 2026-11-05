# FormControlLayout - Usage Guide

This document describes how to integrate and use the `FormControlLayout` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { FormControlLayout } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { FormControlLayout } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  return (
    <FormControlLayout label="Input Field" required>
      <input type="text" />
    </FormControlLayout>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mantine-v8` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Anti-override protection**: Rogues style injections (like inline `style` or arbitrary `className`) are automatically blocked by our prop layer unless `overStyled={true}` is explicitly provided.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Styling is entirely determined by local CSS variables defined in `recursica_variables_scoped.css` and mapped in the component's CSS module.

## Styling contract

The label column (`.leftSection`) sets `data-recursica="label"` with `data-recursica-layouts` (the `formLayout`) and `data-recursica-sizes` (the `labelSize`). It reads only the stable root names `--recursica_ui-kit_components_label_properties_{width,min-height,bottom-padding,vertical-padding,gutter}`. `bottom-padding` exists only for stacked; `vertical-padding` and `gutter` only for side-by-side, so each is read only under the matching `data-form-layout`.
