import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./HomePage.module.scss";

const HomePagePL = () => {
    return (<Container>
        <Row>
            <Col md={6} sm={6} xs={12}></Col>
            <Col md={6} sm={6} className={styles.heroimage}></Col>
        </Row>
    </Container>)
}

export default HomePagePL;