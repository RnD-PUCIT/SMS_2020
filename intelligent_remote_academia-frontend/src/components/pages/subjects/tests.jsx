import React, { Component } from "react";

import { getTestDetails } from "../../../services/subjectService";

class Tests extends Component {
  state = { tests: null };

  componentDidMount() {
    const tests = getTestDetails();

    this.setState({ tests });
  }

  render() {
    const { tests } = this.state;
    if (tests) {
      return (
        <React.Fragment>
          <h1>Tests</h1>
          <ul>
            {tests.map((item) => {
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

export default Tests;
