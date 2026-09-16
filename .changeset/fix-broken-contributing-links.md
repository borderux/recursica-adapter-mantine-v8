---
"@recursica/adapter-mantine-v8": patch
---

Fixed broken relative links in CONTRIBUTING.md (`PIPELINE.md`, `adapter-common/docs/`, `adapter-tester` README/AGENT) that pointed back into the monorepo and no longer resolved after this repo's split into a standalone repo. They now use absolute GitHub URLs.
