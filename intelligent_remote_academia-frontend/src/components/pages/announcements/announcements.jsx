import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

import http from '../../../services/httpService';
import { announcementTabs } from '../../constants/tabsConsts';
import { getMonths } from '../../constants/calendarConsts';
import AlertDescriptive from '../../common/alerts/alertDescriptive';

const useStyles = makeStyles({
  paper: {
    marginTop: '30px',
  },
  paperBody: {
    padding: '20px 30px',
  },
  toolbar: {
    backgroundColor: '#2875c7',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
    color: 'white',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    paddingLeft: '10px',
  },
});

class Announcements extends Component {
  state = {
    selectedTab: 0,
    filter: '',
    instituteAnnouncements: null,
    classAnnouncements: null,
    studentAnnouncements: null,
  };

  async componentDidMount() {
    this.getAnnouncements();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.studentId !== prevProps.studentId) {
      this.getAnnouncements();
    }
  }

  render() {
    //event for handling changing tabs
    const handleChange = (event, newValue) => {
      this.setState({ selectedTab: newValue });
    };

    return (
      <React.Fragment>
        <Tabs
          value={this.state.selectedTab}
          onChange={handleChange}
          centered
          style={{ margin: '30px 0 40px 0' }}
          indicatorColor='primary'
          textColor='primary'>
          {announcementTabs.map((tab) => {
            return <Tab key={tab.id} label={tab.name} />;
          })}
        </Tabs>
        {this.state.selectedTab === 0 && (
          <AnnouncementContent
            announcements={this.state.instituteAnnouncements}
          />
        )}
        {this.state.selectedTab === 1 && (
          <AnnouncementContent announcements={this.state.classAnnouncements} />
        )}
        {this.state.selectedTab === 2 && (
          <AnnouncementContent
            announcements={this.state.studentAnnouncements}
          />
        )}
      </React.Fragment>
    );
  }
  getAnnouncements = async () => {
    const { studentId, classId, sessionId } = this.props;
    const url =
      '/announcements?studentid=' +
      studentId +
      '&classid=' +
      classId +
      '&sessionid=' +
      sessionId;
    const { data } = await http.get(`${url}`);
    const { ins, classs, stdnt } = data;

    this.setState({
      instituteAnnouncements: ins,
      classAnnouncements: classs,
      studentAnnouncements: stdnt,
    });
  };
}

const AnnouncementContent = ({ announcements }) => {
  const months = getMonths();
  const classes = useStyles();
  if (announcements && announcements.length > 0)
    return (
      <React.Fragment>
        {announcements.map((item) => {
          const date = new Date(item.date);
          return (
            <Paper className={classes.paper} key={item.guid}>
              {/* Toolbar Starts */}
              <div className={classes.toolbar} variant='dense'>
                <FontAwesomeIcon icon={faBullhorn} size='2x' />
                <Typography variant='h5' className={classes.content}>
                  {months[date.getMonth()].name +
                    ' ' +
                    date.getDate() +
                    ', ' +
                    date.getFullYear()}
                </Typography>
              </div>
              {/* Toolbar Ends */}

              <div className={classes.paperBody}>
                <Typography>{item.title}</Typography>
                <hr />
                {item.announcment}
              </div>
            </Paper>
          );
        })}
      </React.Fragment>
    );
  return (
    <AlertDescriptive
      severity='error'
      title='No Announcement Content Found'
      description='No Announcement is added till now.'
    />
  );
};

export default Announcements;
