import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Contact.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import { Col } from "react-bootstrap";
import SocialMedia from "../../features/SocialMedia/SocialMedia";

const ContactPL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.contactcontainer}>
        <Row className={styles.contactrow}>
          <Col className="col-10">
            <h1>Kontakt</h1>
            <p>Jeśli masz chęć odezwać się - chętnie porozmawiam! Możliwość kontaktu znajdziesz tutaj:</p>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPL;
