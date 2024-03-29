import React, { useEffect, useState } from 'react';
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
import SearchValidatedInput from '../../../common/inputs/SearchableInputValidated';
import { Autocomplete } from '@material-ui/lab';
import http from '../../../../services/httpService';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  textField: {},
}));

const AddStudentForm = () => {
  // State variables
  const [parentsList, setParentsList] = useState([]);
  const [classesList, setClassesList] = useState([]);
  const [sessionList, setSessionList] = useState([]);

  // On rendering
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await http.get('/parents/getParentsList');
        setParentsList(response.data);
        response = await http.get('/classes/getClassesList');
        setClassesList(response.data);
        response = await http.get('/session/getSessionsList');
        setSessionList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      rollNumber: '',
      password: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      parentCnic: '',
      classId: '',
      sessionId: '',
      enrollmentDate: '',
    },
    validationSchema: Yup.object({
      rollNumber: Yup.string().required('Roll Number is required!'),
      password: Yup.string().required('Password is required!'),
      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
      birthDate: Yup.string().required('Date of Birth is required!'),
      parentCnic: Yup.string().required('Parent CNIC is required!'),
      classId: Yup.string().required('Class ID is required!'),
      sessionId: Yup.string().required('Session ID is required!'),
      enrollmentDate: Yup.string().required('Enrollment Date is required!'),
    }).nullable(),
    onSubmit: async (values) => {
      // add register model data
      const aspNetUser = {
        username: values.rollNumber,
        password: values.password,
        role: 'Student',
      };
      // add student data
      const student = {
        firstName: values.firstName,
        lastName: values.lastName,
        rollNo: values.rollNumber,
        dob: values.birthDate,
        parentId: values.parentCnic.id,
        classId: values.classId.id,
        isActive: true,
        sessionId: values.sessionId.id,
      };

      const model = {
        student,
        aspNetUser,
      };

      try {
        console.log(model);
        await http.post('/account/registerStudent', model);
        history.replace('/students');
      } catch (error) {
        console.log(error);
        alert('Something went wrong while sending the data...');
      }
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
                <SearchValidatedInput
                  formik={formik}
                  display="cnic"
                  id="parentCnic"
                  label="Parent CNIC"
                  options={parentsList}
                  avatar={true}
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Admission Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="rollNumber"
                  fullWidth
                  disabled
                  variant="outlined"
                  label="Roll Number"
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
                <SearchClassField
                  formik={formik}
                  display="className"
                  id="classId"
                  label="Class"
                  options={classesList}
                />
              </Grid>
              <Grid item md={6}>
                <SearchSessionField
                  formik={formik}
                  display="sessionYear"
                  id="sessionId"
                  label="Session"
                  options={sessionList}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="enrollmentDate"
                  fullWidth
                  variant="outlined"
                  label="Date of Enrollment"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formik.values.enrollmentDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.enrollmentDate
                      ? formik.errors.enrollmentDate
                      : ''
                  }
                  error={
                    formik.touched.enrollmentDate &&
                    Boolean(formik.errors.enrollmentDate)
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

const SearchClassField = ({ formik, id, label, options, display }) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
      }}
      getOptionLabel={(option) => option[display]}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          {`${option.className} (${option.section})`}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          id={id}
          fullWidth
          variant="outlined"
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};

const SearchSessionField = ({ formik, id, label, options, display }) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
      }}
      getOptionLabel={(option) => option[display]}
      renderOption={(option, { selected }) => (
        <React.Fragment>{`${option.sessionYear}`}</React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          id={id}
          fullWidth
          variant="outlined"
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};
