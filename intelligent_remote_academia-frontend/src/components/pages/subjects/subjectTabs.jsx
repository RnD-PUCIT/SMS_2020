import React, { Component } from "react";

import Tabs from "../../common/tabs/tabs";

class SubjectTabs extends Component {
  render() {
    const { subjectTabs, pathname, gradeTypes, diary } = this.props;
    return (
      <Tabs
        subjectTabs={subjectTabs}
        pathname={pathname}
        gradeTypes={gradeTypes}
        diary={diary}
      />
    );
  }
}

export default SubjectTabs;
