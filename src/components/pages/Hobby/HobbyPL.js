import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Hobby.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import { Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import crochetpic1 from "../../../assets/hobby/crochet/poduszka1.jpg"
import crochetpic2 from "../../../assets/hobby/crochet/kocyk1.jpg"
import crochetpic3 from "../../../assets/hobby/crochet/koperta1.jpg"
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
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crochetpic1}
                  alt="Poszewka na poduszkę wykonana na szydełku"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crochetpic2}
                  alt="Kocyk na prezent"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={crochetpic3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HobbyPL;
