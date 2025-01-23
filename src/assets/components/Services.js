import React from "react"; 
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import servicelogo1 from "../images/services/vector-1.png";
import servicelogo2 from "../images/services/vector-2.png";
import servicelogo3 from "../images/services/vector-3.png";
import servicelogo4 from "../images/services/vector-4.png";
import servicelogo5 from "../images/services/vector-5.png";
import servicelogo6 from "../images/services/vector-6.png";

const Services = () => {
  const services = [
    {
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      image: servicelogo1,
    },
    {
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      image: servicelogo2,
    },
    {
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      image: servicelogo3,
    },
    {
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      image: servicelogo4,
    },
    {
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      image: servicelogo5,
    },
    {
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      image: servicelogo6,
    },
  ];

  return (
    <Container className="my-5">
      <p style={{ color: "#EB8D15" }}>WELCOME TO REGISTERKARO.IN</p>
      <h2 className="text-center mb-4">Explore Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="h-100 text-center p-4" style={{ border: "none", boxShadow: "none", background: "none" }}>
              <div className="d-flex justify-content-center">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  style={{ height: "60px", width: "60px", marginBottom: "1rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Button variant="link" className="text-primary p-0">
                  Learn more <i className="fas fa-arrow-right"></i>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button style={{backgroundColor:"#1C4670", borderRadius:"3px"}} >See All Services</Button>
      </div>
    </Container>
  );
};

export default Services;
