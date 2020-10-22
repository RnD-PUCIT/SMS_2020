import React, { Component } from "react";
import { Button, Paper } from "@material-ui/core";

import GradesGraphical from "./gradesGraphical";
import GradesTimeline from "./gradesTimeline";

import "./gradeDetails.css";

import http from "../../../services/httpService";

class GradeDetails extends Component {
  state = { grades: null, displayType: 0 };

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
    const handleTimelineClick = () => {
      if (this.state.displayType != 0) this.setState({ displayType: 0 });
    };

    const handleGraphicalClick = () => {
      if (this.state.displayType != 1) this.setState({ displayType: 1 });
    };

    const { grades } = this.state;
    return (
      <React.Fragment>
        <GradeFilterButtons
          onTimelineClick={handleTimelineClick}
          onGraphicalClick={handleGraphicalClick}
        />
        <Paper
          variant="outlined"
          style={{ backgroundColor: "rgb(227, 227, 227)" }}
        >
          <GradeData grades={grades} displayType={this.state.displayType} />
        </Paper>
      </React.Fragment>
    );
  }
}

const GradeFilterButtons = ({ onTimelineClick, onGraphicalClick }) => {
  return (
    <React.Fragment>
      <div style={{ margin: "20px 0" }}>
        <Button variant="outlined" onClick={onTimelineClick}>
          Timeline View
        </Button>
        <Button variant="outlined" onClick={onGraphicalClick}>
          Graphical View
        </Button>
      </div>
    </React.Fragment>
  );
};

const GradeData = ({ grades, displayType }) => {
  if (grades) {
    return displayType === 0 ? (
      <GradesTimeline grades={grades} />
    ) : (
      <GradesGraphical />
    );
  }
  return null;
};

export default GradeDetails;
