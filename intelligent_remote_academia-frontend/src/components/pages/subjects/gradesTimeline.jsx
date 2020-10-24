import React from "react";
import { Typography } from "@material-ui/core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { getMonths } from "../../constants/calendarConsts";

import "react-vertical-timeline-component/style.min.css";

const GradesTimeline = ({ grades }) => {
  const months = getMonths();
  return (
    <React.Fragment>
      <VerticalTimeline>
        {grades.map((grade) => {
          let gradeDate = new Date(grade.gradeDate);
          return (
            <VerticalTimelineElement
              key={grade.id}
              date={
                months[gradeDate.getMonth()].name +
                " " +
                gradeDate.getDate() +
                ", " +
                gradeDate.getFullYear()
              }
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <Typography variant="h6" color="textSecondary">
                <strong>{grade.gradeTitle}</strong>{" "}
              </Typography>
              <hr />
              <Typography color="textSecondary">
                <strong>Total Marks: </strong>
                {grade.totalMarks}
              </Typography>
              <Typography color="textSecondary">
                <strong>Obtained Marks: </strong>
                {grade.obtainedMarks}
              </Typography>
              <Typography color="textSecondary">
                <strong>Percentage </strong>
                {((grade.obtainedMarks / grade.totalMarks) * 100).toFixed(2)}%
              </Typography>
              {grade.remarks && <GradeRemarks remarks={grade.remarks} />}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </React.Fragment>
  );
};

const GradeRemarks = ({ remarks }) => {
  if (remarks) {
    return (
      <React.Fragment>
        <hr />
        <Typography color="textSecondary">
          <strong>Remarks: </strong>
          {remarks}
        </Typography>
      </React.Fragment>
    );
  }
  return null;
};

export default GradesTimeline;
