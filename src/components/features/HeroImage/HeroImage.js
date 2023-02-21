import Col from "react-bootstrap/Col";
import styles from "./HeroImage.module.scss"
import pic from "../../../assets/homepage/magdalena-sedkiewicz-fot-adam-mlodozeniec.jpg"
const HeroDescription = () => {
    return (<Col md={6} sm={6} className={styles.heroimage}>
        <img src={pic} alt="Magdalena Sędkiewicz. Fot.: Adam Młodożeniec"></img>
    </Col>)
}

export default HeroDescription;