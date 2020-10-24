import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  outerContainer: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "9999",
    backgroundColor: "white",
  },

  innerContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },

  headingNotFound: {
    fontSize: "150px",
    color: "red",
    fontWeight: "lighter",
    letterSpacing: "10px",
  },

  headingSub: {
    textTransform: "uppercase",
    wordSpacing: "10px",
    marginBottom: "20px",
  },

  link: {
    color: "red",
  },
});

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <Typography className={classes.headingNotFound} variant="h1">
          404
        </Typography>
        <Typography className={classes.headingSub} variant="h5">
          Oops! Nothing was found
        </Typography>
        <Typography>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
          <Link to="/" className={classes.link}>
            {" "}
            Return to homepage
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default NotFound;
