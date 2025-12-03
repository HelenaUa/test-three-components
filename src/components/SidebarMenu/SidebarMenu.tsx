import { useState } from "react";
import {
  Overlay,
  SidebarWrapper,
  MenuItem,
  SubMenu,
} from "./SidebarMenu.styled";

type MenuItemType = {
  label: string;
  id: number;
  children?: MenuItemType[];
};

type SidebarMenuProps = {
  open: boolean;
  onClose: () => void;
  items: MenuItemType[];
};

export const SidebarMenu = ({ open, onClose, items }: SidebarMenuProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <Overlay open={open} onClick={onClose} />

      <SidebarWrapper open={open}>
        {items.map((item) => (
          <div key={item.label}>
            <MenuItem onClick={() => toggleExpand(item.label)}>
              {item.label}
            </MenuItem>

            {item.children && expanded === item.label && (
              <SubMenu>
                {item.children.map((child) => (
                  <MenuItem key={child.label}>{child.label}</MenuItem>
                ))}
              </SubMenu>
            )}
          </div>
        ))}
      </SidebarWrapper>
    </>
  );
};
