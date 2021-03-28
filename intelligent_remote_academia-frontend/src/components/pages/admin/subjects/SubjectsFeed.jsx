import { Button, Divider, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';
import AdminStore from '../../../store/admin/AdminStore';

const SubjectsFeed = () => {
  const adminStore = useContext(AdminStore);
  const studentsList = [...adminStore.studentsList];

  const history = useHistory();

  useEffect(() => {
    adminStore.loadStudents();
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6">Subjects Feed</Typography>
      <Paper className="paper_padding--sm u_mt_small">
        <Typography variant="h5">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/subjects/add');
          }}
        >
          Add Subject
        </Button>
      </Paper>
    </React.Fragment>
  );
};

export default SubjectsFeed;
