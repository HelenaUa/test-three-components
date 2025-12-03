import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    message: { control: "text" },
    type: {
      control: "select",
      options: ["success", "error", "info", "warning"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "This is a toast message!",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong!",
    type: "error",
  },
};

export const Info: Story = {
  args: {
    message: "Some information for you.",
    type: "info",
  },
};

export const Warning: Story = {
  args: {
    message: "Be careful!",
    type: "warning",
  },
};

