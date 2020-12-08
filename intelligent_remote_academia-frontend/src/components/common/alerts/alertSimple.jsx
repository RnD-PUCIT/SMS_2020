import { Alert } from "@material-ui/lab";
import React from "react";

const AlertSimple = ({ severity, message }) => {
  return <Alert severity={severity}>{message}</Alert>;
};

export default AlertSimple;
