import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./EntryPage.module.scss";

const EntryPage = () => {
    return(
        <Container>
            <Row>
                <Col md={3} sm={6} xs={6} className={styles.entry}>Polski</Col>
                <Col md={3} sm={6} xs={6} className={styles.entry}>English</Col>
            </Row>
        </Container>
    )
}

export default EntryPage;