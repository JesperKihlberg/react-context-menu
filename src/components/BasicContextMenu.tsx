//a material ui context menu component
import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";

interface BasicContextMenuProps {
  menuItems?: {
    label: JSX.Element | string;
    onClick?: () => void;
  }[];
}

const BasicContextMenu: React.FC<BasicContextMenuProps> = ({ children, menuItems }) => {
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };
  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <React.Fragment>
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined}
        >
          {menuItems &&
            menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  handleClose();
                  menuItem.onClick?.();
                }}
              >
                {menuItem.label}
              </MenuItem>
            ))}
        </Menu>
      </React.Fragment>
      {children}
    </div>
  );
};

export default BasicContextMenu;
