import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const PasswordWithToggle: Story = {
  args: {
    type: "password",
  },
};

export const Clearable: Story = {
  args: {
    type: "text",
    clearable: true,
    value: "Hello",
  },
};

export const Number: Story = {
  args: {
    type: "number",
  },
};
