import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert, AlertTitle, Autocomplete } from '@material-ui/lab';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import http from '../../../../services/httpService';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ClassSubjectAllocation = () => {
  const [classesList, setClassesList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [selectedClassSubjects, setSelectedClassSubjects] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await http.get('/classes/getClassesList');
        setClassesList(response.data);

        response = await http.get('/subjects/getSubjectsList');
        setSubjectsList(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      selectedClass: '',
      selectedSubjects: '',
    },
    validationSchema: Yup.object({
      selectedClass: Yup.string().required('Please select a class'),
      selectedSubjects: Yup.string().required('Please add atleast 1 subject'),
    }).nullable(),
    onSubmit: async (values) => {
      alert('clicked');
      console.log(values);
    },
  });

  const handleClassChange = async () => {
    const { data } = await http.get(
      `classes/getAllocatedSubjects?classId=${formik.values.selectedClass.id}`
    );

    setSelectedClassSubjects(data);
  };

  return (
    <React.Fragment>
      <h1>Allocate Subjects to Class</h1>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper className="paper_padding--sm u_mt_small">
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6">Select Class</Typography>
              <Divider style={{ margin: '10px 0 20px 0' }} />
              <SearchClassField
                formik={formik}
                display="className"
                id="selectedClass"
                label="Class"
                options={classesList}
                onClassChange={handleClassChange}
              />

              <Typography variant="h6" className="u_mt_small">
                Select Subjects to Allocate
              </Typography>
              <Divider style={{ margin: '10px 0 20px 0' }} />

              <Grid container>
                <Grid xs={8}>
                  <SearchSubjectsField
                    formik={formik}
                    options={subjectsList}
                    id="selectedSubjects"
                    label="Subjects"
                    display="subjectName"
                  />
                </Grid>
                <Grid xs={4}></Grid>
              </Grid>

              <Box
                display="flex"
                justifyContent="flex-end"
                className="u_mt_small"
              >
                <Button variant="contained" color="primary" type="submit">
                  Save Changes
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className="paper_padding--sm u_mt_small">
            {!selectedClassSubjects && (
              <Alert severity="warning">
                <AlertTitle>No class selected</AlertTitle>
                Select a class to show the allocated subjects.
              </Alert>
            )}
            {selectedClassSubjects && (
              <React.Fragment>
                <Typography variant="h6">Allocated Subjects</Typography>
                <Divider style={{ margin: '10px 0 20px 0' }} />
                <List>
                  {selectedClassSubjects.map((subject, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemText primary={subject} />
                      </ListItem>
                    );
                  })}
                </List>
              </React.Fragment>
            )}
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClassSubjectAllocation;

const SearchClassField = ({
  formik,
  id,
  label,
  options,
  display,
  onClassChange,
}) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
        onClassChange();
      }}
      getOptionLabel={(option) => option[display]}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          {`${option.className} (${option.section})`}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          id={id}
          fullWidth
          variant="outlined"
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};

const SearchSubjectsField = ({ formik, id, label, options, display }) => {
  return (
    <Autocomplete
      multiple
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
      }}
      disableCloseOnSelect
      getOptionLabel={(option) => option.subjectName}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.subjectName}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          placeholder="Search for subjects"
          id={id}
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};
