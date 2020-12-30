import React from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import useStyles from "../../../styles/applicationFornStyle";

const ApplicationForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.root}>
        <Typography variant="h5" align="center">
          Application Form
        </Typography>

        <Divider style={{ margin: "15px 0" }} />

        <Grid container spacing={1} style={{ marginTop: "15px" }}>
          <Grid item md={8}>
            <form>
              <TextField
                variant="outlined"
                label="Subject"
                placeholder="Enter your subject here"
                fullWidth
              />
              <TextField
                variant="outlined"
                label="Application"
                placeholder="Enter your application here"
                rows={20}
                multiline
                fullWidth
                style={{ marginTop: "10px" }}
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Submit Application
              </Button>
            </form>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6" align="center">
              Upload additional files here
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default ApplicationForm;
