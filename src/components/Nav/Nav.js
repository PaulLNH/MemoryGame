import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="http://laird.codes/" target="blank">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="cur-sco">Score: {props.score}</li>

      <li id="top-sco">High Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;