import { Button } from "@material-ui/core";
import React, { Component } from "react";

import { getGradeDetails } from "../../../services/gradeDetailService";

class GradeDetails extends Component {
  state = { gradeDetails: null };

  componentDidMount() {
    const gradeDetails = getGradeDetails();

    this.setState({ gradeDetails });
  }

  render() {
    return <GradeFilterButtons />;
  }
}

const GradeFilterButtons = () => {
  return (
    <React.Fragment>
      <Button variant="outlined">Milestone Form</Button>
    </React.Fragment>
  );
};

export default GradeDetails;
