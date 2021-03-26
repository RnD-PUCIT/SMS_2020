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

const AddStudentForm = () => {
  const formik = useFormik({
    initialValues: {
      rollNumber: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      parentCnic: '',
    },
    validationSchema: Yup.object({
      rollNumber: Yup.string().required('Roll Number is required!'),
      password: Yup.string().required('Password is required!'),
      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
      birthDate: Yup.string().required('Date of Birth is required!'),
      parentCnic: Yup.string().required('Parent CNIC is required!'),
    }),
    onSubmit: async (values) => {
      alert('clicked');
      console.log(values);
    },
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h4">Add New Student Data</Typography>
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
                  id="rollNumber"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  label="Username"
                  className={classes.textField}
                  value={formik.values.rollNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.rollNumber ? formik.errors.rollNumber : ''
                  }
                  error={
                    formik.touched.rollNumber &&
                    Boolean(formik.errors.rollNumber)
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
                  id="birthDate"
                  fullWidth
                  variant="outlined"
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.birthDate ? formik.errors.birthDate : ''
                  }
                  error={
                    formik.touched.birthDate && Boolean(formik.errors.birthDate)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="parentCnic"
                  fullWidth
                  variant="outlined"
                  label="Parent CNIC"
                  disabled
                  value={formik.values.parentCnic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.parentCnic ? formik.errors.parentCnic : ''
                  }
                  error={
                    formik.touched.parentCnic &&
                    Boolean(formik.errors.parentCnic)
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Occupation Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={12}>
                <TextField
                  id="occupation"
                  fullWidth
                  variant="outlined"
                  label="Occupation"
                  className={classes.textField}
                  value={formik.values.occupation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.occupation ? formik.errors.occupation : ''
                  }
                  error={
                    formik.touched.occupation &&
                    Boolean(formik.errors.occupation)
                  }
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="jobparentCnic"
                  multiline
                  fullWidth
                  rows={3}
                  variant="outlined"
                  label="Job parentCnic"
                  value={formik.values.jobparentCnic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.jobparentCnic
                      ? formik.errors.jobparentCnic
                      : ''
                  }
                  error={
                    formik.touched.jobparentCnic &&
                    Boolean(formik.errors.jobparentCnic)
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

export default AddStudentForm;
