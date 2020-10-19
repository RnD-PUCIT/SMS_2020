<<<<<<< HEAD
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
>>>>>>> 7adff9dfbd3b71d89f24187b1ccedb639dde592c

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
  },
  //   media: {
  //     height: 150,
  //   },
});

const Cards = ({ subjectName, teacherName, studentId, classId, subjectID }) => {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link to={`/subjects/${studentId}/${subjectID}/${classId}`}>
              {subjectName}
            </Link>
          </Typography>
          <Typography variant="h6" color="textSecondary" component="span">
            {teacherName}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
=======
    <Grid item xs={12} sm={4} md={3}>
      <Card
      // className={classes.root}
      >
        <CardActionArea>
          <CardMedia
            //   className={classes.media}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              <Link to={`/subjects/${studentId}/${subjectID}/${classId}`}>
                {subjectName}
              </Link>
            </Typography>
            <Typography variant='h6' color='textSecondary' component='span'>
              {teacherName}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
>>>>>>> 7adff9dfbd3b71d89f24187b1ccedb639dde592c
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </Grid>
  );
};

export default Cards;
