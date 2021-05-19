import React, { Component } from "react";

import AlertDescriptive from "../../common/alerts/alertDescriptive";
import {
  AccordionContainer,
  SimpleAccordion,
} from "../../common/accordians/accordion";

class CourseOutline extends Component {
  state = { courseContentOutline: this.props.courseContentOutline };

  render() {
    const { courseContentOutline: outline } = this.state;
    if (outline && outline.length) {
      return (
        <div style={{ width: "100%" }}>
          {outline.map((syllabus, index) => {
            if (syllabus.term_wiseCourseOutlineWithFiles) {
              return (
                <AccordionContainer
                  key={index}
                  name={syllabus.termName}
                  statusArray={syllabus.term_wiseCourseOutlineWithFiles.map(
                    (subject) => subject.courseOutlines.status
                  )}
                >
                  {syllabus.term_wiseCourseOutlineWithFiles.map(
                    (subjectItem, index) => (
                      <SimpleAccordion
                        key={index}
                        subjectItem={subjectItem}
                        termName={syllabus.termName}
                      />
                    )
                  )}
                </AccordionContainer>
              );
            }
            return null;
          })}
        </div>
      );
    } else {
      return (
        <AlertDescriptive
          severity="error"
          title="No Course Details"
          description="Course Details have been uploaded yet. Kindly check later!"
        />
      );
    }
  }
}

export default CourseOutline;
