import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Hobby.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import { Col } from "react-bootstrap";
import HobbySliderPL from "../../features/HobbySlider/HobbySliderPL";

const HobbyPL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.hobbycontainer}>
        <Row className={styles.hobbyrow}>
          <Col className="col-10">
            <h1>Szydełkowanie</h1>
            <p>
              Szydełkowanie jest dobre na wszystko i do wszystkiego: wyyścigu F1,
              imprezy, a także nudnych spotkań w firmie ;)
            </p>
            <HobbySliderPL />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HobbyPL;
