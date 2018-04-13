import React from "react";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar fixed-top">
    <h4>Click an image to begin!</h4>
    <h5>Score: </h5>{props.score} | <h5>Top Score: </h5>{props.topScore}
  </nav>
);

export default Navbar;
