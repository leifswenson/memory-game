import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4 text-center">Sports Memory</h1>
      <p className="lead text-center">
        Click on an image to earn points, but don't click on any images more
        than once!
      </p>
    </div>
  </div>
);

export default Jumbotron;
