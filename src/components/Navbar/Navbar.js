import React from "react";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar fixed-top">
    <h4>Click an image to begin!</h4>
    <h5>Score: {props.score}</h5> | <h5>Top Score: {props.topScore}</h5>
  </nav>
);

export default Navbar;
