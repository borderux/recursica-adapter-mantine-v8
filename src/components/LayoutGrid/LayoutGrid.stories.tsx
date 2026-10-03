import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useRecursicaManifest } from "@recursica/adapter-common";
import { LayoutGrid } from "./LayoutGrid";

type LayoutGridStoryProps = React.ComponentProps<typeof LayoutGrid>;

const meta: Meta<LayoutGridStoryProps> = {
  title: "UI-Kit/LayoutGrid",
  component: LayoutGrid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "LayoutGrid is the Recursica layout grid. Its column count, column-gutter, row-gutter and margin come from the design system's layout-grid tokens, which Forge defines per breakpoint, so they respond to the viewport and are not integrator-configurable.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<LayoutGridStoryProps>;

// Plain bordered cell: Card has a token min-width wider than one column, which would overflow it.
const Swatch = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: "1px dashed currentColor",
      padding: "8px",
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

// Reads the default layout grid from the manifest (brand.layout-grids.default) and fills two full
// rows of single-column cells, so the story shows exactly the design system's column count.
const DefaultGrid = () => {
  const manifest = useRecursicaManifest() as {
    brand: {
      "layout-grids": { default: { columns: { $value: number } } };
    };
  };
  const columns = manifest.brand["layout-grids"].default.columns.$value;
  return (
    <LayoutGrid>
      {Array.from({ length: columns * 2 }, (_, i) => (
        <LayoutGrid.Col key={i} span={1}>
          <Swatch>{(i % columns) + 1}</Swatch>
        </LayoutGrid.Col>
      ))}
    </LayoutGrid>
  );
};

export const Default: Story = {
  render: () => <DefaultGrid />,
};
