import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

import http from '../../../services/httpService';
import SearchInput from '../../common/inputs/searchInput';
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
    const { studentId, classId, sessionId } = this.props;

    const url =
      '/announcements?studentid=' +
      studentId +
      '&classid=' +
      classId +
      '&sessionid=' +
      sessionId;
    const { data } = await http.get(`${url}`);
    console.log(data);

    const { ins, classs, stdnt } = data;
    console.log(ins);

    this.setState({
      instituteAnnouncements: ins,
      classAnnouncements: classs,
      studentAnnouncements: stdnt,
    });
  }

  render() {
    //event for handling changing tabs
    const handleChange = (event, newValue) => {
      this.setState({ selectedTab: newValue });
    };

    // //event for handling searchResults
    // const handleSearchChange = (e, value) => {
    //   setFilter(e.target.value);
    //   value && setFilter(value);
    // };

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
        {/* <SearchInput
          data={data}
          label={'Search announcements by subject'}
          onSearchChange={handleSearchChange}
        /> */}
        {/* {this.state.selectedTab === 0 && (
          <AnnouncementContent
            announcements={this.state.instituteAnnouncements}
            // filter={filter}
          />
        )}
        {this.state.selectedTab === 1 && (
          <AnnouncementContent
            announcements={this.state.classAnnouncements}
            // filter={filter}
          />
        )}
        {this.state.selectedTab === 2 && (
          <AnnouncementContent
            announcements={this.state.studentAnnouncements}
            // filter={filter}
          />
        )} */}
      </React.Fragment>
    );
  }
}

// const Announcements = () => {
//   const [selectedTab, setSelectedTab] = React.useState(0);
//   const [filter, setFilter] = React.useState('');

//   //event for handling changing tabs
//   const handleChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   //event for handling searchResults
//   const handleSearchChange = (e, value) => {
//     setFilter(e.target.value);
//     value && setFilter(value);
//   };

//   //title of all announcement objects
//   const {
//     instituteAnnouncements,
//     classAnnouncements,
//     studentAnnouncements,
//   } = Announcement;

//   let data = [
//     ...instituteAnnouncements,
//     ...classAnnouncements,
//     ...studentAnnouncements,
//   ];
//   data = data.map((item) => item.title);

//   return (
//     <React.Fragment>
//       <Tabs
//         value={selectedTab}
//         onChange={handleChange}
//         centered
//         style={{ margin: '30px 0 40px 0' }}
//         indicatorColor='primary'
//         textColor='primary'>
//         {announcementTabs.map((tab) => {
//           return <Tab key={tab.id} label={tab.name} />;
//         })}
//       </Tabs>
//       <SearchInput
//         data={data}
//         label={'Search announcements by subject'}
//         onSearchChange={handleSearchChange}
//       />
//       {selectedTab === 0 && (
//         <AnnouncementContent
//           announcements={Announcement.instituteAnnouncements}
//           filter={filter}
//         />
//       )}
//       {selectedTab === 1 && (
//         <AnnouncementContent
//           announcements={Announcement.classAnnouncements}
//           filter={filter}
//         />
//       )}
//       {selectedTab === 2 && (
//         <AnnouncementContent
//           announcements={Announcement.studentAnnouncements}
//           filter={filter}
//         />
//       )}
//     </React.Fragment>
//   );
// };

const AnnouncementContent = ({ announcements, filter }) => {
  const filteredAnnouncements = announcements.filter((item) =>
    item.title.includes(filter)
  );
  const months = getMonths();
  const classes = useStyles();
  if (announcements.length)
    return (
      <React.Fragment>
        {filteredAnnouncements.map((announcement) => {
          const date = new Date(announcement.date);
          return (
            <Paper className={classes.paper}>
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
                <Typography>{announcement.title}</Typography>
                <hr />
                {announcement.description}
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

// const Announcement = {
//   instituteAnnouncements: [
//     {
//       title: 'Summer Holidays',
//       description: 'Summer Holidays will start from tomorrow',
//       date: '10/1/2020',
//     },
//     {
//       title: 'Timing Change',
//       description: 'Timings of Classes from 1 to 10 have been changed',
//       date: '10/2/2020',
//     },
//     {
//       title: 'Exams Schedule',
//       description: 'Exams will be scheduled from Monday at 8am',
//       date: '10/3/2020',
//     },
//     {
//       title: 'Winter Holidays',
//       description: 'Winter Holidays will start from tomorrow',
//       date: '10/4/2020',
//     },
//     {
//       title: 'Test Session',
//       description: 'Test session of all classes will start from next week',
//       date: '10/5/2020',
//     },
//   ],

//   classAnnouncements: [
//     {
//       title: 'Makeup Classes',
//       description: 'Makeup Class of Physics will be held on Tuesday',
//       date: '10/1/2020',
//     },
//     {
//       title: 'Maths Class Timing Change',
//       description: 'Timings of Math Class has been changed from 9am to 10am',
//       date: '10/2/2020',
//     },
//     {
//       title: 'MidTerm Examinations',
//       description: 'MidTerm Exams will be scheduled from Monday at 8am',
//       date: '10/3/2020',
//     },
//     {
//       title: 'No Class of Chemistry',
//       description: 'There will be no class of chemistry tomorrow',
//       date: '10/5/2020',
//     },
//   ],
//   studentAnnouncements: [
//     {
//       title: 'Fee Submission',
//       description: 'Kindly submit your fees before due date',
//       date: '10/1/2020',
//     },
//     {
//       title: 'Attendance',
//       description: 'You have been absent from school for 2 days',
//       date: '10/2/2020',
//     },
//     {
//       title: 'Application Submission',
//       description: 'Your application for sick leave has been submitted',
//       date: '10/3/2020',
//     },
//     {
//       title: 'Late Comer',
//       description:
//         'Kindly be punctual otherwise you will not be permitted to enter in the class',
//       date: '10/4/2020',
//     },
//     {
//       title: 'Warning for bad Behaviour in class',
//       description: 'This your first warning for behaving bad in the class ',
//       date: '10/5/2020',
//     },
//   ],
// };

export default Announcements;
