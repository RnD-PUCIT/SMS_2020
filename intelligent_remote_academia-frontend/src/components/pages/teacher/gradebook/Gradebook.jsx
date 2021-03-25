import React, { useEffect, useState } from 'react';
import GradeTypeForm from './GradeTypeForm';
import GradeTypeList from './GradeTypeList';

const Gradebook = () => {
  const [gradeTypeList, setGradeTypeList] = useState([]);
  useEffect(() => {
    const gradeTypes = gradeTypeListConst;
    setGradeTypeList(gradeTypes);
  }, []);

  return (
    <React.Fragment>
      <GradeTypeForm
        gradesList={gradeTypeList}
        setGradeTypeList={setGradeTypeList}
        button={{ text: 'Create', variant: 'contained', color: 'primary' }}
      />

      {/* Grade Type list compnent */}
      <GradeTypeList
        gradeTypeList={gradeTypeList}
        setGradeTypeList={setGradeTypeList}
      />
    </React.Fragment>
  );
};

export default Gradebook;

const gradeTypeListConst = [
  {
    id: 0,
    gradeName: 'Quizzes',
    activities: [
      {
        activityTitle: 'Quiz 01',
        gradeTypeName: 'Quizzes',
        activityMarks: 100,
        instructions: '',
      },
    ],
  },
  { id: 0, gradeName: 'Assignments', activities: [] },
];
