import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const EventListing = () => {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Events Listing
      </Typography>
      <List>
        <ListItem button component={Link} to="/events/1">
          <ListItemText primary="Event 1" secondary="Event 1 Details" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/events/2">
          <ListItemText primary="Event 2" secondary="Event 2 Details" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/events/3">
          <ListItemText primary="Event 3" secondary="Event 3 Details" />
        </ListItem>
      </List>
    </Layout>
  );
};

export default EventListing;
