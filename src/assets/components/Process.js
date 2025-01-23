import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Process = () => {
  

  return (
    <div className="bg-warning py-3">
    
             <Container>
               <Row className="text-center">
                 <Col xs={3}>
                   <div>
                     <img src="icon1.png" alt="Icon 1" className="mb-2" />
                     <p>Fill up Application Form</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src="icon2.png" alt="Icon 2" className="mb-2" />
                     <p>Make Online Payment</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src="icon3.png" alt="Icon 3" className="mb-2" />
                     <p>Executive will Process Application</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src="icon4.png" alt="Icon 4" className="mb-2" />
                     <p>Get Confirm Mail</p>
                   </div>
                 </Col>
               </Row>
             </Container>
    </div>
  );
};

export default Process;
