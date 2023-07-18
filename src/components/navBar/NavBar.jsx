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

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleClicker = () =>{
    setIsDisplayed(!isDisplayed)
  }

  const [expanded, setExpanded] = useState(false);
  
  const toggleNavbar = () => {
    setExpanded(!expanded);
    console.log("FINASCUHYB")
  };

  return (
    <Navbar  collapseOnSelect expand="lg" bg="light" data-bs-theme="light" onToggle={toggleNavbar}>
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
          <div className="dropping">
         <NavDropdown
              id="dropDownExmaple"
              title="Home"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Trade-In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Inventory
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Get a Quote</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Nexus Owners
              </NavDropdown.Item>
            </NavDropdown>
            </div>
        <Nav.Link className="afterNav underLine" href="#features" id="featuresss">Features</Nav.Link>
        <Nav.Link className="afterNav underLine" href="#pricing">Pricing</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar