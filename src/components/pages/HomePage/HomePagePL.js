import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./HomePage.module.scss";
import HeroImage from "../../features/HeroImage/HeroImage";
import HeroDescription from "../../features/HeroDescription/HeroDescription";
import NavBarPL from "../../views/NavBar/NavBarPL";

const HomePagePL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.homepagecontainer}>
        <Row className={styles.homepagerow}>
          <HeroDescription>Hello World!</HeroDescription>
          <HeroImage />
        </Row>
      </Container>
    </>
  );
};

export default HomePagePL;
