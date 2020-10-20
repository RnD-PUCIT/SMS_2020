import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import TextCard from "../../common/cards/textCard";

const Grades = ({ pathname, gradeTypes }) => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {gradeTypes.map((grade) => {
            return (
              <GradeItem
                key={grade.gradeTypeId}
                grade={grade}
                pathname={pathname}
              />
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};

const GradeItem = ({ grade, pathname }) => {
  return (
    <Grid item xs={6}>
      <TextCard
        titleMain={grade.gradeTypeName}
        component={Link}
        to={pathname + "/" + grade.gradeTypeId}
      />
    </Grid>
  );
};

export default Grades;
