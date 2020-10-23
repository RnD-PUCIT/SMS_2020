import React, { Component } from "react";
import { Button, Grid, Paper } from "@material-ui/core";

import GradesGraphical from "./gradesGraphical";
import GradesTimeline from "./gradesTimeline";

import "./gradeDetails.css";

import http from "../../../services/httpService";

class GradeDetails extends Component {
  state = { grades: null, viewType: 0 };

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
      if (this.state.viewType !== 0) this.setState({ viewType: 0 });
    };

    const handleGraphicalClick = () => {
      if (this.state.viewType !== 1) this.setState({ viewType: 1 });
    };

    const { grades } = this.state;
    return (
      <React.Fragment>
        <GradeFilterButtons
          onTimelineClick={handleTimelineClick}
          onGraphicalClick={handleGraphicalClick}
          viewType={this.state.viewType}
        />
        <Paper
          variant="outlined"
          style={{ backgroundColor: "rgb(227, 227, 227)" }}
        >
          <GradeData grades={grades} viewType={this.state.viewType} />
        </Paper>
      </React.Fragment>
    );
  }
}

// Component for the filtering buttons.
const GradeFilterButtons = ({
  onTimelineClick,
  onGraphicalClick,
  viewType,
}) => {
  return (
    <React.Fragment>
      <Grid
        container
        justify="flex-end"
        spacing={1}
        style={{ margin: "20px 0" }}
      >
        <Grid item>
          <Button
            variant={viewType === 0 ? "contained" : "outlined"}
            onClick={onTimelineClick}
          >
            Timeline View
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={viewType === 1 ? "contained" : "outlined"}
            onClick={onGraphicalClick}
          >
            Graphical View
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const GradeData = ({ grades, viewType }) => {
  if (grades) {
    return viewType === 0 ? (
      <GradesTimeline grades={grades} />
    ) : (
      <GradesGraphical />
    );
  }
  return null;
};

export default GradeDetails;
