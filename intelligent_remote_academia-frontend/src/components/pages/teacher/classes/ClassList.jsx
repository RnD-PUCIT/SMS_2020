import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LinkCard from '../../../common/cards/LinkCard';

const ClassList = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    setClassList(classListConst);
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {classList.map((currentClass, index) => {
          return (
            <LinkCard
              key={index}
              path={`/classes/${currentClass.className}_${currentClass.section}`}
              mainHeading={`Class: ${currentClass.className}`}
              subHeading={`Section: ${currentClass.section}`}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ClassList;

const classListConst = [
  { id: 1, className: '8th', section: 'Blue' },
  { id: 2, className: '5th', section: 'Blue' },
  { id: 3, className: '8th', section: 'Red' },
  { id: 4, className: '5th', section: 'Red' },
];
