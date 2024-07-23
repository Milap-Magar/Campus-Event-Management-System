import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </div>
  );
};

export default Layout;
