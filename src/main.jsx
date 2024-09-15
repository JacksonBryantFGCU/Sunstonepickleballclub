import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";

import About from "./pages/About/Community";
import LandingPage from "./pages/Home/LandingPage";
import CalendarPage from "./pages/Calendar/CalendarPage";
import Contact from "./pages/Contact/Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
