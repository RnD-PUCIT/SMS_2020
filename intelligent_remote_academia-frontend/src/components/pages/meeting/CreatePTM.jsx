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
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Paper,
  Select,
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
  const [duration, setDuration] = useState(meetingDurations[1].value);

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

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
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
                  <Grid container spacing={5}>
                    <Grid item sm={7} xs={12}>
                      <Typography
                        variant="h6"
                        color="primary"
                        className="u_mb_tiny"
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
                        <FormControl className={classes.formControl}>
                          <InputLabel id="duration-label">Duration</InputLabel>
                          <Select
                            labelId="duration-label"
                            value={duration}
                            onChange={handleDurationChange}
                            placeholder="Meeting Duration"
                          >
                            {meetingDurations.map((time, index) => (
                              <MenuItem key={index} value={time.value}>
                                {time.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                      {/* Participants details */}
                      <Typography
                        variant="h6"
                        color="primary"
                        className="u_mt_medium"
                      >
                        Participant Details
                      </Typography>
                      <div className={classes.eventTimeContainer}>
                        <Autocomplete
                          options={classList}
                          className={`${classes.autoCompleteField} autocomplete`}
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
                              size="small"
                              placeholder="Select Class"
                              value={values.classId}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={touched.classId ? errors.classId : ""}
                              error={touched.classId && Boolean(errors.classId)}
                            />
                          )}
                        />
                        <Autocomplete
                          multiple
                          className={`${classes.autoCompleteField} autocomplete`}
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
                                  touched.parentsId && Boolean(errors.parentsId)
                                }
                              />
                            );
                          }}
                        />
                      </div>
                      <div className={classes.optionsContainer}>
                        <Button
                          disabled={selectedClass ? false : true}
                          variant="contained"
                          onClick={() => setSelectedParticipants(parentsList)}
                        >
                          schedule meeting for all
                        </Button>
                      </div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
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
      paddingBottom: 15,
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
  formControl: {
    minWidth: 200,
  },
  autoCompleteField: {
    width: "41%",
    display: "inline-block",
  },
  optionsContainer: {
    marginTop: 10,
  },
}));

const meetingDurations = [
  { value: 15, name: "15 mins" },
  { value: 30, name: "30 mins" },
  { value: 45, name: "45 mins" },
  { value: 60, name: "1 hr" },
  { value: 90, name: "1.5 hrs" },
  { value: 120, name: "2 hrs" },
];
