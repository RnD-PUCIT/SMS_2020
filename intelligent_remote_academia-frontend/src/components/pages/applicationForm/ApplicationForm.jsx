import React from 'react';
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import ReactQuill from 'react-quill';

import useStyles from '../../../styles/applicationFornStyle';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'list',
  'bullet',
  'background',
];

const ApplicationForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.root}>
        <Typography variant="h5" align="center">
          Application Form
        </Typography>

        <Divider style={{ margin: '15px 0' }} />

        <Grid container spacing={1} style={{ marginTop: '15px' }}>
          <Grid item md={8}>
            <form>
              <TextField
                variant="outlined"
                label="Subject"
                placeholder="Enter your subject here"
                fullWidth
              />
              <div style={{ marginTop: '10px' }}>
                <ReactQuill
                  className="application-editor"
                  modules={modules}
                  formats={formats}
                />
              </div>

              <Button
                variant="contained"
                fullWidth
                color="primary"
                style={{ marginTop: '10px' }}
              >
                Submit Application
              </Button>
            </form>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6" align="center">
              Upload additional files here
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default ApplicationForm;
