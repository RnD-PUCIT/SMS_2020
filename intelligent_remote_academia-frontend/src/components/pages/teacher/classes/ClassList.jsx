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
          return <LinkCard mainHeading={currentClass.className} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ClassList;

const classListConst = [
  { id: 1, className: '8th', section: 'Blue' },
  { id: 2, className: '5th', section: 'Blue' },
  { id: 2, className: '8th', section: 'Red' },
  { id: 2, className: '5th', section: 'Red' },
];
