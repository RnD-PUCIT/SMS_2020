import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function TableSimple({ tableHead, tableBody }) {
  return (
    <Paper variant="outlined">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHead.map((cell) => {
                return <TableCell>{cell}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBody.map((charge, index) => (
              <TableRow key={charge.chargeId}>
                <TableCell component="th" scope="row">
                  {++index}
                </TableCell>
                <TableCell>{charge.chargeName}</TableCell>
                <TableCell>{charge.amount}/-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
