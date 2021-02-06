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
  tableCell: {
    display: 'borderBox',
    padding: '10px',
    border: 'none',
  },
});

const AttendanceDashboard = () => {
  // State variables
  const [classList, setClassList] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [monthDaysCount, setMonthDaysCount] = useState(null);
  const [attendance, setAttendance] = useState(null);

  useEffect(() => {
    const classes = classListConst;
    const students = studentsListConst;
    const days = monthDaysCountConst.reverse();
    const attendance = attendanceConst;
    setClassList(classes);
    setStudentsList(students);
    setMonthDaysCount(days);
    setAttendance(attendance);
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

          <div>
            <TableContainer
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                overflowX: 'auto',
              }}
            >
              <Table className={classes.table} size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      Days
                    </TableCell>
                    <TableCell colSpan={4} style={{ padding: '0' }}>
                      {attendance.map((day, index) => (
                        <TableCell key={index} className={classes.tableCell}>
                          {day.date}
                        </TableCell>
                      ))}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Roll #</TableCell>
                    <TableCell className={classes.tableCell}>
                      Student Name
                    </TableCell>
                    <TableCell colSpan={4} className={classes.tableCell} />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {studentsList.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell>{student.rollNumber}</TableCell>
                      <TableCell>
                        {`${student.firstName} ${student.lastName}`}
                      </TableCell>
                      {attendance.map((day, i) =>
                        filterStudent(student, day.students, i)
                      )}
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

function filterStudent(currentStudent, studentsArray, i) {
  const student = studentsArray.filter((x) => x.id === currentStudent.id)[0];
  return <TableCell>{student.status}</TableCell>;
}

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

const attendanceConst = [
  {
    date: '01/01/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'A' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
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
