import React, { useEffect, useState } from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';

const DiaryList = () => {
  const [diaryData, setDiaryData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    function fetchData() {
      const diary = diaryConst;
      setDiaryData(diary);
    }
    fetchData();
  }, []);

  const handleDiaryClick = (id) => {
    const url = `${history.location.pathname}/${id}`;
    history.push(url);
  };

  if (diaryData.length === 0) {
    return (
      <div className='u_p_small'>
        <Typography>No diary data added yet.</Typography>
      </div>
    );
  }
  return (
    <React.Fragment>
      <Paper className='paper_padding--sm u_mt_small'>
        <List component='nav' style={{ padding: 0 }}>
          {diaryData.map((diary, index) => {
            return (
              <ListItem
                button
                key={index}
                style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}
                onClick={() => {
                  handleDiaryClick(diary.id);
                }}>
                <ListItemText>
                  {diary.diaryTitle}
                  <Typography
                    color='textSecondary'
                    style={{ float: 'right', marginRight: '10px' }}>
                    {`${diary.diaryDate}`}
                  </Typography>
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge='end'>
                    <MoreVertIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
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
