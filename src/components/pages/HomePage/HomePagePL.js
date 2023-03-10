import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./HomePage.module.scss";
import HeroImage from "../../features/HeroImage/HeroImage";
import HeroDescription from "../../features/HeroDescription/HeroDescription";
import NavBarPL from "../../views/NavBar/NavBarPL";
import SocialMedia from "../../features/SocialMedia/SocialMedia";

const HomePagePL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.homepagecontainer}>
        <Row className={styles.homepagerow}>
          <HeroDescription>
            <h1>Lena Sędkiewicz</h1>
            <h2>Web developer po psychologii</h2>
            <SocialMedia />
            <p>
              Do IT ciągnęło mnie jeszcze zanim rozpoczęłam studia na kierunku
              General Psychology. Swoją pierwszą stronę na WordPressie
              postawiłam w 2011 roku. Od tego momentu w wolnym czasie zajmowałam
              się stronami rodziny i znajomych.
            </p>
            <p>
              Po latach zdobywania doświadczenia dziennikarskiego,
              copywriterskiego, pisarskiego, psychologicznego oraz szermierczego
              spełniłam moje marzenie o wejściu do IT.
            </p>
            <p>
              Ze wszystkich zajęć, które wykonywałam do tej pory do właśnie
              kodowanie sprawia mi najwięcej frajdy. Uwielbiam naprawiać błędy w
              kodzie. Satysfakcję sprawiają mi te momenty, gdy po jakimś czasie
              pracy z kodem znajduję dobre rozwiązanie dla konkretnego problemu.
            </p>
            <p>
              Swoją przygodę rozpoczęłam od WordPressa. Wciąż w nim dłubię, choć
              obecnie zajmuje mnie bardziej programowanie w React oraz
              JavaScript.
            </p>
          </HeroDescription>
          <HeroImage />
        </Row>
      </Container>
    </>
  );
};

export default HomePagePL;
