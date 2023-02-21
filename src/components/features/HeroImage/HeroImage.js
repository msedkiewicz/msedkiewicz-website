import Col from "react-bootstrap/Col";
import styles from "./HeroImage.module.scss"
import pic from "../../../assets/homepage/magdalena-sedkiewicz-fot-adam-mlodozeniec.jpg"
const HeroDescription = () => {
    return (<Col md={4} className={styles.heroimage}>
        <img src={pic} className={styles.imghero} alt="Magdalena Sędkiewicz. Fot.: Adam Młodożeniec"></img>
    </Col>)
}

export default HeroDescription;