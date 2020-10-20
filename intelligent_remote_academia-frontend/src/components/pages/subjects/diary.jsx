import React from "react";
import { Paper, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    marginTop: "30px",
  },
  paperBody: {
    padding: "20px 30px",
  },
  toolbar: {
    backgroundColor: "#2875c7",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    color: "white",
  },
});

const Diary = ({ diary }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {diary.map((item) => {
        return (
          <Paper className={classes.paper}>
            <Toolbar className={classes.toolbar} variant="dense">
              <Typography variant="h6">{item.diary_date}</Typography>
            </Toolbar>
            <div className={classes.paperBody}>
              <Typography>{item.diary_title}</Typography>
              {item.diary_content && (
                <DiaryContent content={item.diary_content} />
              )}
            </div>
          </Paper>
        );
      })}
    </React.Fragment>
  );
};

const DiaryContent = ({ content }) => {
  return (
    <React.Fragment>
      <hr />
      {content}
    </React.Fragment>
  );
};

export default Diary;
