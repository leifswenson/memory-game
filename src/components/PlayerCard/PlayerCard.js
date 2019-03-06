import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
  <div className="card mr-1" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PlayerCard;
