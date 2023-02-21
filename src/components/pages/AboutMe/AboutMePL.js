import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./AboutMe.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";

const AboutMePL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.aboutmecontainer}>
        <Row className={styles.aboutmerow}>
        </Row>
      </Container>
    </>
  );
};

export default AboutMePL;