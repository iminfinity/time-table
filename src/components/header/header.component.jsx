import React from "react";
import "./header.styles.scss";

import { ReactComponent as Github } from "../../assets/github.svg";
const Header = () => {
  return (
    <header className="page-header">
      <h1>
        Time Table of 5<sup>th</sup> Semester
      </h1>
      <ul>
        <li>Table</li>
        <li>Today</li>
      </ul>
      <Github />
    </header>
  );
};

export default Header;