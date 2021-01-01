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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleApplicationContentChange = (content) => {
    setApplicationBody(content);
  };

  const handleSubmission = () => {
    if (subjectLine.trim() === '' || subjectLine.length === 0) {
      setError(true);
      setErrorMessage('Please enter the subject line');
    } else if (applicationBody.trim() === '' || applicationBody.length === 0) {
      setError(true);
      setErrorMessage('Please enter the application body');
    } else {
      setErrorMessage('');
      const formData = new FormData();
      formData.append('subjectLine', subjectLine);
      formData.append('applicationBody', applicationBody);
    }
  };

  const handleFileChange = (event) => {
    const files = [...selectedFiles, event.target.files[0]];
    setSelectedFiles(files);
  };

  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.root}>
        <Typography variant="h5" align="center">
          Application Form
        </Typography>

        <Divider style={{ margin: '15px 0' }} />

        {error && (
          <Typography variant="p" style={{ color: '#F44336' }}>
            {errorMessage}
          </Typography>
        )}
        <Grid container spacing={3} style={{ marginTop: '1px' }}>
          <Grid item md={8} sm={12} xs={12}>
            <TextField
              variant="outlined"
              label="Subject Line"
              placeholder="Enter your subject here"
              fullWidth
              error={error}
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
          <Grid item md={4} sm={12} xs={12}>
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
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>

                <Typography>Files Uploaded</Typography>
                <ul>
                  {selectedFiles.map((file, index) => {
                    return <li>{file.name}</li>;
                  })}
                </ul>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default ApplicationForm;
