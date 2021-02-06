import {
  Button,
  makeStyles,
  MenuItem,
  Paper,
  TextField,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  paper: { padding: '30px' },
  marginY10: { margin: '10px 0' },
});

const AttendanceDashboard = () => {
  // State variables
  const [classList, setClassList] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [monthDaysCount, setMonthDaysCount] = useState(null);

  useEffect(() => {
    const classes = classListConst;
    const students = studentsListConst;
    const days = monthDaysCountConst.reverse();
    setClassList(classes);
    setStudentsList(students);
    setMonthDaysCount(days);
  }, []);

  const classes = useStyles();

  if (classList) {
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <TextField select variant="outlined" fullWidth label="Select Class">
            {classList.map((c, index) => (
              <MenuItem key={index} value={c.id}>
                {`${c.className} ${c.section}`}
              </MenuItem>
            ))}
          </TextField>
          <Button
            color="primary"
            variant="contained"
            className={classes.marginY10}
          >
            Mark Attendance
          </Button>

          <div className="">
            <TableContainer
              style={{ border: '1px solid #E0E0E0', borderRadius: '5px' }}
            >
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Roll #</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell colSpan={4}>Month Attendance</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell />
                    <TableCell />
                    <TableCell colSpan={4} style={{ padding: '0' }}>
                      {monthDaysCount.map((day, index) => (
                        <TableCell
                          key={index}
                          style={{ padding: '10px', border: 'none' }}
                        >
                          {day}
                        </TableCell>
                      ))}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentsList.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell>{student.rollNumber}</TableCell>
                      <TableCell>
                        {`${student.firstName} ${student.lastName}`}
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </React.Fragment>
    );
  }

  return null;
};

export default AttendanceDashboard;

const classListConst = [
  {
    id: 1,
    className: '1',
    section: 'Blue',
  },
  {
    id: 2,
    className: '1',
    section: 'Red',
  },
  {
    id: 3,
    className: '2',
    section: 'Blue',
  },
  {
    id: 4,
    className: '2',
    section: 'Red',
  },
  {
    id: 5,
    className: '3',
    section: 'Blue',
  },
  {
    id: 6,
    className: '3',
    section: 'Red',
  },
  {
    id: 7,
    className: '4',
    section: 'Blue',
  },
  {
    id: 8,
    className: '4',
    section: 'Red',
  },
  {
    id: 9,
    className: '5',
    section: 'Blue',
  },
  {
    id: 10,
    className: '5',
    section: 'Red',
  },
  {
    id: 11,
    className: '6',
    section: 'Blue',
  },
  {
    id: 12,
    className: '6',
    section: 'Red',
  },
  {
    id: 13,
    className: '7',
    section: 'Blue',
  },
  {
    id: 14,
    className: '7',
    section: 'Red',
  },
  {
    id: 15,
    className: '8',
    section: 'Blue',
  },
  {
    id: 16,
    className: '8',
    section: 'Red',
  },
  {
    id: 17,
    className: '9',
    section: 'Blue',
  },
  {
    id: 18,
    className: '9',
    section: 'Red',
  },
  {
    id: 19,
    className: '10',
    section: 'Blue',
  },
  {
    id: 20,
    className: '10',
    section: 'Red',
  },
];

const studentsListConst = [
  {
    id: 1,
    firstName: 'Sohaib',
    lastName: 'Salman',
    rollNumber: 'BITF17A040',
  },
  {
    id: 2,
    firstName: 'Arslan',
    lastName: 'Yousaf',
    rollNumber: 'BITF17A012',
  },
  {
    id: 3,
    firstName: 'Daniyal',
    lastName: 'Ahmad',
    rollNumber: 'BITF17A026',
  },
  {
    id: 4,
    firstName: 'Tehreem',
    lastName: 'Akhter',
    rollNumber: 'BITF17A041',
  },
  {
    id: 5,
    firstName: 'Zainab',
    lastName: 'Zulfiqar',
    rollNumber: 'BITF17A019',
  },
];

const monthDaysCountConst = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  15,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];
