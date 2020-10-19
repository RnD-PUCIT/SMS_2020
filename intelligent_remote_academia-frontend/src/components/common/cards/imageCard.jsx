import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  media: {
    height: 110,
  },
});

const Cards = ({ subjectName, teacherName, studentId, classId, subjectID }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // insert image here
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h2'>
              <Link to={`/subjects/${studentId}/${subjectID}/${classId}`}>
                {subjectName}
              </Link>
            </Typography>
            <Typography
              variant='subtitle1'
              color='textSecondary'
              component='span'>
              {teacherName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Cards;
