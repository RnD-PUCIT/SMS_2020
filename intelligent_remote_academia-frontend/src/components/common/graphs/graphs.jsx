import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Doughnut } from 'react-chartjs-2';

const DoughnutGraph = ({ statusArray1 }) => {
  const statusArray = [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1];
  const total = statusArray.length;
  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  let completed = countOccurrences(statusArray, 1) / total;
  let notCompleted = countOccurrences(statusArray, 0) / total;
  const status = [];
  status.push(completed);
  status.push(notCompleted);
  const percentage = status.map((item) => (item * 100).toFixed(2));

  const data = {
    labels: ['Complete', 'Not Complete'],
    datasets: [
      {
        data: percentage,
        backgroundColor: ['#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <Typography variant='button' display='block' gutterBottom>
        Completion Weightage
      </Typography>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutGraph;
