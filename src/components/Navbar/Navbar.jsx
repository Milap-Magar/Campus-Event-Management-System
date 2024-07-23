import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ color: "inherit", textDecoration: "none", flexGrow: 1 }}
        >
          Event Platform
        </Typography>
        <Typography
          variant="button"
          component={Link}
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          Home
        </Typography>
        <Typography
          variant="button"
          component={Link}
          to="/events"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Events
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
