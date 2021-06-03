import React from "react";
import { makeStyles, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import PageHeading from "../../../common/PageHeading";

const CreateSession = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {},
  });

  return (
    <React.Fragment>
      <PageHeading title="Add Session Data" />
      <Paper className={`shadow ${classes.container}`}></Paper>
    </React.Fragment>
  );
};

export default CreateSession;

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
});
