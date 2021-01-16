import React, { Component } from 'react';
import {
  AccordionActions,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, useHistory } from 'react-router-dom';
import { Alert, AlertTitle } from '@material-ui/lab';
import http from '../../../services/httpService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

  accordionDiv: {
    marginTop: '20px',
  },
  accordianSummary: {
    background: '#F1F1F1',
  },

  accordianFooter: {
    justifyContent: 'flex-start',
  },
}));

class ApplicationsDashboard extends Component {
  state = {
    studuentApplications: [],
    studuentApplicationFiles: [],
  };

  componentDidMount() {
    this.getApplications();
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStudent.id !== prevProps.selectedStudent.id) {
      this.getApplications();
    }
  }

  render() {
    return (
      <Paper style={{ padding: '20px' }} variant="outlined" square>
        <NewApplicationButton />
        <ApplicationsList
          studuentApplications={this.state.studuentApplications}
        />
      </Paper>
    );
  }

  getApplications = async () => {
    const studentId = this.props.selectedStudent.id;
    const url = `/studentApplication/?studentId=${studentId}`;

    try {
      const { data } = await http.get(url);
      const { studentApplicationData } = data;
      const {
        studuentApplications,
        studuentApplicationFiles,
      } = studentApplicationData;

      this.setState({ studuentApplications, studuentApplicationFiles });
    } catch (error) {}
  };
}

const NewApplicationButton = () => {
  const history = useHistory();
  return (
    <Grid container justify="flex-end">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push('/applications/new');
        }}
      >
        New Application
      </Button>
    </Grid>
  );
};

const ApplicationsList = ({ studuentApplications }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (studuentApplications.length === 0) {
    return (
      <div className={classes.accordionDiv}>
        <Alert severity="info">
          <AlertTitle>Hmm... Applications are empty!</AlertTitle>
          <Typography>
            Looks like you haven't submitted any application yet. You can find
            all of your submitted applications in this page, along with their
            status and submission date! <br />
            Send <Link to="applications/new">New Application</Link>
          </Typography>
        </Alert>
      </div>
    );
  }
  return (
    <div className={classes.accordionDiv}>
      {studuentApplications.map((application, index) => {
        return (
          <Accordion
            expanded={expanded === `${index}`}
            onChange={handleChange(`${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.accordianSummary}
            >
              <Grid container>
                <Grid item xs={8}>
                  <Typography className={classes.heading} variant="h6">
                    {application.subject}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle2" color="textSecondary">
                    {application.date}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Chip label={application.status} size="small" />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span
                  dangerouslySetInnerHTML={{ __html: application.content }}
                />
              </Typography>
            </AccordionDetails>
            <Divider />
            <AccordionActions className={classes.accordianFooter}>
              <Typography color="textSecondary">
                Additional Files Uploaded
              </Typography>
            </AccordionActions>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ApplicationsDashboard;

const applicationsConst = [
  {
    id: 1,
    subject: 'Leave Application',
    date: 'Decemeber 02, 2020',
    content:
      '<strong>Lorem ipsum dolor</strong> sit amet, consectetur adipisicing elit. Voluptas numquam sapiente debitis blanditiis suscipit magnam quia consequatur. Et at aliquam facere laudantium sint, doloribus molestiae, minima maxime, aut rem recusandae?',
    status: 'pending',
  },
  {
    id: 1,
    subject: 'Scholarship Application',
    date: 'Decemeber 02, 2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas numquam sapiente debitis blanditiis suscipit magnam quia consequatur. Et at aliquam facere laudantium sint, doloribus molestiae, minima maxime, aut rem recusandae?',
    status: 'pending',
    startDate: '',
    endDate: '',
  },
  {
    id: 1,
    subject: 'Section change application',
    date: 'Decemeber 02, 2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas numquam sapiente debitis blanditiis suscipit magnam quia consequatur. Et at aliquam facere laudantium sint, doloribus molestiae, minima maxime, aut rem recusandae?',
    status: 'pending',
  },
];
