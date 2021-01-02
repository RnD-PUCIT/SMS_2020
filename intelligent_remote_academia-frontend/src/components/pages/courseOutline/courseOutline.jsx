import React, { Component } from 'react';
import {
  AccordionContainer,
  SimpleAccordion,
} from '../../common/accordians/accordion';

class CourseOutline extends Component {
  state = { outline: [] };
  render() {
    const { outline } = courseOutlineConst;
    return (
      <div style={{ width: '100%' }}>
        {outline.map((term, index) => {
          if (term.details) {
            return (
              <AccordionContainer
                key={index}
                name={term.termName}
                statusArray={term.details.map((item) => item.status)}>
                {term.details.map((item, index) => (
                  <SimpleAccordion
                    key={index}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    date={item.date}
                  />
                ))}
              </AccordionContainer>
            );
          }
        })}
      </div>
    );
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
          status: 1,
        },
        {
          title: 'Chapter 2',
          description: 'Multiplication And Division',
          date: '01/02/2021 12:00:00 AM',
          status: 1,
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
