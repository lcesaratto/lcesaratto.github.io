import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects(props) {
  return (
    <section className={"projects" + " " + props.className}>
      <Container className="cards-container">
        <Row xs={1} sm={1} md={2} lg={2} xl={3} className="cards-row">
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Self Driven <br /> Autonomous Car
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                  <img
                    src="./images/OpenCV_logo_black.svg"
                    alt="brands-logos"
                  />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  By means of a combination of computer vision techniques,
                  control and an object detection CNN, the vehicle is able to
                  identify packages destination with a QR code, followed by the
                  transportation to its corresponding deposit. Once the package
                  arrives, the vehicle returns automatic to the base.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Microcontroller - Linux</ListGroupItem>
                    <ListGroupItem>TinyYOLO v3</ListGroupItem>
                    <ListGroupItem>Multiprocessing/ threading</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AdvancedAutonomousCar">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 06/2020</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Personal Portfolio
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/html5.svg" alt="brands-logos" />
                  <img src="./images/css-5.svg" alt="brands-logos" />
                  <img src="./images/logo-javascript.svg" alt="brands-logos" />
                  <img src="./images/react-2.svg" alt="brands-logos" />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  This responsive website, based on the Strata design from
                  HTML5UP, has been implemented in React.js rather than just
                  plain HTML and CSS. It offers a responsive design for laptops,
                  tablets and cellphones. It is deployed by using GitHub Pages.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Reactstrap</ListGroupItem>
                    <ListGroupItem>React Router</ListGroupItem>
                    <ListGroupItem>Font Awesome Icons</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/lcesaratto.github.io/tree/project-data">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 02/2021</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Kaggle Challenge <br /> Home Depot
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                  <img
                    src="./images/seaborn-tall-light.svg"
                    alt="brands-logos"
                  />
                  <img src="./images/scikit-learn.svg" alt="brands-logos" />
                  <img src="./images/tensorflow-2.svg" alt="brands-logos" />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  Home Depot competition hosted on Kaggle where participants
                  need to predict the relevance of search terms. The goal of
                  this, is to create weak labeled data. My solutions consist in
                  a Sk-learn implementation, and a CNN with Trained Embeddigs
                  Layers as inputs to the model to proccess text vectorized
                  data.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Keras model</ListGroupItem>
                    <ListGroupItem>Sk-learn pipeline</ListGroupItem>
                    <ListGroupItem>Embeddings layer</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/Kaggle-HomeDepot">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 02/2021</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Desktop App <br /> Web Scrapping
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  Desktop application that given a table with some addresses, it
                  adds the distances between them, and calculate the final sum.
                  The executable file create with Pyinstaller, contains an
                  embedded archive of the script and all the python modules
                  used.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Selenium</ListGroupItem>
                    <ListGroupItem>Beautiful Soup</ListGroupItem>
                    <ListGroupItem>Pyinstaller</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/Google-Maps-Web-Scrapping">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 12/2020</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Desktop App <br /> Auto Synchronization
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  The objective of this application is to allow users to backup
                  data from many local folders to a google drive folder as a
                  periodic backup. It is also possible to select on which days
                  the backup should be done. The script is embedded as a desktop
                  application with Pyinstaller.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Google API</ListGroupItem>
                    <ListGroupItem>Pyinstaller</ListGroupItem>
                    <ListGroupItem>PyDrive</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AutoSyncGoogleDrive">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 09/2020</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Soda Caps <br /> Automatic Classifier
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                  <img
                    src="./images/OpenCV_logo_black.svg"
                    alt="brands-logos"
                  />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  Winner project of the Electronic Faculty Students Competition
                  held in October 2018 at the National University of Rosario.
                  The goal was to build a prototype, based on Computer Vision,
                  able to classify soda caps by its colour in Real-Time.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Image processing</ListGroupItem>
                    <ListGroupItem>Prototype implementation</ListGroupItem>
                    <ListGroupItem>Real-Time</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AutomaticSodaCapsClassifier">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 07/2019</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Kaggle Competition <br /> Titanic
              </Card.Header>
              <section className="cards-image-group">
                <Card.Img
                  variant="top"
                  src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                  className="cards-background-image"
                />
                <div className="cards-brands-logos">
                  <img src="./images/python-5.svg" alt="brands-logos" />
                  <img
                    src="./images/seaborn-tall-light.svg"
                    alt="brands-logos"
                  />

                  <img src="./images/scikit-learn.svg" alt="brands-logos" />
                </div>
              </section>
              <Card.Body className="cards-body">
                <Card.Text className="cards-text">
                  Legendary Kaggle Competition to get into the Data Science
                  field. I remade it following good practices, and implementing
                  Sk-learn pipelines for cleaning data, features extraction and
                  engineering and model training. Finally, the hyperparameters
                  are fine-tuned with GridSearchCV.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Sk-learn pipeline</ListGroupItem>
                    <ListGroupItem>Exploratory data analysis</ListGroupItem>
                    <ListGroupItem>Feature Engineering</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/Kaggle-Titanic">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Finalization date: 01/2021</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
