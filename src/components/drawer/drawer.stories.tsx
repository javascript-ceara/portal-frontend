import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { TypographyLead } from "@/components/typography";
import { Drawer, DrawerProps } from "@/components/drawer";

const meta = {
  title: "Drawer",
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
    direction: {
      control: {
        type: "select",
      },
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {
    open: true,
  },
  render: () => {
    const [args, update] = useArgs();
    return (
      <Drawer {...args} onOpenChange={(open) => update({ open })}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Description>Description</Drawer.Description>
          </Drawer.Header>
          <Drawer.Body className="h-[400px]">
            <TypographyLead>Drawer content</TypographyLead>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer>
    );
  },
} satisfies Meta<DrawerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
