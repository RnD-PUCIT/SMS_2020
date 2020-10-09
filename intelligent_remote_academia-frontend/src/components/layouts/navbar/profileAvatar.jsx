import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import Avatar from "../../common/avatar";
import {accountMenu} from "../../constants/navbarConsts";

const ProfileAvatar = (props) => {
    return ( 
        <div>
          <IconButton onClick={props.onMenuOpen} color="inherit">
            <Avatar />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={props.anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={props.open}
            onClose={props.onMenuClose}
          >
            {accountMenu.map((item) => {
              return (
                <MenuItem onClick={props.onMenuClose} key={item.text}>
                  <i className={item.icon}></i>
                  {item.text}
                </MenuItem>
              );
            })}
          </Menu>
        </div> );
}
 
export default ProfileAvatar;