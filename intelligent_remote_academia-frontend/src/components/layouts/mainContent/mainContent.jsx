import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Subjects from "../../pages/subjects/subjects";
import Attendance from "../../pages/attendance/attendance";

import { useStyles } from "../../constants/mainContentConsts";

const MainContent = ({subjects}) => {
  const classes = useStyles();

  return (
    <main className="container">
      <div className={classes.container}>
        <Switch>
          {/* Sending subjects array as a prop to Subject component */}
          <Route path="/subjects" render={() => <Subjects subjects={subjects} />} />
          <Route path="/attendance" component={Attendance} />
          <Redirect from="/" to="/subjects" exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
