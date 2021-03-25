import React from 'react';
import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ParentForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      cnic: '',
      address: '',
      contactPrimary: '',
      contactSecondary: '',
      occupation: '',
      jobAdress: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required!'),
      lastName: Yup.string().required('Last Name is required!'),
      email: Yup.string().required('Email is required!'),
      cnic: Yup.string().required('CNIC is required!'),
      address: Yup.string().required('Address is required!'),
      contactPrimary: Yup.string().required('Primary Contact is required!'),
      occupation: Yup.string().required('Occupation is required!'),
      jobAddress: Yup.string().required('Job Address is required!'),
    }),
    onSubmit: async (values) => {},
  });

  return (
    <React.Fragment>
      <Typography variant="h4">Add New Parent Data</Typography>
      <Paper className="u_mt_small">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6">Personal Information</Typography>
          </Toolbar>
        </AppBar>
        <form onSubmit={formik.handleSubmit}></form>
      </Paper>
    </React.Fragment>
  );
};

export default ParentForm;
