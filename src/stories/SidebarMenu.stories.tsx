import type { Meta, StoryObj } from "@storybook/react";
import { SidebarMenu } from "../components/SidebarMenu/SidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    open: { control: "boolean" },
    items: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  args: {
    open: true,
    items: [
      { id: 1, label: "Dashboard" },
      { id: 2, label: "Profile" },
      { id: 3, label: "Settings" },
    ],
  },
};

export const Closed: Story = {
  args: {
    open: false,
    items: [
      { id: 1, label: "Home" },
      { id: 2, label: "About" },
    ],
  },
};

export const CustomItems: Story = {
  args: {
    open: true,
    items: [
      { id: 1, label: "Menu item 1" },
      { id: 2, label: "Menu item 2" },
      { id: 3, label: "Menu item 3" },
      { id: 4, label: "Menu item 4" },
    ],
  },
};
