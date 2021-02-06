import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { button } = props;

  return (
    <div>
      <Button
        onClick={handleClick}
        color={button.color}
        variant={button.variant}
      >
        {button.text}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </div>
  );
}
