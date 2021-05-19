import React, { Component } from "react";
import { Avatar, Container, Divider, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBook } from "@fortawesome/free-solid-svg-icons";
import LinkIcon from "@material-ui/icons/Link";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

import useStyles from "./../../../styles/courseContentStyle";

class CourseContent extends Component {
  state = { content: [] };

  render() {
    const { subjectItem, termName } = this.props.location.state;
    return <ContentDisplay subjectItem={subjectItem} termName={termName} />;
  }
}

const ContentDisplay = ({ subjectItem, termName }) => {
  const classes = useStyles();
  const { courseOutlines, lectureContentFilesList, date } = subjectItem;
  const { title, description } = courseOutlines;
  return (
    <div>
      <Container className={classes.root} maxWidth="md">
        <div className={classes.title}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faBook} size="lg" />
          </Avatar>
          <div>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {termName} • {date}
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
        <Typography>{description}</Typography>

        <DisplayFileCards lectureContentFilesList={lectureContentFilesList} />

        <Divider style={{ margin: "20px 0px" }} />
        <div className={classes.title}>
          <LinkIcon className={classes.icon} />
          <Typography variant="body1">References</Typography>
        </div>
        <Timeline style={{ marginTop: "5px" }}>
          <TimelineItem
            classes={{
              missingOppositeContent: classes.missingOppositeContent,
            }}
          >
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <a
                href={courseOutlines.references}
                target="_blank"
                rel="noopener noreferrer"
              >
                {courseOutlines.references}
              </a>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </div>
  );
};

const DisplayFileCards = ({ lectureContentFilesList }) => {
  console.log("lectureContentFilesList", lectureContentFilesList);
  if (lectureContentFilesList.length === 0) {
    return (
      <div style={{ marginTop: "20px" }}>
        <Alert severity="info">
          <AlertTitle>Files Not Found!</AlertTitle>
          <Typography>
            No Files have been uploaded by the teacher yet.
          </Typography>
        </Alert>
      </div>
    );
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
      {lectureContentFilesList.map((file, index) => {
        return (
          <div style={{ marginTop: "20px" }}>
            <Card
              key={index}
              variant="outlined"
              onClick={() => {
                FileDownload(file);
              }}
            >
              <CardActionArea>
                <CardMedia style={{ height: 40, paddingTop: "5px" }} />
                <CardContent>
                  <Typography variant="subtitle1" component="h2">
                    {file.orginal_Name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </Grid>
  );
};

const FileDownload = (file) => {};
export default CourseContent;
