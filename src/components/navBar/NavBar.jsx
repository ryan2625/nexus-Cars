import React from 'react'
import { NavbarBrand, Navbar, Nav, Container} from 'react-bootstrap'
import "./navBar.css"
import logoCar from "./logoCar.png"
import BoltIcon from '@mui/icons-material/Bolt';
function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home"><BoltIcon/><img src={logoCar} alt="" id="brandPicture"/></Navbar.Brand>
      <Nav className="me-auto" id="nav-Adjust">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar