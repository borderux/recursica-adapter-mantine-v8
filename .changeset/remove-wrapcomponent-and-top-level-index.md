---
"@recursica/adapter-mantine-v8": patch
---

Removed `wrapComponent` and the `overStyled` dev-mode highlight/console-toggle usage — overly complicated for what it did. Components are now exported directly, unwrapped. The `overStyled={true}` escape-hatch prop is unchanged. Dropped the "Over Styling" Storybook story and the matching sections of `OVERSTYLING.md`/`RecursicaThemeProvider`'s `USAGE.md` that described the removed console command.

Also simplified `src/index.ts`: it now just imports `@recursica/adapter-common/style.css` and re-exports `./components`, instead of manually re-exporting every component by name. `src/components/index.ts` re-exports `@recursica/adapter-common` directly. No consumer-facing behavior change beyond the removed dev-mode highlight.
