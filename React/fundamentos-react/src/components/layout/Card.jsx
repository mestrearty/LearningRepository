import React from "react";
import "./Card.css";
export default (props) => {
  return (
    <div
      className="Card"
      style={{
        backgroundColor: props.color || "#851e3e",
        borderColor: props.color || "#851e3e",
      }}
    >
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
