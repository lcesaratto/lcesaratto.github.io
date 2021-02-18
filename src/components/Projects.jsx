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
        <Row xs={1} md={2} lg={3} className="cards-row">
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Advanced Autonomous Car
              </Card.Header>
              <Card.Img
                variant="top"
                src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
              />
              <Card.Body>
                <Card.Text className="cards-text">
                  By means of a combination of computer vision techniques,
                  control and an object detection CNN, the vehicle is able to
                  identify packages destination with a QR code, followed by the
                  transportation to its corresponding deposit. Once the package
                  arrives, the vehicle returns automatic to the base.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>OpenCV</ListGroupItem>
                    <ListGroupItem>TinyYOLO v3</ListGroupItem>
                    <ListGroupItem>Multiprocessing/ threading</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AdvancedAutonomousCar">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">
                  Finalization date: June 2020
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Advanced Autonomous Car
              </Card.Header>
              <Card.Img
                variant="top"
                src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
              />
              <Card.Body>
                <Card.Text className="cards-text">
                  By means of a combination of computer vision techniques,
                  control and an object detection CNN, the vehicle is able to
                  identify packages destination with a QR code, followed by the
                  transportation to its corresponding deposit. Once the package
                  arrives, the vehicle returns automatic to the base.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>OpenCV</ListGroupItem>
                    <ListGroupItem>TinyYOLO v3</ListGroupItem>
                    <ListGroupItem>Multiprocessing/ threading</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AdvancedAutonomousCar">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">
                  Finalization date: June 2020
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Advanced Autonomous Car
              </Card.Header>
              <Card.Img
                variant="top"
                src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
              />
              <Card.Body>
                <Card.Text className="cards-text">
                  By means of a combination of computer vision techniques,
                  control and an object detection CNN, the vehicle is able to
                  identify packages destination with a QR code, followed by the
                  transportation to its corresponding deposit. Once the package
                  arrives, the vehicle returns automatic to the base.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>OpenCV</ListGroupItem>
                    <ListGroupItem>TinyYOLO v3</ListGroupItem>
                    <ListGroupItem>Multiprocessing/ threading</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AdvancedAutonomousCar">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">
                  Finalization date: June 2020
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">
                Advanced Autonomous Car
              </Card.Header>
              <Card.Img
                variant="top"
                src="images/emile-perron-xrVDYZRGdw4-unsplash.jpg"
              />
              <Card.Body>
                <Card.Text className="cards-text">
                  By means of a combination of computer vision techniques,
                  control and an object detection CNN, the vehicle is able to
                  identify packages destination with a QR code, followed by the
                  transportation to its corresponding deposit. Once the package
                  arrives, the vehicle returns automatic to the base.
                </Card.Text>
                <section className="cards-text-tail">
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>OpenCV</ListGroupItem>
                    <ListGroupItem>TinyYOLO v3</ListGroupItem>
                    <ListGroupItem>Multiprocessing/ threading</ListGroupItem>
                  </ListGroup>
                  <a href="https://github.com/lcesaratto/AdvancedAutonomousCar">
                    <FontAwesomeIcon icon={faGithub} className="fa-icon" />
                  </a>
                </section>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">
                  Finalization date: June 2020
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
