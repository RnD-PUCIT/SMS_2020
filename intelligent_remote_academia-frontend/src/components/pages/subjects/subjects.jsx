import React from "react";
import { Link } from "react-router-dom";

// Receiving array of subjects as a prop and destructuring it.
const Subjects = ({ subjects, studentId, classId }) => {
  return (
    <ul>
      {/* First cheking if the subjects is not null for safety purpose */}
      {subjects &&
        subjects.map((subject) => {
          return (
            <li key={subject.id}>
              <Link to={`/subjects/${studentId}/${subject.id}/${classId}`}>
                {subject.subject_name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default Subjects;
