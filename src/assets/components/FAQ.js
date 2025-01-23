import React from 'react'
import {  Container, Accordion, Button } from 'react-bootstrap';

function FAQ() {
  return (
    <div>
      <Container className="my-5">
      <p style={{ color: "#EB8D15" }}>FAQ</p>
        <h2 className="text-center mb-4"> 
        Frequent Ask Questions </h2>
        <Accordion defaultActiveKey="0">
        
        <Accordion.Item eventKey="0">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports  .
            </Accordion.Body>
          </Accordion.Item>
 
          <Accordion.Item eventKey="1">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports  .
            </Accordion.Body>
          </Accordion.Item>
       
          <Accordion.Item eventKey="2">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports  .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports .
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports  .
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What file types can I recover?</Accordion.Header>
            <Accordion.Body>
              This software supports  .
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="text-center mt-4">
          <Button variant="primary">Show more FAQs</Button>
        </div>
      </Container>
    </div>
  )
}

export default FAQ