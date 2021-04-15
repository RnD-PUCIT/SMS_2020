import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { getMonths } from '../../constants/calendarConsts';
import DoughnutGraph from '../graphs/graphs';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  outerRoot: {
    margin: '6px',
  },
  innerRoot: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
  },
  summary: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  heading: {
    backgroundColor: '#2875c7',
    color: 'white',
    borderRadius: '4px',
  },
  div: {
    display: 'flex',
  },
  button: {
    marginLeft: 'auto',
  },
  chip: {
    marginLeft: '2px',
  },
}));

const AccordionContainer = ({ statusArray, name, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.outerRoot}>
      <Accordion>
        <AccordionSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}>
          <Typography variant='subtitle1'>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs>
              {children}
            </Grid>
            <Grid item xs>
              {statusArray && <DoughnutGraph statusArray={statusArray} />}
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const SimpleAccordion = ({ subjectItem, termName }) => {
  const classes = useStyles();
  const months = getMonths();
  const { courseOutlines } = subjectItem;
  const { title, description, status, date } = courseOutlines;
  const fullDate = new Date(date);
  subjectItem.date =
    months[fullDate.getMonth()].name +
    ' ' +
    fullDate.getDate() +
    ', ' +
    fullDate.getFullYear();
  return (
    <Accordion className={classes.innerRoot} square>
      <AccordionSummary className={classes.summary}>
        <Typography>{title}</Typography>
        <Chip
          label={status ? 'Completed' : 'Not Completed'}
          color={status ? 'primary' : 'secondary'}
          size='small'
          className={classes.chip}
        />
      </AccordionSummary>
      <Divider />
      <AccordionDetails className={classes.div}>
        <Typography>{description}</Typography>
        <Chip
          label={subjectItem.date}
          variant='outlined'
          size='small'
          className={classes.chip}
        />
        <Link
          to={{
            pathname: '/courseContent',
            state: { subjectItem: subjectItem, termName: termName },
          }}
          className={classes.button}>
          <Button variant='contained' size='small' disableElevation>
            View More
          </Button>
        </Link>
      </AccordionDetails>
    </Accordion>
  );
};

export { AccordionContainer, SimpleAccordion };
