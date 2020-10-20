import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const TextCard = ({ titleMain, titleSub }) => {
  return (
    <React.Fragment>
      <Card variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              {titleMain}
            </Typography>
            <Typography color="textSecondary">{titleSub}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default TextCard;
