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
          description: 'Full Chapter',
          date: '10 January',
          status: 1,
        },
        {
          title: 'Chapter 1',
          description: 'Full Chapter',
          date: '10 January',
          status: 1,
        },
        {
          title: 'Chapter 1',
          description: 'Full Chapter',
          date: '10 January',
          status: 0,
        },
      ],
    },
    {
      termName: 'Second Term',
      details: [
        {
          title: 'Chapter 1',
          description: 'Full Chapter',
          date: '10 January',
          status: 0,
        },
        {
          title: 'Chapter 1',
          description: 'Full Chapter',
          date: '10 January',
          status: 0,
        },
        {
          title: 'Chapter 1',
          description: 'Full Chapter',
          date: '10 January',
          status: 0,
        },
      ],
    },
  ],
};
export default CourseOutline;
