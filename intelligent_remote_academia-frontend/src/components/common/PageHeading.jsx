import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";

import colors from "../../colors";

const PageHeading = ({ title }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </React.Fragment>
  );
};

export default PageHeading;

const useStyles = makeStyles({
  title: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: "400",
  },
  divider: {
    marginTop: 15,
    marginBottom: 20,
  },
});
