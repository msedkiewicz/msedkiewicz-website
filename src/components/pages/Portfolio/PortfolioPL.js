import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Portfolio.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import { Col } from "react-bootstrap";
import PortfolioItem from "../../features/PortfolioItem/PortfolioItem";

const PortfolioPL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.portfoliocontainer}>
        <Row className={styles.portfoliorow}>
          <Col className="col-10">
            <h1>Portfolio</h1>
            <Row>
              <PortfolioItem
              h2="Mamma Mia - strona dla pizzerii"
              project="Link: https://github.com/msedkiewicz/mamma-mia-pizzeria"
              description="Strona dla pizzerii z możliwością zamówienia posiłku online oraz rezerwacji miejsca."
              technologies="Wykorzystane technologie: HTML, Sass, Handlebars, JavaScript, AJAX."
              embedId="https://www.youtube.com/embed/ojnzYQOyJ5Y"></PortfolioItem>
              <PortfolioItem
              h2="Strona Blogowa"
              project="Link: https://github.com/msedkiewicz/blog-crud-app"
              description="Strona blogowa z możliwością dodawania, edycji i usuwania wpisów."
              technologies="Wykorzystane technologie: React, Bootstrap, Redux."
              embedId="https://www.youtube.com/embed/W3KHQc76Krg"></PortfolioItem>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PortfolioPL;
