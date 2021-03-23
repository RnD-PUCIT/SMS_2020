import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Paper, Typography } from '@material-ui/core';

const DiaryDetails = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    function fetchData() {
      const diaryDetails = diaryConst;
      setDetails(diaryDetails);
    }
    fetchData();
  }, []);

  if (details) {
    return (
      <React.Fragment>
        <Typography variant="h4">Diary Details</Typography>
        <Box display="flex" className="u_mt_small" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="outlined" color="primary">
            Delete
          </Button>
        </Box>
        <Paper className="paper_padding--sm u_mt_tiny clearfix">
          <Typography variant="h6">{details.diaryTitle}</Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Paper variant="outlined" className="p-3">
            <Typography>{details.diaryContent}</Typography>
          </Paper>
          <Typography
            color="textSecondary"
            style={{ float: 'right', marginTop: '5px' }}
          >
            Date Posted: {details.diaryDate}
          </Typography>
        </Paper>
      </React.Fragment>
    );
  }
  return null;
};

export default DiaryDetails;

const diaryConst = {
  id: 1,
  diaryDate: '3/23/2021',
  diaryTitle: 'Regular Expressions',
  diaryContent:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam vitae tenetur, ad voluptate ab explicabo optio inventore laborum veritatis qui amet aperiam reprehenderit earum ipsum, est fuga magn corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam vitae tenetur, ad voluptate ab explicabo optio inventore laborum veritatis qui amet aperiam reprehenderit earum ipsum, est fuga magn corporis.',
};
