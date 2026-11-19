# SegmentedControl - Usage Guide

This document describes how to integrate and use the `SegmentedControl` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { SegmentedControl } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { SegmentedControl } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  return <SegmentedControl data={["Preview", "Code", "Edit"]} />;
}
```

Each `data` item may also be an object with an optional `icon`, rendered ahead of the label:

```tsx
<SegmentedControl
  data={[
    { value: "daily", label: "Daily", icon: <CheckIcon /> },
    { value: "weekly", label: "Weekly" },
  ]}
/>
```

Every object item's `label` is a required, non-empty string. It is always the item's accessible name.

For icon-only segments, set `hideLabels`. Each segment then shows only its icon; its `label` stays the radio's accessible name (as visually hidden text) and shows as a tooltip on hover and keyboard focus. Every item must have an `icon`, otherwise the component throws.

```tsx
<SegmentedControl
  hideLabels
  data={[
    { value: "light", label: "Light theme", icon: <SunIcon /> },
    { value: "dark", label: "Dark theme", icon: <MoonIcon /> },
  ]}
/>
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mantine-v8` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Anti-override protection**: Rogues style injections (like inline `style` or arbitrary `className`) are automatically blocked by our prop layer unless `overStyled={true}` is explicitly provided.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Styling is entirely determined by local CSS variables defined in `recursica_variables_scoped.css` and mapped in the component's CSS module.

---

## 4. Key Integration Features & Constraints

The `variant`, `size`, `radius`, and `color` props are not available on this component, since appearance is fully controlled by the design system tokens. The active segment is shown as a floating indicator that moves behind the selected label, with a divider rendered between adjacent segments.

A top-level `disabled` disables every item at once; an individual item can still be disabled on its own via `data[].disabled`.
