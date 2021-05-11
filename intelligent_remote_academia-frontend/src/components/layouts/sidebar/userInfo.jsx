import React from "react";
import ImageAvatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";
import colors from "../../../colors";

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    height: 80,
    padding: "0 20px",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "400",
    color: "white",
  },
  subTitle: {
    color: colors.light,
    fontWeight: "100",
    fontSize: 14,
    textTransform: "capitalize",
    marginTop: -5,
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
  },
}));

const UserInfo = ({ userInfo, role }) => {
  const classes = useStyles();

  if (userInfo) {
    return (
      <div className={classes.root}>
        <ImageAvatar className={classes.avatar} />
        <div className={classes.dataContainer}>
          <Typography variant="h6" className={classes.title}>
            {`${userInfo.firstName} ${userInfo.lastName}`}
          </Typography>
          <Typography variant="subtitle1" className={classes.subTitle}>
            {role}
          </Typography>
        </div>
      </div>
    );
  }
  return null;
};

export default UserInfo;
