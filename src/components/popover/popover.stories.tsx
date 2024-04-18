import type { Meta, StoryObj } from "@storybook/react";
import * as Popover from "@/components/popover";
import { Button } from "@/components/button";

const meta = {
  title: "Popover",
  parameters: {
    controls: {
      exclude: ["asChild", "shouldScaleBackground", "children"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    open: true,
  },
  render: () => {
    return (
      <Popover.Root>
        <Popover.Trigger>
          <Button>open</Button>
        </Popover.Trigger>
        <Popover.Content>Popover content</Popover.Content>
      </Popover.Root>
    );
  },
} satisfies Meta<Popover.PopoverProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
