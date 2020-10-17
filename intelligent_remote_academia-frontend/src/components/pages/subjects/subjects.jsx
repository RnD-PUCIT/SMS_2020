import React from "react";
import { Link } from "react-router-dom";

const Subjects = ({subjects}) => {
  return (
    <ul>
      {subjects && subjects.map((subject) => {
        return <li key={subject.id}>
          <Link to="`subjects/$subject.id`">{subject.subject_name}</Link>
        </li>
      })}
    </ul>
  );
};

export default Subjects;
