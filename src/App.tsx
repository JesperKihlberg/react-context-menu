import { AppBar, Avatar, Button, createStyles, Icon, IconButton, makeStyles, SvgIcon, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import BasicContextMenu from "./components/BasicContextMenu";
import SelectedTextContextMenu from "./components/SelectedTextContextMenu";
import TestDocument from "./components/TestDocument";

const useStyles = makeStyles(() =>
  createStyles({
    imageIcon: {
      display: "flex",
      height: "inherit",
      width: "inherit",
    },
    iconRoot: {
      textAlign: "center",
    },
    questionContainers: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const menuItems = [
    {
      onClick: () => document.execCommand("copy"),
      label: "Copy",
    },
    { onClick: () => print(), label: "Print" },
    { label: "Highlight" },
    { label: "Email" },
  ];
  return (
    <div>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Avatar aria-label="recipe" style={{ backgroundColor: "transparent" }}>
              <img className={classes.imageIcon} src="./favicon.svg" />
            </Avatar>
            <Button color="inherit">react-context-menu</Button>
          </Toolbar>
        </AppBar>
      </div>
      <SelectedTextContextMenu menuItems={menuItems}>
        <TestDocument title="SelectedTextContextMenu" />
      </SelectedTextContextMenu>
      <BasicContextMenu menuItems={menuItems}>
        <TestDocument title="BasicContextMenu" />
      </BasicContextMenu>
    </div>
  );
};

export default App;
