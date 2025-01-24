import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import photo1 from "../images/bloglayout/Image.webp";
import photo2 from "../images/bloglayout/Image (1).webp";
import photo3 from "../images/bloglayout/Image (2).webp";
import photo4 from "../images/bloglayout/Image (3).webp";
import photo6 from "../images/bloglayout/Image (5).webp";
import photo5 from "../images/bloglayout/Image (4).webp";

const BlogLayout = () => {
  return (
    <div>
      <Container className="my-5">
        <h2 className="text-center mb-4">Accelerate Digital Transformation</h2>
        <Row>
          {[
            {
              title: 'Small Business & Startup',
              author: 'Prabhash Mishra',
              date: '1 Jan 2023',
              description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
              tags: ['Tax & Audit', 'Management'],
              img: photo1,  
            },
            {
              title: 'Scale-Up Company Offer',
              author: 'Mahesh Kumar',
              date: '1 Jan 2023',
              description: 'Mental models are simple expressions of complex processes or relationships.',
              tags: ['Tax', 'Research', 'Compliance'],
              img: photo2,
            },
            {
              title: 'Growing Business Package',
              author: 'Rakhi Verma',
              date: '1 Jan 2023',
              description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
              tags: ['Audit', 'Money Back'],
              img: photo3,
            },
            {
              title: 'Scale-Up Company Offer',
              author: 'Karan Kumar',
              date: '1 Jan 2023',
              description: 'Collaboration can make our teams stronger, and our individual designs better.',
              tags: ['Money', 'Management'],
              img: photo4,
            },
            {
              title: 'Scale-Up Company Offer',
              author: 'Richa Singh',
              date: '1 Jan 2023',
              description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
              tags: ['Tax Return', 'News', 'Audit'],
              img: photo5,
            },
            {
              title: 'Scale-Up Company Offer',
              author: 'Richa Singh',
              date: '1 Jan 2023',
              description: 'JavaScript frameworks make development easy with extensive features and functionalities.',
              tags: ['Tax Return', 'News', 'Audit'],
              img: photo6,
            },
          ].map((blog, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="border-0 shadow-sm">
            
                <Card.Img
                  variant="top"
                  src={blog.img}  
                  alt={`Blog Image ${index + 1}`}
                    loading="lazy"
                />
                <Card.Body>
                
                  <Card.Subtitle className="mb-2 text-muted">
                    {blog.author} • {blog.date}
                  </Card.Subtitle>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <div>
                    {blog.tags.map((tag, idx) => (
                      <Badge bg="secondary" className="me-1" key={idx}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button variant="primary">Show more blogs</Button>
        </div>
      </Container>
    </div>
  );
};

export default BlogLayout;
