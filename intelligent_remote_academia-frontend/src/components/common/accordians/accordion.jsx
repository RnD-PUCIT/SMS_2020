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

const AccordionContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.outerRoot}>
      <Accordion>
        <AccordionSummary
          className={classes.heading}
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography variant='subtitle1'>First Term</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs>
              <SimpleAccordion />
              <SimpleAccordion />
            </Grid>
            <Grid item xs>
              <DoughnutGraph />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const SimpleAccordion = () => {
  const classes = useStyles();

  const handleClick = () => {};

  return (
    <Accordion className={classes.innerRoot} square onClick={handleClick}>
      <AccordionSummary
        aria-controls='panel1a-content'
        id='panel1a-header'
        className={classes.summary}>
        <Typography className={classes.innerTitle}>Chapter 1</Typography>
        <Chip label='Not Completed' color='secondary' size='small' />
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <Typography>Chapter Details</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionContainer;
