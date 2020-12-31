import React, { Component } from 'react';
import SimpleAccordion from '../../common/accordians/accordian';

class CourseOutline extends Component {
  state = {};
  render() {
    return (
      <React.Fragment style={{ width: '100%' }}>
        <SimpleAccordion />
        <SimpleAccordion />
      </React.Fragment>
    );
  }
}

export default CourseOutline;
