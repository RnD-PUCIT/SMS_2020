import React from 'react';
import { Avatar, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const SearchValidatedInput = ({
  formik,
  id,
  label,
  options,
  display,
  avatar,
}) => {
  return (
    <Autocomplete
      options={options}
      onChange={(event, newValue) => {
        formik.values[id] = newValue;
      }}
      getOptionLabel={(option) => option[display]}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          {avatar && (
            <Avatar style={{ marginRight: '10px' }}>
              {option.firstName.charAt(0)}
            </Avatar>
          )}
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
          helperText={formik.touched[id] ? formik.errors[id] : ''}
          error={formik.touched[id] && Boolean(formik.errors[id])}
        />
      )}
    />
  );
};

export default SearchValidatedInput;
