import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { brandName } from '../../constants/navbarConsts';
import { useStyles } from '../../constants/layoutConsts';
import ProfileAvatar from './profileAvatar';

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

  const handleMenuLinkClick = () => {
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

          {/* <Typography variant="h6" className={classes.title}>
            {brandName}
          </Typography> */}

          <span className={classes.title} />
          <ProfileAvatar
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
