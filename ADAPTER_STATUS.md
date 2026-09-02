# Recursica Mantine v8 Adapter Status

_Last updated: 2026-09-02_

<!-- recursica:meta adapter="mantine" -->

## What this document is

This is the **adapter status document** for `recursica-adapter-mantine-v8` — the source of truth
for how this adapter's Recursica components relate to the underlying Mantine UI kit
(`@mantine/core`, plus `@mantine/dates`) it wraps.

1. Which Recursica components map directly onto a Mantine component, and what that mapping is.
2. Which Recursica components have no usable Mantine equivalent and are hand-built instead.
3. Which Mantine components/exports this adapter styles internally with Recursica design tokens
   without exposing them as a first-class Recursica component.
4. Which Mantine components have no Recursica equivalent at all, and why.

## Format, for parsers

This file is both human-readable Markdown and machine-parsable. Everything a parser needs is
delimited by HTML comments, which render invisibly wherever this file is viewed as Markdown
(GitHub, Storybook docs, recursica.com, etc.):

- **Document metadata**: a single `<!-- recursica:meta adapter="..." -->` comment right below the
  title, carrying `adapter` (this adapter's short name). Which kit(s) it wraps and their exact
  versions aren't repeated here — that's already in this repo's own `package.json` dependencies,
  and the kit name is in the title and prose below; duplicating it in the meta comment would just
  be another place for it to drift out of sync.
- **Structured tables**: each of the 4 categories above is wrapped in a matched pair of markers —

  ```
  <!-- recursica:table id="..." -->
  | Column A | Column B |
  |---|---|
  | ... | ... |
  <!-- /recursica:table -->
  ```

  `id` is always exactly one of 4 fixed values, each present exactly once, in any order:
  `direct-mappings`, `hand-built`, `internal-only`, `unsupported`. Every table is exactly 2
  columns — a component name, then a description — standard GFM table syntax (header row, `---`
  separator row, one data row per line). Extract a table by matching its marker pair and feeding
  the content between them to any GFM table parser.

- **Everything else** — prose, headings, footnotes, "near-miss"/"not in this category" callouts —
  is human context only, not structured data. A parser should ignore anything outside the marker
  pairs.

This shape is enforced automatically: `npm run validate-adapter-status` (wired into both this
repo's pre-commit hook and CI) fails if the meta comment, table ids, or table shape don't match
this spec.

## Methodology

Source: `recursica-adapter-mantine-v8` (`src/components/*`) cross-checked against the actual
`@mantine/core@8.3.18` package contents (`node_modules/@mantine/core/lib/components/*`, public
export surface only — internal `lib`-detail-only exports like `factory`/`styles-api`/`utils`
excluded). Every mapping below was confirmed by reading each component's full source file
(imports + JSX usage, including multi-line `import { ... } from '@mantine/core'` blocks), not
inferred from naming alone. `@mantine/dates` (also `8.3.18`, installed alongside `@mantine/core`)
is called out explicitly wherever it's the source package instead of `@mantine/core`.

---

## 1. Recursica components that map directly to a Mantine component

<!-- recursica:table id="direct-mappings" -->

| Recursica component | Mantine equivalent                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| Accordion           | `Accordion` (+ `Accordion.Item`/`Accordion.Control`/`Accordion.Panel`)                              |
| AutoComplete        | `Autocomplete`                                                                                      |
| Avatar              | `Avatar`                                                                                            |
| Badge               | `Badge`                                                                                             |
| Breadcrumb          | `Breadcrumbs`                                                                                       |
| Button              | `Button`                                                                                            |
| Card                | `Card` (+ `Card.Section`) — see note below                                                          |
| Checkbox            | `Checkbox`                                                                                          |
| CheckboxGroup       | `Checkbox.Group`                                                                                    |
| Chip                | `Chip`                                                                                              |
| Container           | `Container`                                                                                         |
| DatePicker          | `DatePickerInput` (`@mantine/dates`)                                                                |
| Dropdown            | `Select`                                                                                            |
| Flex                | `Flex`                                                                                              |
| Grid (+ GridCol)    | `Grid` (+ `Grid.Col`)                                                                               |
| Group               | `Group`                                                                                             |
| Heading             | `Title`                                                                                             |
| HoverCard           | `HoverCard`                                                                                         |
| Label               | `Input.Label`                                                                                       |
| Link                | `Anchor`                                                                                            |
| Loader              | `Loader`                                                                                            |
| Menu                | `Menu` (+ `Menu.Target`/`Menu.Dropdown`/`Menu.Item`/`Menu.Divider`/`Menu.Label`/`Menu.Sub*`)        |
| Modal               | `Modal` (+ `Modal.Root`/`Overlay`/`Content`/`Header`/`Title`/`CloseButton`/`Body`) — see note below |
| NumberInput         | `NumberInput` \*                                                                                    |
| Pagination          | `Pagination` (+ `Pagination.Root`/`Control`/`Dots`)                                                 |
| Panel               | `Drawer` (renamed; + `Drawer.Root`/`Overlay`/`Content`/`Header`/`Title`/`CloseButton`/`Body`)       |
| Popover             | `Popover` (+ `Popover.Target`/`Popover.Dropdown`)                                                   |
| Radio               | `Radio`                                                                                             |
| RadioGroup          | `Radio.Group`                                                                                       |
| SegmentedControl    | `SegmentedControl`                                                                                  |
| Slider              | `Slider` / `RangeSlider` \*                                                                         |
| Stack               | `Stack`                                                                                             |
| Stepper             | `Stepper` (+ `Stepper.Step`)                                                                        |
| Switch              | `Switch`                                                                                            |
| SwitchGroup         | `Switch.Group`                                                                                      |
| Table               | `Table` (+ `Table.Thead`/`Tbody`/`Tr`/`Th`/`Td`/`Tfoot`/`Caption`/`ScrollContainer`)                |
| Tabs                | `Tabs` (+ `Tabs.List`/`Tab`/`Panel`)                                                                |
| Text                | `Text`                                                                                              |
| TextArea            | `Textarea` \*                                                                                       |
| TextField           | `Input` \* (Mantine's low-level `Input` primitive — **not** `TextInput`)                            |
| TimePicker          | `TimePicker` (`@mantine/dates`) \*                                                                  |
| Timeline            | `Timeline` (+ `Timeline.Item`)                                                                      |
| Toast               | `Notification`                                                                                      |
| Tooltip             | `Tooltip`                                                                                           |
| Tree                | `Tree` (+ `useTree`/`getTreeExpandedState` hooks)                                                   |

<!-- /recursica:table -->

\* **NumberInput, Slider, TextArea, TextField, TimePicker, AutoComplete, DatePicker** all render
the real Mantine field primitive "naked" — i.e. with Mantine's own `label`/`description`/`error`/
`wrapperProps` deliberately left unset — and get their label/assistive-text/error chrome from
Recursica's own `FormControlWrapper` instead of Mantine's `Input.Wrapper`. This is a explicit,
repeated architectural choice: nearly every one of these files carries a comment to the effect of
_"Naked \[Input/Select/NumberInput/...\] execution safely decoupled from Mantine's macro
`Input.Wrapper` DOM hooks."_ See `FormControlWrapper` in §2 for why `Input.Wrapper` itself was
rejected as the wrapping mechanism.

\* **Slider** is a single Recursica component that switches between rendering Mantine's `Slider`
(single value) and `RangeSlider` (two-value tuple) depending on whether the incoming `value`/
`defaultValue` is a plain number or a `[number, number]` tuple.

\* **TimePicker** additionally renders an internal `BareDropdown` (wrapping Mantine's `Select`,
same as the public `Dropdown`) for its AM/PM segment — see §3.

**Card note:** Mantine's `Card` only ships a generic `Card.Section` for structural regions.
Recursica adds `Card.Header`/`Card.Footer` on top of it — both are thin wrappers around
`Card.Section` that force Recursica's `header`/`footer` token classes, plus a fully custom
`Card.Content` (a plain `<div>`, no Mantine backing) for token-driven interior padding/typography
that doesn't map to any single Mantine section variant. See `docs/COMPONENT_ISSUES.md` → Card §1.

**Modal note:** Recursica's `Modal.Body` wraps Mantine's `Modal.Body` but adds its own scroll-shadow
tracking (`data-scrolled-top`/`data-scrolled-bottom`) and pulls a `Modal.Footer` child out of the
scrolling region — `Modal.Footer` itself is a fully custom `<div>` with no Mantine counterpart
(Mantine has no dedicated modal-footer part).

**Near-miss, not counted above:** `FileInput` and `FileUpload` share a name with real Mantine
components (`FileInput`, plus the separate `@mantine/dropzone` package, which isn't installed —
see `package.json`), but neither Recursica component actually renders them. See §2.

---

## 2. Recursica components with no usable Mantine equivalent

<!-- recursica:table id="hand-built" -->

| Recursica component                                                                                    | Why                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| AssistiveElement                                                                                       | Mantine only exposes label/description/error text as _parts_ of `Input.Wrapper` (`Input.Description`, `Input.Error`), not as a standalone, reusable helper-text component. Hand-built `<div>` with its own icon + `role="alert"` logic.                                                                                                                                                                                                                                                                                                                                                                                                          |
| FormControlLayout                                                                                      | Recursica-specific label/field/assistive-text grid composition primitive; no Mantine concept — Mantine's own label/field pairing is baked into `Input.Wrapper`, not exposed as a separable layout primitive.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| FormControlWrapper                                                                                     | Mantine's `Input.Wrapper` was the obvious candidate and was explicitly rejected: nearly every field component (`TextField`, `TextArea`, `NumberInput`, `Dropdown`, `AutoComplete`, `DatePicker`, `TimePicker`, `Slider`, `FileInput`, `FileUpload`) renders its Mantine field "naked" and composes `Label` + `FormControlLayout` + `AssistiveElement` around it instead — comments across those files call this out directly ("safely decoupled from Mantine's macro `Input.Wrapper` DOM hooks"). Also **not part of the public API** — `FormControlWrapper` is never re-exported from `src/index.ts`, only used internally by other components. |
| ReadOnlyField (+ ReadOnlyTextField / ReadOnlyBooleanField / ReadOnlySwitchField / WithReadOnlyWrapper) | No Mantine read-only/view-mode rendering primitive exists at all — Mantine's inputs only have `readOnly`/`disabled` states on the live control, not a distinct display-only presentation. Hand-built from plain `<Box component="p">`/`<span>` elements.                                                                                                                                                                                                                                                                                                                                                                                         |
| FileInput                                                                                              | Mantine's real `FileInput` component exists (same name) but is not used: its value model is `File \| File[] \| null` (raw browser `File` objects with no id/metadata), while Recursica's contract is a controlled `RecursicaFileUploadItem[]` array (externally managed add/remove, per-item ids, drag-and-drop). Rebuilt from a native `<input type="file" hidden>` plus Recursica's own `Chip`/`Button`.                                                                                                                                                                                                                                       |
| FileUpload                                                                                             | Same value-model mismatch as FileInput. Also, Mantine core has no dropzone/drag-and-drop component at all — that functionality lives in the separate `@mantine/dropzone` package, which is not a dependency of this adapter. Rebuilt from scratch with custom drag-counter logic.                                                                                                                                                                                                                                                                                                                                                                |
| TransferList                                                                                           | No dual-listbox/transfer-list component exists anywhere in `@mantine/core`'s public surface. Composed entirely from other Recursica components (`Badge`, `Button`, `TextField`, `Checkbox`, `CheckboxGroup`).                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Layer                                                                                                  | Defined once in `@recursica/adapter-common` and re-exported unchanged; sets `data-recursica-layer` to scope token-driven surface/border/elevation CSS variables. Purely a Recursica infrastructure concept — Mantine has no per-subtree "elevation layer" primitive to map to.                                                                                                                                                                                                                                                                                                                                                                   |
| RecursicaThemeProvider                                                                                 | Also from `@recursica/adapter-common`, re-exported unchanged; sets `data-recursica-theme` on `document.documentElement`. Distinct from (and does not wrap) `MantineProvider`, which callers must still add themselves — no Mantine concept it maps onto.                                                                                                                                                                                                                                                                                                                                                                                         |

<!-- /recursica:table -->

---

## 3. Mantine components styled with Recursica but not exposed as a first-class Recursica components

<!-- recursica:table id="internal-only" -->

| Mantine component                                                                                                             | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Box` (`@mantine/core`)                                                                                                       | Powers the plain-text rendering shell inside `ReadOnlyTextField`, `ReadOnlyBooleanField`, and `ReadOnlySwitchField` (`<Box component="p">` / `<Box component="span">`), styled via those components' own token-driven CSS Modules rather than Box's own style props. Never exposed as a standalone Recursica `Box`.                                                                                                                         |
| `CheckIcon`, `CloseIcon` (small icon-glyph exports from `Checkbox`/`CloseButton`'s own folders, re-exported at the top level) | Rendered inside `Switch`'s thumb to draw the on/off glyphs, styled via `Switch`'s own token-driven CSS Module. Not exposed as Recursica icon components.                                                                                                                                                                                                                                                                                    |
| `CloseButton` (indirectly, via `Modal.CloseButton` / `Drawer.CloseButtonProps`)                                               | Mantine's `Modal`/`Drawer` compose their own `CloseButton` internally for the `Modal.CloseButton`/`Drawer.CloseButton` parts that Recursica's `Modal`/`Panel` re-wrap and style via those components' own CSS Modules. Recursica never imports or exposes `CloseButton` as its own component.                                                                                                                                               |
| `Select` (again, beyond the public `Dropdown` mapping in §1)                                                                  | Reused a second time via an internal, unexported `BareDropdown` (`Dropdown/BareDropdown.tsx`) to render `TimePicker`'s AM/PM segment — styled identically to the public `Dropdown` (same `Select`-based CSS Module) but without `FormControlWrapper`/label/error, since `TimePicker` already owns its own wrapper. Used inside `TimePicker` (AM/PM segment); explicitly documented as "internal use only" in the file's own header comment. |

<!-- /recursica:table -->

Also imported but not a styling case: `getFormattedDate` (`@mantine/dates`, a utility function, not
a component) — used by `DatePicker` to format its read-only display value. The one non-component
`@mantine/dates` import in the codebase, noted here for completeness but intentionally excluded
from the table above since it isn't a component/styling mapping.

---

## 4. Mantine components with no Recursica equivalent

Public components in `@mantine/core@8.3.18`'s export surface (`lib/components/*`, 89 total
directories) that nothing in Recursica's component set wraps or maps to at all:

<!-- recursica:table id="unsupported" -->

| Mantine component         | Why                                                                                                                                                                                                                                                           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActionIcon                | No dedicated icon-only button primitive in Recursica; icon buttons are built by passing `icon` to `Button`.                                                                                                                                                   |
| Affix                     | No fixed-position-overlay primitive in Recursica's component set.                                                                                                                                                                                             |
| Alert                     | Not part of Recursica's design system's component list; closest Recursica concept (`AssistiveElement`'s `error` variant) is field-scoped, not a standalone banner.                                                                                            |
| AngleSlider               | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| AppShell                  | Recursica is a component library, not a page-shell/layout-scaffolding system.                                                                                                                                                                                 |
| AspectRatio               | No Recursica primitive for aspect-ratio-constrained boxes; not covered by design tokens.                                                                                                                                                                      |
| BackgroundImage           | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Blockquote                | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Burger                    | No hamburger-menu-icon primitive; not part of Recursica's design system.                                                                                                                                                                                      |
| Center                    | Purely a Mantine layout-utility `Box` variant; Recursica leaves centering to `Flex`/`Group`/`Stack` props instead.                                                                                                                                            |
| Code                      | **Known gap** — flagged in `docs/COMPONENT_ISSUES.md` as "Missing the Code component," explicitly slated to be added as a wrapper around Mantine's `Code`.                                                                                                    |
| Collapse                  | No standalone show/hide-transition primitive in Recursica; expand/collapse behavior lives inside `Accordion`/`Tree` instead.                                                                                                                                  |
| ColorInput                | Not part of Recursica's design system — no color-picker form control defined in the UI Kit.                                                                                                                                                                   |
| ColorPicker               | Same as ColorInput.                                                                                                                                                                                                                                           |
| ColorSwatch               | Same as ColorInput.                                                                                                                                                                                                                                           |
| Combobox                  | Mantine's own low-level primitive that `Select`/`Autocomplete`/`MultiSelect` are built on internally; never imported directly by this adapter.                                                                                                                |
| CopyButton                | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Dialog                    | Redundant with `Modal` (Mantine's `Dialog` is a lighter-weight non-modal popup); not adopted separately.                                                                                                                                                      |
| Divider                   | Not part of Recursica's design system's component list.                                                                                                                                                                                                       |
| Fieldset                  | No `<fieldset>`-grouping primitive in Recursica; form grouping is handled via layout components (`Stack`/`Group`) instead.                                                                                                                                    |
| FileButton                | Redundant with Recursica's own `FileInput`/`FileUpload`.                                                                                                                                                                                                      |
| FileInput (Mantine's own) | Name collision only — see §2's Near-miss note; Recursica's `FileInput` does not render it.                                                                                                                                                                    |
| FloatingIndicator         | Internal positioning primitive (used by Mantine's own `Tabs`/`SegmentedControl`); not a user-facing widget.                                                                                                                                                   |
| FocusTrap                 | Low-level focus-management utility, not a visual component; not exposed by Recursica.                                                                                                                                                                         |
| Highlight                 | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Image                     | Not part of Recursica's design system; images are left to plain `<img>`/consumer-provided components.                                                                                                                                                         |
| InputBase                 | Mantine's internal building block for its own text-style inputs; Recursica uses `Input` directly (see §1's `TextField` mapping) instead.                                                                                                                      |
| JsonInput                 | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Kbd                       | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| List                      | **Known gap** — flagged in `docs/COMPONENT_ISSUES.md` as "Missing the List component," explicitly slated to be added as a wrapper around Mantine's `List`.                                                                                                    |
| LoadingOverlay            | Redundant with `Loader`; no separate full-surface loading-overlay primitive in Recursica.                                                                                                                                                                     |
| Mark                      | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| ModalBase                 | Mantine's unstyled base that `Modal`/`Drawer`/`Popover`/`Menu` etc. are all built from internally; Recursica always goes through the styled `Modal`/`Drawer` components, never `ModalBase` directly.                                                          |
| MultiSelect               | Not part of Recursica's design system's form-control set; `Dropdown` (`Select`) only supports single selection.                                                                                                                                               |
| NativeSelect              | Not part of Recursica's design system — note this differs from some other adapters, where a native-select equivalent is reused internally; this adapter uses its own `Select`-backed `BareDropdown` for that role instead (see §3).                           |
| NavLink                   | Not part of Recursica's design system; navigation components are out of scope for this adapter.                                                                                                                                                               |
| NumberFormatter           | Formatting-only utility component, not a design-system widget.                                                                                                                                                                                                |
| Overlay                   | Low-level dimming-backdrop primitive; used internally by Mantine's own `Modal`/`Drawer`/`LoadingOverlay`, not exposed directly.                                                                                                                               |
| Paper                     | Mantine's own generic surface primitive that `Card` (and `Modal`/`Drawer` content) are built from internally; Recursica always goes through `Card`, never `Paper` directly.                                                                                   |
| PasswordInput             | Not part of Recursica's design system's form-control set (no visibility-toggle text field defined in the UI Kit).                                                                                                                                             |
| Pill                      | Not part of Recursica's design system; closest concept, `Chip`, already covers tag/token display.                                                                                                                                                             |
| PillsInput                | Same as Pill/MultiSelect — no multi-value input control in Recursica.                                                                                                                                                                                         |
| PinInput                  | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| Portal                    | Low-level DOM-portal utility, not a visual component.                                                                                                                                                                                                         |
| Progress                  | Not part of Recursica's design system; no linear progress-bar token set exists in the UI Kit.                                                                                                                                                                 |
| Rating                    | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| RingProgress              | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| ScrollArea                | No custom-scrollbar primitive in Recursica; native browser scrolling is used everywhere (including `Modal.Body`'s own scroll tracking, built on plain `<div>` + native scroll events, not `ScrollArea`).                                                      |
| SemiCircleProgress        | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| SimpleGrid                | Redundant with `Grid`; Recursica only wraps Mantine's full `Grid`/`Grid.Col` system.                                                                                                                                                                          |
| Skeleton                  | Not part of Recursica's design system; no loading-placeholder/shimmer component defined.                                                                                                                                                                      |
| Space                     | Purely a Mantine layout-spacer utility; Recursica leaves spacing to `Stack`/`Group`/`Flex` gap props.                                                                                                                                                         |
| Spoiler                   | Not part of Recursica's design system.                                                                                                                                                                                                                        |
| TableOfContents           | Not part of Recursica's design system; document-navigation scope, not a UI Kit component.                                                                                                                                                                     |
| TagsInput                 | Same as MultiSelect/PillsInput — no multi-value tag input in Recursica.                                                                                                                                                                                       |
| TextInput                 | Redundant with `Input` — Recursica's `TextField` deliberately uses the lower-level `Input` primitive directly rather than Mantine's `TextInput` (which itself is just `Input` + `Input.Wrapper`, and `Input.Wrapper` is the piece Recursica avoids — see §2). |
| ThemeIcon                 | Not part of Recursica's design system; icon presentation is handled per-component (e.g. `Button`'s `icon` prop), not as a standalone wrapper.                                                                                                                 |
| Transition                | Low-level animation-utility primitive, not a visual component.                                                                                                                                                                                                |
| Typography                | Mantine's global-prose-styling wrapper (used only internally by this adapter's own Storybook docs pages, e.g. `OverStyling.tsx`/`Version.tsx`, for rendering Markdown — not part of the component library's public surface).                                  |
| UnstyledButton            | Low-level unstyled-button-reset primitive; Recursica always goes through `Button`.                                                                                                                                                                            |
| VisuallyHidden            | No screen-reader-only-text primitive exposed by Recursica; visually-hidden text is handled ad hoc per component where needed.                                                                                                                                 |

<!-- /recursica:table -->
