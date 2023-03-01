import Col from "react-bootstrap/Col";
import styles from "./HeroDescription.module.scss";

const HeroDescription = (props) => {
    return (<Col md={8} sm={12} xs={12} className={styles.herodescription}>{props.children}</Col>)
}

export default HeroDescription;