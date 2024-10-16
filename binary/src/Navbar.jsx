import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="home">
          <div className="navbar-container">
            <div className="navbar-image">
              <img
                src="/unisync.png"
                alt="University Logo"
                className="navbar-logo"
              />
            </div>
            <div className="navbar-para">
              <p>UniSync</p>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="event" className="nav-item">
              Events
            </Nav.Link>
            <Nav.Link href="community" className="nav-item">
              Community Boards
            </Nav.Link>
            <Nav.Link href="edit" className="nav-item">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
