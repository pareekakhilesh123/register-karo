import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../images/footer/Social platforms logos.png';
import google from '../images/footer/Social platforms logos (1).png';
import apple from '../images/footer/Social platforms logos (2).png';
import insta from '../images/footer/Social platforms logos (3).png';

const Footer = () => {
  return (
    <footer className="text-light py-3" style={{ backgroundColor: "#011B5B" }}>
      <Container>
        <Row>
          <Col md={2}>
            <p>
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="d-flex justify-content-between">
           
                <img src={facebook} alt="Facebook" />
                <img src={google} alt="Google" />
                <img src={apple} alt="Apple" />
                <img src={insta} alt="Instagram" />
            </div>
          </Col>
          <Col md={3}>
            <h5 style={{ color: "#EB8D15" }}>Start a Business</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href='/' className="text-light text-decoration-none">Features</a>
              </li>
              <li className="mb-2">
                <a  href='/' className="text-light text-decoration-none">Solutions</a>
              </li>
              <li className="mb-2">
                <a href='/' className="text-light text-decoration-none">Integrations</a>
              </li>
              <li className="mb-2">
                <a href='/' className="text-light text-decoration-none">Enterprise</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 style={{ color: "#EB8D15" }}>Government Registration</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Partners</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Community</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Developers</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">App</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 style={{ color: "#EB8D15" }}>Compliance & Tax</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Channels</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Scale</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Watch the Demo</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Our Competition</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5 style={{ color: "#EB8D15" }}>BIS & CDSCO</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">About Us</a>

</li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">News</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Leadership</a>
              </li>
              <li className="mb-2">
                <a href="/" className="text-light text-decoration-none">Media Kit</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <a href="/" className="text-light">↑</a>
          <p className="mt-2">&copy; 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
