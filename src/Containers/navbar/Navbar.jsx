import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../../Containers";
import { About } from "../../Containers";
import { Services } from "../../Containers";
import { Contact } from "../../Containers";
import "./Navbar.css";
import SiteLogo from "../../assets/SiteLogo.png";

const Navigation = () => {
  return (
    <Router>
      <Navbar className="sticky-top NavBg" variant="light" expand="lg">
        <Container className="Nav-container">
          <Navbar.Brand className="NavImg" href="#home">
            <img
              src={SiteLogo}
              width={"86px"}
              height={"86px"}
              className="ms-auto text-center mb-2 mb-lg-0"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="tttogler d-flex d-lg-none flex-column justify-content-around"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center mb-2 mb-lg-0 fs-5">
              <Nav.Link as={Link} to={"/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/Services"}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
