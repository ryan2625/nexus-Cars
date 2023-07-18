import React from 'react'
import { NavbarBrand, Navbar, Nav, Container} from 'react-bootstrap'
import "./navBar.css"
import { useState, useEffect } from 'react'
import logoCar from "./logoCar.png"
import BoltIcon from '@mui/icons-material/Bolt';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchIcon from '@mui/icons-material/Search';
function NavBar() {

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth <= 992) {
        setIsDisplayed(true);
      }
    };

    // Initial check
    handleResize();

    // Event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleClicker = () =>{
    setIsDisplayed(!isDisplayed)
  }


  return (
    <Navbar  collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
    <Container className='navBar1'>
      <Navbar.Brand href="#home"><BoltIcon/><img src={logoCar} alt="" id="brandPicture"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  className="adjust-Responsive-Nav" id="responsive-navbar-nav">
      <Nav className="me-auto" id="nav-Adjust">

      <div className={isDisplayed ? "searcherShown" : "searcherNo"}>
      <Form className="d-flex" id="searchBar">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
          <Button variant="light">Search</Button>
          </Form>
        </div>
          <SearchIcon id="searchIcon" onClick={handleClicker}/>
          
        <Nav.Link className="afterNav underLine" href="#home">Home</Nav.Link>
        <Nav.Link className="afterNav underLine" href="#features">Features</Nav.Link>
        <Nav.Link className="afterNav underLine" href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar