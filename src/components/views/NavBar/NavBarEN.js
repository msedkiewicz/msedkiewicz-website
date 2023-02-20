import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarEN = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 px-4 rounded d-flex justify-content-between"
    >
      <Navbar.Brand className="justify-content-start" as={NavLink} to="/en/">
        MSedkiewicz
      </Navbar.Brand>
      <Nav className="flex-sm-column flex-md-row">
        <Nav.Link className="px-1" as={NavLink} to="/en/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/en/about/">
          About
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/en/curriculum-vitae/">
          CV
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/en/portfolio/">
          Portfolio
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/en/hobbies/">
          Hobbies
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/en/contact/">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBarEN;