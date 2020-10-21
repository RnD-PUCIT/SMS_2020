import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

const TextCard = ({ titleMain, titleSub, variant, onCardClick }) => {
  return (
    <React.Fragment>
      <Card variant={variant && variant} onClick={onCardClick}>
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
