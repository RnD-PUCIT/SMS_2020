import React, { Component } from "react";

import Tabs from "../../common/tabs/tabs";

import { getSubjectData } from "../../../services/subjectService";

import subjectTabs from "../../constants/tabsConsts";
import TextCard from "../../common/cards/textCard";

class SubjectDetails extends Component {
  state = { subjectDetail: null };

  componentDidMount() {
    // Get subject details data from the service
    const subjectDetail = getSubjectData();

    console.log(subjectDetail);

    // Set state of the component
    this.setState({ subjectDetail });
  }

  render() {
    // Get pathname (url)
    const { pathname } = this.props.location;

    if (this.state.subjectDetail) {
      const {
        grades,
        diary,
        gradesType,
        subjectDetails,
      } = this.state.subjectDetail;

      return (
        <React.Fragment>
          <TextCard
            titleMain={subjectDetails.subjectName}
            titleSub={subjectDetails.teacherName}
          />
          <Tabs
            subjectTabs={subjectTabs}
            pathname={pathname}
            grades={grades}
            diary={diary}
          />
        </React.Fragment>
      );
    }

    return null;
  }
}

export default SubjectDetails;
