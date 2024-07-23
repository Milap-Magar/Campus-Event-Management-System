import React from "react";
import { Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

const EventDetails = () => {
  const { id } = useParams(); 

  return (
    <Layout>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Event {id} Details
        </Typography>
        <Typography variant="h6">Event Description</Typography>
        <Typography>
          Details about Event {id} will be displayed here.
        </Typography>
      </Paper>
    </Layout>
  );
};

export default EventDetails;
