import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-logo">fakebook</h1>
      <nav>
        <a href="/home">Home</a>
        <a href="/friends">Friends</a>
        <a href="/about">About</a>
      </nav>
    </div>
  );
};

export default Header;
