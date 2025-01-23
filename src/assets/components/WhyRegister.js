import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import symbol1 from "../whyrigster/Symbol.png";
import symbol2 from "../whyrigster/Symbol (1).png";
import symbol3 from "../whyrigster/Symbol (3).png";
import symbol4 from "../whyrigster/Symbol (3).png";

function WhyRegister() {
  const cardData = [
    {
      title: "Confidential & Safe",
      text: "All your private information is safe with us.",
      icon: symbol1,
      bgcolor: "#FCDDEC",
    },
    {
      title: "No Hidden Fee",
      text: "Everything is put before you with no hidden charges or conditions.",
      icon: symbol2,
      bgcolor: "#F1FBF3",
    },
    {
      title: "Guaranteed Satisfaction",
      text: "We ensure that you stay 100% satisfied with our offered services.",
      icon: symbol3,
      bgcolor: "#EDF3FF",
    },
    {
      title: "Expert CA/CS Assistance",
      text: "Prompt support from our in-house expert professionals.",
      icon: symbol4,
      bgcolor: "#FBF1FB",
    },
    {
      title: "Confidential & Safe",
      text: "All your private information is safe with us.",
      icon: symbol1,
      bgcolor: "#27AE600A",
    },
  ];

  return (
    <Container fluid className="py-5">
      <Row className="text-center mb-4">
        <Col md={4}>
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
        <Row className="g-4">
        {cardData.map((card, index) => (
          <Col md={3} key={index}>
            <Card
              className="text-center p-4"
              style={{ backgroundColor: card.bgcolor, border: "none", width: "300px" }}
            >
              <Card.Body>
                <div className="mb-3">
                  <img
                    src={card.icon}
                    alt={card.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
       
      </Row>
    
    </Container>
  );
}

export default WhyRegister;
