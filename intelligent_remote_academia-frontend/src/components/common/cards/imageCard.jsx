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
