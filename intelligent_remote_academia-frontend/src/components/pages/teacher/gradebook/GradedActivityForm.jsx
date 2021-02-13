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
import {
  Container,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleMenu from '../../../common/menu/SimpleMenu';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Snackbar from '../../../common/snackbars/Snackbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  formBody: {
    padding: '40px',
  },
  textField: {
    margin: '10px 0',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GradedActivityForm = ({ selectedGradeType }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuLinkClick = () => {};

  const formik = useFormik({
    initialValues: {
      activityTitle: '',
    },
    validationSchema: Yup.object({
      activityTitle: Yup.string().required('Activity Title is required!'),
    }),
    onSubmit: async (values) => {
      setStatus('success');
      setMessage('Graded activity created successfully!');
      setTimeout(() => {
        handleClose();
      }, 5000);
    },
  });

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        New
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <form onSubmit={formik.handleSubmit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                New {selectedGradeType.gradeName} Activity
              </Typography>
              <Button variant="contained" type="submit">
                Create
              </Button>
            </Toolbar>
          </AppBar>
          {status && (
            <Snackbar
              type={status}
              message={message}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
          )}
          <Container className="u_mt_small">
            <TextField
              id="activityTitle"
              autoFocus
              fullWidth
              variant="outlined"
              label="Activity Title"
              className={classes.textField}
              value={formik.values.activityTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.activityTitle ? formik.errors.activityTitle : ''
              }
              error={
                formik.touched.activityTitle &&
                Boolean(formik.errors.activityTitle)
              }
            />
            <TextField
              multiline
              fullWidth
              rows={15}
              variant="outlined"
              label="Instructions"
              placeholder="Instructions (optional)"
              className={classes.textField}
            />
            <SimpleMenu
              button={{
                color: 'primary',
                variant: 'contained',
                text: 'Attach',
              }}
            >
              <MenuItem onClick={handleMenuLinkClick}>
                <ListItemIcon style={{ minWidth: 'auto', marginRight: '15px' }}>
                  <AttachFileIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="File" />
              </MenuItem>
              <MenuItem onClick={handleMenuLinkClick}>
                <ListItemIcon style={{ minWidth: 'auto', marginRight: '15px' }}>
                  <LinkIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Link" />
              </MenuItem>
            </SimpleMenu>
          </Container>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default GradedActivityForm;
