import React from "react";
import { Link } from "react-router-dom";

const Grades = ({ pathname }) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to={{ pathname: pathname + "/tests", gradeData: "abc" }}>
            Tests
          </Link>
        </li>
        <li>
          <Link to={{ pathname: pathname + "/exams", gradeData: "123" }}>
            Exams
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Grades;
