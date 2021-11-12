//a material ui context menu component
import { Button, Menu, MenuItem } from "@material-ui/core";
import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const ContextMenu: React.FC = ({ children }) => {
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
          <MenuItem
            onClick={() => {
              handleClose();
              document.execCommand("copy");
            }}
          >
            Copy
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              print();
            }}
          >
            Print
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            Highlight
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            Email
          </MenuItem>
        </Menu>
      </React.Fragment>
      {children}
    </div>
  );
};

export default ContextMenu;
