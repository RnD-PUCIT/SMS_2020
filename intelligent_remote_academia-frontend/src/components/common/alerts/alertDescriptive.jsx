import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const AlertDescriptive = ({ severity, title, description }) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {description}
    </Alert>
  );
};

export default AlertDescriptive;
