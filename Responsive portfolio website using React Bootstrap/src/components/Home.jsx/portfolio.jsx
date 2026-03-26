import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Portfolio() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">My Portfolio</h2>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                React website using routing.
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Bootstrap responsive layout.
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                JavaScript mini app.
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;