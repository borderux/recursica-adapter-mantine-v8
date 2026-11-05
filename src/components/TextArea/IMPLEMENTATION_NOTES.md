# TextArea Implementation Notes

The `TextArea` component is mapped explicitly to Mantine's `<Textarea>` following the same strict encapsulation rules as `TextField`.

1. **Naked Primitive Mapping:** Mantine's `Textarea` natively executes macro-label generation. To decouple it, we explicitly disable internal labels (`label={undefined}`) and inject it purely inside our generic `FormControlWrapper`.
2. **Text Field Token Re-Use:** Because text areas fundamentally share the same box-geometry, text, and state definitions as single-line inputs, it reads only the stable root names `--recursica_ui-kit_components_textarea_properties_*`.
3. **Autosize Handling:** The component supports Mantine's raw `autosize`, `minRows`, and `maxRows` parameters out of the box dynamically via property passthrough.

## Scoped CSS contract

Resolved by `data-recursica="textarea"` + `data-recursica-layouts="stacked|side-by-side"` (from `formLayout`) +
`data-recursica-error` / `data-recursica-disabled`, set on the outer `FormControlWrapper` element
(`.layoutOverride`) and inherited by `.root`/`.input`. Per-state `!important` color rules, per-layout
blocks and the border-size `recursica-ignore`s are removed. `opacity` exists only while disabled, so
`.root[data-disabled] .input` uses `var(..._opacity, 1)`. Gaps: none.
