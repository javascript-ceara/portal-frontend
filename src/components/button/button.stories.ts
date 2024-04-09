import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    controls: {
      exclude: ["asChild"],
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    className: "bla",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    className: "bla",
    children: "Button",
  },
};
