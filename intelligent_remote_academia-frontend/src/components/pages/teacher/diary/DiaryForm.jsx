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
import { ListItemIcon, ListItemText, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import SimpleMenu from '../../../common/menu/SimpleMenu';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import * as Yup from 'yup';
import { useFormik } from 'formik';

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

const DiaryForm = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenuLinkClick = () => {};

  const formik = useFormik({
    initialValues: {
      diaryTitle: '',
    },
    validationSchema: Yup.object({
      diaryTitle: Yup.string().required('Diary Title is required!'),
    }),
    onSubmit: async (values) => {
      alert('submitted');
    },
  });

  return (
    <React.Fragment>
      <h1>Diary Form</h1>
      <Button color="primary" variant="contained" onClick={handleClickOpen}>
        New Diary
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
                Post New Diary Material
              </Typography>
              <Button
                color="default"
                variant="contained"
                // onClick={handleClose}
                type="submit"
              >
                Post
              </Button>
            </Toolbar>
          </AppBar>
          <div className={classes.formBody}>
            <TextField
              id="diaryTitle"
              autoFocus
              fullWidth
              variant="outlined"
              label="Diary Title"
              className={classes.textField}
              value={formik.values.diaryTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.diaryTitle ? formik.errors.diaryTitle : ''
              }
              error={
                formik.touched.diaryTitle && Boolean(formik.errors.diaryTitle)
              }
            />
            <TextField
              multiline
              fullWidth
              rows={15}
              variant="outlined"
              label="Diary Content"
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
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default DiaryForm;
