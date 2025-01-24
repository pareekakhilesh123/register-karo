import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/HeroSection.css";
import Right from "../images/hero/HeroSectionright.webp";
import widget from "../images/hero/widget.png";
import play from "../images/hero/play.svg";

const HeroSection = () => {
  return (
    <div className="hero-section bg-light py-5 position-relative">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="text-section">
              <h5 className="mb-2 d-flex align-items-center">
                ⭐ Google Rating ⭐⭐⭐⭐⭐
              </h5>
              <h1 className="mb-4 text-start">
                Your trusted partner
                <br />
                for compliance business needs
              </h1>
              <p className="text-muted mb-4 text-start">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various <strong>registrations</strong>,{" "}
                <strong>tax filings</strong>, and other <strong>legal matters</strong>.
              </p>

              <div className="stats mb-4 text-start">
                <span className="me-3">
                  <img
                    src={widget}
                    height={24}
                    width={24}
                    alt=""
                    className="m-1"
                  loading="lazy"
                  />
                  <strong>4.5+</strong> Customer Rating
                </span>
                <span className="me-3">
                  <img
                    src={widget}
                    height={24}
                    width={24}
                    alt=""
                    className="m-1"
                       loading="lazy"
                  />
                  <strong>20,000+</strong> Clients
                </span>
                <span>
                  <img
                    src={widget}
                    height={24}
                    width={24}
                    alt=""
                    className="m-1"
                       loading="lazy"
                  />
                  <strong>99.8%</strong> Financial Stability
                </span>
              </div>
              <div className="buttons text-start">
                <Button
                  style={{ backgroundColor: "#1C4670", color: "#ffffff" }}
                  className="me-3"
                >
                  <strong>Talk An Expert</strong>
                </Button>
                <span>
                  <img src={play} className="m-1" alt="Play Icon" loading="lazy" />
                  See how it works
                </span>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="image-section">
              <img src={Right} alt="Hero Illustration" className="img-fluid"    loading="lazy" />
            </div>
          </Col>
        </Row>
      </Container>
      <div
  className="d-none d-lg-flex flex-column gap-3 position-absolute"
  style={{ top: "50%", right: "2%", transform: "translateY(-50%)" }}
>
  {[
    "Annual Compliance",
    "Payroll Services",
    "Company Formation",
    "Annual Compliance",
  ].map((text, index) => (
    <div
      key={index}
      className="p-3 custom-card text-center"
      style={{
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      {text}
    </div>
  ))}
</div>
    </div>
  );
};

export default HeroSection;
