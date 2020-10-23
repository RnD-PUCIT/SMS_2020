import React from "react";
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

import { getMonths } from "../../constants/calendarConsts";

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

const months = getMonths();

const Diary = ({ diary }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DiaryFilterMenu />
      <DiaryFilterButtons />
      {diary.map((item) => {
        let diaryDate = new Date(item.diaryDate);
        return (
          <Paper className={classes.paper} key={item.id}>
            {/* Toolbar Starts */}
            <div className={classes.toolbar} variant="dense">
              <Typography variant="h6">
                {months[diaryDate.getMonth()].name +
                  " " +
                  diaryDate.getDate() +
                  ", " +
                  diaryDate.getFullYear()}
              </Typography>
            </div>
            {/* Toolbar Ends */}
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
        <Button variant="outlined">Monday</Button>
        <Button variant="outlined">Tuesday</Button>
        <Button variant="outlined">Wednesday</Button>
        <Button variant="outlined">Thursday</Button>
        <Button variant="outlined">Friday</Button>
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
