import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Chip,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "../../../../services/httpService";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { useHistory } from "react-router";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ClassSubjectAllocation = () => {
  const [teachersList, setTeachersList] = useState([]);
  const [classesList, setClassesList] = useState([]);
  const [subjectsList, setSubjectsList] = useState([]);
  const [classSubjectArray, setClassSubjectArray] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await http.get("/teachers/getTeachersList");
        setTeachersList(response.data);

        response = await http.get("/classes/getClassesList");
        setClassesList(response.data);

        response = await http.get("/subjects/getSubjectsList");
        setSubjectsList(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      selectedTeacher: "",
      selectedClass: "",
      selectedSubjects: "",
    },
    validationSchema: Yup.object({
      selectedTeacher: Yup.string().required("Please select a teacher"),
      selectedClass: Yup.string().required("Please select a class"),
      selectedSubjects: Yup.string().required("Please add atleast 1 subject"),
    }).nullable(),

    onSubmit: async (values) => {
      const arr = [...classSubjectArray];
      const classSubject = {
        selectedClass: formik.values.selectedClass,
        selectedSubjects: formik.values.selectedSubjects,
      };
      arr.push(classSubject);

      const model = [];
      arr.forEach((classSub) => {
        const {
          selectedClass: currentClass,
          selectedSubjects: currentSubjects,
        } = classSub;
        currentSubjects.forEach((subject) => {
          const temp = {
            teacherId: values.selectedTeacher.id,
            subjectId: subject.id,
            classId: currentClass.id,
          };
          model.push(temp);
        });
      });
      try {
        await http.post("/teachers/allocateClassAndSubjects", model);
        history.replace("/teachers");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleNewClassSubject = () => {
    const arr = [...classSubjectArray];
    const classSubject = {
      selectedClass: formik.values.selectedClass,
      selectedSubjects: formik.values.selectedSubjects,
    };
    arr.push(classSubject);
    setClassSubjectArray(arr);
  };
  return (
    <React.Fragment>
      <h1>Allocate Classes to Teacher</h1>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper className="paper_padding--sm u_mt_small">
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h6">Select Teacher</Typography>
              <Divider style={{ margin: "10px 0 20px 0" }} />
              <SearchTeacherField
                formik={formik}
                display="firstName"
                id="selectedTeacher"
                label="Teacher"
                options={teachersList}
              />
              <Grid container spacing={3}>
                <Grid item xs={5} md={4}>
                  <Typography variant="h6" className="u_mt_small">
                    Select Class to Allocate
                  </Typography>
                  <Divider style={{ margin: "10px 0 20px 0" }} />
                </Grid>
                <Grid item xs={7} md={8}>
                  <Typography variant="h6" className="u_mt_small">
                    Select Subjects to Allocate
                  </Typography>
                  <Divider style={{ margin: "10px 0 20px 0" }} />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={5} md={4}>
                  <SearchClassField
                    formik={formik}
                    options={classesList}
                    id="selectedClass"
                    label="Class"
                    display="className"
                  />
                </Grid>
                <Grid item xs={7} md={8}>
                  <SearchSubjectsField
                    formik={formik}
                    options={subjectsList}
                    id="selectedSubjects"
                    label="Subjects"
                    display="subjectName"
                  />
                </Grid>
              </Grid>
              {classSubjectArray &&
                classSubjectArray.map((arr, index) => {
                  return (
                    <Grid key={index} container spacing={3}>
                      <Grid item xs={5} md={4}>
                        <SearchClassField
                          formik={formik}
                          options={classesList}
                          id="selectedClass"
                          label="Class"
                          display="className"
                        />
                      </Grid>
                      <Grid item xs={7} md={8}>
                        <SearchSubjectsField
                          formik={formik}
                          options={subjectsList}
                          id="selectedSubjects"
                          label="Subjects"
                          display="subjectName"
                        />
                      </Grid>
                    </Grid>
                  );
                })}
              <Box
                display="flex"
                justifyContent="flex-end"
                className="u_mt_small"
              >
                <Chip onClick={handleNewClassSubject} label="Add New" />
              </Box>
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
          <Paper className="paper_padding--sm u_mt_small"></Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ClassSubjectAllocation;

const SearchTeacherField = ({ formik, id, label, options, display }) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
      }}
      getOptionLabel={(option) => option[display]}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Avatar style={{ marginRight: "10px" }}>
            {option.firstName.charAt(0)}
          </Avatar>

          {`${option.firstName} ${option.lastName} (${option.cnic})`}
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
          helperText={formik.touched[id] ? formik.errors[id] : ""}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};

const SearchClassField = ({ formik, id, label, options, display }) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
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
          helperText={formik.touched[id] ? formik.errors[id] : ""}
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
          id={id}
          label={label}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched[id] ? formik.errors[id] : ""}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};
