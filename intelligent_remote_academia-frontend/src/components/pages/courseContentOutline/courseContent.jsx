import React, { Component } from 'react';
import { Avatar, Container, Divider, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBook } from '@fortawesome/free-solid-svg-icons';
import LinkIcon from '@material-ui/icons/Link';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import useStyles from './../../../styles/courseContentStyle';

class CourseContent extends Component {
  state = { content: [] };
  render() {
    return <ContentDisplay />;
  }
}

const ContentDisplay = () => {
  const classes = useStyles();
  const array = [
    'https://www.youtube.com/watch?v=fj2RX-h1k9E&list=PLOoogDtEDyvvw5bIV77qibe73XfdsM2lP&index=3&ab_channel=FeelFreetoLearn',
    'Eat',
    'Repeat',
  ];
  return (
    <div>
      <Container className={classes.root} maxWidth='md'>
        <div className={classes.title}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faBook} size='lg' />
          </Avatar>
          <div>
            <Typography variant='h4'>Course Content</Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              First Term • Dec 2, 2020
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
        <Typography>Content and Files</Typography>
        <Divider style={{ margin: '20px 0px' }} />
        <div className={classes.title}>
          <LinkIcon className={classes.icon} />
          <Typography variant='body1'>References</Typography>
        </div>

        <Timeline style={{ marginTop: '5px' }}>
          {array.map((item, index) => {
            return (
              <TimelineItem
                classes={{
                  missingOppositeContent: classes.missingOppositeContent,
                }}
                key={index}>
                <TimelineSeparator>
                  <TimelineDot />
                  {index + 1 < array.length && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <a href={item} target='_blank'>
                    {item}
                  </a>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </div>
  );
};
export default CourseContent;
