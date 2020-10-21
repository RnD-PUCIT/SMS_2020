import { Grid } from "@material-ui/core";
import React from "react";

import TextCard from "../../common/cards/textCard";

const Grades = ({ pathname, gradeTypes }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const GradeItem = ({ grade, pathname }) => {
  return (
    <Grid item md={6} xs={12}>
      <TextCard
        titleMain={grade.gradeTypeName}
        link={pathname + "/" + grade.gradeTypeSlug}
        isLink="true"
      />
    </Grid>
  );
};

export default Grades;
