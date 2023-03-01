import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./HomePage.module.scss";
import HeroImage from "../../features/HeroImage/HeroImage";
import HeroDescription from "../../features/HeroDescription/HeroDescription";
import HeaderEN from "../../views/Header/HeaderEN";
import SocialMedia from "../../features/SocialMedia/SocialMedia";

const HomePageEN = () => {
  return (
    <>
      <HeaderEN />
      <Container className={styles.homepagecontainer}>
        <Row className={styles.homepagerow}>
          <HeroDescription>
            <h1>Lena Sędkiewicz</h1>
            <h2>Web developer who graduated psychology</h2>
            <SocialMedia />
            <p>
              I was interested in programming even before I started studying
              General Psychology. I have created my first WordPress website in
              2011. Since then in my free time I took care of my family and
              friends websites.
            </p>
            <p>
              After years of gaining experience in journalism, copywriting, book
              writing and publishing, psychology and fencing I fulfilled my
              dream and I started my career in IT.
            </p>
            <p>
              From all the things I tried in my life coding gives me most satisfaction. I just love repairing bugs and those moments of insights when, after longer coding, I find solution for the coding problem.
            </p>
            <p>
              My journey started with WordPress. I still work with it, however currently I'm more engaged in React and JavaScript programming.
            </p>
          </HeroDescription>
          <HeroImage />
        </Row>
      </Container>
    </>
  );
};

export default HomePageEN;
