import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./index";

const meta = {
  title: "Drawer",
  component: Drawer,
  parameters: {
    controls: {
      exclude: ["asChild", "shouldScaleBackground", "children"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: {
        type: "select",
      },
      options: ["top", "right", "bottom", "left"],
    }
  },
  args: {
    children: (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>Open</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant={"outlined"}>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
    direction: "right",
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Left: Story = {
  args: {
    direction: "left",
  },
};

export const Top: Story = {
  args: {
    direction: "top",
  },
};

export const Bottom: Story = {
  args: {
    direction: "bottom",
  },
};