import React from 'react';
import {
  AppBar,
  Fab,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  textField: {},
}));

const AddTeacherForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      cnic: '',
      address: '',
      contactPrimary: '',
      contactSecondary: '',
      specialization: '',
      joiningDate: '',
      salary: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
      email: Yup.string().required('Email is required!'),
      cnic: Yup.string().required('CNIC is required!'),
      address: Yup.string().required('Address is required!'),
      contactPrimary: Yup.string().required('Primary Contact is required!'),
      specialization: Yup.string().required('Specialization is required!'),
      joiningDate: Yup.string().required('Job Address is required!'),
      salary: Yup.string().required('Salary is required!'),
      username: Yup.string().required('Username is required!'),
    }),
    onSubmit: async (values) => {
      alert('clicked');
      console.log(values);
    },
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4">Add New Teacher Data</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Account Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="username"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  label="Username"
                  className={classes.textField}
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.username ? formik.errors.username : ''
                  }
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="password"
                  fullWidth
                  variant="outlined"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.password ? formik.errors.password : ''
                  }
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Personal Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="firstName"
                  fullWidth
                  variant="outlined"
                  label="First Name"
                  className={classes.textField}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.firstName ? formik.errors.firstName : ''
                  }
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="lastName"
                  fullWidth
                  variant="outlined"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.lastName ? formik.errors.lastName : ''
                  }
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="email"
                  fullWidth
                  variant="outlined"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.email ? formik.errors.email : ''}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="cnic"
                  fullWidth
                  variant="outlined"
                  label="CNIC"
                  disabled
                  value={formik.values.cnic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.cnic ? formik.errors.cnic : ''}
                  error={formik.touched.cnic && Boolean(formik.errors.cnic)}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="address"
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  label="Home Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.address ? formik.errors.address : ''
                  }
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="contactPrimary"
                  fullWidth
                  variant="outlined"
                  label="Contact Primary"
                  value={formik.values.contactPrimary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.contactPrimary
                      ? formik.errors.contactPrimary
                      : ''
                  }
                  error={
                    formik.touched.contactPrimary &&
                    Boolean(formik.errors.contactPrimary)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="contactSecondary"
                  fullWidth
                  variant="outlined"
                  label="Contact Secondary (Optional)"
                  value={formik.values.contactSecondary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.contactSecondary
                      ? formik.errors.contactSecondary
                      : ''
                  }
                  error={
                    formik.touched.contactSecondary &&
                    Boolean(formik.errors.contactSecondary)
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">specialization Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField
                  id="specialization"
                  fullWidth
                  variant="outlined"
                  label="specialization"
                  className={classes.textField}
                  value={formik.values.specialization}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.specialization
                      ? formik.errors.specialization
                      : ''
                  }
                  error={
                    formik.touched.specialization &&
                    Boolean(formik.errors.specialization)
                  }
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="joiningDate"
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  label="Job Address"
                  value={formik.values.joiningDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.joiningDate ? formik.errors.joiningDate : ''
                  }
                  error={
                    formik.touched.joiningDate &&
                    Boolean(formik.errors.joiningDate)
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <div className="action-button">
          <Fab color="secondary" aria-label="add" type="submit">
            <AddIcon />
          </Fab>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddTeacherForm;
