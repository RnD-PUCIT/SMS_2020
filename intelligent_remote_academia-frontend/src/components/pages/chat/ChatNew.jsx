import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { IconButton, makeStyles, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import http from "../../../services/httpService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChatNew({ open, onClose }) {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");
  const [contact, setContact] = useState(null);

  const handleSearch = async () => {
    const url = `/chat?text=${searchValue}`;

    try {
      const { data } = await http.get(url);

      console.log(data);

      setContact(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        fullWidth
      >
        <DialogTitle>Select new contact</DialogTitle>
        <DialogContent>
          <div className={classes.searchContainer}>
            <TextField
              variant="outlined"
              label="Search username"
              fullWidth
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IconButton color="primary" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Create
          </Button>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  searchContainer: {
    display: "flex",
  },
});
