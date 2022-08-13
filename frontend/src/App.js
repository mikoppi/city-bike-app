import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Journeys from "./components/Journeys";
import Stations from "./components/Stations";
import { Routes, Route } from "react-router-dom";
import "../src/App.css";

const App = () => {
  return (
    <div className="main">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/stations" element={<Stations />} />
      </Routes>
    </div>
  );
};

export default App;
