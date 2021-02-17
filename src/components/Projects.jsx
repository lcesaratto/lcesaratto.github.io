import React from "react";
import "./Projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Projects(props) {
  return (
    <section className={"projects" + " " + props.className}>
      <Container className="cards-container">
        <Row xs={1} md={2} lg={3} className="cards-row">
          <Col className="cards-column">
            <Card bg="light" text="dark" className="mb-2 cards-item">
              <Card.Header className="cards-header">Header</Card.Header>
              <Card.Img variant="top" src="images/logo.svg" />
              <Card.Body>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="cards-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
