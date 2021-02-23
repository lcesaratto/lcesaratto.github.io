import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={"header" + " " + props.className}>
      <img
        src="./images/background-img.jpg"
        alt="background_image"
        className="background_image"
      />
      <img
        src="./images/Lisandro_resalta_print_Seeber_DSC4065-2-2.jpg"
        alt="personal_image"
        className="image"
      ></img>
      <h1 className="presentation_text">
        <strong>Hi, I'm Lisandro Cesaratto,</strong>
        <br />
        an Electronic Engineer,
        <br />
        currently studying a
        <br />
        Data Science Master Degree
        <br />
      </h1>

      <ul className="links-list">
        <li>
          <Link exact to="/">
            Projects
          </Link>
        </li>
        <li>
          <Link exact to="/awards">
            Awards
          </Link>
        </li>
        <li>
          <Link exact to="/skills">
            Skills
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
