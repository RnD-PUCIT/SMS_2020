import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AddIcon from '@material-ui/icons/Add';
import {
  AppBar,
  Fab,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AddClassForm = () => {
  const formik = useFormik({
    initialValues: {
      className: '',
      section: '',
    },
    validationSchema: Yup.object({
      className: Yup.string().required('Class Name is required!'),
      section: Yup.string().required('Section is required!'),
    }),
    onSubmit: async (values) => {
      alert('clicked');
      console.log(values);
    },
  });
  return (
    <React.Fragment>
      <h1>Add Subject Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Class Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm form-colored-inputs">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="className"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  label="Class Name"
                  value={formik.values.className}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.className ? formik.errors.className : ''
                  }
                  error={
                    formik.touched.className && Boolean(formik.errors.className)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="section"
                  fullWidth
                  variant="outlined"
                  label="Section"
                  value={formik.values.section}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.section ? formik.errors.section : ''
                  }
                  error={
                    formik.touched.section && Boolean(formik.errors.section)
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

export default AddClassForm;
