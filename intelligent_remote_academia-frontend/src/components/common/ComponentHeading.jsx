import React from 'react';
import { Divider, Typography } from '@material-ui/core';

const ComponentHeading = ({ title }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">{title}</Typography>
      <Divider className="u_mt_tiny u_mb_small" />
    </React.Fragment>
  );
};

export default ComponentHeading;
