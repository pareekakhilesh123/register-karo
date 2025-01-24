import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import "../styles/Header.css"
import NavHeader from './NavHeader';
import logo from '../images/header/logo.png';

function Header() {
  return (
    <>
        <NavHeader />
      <div ClassName="navbar">
      <Navbar bg="light" expand="lg" className="border-bottom">
      <Container>
     
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="RegisterKaro"
            loading="lazy"
           /> 
         
        </Navbar.Brand>

        
        <Navbar.Toggle aria-controls="navbar-nav" />

       
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Our Services" id="services-dropdown">
              <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="#service3">Service 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Button variant="warning" className="ms-2">
              Talk An Expert
            </Button>
          </Nav>
        </Navbar.Collapse>
 
      
      </Container>
    </Navbar>

      </div>
    </>
  )
}

export default Header