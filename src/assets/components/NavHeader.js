import React from 'react';
import { Nav } from 'react-bootstrap';

function NavHeader() {
  return (
    <div style={{ backgroundColor: '#1C4670', padding: '10px' }}>
      <div className=" d-lg-flex align-items-center justify-content-end">
        <span className="me-3"  style={{ color: 'white' }}>
          <i className="bi bi-envelope" style={{ color: 'white' }}></i> www.registerkaro.in
        </span>
        <span className="me-3" style={{ color: 'white' }}>
          <i className="bi bi-telephone" style={{ color: 'white' }}></i> +918447746183
        </span>
        <Nav >
          <Nav.Link href="https://www.instagram.com" target="_blank">
            <i className="bi bi-instagram" style={{ color: 'white' }}></i>
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com" target="_blank">
            <i className="bi bi-facebook" style={{ color: 'white' }}></i>
          </Nav.Link>
          <Nav.Link href="https://www.twitter.com" target="_blank">
            <i className="bi bi-twitter" style={{ color: 'white' }}></i>
          </Nav.Link>
          <Nav.Link href="https://www.pinterest.com" target="_blank">
            <i className="bi bi-pinterest" style={{ color: 'white' }}></i>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default NavHeader;
