# Radio Implementation Notes

### Accessible name lands on the native `<input>` (verified 2026-10-15)

`RequireAccessibleLabel` enforces a name at compile time (`label`, `aria-label` or `aria-labelledby`). Mantine forwards `aria-*` to the native `<input>` and auto-generates the `id` that links `<label for>`, so no adapter code is needed. This is the behavior the other adapters must match. Covered by `src/components/NativeInputA11y.dom.test.tsx`, which asserts it for Checkbox, Radio and Switch.
