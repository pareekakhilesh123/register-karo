import React from "react";
import {  Button, Row, Col, Container } from "react-bootstrap";
import Groupphoto from "../images/about/Group.webp"

function About() {
  return (
    <Container fluid className="mt-5" >
      <Row className="align-items-center" >
      
        <Col md={7} className="text-start" style={{paddingLeft:"40px"}} >
          <p style={{ color: "#EB8D15", fontWeight: "bold" }}>
            WELCOME TO REGISTERKARO.IN
          </p>
          <br/>
          <h2>
            About <span style={{ color: "#FFA229" }}>Register Karo</span>
          </h2>
          <p>
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years, and I’m
            extremely pleased with their performance, ability to execute, and
            willingness to adapt in our ever-changing environment. Perry is an
            outstanding leader who is fanatical about customer satisfaction. He
            has built a solid team that has consistently delivered on projects
            thereby exceeding everyone’s expectations.
          </p>
          <br/>
          <p>
            I would strongly recommend their services to any organization that
            is looking for solid, reliable, and predictable outcomes.
          </p>
          <br/>
          <br/>
          <Button
            style={{
              backgroundColor: "#1C4670",
              borderRadius: "3px",
              border: "none",
            }}
          >
            Learn More →
          </Button>
        </Col>

        <Col md={5} className="text-center my-4">
          <img
            src={Groupphoto}
            alt="About Register Karo"
            className="img-fluid"
            style={{ borderRadius: "10px" }}
            width={584}
            height={422}
            loading="lazy"

            
          />





          
        </Col>
      </Row>
    </Container>
  );
}

export default About;
