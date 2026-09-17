---
"@recursica/adapter-mantine-v8": patch
---

Fixed the pre-commit lint-staged config running `prettier --write .` and `eslint --fix .` against the whole repo instead of just staged files, so a commit could silently reformat/relint files you never touched. Also removed the unused `precommit` npm script — the Husky hook runs lint-staged directly and never called it.
