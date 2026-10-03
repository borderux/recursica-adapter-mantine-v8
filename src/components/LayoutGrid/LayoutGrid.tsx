import { createContext, forwardRef, useContext } from "react";
import {
  Grid as MantineGrid,
  InlineStyles,
  getSortedBreakpoints,
  useMantineTheme,
  useRandomClassName,
  type GridProps as MantineGridProps,
  type GridColProps as MantineGridColProps,
  createPolymorphicComponent,
} from "@mantine/core";
import {
  mapLayoutProps,
  type WithRecursicaSpacing,
} from "../../utils/filterStylingProps";
import {
  type RecursicaLayoutGridColProps,
  type RecursicaLayoutGridProps,
} from "@recursica/adapter-common";
import styles from "./LayoutGrid.module.css";

// HOW THIS WORKS (why it is more than a thin Mantine wrapper)
// Mantine's Grid divides column widths by a JS number, but Forge's column count is a CSS variable
// (--recursica_brand_layout-grids_columns) that Forge redefines inside @media blocks, so Mantine's
// math can never follow it. Everything below the root component exists to bridge that:
//   1. LayoutGrid passes Mantine a dummy `columns` (it never decides a width) and the token-driven
//      column gutter. Row-gutter and margin come from LayoutGrid.module.css.
//   2. LayoutGrid.Col emits its own <style> rule (ColLayoutStyles) that sets --rec-col-basis,
//      --rec-col-max-width and --rec-col-offset to calc(min(span, columns) / columns * 100%), once
//      for the base value and once per key of a breakpoint-map span/offset (switching at the
//      Mantine theme's breakpoints). LayoutGrid.module.css applies them in place of Mantine's own.
//   3. "auto" and "content" don't depend on the column count, so they hand back to Mantine's vars.
// Alternatives considered and rejected (2026-10-02): reading the manifest in JS to pass Mantine the
// current column count (makes the manifest required, flips layout after hydration, no clamping),
// and a native CSS-grid rewrite (loses Mantine's Grid API). See LAYOUT_GRID_IMPLEMENTATION_NOTES.md.

// Mantine's Grid requires a column count for its own span math. Every width this component sets
// is re-derived from Forge's --recursica_brand_layout-grids_columns (see colVars below), so this
// number never determines a rendered width; it only has to be a valid value for Mantine.
const MANTINE_UNUSED_COLUMNS = 1;

interface LayoutGridContext {
  type?: "media" | "container";
  breakpoints?: Record<string, string>;
}
const LayoutGridContext = createContext<LayoutGridContext>({});

/**
 * LayoutGrid: the Recursica layout grid.
 *
 * Note: Unlike complex UI components, primitive layout components (Flex, Stack, Group, Container, LayoutGrid)
 * DO NOT use the `RecursicaOverStyled` gatekeeper. Developers must be able to freely pass
 * width, height, padding, margins, and flexbox alignment props to construct structural layouts.
 *
 * Recursica's `layout-grids` tokens (columns, column-gutter, row-gutter, margin) are
 * design-system-managed and breakpoint-aware (Forge redefines them inside `@media` blocks), so
 * LayoutGrid applies them itself via CSS variables. Neither Mantine's `gutter` nor `columns` is
 * accepted; use Mantine's Grid directly for a fixed N-column grid. See
 * `LAYOUT_GRID_IMPLEMENTATION_NOTES.md`.
 */
export type LayoutGridProps = WithRecursicaSpacing<
  Omit<MantineGridProps, "gutter" | "columns"> &
    Omit<RecursicaLayoutGridProps, "columns">
>;

const _LayoutGrid = forwardRef<HTMLDivElement, LayoutGridProps>(
  function LayoutGrid({ children, ...rest }, ref) {
    const mergedClassNames: Partial<Record<string, string>> = {
      root: styles.root,
      inner: styles.inner,
      col: styles.col,
    };

    const classNamesProp = rest.classNames;
    if (
      classNamesProp &&
      typeof classNamesProp === "object" &&
      !Array.isArray(classNamesProp)
    ) {
      const o = classNamesProp as Partial<Record<string, string>>;
      mergedClassNames.root = o.root ? `${styles.root} ${o.root}` : styles.root;
      mergedClassNames.inner = o.inner
        ? `${styles.inner} ${o.inner}`
        : styles.inner;
      mergedClassNames.col = o.col ? `${styles.col} ${o.col}` : styles.col;
    }

    const classNameProp = rest.className as string | undefined;
    const finalClass = classNameProp
      ? `${styles.root} ${classNameProp}`
      : styles.root;

    // `gutter` is no longer a supported prop — column-gutter is design-system-managed (see below),
    // dropped defensively here so a caller still passing the old prop name at runtime can't shadow
    // the token-driven value passed to Mantine below via the `{...mappedRest}` spread.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gutter: _legacyGutter, ...restWithoutGutter } = rest as Record<
      string,
      unknown
    >;

    const mappedRest = mapLayoutProps(
      restWithoutGutter as Record<string, unknown>,
    );

    // Mantine computes column widths from a plain number, which can't follow Forge's per-breakpoint
    // column count. Numeric and breakpoint-map `span`/`offset` are therefore re-derived from
    // --recursica_brand_layout-grids_columns in LayoutGrid.Col (see colVars). Only "auto" and "content"
    // spans still come from Mantine, and those don't depend on the column count.
    return (
      <LayoutGridContext.Provider
        value={{
          type: rest.type,
          breakpoints: rest.breakpoints as Record<string, string> | undefined,
        }}
      >
        <MantineGrid
          ref={ref}
          columns={MANTINE_UNUSED_COLUMNS}
          gutter="var(--recursica_brand_layout-grids_column-gutter)"
          data-recursica-grow={rest.grow ? "" : undefined}
          className={finalClass}
          classNames={mergedClassNames}
          {...(mappedRest as unknown as Omit<
            MantineGridProps,
            "gutter" | "columns"
          >)}
        >
          {children}
        </MantineGrid>
      </LayoutGridContext.Provider>
    );
  },
);
_LayoutGrid.displayName = "LayoutGrid";

/**
 * Recursica LayoutGrid layout wrapper.
 *
 * Supports polymorphism via the `component` prop for custom element rendering.
 * @example
 * ```tsx
 * <LayoutGrid>
 *   <LayoutGrid.Col span={3}>Half width at 6 columns (full width at 3)</LayoutGrid.Col>
 *   <LayoutGrid.Col span={3}>Half width at 6 columns</LayoutGrid.Col>
 * </LayoutGrid>
 * ```
 */
const LayoutGridBase = createPolymorphicComponent<"div", LayoutGridProps>(
  _LayoutGrid,
);

// ============================================================
// GRID.COL
// ============================================================

// TODO(grid-col-contract): `RecursicaLayoutGridColProps` currently only contributes `children` here —
// `span`, `order`, `visibleFrom`, and `hiddenFrom` are all drafted in that type (adapter-common)
// but commented out for now (2026-09-22, Matt — paused to get Grid merged). Until they're
// restored there, this stays a plain pass-through of Mantine's own `GridColProps`; no Omit needed
// since nothing here is contract-backed yet. Re-add the intersection/Omit once
// `RecursicaLayoutGridColProps` picks these back up. See `LAYOUT_GRID_IMPLEMENTATION_NOTES.md`.
export type LayoutGridColProps = WithRecursicaSpacing<
  MantineGridColProps & RecursicaLayoutGridColProps
>;

const COLUMNS_VAR = "var(--recursica_brand_layout-grids_columns)";

// Numeric span/offset are expressed against Forge's (breakpoint-aware) column count. Span is
// clamped to the current column count so e.g. span 6 fills the row at 3 columns instead of
// overflowing. "auto" and "content" don't depend on the column count, so those hand back to
// Mantine's own per-breakpoint values.
const basisOf = (span: unknown): Record<string, string> => {
  if (typeof span === "number") {
    const basis = `calc(min(${span}, ${COLUMNS_VAR}) / ${COLUMNS_VAR} * 100%)`;
    return { "--rec-col-basis": basis, "--rec-col-max-width": basis };
  }
  return {
    "--rec-col-basis": "var(--col-flex-basis)",
    "--rec-col-max-width": "var(--col-max-width)",
  };
};

const offsetOf = (offset: unknown): Record<string, string> => ({
  "--rec-col-offset":
    typeof offset === "number"
      ? `calc(${offset} / ${COLUMNS_VAR} * 100%)`
      : "var(--col-offset)",
});

type ResponsiveValue = Record<string, unknown>;
const isResponsive = (value: unknown): value is ResponsiveValue =>
  typeof value === "object" && value !== null;
const valueAt = (value: unknown, breakpoint: string) =>
  isResponsive(value)
    ? value[breakpoint]
    : breakpoint === "base"
      ? value
      : undefined;

const varsAt = (span: unknown, offset: unknown, breakpoint: string) => ({
  ...(valueAt(span, breakpoint) === undefined
    ? {}
    : basisOf(valueAt(span, breakpoint))),
  ...(valueAt(offset, breakpoint) === undefined
    ? {}
    : offsetOf(valueAt(offset, breakpoint))),
});

// Emitted as a <style> rule (like Mantine's own column styles) and not as inline style, because
// an inline custom property would beat the breakpoint rules. `span` defaults to 12 columns, like
// Mantine's Grid.Col.
function ColLayoutStyles({
  selector,
  span,
  offset,
}: {
  selector: string;
  span: unknown;
  offset: unknown;
}) {
  const theme = useMantineTheme();
  const { type, breakpoints: gridBreakpoints } = useContext(LayoutGridContext);
  const breakpoints = gridBreakpoints ?? theme.breakpoints;
  const names = Object.keys(breakpoints).filter(
    (name) =>
      valueAt(span, name) !== undefined || valueAt(offset, name) !== undefined,
  );
  const media = getSortedBreakpoints(
    names,
    breakpoints as Parameters<typeof getSortedBreakpoints>[1],
  ).map(({ value }) => ({
    query:
      type === "container"
        ? `mantine-grid (min-width: ${breakpoints[value]})`
        : `(min-width: ${breakpoints[value]})`,
    styles: varsAt(span, offset, value),
  }));
  return (
    <InlineStyles
      selector={selector}
      styles={varsAt(span ?? 12, offset, "base")}
      media={type === "container" ? undefined : media}
      container={type === "container" ? media : undefined}
    />
  );
}

const _LayoutGridCol = forwardRef<HTMLDivElement, LayoutGridColProps>(
  function LayoutGridCol({ children, ...rest }, ref) {
    const mergedClassNames: Partial<Record<string, string>> = {
      col: styles.col,
    };

    const classNamesProp = rest.classNames;
    if (
      classNamesProp &&
      typeof classNamesProp === "object" &&
      !Array.isArray(classNamesProp)
    ) {
      const o = classNamesProp as Partial<Record<string, string>>;
      mergedClassNames.col = o.col ? `${styles.col} ${o.col}` : styles.col;
    }

    const classNameProp = rest.className as string | undefined;
    const finalClass = classNameProp
      ? `${styles.col} ${classNameProp}`
      : styles.col;

    const layoutClassName = useRandomClassName();

    return (
      <>
        <ColLayoutStyles
          selector={`.${layoutClassName}`}
          span={rest.span}
          offset={rest.offset}
        />
        <MantineGrid.Col
          ref={ref}
          className={`${finalClass} ${layoutClassName}`}
          classNames={mergedClassNames}
          {...(mapLayoutProps(
            rest as Record<string, unknown>,
          ) as unknown as MantineGridColProps)}
        >
          {children}
        </MantineGrid.Col>
      </>
    );
  },
);
_LayoutGridCol.displayName = "LayoutGridCol";

export const LayoutGridCol = createPolymorphicComponent<
  "div",
  LayoutGridColProps
>(_LayoutGridCol);

// ============================================================
// DOT NOTATION EXPORT
// ============================================================

type LayoutGridComponent = typeof LayoutGridBase & {
  Col: typeof LayoutGridCol;
};

export const LayoutGrid = LayoutGridBase as LayoutGridComponent;
LayoutGrid.Col = LayoutGridCol;
