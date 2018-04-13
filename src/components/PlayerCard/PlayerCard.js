import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card mr-1" key={props.id}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PlayerCard;
