import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import AppRoutes from "./routes/AppRoutes";
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    // <Router>
    <div className="flex flex-row">
      <Navbar />
      <div className="m-4">
        <AppRoutes />
      </div>
    </div>
    // </Router>
  );
};

export default App;
