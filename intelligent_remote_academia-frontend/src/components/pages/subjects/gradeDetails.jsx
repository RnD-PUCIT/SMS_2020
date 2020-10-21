import React, { Component } from "react";

import { getGradeDetails } from "../../../services/gradeDetailService";

class GradeDetails extends Component {
  state = { gradeDetails: null };

  componentDidMount() {
    const gradeDetails = getGradeDetails();

    this.setState({ gradeDetails });
  }

  render() {
    const { gradeDetails } = this.state;
    if (gradeDetails) {
      const { grades } = gradeDetails;
      return (
        <ul>
          {grades.map((grade) => {
            return <li>{grade.obtainedMarks}</li>;
          })}
        </ul>
      );
    }
    return null;
  }
}

export default GradeDetails;
