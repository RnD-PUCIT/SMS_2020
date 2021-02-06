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

  useEffect(() => {
    const classes = classListConst;
    const students = studentsListConst;
    setClassList(classes);
    setStudentsList(students);
  }, []);

  const classes = useStyles();

  if (classList) {
    return (
      <React.Fragment>
        <h1>Attendance Dashboard</h1>

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
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell align="right">Week 01</TableCell>
                    <TableCell align="right">Week 02</TableCell>
                    <TableCell align="right">Week 03</TableCell>
                    <TableCell align="right">Week 04</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentsList.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {student.firstName}
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
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
