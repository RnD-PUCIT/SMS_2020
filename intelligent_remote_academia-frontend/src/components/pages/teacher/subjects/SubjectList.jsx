import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LinkCard from '../../../common/cards/LinkCard';

const SubjecList = () => {
  const [subjectList, setSubjectList] = useState([]);

  useEffect(() => {
    setSubjectList(subjectListConst);
  }, []);

  return (
    <React.Fragment>
      <h1>Subject List</h1>
      <Grid container spacing={3}>
        {subjectList.map((subject, index) => {
          const path = `${window.location.pathname}/${subject.subjectName}`;
          return (
            <LinkCard
              key={index}
              path={path}
              mainHeading={subject.subjectName}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default SubjecList;

const subjectListConst = [
  { id: 1, subjectName: 'Urdu' },
  { id: 2, subjectName: 'English' },
  { id: 3, subjectName: 'Computer' },
];
