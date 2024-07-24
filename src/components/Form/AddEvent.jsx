import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

const AddEvent = ({ open, handleClose }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Add New Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          name="details"
          label="Details"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEvent;
