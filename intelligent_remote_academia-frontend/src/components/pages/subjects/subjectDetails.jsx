import React, { Component } from "react";

import Tabs from "../../common/tabs/tabs";

import { getSubjectData } from "../../../services/subjectDetailService";

import subjectTabs from "../../constants/tabsConsts";
import TextCard from "../../common/cards/textCard";

class SubjectDetails extends Component {
  state = { subjectDetail: null };

  componentDidMount() {
    // Get subject details data from the service
    const subjectDetail = getSubjectData();

    // Set state of the component
    this.setState({ subjectDetail });
  }

  render() {
    // Get pathname (url)
    const { pathname } = this.props.location;

    if (this.state.subjectDetail) {
      const { diary, gradeTypes, subjectDetails } = this.state.subjectDetail;

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
