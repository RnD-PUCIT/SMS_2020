import React from "react";
import { Route, Switch } from "react-router-dom";

import { useStyles } from "../../constants/mainContentConsts";
import Subjects from "../../pages/subjects/subjects";
import Attendance from "../../pages/attendance/attendance";

const MainContent = (props) => {
  const classes = useStyles();
  return (
    <main className="container">
      <div className={classes.container}>
        <Switch>
          <Route path="/subjects" component={Subjects}></Route>
          <Route path="/attendance" component={Attendance}></Route>
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
