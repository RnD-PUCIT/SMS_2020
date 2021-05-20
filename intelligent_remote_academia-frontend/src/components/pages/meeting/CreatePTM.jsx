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
import { Avatar, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import * as Yup from "yup";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreatePTM({ open, onClose }) {
  const classes = useStyles();
  const [classList, setClassList] = useState([]);
  const [parentsList, setParentsList] = useState([]);

  useEffect(() => {}, []);

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
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className="u_mb_small"
                      >
                        Participant Details
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Autocomplete
                            options={classList}
                            onChange={(event, newValue) => {
                              values.classId = newValue;
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
                            getOptionLabel={(option) => option.title}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>
                                <Avatar style={{ marginRight: "10px" }}>
                                  {option.firstName.charAt(0)}
                                </Avatar>
                                {`${option.firstName} ${option.lastName} (${option.cnic})`}
                              </React.Fragment>
                            )}
                            onChange={(event, value) => {
                              values.parentsId = value;
                            }}
                            renderOption={(option, { selected }) => (
                              <React.Fragment>{option.title}</React.Fragment>
                            )}
                            renderInput={(params) => {
                              return (
                                <TextField
                                  {...params}
                                  variant="filled"
                                  size="small"
                                  id="parentsId"
                                  placeholder="Add Parents"
                                  className={classes.placeholderField}
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
}));
