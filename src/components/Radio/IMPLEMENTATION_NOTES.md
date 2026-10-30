# Radio Implementation Notes

### Accessible name lands on the native `<input>` (verified 2026-10-15)

`RequireAccessibleLabel` enforces a name at compile time (`label`, `aria-label` or `aria-labelledby`). Mantine forwards `aria-*` to the native `<input>` and auto-generates the `id` that links `<label for>`, so no adapter code is needed. This is the behavior the other adapters must match. Covered by `src/components/NativeInputA11y.dom.test.tsx`, which asserts it for Checkbox, Radio and Switch.

---

## Scoped CSS contract

**Decision:** Radio reads only the stable root names `--recursica_ui-kit_components_radio-button*_properties_*`, never a variant-path name. See `docs/SCOPED_CSS_INTEGRATION_GUIDE.md`.

**Implementation:**

- Mantine's `attributes` prop puts the contracts on its own elements. Mantine's `root` (input and label) is `radio-button-item`. The `inner` box (input and icon) is `radio-button`, with `data-recursica-selection-states` set to `selected` or `unselected`. Both get `data-recursica-disabled` when disabled or read-only. The group's `groupRoot` is `radio-button-group` with `data-recursica-layouts`.
- The `.label` reads the `radio-button-item` root names, so `radio-button-item` has to be the Mantine root; the radio contract sits on `inner`, the only element holding both input and icon.
- Mantine keeps checked state private, so `Radio` derives `selection-states` from the `checked` prop, else its own `onChange`-tracked state, else the group's value. `RadioGroup` always passes Mantine a controlled `value` and shares it (with `disabled`) through `RadioGroupStateContext`. Limitation: an uncontrolled standalone radio is not told when another radio of the same `name` takes the selection, nor on a native form reset.
- `opacity` (radio-button and radio-button-item) exists only while disabled, so CSS reads it with a fallback of `1`. The icon colour has no unselected value, since no icon shows then.
- Stacked and side-by-side groups own different properties, so those two layout blocks stay in the CSS, keyed on `data-recursica-layouts`. Stacked keeps its original margin-top of `label-field-gap`.
- `:disabled` is kept only for `cursor`.
