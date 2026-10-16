# Panel - Usage Guide

This document describes how to integrate and use the `Panel` component in your projects using `@recursica/adapter-mantine-v8`.

---

## 1. Import Reference

```tsx
import { Panel } from "@recursica/adapter-mantine-v8";
```

---

## 2. Basic Example

```tsx
import React, { useState } from "react";
import { Panel } from "@recursica/adapter-mantine-v8";

export default function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Panel opened={opened} onClose={() => setOpened(false)} title="Settings">
      <Text>This is a clean, structured visual container.</Text>
    </Panel>
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

---

## 4. Key Integration Features & Constraints

### Placement

Use the `placement` prop (not `position`) to choose which edge the panel slides in from: `"left"`, `"right"`, `"top"`, or `"bottom"`. It defaults to `"right"`.

### Header: required title and Close button

`title` and `onClose` are required. The header always renders the title and an icon-only Recursica Close button with `aria-label="Close"`; pass `closeButtonAriaLabel` to translate it. There is no prop to hide the Close button.

The `header` prop replaces the whole default header. Avoid it: a custom header must supply its own title and Close button, and the adapter can no longer guarantee either.

### Panel.Footer

A `Panel.Footer` sub-component is available for footer content and action buttons.

### Content Overflow

When content exceeds the panel's available height, the body scrolls internally while the header and footer stay fixed in place.
