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
  Box,
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
  return <Slide direction='up' ref={ref} {...props} />;
});

const GradedActivityForm = ({
  selectedGradeType,
  setGradeTypeList,
  gradeTypeList,
}) => {
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
      gradeTypeName: selectedGradeType.gradeName,
      activityMarks: 0,
      instructions: '',
    },
    validationSchema: Yup.object({
      activityTitle: Yup.string().required('Activity Title is required!'),
      activityMarks: Yup.string().required('Activity Marks are required!'),
    }),
    onSubmit: async (values) => {
      // add data to state variable
      const index = gradeTypeList.indexOf(selectedGradeType);

      const newGradeTypeList = [...gradeTypeList];
      newGradeTypeList[index].activities.push(values);

      setGradeTypeList(newGradeTypeList);

      setStatus('success');
      setMessage('Graded activity created successfully!');
      setTimeout(() => {
        handleClose();
      }, 1000);
    },
  });

  return (
    <React.Fragment>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        New
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <form onSubmit={formik.handleSubmit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge='start' color='inherit' onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography variant='h6' className={classes.title}>
                New {selectedGradeType.gradeName} Activity
              </Typography>
              <Button variant='contained' type='submit'>
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
          <Container className='u_mt_small'>
            <TextField
              id='activityTitle'
              autoFocus
              fullWidth
              variant='outlined'
              label='Activity Title'
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
            <Box display='flex'>
              <TextField
                style={{ width: '50%', marginRight: '5px' }}
                disabled
                id='gradeTypeName'
                variant='outlined'
                label='Grade Type'
                className={classes.textField}
                value={formik.values.gradeTypeName}
                helperText={
                  formik.touched.gradeTypeName
                    ? formik.errors.gradeTypeName
                    : ''
                }
                error={
                  formik.touched.gradeTypeName &&
                  Boolean(formik.errors.gradeTypeName)
                }
              />
              <TextField
                style={{ width: '50%', marginLeft: '5px' }}
                id='activityMarks'
                variant='outlined'
                label='Total Marks'
                type='number'
                className={classes.textField}
                value={formik.values.activityMarks}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={
                  formik.touched.activityMarks
                    ? formik.errors.activityMarks
                    : ''
                }
                error={
                  formik.touched.activityMarks &&
                  Boolean(formik.errors.activityMarks)
                }
              />
            </Box>
            <TextField
              id='instructions'
              multiline
              fullWidth
              rows={10}
              variant='outlined'
              label='Instructions'
              placeholder='Instructions (optional)'
              className={classes.textField}
              value={formik.values.instructions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <SimpleMenu
              button={{
                color: 'primary',
                variant: 'contained',
                text: 'Attach',
              }}>
              <MenuItem onClick={handleMenuLinkClick}>
                <ListItemIcon style={{ minWidth: 'auto', marginRight: '15px' }}>
                  <AttachFileIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='File' />
              </MenuItem>
              <MenuItem onClick={handleMenuLinkClick}>
                <ListItemIcon style={{ minWidth: 'auto', marginRight: '15px' }}>
                  <LinkIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText primary='Link' />
              </MenuItem>
            </SimpleMenu>
          </Container>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default GradedActivityForm;
