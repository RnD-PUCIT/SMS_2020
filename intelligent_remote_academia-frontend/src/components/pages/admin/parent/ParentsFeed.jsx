import { Button, Divider, Paper, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';
import AdminStore from '../../../store/admin/AdminStore';

const ParentsFeed = () => {
  const adminStore = useContext(AdminStore);
  const parentsList = [...adminStore.parentsList];

  const history = useHistory();

  useEffect(() => {
    adminStore.loadParents();
  }, []);
  return (
    <React.Fragment>
      <Typography variant="h6">Parents Feed</Typography>
      <Paper className="paper_padding--sm u_mt_small">
        <Typography variant="h5">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push('/parents/add');
          }}
        >
          Add Parent
        </Button>
      </Paper>

      {parentsList && (
        <Paper className="paper_padding--sm u_mt_small">
          <DataTable
            title="All Parents Data"
            columns={columns}
            data={parentsList}
            pagination
            paginationPerPage={4}
            paginationRowsPerPageOptions={[4]}
            paginationTotalRows={parentsList.length}
          />
        </Paper>
      )}
    </React.Fragment>
  );
};

export default observer(ParentsFeed);

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
    name: 'Occupation',
    selector: 'occupation',
    sortable: true,
  },
];
