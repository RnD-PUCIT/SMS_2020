import React from 'react';
import Card from '../../common/cards/imageCard';

// Receiving array of subjects as a prop and destructuring it.
const Subjects = ({ subjects, studentId, classId }) => {
  return (
    <React.Fragment>
      {/* First cheking if the subjects is not null for safety purpose */}

      {subjects &&
        subjects.map((subject) => {
          return (
            <Card
              key={subject.id}
              subjectName={subject.subject_name}
              teacherName={subject.teacher_name}
              studentId={studentId}
              classId={classId}
              subjectID={subject.id}
            />
          );
        })}
    </React.Fragment>
  );
};

export default Subjects;
