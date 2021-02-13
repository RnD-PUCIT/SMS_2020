import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@material-ui/core';

const MarkGrade = () => {
  const [gradesList, setGradesList] = useState([]);

  useEffect(() => {
    const grades = gradesConst;

    // Set state variable
    setGradesList(grades);
  }, []);
  return (
    <React.Fragment>
      <h1>Mark Grade</h1>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Information</TableCell>
              <TableCell>Marks obtained</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gradesList.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <ListItem style={{ padding: '0' }}>
                    <ListItemAvatar>
                      <Avatar>{row.studentInfo.firstName.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      {`${row.studentInfo.rollNumber} - ${row.studentInfo.firstName} ${row.studentInfo.lastName}`}
                    </ListItemText>
                  </ListItem>
                </TableCell>
                <TableCell>
                  <TextField size="small" style={{width: '40px'}} />
                  <span style={{fontSize: '25px'}}> / </span> 
                  <span style={{fontSize: '16px'}}>{row.totalMarks}</span>
                </TableCell>
                <TableCell>
                  <TextField size="small" fullWidth multiline />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {gradesList.map((grade, index) => {})}
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
    obtainedMarks: '',
    gradeTitle: 'Quiz 01',
    remarks: '',
    classId: 1,
    subjectId: 1,
    gradeTypeId: 1,
    sessionId: 1,
  },
];
