import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Navbar from "../navbar/navbar";
import UserInfo from "./userInfo";

import { useStyles, sideBarLinks } from "../../constants/sidebarConsts";

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log("handled");
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* Display logged in user information */}
      <UserInfo />

      <Divider />
      
      {/* Sidebar Links */}
      <List>
        {sideBarLinks.map((item) => {
          return (
            <ListItem button key={item.text} component={Link} to={item.url}>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Navbar onMenuClick={handleDrawerToggle} />

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {props.children}
    </div>
  );
}

export default Sidebar;
