---
"@recursica/adapter-mantine-v8": patch
---

Panel is now always non-modal: the page behind stays usable, focus and scroll aren't trapped, and Escape always closes it. The overlay, focus, scroll and close-on-outside-click props were removed.
