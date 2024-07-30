import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const AddEvent = ({
  open,
  handleClose,
  handleChange,
  handleAddEvent,
  newEvent,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={newEvent.title}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="details"
          label="Details"
          type="text"
          fullWidth
          variant="standard"
          value={newEvent.details}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddEvent} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEvent;
