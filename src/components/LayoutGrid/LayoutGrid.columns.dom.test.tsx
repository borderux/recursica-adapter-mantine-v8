import React from "react";
import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import { LayoutGrid } from "./LayoutGrid";

const COLUMNS = "var(--recursica_brand_layout-grids_columns)";
const basis = (n: number) => `calc(min(${n}, ${COLUMNS}) / ${COLUMNS} * 100%)`;

function renderStyles(node: React.ReactElement, theme = createTheme({})) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  flushSync(() =>
    root.render(<MantineProvider theme={theme}>{node}</MantineProvider>),
  );
  const css = [...container.querySelectorAll("style")]
    .map((el) => el.innerHTML)
    .join("\n");
  root.unmount();
  container.remove();
  return css;
}

describe("Grid.Col column widths", () => {
  it("derives breakpoint-map spans from the Forge column count", () => {
    const css = renderStyles(
      <LayoutGrid>
        <LayoutGrid.Col span={{ base: 12, md: 6 }}>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    expect(css).toContain(`--rec-col-basis:${basis(12)}`);
    expect(css).toContain(`--rec-col-basis:${basis(6)}`);
    expect(css).toMatch(/@media\(min-width: 62em\)/);
  });

  it("defaults an omitted span to 12 columns", () => {
    const css = renderStyles(
      <LayoutGrid>
        <LayoutGrid.Col>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    expect(css).toContain(`--rec-col-basis:${basis(12)}`);
  });

  it("hands auto and content back to Mantine's values", () => {
    const css = renderStyles(
      <LayoutGrid>
        <LayoutGrid.Col span={{ base: 4, md: "auto" }}>a</LayoutGrid.Col>
      </LayoutGrid>,
    );
    expect(css).toContain("--rec-col-basis:var(--col-flex-basis)");
  });

  it("uses custom breakpoint names from the theme", () => {
    const css = renderStyles(
      <LayoutGrid>
        <LayoutGrid.Col span={{ base: 12, tablet: 4 }}>a</LayoutGrid.Col>
      </LayoutGrid>,
      createTheme({ breakpoints: { mobile: "0px", tablet: "481px" } }),
    );
    expect(css).toContain("(min-width: 481px)");
    expect(css).toContain(`--rec-col-basis:${basis(4)}`);
  });
});
