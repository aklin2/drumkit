import React from "react";

function Header() {
  return (
    <div className="heading">
      <img
        id="logo"
        alt="logo"
        src={"/static/images/apple-touch-icon.png"}
      ></img>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      {/* <img id="profile" alt="profile" src={"/static/images/AlanLin.png"}></img> */}
    </div>
  );
}

export default Header;
