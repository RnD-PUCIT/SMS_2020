import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import useStyles from "../../../styles/timeTableStyles";
import { getDays } from "../../constants/calendarConsts";

const TimeTable = () => {
  const [classInfo, setClassInfo] = useState({});
  const [timeTable, setTimetable] = useState([]);

  useEffect(() => {
    const { classInfo: classData, timeTable: tableData } = timeTableConst;
    setTimetable(tableData);
    setClassInfo(classData);
  }, []);

  const classes = useStyles();
  const days = getDays();
  if (timeTable) {
    return (
      <React.Fragment>
        <Paper className={classes.root} elevation={3}>
          <Typography variant="h5">Time Table</Typography>

          <Paper variant="outlined">
            <TableContainer>
              <Grid item xs={12}>
                <Table>
                  {/* <TableHead>
                    <TableRow>
                      {days.map((day, index) => {
                        if (index < timeTable.length) {
                          return <TableCell key={index}>{day.name}</TableCell>;
                        }
                      })}
                    </TableRow>
                  </TableHead> */}
                  <TableBody>
                    {timeTable.map((day, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{day.dayName}</TableCell>
                          {day.schedule.map((s, index) => {
                            return (
                              <TableCell key={index}>{s.subjectName}</TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Grid>
            </TableContainer>
          </Paper>
        </Paper>
      </React.Fragment>
    );
  }
  return null;
};

const timeTableConst = {
  classInfo: {
    name: "8th",
    section: "Blue",
  },
  timeTable: [
    {
      dayName: "Monday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Tuesday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Wednesday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Thursday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Friday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
  ],
};

// const timeTableConst = [
//   {
//     dayName: "Monday",
//     schedule: [
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
//       { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
//       { subjectName: "Chemistry", teacherName: "ABC", timeSlot: "10:15-11:00" },
//       { subjectName: "Computer", teacherName: "ABC", timeSlot: "11:00-11:45" },
//       { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
//       { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
//     ],
//   },
//   {
//     dayName: "Tuesday",
//     schedule: [
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
//       { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
//       { subjectName: "Chemistry", teacherName: "ABC", timeSlot: "10:15-11:00" },
//       { subjectName: "Computer", teacherName: "ABC", timeSlot: "11:00-11:45" },
//       { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
//       { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
//     ],
//   },
//   {
//     dayName: "Wednesday",
//     schedule: [
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
//       { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
//       { subjectName: "Chemistry", teacherName: "ABC", timeSlot: "10:15-11:00" },
//       { subjectName: "Computer", teacherName: "ABC", timeSlot: "11:00-11:45" },
//       { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
//       { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
//     ],
//   },
//   {
//     dayName: "Thursday",
//     schedule: [
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
//       { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
//       { subjectName: "Chemistry", teacherName: "ABC", timeSlot: "10:15-11:00" },
//       { subjectName: "Computer", teacherName: "ABC", timeSlot: "11:00-11:45" },
//       { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
//       { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
//     ],
//   },
//   {
//     dayName: "Friday",
//     schedule: [
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
//       { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
//       { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
//       { subjectName: "Chemistry", teacherName: "ABC", timeSlot: "10:15-11:00" },
//       { subjectName: "Computer", teacherName: "ABC", timeSlot: "11:00-11:45" },
//       { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
//       { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
//     ],
//   },
// ];

export default TimeTable;
