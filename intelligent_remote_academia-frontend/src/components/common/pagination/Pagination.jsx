import React from "react";
import { Pagination as MatPagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Pagination = (props) => {
  const classes = useStyles();

  const { itemsCount, pageSize, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  return (
    <div className={classes.root}>
      <MatPagination
        count={pagesCount}
        onChange={(event, page) => onPageChange(page)}
      />
    </div>
  );
};

export default Pagination;
