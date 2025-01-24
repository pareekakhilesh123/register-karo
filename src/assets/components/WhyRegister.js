import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import symbol1 from "../whyrigster/Symbol.png";
import symbol2 from "../whyrigster/Symbol (1).png";
import symbol3 from "../whyrigster/Symbol (3).png";
import symbol4 from "../whyrigster/Symbol (3).png";

function WhyRegister() {
  return (
    <Container fluid className="py-5">
      <Row className="text-center mb-4  justify-content-end">
        <Col md={5}>
          <p style={{ color: "#EB8D15", fontWeight: "bold" }}>
            WHY REGISTERKARO.IN
          </p>
          <h2>
            Why Choose <span style={{ color: "#FFA229" }}>Register Karo</span>
          </h2>
          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </Col>
        <Col md={3} className="col align-self-end">
          <Card
            className="text-center p-4 m-4"
            style={{ backgroundColor: "#EDF3FF", border: "none", width: "300px" }}
          >
            <Card.Body>
              <div className="mb-3">
                <img
                  src={symbol1}
                  alt="Guaranteed Satisfaction"
                  style={{ width: "50px", height: "50px" }}
                  loading="lazy"
                />
              </div>
              <Card.Title>Guaranteed Satisfaction</Card.Title>
              <Card.Text>
                We ensure that you stay 100% satisfied with our offered services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="col align-self-end ">
          <Card
            className="text-center p-4 m-4"
            style={{ backgroundColor: "#EDF3FF", border: "none", width: "300px" }}
          >
            <Card.Body>
              <div className="mb-3">
                <img
                  src={symbol3}
                  alt="Guaranteed Satisfaction"
                  style={{ width: "50px", height: "50px" }}
                  loading="lazy"
                />
              </div>
              <Card.Title>Guaranteed Satisfaction</Card.Title>
              <Card.Text>
                We ensure that you stay 100% satisfied with our offered services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-end">
         
        <Col md={3} className="col align-self-end">
          <Card
            className="text-center p-4 m-4"
            style={{ backgroundColor: "#F1FBF3", border: "none", width: "300px" }}
          >
            <Card.Body>
              <div className="mb-3">
                <img
                  src={symbol2}
                  alt="No Hidden Fee"
                  style={{ width: "50px", height: "50px" }}
                  loading="lazy"
                />
              </div>
              <Card.Title>No Hidden Fee</Card.Title>
              <Card.Text>
                Everything is put before you with no hidden charges or conditions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="col align-self-end">
          <Card
            className="text-center p-4 m-4"
            style={{ backgroundColor: "#EDF3FF", border: "none", width: "300px" }}
          >
            <Card.Body>
              <div className="mb-3">
                <img
                  src={symbol3}
                  alt="Guaranteed Satisfaction"
                  style={{ width: "50px", height: "50px" }}
                    loading="lazy"
                />
              </div>
              <Card.Title>Guaranteed Satisfaction</Card.Title>
              <Card.Text>
                We ensure that you stay 100% satisfied with our offered services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="col align-self-end">
          <Card
            className="text-center p-4 m-4"
            style={{ backgroundColor: "#FBF1FB", border: "none", width: "300px" }}
          >
            <Card.Body>
              <div className="mb-3">
                <img
                  src={symbol4}
                  alt="Expert CA/CS Assistance"
                  style={{ width: "50px", height: "50px" }}
                    loading="lazy"
                />
              </div>
              <Card.Title>Expert CA/CS Assistance</Card.Title>
              <Card.Text>
                Prompt support from our in-house expert professionals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WhyRegister;
