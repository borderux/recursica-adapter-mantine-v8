# Checkbox Implementation Notes

## Architectural Philosophy

The `Checkbox` primitive requires aggressive structural modifications to decouple Mantine's built-in arrays (`<Checkbox.Group>`) tying the raw DOM nodes seamlessly back into Recursica's unified form definitions flawlessly.

### Checkbox Alignment Anchoring (gap overflow hack)

By default, placing a Checkbox alongside a deeply wrapping multi-line label causes native geometric drifts natively. Because Mantine aligns the Checkbox graphic to the top of standard `display: flex` boxes, its optical center will appear natively skewed slightly _too high_ against the very first typographic text-line.

We mathematically fix this alignment within `Checkbox.module.css` using explicit design variable arithmetic natively.
\`\`\`css
margin-top: calc(
(
var(--recursica_ui-kit_components_checkbox-item_properties_text_line-height) \*
var(--recursica_ui-kit_components_checkbox-item_properties_text_font-size) -
var(--recursica_ui-kit_components_checkbox_properties_size)
) / 2
) !important;
\`\`\`
This calculation ensures that the optical center of the `.inner` checkmark vector perfectly snaps onto the relative center of the text's line-height, permanently solving pixel-drifts natively!

### Checkbox.Group Overrides

To decouple `<CheckboxGroup>` away from `<Input.Wrapper>`, we explicitly extract the raw array execution mapped correctly against our identical `RecursicaFormControlWrapperProps` schema structurally!

### Accessible name lands on the native `<input>` (verified 2026-10-15)

`RequireAccessibleLabel` enforces a name at compile time (`label`, `aria-label` or `aria-labelledby`). Mantine forwards `aria-*` to the native `<input>` and auto-generates the `id` that links `<label for>`, so no adapter code is needed. This is the behavior the other adapters must match. Covered by `src/components/NativeInputA11y.dom.test.tsx`, which asserts it for Checkbox, Radio and Switch.

---

## Scoped CSS contract

**Decision:** Checkbox reads only the stable root names `--recursica_ui-kit_components_checkbox*_properties_*`, never a variant-path name. See `docs/SCOPED_CSS_INTEGRATION_GUIDE.md`.

**Implementation:**

- Mantine's `attributes` prop puts the contracts on its own elements. Mantine's `root` (input and label) is `checkbox-item`. The `inner` box (input and icon) is `checkbox`. Both get `data-recursica-disabled` when disabled or read-only. The group's `groupRoot` is `checkbox-group` with `data-recursica-layouts`.
- The `.label` reads the `checkbox-item` root names, so `checkbox-item` has to be the Mantine root. That is why the checkbox contract sits on `inner`: the input and icon share it, and `inner` is the only element that holds both.
- Selection state is not tracked in JS. The `checkbox` root (`inner`) contains the native input, so Forge's `:where(:has(input:checked))` and `:indeterminate` rules match natively. `CheckboxGroup` passes `value`/`defaultValue` straight to Mantine; `Checkbox` reads the group's `disabled` with Mantine's `useCheckboxGroupContext`, so no adapter context is needed.
- `opacity` (checkbox and checkbox-item) exists only while disabled, so CSS reads it with a fallback of `1`. The icon colour has no unchecked value, since no icon shows then.
- Stacked and side-by-side groups own different properties (`label-field-gap` versus `gutter` and `vertical-padding`), so those two layout blocks stay in the CSS, keyed on `data-recursica-layouts`.
- `:disabled` is kept only for `cursor`.
