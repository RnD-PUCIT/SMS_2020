import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { useStyles } from "../../constants/mainContentConsts";
import Subjects from "../../pages/subjects/subjects";
import Attendance from "../../pages/attendance/attendance";

const MainContent = (props) => {
  const classes = useStyles();
  return (
    <main className="container">
      <div className={classes.container}>
        <Switch>
          <Route path="/subjects" component={Subjects} />
          <Route path="/attendance" component={Attendance} />
          <Redirect from="/" to="/subjects" exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
