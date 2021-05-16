import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "../../constants/layoutConsts";
import ProfileAvatar from "./profileAvatar";

export default function Navbar({ onMenuClick, userInfo }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuLinkClick = (text) => {
    // Check which link is clicked
    if (text.toLowerCase() === "logout") {
      window.localStorage.clear();
      window.location = "/login";
    }

    // Close the menu
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography variant="h6" className={classes.title}>
            {brandName}
          </Typography> */}

          <span className={classes.title} />
          <ProfileAvatar
            user={userInfo}
            onMenuOpen={handleMenu}
            onMenuClose={handleClose}
            onMenuItemClick={handleMenuLinkClick}
            anchorEl={anchorEl}
            open={open}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
