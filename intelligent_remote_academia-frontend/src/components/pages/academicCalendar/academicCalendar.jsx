import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';

import ReactToPrint from 'react-to-print';

const useStyles = makeStyles({
  root: {
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '30px',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
});

class AcademicCalendar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container justify='flex-end'>
          <ReactToPrint
            trigger={() => {
              return (
                <Button
                  color='primary'
                  variant='contained'
                  style={{ marginBottom: '20px' }}>
                  Download as pdf
                </Button>
              );
            }}
            content={() => this.componentRef}
          />
        </Grid>
        <CalendarBody ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

class CalendarBody extends Component {
  state = { academicCalendar: [] };

  componentDidMount() {
    const { academicCalendar } = academicCalenderConst;
    this.setState({ academicCalendar });
    console.log('Academic Calendar', this.state.academicCalender);
  }

  render() {
    if (this.state.academicCalendar)
      return <Schedule academicCalendar={this.state.academicCalendar} />;
  }
}

const Schedule = ({ academicCalendar }) => {
  const tableHead = ['Sr. #', 'Event', 'Date'];
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={3}>
        <Typography variant='h5' className={classes.heading}>
          Academic Calendar
        </Typography>
        <Paper variant='outlined'>
          <TableContainer>
            <Grid item xs={12}>
              <Table>
                <TableHead>
                  <TableRow>
                    {tableHead.map((cell, index) => {
                      return (
                        <TableCell key={index}>
                          <strong>{cell}</strong>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {academicCalendar.map((occasion, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell component='th' scope='row'>
                          {++index}
                        </TableCell>
                        <TableCell>
                          <strong>{occasion.event}</strong>
                        </TableCell>
                        <TableCell>{occasion.date}</TableCell>
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
};

const academicCalenderConst = {
  academicCalendar: [
    { event: 'Commencement of classes', date: 'September 15,2020' },
    { event: 'Deadline of payment for sem dues', date: 'September 21,2020' },
    { event: 'Midterm Examinations', date: 'September 16,2020' },
    { event: 'Winter Vacations', date: 'September 17,2020' },
    { event: 'Final Term Papers', date: 'September 18,2020' },
    { event: 'End of Classes', date: 'September 19,2020' },
    { event: 'Final Result Declaration', date: 'September 20,2020' },
  ],
};

export default AcademicCalendar;
