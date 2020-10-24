import React from "react";
import { Bar } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const GradesGraphical = ({ grades }) => {
  const testTitle = grades.map((g) => g.gradeTitle);
  const marks = grades.map((g) => g.obtainedMarks);
  const chartData = {
    labels: testTitle,
    datasets: [
      {
        label: "Marks Obtained",
        data: marks,
        backgroundColor: "rgb(255,99,132,0.6)",
      },
    ],
  };
  return (
    <Grid container>
      <Grid item sm={12}>
        <Bar
          data={chartData}
          options={{
            title: {
              display: true,
              text: "Graphical View",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GradesGraphical;
