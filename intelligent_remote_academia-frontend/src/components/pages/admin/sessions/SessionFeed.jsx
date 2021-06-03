import React from "react";
import { useHistory } from "react-router";
import {
  Button,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import PageHeading from "../../../common/PageHeading";

const SessionFeed = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <PageHeading title="Sessions Feed" />
      <Paper className={`shadow ${classes.container}`}>
        <Typography variant="h6">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push("/sessions/add")}
        >
          Add Session
        </Button>
      </Paper>
    </React.Fragment>
  );
};

export default SessionFeed;

const useStyles = makeStyles({
  container: {
    padding: 20,
  },
});
