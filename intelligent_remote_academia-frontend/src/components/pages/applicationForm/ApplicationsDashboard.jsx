import React, { Component } from "react";
import {
  AccordionActions,
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, useHistory } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";
import http from "../../../services/httpService";
import FileSaver from "file-saver";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

  accordionDiv: {
    marginTop: "20px",
  },
  accordianSummary: {
    background: "#F1F1F1",
  },

  accordianFooter: {
    display: "block",
  },
}));

class ApplicationsDashboard extends Component {
  state = {
    studentApplications: [],
    studentApplicationFiles: [],
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
      <Paper style={{ padding: "20px" }} variant="outlined" square>
        <NewApplicationButton />
        <ApplicationsList
          studentApplications={this.state.studentApplications}
          studentApplicationFiles={this.state.studentApplicationFiles}
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
      const { studentApplications, studentApplicationFiles } =
        studentApplicationData;

      this.setState({ studentApplications, studentApplicationFiles });
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
          history.push("/applications/new");
        }}
      >
        New Application
      </Button>
    </Grid>
  );
};

const ApplicationsList = ({ studentApplications, studentApplicationFiles }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (studentApplications.length === 0) {
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
      {studentApplications.map((application, index) => {
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
            {DisplayAdditionalFiles(studentApplicationFiles[index], classes)}
          </Accordion>
        );
      })}
    </div>
  );
};

function DisplayAdditionalFiles(studentApplicationFiles, classes) {
  if (studentApplicationFiles.length !== 0) {
    return (
      <React.Fragment>
        <Divider />
        <AccordionActions className={classes.accordianFooter}>
          <Typography color="textSecondary">
            Additional Files Uploaded
          </Typography>
          <ul>
            {studentApplicationFiles.map((file, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() => handleFileDownlad(file.id, file.fileName)}
                  >
                    {file.fileName}
                  </div>
                </li>
              );
            })}
          </ul>
        </AccordionActions>
      </React.Fragment>
    );
  }
}

async function handleFileDownlad(fileId, fileName) {
  const url = `/studentApplication/DownloadFile?fileId=${fileId}`;

  try {
    const { data } = await http.get(url, {
      responseType: "blob",
    });
    await FileSaver.saveAs(data, fileName);
    console.log(data);
  } catch (ex) {}
}

export default ApplicationsDashboard;
