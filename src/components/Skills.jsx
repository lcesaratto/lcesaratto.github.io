import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <section className={"skills" + " " + props.className}>
      <section className="skills-groupset">
        <h1>General</h1>
        <ul>
          <li>Windows & Linux</li>
          <li>Agile Scrum Methodology</li>
          <li>GIT and DVC (Data Version Control)</li>
          <li>Visual Studio Code IDE</li>
          <li>Jupyter Notebooks</li>
        </ul>
      </section>

      <section className="skills-groupset">
        <h1>Data Science Toolkit</h1>
        <ul>
          <li>Python</li>
          <li>Scikit-Learn</li>
          <li>Tensorflow & Keras</li>
          <li>Exploratory Data Analysis (EDA)</li>
          <li>Natural Languaje Processing (NLP) & Embeddigs</li>
          <li>Web Scrapping</li>
        </ul>
      </section>

      <section className="skills-groupset">
        <h1>Data Engineering Toolkit</h1>
        <ul>
          <li>REST API with Flask or Django REST Framework</li>
          <li>App Containerization with Docker</li>
          <li>PostgreSQL</li>
          <li>Multithreading & multiprocessing</li>
          <li>Data Pipelines</li>
        </ul>
      </section>

      <section className="skills-groupset">
        <h1>Computer Vision</h1>
        <ul>
          <li>OpenCV</li>
          <li>Tesseract OCR</li>
          <li>ABBYY Flexicapture (OCR)</li>
        </ul>
      </section>

      <section className="skills-groupset">
        <h1>Web Development</h1>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <section className="skills-groupset">
        <h1>Others</h1>
        <ul>
          <li>Microcontroller Programming</li>
          <li>RTOS (Real Time Operating System)</li>
          <li>C, C++ & Ladder (PLC programming)</li>
        </ul>
      </section>
    </section>
  );
}

export default Skills;
