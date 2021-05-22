import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Formik } from "formik";
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import * as Yup from "yup";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import http from "../../../services/httpService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreatePTM({ open, onClose }) {
  const classes = useStyles();

  const [classList, setClassList] = useState([]);
  const [parentsList, setParentsList] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date());

  const fetchData = async () => {
    try {
      const { data: classListData } = await http.get(
        "/classes/getTeacherClasses"
      );

      setClassList(classListData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClassChange = async (selectedClass) => {
    if (!selectedClass) {
      setSelectedClass("");
      setSelectedParticipants([]);
      return;
    }

    setSelectedClass(selectedClass.id);
    const url = `parents/getParentsListForClass?classId=${selectedClass.id}`;
    try {
      const { data } = await http.get(url);

      setParentsList(data);
    } catch (error) {
      console.log(error);
      alert("Error fetching parents data");
    }
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create and Schedule PTM
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.body}>
          <Formik
            initialValues={{
              title: "",
              classId: "",
              parentsId: [],
            }}
          >
            {({ values, errors, touched, handleBlur, handleChange }) => (
              <form>
                <TextField
                  placeholder="Add Title"
                  fullWidth
                  className={classes.titleField}
                />
                <div className="u_mt_huge">
                  <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className="u_mb_small"
                      >
                        Event Details
                      </Typography>
                      <div className={classes.eventTimeContainer}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <DatePicker
                            variant="inline"
                            label="Meeting Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                          />
                          <TimePicker
                            variant="inline"
                            label="Start Time"
                            value={selectedDate}
                            onChange={handleDateChange}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className="u_mb_small"
                      >
                        Participant Details
                      </Typography>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <Autocomplete
                            options={classList}
                            onChange={(event, newValue) => {
                              values.classId = newValue;
                              handleClassChange(newValue);
                            }}
                            getOptionLabel={(option) => option.className}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                {`${option.className} (${option.section})`}
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                className={classes.placeholderField}
                                id="classId"
                                variant="filled"
                                size="small"
                                placeholder="Select Class"
                                value={values.classId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                  touched.classId ? errors.classId : ""
                                }
                                error={
                                  touched.classId && Boolean(errors.classId)
                                }
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Autocomplete
                            multiple
                            options={parentsList}
                            getOptionLabel={(option) => option.parentName}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                <Avatar style={{ marginRight: "10px" }}>
                                  {option.parentName.charAt(0)}
                                </Avatar>
                                {`${option.parentName} (${option.studentName})`}
                              </React.Fragment>
                            )}
                            onChange={(event, value) => {
                              values.parentsId = value;
                              setSelectedParticipants(value);
                            }}
                            renderInput={(params) => {
                              return (
                                <TextField
                                  {...params}
                                  variant="filled"
                                  size="small"
                                  id="parentsId"
                                  placeholder="Add Parents"
                                  className={`${classes.placeholderField} no-input-field-chips`}
                                  value={values.parentsId}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  helperText={
                                    touched.parentsId ? errors.parentsId : ""
                                  }
                                  error={
                                    touched.parentsId &&
                                    Boolean(errors.parentsId)
                                  }
                                />
                              );
                            }}
                          />
                        </Grid>
                      </Grid>

                      <Button disabled={selectedClass ? false : true}>
                        schedule meeting for all
                      </Button>

                      <Paper
                        className={`shadow ${classes.participantsListContainer}`}
                      >
                        <Typography variant="h6" color="primary">
                          Added Participants
                        </Typography>
                        <Divider className="u_mt_tiny u_mb_small" />
                        {!selectedParticipants.length && (
                          <div className={classes.notAdded}>
                            <Typography color="textSecondary">
                              No participant added yet.
                            </Typography>
                          </div>
                        )}
                        <List>
                          {selectedParticipants.map((participant, index) => (
                            <ListItem key={index}>
                              <ListItemAvatar>
                                <Avatar>
                                  {participant.parentName.charAt(0)}
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={participant.parentName}
                                secondary={`Student: ${participant.studentName}`}
                              />
                              <ListItemSecondaryAction>
                                <IconButton edge="end">
                                  <CloseIcon />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  body: {
    padding: "20px 50px",
  },
  titleField: {
    "& input": {
      fontSize: 25,
    },
  },
  placeholderField: {
    "& div": {
      padding: "0 !important",
    },
    "& input": {
      padding: "15px !important",
    },
  },
  parentsContainer: {
    display: "flex",
  },
  participantsListContainer: {
    padding: "20px 40px",
  },
  notAdded: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
  },
  eventTimeContainer: {
    "& *": {
      margin: 5,
    },
  },
}));
