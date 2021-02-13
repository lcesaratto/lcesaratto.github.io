import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faXing,
  faGithub,
  faTelegram,
  faKaggle,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <footer className={"footer" + " " + props.className}>
      <img
        src="./images/background-img.jpg"
        alt="background_image"
        className="background_image"
      />
      <ul class="icons-list">
        <li>
          <a href="https://www.xing.com/profile/LisandroA_Cesaratto/">
            <FontAwesomeIcon icon={faXing} className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lisandro-cesaratto/">
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/lcesaratto?tab=repositories">
            <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="https://www.kaggle.com/lisandroc">
            <FontAwesomeIcon icon={faKaggle} className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="mailto:lisandro.cesaratto@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
          </a>
        </li>
        <li>
          <a href="https://t.me/lisandrocesaratto">
            <FontAwesomeIcon icon={faTelegram} className="fa-icon" />
          </a>
        </li>
      </ul>
      <text className="footer-comment">
        Website created with React{" "}
        <img src="./images/logo.svg" alt="react-logo" className="react-logo" />{" "}
        by me
      </text>
    </footer>
  );
}

export default Footer;
