import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import photo1 from "../images/videointroduction/1.svg";
import photo2 from "../images/videointroduction/2.svg";

function VideoIntroduction() {
  return (
    <div>
      <Container fluid className="py-5" style={{ backgroundColor: "#1C4670" }}>
        <Row className="align-items-center text-white">
          <Col md={6} className="p-4">
            <h2>Our Video Introductions</h2>
            <p>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna<br />
              vulputate pellentesque a diam tincidunt.
            </p>
            <div className="mb-4">
              <h5>
                <span style={{ color: "#FFA229" }}>
                  <img
                    src={photo1}
                    loading="lazy"
                    alt="Explore ideas together"
                    style={{ width: "24px", marginRight: "8px" }}
                  />
                </span>
                Explore ideas together
              </h5>
              <p>
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
            <div>
              <h5>
                <span style={{ color: "#FFA229" }}>
                  <img
                    src={photo2}
                    alt="Bring those ideas to life"
                    loading="lazy"
                    style={{ width: "24px", marginRight: "8px" }}
                  />
                </span>
                Bring those ideas to life
              </h5>
              <p>
                Engage audience segments and finally create actionable insights.
              </p>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
              }}
            >
              {/* <iframe
                src="https://www.youtube.com/embed"
                title="Video Introduction"
                  loading="lazy"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  border: "none",
                }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VideoIntroduction;
