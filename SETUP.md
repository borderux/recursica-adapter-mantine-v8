# Installing `@recursica/adapter-mantine-v8`

Follow these instructions to install and configure the Mantine Adapter in your host project.

## 1. Install Dependencies

First, install the Recursica Mantine Adapter package:

```bash
npm install @recursica/adapter-mantine-v8
```

### Peer Dependencies

This library requires the following peer dependencies. Ensure they are installed in your project:

```bash
npm install @mantine/core@>=8.0.0 @mantine/dates@>=8.0.0 @mantine/hooks@>=8.0.0 react@>=16.8.0 react-dom@>=16.8.0
```

---

## 2. Setup and Integration

Before consuming Recursica components, integrate the CSS and design tokens into your application:

1. **Integrate CSS**: Import `recursica_variables_scoped.css` and the Mantine adapter CSS `adapter-mantine-v8.css` into your application entrypoint (e.g., `main.tsx` or `App.tsx`). **It must be loaded after the Mantine CSS imports.**

   ```tsx
   import "@mantine/core/styles.css"; // Mantine core styles
   import "./path/to/recursica_variables_scoped.css"; // Recursica theme variables
   import "@recursica/adapter-mantine-v8/style.css"; // Mantine adapter styles
   ```

2. **Integrate Google Fonts**: Integrating custom fonts depends on how you load fonts in your project and which fonts are specified in your `recursica_variables_scoped.css` (since it is project-dependent). We suggest loading them via Google Fonts, as shown in this example:

   ```css
   @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
   ```

3. **Wrap App in RecursicaThemeProvider**: You must wrap your application in the `<RecursicaThemeProvider>` to correctly cascade design token properties. By default it also wraps its children in a `<Layer layer={0}>` (via the `initLayer0` prop, which defaults to `true`), so the base page surface/border/elevation variables resolve automatically with no extra setup:

   ```tsx
   import { MantineProvider } from "@mantine/core";
   import { RecursicaThemeProvider } from "@recursica/adapter-mantine-v8";
   import manifest from "./path/to/recursica_manifest.json";

   function App() {
     return (
       <MantineProvider>
         <RecursicaThemeProvider theme="light" manifest={manifest}>
           {/* Your App Components */}
         </RecursicaThemeProvider>
       </MantineProvider>
     );
   }
   ```

   Pass the parsed `recursica_manifest.json` from your Forge export as `manifest`. Components that are configured by it (currently `Pagination`, for its Button variants) read it from here and throw if it's missing.

4. **Align Mantine's breakpoints with Forge's (Optional but Recommended)**: Forge defines your layout grids (columns, gutters, margin) per breakpoint, and they switch via plain CSS `@media`. Mantine's responsive props (`span={{ base: 12, md: 6 }}`, `visibleFrom`, and Flex/Stack/Group props) switch at `theme.breakpoints` instead, which Forge never edits. If the two differ, a page changes layout at two different widths. `breakpointsFromRecManifest` builds a `theme.breakpoints` object from the `recursica_manifest.json` in your Forge export, so both switch at the same widths:

   ```tsx
   import { MantineProvider, createTheme } from "@mantine/core";
   import {
     RecursicaThemeProvider,
     breakpointsFromRecManifest,
   } from "@recursica/adapter-mantine-v8";
   import manifest from "./path/to/recursica_manifest.json";

   // e.g. { mobile: "0px", tablet: "481px", default: "781px" } when Forge defines extra grids
   const theme = createTheme({
     breakpoints: breakpointsFromRecManifest(manifest),
   });

   function App() {
     return (
       <MantineProvider theme={theme}>
         <RecursicaThemeProvider theme="light" manifest={manifest}>
           {/* Your App Components */}
         </RecursicaThemeProvider>
       </MantineProvider>
     );
   }
   ```

   Each non-default grid starts at its `min-width` (a grid with only a `max-width` starts at `0px`), and the `default` grid is named `default` and starts one pixel past the widest `max-width`. If your manifest only defines the `default` grid (the stock export), it returns `{}` and your theme is unchanged. Mantine merges these with its defaults, so `xs`–`xl` still exist at Mantine's widths; use Forge's names (`mobile`, `tablet`, ...) in responsive props to switch where Forge does. The result is a plain object you can edit, and nothing applies it automatically. See the [LayoutGrid usage guide](src/components/LayoutGrid/USAGE.md).

5. **Configure PostCSS Plugin (Optional but Recommended)**: It is highly recommended (but optional) to install the `@recursica/recursica-postcss-vars` plugin to verify that Recursica CSS variables are properly connected in case they change.

   Install the plugin as a dev dependency:

   ```bash
   npm install @recursica/recursica-postcss-vars --save-dev
   ```

   Then, configure it in your `postcss.config.js`:

   ```javascript
   export default {
     plugins: {
       "@recursica/recursica-postcss-vars": {
         cssPath: "./path/to/recursica_variables_scoped.css",
         strict: process.env.NODE_ENV === "production",
       },
     },
   };
   ```

6. **Configure ESLint Plugin (Optional but Recommended)**: It is highly recommended (but optional) to install `@recursica/eslint-plugin`, which flags use of the `overStyled` escape-hatch prop so it stays easy to audit.

   Install the plugin as a dev dependency:

   ```bash
   npm install @recursica/eslint-plugin --save-dev
   ```

   Then, add it to your `eslint.config.js`:

   ```javascript
   import recursica from "@recursica/eslint-plugin";

   export default [recursica.configs.recommended];
   ```
