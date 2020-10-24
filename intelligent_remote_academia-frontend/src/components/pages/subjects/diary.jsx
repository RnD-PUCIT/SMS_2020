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
  state = {
    diary: this.props.diary,
    allDiary: this.props.diary,
    isMonthSelected: false,
    isWeekSelected: false,
    selectedMonth: null,
    selectedDay: 0,
  };

  render() {
    const { diary } = this.state;
    const { classes } = this.props;

    const handleDayChange = (buttonId) => {
      const selectedDay = buttonId;
      this.setState({ selectedDay });
    };

    const handleWeekChange = (event) => {
      // Get selected week from dropdown
      const selectedWeek = event.target.value;
      let { selectedMonth } = this.state;

      // Get diary object from state
      let diary = [...this.state.allDiary];
      let { isWeekSelected } = this.state;

      if (selectedWeek != 0) {
        // Filter the contnet of diary according to the month selected.
        diary = diary.filter((d) => {
          const diaryDate = new Date(d.diaryDate);
          const month = diaryDate.getMonth() + 1;
          const week = Math.floor(diaryDate.getDate() / 7);
          return week == selectedWeek && month == selectedMonth;
        });
        isWeekSelected = true;
      } else {
        isWeekSelected = false;
      }

      // Update the state of diary
      this.setState({ diary, isWeekSelected });
    };

    const handleMonthChange = (event) => {
      // Get selected month from dropdown
      let selectedMonth = event.target.value;

      // Get diary object from state
      let diary = [...this.state.allDiary];
      let { isMonthSelected } = this.state;

      if (selectedMonth != 0) {
        // Filter the contnet of diary according to the month selected.
        diary = diary.filter((d) => {
          const diaryDate = new Date(d.diaryDate);
          const month = diaryDate.getMonth() + 1;
          return month == selectedMonth;
        });
        isMonthSelected = true;
      } else {
        isMonthSelected = false;
      }
      // Update the state of diary
      this.setState({ diary, isMonthSelected, selectedMonth });
    };

    return (
      <React.Fragment>
        {/* Component for Months and Weeks dropdown */}
        <DiaryFilterMenu
          onWeekChange={handleWeekChange}
          onMonthChange={handleMonthChange}
          disableWeek={this.state.isMonthSelected}
        />

        {/* Component for Day buttons */}
        <DayFilterButtons
          disableDays={this.state.isWeekSelected}
          onDayChange={handleDayChange}
          selectedDay={this.state.selectedDay}
        />

        {/* Diary content */}
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

const DiaryFilterMenu = ({ onWeekChange, onMonthChange, disableWeek }) => {
  const weeks = getWeeks();
  const classes = useStyles();
  return (
    <Grid container spacing={1} justify="flex-end">
      <Grid item>
        <select
          className={classes.selectDropdown}
          onChange={onWeekChange}
          disabled={!disableWeek}
        >
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

const DayFilterButtons = ({ disableDays, onDayChange, selectedDay }) => {
  const days = getDays();
  return (
    <Grid container spacing={1} justify="center" style={{ margin: "20px 0" }}>
      <Grid item>
        <Button
          color="primary"
          variant={selectedDay === 0 ? "contained" : "outlined"}
          onClick={() => onDayChange(0)}
        >
          All
        </Button>
      </Grid>
      {days.map((day) => {
        return (
          <Grid item key={day.id}>
            <Button
              variant="outlined"
              disabled={!disableDays}
              color="primary"
              variant={selectedDay === day.id ? "contained" : "outlined"}
              onClick={() => onDayChange(day.id)}
            >
              {day.name}
            </Button>
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
