import React from "react";
import { Link } from "react-router-dom";

const Grades = ({ pathname }) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to={pathname + "/tests"}>Tests</Link>
        </li>
        <li>
          <Link to={pathname + "/exams"}>Exams</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Grades;
