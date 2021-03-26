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
  Chip,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { terms } from '../../../constants/outlineTermsConsts';
import CourseContentForm from './courseContentForm';
import { useHistory } from 'react-router-dom';

import CourseDetails from './courseDetail';

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

const TermsList = ({ courseData, setCourseData }) => {
  return (
    <Paper className='paper_padding--sm u_mt_small'>
      {courseData.length !== 0 &&
        terms.map((term, index) => {
          return (
            <TermTypes
              key={index}
              termName={term.name}
              termData={courseData.filter((data) => data.termid === term.id)}
              courseData={courseData}
              setCourseData={setCourseData}
            />
          );
        })}
    </Paper>
  );
};

const TermTypes = ({ termName, termData, courseData, setCourseData }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.termHeadingRoot}>
        <h2 className={classes.termHeading}>{termName}</h2>
        <span className={classes.floatRight}>
          <CourseContentForm
            termName={termName}
            selectedtermContent={termData[0]}
            courseData={courseData}
            setCourseData={setCourseData}
          />
        </span>
      </div>
      <div>
        <TermContentList currentTermData={termData[0]} />
      </div>
    </>
  );
};

const TermContentList = ({ currentTermData }) => {
  const history = useHistory();

  const handleListItemClick = (selectedTermContent, termid) => {
    const url = `${history.location.pathname}/term/${termid}/${selectedTermContent.title}`;
    history.push({
      pathname: url,
      state: { selectedContent: selectedTermContent },
    });
  };

  if (currentTermData.details.length === 0) {
    return (
      <div className='u_p_small'>
        <Typography>No content added yet.</Typography>
      </div>
    );
  }
  return (
    <List component='nav' style={{ padding: '0' }}>
      {currentTermData.details.map((data, index) => (
        <ListItem
          button
          key={index}
          style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}
          onClick={() => {
            handleListItemClick(data, currentTermData.termid);
          }}>
          <ListItemText>
            {data.title}
            <span
              color='textSecondary'
              style={{ float: 'right', marginRight: '10px' }}>
              <Chip
                label={data.status ? 'Completed' : 'Not Completed'}
                color={data.status ? 'primary' : 'secondary'}
                size='small'
              />
            </span>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge='end'>
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TermsList;
