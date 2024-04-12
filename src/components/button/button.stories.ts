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
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};
