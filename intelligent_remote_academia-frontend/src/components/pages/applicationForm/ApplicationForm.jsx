import React, { useState } from 'react';
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
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const [subjectLine, setSubjectLine] = useState('');
  const [applicationBody, setApplicationBody] = useState('');

  const handleApplicationContentChange = (content) => {
    setApplicationBody(content);
  };

  const handleSubmission = () => {
    if (subjectLine === '' || subjectLine.length === 0) {
      alert('Enter Subject Line');
    } else {
      const formData = new FormData();
      formData.append('subjectLine', subjectLine);
      formData.append('applicationBody', applicationBody);
    }
  };

  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.root}>
        <Typography variant="h5" align="center">
          Application Form
        </Typography>

        <Divider style={{ margin: '15px 0' }} />

        <Grid container spacing={3} style={{ marginTop: '15px' }}>
          <Grid item md={8}>
            <TextField
              variant="outlined"
              label="Subject Line"
              placeholder="Enter your subject here"
              fullWidth
              required
              onChange={(event) => {
                setSubjectLine(event.target.value);
              }}
            />
            <div style={{ marginTop: '10px' }}>
              <ReactQuill
                className="application-editor"
                modules={modules}
                formats={formats}
                onChange={handleApplicationContentChange}
              />
            </div>

            <Button
              variant="contained"
              fullWidth
              color="primary"
              style={{ marginTop: '10px' }}
              onClick={handleSubmission}
            >
              Submit Application
            </Button>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h6" align="center">
              Upload additional files
            </Typography>
            <Paper className={classes.uploadPaper} variant="outlined">
              <div
                className={classes.dottedBorder}
                style={{ textAlign: 'center' }}
              >
                <FontAwesomeIcon icon={faDownload} size="4x" />
                <Button
                  variant="contained"
                  component="label"
                  fullWidth
                  style={{ marginTop: '15px' }}
                >
                  Choose files
                  <input type="file" hidden />
                </Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default ApplicationForm;
