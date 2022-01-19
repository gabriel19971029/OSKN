import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        © Copyright, ® <a href="https://gabo.rocks/">GABO</a> {year}.
      </p>
    </footer>
  );
}

export default Footer;
