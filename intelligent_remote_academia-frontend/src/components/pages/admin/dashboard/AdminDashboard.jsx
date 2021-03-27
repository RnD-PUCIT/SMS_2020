import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import WcIcon from '@material-ui/icons/Wc';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PeopleIcon from '@material-ui/icons/People';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles({
  paper: {
    padding: '30px 15px',
  },
});

const AdminDashboard = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6">Admin Dashboard</Typography>
      {/* Count Cards */}
      <Grid container spacing={3}>
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

      <ul>
        <li>
          <Link to="add-parent">Add Parent</Link>
        </li>
      </ul>
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
