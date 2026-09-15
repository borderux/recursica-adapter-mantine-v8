import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "UI-Kit/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The standard `<Text>` component controls common body sizing scales and implicit paragraphs governed by the active theme layer. For semantic headings (`h1` through `h6`), use `<Heading>` instead.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "body",
        "body-small",
        "caption",
        "overline",
        "subtitle",
        "subtitle-small",
      ],
      description:
        "Controls the standard logical boundary definitions natively extracted from Figma.",
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

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    variant: "body",
    children:
      "This is standard body typography controlled by the central UI-kit boundaries exclusively.",
  },
  render: ({ ...args }) => <Text {...args} />,
};

export const StaticVariations: Story = {
  args: {},
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="body">
        Body (Base paragraph and generic information flow)
      </Text>
      <Text variant="body-small">
        Body Small (Compacted list items and helper blocks)
      </Text>
      <Text variant="caption">
        Caption (Data table descriptions or micro-labels)
      </Text>
      <Text variant="overline">
        Overline (Card contextual pre-headers and categorical tags)
      </Text>
      <Text variant="subtitle">
        Subtitle (Minor sub-headers avoiding heavy display weights)
      </Text>
      <Text variant="subtitle-small">
        Subtitle Small (Section anchors deep in hierarchy)
      </Text>
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
      <Text color="default">Default (follows the layer's base text color)</Text>
      <Text color="warning">Warning (cautionary, non-blocking messaging)</Text>
      <Text color="alert">Alert (errors and destructive states)</Text>
      <Text color="success">Success (confirmations and positive states)</Text>
    </div>
  ),
};

export const Emphasis: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Emphasis controls text opacity via the theme's text-emphasis tokens. `high` (the default) is solid; `low` dims the text for secondary content.",
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text emphasis="high">
        High emphasis (solid — primary reading content)
      </Text>
      <Text emphasis="low">
        Low emphasis (dimmed — secondary or supporting content)
      </Text>
    </div>
  ),
};
