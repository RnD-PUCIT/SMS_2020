import React, { Component } from "react";
import { Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
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
          <div style={{ margin: "20px 0" }}>
            {showFeeStatus(this.state.challan)}
          </div>
          <Grid justify="flex-end" container>
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
          </Grid>
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
      <Typography>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Grid container spacing={1}>
              <Grid item md={4} xs={6}>
                <strong>Challan #: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {challan.challanNo}
              </Grid>
              <Grid item md={4} xs={6}>
                <strong>Issue Date: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {challan.issueDate}
              </Grid>
              <Grid item md={4} xs={6}>
                <strong>Billing Month: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {challan.billingMonth}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Alert severity="warning">
              <strong>Due Date: </strong> {challan.dueDate}
            </Alert>
          </Grid>
        </Grid>
      </Typography>
    </React.Fragment>
  );
};

const StudentInfo = ({ challan }) => {
  const { student } = challan;
  return (
    <React.Fragment>
      <Typography>
        <Grid container spacing={1}>
          <Grid item md={6}>
            <Grid container spacing={1}>
              <Grid item md={4} xs={6}>
                <strong>Student Name: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {student.firstName + " " + student.lastName}
              </Grid>
              <Grid item md={4} xs={6}>
                <strong>Roll #: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {student.rollNo}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={1}>
              <Grid item md={4} xs={6}>
                <strong>Class: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {student.className}
              </Grid>
              <Grid item md={4} xs={6}>
                <strong>Section: </strong>
              </Grid>
              <Grid item md={8} xs={6}>
                {student.section}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
      <Typography align="center">
        <strong>Total Fee: </strong> Rs. {totalAmount.toLocaleString()}/-
      </Typography>
      <Typography style={{ margin: "10px 0" }}>
        <strong>Dues Description:</strong>
      </Typography>
      <TableSimple tableHead={tableHead} tableBody={dues} />
    </React.Fragment>
  );
};

function showFeeStatus(challan) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const dueDate = new Date(challan.dueDate);
  const currentDate = new Date();

  if (currentDate > dueDate) {
    const noOfDays = Math.round(Math.abs((currentDate - dueDate) / oneDay));
    return (
      <Alert severity="error">
        Fee is Overdue <strong>{noOfDays} days</strong>! Kindly clear all the
        dues as soon as possible to avoid fine.
      </Alert>
    );
  } else if (dueDate > currentDate) {
    const noOfDays = Math.round(Math.abs((dueDate - currentDate) / oneDay));
    return (
      <Alert severity="info">
        You have
        <strong> {noOfDays} days </strong> to submit all the dues. Kindly clear
        them at your earliest to avoid any fine.
      </Alert>
    );
  }
}

const challanConst = {
  challanNo: "881236-123",
  issueDate: "28/11/2020",
  billingMonth: "November",
  dueDate: "12/12/2020",

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
