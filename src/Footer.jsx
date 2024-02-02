import React from "react";

function Footer() {
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  return (
    <div className="footer">
      <p>Copyright © {year} by Alan Lin</p>
    </div>
  );
}

export default Footer;
