import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EventListing, EventDetails } from "./pages/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        console.log("hieee")
        <Route path="/events" element={<EventListing />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
