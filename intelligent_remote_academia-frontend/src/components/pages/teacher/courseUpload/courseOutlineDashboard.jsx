import React, { useEffect, useState } from 'react';
import TermsList from './termsList';

const CourseOutlineDashboard = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    const courseData = outline;
    setCourseData(courseData);
  }, []);

  return (
    <>
      <TermsList courseData={courseData} setCourseData={setCourseData} />
    </>
  );
};

export default CourseOutlineDashboard;

const outline = [
  {
    termid: 0,
    details: [
      {
        title: 'Chapter 1',
        description: 'DMAS Rules',
        date: '01/01/2021 12:00:00 AM',
        status: false,
        references: 'https://www.youtube.com/watch?v=ORVShW0Yjaw',
      },
      {
        title: 'Chapter 2',
        description: 'Multiplication And Division',
        date: '01/02/2021 12:00:00 AM',
        status: true,
        references: 'https://www.youtube.com/watch?v=ORVShW0Yjaw',
      },
    ],
  },
  {
    termid: 1,
    details: [
      {
        title: 'Chapter 5',
        description: 'Ethical Behavior and its Obligations ',
        date: '02/05/2021 12:00:00 AM',
        status: true,
        references: 'https://www.youtube.com/watch?v=ORVShW0Yjaw',
      },
      {
        title: 'Chapter 6',
        description: 'Sythetic Division',
        date: '02/06/2021 12:00:00 AM',
        status: false,
        references: 'https://www.youtube.com/watch?v=ORVShW0Yjaw',
      },
      {
        title: 'Chapter 7',
        description: 'Crammers Rule',
        date: '02/07/2021 12:00:00 AM',
        status: false,
        references: 'https://www.youtube.com/watch?v=ORVShW0Yjaw',
      },
    ],
  },
  {
    termid: 2,
    details: [
      //   {
      //     title: 'Chapter 5',
      //     description: 'Ethical Behavior and its Obligations ',
      //     date: '02/05/2021 12:00:00 AM',
      //     status: true,
      //     references: 'if any',
      //   },
      //   {
      //     title: 'Chapter 6',
      //     description: 'Sythetic Division',
      //     date: '02/06/2021 12:00:00 AM',
      //     status: false,
      //     references: 'if any',
      //   },
      //   {
      //     title: 'Chapter 7',
      //     description: 'Crammers Rule',
      //     date: '02/07/2021 12:00:00 AM',
      //     status: false,
      //     references: 'if any',
      //   },
    ],
  },
];
