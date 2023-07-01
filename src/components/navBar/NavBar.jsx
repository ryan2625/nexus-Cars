import React from 'react'
import { NavbarBrand, Navbar, Nav, Container} from 'react-bootstrap'
import "./navBar.css"
function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Nav<img src="logoCar.png" alt="" id="brandPicture"/></Navbar.Brand>
      <Nav className="me-auto nav-Adjust">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar