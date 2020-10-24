import { Grid } from "@material-ui/core";
import React from "react";

import TextCard from "../../common/cards/textCard";
import AlertDescriptive from "../../common/alerts/alertDescriptive";

const Grades = ({ pathname, search, gradeTypes }) => {
  if (gradeTypes.length) {
    return (
      <React.Fragment>
        <Grid container spacing={3}>
          {gradeTypes.map((grade) => {
            return (
              <GradeItem
                key={grade.gradeTypeId}
                grade={grade}
                pathname={pathname}
                search={search}
              />
            );
          })}
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <AlertDescriptive
      severity="error"
      title="No Grade Types found"
      description="Looks like the teacher haven't added any grade type yet."
    />
  );
};

const GradeItem = ({ grade, pathname, search }) => {
  return (
    <Grid item md={6} xs={12}>
      <TextCard
        titleMain={grade.gradeTypeName}
        link={pathname + "/" + grade.gradeTypeSlug}
        search={search + "&gradeTypeId=" + grade.gradeTypeId}
        isLink="true"
      />
    </Grid>
  );
};

export default Grades;
