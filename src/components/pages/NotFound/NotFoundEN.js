import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./NotFound.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import NotFoundComponent from "../../features/NotFoundComponent/NotFoundComponent";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundEN = (props) => {
  return (
    <>
      <HeaderEN />
      <Container className={styles.notfoundcontainer}>
        <Row className={styles.notfoundrow}>
          <NotFoundComponent
            h1="Oops! Nothing found!"
            description="Such site does not exist."
          ></NotFoundComponent>
          <Button>
            <Link to="/en/">Return to HomePage</Link>
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default NotFoundEN;
