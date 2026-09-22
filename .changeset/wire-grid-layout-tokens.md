---
"@recursica/adapter-mantine-v8": minor
---

`Grid` now wires the design system's `layout-grids` tokens: defaults to 6 columns with column-gutter/row-gutter/margin values applied automatically (previously an unstyled pass-through of Mantine's own 12-column default). **Breaking:** Mantine's `gutter` prop is no longer accepted — column-gutter/row-gutter/margin are design-system-managed, not integrator-configurable. `columns` remains the one Recursica-contract override, matching `Container.size`.
