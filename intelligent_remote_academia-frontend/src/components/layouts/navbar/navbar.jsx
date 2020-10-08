import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

import {
  useStyles,
  brandName,
  accountMenu,
} from "../../constants/navbarConsts";

export default function Navbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={props.onMenuClick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            {brandName}
          </Typography>

          {/* Profile Avatar Dropdown */}
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              {accountMenu.map((item) => {
                return (
                  <MenuItem onClick={handleClose} key={item.text}>
                    {item.text}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
