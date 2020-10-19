import React from 'react';
import Cards from '../../common/cards/imageCard';
import { Grid } from '@material-ui/core';

// Receiving array of subjects as a prop and destructuring it.
const Subjects = ({ subjects, studentId, classId }) => {
  return (
    <Grid container spacing={3}>
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
