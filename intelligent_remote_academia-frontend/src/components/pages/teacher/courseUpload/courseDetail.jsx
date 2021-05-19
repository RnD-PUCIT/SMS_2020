import React from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Typography,
  Chip,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { useLocation } from "react-router-dom";
import useStyles from "./../../../../styles/courseContentStyle";

const CourseDetails = () => {
  const location = useLocation();
  const content = location.state.selectedContent;
  const date = new Date(content.date);
  const classes = useStyles();

  if (content) {
    return (
      <React.Fragment>
        <Typography variant="h4">Details</Typography>
        <Box display="flex" className="u_mt_small" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="outlined" color="primary">
            Delete
          </Button>
        </Box>
        <Paper className="paper_padding--sm u_mt_tiny clearfix">
          <Typography variant="h6">
            {content.title}
            <span
              color="textSecondary"
              style={{ float: "right", marginRight: "10px" }}
            >
              <Chip
                label={content.status ? "Completed" : "Not Completed"}
                color={content.status ? "primary" : "secondary"}
                size="small"
              />
            </span>
          </Typography>

          <Divider style={{ margin: "10px 0" }} />
          <Paper variant="outlined" className="p-3">
            <Typography>{content.description}</Typography>
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
                    href={content.references}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.references}
                  </a>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
          <Typography
            color="textSecondary"
            style={{ float: "right", marginTop: "5px" }}
          >
            Date Posted: {date.toDateString()}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
  return null;
};

export default CourseDetails;
