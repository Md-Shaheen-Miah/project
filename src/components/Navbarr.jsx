
import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  './style.css';



 const Navbarr = () => {
  return (
  
    <Navbar expand="lg" className="test" >
    <Container fluid>
      <Navbar.Brand className='white' href="#">Navbar </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px',marginLeft:'40%' }}
          navbarScroll
        >
          <Nav.Link  className='white' href="/Home">Home</Nav.Link>
          <Nav.Link className='white' href="/Contact">Contact</Nav.Link>
          <NavDropdown className='white' title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item  href="#action3">Items</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
           
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='white' href="/About">
           About
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  )
}

export default Navbarr;
