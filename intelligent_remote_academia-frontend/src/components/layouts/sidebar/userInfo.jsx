import React from "react";
import ImageAvatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#1e2a38",
    height: 64,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "300",
    marginLeft: 20,
    color: "white",
  },
  subTitle: {
    color: "white",
    fontWeight: "100",
    textTransform: "capitalize",
  },
}));

const UserInfo = ({ userInfo, role }) => {
  const classes = useStyles();

  if (userInfo) {
    return (
      <div className={classes.root}>
        <ImageAvatar className={classes.avatar} />
        <div>
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
