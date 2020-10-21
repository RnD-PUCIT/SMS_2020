import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const TextCard = ({ titleMain, titleSub, variant, isLink, link }) => {
  return (
    <React.Fragment>
      <Card variant={variant && variant}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" color="textSecondary">
              <CardTitle isLink={isLink} titleMain={titleMain} link={link} />
            </Typography>
            <Typography color="textSecondary">{titleSub}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

const CardTitle = ({ titleMain, isLink, link }) => {
  if (isLink) {
    return <Link to={link}>{titleMain}</Link>;
  }
  return titleMain;
};

export default TextCard;
