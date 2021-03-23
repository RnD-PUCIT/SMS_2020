import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DoneIcon from '@material-ui/icons/Done';

import { Avatar, Chip, Grid, ListItemAvatar } from '@material-ui/core';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    width: '100%',
    padding: '0',
  },
  attendanceBody: {
    padding: '50px',
  },
  attendanceTable: {
    marginTop: '10px',
    border: '1px solid rgba(224, 224, 224, 1)',
    borderRadius: '5px',
  },
  tableHeader: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    background: '#f0f0f0',
  },
  actionButtons: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  datePicker: {
    padding: '10px',
    cursor: 'pointer',
  },
  labelBlock: {
    display: 'block',
  },
  presentText: {
    color: 'rgb(113, 187, 48)',
    fontSize: '60px',
    textAlign: 'center',
  },
  absentText: {
    color: 'rgb(235, 57, 59)',
    fontSize: '60px',
    textAlign: 'center',
  },
  stats: {
    textAlign: 'center',
    lineHeight: '60px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function MarkAttendance(props) {
  // State variables
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);

  const { studentList } = props;

  const classes = useStyles();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log(checked);
    setOpen(false);
  };

  const handleSelectAll = () => {
    setChecked(studentList);
  };

  const handleClearAll = () => {
    setChecked([]);
  };

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={handleClickOpen}
        style={{ margin: '10px 0' }}>
        Mark Attendance
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'>
              <CloseIcon />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Mark Attendance
            </Typography>
            <Button color='default' variant='contained' onClick={handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.attendanceBody}>
          <Grid container>
            <Grid item md={4}>
              <label className={classes.labelBlock}>
                <Typography>Select Date:</Typography>
              </label>
              <DatePicker
                className={classes.datePicker}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </Grid>
            <Grid container item md={4}>
              <Grid item xs={6}>
                <div className={classes.stats}>
                  <Typography variant='h6'>Present</Typography>
                  <span className={classes.presentText}>{checked.length}</span>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.stats}>
                  <Typography variant='h6'>Absent</Typography>
                  <span className={classes.absentText}>
                    {studentList.length - checked.length}
                  </span>
                </div>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <div className={classes.actionButtons}>
                <Chip
                  label='Select All'
                  onClick={handleSelectAll}
                  icon={<DoneIcon />}
                />
                <Chip label='Clear All' onClick={handleClearAll} />
              </div>
            </Grid>
          </Grid>
          <div className={classes.attendanceTable}>
            <List className={classes.root}>
              <ListItem className={classes.tableHeader}>
                <ListItemIcon></ListItemIcon>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText>
                  <Grid container>
                    <Grid item xs={2}>
                      <span>Roll Number</span>
                    </Grid>
                    <Grid item xs={10}>
                      <span>Student Name</span>
                    </Grid>
                  </Grid>
                </ListItemText>
              </ListItem>
              {studentList.map((student) => {
                return (
                  <ListItem
                    key={student.id}
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(student)}
                    style={{
                      borderBottom: '1px solid rgba(224, 224, 224, 1)',
                    }}>
                    <ListItemIcon>
                      <Checkbox
                        edge='start'
                        checked={checked.indexOf(student) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemAvatar>
                      <Avatar>{student.firstName.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Grid container>
                        <Grid item xs={2}>
                          <span>{`${student.rollNumber}`}</span>
                        </Grid>
                        <Grid item xs={10}>
                          <span>{`${student.firstName} ${student.lastName}`}</span>
                        </Grid>
                      </Grid>
                    </ListItemText>
                    {/* <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                      <CommentIcon />
                    </IconButton>
                  </ListItemSecondaryAction> */}
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
