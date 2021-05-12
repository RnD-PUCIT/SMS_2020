import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon } from "@material-ui/core";

import Navbar from "../navbar/navbar";
import UserInfo from "./userInfo";
import { sideBarLinks } from "../../constants/sidebarConsts";
import { useStyles } from "../../constants/layoutConsts";
import FeatherIcon from "../../common/icons/FeatherIcon";

function Sidebar(props) {
  const { window, userInfo, role } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(sideBarLinks[role]);
  }, [role]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <React.Fragment>
      {/* Display logged in user information */}
      <UserInfo userInfo={userInfo} role={role} />

      {/* Sidebar Links */}
      <List>
        <ListItem className={classes.linksHeading}>Dashboard</ListItem>
        {links.map((item) => {
          return (
            <ListItem
              button
              key={item.text}
              component={NavLink}
              to={item.url}
              activeClassName={classes.active}
              className={classes.linkItem}
              style={{ padding: "8px 20px" }}
            >
              <ListItemIcon className={classes.linkIcon}>
                {<FeatherIcon iconName={item.icon} size={25} color="#757d89" />}
              </ListItemIcon>
              <ListItemText className={classes.linkText} primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Navbar onMenuClick={handleDrawerToggle} userInfo={userInfo} />

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
