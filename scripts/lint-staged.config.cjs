// lint-staged config for this standalone package.
//
// This is a simplified, single-package version of the recursica monorepo's
// scripts/lint-staged.config.js — the monorepo's config routes staged files to their
// owning package/app directory and runs turbo filters per package. There's only one
// package here (this repo's root), so that routing logic isn't needed: every JS/TS
// file gets formatted, linted, and the whole package is type-checked.
//
// .cjs, not .js: this package.json has "type": "module" (the monorepo's root
// package.json doesn't), so a plain .js file using `module.exports` here would be
// parsed as ESM and fail to load — "Failed to read config from file" from
// lint-staged, which then fails the Husky pre-commit hook outright.
//
// No "npm run test" step here — this repo has no "test" script, matching the
// genesis adapter (mantine-adapter), which also doesn't define one despite having
// the same vitest/addon-vitest/Playwright devDependencies present. See
// docs/CREATING_AN_ADAPTER.md's decisions log.
module.exports = {
  // For all non-JS/TS files, just format them
  "*.{json,md,css,scss}": ["prettier --write"],

  // For JS/TS files, format, lint, and type-check the whole package
  "*.{js,jsx,ts,tsx}": () => [
    "prettier --write .",
    "eslint --fix .",
    "npm run check-types",
  ],
};
