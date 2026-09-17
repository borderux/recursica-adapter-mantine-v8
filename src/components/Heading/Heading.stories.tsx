import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "UI-Kit/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The semantic `<Heading>` abstraction intrinsically links pure `h1-h6` tag generation with exact Recursica design boundaries to preserve SEO and screen reader trees uniformly globally.",
      },
    },
  },
  argTypes: {
    order: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description:
        "Controls the `h` tag and the resultant typographical weighting natively mapped to Recursica.",
    },
    color: {
      control: "select",
      options: ["default", "warning", "alert", "success"],
      description:
        "Semantic text color, bound to the active layer's text-element tokens via `data-color`.",
    },
    emphasis: {
      control: "inline-radio",
      options: ["high", "low"],
      description:
        "Emphasis level, bound to the theme's text-emphasis opacity tokens via `data-emphasis`.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    order: 1,
    children: "Semantic H1 Document Boundary",
  },
  render: ({ ...args }) => <Heading {...args} />,
};

export const StaticVariations: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Heading order={1}>H1 Heading</Heading>
      <Heading order={2}>H2 Heading</Heading>
      <Heading order={3}>H3 Heading</Heading>
      <Heading order={4}>H4 Heading</Heading>
      <Heading order={5}>H5 Heading</Heading>
      <Heading order={6}>H6 Heading</Heading>
    </div>
  ),
};

export const Colors: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Semantic colors map to the active layer's text-element tokens. `default` follows the layer's base text color; `warning`, `alert`, and `success` pull their respective semantic tones.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading order={2} color="default">
        Default heading
      </Heading>
      <Heading order={2} color="warning">
        Warning heading
      </Heading>
      <Heading order={2} color="alert">
        Alert heading
      </Heading>
      <Heading order={2} color="success">
        Success heading
      </Heading>
    </div>
  ),
};

export const Emphasis: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the heading for secondary content.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Heading order={2} emphasis="high">
        High emphasis heading
      </Heading>
      <Heading order={2} emphasis="low">
        Low emphasis heading
      </Heading>
    </div>
  ),
};
