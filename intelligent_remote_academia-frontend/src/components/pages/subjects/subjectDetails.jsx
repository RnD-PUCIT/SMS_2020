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

    // Set state of the component
    this.setState({ subjectDetail });
  }

  render() {
    // Get pathname (url)
    const { pathname, subject } = this.props.location;

    if (this.state.subjectDetail) {
      // Get grades data
      const { grades } = this.state.subjectDetail;

      // Get diary data
      const { diary } = this.state.subjectDetail;

      return (
        <React.Fragment>
          {subject && (
            <TextCard
              titleMain={subject.subject_name}
              titleSub={subject.teacher_name}
            />
          )}
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
