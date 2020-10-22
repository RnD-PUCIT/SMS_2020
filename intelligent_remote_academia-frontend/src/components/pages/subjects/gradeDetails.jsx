import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import http from "../../../services/httpService";

class GradeDetails extends Component {
  state = { grades: null };

  async componentDidMount() {
    // Get url to send request to server
    const { pathname, search } = this.props.location;
    const url = pathname + search;

    // Send ajax call to server
    const { data } = await http.get(`${url}`);
    const { grades } = data;

    // Save grades in the satate
    this.setState({ grades });
  }

  render() {
    const { grades } = this.state;
    return (
      <React.Fragment>
        <GradeFilterButtons />
        <Paper
          variant="outlined"
          style={{ backgroundColor: "rgb(227, 227, 227)" }}
        >
          <GradeData grades={grades} />
        </Paper>
      </React.Fragment>
    );
  }
}

const GradeFilterButtons = () => {
  return (
    <React.Fragment>
      <div style={{ margin: "20px 0" }}>
        <Button variant="outlined">Milestone Form</Button>
        <Button variant="outlined">Graphical Form</Button>
      </div>
    </React.Fragment>
  );
};

const GradeData = ({ grades }) => {
  if (grades) {
    return (
      <React.Fragment>
        <VerticalTimeline>
          {grades.map((grade) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                key={grade.id}
                date={grade.gradeDate}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h6 className="vertical-timeline-element-title">
                  {grade.gradeTitle}
                </h6>
                <p></p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </React.Fragment>
    );
  }
  return null;
};

export default GradeDetails;
