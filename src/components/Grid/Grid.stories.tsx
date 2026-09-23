import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";

type GridStoryProps = React.ComponentProps<typeof Grid>;

const meta: Meta<GridStoryProps> = {
  title: "UI-Kit/Grid",
  component: Grid,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Grid is a responsive grid layout mapped to Mantine's Grid/Grid.Col, providing column spans, offsets, ordering, and breakpoint-based visibility. Defaults to the design system's own layout-grid tokens: 6 columns, with design-system-managed column-gutter/row-gutter/margin values applied automatically (not integrator-configurable).",
      },
    },
  },
  args: {
    grow: false,
  },
  argTypes: {
    columns: {
      control: "number",
      description:
        "Number of columns in each row. Defaults to the design system's default column count (6).",
    },
    grow: {
      control: "boolean",
      description: "Columns in the last row expand to fill available space",
    },
    justify: {
      control: "select",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      description: "Justify-content property",
    },
    align: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "stretch"],
      description: "Align-items property",
    },
  },
};

export default meta;

type Story = StoryObj<GridStoryProps>;

const Swatch = ({ children }: { children: React.ReactNode }) => (
  <Card>
    <Card.Content>
      <Text>{children}</Text>
    </Card.Content>
  </Card>
);

// Uses the design system default (6 columns) with no explicit `columns` override.
export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 6 (default)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

// Explicitly overrides `columns` to 12 — this story exercises Mantine's own breakpoint/span
// system at standard 12-column proportions, independent of the design system's 6-column default.
export const ResponsiveSpans: Story = {
  args: {
    columns: 12,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

// Mirrors mui-adapter's `ResponsiveSizes` story (same breakpoints/content) under mantine's own
// prop name — Mantine's Grid.Col has no `size` prop, only `span`, which is what `ResponsiveSpans`
// above already exercises. This one exists purely so mui-adapter's `responsive-sizes` story id
// has a source-of-truth counterpart to diff against (see GRID_IMPLEMENTATION_NOTES.md). Same
// explicit 12-column override as `ResponsiveSpans`, for the same reason.
export const ResponsiveSizes: Story = {
  args: {
    columns: 12,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col span={{ xs: 12, sm: 6, md: 3 }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const Offset: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={2} offset={2}>
        <Swatch>span 2, offset 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 (of 6)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const Grow: Story = {
  args: {
    grow: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={3}>
        <Swatch>span 3 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col span={3}>
        <Swatch>span 3 (grows to fill row)</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

// Overrides the design system's default column count (6) to demonstrate a genuinely custom value.
export const CustomColumnCount: Story = {
  args: {
    columns: 4,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={2}>
        <Swatch>span 2 of 4</Swatch>
      </Grid.Col>
      <Grid.Col span={2}>
        <Swatch>span 2 of 4</Swatch>
      </Grid.Col>
    </Grid>
  ),
};

export const VisibleHiddenFrom: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({ withLayer, layer, ...args }: any) => (
    <Grid {...args}>
      <Grid.Col span={3} hiddenFrom="sm">
        <Swatch>hidden from sm and up</Swatch>
      </Grid.Col>
      <Grid.Col span={3} visibleFrom="sm">
        <Swatch>visible from sm and up</Swatch>
      </Grid.Col>
    </Grid>
  ),
};
