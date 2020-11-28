import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

class FeeChallan extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" align="center">
          Fee Challan Form
        </Typography>
        <Paper variant="outlined">{showChallanHeader()}</Paper>
      </React.Fragment>
    );
  }
}

function showChallanHeader() {
  const challan = fee;
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
}

const fee = {
  challanNo: "881236-123",
  issueDate: "28/11/2020",
  billingMonth: "November",
  dueDate: "10/12/2020",
};

export default FeeChallan;
