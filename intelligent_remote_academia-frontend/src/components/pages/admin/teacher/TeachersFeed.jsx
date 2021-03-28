import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link, useHistory } from 'react-router-dom';
import AdminStore from '../../../store/admin/AdminStore';

const TeachersFeed = () => {
  const adminStore = useContext(AdminStore);
  const teachersList = [...adminStore.teachersList];

  const history = useHistory();

  useEffect(() => {
    adminStore.loadTeachers();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6">Teachers Feed</Typography>
      <Paper className="paper_padding--sm u_mt_small">
        <Typography variant="h5">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/teachers/add');
          }}
        >
          Add Teacher
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/teachers/class-allocate');
          }}
        >
          Allocate Class
        </Button>
      </Paper>

      <Grid container spacing={3} className="u_mt_small">
        <Grid item md={12}>
          {teachersList && (
            <Paper className="paper_padding--sm">
              <DataTable
                title="All Teachers Data"
                columns={columns}
                data={teachersList}
                pagination
                paginationPerPage={4}
                paginationRowsPerPageOptions={[4]}
                paginationTotalRows={teachersList.length}
              />
            </Paper>
          )}
        </Grid>
        <Grid item md={3}></Grid>
      </Grid>
    </React.Fragment>
  );
};

export default observer(TeachersFeed);

const columns = [
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'lastName',
    sortable: true,
  },
  {
    name: 'CNIC',
    selector: 'cnic',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Contact #',
    selector: 'contactPrimary',
    sortable: true,
  },
  {
    name: 'Specialization',
    selector: 'specialization',
    sortable: true,
  },
];
