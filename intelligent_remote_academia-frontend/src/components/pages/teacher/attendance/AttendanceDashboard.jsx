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
  Grid,
  Select,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMonths } from '../../../constants/calendarConsts';
import MarkAttendance from './MarkAttendance';

const useStyles = makeStyles({
  paper: { padding: '30px' },
  marginY10: { margin: '10px 0' },
  tableCell: {
    padding: '10px',
  },
});

const AttendanceDashboard = () => {
  // State variables
  const [classList, setClassList] = useState(null);
  const [studentsList, setStudentsList] = useState(null);
  const [attendance, setAttendance] = useState(null);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [isClassSelected, setIsClassSelected] = useState(false);
  const monthList = getMonths();

  useEffect(() => {
    const classesList = classListConst;
    const students = studentsListConst;
    const attendanceList = attendanceConst.reverse();
    setClassList(classesList);
    setStudentsList(students);
    setAttendance(attendanceList);
  }, []);

  const classes = useStyles();

  const handleMonthIncrement = () => {
    if (selectedMonth < 11) {
      let month = selectedMonth + 1;
      setSelectedMonth(month);
    }
  };

  const handleMonthDecrement = () => {
    if (selectedMonth > 0) {
      let month = selectedMonth - 1;
      setSelectedMonth(month);
    }
  };

  const handleClassSelectionChange = (event) => {
    const selectedClassId = event.target.value;
    setSelectedClass(selectedClassId);
    setIsClassSelected(true);
  };

  if (classList) {
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <TextField
            select
            variant="outlined"
            fullWidth
            label="Select Class"
            size="small"
            onChange={(e) => {
              handleClassSelectionChange(e);
            }}
          >
            {classList.map((c, index) => (
              <MenuItem key={index} value={c.id}>
                {`${c.className} ${c.section}`}
              </MenuItem>
            ))}
          </TextField>

          <Grid container>
            <Grid item xs={6} className={classes.marginY10}>
              <Button
                variant="contained"
                onClick={handleMonthDecrement}
                disabled={!isClassSelected}
              >
                {'<'}
              </Button>
              <Select
                id="material-select-small"
                style={{
                  width: '200px',
                  margin: '0 10px',
                }}
                displayEmpty
                disabled={!isClassSelected}
                variant="outlined"
                renderValue={() => {
                  return monthList[selectedMonth].name;
                }}
                onChange={(e) => {
                  setSelectedMonth(e.target.value);
                }}
              >
                {monthList.map((month) => (
                  <MenuItem key={month.id} value={month.id}>
                    {`${month.name}`}
                  </MenuItem>
                ))}
              </Select>
              <Button
                variant="contained"
                onClick={handleMonthIncrement}
                disabled={!isClassSelected}
              >
                {'>'}
              </Button>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              {/* {isClassSelected && <MarkAttendance />} */}
              <MarkAttendance studentList={studentsList} />
            </Grid>
          </Grid>

          <div>
            <TableContainer
              style={{
                border: '1px solid #E0E0E0',
                borderRadius: '5px',
                overflowX: 'auto',
              }}
            >
              <Table className={classes.table} size="small">
                <TableHead style={{ backgroundColor: 'rgb(250, 250, 250)' }}>
                  <TableRow>
                    <TableCell align="center" colSpan={2}>
                      Date
                    </TableCell>
                    {attendance.map((day, index) => (
                      <TableCell
                        key={index}
                        className={classes.tableCell}
                        align="center"
                      >
                        {`${new Date(day.date).getDate()}`}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Roll #</TableCell>
                    <TableCell className={classes.tableCell}>
                      Student Name
                    </TableCell>
                    {attendance.map((day, index) => (
                      <TableCell key={index} className={classes.tableCell} />
                    ))}
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
                        filterStudent(student, day.students, i, classes)
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

function filterStudent(currentStudent, studentsArray, i, classes) {
  const student = studentsArray.filter((x) => x.id === currentStudent.id)[0];
  return (
    <TableCell key={i} className={classes.tableCell} align="center">
      {student.status}
    </TableCell>
  );
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
  {
    date: '01/02/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/03/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/04/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/05/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/06/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/07/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/08/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/09/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
  {
    date: '01/10/2021',
    students: [
      { id: 1, status: 'P' },
      { id: 2, status: 'P' },
      { id: 3, status: 'P' },
      { id: 4, status: 'P' },
      { id: 5, status: 'P' },
    ],
  },
];
