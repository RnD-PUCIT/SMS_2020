import { Button, Divider, Paper, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import AdminStore from "../../../store/admin/AdminStore";

const StudentsFeed = () => {
  const adminStore = useContext(AdminStore);
  const studentsList = [...adminStore.studentsList];

  const history = useHistory();

  useEffect(() => {
    adminStore.loadStudents();
  }, [adminStore]);
  return (
    <React.Fragment>
      <Typography variant="h6">Students Feed</Typography>
      <Paper className="paper_padding--sm u_mt_small">
        <Typography variant="h5">Admin Options</Typography>
        <Divider className="u_mtb_tiny" />
        <Button
          style={{ marginRight: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/students/add");
          }}
        >
          Add Student
        </Button>
      </Paper>

      {studentsList && (
        <Paper className="paper_padding--sm u_mt_small">
          <DataTable
            title="All Students Data"
            columns={columns}
            data={studentsList}
            pagination
            paginationPerPage={4}
            paginationRowsPerPageOptions={[4]}
            paginationTotalRows={studentsList.length}
          />
        </Paper>
      )}
    </React.Fragment>
  );
};

export default observer(StudentsFeed);

const columns = [
  {
    name: "First Name",
    selector: "firstName",
    sortable: true,
  },
  {
    name: "Last Name",
    selector: "lastName",
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: "dob",
    sortable: true,
  },
  {
    name: "Enrollment Date",
    selector: "enrollmentDate",
    sortable: true,
  },
];
