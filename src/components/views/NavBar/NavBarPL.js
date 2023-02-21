import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Container from "react-bootstrap/Container";

const NavBarPL = () => {
  return (
    <div>
      <Navbar
        expand="md"
        variant="dark"
        className={"mb-4 px-4 flex " + styles.navbar}
      >
        <Container>
          <Navbar.Brand className={styles.navbarbrand} as={NavLink} to="/pl/">
            MSedkiewicz
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="pl-navbar-nav" />
          <Navbar.Collapse className={styles.navbarcollapse} id="pl-navbar-nav">
          <Nav className={"flex-sm-column flex-md-row " + styles.navlinks}>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/pl/"
            >
              Strona główna
            </Nav.Link>
            <Nav.Link className={"px-2 " + styles.navlink} as={NavLink} to="/pl/o-mnie/">
              O mnie
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/pl/curriculum-vitae/"
            >
              CV
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/pl/portfolio/"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/pl/hobby/"
            >
              Hobby
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/pl/kontakt/"
            >
              Kontakt
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlinklanguage}
              as={NavLink}
              to="/en/"
            >
              <b>EN</b>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarPL;
