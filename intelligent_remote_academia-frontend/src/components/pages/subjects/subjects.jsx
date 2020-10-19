import React from "react";
import Cards from "../../common/cards/imageCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

// Receiving array of subjects as a prop and destructuring it.
const Subjects = ({ subjects, studentId, classId }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.gridContainer}>
      {/* First cheking if the subjects is not null for safety purpose */}

      {subjects &&
        subjects.map((subject) => {
          return (
            <Cards
              key={subject.id}
              subjectName={subject.subject_name}
              teacherName={subject.teacher_name}
              studentId={studentId}
              classId={classId}
              subjectID={subject.id}
            />
          );
        })}
    </Grid>
  );
};

export default Subjects;
