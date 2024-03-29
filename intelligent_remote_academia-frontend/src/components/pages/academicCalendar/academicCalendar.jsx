import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core';
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
  Button,
} from '@material-ui/core';
import ReactToPrint from 'react-to-print';

import AlertDescriptive from '../../common/alerts/alertDescriptive';
import { getMonths } from '../../constants/calendarConsts';
import http from '../../../services/httpService';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '30px',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
  row: {
    backgroundColor: theme.palette.info.light,
  },
}));

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
        <CalendarBody
          sessionId={this.props.sessionId}
          selectedStudent={this.props.selectedStudent}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    );
  }
}

class CalendarBody extends Component {
  state = { academicCalendar: [], error: false };

  async componentDidMount() {
    this.getCalendarEvents();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.selectedStudent.id !== prevProps.selectedStudent.id) {
      this.getCalendarEvents();
    }
  }

  render() {
    if (this.state.error) {
      return (
        <AlertDescriptive
          severity='error'
          title='No Academic Calender'
          description='No Academic Calendar has been uploaded yet. Kindly check later!'
        />
      );
    } else return <Schedule academicCalendar={this.state.academicCalendar} />;
  }

  getCalendarEvents = async () => {
    const { sessionId } = this.props;
    const url = '/academiccalender?session_id=' + sessionId;
    try {
      const { data: academicCalendar } = await http.get(`${url}`);
      this.setState({ academicCalendar, error: false });
    } catch (ex) {
      if (ex && ex.response.status === 400) {
        this.setState({ error: true });
      }
    }
  };
}

const Schedule = ({ academicCalendar }) => {
  const tableHead = ['Sr. #', 'Event', 'Date'];
  const months = getMonths();
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
                    const date = new Date(occasion.date);

                    let { event: eventName } = occasion;
                    eventName = eventName.toLowerCase();
                    const ifExam =
                      eventName.includes('exam') || eventName.includes('paper');
                    return (
                      <TableRow
                        key={index}
                        className={`${ifExam ? classes.row : ''}`}>
                        <TableCell component='th' scope='row'>
                          {++index}
                        </TableCell>
                        <TableCell>
                          <strong>{occasion.event}</strong>
                        </TableCell>
                        <TableCell>
                          {months[date.getMonth()].name +
                            ' ' +
                            date.getDate() +
                            ', ' +
                            date.getFullYear()}
                        </TableCell>
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

export default AcademicCalendar;
