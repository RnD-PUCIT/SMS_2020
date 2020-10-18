import React, { Component } from "react";
import { getExamDetails } from "../../../services/subjectService";

class Exams extends Component {
  state = { exams: null };

  componentDidMount() {
    const exams = getExamDetails();

    this.setState({ exams });
  }

  render() {
    const { exams } = this.state;

    if (exams) {
      return (
        <React.Fragment>
          <h1>Exams</h1>
          <ul>
            {exams.map((item) => {
              return (
                <li key={item.id}>
                  {item.grade_title} - {item.obtained_marks}/{item.total_marks}{" "}
                  ({item.grade_date})
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default Exams;
