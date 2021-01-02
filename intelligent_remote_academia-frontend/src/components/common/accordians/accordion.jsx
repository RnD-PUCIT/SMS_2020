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

import { getMonths } from '../../constants/calendarConsts';
import DoughnutGraph from '../graphs/graphs';

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
    // borderTopLeftRadius: '4px',
    // borderTopRightRadius: '4px',
  },
  innerTitle: {
    paddingRight: '15px',
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
              <DoughnutGraph statusArray={statusArray} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const SimpleAccordion = ({ title, description, status, date }) => {
  const classes = useStyles();
  const months = getMonths();
  const fullDate = new Date(date);
  console.log('Date', fullDate);
  return (
    <Accordion className={classes.innerRoot} square>
      <AccordionSummary className={classes.summary}>
        <Typography className={classes.innerTitle}>{title}</Typography>
        <Chip
          label={status ? 'Completed' : 'Not Completed'}
          color={status ? 'primary' : 'secondary'}
          size='small'
        />
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography className={classes.innerTitle}>{description}</Typography>
        <Chip
          label={
            months[fullDate.getMonth()].name +
            ' ' +
            fullDate.getDate() +
            ', ' +
            fullDate.getFullYear()
          }
          variant='outlined'
          size='small'
        />
      </AccordionDetails>
    </Accordion>
  );
};

export { AccordionContainer, SimpleAccordion };
