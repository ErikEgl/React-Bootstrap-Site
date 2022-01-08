import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h1 className="text-center m-4">Our team</h1>
          <Row>
            <Col>
              <Card className="m-1">
                <Card.Img
                  variant="top"
                  src="https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg"
                />
                <Card.Body>
                  <Card.Title> Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa
                  </Card.Text>
                  <Button variant="primary">About Team</Button>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card className="m-1">
                <Card.Img
                  variant="top"
                  src="https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg"
                />
                <Card.Body>
                  <Card.Title> Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa
                  </Card.Text>
                  <Button variant="primary">About Team</Button>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card className="m-1">
                <Card.Img
                  variant="top"
                  src="https://thelearningrooms.com/wps/wp-content/uploads/2015/02/team.jpg"
                />
                <Card.Body>
                  <Card.Title> Developers</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa
                  </Card.Text>
                  <Button variant="primary">About Team</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// export default Home;
