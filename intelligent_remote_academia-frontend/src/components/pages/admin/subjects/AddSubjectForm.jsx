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
import http from '../../../../services/httpService';

const AddSubjectForm = () => {
  const formik = useFormik({
    initialValues: {
      subjectName: '',
      subjectCode: '',
      subjectSlug: '',
    },
    validationSchema: Yup.object({
      subjectName: Yup.string().required('Class Name is required!'),
      subjectCode: Yup.string().required('Subject Code is required!'),
      subjectSlug: Yup.string().required('Subject Slug is required!'),
    }),
    onSubmit: async (values) => {
      const model = {
        subjectName: values.subjectName,
        subjectCode: values.subjectCode,
        subjectSlug: values.subjectSlug,
      };

      try {
        console.log(model);
        http.post('/subjects/createSubject', model);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <React.Fragment>
      <h1>Add Subject Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <Paper className="u_mt_small">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6">Subject Information</Typography>
            </Toolbar>
          </AppBar>
          <div className="paper_padding--sm">
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  id="subjectName"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  label="Subject Name"
                  value={formik.values.subjectName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.subjectName ? formik.errors.subjectName : ''
                  }
                  error={
                    formik.touched.subjectName &&
                    Boolean(formik.errors.subjectName)
                  }
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  id="subjectCode"
                  fullWidth
                  variant="outlined"
                  label="Subject Code"
                  value={formik.values.subjectCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.subjectCode ? formik.errors.subjectCode : ''
                  }
                  error={
                    formik.touched.subjectCode &&
                    Boolean(formik.errors.subjectCode)
                  }
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="subjectSlug"
                  fullWidth
                  variant="outlined"
                  label="Subject Slug"
                  value={formik.values.subjectSlug}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.subjectSlug ? formik.errors.subjectSlug : ''
                  }
                  error={
                    formik.touched.subjectSlug &&
                    Boolean(formik.errors.subjectSlug)
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

export default AddSubjectForm;
