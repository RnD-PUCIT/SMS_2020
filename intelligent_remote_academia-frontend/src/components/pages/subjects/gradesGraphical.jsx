import React from "react";
import { Bar } from "react-chartjs-2";
import Grid from "@material-ui/core/Grid";

const GradesGraphical = ({ grades }) => {
  const gradeTitle = grades.map((g) => g.gradeTitle);
  const obtainedMarks = grades.map((g) => g.obtainedMarks);
  const percentage = grades.map((g) =>
    ((g.obtainedMarks / g.totalMarks) * 100).toFixed(2)
  );
  const barColors = percentage.map((p) => {
    if (p >= 85) return "#5cb85c";
    else if (p >= 50 && p < 85) return "#ffbb33";
    else return "red";
  });
  const chartData = {
    labels: gradeTitle,
    datasets: [
      {
        label: "Percentage",
        data: percentage,
        backgroundColor: barColors,
      },
    ],
  };
  return (
    <Grid container>
      <Grid item sm={12}>
        <Bar
          data={chartData}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
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
