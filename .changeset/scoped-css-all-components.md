---
"@recursica/adapter-mantine-v8": minor
---

All components now style themselves from the scoped CSS stable root names and `data-recursica-*` attributes instead of variant-path variables; the theme files are refreshed to match. Disabled and error states of form controls now use the real token values, so some goldens (DatePicker, NumberInput and Tree disabled states) change. Chip, Tree, Tabs and Dropdown options now take their disabled opacity from the tokens, and Link's visited colour works again.
