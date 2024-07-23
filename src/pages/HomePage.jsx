import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Event Platform
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5">Event 1</Typography>
            <Typography>Event 1 Description</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5">Event 2</Typography>
            <Typography>Event 2 Description</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5">Event 3</Typography>
            <Typography>Event 3 Description</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
