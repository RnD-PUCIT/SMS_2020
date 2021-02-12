import React, { useState } from 'react';
import GradedActivityForm from './GradedActivityForm';

const Gradebook = () => {
  const [gradeTypeList, setGradeTypeList] = useState([]);
  return (
    <React.Fragment>
      <GradedActivityForm
        gradesList={gradeTypeList}
        setGradeTypeList={setGradeTypeList}
        button={{ text: 'Create', variant: 'contained', color: 'primary' }}
      />
      <ul>
        {gradeTypeList.map((type, index) => {
          return <li key={index}>{type}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Gradebook;
