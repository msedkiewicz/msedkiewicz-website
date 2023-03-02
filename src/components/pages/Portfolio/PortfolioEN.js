import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./Portfolio.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import { Col } from "react-bootstrap";
import PortfolioItem from "../../features/PortfolioItem/PortfolioItem";

const PortfolioEN = () => {
  return (
    <>
      <HeaderEN></HeaderEN>
      <Container className={styles.portfoliocontainer}>
        <Row className={styles.portfoliorow}>
          <Col className="col-10">
            <h1>Portfolio</h1>
            <Row>
              <PortfolioItem
              h2="Mamma Mia - pizzeria website"
              project="Link: https://github.com/msedkiewicz/mamma-mia-pizzeria"
              description="Website for pizzeria with takeaway ordering and table reservation."
              technologies="Technologies used: HTML, Sass, Handlebars, JavaScript, AJAX."
              embedId="https://www.youtube.com/embed/ojnzYQOyJ5Y"></PortfolioItem>
              <PortfolioItem
              h2="Blog website"
              project="Link: https://github.com/msedkiewicz/blog-crud-app"
              description="Blog website with options for adding, editing and deleting posts."
              technologies="Technologies used: React, Bootstrap, Redux."
              embedId="https://www.youtube.com/embed/W3KHQc76Krg"></PortfolioItem>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PortfolioEN;
