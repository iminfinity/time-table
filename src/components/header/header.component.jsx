import React from "react";
import "./header.styles.scss";

import { ReactComponent as Github } from "../../assets/github.svg";
const Header = ({ changeToday }) => {
  return (
    <header className="page-header">
      <h1 onClick={() => changeToday(false)}>Time Table</h1>
      <div>
        <h2 onClick={() => changeToday(true)}>Today</h2>
        <a href="https://github.com/iminfinity/time-table">
          <Github />
        </a>
      </div>
    </header>
  );
};

export default Header;
