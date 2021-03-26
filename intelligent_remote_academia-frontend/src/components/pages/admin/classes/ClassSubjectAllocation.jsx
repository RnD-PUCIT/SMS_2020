import { Divider, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

const ClassSubjectAllocation = () => {
  return (
    <React.Fragment>
      <h1>Allocate Subjects to Class</h1>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper className="paper_padding--sm u_mt_small">
            <Typography variant="h6">Select Class</Typography>
            <Divider />
            {/* <SearchClassField /> */}
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
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};
