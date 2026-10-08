# Text – Implementation Notes

## `.root` `text-wrap: balance` (Matt Massey, 2026-08-28)

**Decision:** Added `text-wrap: balance` via a new `Text.module.css` `.root` class, merged onto the
typography class alongside the caller's own `className`.

**Implementation:** UX asked for more evenly balanced multi-line wrapping instead of a ragged last
line. Not a design token — it's a layout algorithm choice, so it's hardcoded rather than pulled
from `recursica_variables_scoped.css`. Chromium/Firefox only balance up to ~6 lines; longer
paragraphs silently fall back to normal wrapping past that point. No fallback needed — browsers
that don't support the value just ignore the declaration.

## Text must never render `h1`-`h6` (Matt Massey, 2026-10-08)

**Decision:** `Text` must never render an `<h1>`-`<h6>` element. It is not allowed. Semantic
headings use `Heading`.

**Implementation:** `Text` covers every other kind of text in the system (body, labels, captions,
etc.). Its variants can extend what the Recursica JSON and CSS define, so a variant need not
exist in the Recursica tokens. Heading levels are the one thing `Text` can't be: they have a
fixed definition and styling from Recursica and Forge, owned by `Heading`.
