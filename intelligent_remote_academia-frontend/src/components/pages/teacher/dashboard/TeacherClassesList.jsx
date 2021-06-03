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
import LaunchIcon from '@material-ui/icons/Launch';

import ComponentHeading from '../../../common/ComponentHeading';

const TeacherClassesList = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={`shadow ${classes.container}`}>
        <ComponentHeading title="Your Classes" />
        <List dense={true}>
          {classesList.map((c, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={<Typography>{c.className}</Typography>}
                secondary={c.section}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end">
                  <LaunchIcon fontSize="small" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
};

export default TeacherClassesList;

const useStyles = makeStyles({
  container: {
    padding: 20,
    height: 300,
    overflow: 'auto !important',
  },
});

const classesList = [
  {
    className: '8th',
    section: 'Blue',
  },
  {
    className: '8th',
    section: 'Blue',
  },
  {
    className: '8th',
    section: 'Blue',
  },
  {
    className: '8th',
    section: 'Blue',
  },
  {
    className: '8th',
    section: 'Blue',
  },
  {
    className: '8th',
    section: 'Blue',
  },
];
