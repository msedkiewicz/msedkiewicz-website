import { Col } from "react-bootstrap";
import styles from "./NotFoundComponent.module.scss";

const NotFoundComponent = (props) => {
  return (
    <>
      <Col className="col-10">
        <h1 className={styles.h1notfound}>{props.h1}</h1>
        <p className={styles.notfound}>404</p>
        <p className={styles.pnotfound}>{props.description}</p>
      </Col>
    </>
  );
};

export default NotFoundComponent;
