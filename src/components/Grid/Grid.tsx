import { forwardRef } from "react";
import {
  Grid as MantineGrid,
  type GridProps as MantineGridProps,
  type GridColProps as MantineGridColProps,
  createPolymorphicComponent,
} from "@mantine/core";
import {
  mapLayoutProps,
  type WithRecursicaSpacing,
} from "../../utils/filterStylingProps";
import {
  type RecursicaGridColProps,
  type RecursicaGridProps,
} from "@recursica/adapter-common";
import styles from "./Grid.module.css";

/**
 * Grid layout wrapper.
 *
 * Note: Unlike complex UI components, primitive layout components (Flex, Stack, Group, Container, Grid)
 * DO NOT use the `RecursicaOverStyled` gatekeeper. Developers must be able to freely pass
 * width, height, padding, margins, and flexbox alignment props to construct structural layouts.
 *
 * Recursica's `layout-grids` tokens (column-gutter, row-gutter, margin) are design-system-managed
 * values, not integrator-facing settings — Grid applies them itself via CSS variables. Mantine's
 * own `gutter` prop is not accepted; only `columns` (from `RecursicaGridProps` in
 * `adapter-common`) is exposed as an override, matching how `Container.size` overrides its own
 * token-backed default. See `GRID_IMPLEMENTATION_NOTES.md`.
 */
export type GridProps = WithRecursicaSpacing<
  Omit<MantineGridProps, "gutter" | "columns"> & RecursicaGridProps
>;

const _Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, columns, ...rest },
  ref,
) {
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

  // `columns` has no CSS-variable equivalent in Mantine — it computes each column's flex-basis
  // from a plain number, so the design system default is baked in here as a JS default rather
  // than wired live through CSS. Sourced from --recursica_brand_layout-grids_default_columns.
  const resolvedColumns = columns ?? 6;

  return (
    <MantineGrid
      ref={ref}
      columns={resolvedColumns}
      gutter="var(--recursica_brand_layout-grids_default_column-gutter)"
      className={finalClass}
      classNames={mergedClassNames}
      {...(mappedRest as unknown as Omit<
        MantineGridProps,
        "gutter" | "columns"
      >)}
    >
      {children}
    </MantineGrid>
  );
});
_Grid.displayName = "Grid";

/**
 * Recursica Grid layout wrapper.
 *
 * Supports polymorphism via the `component` prop for custom element rendering.
 * @example
 * ```tsx
 * <Grid>
 *   <Grid.Col span={3}>Quarter width (defaults to 6 columns)</Grid.Col>
 *   <Grid.Col span={3}>Quarter width</Grid.Col>
 * </Grid>
 * ```
 */
const GridBase = createPolymorphicComponent<"div", GridProps>(_Grid);

// ============================================================
// GRID.COL
// ============================================================

// TODO(grid-col-contract): `RecursicaGridColProps` currently only contributes `children` here —
// `span`, `order`, `visibleFrom`, and `hiddenFrom` are all drafted in that type (adapter-common)
// but commented out for now (2026-09-22, Matt — paused to get Grid merged). Until they're
// restored there, this stays a plain pass-through of Mantine's own `GridColProps`; no Omit needed
// since nothing here is contract-backed yet. Re-add the intersection/Omit once
// `RecursicaGridColProps` picks these back up. See `GRID_IMPLEMENTATION_NOTES.md`.
export type GridColProps = WithRecursicaSpacing<
  MantineGridColProps & RecursicaGridColProps
>;

const _GridCol = forwardRef<HTMLDivElement, GridColProps>(function GridCol(
  { children, ...rest },
  ref,
) {
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

  return (
    <MantineGrid.Col
      ref={ref}
      className={finalClass}
      classNames={mergedClassNames}
      {...(mapLayoutProps(
        rest as Record<string, unknown>,
      ) as unknown as MantineGridColProps)}
    >
      {children}
    </MantineGrid.Col>
  );
});
_GridCol.displayName = "GridCol";

export const GridCol = createPolymorphicComponent<"div", GridColProps>(
  _GridCol,
);

// ============================================================
// DOT NOTATION EXPORT
// ============================================================

type GridComponent = typeof GridBase & {
  Col: typeof GridCol;
};

export const Grid = GridBase as GridComponent;
Grid.Col = GridCol;
