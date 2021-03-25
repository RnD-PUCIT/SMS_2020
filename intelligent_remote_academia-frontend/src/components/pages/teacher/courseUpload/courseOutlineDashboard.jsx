import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { terms } from '../../../constants/outlineTermsConsts';
import CourseContentForm from './courseContentForm';

const useStyles = makeStyles({
  termHeadingRoot: {
    borderBottom: '1px solid black',
    clear: 'both',
  },
  termHeading: {
    display: 'inline-block',
    padding: '20px',
    margin: '0',
  },
  floatRight: {
    float: 'right',
    marginTop: '20px',
  },
});

const CourseOutlineDashboard = () => {
  return (
    <Paper className='paper_padding--sm u_mt_small'>
      {terms.map((term, index) => {
        return <TermTypesHeading key={index} termName={term.name} />;
      })}
    </Paper>
  );
};

const TermTypesHeading = ({ termName }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.termHeadingRoot}>
        <h2 className={classes.termHeading}>{termName}</h2>
        <span className={classes.floatRight}>
          <CourseContentForm />
        </span>
      </div>
    </React.Fragment>
  );
};
export default CourseOutlineDashboard;
