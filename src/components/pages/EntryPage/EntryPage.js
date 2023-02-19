import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./EntryPage.module.scss";

const EntryPage = () => {
    return(
            <Container>
              <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
              </Row>
            </Container>
        // <Container>
        //     <Row>
        //         <Col md={3} sm={6} xs={6} className={styles.entry}>Polski</Col>
        //         <Col md={3} sm={6} xs={6} className={styles.entry}>English</Col>
        //     </Row>
        // </Container>
    )
}

export default EntryPage;