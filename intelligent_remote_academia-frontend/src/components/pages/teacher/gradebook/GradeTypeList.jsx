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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GradedActivityForm from './GradedActivityForm';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  gradeHeadingRoot: {
    borderBottom: '1px solid black',
    clear: 'both',
  },
  gradeHeading: {
    display: 'inline-block',
    padding: '20px',
    margin: '0',
  },
  floatRight: {
    float: 'right',
    marginTop: '20px',
  },
});

const GradeTypeList = ({ gradeTypeList, setGradeTypeList }) => {
  return (
    <Paper className="paper_padding--sm u_mt_small">
      {gradeTypeList.map((gradeType, index) => {
        return (
          <GradeTypeHeading
            key={index}
            gradeType={gradeType}
            gradeTypeList={gradeTypeList}
            setGradeTypeList={setGradeTypeList}
          />
        );
      })}
    </Paper>
  );
};

export default GradeTypeList;

const GradeTypeHeading = ({ gradeType, gradeTypeList, setGradeTypeList }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.gradeHeadingRoot}>
        <h2 className={classes.gradeHeading}>{gradeType.gradeName}</h2>
        <span className={classes.floatRight}>
          <GradedActivityForm
            selectedGradeType={gradeType}
            gradeTypeList={gradeTypeList}
            setGradeTypeList={setGradeTypeList}
          />
        </span>
      </div>
      <div>
        <GradedActivityList currentGradeType={gradeType} />
      </div>
    </React.Fragment>
  );
};

const GradedActivityList = ({ currentGradeType }) => {
  const history = useHistory();

  const handleListItemClick = (selectedActivity) => {
    const url = `${history.location.pathname}/mark?activity=${selectedActivity.activityTitle}`;
    history.push(url);
  };

  if (currentGradeType.activities.length === 0) {
    return (
      <div className="u_p_small">
        <Typography>No graded activity added yet.</Typography>
      </div>
    );
  }
  return (
    <List component="nav" style={{ padding: '0' }}>
      {currentGradeType.activities.map((grade, index) => (
        <ListItem
          button
          key={index}
          style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}
          onClick={() => {
            handleListItemClick(grade);
          }}
        >
          <ListItemText>
            {grade.activityTitle}
            <Typography
              color="textSecondary"
              style={{ float: 'right', marginRight: '10px' }}
            >
              {`${grade.activityMarks} marks`}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end">
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};
