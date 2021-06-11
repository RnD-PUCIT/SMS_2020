import { Button, Divider, Paper, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminStore from "../../../store/admin/AdminStore";

const ClassesFeed = () => {
  const adminStore = useContext(AdminStore);

  const history = useHistory();

  useEffect(() => {
    adminStore.loadStudents();
  }, [adminStore]);

  return (
    <React.Fragment>
      <Typography variant="h6">Classes Feed</Typography>
      <Paper className="paper_padding--sm u_mt_small">
        <Typography variant="h5">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/classes/add");
          }}
        >
          Add Class
        </Button>
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/classes/subject-allocate");
          }}
        >
          Allocate Subjects
        </Button>
      </Paper>
    </React.Fragment>
  );
};

export default ClassesFeed;
