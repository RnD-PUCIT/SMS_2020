import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Navbar from '../navbar/navbar';
import UserInfo from './userInfo';

import { sideBarLinks } from '../../constants/sidebarConsts';
import { useStyles } from '../../constants/layoutConsts';
import { ListItemIcon } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar(props) {
  const { window } = props;
  const { userInfo } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* Display logged in user information */}
      <UserInfo parentInfo={userInfo} />

      {/* Sidebar Links */}
      <List>
        {sideBarLinks.map((item) => {
          return (
            <ListItem
              button
              key={item.text}
              component={NavLink}
              to={item.url}
              activeClassName={classes.active}
              style={{ padding: '15px' }}
            >
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ fontSize: '23px' }}
                />
              </ListItemIcon>
              <ListItemText primary={item.text} />
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
