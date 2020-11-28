import React, { Component, useRef } from "react";
import { Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import ReactToPrint from "react-to-print";

import useStyles from "../../../styles/feeChallanStyle";
import TableSimple from "../../common/tables/tableSimple";

class FeeChallan extends Component {
  state = {
    challan: challanConst,
  };
  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" align="center">
          Fee Challan Form
        </Typography>
        <div>
          <ReactToPrint
            trigger={() => {
              return (
                <Button variant="contained" color="primary">
                  Print Challan
                </Button>
              );
            }}
            content={() => this.componentRef}
          />
          <Form
            ref={(el) => (this.componentRef = el)}
            challan={this.state.challan}
          />
        </div>
      </React.Fragment>
    );
  }
}

class Form extends Component {
  render() {
    return <ChallanForm challan={this.props.challan} />;
  }
}

const ChallanForm = ({ challan }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
          <ChallanHeader challan={challan} />
          <Divider className={classes.divider} />
          <StudentInfo challan={challan} />
          <Divider className={classes.divider} />
          <Dues challan={challan} />
        </Paper>
      </div>
    </React.Fragment>
  );
};

const ChallanHeader = ({ challan }) => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={6}>
          <Typography color="textSecondary">
            <table width="100%">
              <tbody>
                <tr>
                  <th>Challan #</th>
                  <td>{challan.challanNo}</td>
                </tr>
                <tr>
                  <th>Issue Date:</th>
                  <td>{challan.issueDate}</td>
                </tr>
                <tr>
                  <th>Billing Month:</th>
                  <td>{challan.billingMonth}</td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography color="textSecondary">
            <table width="100%">
              <tbody>
                <tr>
                  <th>Due Date</th>
                  <td>{challan.dueDate}</td>
                </tr>
              </tbody>
            </table>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const StudentInfo = ({ challan }) => {
  const { student } = challan;
  return (
    <React.Fragment>
      <Typography color="textSecondary">
        <table>
          <tbody>
            <tr>
              <th>Student Name:</th>
              <td>{student.firstName + " " + student.lastName}</td>
            </tr>
            <tr>
              <th>Roll #</th>
              <td>{student.rollNo}</td>
            </tr>
            <tr>
              <th>Class:</th>
              <td>{student.className}</td>
            </tr>
            <tr>
              <th>Section:</th>
              <td>{student.section}</td>
            </tr>
          </tbody>
        </table>
      </Typography>
    </React.Fragment>
  );
};

const Dues = ({ challan }) => {
  const { dues } = challan;

  // Calculate Total Fee
  let totalAmount = 0;
  for (let i = 0; i < dues.length; i++) {
    totalAmount += dues[i].amount;
  }

  const tableHead = ["Sr. #", "Description", "Amount"];
  return (
    <React.Fragment>
      <Typography color="textSecondary" align="center">
        <strong>Total Fee: </strong> Rs. {totalAmount.toLocaleString()}
      </Typography>
      <Typography color="textSecondary">
        <strong>Dues Description:</strong>
      </Typography>
      <TableSimple tableHead={tableHead} tableBody={dues} />
    </React.Fragment>
  );
};

const challanConst = {
  challanNo: "881236-123",
  issueDate: "28/11/2020",
  billingMonth: "November",
  dueDate: "10/12/2020",

  student: {
    firstName: "Shahid",
    lastName: "Afridi",
    rollNo: "10",
    className: "8th",
    section: "Blue",
  },

  dues: [
    { chargeId: 0, chargeName: "Tution Fee", amount: 5000 },
    { chargeId: 1, chargeName: "Bus Charges", amount: 2000 },
    { chargeId: 2, chargeName: "Lab Charges", amount: 800 },
    { chargeId: 3, chargeName: "Library Charges", amount: 300 },
  ],
};

export default FeeChallan;
