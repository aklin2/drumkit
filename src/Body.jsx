import React from "react";
import { useEffect } from "react";
import Sound from "./Sound";

function Body() {
  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];
    element.addEventListener("keydown", handleKeyDown);
  });

  var crash = new Audio("/static/sounds/crash.mp3");
  var kick = new Audio("/static/sounds/kick-bass.mp3");
  var snare = new Audio("/static/sounds/snare.mp3");
  var tom1 = new Audio("/static/sounds/tom-1.mp3");
  var tom2 = new Audio("/static/sounds/tom-2.mp3");
  var tom3 = new Audio("/static/sounds/tom-3.mp3");
  var tom4 = new Audio("/static/sounds/tom-4.mp3");
  function handleKeyDown(event) {
    switch (event.key) {
      case "a":
        crash.play();
        break;
      case "s":
        kick.play();
        break;
      case "d":
        snare.play();
        break;
      case "f":
        tom1.play();
        break;
      case "g":
        tom2.play();
        break;
      case "h":
        tom3.play();
        break;
      case "j":
        tom4.play();
        break;
      default:
        break;
    }
  }
  return (
    <div className="body">
      <div className="description">
        <h1>This is a Drumkit</h1>
        <p>
          Click on the image to play the sound or press the corresponding key
        </p>
      </div>
      <div className="sound-images">
        <Sound
          name="crash"
          audio="/static/sounds/crash.mp3"
          img="/static/images/crash.png"
        />
        <Sound
          name="kick-bass"
          audio="/static/sounds/kick-bass.mp3"
          img="/static/images/kick.png"
        />
        <Sound
          name="snare"
          audio="/static/sounds/snare.mp3"
          img="/static/images/snare.png"
        />
        <Sound
          name="tom-1"
          audio="/static/sounds/tom-1.mp3"
          img="/static/images/tom1.png"
        />
        <Sound
          name="tom-2"
          audio="/static/sounds/tom-2.mp3"
          img="/static/images/tom2.png"
        />
        <Sound
          name="tom-3"
          audio="/static/sounds/tom-3.mp3"
          img="/static/images/tom3.png"
        />
        <Sound
          name="tom-4"
          audio="/static/sounds/tom-4.mp3"
          img="/static/images/tom4.png"
        />
      </div>
      <div className="sound-keys">
        <h1>A</h1>
        <h1>S</h1>
        <h1>D</h1>
        <h1>F</h1>
        <h1>G</h1>
        <h1>H</h1>
        <h1>J</h1>
      </div>
    </div>
  );
}

export default Body;
