import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const TextCard = ({ titleMain, titleSub, variant, component, to }) => {
  return (
    <React.Fragment>
      <Card variant={variant && variant}>
        <CardActionArea component={component} to={to}>
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
