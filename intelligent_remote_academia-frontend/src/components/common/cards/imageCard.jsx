import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SubImg from '../../../static/images/subjects/img_code.jpg';

const useStyles = makeStyles({
  media: {
    height: 110,
  },
});

const Cards = ({ subject, studentId, classId, sessionId }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link
        to={{
          pathname: '/subjects/' + subject.subjectSlug,
          search:
            'studentId=' +
            studentId +
            '&classId=' +
            classId +
            '&subjectId=' +
            subject.subjectId +
            '&sessionId=' +
            sessionId,
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={SubImg} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {subject.subjectName}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="span"
              >
                {subject.teacherName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default Cards;
