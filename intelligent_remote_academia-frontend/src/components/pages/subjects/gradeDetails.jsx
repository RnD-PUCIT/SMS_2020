import { Button } from "@material-ui/core";
import React, { Component } from "react";

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
    return <GradeFilterButtons />;
  }
}

const GradeFilterButtons = () => {
  return (
    <React.Fragment>
      <Button variant="outlined">Milestone Form</Button>
      <Button variant="outlined">Graphical Form</Button>
    </React.Fragment>
  );
};

export default GradeDetails;
