import { Paper, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';

const ParentForm = () => {
  //   const formik = useFormik;

  return (
    <React.Fragment>
      <Typography variant="h4">Add New Parent Data</Typography>
      <Paper className="u_mt_small"></Paper>
    </React.Fragment>
  );
};

export default ParentForm;
