import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  ListItemAvatar,
  ListItem,
  ListItemText,
  List,
  Avatar,
  DialogTitle,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ImageAvatar from "@material-ui/core/Avatar";

const StudentDropdown = ({
  studentList,
  onClick,
  selectedStudent,
  children,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    onClick(value);
    setOpen(false);
  };
  return (
    <React.Fragment>
      <StudentCard student={selectedStudent} onClick={handleClickOpen} />
      {studentList.length > 1 && (
        <SimpleDialog
          selectedValue={selectedStudent.firstName}
          students={studentList.filter((s) => s.id !== selectedStudent.id)}
          open={open}
          onClose={handleClose}
        />
      )}
      {children}
    </React.Fragment>
  );
};

const StudentCard = ({ student, onClick }) => {
  return (
    <React.Fragment>
      <Card
        style={{ borderRadius: "500px", marginBottom: "15px" }}
        variant="outlined"
      >
        <CardActionArea onClick={onClick}>
          <CardContent style={{ padding: "15px" }}>
            <ListItem>
              <ListItemAvatar>
                <ImageAvatar
                  style={{ width: "60px", height: "60px", marginRight: "20px" }}
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h6" color="textSecondary">
                  {student.firstName + " " + student.lastName}
                </Typography>
                <Typography color="textSecondary">
                  {student.className + " - " + student.section}
                </Typography>
              </ListItemText>
            </ListItem>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

function SimpleDialog(props) {
  const { onClose, open, students } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <DialogTitle>Select Child</DialogTitle>
      <List>
        {students.map((student) => (
          <ListItem
            button
            onClick={() => handleListItemClick(student)}
            key={student.id}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h6" color="textSecondary">
                {student.firstName + " " + student.lastName}
              </Typography>
              <Typography color="textSecondary">
                {student.className + " - " + student.section}
              </Typography>{" "}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default StudentDropdown;
