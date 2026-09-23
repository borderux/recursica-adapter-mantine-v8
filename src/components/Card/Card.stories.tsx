import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button/Button";
import { Group } from "../Group/Group";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
  title: "UI-Kit/Card",
  component: Card,
  subcomponents: {
    "Card.Header": Card.Header,
    "Card.Content": Card.Content,
    "Card.Footer": Card.Footer,
    "Card.Section": Card.Section,
  } as Record<string, React.ComponentType<unknown>>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Card component acts as the foundational padded surface for grouping related information. It relies on standard internal compositional nodes (`Card.Header`, `Card.Content`, `Card.Footer`) mapped directly to the active Recursica design tokens to enforce layout gaps and margins seamlessly. Use the provided dot-notation wrappers rather than building ad-hoc generic sections.",
      },
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <Card.Header>Customer Activity Report</Card.Header>
        <Card.Content>
          <Text>
            Card inner section content body. Notice how this acts as padded
            content natively based on the overarching properties. Recursica's
            vertical gutter governs vertical spacing between siblings in the
            flex container.
          </Text>
          <Text>Another section showing the vertical gutter spacing.</Text>
        </Card.Content>
        <Card.Footer>
          <Group justify="space-between" align="center">
            <Text variant="caption">Generated today</Text>
            <Button variant="solid">View Details</Button>
          </Group>
        </Card.Footer>
      </Card>
    );
  },
};

export const HeaderlessAndFooterless: Story = {
  args: {},
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <Card.Content>
          <Text variant="subtitle">Notice</Text>
          <Text>
            This is a completely generic card payload dropping the Header and
            Footer specific elements, simply acting as a padded elevation
            boundary box directly mirroring native composability!
          </Text>
          <Button variant="solid">Acknowledge</Button>
        </Card.Content>
      </Card>
    );
  },
};
