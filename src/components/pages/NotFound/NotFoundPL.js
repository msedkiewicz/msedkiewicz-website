import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./NotFound.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import NotFoundComponent from "../../features/NotFoundComponent/NotFoundComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPL = (props) => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.notfoundcontainer}>
        <Row className={styles.notfoundrow}>
          <NotFoundComponent
            h1="Oops! Tu nic nie ma!"
            description="Taka strona nie istnieje."
          ></NotFoundComponent>
          <Button>
            <Link to="/pl/">Powrót do strony głównej</Link>
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundPL;
