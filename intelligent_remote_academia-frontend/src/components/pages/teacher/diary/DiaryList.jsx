import { List, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const DiaryList = () => {
  const [diaryData, setDiaryData] = useState([]);

  useEffect(() => {
    function fetchData() {
      const diary = diaryConst;
      setDiaryData(diary);
    }
    fetchData();
  }, []);

  if (diaryData.length === 0) {
    return (
      <div className="u_p_small">
        <Typography>No diaryd data added yet.</Typography>
      </div>
    );
  }
  return (
    <React.Fragment>
      <Paper className="paper_padding--sm u_mt_small">
        <List component="nav" style={{ padding: 0 }}></List>
      </Paper>
    </React.Fragment>
  );
};

export default DiaryList;

const diaryConst = [
  {
    id: 1,
    diaryDate: '3/23/2021',
    diaryTitle: 'Regular Expressions',
  },
  {
    id: 2,
    diaryDate: '3/23/2021',
    diaryTitle: 'Regular Expressions',
  },
  {
    id: 1,
    diaryDate: '3/23/2021',
    diaryTitle: 'Regular Expressions',
  },
];
