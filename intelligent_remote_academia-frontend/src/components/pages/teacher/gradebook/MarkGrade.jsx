import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyles = makeStyles({
  borderedCell: { borderRight: '1px solid rgba(224, 224, 224, 1)' },
  cellCentered: { textAlign: 'center' },
});

const MarkGrade = () => {
  const [gradesList, setGradesList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const grades = gradesConst;

    grades.sort((a, b) => {
      var x = a.studentInfo.rollNumber.toLowerCase();
      var y = b.studentInfo.rollNumber.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
    });
    // Set state variable
    setGradesList(grades);
  }, []);

  const handleInputChange = (event, student) => {
    const { value, name } = event.target;
    const grades = [...gradesList];
    const index = grades.indexOf(student);

    grades[index][name] = value;

    setGradesList(grades);
  };

  const handleGradesSubmission = () => {
    console.log(gradesList);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Mark Grade</h1>
        <div className="flex-end u_mb_tiny">
          <Button
            variant="contained"
            color="primary"
            onClick={handleGradesSubmission}
          >
            Save Grades
          </Button>
        </div>
      </div>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.borderedCell}>
                Student Information
              </TableCell>
              <TableCell
                className={classes.borderedCell}
                style={{ textAlign: 'center' }}
              >
                Marks obtained
              </TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gradesList.map((row, index) => (
              <TableRow key={index}>
                <TableCell className={classes.borderedCell}>
                  <ListItem style={{ padding: '0' }}>
                    <ListItemAvatar>
                      <Avatar>{row.studentInfo.firstName.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      {`${row.studentInfo.rollNumber} - ${row.studentInfo.firstName} ${row.studentInfo.lastName}`}
                    </ListItemText>
                  </ListItem>
                </TableCell>
                <TableCell
                  className={classes.borderedCell}
                  style={{ textAlign: 'center' }}
                >
                  <TextField
                    size="small"
                    type="number"
                    name="obtainedMarks"
                    value={row.obtainedMarks}
                    style={{ width: '50px', textAlign: 'right' }}
                    onChange={(e) => handleInputChange(e, row)}
                  />
                  <span style={{ fontSize: '25px' }}> / </span>
                  <span style={{ fontSize: '16px' }}>{row.totalMarks}</span>
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    fullWidth
                    multiline
                    name="remarks"
                    value={row.remarks}
                    onChange={(e) => handleInputChange(e, row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {gradesList.map(() => {})}
    </React.Fragment>
  );
};

export default MarkGrade;

const gradesConst = [
  {
    id: 1,
    studentInfo: {
      id: 1,
      rollNumber: 'BITF17A040',
      firstName: 'Sohaib',
      lastName: 'Salman',
      profilePic: '',
    },
    gradeDate: '2/13/2021',
    totalMarks: 100,
    obtainedMarks: 0,
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
  {
    id: 1,
    studentInfo: {
      id: 1,
      rollNumber: 'BITF17A012',
      firstName: 'Arslan',
      lastName: 'Yousaf',
      profilePic: '',
    },
    gradeDate: '2/13/2021',
    totalMarks: 100,
    obtainedMarks: 0,
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
  {
    id: 1,
    studentInfo: {
      id: 1,
      rollNumber: 'BITF17A026',
      firstName: 'Daniyal',
      lastName: 'Ahmed',
      profilePic: '',
    },
    gradeDate: '2/13/2021',
    totalMarks: 100,
    obtainedMarks: 0,
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
  {
    id: 1,
    studentInfo: {
      id: 1,
      rollNumber: 'BITF17A041',
      firstName: 'Tehreem',
      lastName: 'Akhter',
      profilePic: '',
    },
    gradeDate: '2/13/2021',
    totalMarks: 100,
    obtainedMarks: 0,
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
  {
    id: 1,
    studentInfo: {
      id: 1,
      rollNumber: 'BITF17A019',
      firstName: 'Zainab',
      lastName: 'Zulfiqar',
      profilePic: '',
    },
    gradeDate: '2/13/2021',
    totalMarks: 100,
    obtainedMarks: 0,
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
];
