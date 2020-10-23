import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { getMonths, getDays, getWeeks } from "../../constants/calendarConsts";

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
  selectDropdown: {
    padding: "8px 10px",
  },
});

const handleWeekChange = () => {
  alert("changed");
};

const months = getMonths();

const Diary = ({ diary }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DiaryFilterMenu />
      <DayFilterButtons />
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
  const weeks = getWeeks();
  const classes = useStyles();
  return (
    <Grid container spacing={1} justify="flex-end">
      <Grid item>
        <select className={classes.selectDropdown} onChange={handleWeekChange}>
          <option value="0">Select Week</option>
          {weeks.map((week) => {
            return <option key={week.id}>{week.name}</option>;
          })}
        </select>
      </Grid>
      <Grid item>
        <select className={classes.selectDropdown}>
          <option value="0">Select Month</option>
          {months.map((month) => {
            return <option key={month.id}>{month.name}</option>;
          })}
        </select>
      </Grid>
    </Grid>
  );
};

const DayFilterButtons = () => {
  const days = getDays();
  return (
    <Grid container spacing={1} justify="center" style={{ margin: "20px 0" }}>
      <Grid item>
        <Button variant="outlined">All</Button>
      </Grid>
      {days.map((day) => {
        return (
          <Grid item key={day.id}>
            <Button variant="outlined">{day.name}</Button>
          </Grid>
        );
      })}
    </Grid>
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
