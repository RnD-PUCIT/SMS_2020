import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const SearchInput = ({ data, label, onSearchChange }) => {
  return (
    <div style={{ width: 500 }}>
      <Autocomplete
        freeSolo
        id='search'
        disableClearable
        options={data}
        onChange={onSearchChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={label}
            margin='normal'
            variant='standard'
            onChange={onSearchChange}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchInput;
