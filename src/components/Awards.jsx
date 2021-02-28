import React from "react";
import "./Awards.css";
import Carousel from "react-bootstrap/Carousel";

function Awards(props) {
  return (
    <section className={"awards" + " " + props.className}>
      <Carousel className="carousel-body" interval={null}>
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
              className="awards-icon"
            />
            <h1>1º Place</h1>
            <h2>27th Argentine Congress of Automatic Control</h2>
            <h2>AADECA 2020</h2>
            <p>
              Student Development Competition <br />
              (Final Degree Projects)
            </p>
            <h3>10/2020</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img
              src="./images/AADECA 2020-1.png"
              alt="certificate"
              className="certificate-img"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel className="carousel-body" interval={null}>
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
              className="awards-icon"
            />
            <h1>2º Place</h1>
            <h2>49th Argentine Conference of Computer Science</h2>
            <h2>JAIIO 2020</h2>
            <p>
              EST symposium <br />
              (Student Work Competition)
            </p>
            <h3>10/2020</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img
              src="./images/Premios EST 2020-5[4224]-1.png"
              alt="certificate"
              className="certificate-img"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-body" interval={null}>
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
              className="awards-icon"
            />
            <h1>1º Place</h1>
            <h2>Argentine Symposium on Embedded Systems</h2>
            <h2>SASE 2019</h2>
            <p>
              Student Contest
              <br />
              (Category B)
            </p>
            <h3>07/2019 </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img
              src="./images/SASE-2019-1.png"
              alt="certificate"
              className="certificate-img"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel className="carousel-body" interval={null}>
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
              className="awards-icon"
            />
            <h1>1º Place</h1>
            <h2>3rd Electronic Engineering Conference</h2>
            <h2>JONICA 2018</h2>
            <p>
              Student Competition
              <br />
              (TestCV team)
            </p>
            <h3>10/2018</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/background-img-carousel.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <img
              src="./images/JONICA-2018-1.png"
              alt="certificate"
              className="certificate-img"
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Awards;
