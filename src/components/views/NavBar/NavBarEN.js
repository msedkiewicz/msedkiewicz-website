import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
const NavBarEN = () => {
  return (
    <div>
      <Navbar
        expand="md"
        variant="dark"
        className={"mb-4 px-4 flex " + styles.navbar}
      >
        <Container>
          <Navbar.Brand
            className={styles.navbarbrand}
            as={NavLink}
            to="/en/"
          >
            MSedkiewicz
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="pl-navbar-nav" />
          <Navbar.Collapse className={styles.navbarcollapse} id="pl-navbar-nav">
          <Nav className={"flex-sm-column flex-md-row " + styles.navlinks}>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/en/"
            >
              Home
            </Nav.Link>
            <Nav.Link className={"px-2 " + styles.navlink} as={NavLink} to="/en/about-me/">
              About me
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/en/curriculum-vitae/"
            >
              CV
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/en/portfolio/"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/en/hobbies/"
            >
              Hobbies
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlink}
              as={NavLink}
              to="/en/contact/"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className={"px-2 " + styles.navlinklanguage}
              as={NavLink}
              to="/pl/"
            >
              <b>PL</b>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarEN;
