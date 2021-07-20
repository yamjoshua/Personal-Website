import React from "react";

function GameContent(props) {
  return (
    <div className="gaming-item">
      <h5 className={props.title ? "gaming-title" : "gaming-no-title"}>
        {props.title}
      </h5>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameContent;