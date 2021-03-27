import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import WcIcon from '@material-ui/icons/Wc';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Alert, AlertTitle } from '@material-ui/lab';

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <Typography variant="h6">Admin Dashboard</Typography>
      {/* Count Cards */}
      <Grid container spacing={3} className="u_mt_tiny">
        {countConst.map((item, index) => {
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

export default AdminDashboard;

const countConst = [
  {
    text: 'Students',
    count: 100,
    icon: <LocalLibraryIcon fontSize="inherit" color="inherit" />,
    css: 'admin-dasboard-rounded-icon icon-green',
  },
  {
    text: 'Parents',
    count: 100,
    icon: <WcIcon fontSize="inherit" color="inherit" />,
    css: 'admin-dasboard-rounded-icon icon-blue',
  },
  {
    text: 'Teachers',
    count: 100,
    icon: <PeopleIcon fontSize="inherit" color="inherit" />,
    css: 'admin-dasboard-rounded-icon icon-orange',
  },
  {
    text: 'Classes',
    count: 100,
    icon: <MenuBookIcon fontSize="inherit" color="inherit" />,
    css: 'admin-dasboard-rounded-icon icon-red',
  },
];
