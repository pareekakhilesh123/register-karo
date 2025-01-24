import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from "../images/process/1.png"
import icon2 from "../images/process/2.png"
import icon3 from "../images/process/3.png"
import icon4 from "../images/process/4.png"

const Process = () => {
  

  return (
    <div className="bg-warning py-3">
    
             <Container>
               <Row className="">
                 <Col xs={3}>
                   <div>
                     <img src={icon1} alt="Icon 1" className="mb-2"    loading="lazy"/>
                     <p>Fill up Application Form</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src={icon2} alt="Icon 2" className="mb-2"   loading="lazy" />
                     <p>Make Online Payment</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src={icon3} alt="Icon 3" className="mb-2"    loading="lazy"/>
                     <p>Executive will Process Application</p>
                   </div>
                 </Col>
                 <Col xs={3}>
                   <div>
                     <img src={icon4} alt="Icon 4" className="mb-2"    loading="lazy"/>
                     <p>Get Confirm Mail</p>
                   </div>
                 </Col>
               </Row>
             </Container>
    </div>
  );
};

export default Process;
