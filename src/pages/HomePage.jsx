import React, { useEffect, useState } from "react";
import { Typography, Grid, Paper } from "@mui/material";
import Layout from "../Layout/Layout";
import axios from "axios";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://669e3eb09a1bda368005f8d9.mockapi.io/events"
        );
        setEvents(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEvents();
  }, []);
  return (
    <Layout>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Event Platform
      </Typography>
      {error && <Typography sx={{ color: "error" }}>{error}</Typography>}
      <Grid container spacing={3}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Paper
              elevation={6}
              sx={{ padding: "20px", backgroundColor: "hsl(197, 71%, 90%)" }}
            >
              <Typography variant="h5">{event.EventName}</Typography>
              <Typography>{event.Title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default HomePage;
