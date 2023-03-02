import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Hobby.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import { Col } from "react-bootstrap";
import HobbySliderEN from "../../features/HobbySlider/HobbySliderEN";

const HobbyEN = () => {
  return (
    <>
      <HeaderEN></HeaderEN>
      <Container className={styles.hobbycontainer}>
        <Row className={styles.hobbyrow}>
          <Col className="col-10">
            <h1>Crochet</h1>
            <p>
              Crochet is the best medicine and it fits in many activities:
              watching F1 races, partying and boring company meetings ;)
            </p>
            <HobbySliderEN />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HobbyEN;
