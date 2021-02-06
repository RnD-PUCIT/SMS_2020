import { MenuItem, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const AttendanceDashboard = () => {
  // State variables
  const [classList, setClassList] = useState(null);

  useEffect(() => {
    const classes = classListConst;
    setClassList(classes);
  }, []);

  if (classList) {
    return (
      <React.Fragment>
        <h1>Attendance Dashboard</h1>

        <TextField
          select
          variant="outlined"
          fullWidth
          label="Select class and section"
        >
          {classList.map((c, index) => (
            <MenuItem key={index} value={c.id}>
              {`${c.className} ${c.section}`}
            </MenuItem>
          ))}
        </TextField>
      </React.Fragment>
    );
  }

  return null;
};

export default AttendanceDashboard;

const classListConst = [
  {
    id: 1,
    className: '1',
    section: 'Blue',
  },
  {
    id: 2,
    className: '1',
    section: 'Red',
  },
  {
    id: 3,
    className: '2',
    section: 'Blue',
  },
  {
    id: 4,
    className: '2',
    section: 'Red',
  },
  {
    id: 5,
    className: '3',
    section: 'Blue',
  },
  {
    id: 6,
    className: '3',
    section: 'Red',
  },
  {
    id: 7,
    className: '4',
    section: 'Blue',
  },
  {
    id: 8,
    className: '4',
    section: 'Red',
  },
  {
    id: 9,
    className: '5',
    section: 'Blue',
  },
  {
    id: 10,
    className: '5',
    section: 'Red',
  },
  {
    id: 11,
    className: '6',
    section: 'Blue',
  },
  {
    id: 12,
    className: '6',
    section: 'Red',
  },
  {
    id: 13,
    className: '7',
    section: 'Blue',
  },
  {
    id: 14,
    className: '7',
    section: 'Red',
  },
  {
    id: 15,
    className: '8',
    section: 'Blue',
  },
  {
    id: 16,
    className: '8',
    section: 'Red',
  },
  {
    id: 17,
    className: '9',
    section: 'Blue',
  },
  {
    id: 18,
    className: '9',
    section: 'Red',
  },
  {
    id: 19,
    className: '10',
    section: 'Blue',
  },
  {
    id: 20,
    className: '10',
    section: 'Red',
  },
];
