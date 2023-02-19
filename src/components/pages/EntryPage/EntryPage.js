import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./EntryPage.module.scss";

const EntryPage = () => {
  return (
    <Container className={styles.entrycontainer}>
      <Row className={styles.entryrow}>
        <Col md={3} sm={5} xs={5} className={styles.entrybtn}>
          <h2>Polski</h2>
        </Col>
        <Col md={3} sm={5} xs={5} className={styles.entrybtn}>
          <h2>English</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default EntryPage;
