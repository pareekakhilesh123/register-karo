import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import photo1 from '../images/testimonial/photo1.png';

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Chris',
      title: 'President and CEO, PrintReach, USA',
      photo: photo1,
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Chris',
      title: 'President and CEO, PrintReach, USA',
      photo: photo1,
    },
    {
      quote:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Chris',
      title: 'President and CEO, PrintReach, USA',
      photo: photo1,
    },
  ];

  return (
    <div style={{ backgroundColor: '#013a7d', padding: '50px 0' }}>
      <Container>
      <p style={{ color: "#EB8D15" }}>EXPLORE OUR BLOGS</p>
        <h2 className="text-center text-white mb-5">What peoples say about us</h2>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card
                style={{
                  borderRadius: '15px',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                }}
              >
                <Card.Body>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '4rem',
                        color: '#013a7d',
                        fontWeight: 'bold',
                      }}
                    >
                      &ldquo;
                    </span>
                    <div className="d-flex justify-content-end">
                      <span className="text-warning fs-5 me-1">⭐</span>
                      <span className="text-warning fs-5 me-1">⭐</span>
                      <span className="text-warning fs-5 me-1">⭐</span>
                      <span className="text-warning fs-5 me-1">⭐</span>
                      <span className="text-warning fs-5">⭐</span>
                    </div>
                  </div>
                  <blockquote
                    className="blockquote mb-4"
                    style={{ fontSize: '1.1rem', color: '#6c757d' }}
                  >
                    {testimonial.quote}
                  </blockquote>
                </Card.Body>
                <Card.Footer
                  className="d-flex align-items-center border-0"
                  style={{
                    backgroundColor: 'transparent',
                    paddingLeft: '0',
                  }}
                >
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      loading="lazy"
                  />
                  <div>
                    <strong style={{ color: '#523e1e' }}>{testimonial.name}</strong>
                    <br />
                    <small style={{ color: '#6c757d' }}>{testimonial.title}</small>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TestimonialsSection;
