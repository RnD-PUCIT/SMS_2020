import React, { Component } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import ReactToPrint from "react-to-print";

import http from "../../../services/httpService";
import { getMonths } from "../../constants/calendarConsts";

import useStyles from "../../../styles/feeChallanStyle";
import "./feeChallan.css";
import AlertDescriptive from "../../common/alerts/alertDescriptive";

const institutionConst = {
  name: "The Intelli School",
  address: "PUCIT Old Campus, Lahore, Pakistan",
};

class FeeChallan extends Component {
  state = {
    institution: institutionConst,
    bankInfo: null,
    challan: null,
    studentInfo: null,
    classInfo: null,
    charges: null,
    instructions: null,
    error: false,
  };

  async componentDidMount() {
    this.getFeeChallan();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.studentId !== prevProps.studentId) {
      this.getFeeChallan();
    }
  }

  render() {
    if (this.state.error) {
      return (
        <AlertDescriptive
          severity="error"
          title="No Challan"
          description="Your current challan may not be uploaded. Please come check later!"
        />
      );
    } else if (this.state.bankInfo) {
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
              institution={this.state.institution}
              bankInfo={this.state.bankInfo}
              studentInfo={this.state.studentInfo}
              classInfo={this.state.classInfo}
              charges={this.state.charges}
              instructions={this.state.instructions}
            />
          </div>
        </React.Fragment>
      );
    }
    return null;
  }
  getFeeChallan = async () => {
    const { studentId, classId } = this.props;

    const url = "/feechallan?studentid=" + studentId + "&classid=" + classId;

    try {
      const { data } = await http.get(`${url}`);

      const { feeInfo, charges, bankInfo, studentInfo, classInfo } = data;
      this.setState({
        bankInfo,
        challan: feeInfo,
        studentInfo,
        classInfo,
        charges,
        instructions: feeInfo.instructions,
        error: false,
      });
    } catch (ex) {
      console.log(ex);
      if (ex && ex.response.status === 400) {
        this.setState({ error: true });
      }
    }
  };
}

class Form extends Component {
  render() {
    return (
      <ChallanForm
        challan={this.props.challan}
        institution={this.props.institution}
        bankInfo={this.props.bankInfo}
        studentInfo={this.props.studentInfo}
        classInfo={this.props.classInfo}
        charges={this.props.charges}
        instructions={this.props.instructions}
      />
    );
  }
}

const ChallanForm = ({
  challan,
  institution,
  instructions,
  bankInfo,
  studentInfo,
  classInfo,
  charges,
}) => {
  const classes = useStyles();
  const { unpaidCharges } = challan;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper variant="outlined" className={classes.paper}>
          <ChallanHeader
            challan={challan}
            institution={institution}
            bankInfo={bankInfo}
          />
          <Divider className={classes.divider} />
          <StudentInfo studentInfo={studentInfo} classInfo={classInfo} />
          <Divider className={classes.divider} />
          <Dues charges={charges} unpaidCharges={unpaidCharges} />
          <Instructions instructions={instructions} />
        </Paper>
      </div>
    </React.Fragment>
  );
};

const ChallanHeader = ({ challan, institution, bankInfo }) => {
  return (
    <React.Fragment>
      <InstituteInfo institution={institution} bankInfo={bankInfo} />
      <ChallanInfo challan={challan} />
    </React.Fragment>
  );
};

const InstituteInfo = ({ institution, bankInfo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="print-source">
        <div className={classes.center}>
          <Typography variant="h5">{institution.name}</Typography>
          <Typography>{institution.address}</Typography>
          <Typography variant="h6">
            {bankInfo.bankName} - {bankInfo.bankBranch}
          </Typography>
          <Typography>Account #: {bankInfo.accountNo}</Typography>

          <Divider className={classes.divider} />
        </div>
      </div>
    </React.Fragment>
  );
};

const ChallanInfo = ({ challan }) => {
  const months = getMonths();
  const issueDate = new Date(challan.issueDate);
  const dueDate = new Date(challan.dueDate);
  return (
    <Grid container spacing={1}>
      <Grid item md={6}>
        <Grid container spacing={1}>
          <Grid item md={4} xs={6}>
            <Typography>
              <strong>Challan #: </strong>
            </Typography>
          </Grid>
          <Grid item md={8} xs={6}>
            <Typography>{challan.guid}</Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Typography>
              <strong>Issue Date: </strong>
            </Typography>
          </Grid>
          <Grid item md={8} xs={6}>
            <Typography>
              {months[issueDate.getMonth()].name +
                " " +
                issueDate.getDate() +
                " " +
                issueDate.getFullYear()}
            </Typography>
          </Grid>
          <Grid item md={4} xs={6}>
            <Typography>
              <strong>Billing Month: </strong>
            </Typography>
          </Grid>
          <Grid item md={8} xs={6}>
            <Typography>
              {months[issueDate.getMonth() - 1].name +
                " " +
                issueDate.getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <Alert severity="warning">
          <Typography>
            <strong>Due Date: </strong>{" "}
            {months[dueDate.getMonth()].name +
              " " +
              dueDate.getDate() +
              " " +
              dueDate.getFullYear()}
          </Typography>
        </Alert>
      </Grid>
    </Grid>
  );
};

const StudentInfo = ({ studentInfo, classInfo }) => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={4} xs={6}>
              <Typography>
                <strong>Student Name: </strong>
              </Typography>
            </Grid>
            <Grid item md={8} xs={6}>
              <Typography>
                {studentInfo.firstName + " " + studentInfo.lastName}
              </Typography>
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography>
                <strong>Roll #: </strong>
              </Typography>
            </Grid>
            <Grid item md={8} xs={6}>
              <Typography>{studentInfo.rollNo}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container spacing={1}>
            <Grid item md={4} xs={6}>
              <Typography>
                <strong>Class: </strong>
              </Typography>
            </Grid>
            <Grid item md={8} xs={6}>
              <Typography>{classInfo.className}</Typography>
            </Grid>
            <Grid item md={4} xs={6}>
              <Typography>
                <strong>Section: </strong>
              </Typography>
            </Grid>
            <Grid item md={8} xs={6}>
              <Typography>{classInfo.section}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Dues = ({ charges, unpaidCharges }) => {
  const classes = useStyles();

  // Calculate Total Fee
  let totalAmount = charges.amount + unpaidCharges;

  const numberToWord = require("number-to-words");
  const totalInWords = numberToWord.toWords(totalAmount);

  const tableHead = ["Sr. #", "Description", "Amount"];
  const tableBody = [
    { chargeName: "Admission Fee", amount: 0 },
    { chargeName: "Monthly Fee", amount: charges.amount },
    { chargeName: "Unpaid Charges", amount: unpaidCharges },
  ];
  return (
    <React.Fragment>
      <Typography align="center">
        <span className={classes.highlight}>
          <strong>Total Payable Fee: </strong> Rs.
          {" " + totalAmount.toLocaleString()}/-
        </span>
      </Typography>
      <Typography style={{ margin: "10px 0" }}>
        <strong>Dues Description:</strong>
      </Typography>
      {/* DUES TABLE */}
      <Paper variant="outlined">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHead.map((cell, index) => {
                  return (
                    <TableCell key={index}>
                      <strong>{cell}</strong>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableBody.map((charge, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {++index}
                    </TableCell>
                    <TableCell>{charge.chargeName}</TableCell>
                    <TableCell>{charge.amount.toLocaleString()}/-</TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell colSpan={1}></TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  <strong>Total Amount: </strong>
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  <strong>Rs. {totalAmount.toLocaleString()}/-</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3} style={{ fontSize: "16px" }}>
                  <strong>Total Amount in Words: </strong>
                  <span style={{ textTransform: "capitalize" }}>
                    Rs. {totalInWords} only
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  );
};

const Instructions = ({ instructions }) => {
  const classes = useStyles();
  if (instructions && instructions.length > 0) {
    return (
      <React.Fragment>
        <div className="print-source">
          <div className={classes.margin}>
            <Typography variant="h6" style={{ textDecoration: "underline" }}>
              Instructions:
            </Typography>
            <Typography>{instructions}</Typography>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return null;
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

export default FeeChallan;
