import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Avatar from "../../common/avatar";
import { accountMenu } from "../../constants/navbarConsts";
import colors from "../../../colors";

const useStyles = makeStyles({
  title: {
    color: colors.medium,
    marginLeft: 10,
  },
});

const ProfileAvatar = ({
  user,
  onMenuOpen,
  anchorEl,
  open,
  onMenuClose,
  onMenuItemClick,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <IconButton onClick={onMenuOpen} color="inherit">
        <Avatar />
        <Typography className={classes.title}>
          {user.firstName + " " + user.lastName}
        </Typography>
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
        onClose={onMenuClose}
      >
        {accountMenu.map((item) => {
          return (
            <MenuItem
              onClick={() => {
                onMenuItemClick(item.text);
              }}
              key={item.text}
            >
              <i className={item.icon}></i>
              {item.text}
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default ProfileAvatar;
