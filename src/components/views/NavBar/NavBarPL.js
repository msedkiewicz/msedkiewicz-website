import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBarPL = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 px-4 rounded d-flex justify-content-between"
    >
      <Navbar.Brand className="justify-content-start" as={NavLink} to="/pl/">
        MSedkiewicz
      </Navbar.Brand>
      <Nav className="flex-sm-column flex-md-row">
        <Nav.Link className="px-1" as={NavLink} to="/pl/">
          Strona główna
        </Nav.Link>
        <Nav.Link as={NavLink} to="/pl/o-mnie/">
          O mnie
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/pl/curriculum-vitae/">
          CV
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/pl/portfolio/">
          Portfolio
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/pl/hobby/">
          Hobby
        </Nav.Link>
        <Nav.Link className="px-1" as={NavLink} to="/pl/kontakt/">
          Kontakt
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBarPL;