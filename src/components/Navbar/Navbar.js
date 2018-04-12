import React from "react";
import "./Navbar.css";


const Navbar = () => (
  <nav className="navbar fixed-top">
    <h4>Click an image to begin!</h4>
    <h5>Score: </h5><span className="score"></span> | <h5>Top Score: </h5><span className="top-score"></span>
  </nav>
);

export default Navbar;
