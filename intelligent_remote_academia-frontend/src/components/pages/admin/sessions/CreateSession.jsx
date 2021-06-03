import React from "react";
import {
  Box,
  Button,
  Divider,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

import PageHeading from "../../../common/PageHeading";
import http from "../../../../services/httpService";
import { useHistory } from "react-router";

const CreateSession = () => {
  const classes = useStyles();
  const history = useHistory();

  const validationSchema = Yup.object({
    startYear: Yup.string().required("Start Year is required"),
    endYear: Yup.string().required("End Year is required"),
  }).nullable();

  const formik = useFormik({
    initialValues: {
      startYear: "",
      endYear: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { startYear, endYear } = values;

      const model = {
        sessionYear: `${startYear}-${endYear}`,
      };

      try {
        await http.post("/session", model);
        alert("Session data added");

        history.replace("/sessions");
      } catch (ex) {
        alert("Error saving session data");
        console.log(ex);
      }
    },
  });

  return (
    <React.Fragment>
      <PageHeading title="Add Session Data" />
      <Paper className={`shadow ${classes.container}`}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="startYear"
            fullWidth
            variant="outlined"
            label="Start Year"
            value={formik.values.startYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.startYear ? formik.errors.startYear : ""}
            error={formik.touched.startYear && Boolean(formik.errors.startYear)}
          />
          <TextField
            id="endYear"
            fullWidth
            className="u_mt_small"
            variant="outlined"
            label="End Year"
            value={formik.values.endYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.endYear ? formik.errors.endYear : ""}
            error={formik.touched.endYear && Boolean(formik.errors.endYear)}
          />
          <Box display="flex" justifyContent="flex-end" flexDirection="column">
            <Divider className="u_mtb_small" />
            <Button color="primary" variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Paper>
    </React.Fragment>
  );
};

export default CreateSession;

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
});
