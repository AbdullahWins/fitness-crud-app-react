import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-bar">
      <h1>
        <FontAwesomeIcon icon={faWaveSquare} /> Fitness Freak
      </h1>
      <div className="nav-links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Nav;
