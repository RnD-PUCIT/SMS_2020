import React, { Component } from "react";

import Tabs from "../../common/tabs/tabs";

import subjectTabs from "../../constants/tabsConsts";
import TextCard from "../../common/cards/textCard";

import http from "../../../services/httpService";

class SubjectDetails extends Component {
  state = { subjectDetails: null };

  async componentDidMount() {
    const { pathname, search } = this.props.location;

    const url = pathname + search;

    // Get subject details data from the service
    const { data } = await http.get(`${url}`);

    const { subjectService: subjectDetails } = data;

    this.setState({ subjectDetails });

    console.log(this.state.subjectDetails);
  }

  render() {
    // Get pathname (url)
    const { pathname } = this.props.location;

    if (this.state.subjectDetails) {
      const {
        diary,
        gradeTypes,
        subjectInfo: subjectDetails,
      } = this.state.subjectDetails;

      return (
        <React.Fragment>
          <TextCard
            titleMain={subjectDetails.subjectName}
            titleSub={subjectDetails.teacherName}
            variant="outlined"
          />
          <Tabs
            subjectTabs={subjectTabs}
            pathname={pathname}
            gradeTypes={gradeTypes}
            diary={diary}
          />
        </React.Fragment>
      );
    }

    return null;
  }
}

export default SubjectDetails;
