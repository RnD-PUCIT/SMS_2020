import React, { Component } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { getMonths, getDays, getWeeks } from "../../constants/calendarConsts";

const styles = {
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
};

const useStyles = makeStyles({
  selectDropdown: {
    padding: "8px 10px",
  },
});

const months = getMonths();

class Diary extends Component {
  state = { diary: this.props.diary, allDiary: this.props.diary };

  render() {
    const { diary } = this.state;
    const { classes } = this.props;

    const handleWeekChange = (event) => {
      // Get selected week from dropdown
      const selectedWeek = event.target.value;

      // Get diary object from state
      let diary = [...this.state.allDiary];

      if (selectedWeek != 0) {
        // Filter the contnet of diary according to the month selected.
        diary = diary.filter((d) => {
          const diaryDate = new Date(d.diaryDate);
          const week = Math.floor(diaryDate.getDate() / 7);
          return week == selectedWeek;
        });
      }

      // Update the state of diary
      this.setState({ diary });
    };

    const handleMonthChange = (event) => {
      // Get selected month from dropdown
      const selectedMonth = event.target.value;

      // Get diary object from state
      let diary = [...this.state.allDiary];

      if (selectedMonth != 0) {
        // Filter the contnet of diary according to the month selected.
        diary = diary.filter((d) => {
          const diaryDate = new Date(d.diaryDate);
          const month = diaryDate.getMonth() + 1;
          return month == selectedMonth;
        });
      }

      // Update the state of diary
      this.setState({ diary });
    };

    return (
      <React.Fragment>
        <DiaryFilterMenu
          onWeekChange={handleWeekChange}
          onMonthChange={handleMonthChange}
        />
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
  }
}

const DiaryFilterMenu = ({ onWeekChange, onMonthChange }) => {
  const weeks = getWeeks();
  const classes = useStyles();
  return (
    <Grid container spacing={1} justify="flex-end">
      <Grid item>
        <select className={classes.selectDropdown} onChange={onWeekChange}>
          <option value="0">Select Week</option>
          {weeks.map((week) => {
            return (
              <option key={week.id} value={week.id}>
                {week.name}
              </option>
            );
          })}
        </select>
      </Grid>
      <Grid item>
        <select className={classes.selectDropdown} onChange={onMonthChange}>
          <option value="0">Select Month</option>
          {months.map((month) => {
            return (
              <option key={month.id} value={month.id}>
                {month.name}
              </option>
            );
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

export default withStyles(styles)(Diary);
