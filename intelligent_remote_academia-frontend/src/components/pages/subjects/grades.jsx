import { Grid } from "@material-ui/core";
import React from "react";

import TextCard from "../../common/cards/textCard";

const handleCardClick = (pathname, gradeTypeId) => {
  window.location = pathname + "/" + gradeTypeId;
};

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
    <Grid item xs={6}>
      <TextCard
        titleMain={grade.gradeTypeName}
        onCardClick={() => handleCardClick(pathname, grade.gradeTypeId)}
      />
    </Grid>
  );
};

export default Grades;
