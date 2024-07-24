import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import mockEvents from "../mock/mockEvents.";
import AddEvent from "../components/Form/AddEvent";

const EventListing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" gutterBottom>
          Events Listing
        </Typography>
        <Button variant="contained" color="error" onClick={handleOpen}>
          Add Event
          <AddEvent open={open} handleClose={handleClose} />
        </Button>
      </Box>
      <List>
        {mockEvents.map((event) => (
          <div key={event.id}>
            <ListItem button component={Link} to={`${event.id}`}>
              <ListItemText
                primary={`${event.title}`}
                secondary={`${event.details}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Layout>
  );
};

export default EventListing;
