import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaInstagram, FaFacebook, FaLinkedin} from "react-icons/fa";
import logo1 from '../elephant.png'


function Navbar1() {
  return (
    <>
    <Navbar bg="primary">
        <Container  className="d-flex justify-content-end">
            <Nav>
                <Nav.Link href='#instagram'><FaInstagram /></Nav.Link>
                <Nav.Link href='#facebook'><FaFacebook /></Nav.Link>
                <Nav.Link href='#linkedIn'><FaLinkedin /></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      
        <Navbar.Brand href="#" className='title-font text-primary'> 
        <img src={logo1} className='elephant' alt="logo" />
         z-elimu</Navbar.Brand>
        <Nav className="text-body">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mathematics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                English
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Swahili</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}
export default Navbar1;