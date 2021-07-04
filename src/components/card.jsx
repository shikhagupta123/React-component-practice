import React from "react";
import Detail from "./Detail";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail info={props.phone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
