import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./EntryPage.module.scss";
import { Link } from "react-router-dom";

const EntryPage = () => {
  return (
    <Container className={styles.entrycontainer}>
      <Row className={styles.entryrow}>
        <Col md={4} sm={5} xs={12} className={styles.entrybtn}>
          <Link to="/pl/" className={styles.link}>Polski</Link>
        </Col>
        <Col md={4} sm={5} xs={12} className={styles.entrybtn}>
          <Link to="/en/" className={styles.link}>English</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default EntryPage;
