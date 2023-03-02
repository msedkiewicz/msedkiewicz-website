import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Contact.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import { Col } from "react-bootstrap";
import SocialMedia from "../../features/SocialMedia/SocialMedia";

const ContactEN = () => {
  return (
    <>
      <HeaderEN></HeaderEN>
      <Container className={styles.contactcontainer}>
        <Row className={styles.contactrow}>
          <Col className="col-10">
            <h1>Contact</h1>
            <p>If you want to talk, or just say hello - I'd be happy to answer! You can contact me here:</p>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactEN;
