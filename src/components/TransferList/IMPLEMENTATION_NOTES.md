# TransferList Implementation Notes

## Architecture overview

`TransferList` replaces the "coming soon" stub with a fully custom composite — neither
`@mantine/core` nor `@mui/material` ships a real dual-listbox component (MUI's docs "Transfer
List" is a List+Checkbox recipe, not a package export), so it's built from Recursica's own
primitives, the same situation `FileUpload`/`FileInput` were in.

Follows Matt's reference implementation (Forge's fallback `TransferList.tsx`) fairly closely:

- Two side-by-side panes (source/target), each: a header row (pane label + `Badge` count,
  `"selected / total"` once something's checked), a search `TextField`, then a scrollable list of
  `Checkbox` rows (`CheckboxGroup` for items carrying a `group` field).
- A column of four transfer `Button`s between the panes: single/double chevron, each direction —
  single moves only the checked items in that pane, double moves everything in that pane.
- Data model: `data`/`defaultData` as a `[sourceItems, targetItems]` tuple + `onChange`, matching
  Forge's controlled/uncontrolled pattern (same shape as `FileUpload`'s `files`/`onFilesAdded`).

## Scoped CSS contract (`data-recursica="transfer-list"`)

The CSS reads only `--recursica_ui-kit_components_transfer-list_properties_*`. The contract
attributes are set on the `WithReadOnlyWrapper`/`FormControlWrapper` root (not the inner `.root`),
because `top-bottom-margin` (axis `layouts`, = `formLayout`) feeds `--form-control-margin-bottom`
on that same element; custom properties inherit down to the panes. Attributes:
`data-recursica-layouts`, and `data-recursica-error` / `data-recursica-disabled` (present when
`error` / `disabled`). `colors_*`, `border-size` and `opacity` are overridden by the state rules
in the export, so the old `.root[data-error|data-disabled]` `!important` cascade is gone.
`opacity` exists only in `disabled`, so `.pane` uses `var(..._opacity, 1)`.

## Routed through `FormControlWrapper` directly, not Forge's hand-rolled label/assistive

Forge's reference renders its own `Label`/`AssistiveElement` directly instead of going through
`FormControlWrapper`. Per direction, this build uses `FormControlWrapper` instead — consistent
with every other form control in this codebase (and with `FileUpload`, which was reverted to
`FormControlWrapper` rather than hand-rolling that same thing). `formLayout`
(`stacked`/`side-by-side`), `label`, `required`, `assistiveText`/`description`/`helperText`, and
`error` all come from the standard wrapper; only the two panes + transfer buttons are the
component's own content.

## `state` axis: `disabled`/`error` props, not Forge's `state` string

Forge's reference takes a single `state="default"|"disabled"|"error"` prop. This build instead
uses the same convention as every other Recursica control: a boolean `disabled` prop plus
`FormControlWrapper`'s own `error` (message) prop — `error`'s mere presence is what triggers the
error visuals, exactly like `TextArea`/`CheckboxGroup`. The token export only defines
`disabled`/`error` state variants (no `focus`), matching Matt's direction to "follow the tokens."

## `readOnly` mode (added 2026-08-19)

Forge's reference has no read-only concept, but Matt asked for a `ReadOnly` story demonstrating
the selected items as a read-only list. Switched from calling `FormControlWrapper` directly to
routing through `WithReadOnlyWrapper` (the follow-up flagged in the original version of this note),
matching `TextArea`'s shape: `readOnly`/`readOnlyComponent`/`emptyValueComponent` added to the prop
surface via `ReadOnlyControlProps`, `readOnlyType="text"`, and `readOnlyValue` set to the target
pane's item labels (`effectiveData[1].map(item => item.label)`). Renders as a comma-joined text
list via the shared `ReadOnlyTextField`, same convention `CheckboxGroup`'s own read-only mode
already uses for an array of values — no new read-only renderer needed. The two panes + transfer
buttons (`activeComponent`) are skipped entirely when `readOnly` is set, same as every other
control.

## Height/gap/padding token audit (2026-08-19)

Matt flagged the pane height as "too short" and asked that gap/padding be tied to recursica
variables. Re-verified against `recursica_variables_scoped.css`: `properties_height` (200px),
`properties_width`, `properties_vertical-padding`/`properties_horizontal-padding`, and
`properties_gap` were already wired to their tokens (see "Token interpretation" above) — the 200px
pane height is the design token's own value, not a hardcoded fallback. Two spacing values genuinely
have no covering token in the 31-variable schema and are intentionally left as hardcoded pixels
(see `TransferList.module.css` comments) rather than reusing another component's token: the gap
between stacked `CheckboxGroup` blocks in `.paneList` (ungrouped row + each named group), and the
gap between the four transfer buttons in `.transferColumn`. If a token is added to the schema for
either, wire it in directly; until then this matches the established precedent (e.g. `FileUpload`'s
untokened icon size) of leaving a truly uncovered value hardcoded with a documented reason instead
of borrowing a sibling component's namespace.

## Token interpretation: unlabeled tokens with more than one plausible layout target

The 31-variable schema (`properties_*` + two `layouts.*` + `states.{disabled,error}`) has a few
names that don't pin down a single location by themselves:

- **`properties_gap`** — applied to the row holding `[source pane, transfer column, target pane]`.
  It's the only _unnested_ gap the schema defines at the component's own level (not under
  `header-style`, a state, or a layout), so it reads as the component's top-level layout gap.
- **`properties_title-filter-gap`** — between each pane's header row (label + count `Badge`) and
  its search field.
- **`properties_filter-items-gap`** — between each pane's search field and its item list.
- **`properties_header-style_*` / `properties_colors_header-color`** — typography/color for each
  pane's own header text, not the overall `FormControlWrapper` label (which has its own type
  styling already).
- **`properties_width` (300px) / `properties_height` (200px)** — taken as each pane's own fixed
  box size (`flex: 1 1 <width>`, so panes still stretch evenly in a wider container; `height` is
  literal since a dual-listbox needs a bounded, independently-scrollable list).

No `recursica-ignore` exemptions are needed.

## Border-size

`border-size` is read from the stable root name like every other property. The export currently
sets 1px for the base, `disabled` and `error`, so the border never shifts between states.

## No forge-defined focus state

`transfer-list` has no `states.focus` axis in the export — same as `FileInput`/`TextField`. Focus
is handled per-control (each `Checkbox`/`TextField`/`Button` already has its own focus ring); the
pane box itself has no focus state to render.

## Grouping and search are local, not per-item persisted state

Search filters each pane independently (`sourceSearch`/`targetSearch`); grouped items render under
a `CheckboxGroup` keyed by `item.group`, ungrouped items render as plain `Checkbox` rows above the
groups (alphabetized by group name) — same two-bucket split Forge's reference uses. Selection
(`sourceSelected`/`targetSelected`) is cleared on every transfer, matching Forge's behavior.

## Chevron icons are inline, not a shared icon set entry

Same precedent as `Tree`'s `ExpandGlyph`/`FileInput`'s `ClearIcon`: a single-chevron and a
double-chevron SVG are defined locally and flipped via `transform: scaleX(-1)` for the "left"
direction, rather than maintaining four separate paths or adding new shared icon-set entries for a
single component.
