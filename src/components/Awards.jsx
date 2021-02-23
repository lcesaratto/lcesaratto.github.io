import React from "react";
import "./Awards.css";
import Carousel from "react-bootstrap/Carousel";

function Awards(props) {
  return (
    <section className={"awards" + " " + props.className}>
      <Carousel className="carousel-body">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              src="./images/iconfinder_trophy_1054950_gold.svg"
              alt="trophy-icon"
            />
            <h1>1º Place</h1>
            <h2>27th Argentine Congress of Automatic Control</h2>
            <h2>AADECA 2020</h2>
            <p>Student Development Competition (Final Degree Projects)</p>
            <h3>Oct 2020</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Info</h1>
            <p>Coming soon...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-body">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              src="./images/iconfinder_trophy_1054950_silver.svg"
              alt="trophy-icon"
            />
            <h1>2º Place</h1>
            <h2>49th Argentine Conference of Computer Science</h2>
            <h2>JAIIO 2020</h2>
            <p>EST symposium (Student Work Competition)</p>
            <h3>Oct 2020</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Info</h1>
            <p>Coming soon...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-body">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              src="./images/iconfinder_trophy_1054950_gold.svg"
              alt="trophy-icon"
            />
            <h1>1º Place</h1>
            <h2>Argentine Symposium on Embedded Systems</h2>
            <h2>SASE 2019</h2>
            <p>Student Contest (Category B)</p>
            <h3>Jul 2019 </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Info</h1>
            <p>Coming soon...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-body">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <img
              src="./images/iconfinder_trophy_1054950_gold.svg"
              alt="trophy-icon"
            />
            <h1>1º Place</h1>
            <h2>3rd Electronic Engineering Conference</h2>
            <h2>JONICA 2018</h2>
            <p>Student Competition (TestCV team)</p>
            <h3>Oct 2018</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Info</h1>
            <p>Coming soon...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Awards;
