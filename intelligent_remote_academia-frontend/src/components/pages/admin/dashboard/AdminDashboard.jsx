import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import WcIcon from '@material-ui/icons/Wc';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Alert, AlertTitle } from '@material-ui/lab';
import AdminStore from '../../../store/admin/AdminStore';
import { observer } from 'mobx-react';

const AdminDashboard = () => {
  const adminStore = useContext(AdminStore);
  const [count, setCount] = useState([]);

  useEffect(() => {
    adminStore.loadParents();
    adminStore.loadClasses();
    adminStore.loadStudents();
    adminStore.loadTeachers();

    const countConst = [
      {
        text: 'Students',
        count: adminStore.studentsList.length,
        icon: <LocalLibraryIcon fontSize="inherit" color="inherit" />,
        css: 'admin-dasboard-rounded-icon icon-green',
      },
      {
        text: 'Parents',
        count: adminStore.parentsList.length,
        icon: <WcIcon fontSize="inherit" color="inherit" />,
        css: 'admin-dasboard-rounded-icon icon-blue',
      },
      {
        text: 'Teachers',
        count: adminStore.teachersList.length,
        icon: <PeopleIcon fontSize="inherit" color="inherit" />,
        css: 'admin-dasboard-rounded-icon icon-orange',
      },
      {
        text: 'Classes',
        count: adminStore.classesList.length,
        icon: <MenuBookIcon fontSize="inherit" color="inherit" />,
        css: 'admin-dasboard-rounded-icon icon-red',
      },
    ];

    setCount(countConst);
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6">Admin Dashboard</Typography>
      {/* Count Cards */}
      <Grid container spacing={3} className="u_mt_tiny">
        {count.map((item, index) => {
          return (
            <Grid item md={3} xs={6}>
              <Paper style={{ padding: '22px 28px' }}>
                <Grid container>
                  <Grid item xs={4}>
                    <div className={item.css}>{item.icon}</div>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      align="right"
                    >
                      {item.text}
                    </Typography>
                    <Typography variant="h4" align="right">
                      {item.count}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {/* Event Calendar and Announcements */}
      <Grid container spacing={3}>
        <Grid item md={7}>
          <Paper className="paper_padding--sm u_mt_tiny">
            <Typography variant="h6">Event Calendar</Typography>
            <Divider className="u_mtb_tiny" />
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
            />
          </Paper>
        </Grid>
        <Grid item md={5}>
          <Paper className="paper_padding--sm u_mt_tiny">
            <Typography variant="h6">Announcements</Typography>
            <Divider className="u_mtb_tiny" />
            <Alert severity="info">
              <AlertTitle>Emtpy Announcements</AlertTitle>
              Looks like no announcments are made yet.
            </Alert>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default observer(AdminDashboard);
