import React from "react";

function Sound(props) {
  var audio = new Audio(props.audio);
  return (
    <img
      className="sound"
      id={props.name}
      alt={props.name}
      src={props.img}
      onClick={() => audio.play()}
    ></img>
  );
}

export default Sound;
