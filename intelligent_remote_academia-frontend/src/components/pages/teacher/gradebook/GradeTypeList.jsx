import React from 'react';

const GradeTypeList = ({ gradeTypeList }) => {
  return (
    <React.Fragment>
      {gradeTypeList.map((gradeType, index) => {
        return <h1 key={index}>{gradeType}</h1>;
      })}
    </React.Fragment>
  );
};

export default GradeTypeList;
