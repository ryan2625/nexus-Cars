import React from 'react'
import { NavbarBrand, Navbar, Nav, Container} from 'react-bootstrap'
import "./navBar.css"
import { useState, useEffect } from 'react'
import logoCar from "./logoCar.png"
import BoltIcon from '@mui/icons-material/Bolt';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {

  return (
    <Navbar  collapseOnSelect expand="md" bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"><BoltIcon/><img src={logoCar} alt="" id="brandPicture"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="adjust-Responsive-Nav" id="responsive-navbar-nav">
      <Nav className="me-auto" id="nav-Adjust">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar