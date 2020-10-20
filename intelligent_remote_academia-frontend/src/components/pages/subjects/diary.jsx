import React, { Component } from "react";
import {
  Button,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    marginTop: "30px",
  },
  paperBody: {
    padding: "20px 30px",
  },
  toolbar: {
    backgroundColor: "#2875c7",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: "white",
    padding: "5px 20px",
  },
});

const buttonStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const menuStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  paper: {
    position: "relative",
    zIndex: 9999,
  },
});

const Diary = ({ diary }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DiaryFilterMenu />
      <DiaryFilterButtons />
      {diary.map((item) => {
        return (
          <Paper className={classes.paper}>
            <div className={classes.toolbar} variant="dense">
              <Typography variant="h6">{item.diaryDate}</Typography>
            </div>
            <div className={classes.paperBody}>
              <Typography>{item.diaryTitle}</Typography>
              {item.diaryContent && (
                <DiaryContent content={item.diaryContent} />
              )}
            </div>
          </Paper>
        );
      })}
    </React.Fragment>
  );
};

const DiaryFilterMenu = () => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const classes = menuStyles();
  return (
    <React.Fragment>
      <div className={classes.root}></div>
      <Button ref={anchorRef} onClick={handleToggle} variant="outlined">
        Select Month
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                  {months.map((month) => {
                    return (
                      <MenuItem onClick={handleClose} key={month.id}>
                        {month.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

const DiaryFilterButtons = () => {
  const classes = buttonStyles();
  return (
    <center>
      <div className={classes.root} style={{ marginTop: "20px" }}>
        <Button variant="outlined">All</Button>
        <Button variant="outlined" color="secondary ">
          Monday
        </Button>
        <Button variant="outlined" color="primary ">
          Tuesday
        </Button>
        <Button variant="outlined" color="primary ">
          Wednesday
        </Button>
        <Button variant="outlined" color="primary ">
          Thursday
        </Button>
        <Button variant="outlined" color="primary ">
          Friday
        </Button>
      </div>
    </center>
  );
};

const DiaryContent = ({ content }) => {
  return (
    <React.Fragment>
      <hr />
      {content}
    </React.Fragment>
  );
};

export default Diary;

const months = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];
