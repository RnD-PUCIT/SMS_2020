import React, { Component } from 'react';

import AlertDescriptive from '../../common/alerts/alertDescriptive';
import {
  AccordionContainer,
  SimpleAccordion,
} from '../../common/accordians/accordion';

class CourseOutline extends Component {
  state = { courseContentOutline: this.props.courseContentOutline };

  render() {
    const { courseContentOutline: outline } = this.state;
    if (outline && outline.length) {
      return (
        <div style={{ width: '100%' }}>
          {outline.map((syllabus, index) => {
            if (syllabus.term_wiseCourseOutlineWithFiles) {
              return (
                <AccordionContainer
                  key={index}
                  name={syllabus.termName}
                  statusArray={syllabus.term_wiseCourseOutlineWithFiles.map(
                    (subject) => subject.courseOutlines.status
                  )}>
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
          })}
        </div>
      );
    } else {
      return (
        <AlertDescriptive
          severity='error'
          title='No Course Details'
          description='Course Details have been uploaded yet. Kindly check later!'
        />
      );
    }
  }
}

const courseOutlineConst = {
  outline: [
    {
      termName: 'First Term',
      details: [
        {
          title: 'Chapter 1',
          description: 'DMAS Rules',
          date: '01/01/2021 12:00:00 AM',
          status: 0,
          lectureContentFilesList: {
            references: 'if any',
            date: '',
            extension: '',
          },
        },
        {
          title: 'Chapter 2',
          description: 'Multiplication And Division',
          date: '01/02/2021 12:00:00 AM',
          status: 1,
          lectureContentFilesList: {
            references: 'if any',
            date: '',
            extension: '',
          },
        },
        {
          title: 'Chapter 3',
          description: 'Geometry Concepts',
          date: '01/03/2021 12:00:00 AM',
          status: 1,
        },
        {
          title: 'Revision',
          description: 'Revision of Concepts',
          date: '01/03/2021 12:00:00 AM',
          status: 1,
        },
        {
          title: 'Chapter 4',
          description: 'Human Rights and Laws',
          date: '01/04/2021 12:00:00 AM',
          status: 0,
        },
      ],
    },
    {
      termName: 'Second Term',
      details: [
        {
          title: 'Chapter 5',
          description: 'Ethical Behavior and its Obligations ',
          date: '02/05/2021 12:00:00 AM',
          status: 1,
        },
        {
          title: 'Chapter 6',
          description: 'Sythetic Division',
          date: '02/06/2021 12:00:00 AM',
          status: 0,
        },
        {
          title: 'Chapter 7',
          description: 'Crammers Rule',
          date: '02/07/2021 12:00:00 AM',
          status: 0,
        },
      ],
    },
    {
      termName: 'Final Term',
      details: [
        {
          title: 'Chapter 9',
          description: 'Full Book Revision',
          date: '03/05/2021 12:00:00 AM',
          status: 0,
        },
      ],
    },
  ],
};
export default CourseOutline;
