import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CV.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";

const CurriculumPL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.cvcontainer}>
        <Row className={styles.cvrow}>
          <h1>Curriculum Vitae</h1>
          <Col md={4} sm={12} xs={12}>
            <h2>Umiejętności</h2>
            <ul>
              <li>HTML, CSS, SASS, RWD, Bootstrap</li>
              <li>JavaScript, React, Redux, Typescript</li>
              <li>AJAX, Express, WebSocket, REST API</li>
              <li>MySQL, MongoDB, Mongoose, GraphQL, TypeORM</li>
              <li>Node, PHP, Apache, Nginx, Local, XAMPP</li>
              <li>NPM, Git, Webpack, Github</li>
              <li>NestJS, Gatsby</li>
              <li>WordPress, Joomla, Webflow</li>
              <li>VSC, FileZilla, Notepad++ </li>
              <li>Scrum, Kanban, Agile, Jira, Clickup, Trello</li>
              <li>Technical SEO, Screaming Frog, Ryte</li>
              <li>Google Tag Manager, Google Analytics</li>
              <li>Linux</li>
            </ul>
            <h2>Języki obce</h2>
            <ul>
              <li>Angielski - C1</li>
              <li>Niemiecki - A1</li>
              <li>Francuski - A1</li>
            </ul>
            <h2>Zainteresowania</h2>
            <ul>
              <li>Fotografia</li>
              <li>
                Psychologia (odporność psychiczna, WWO, psychologia społeczna,
                TSR)
              </li>
              <li>Szermierka (szpada, miecz długi)</li>
              <li>Formuła 1, Premier League (piłka nożna)</li>
              <li>
                Szydełkowanie, gry planszowe (szczególnie Terraformacja Marsa)
              </li>
            </ul>
          </Col>
          <Col md={8} sm={12} xs={12}>
            <h2>Doświadczenie</h2>
            <h3>
              <b>Onely, Texas, USA</b> — Junior Web Developer (wcześniej Junior
              WordPres Developer)
            </h3>
            <p>
              <i>Listopad 2021 - obecnie</i>
            </p>
            <p>
              <ul>
                <li>
                  Tworzenie nowych komponentów i funkcjonalności w oparciu o
                  Javascript, PHP, ACF
                </li>
              </ul>
            </p>
            Writing new components and and styling website (Webpack, Sass)
            WordPress management (updates, code refactoring) SEO monitoring of
            website and implementing SEO guidelines Lena Inspirations, Warsaw,
            Poland — self-employed JULY 2016 - DECEMBER 2021 Creating and
            managing WordPress websites Translating technical and archaeology
            texts (EN - PL, PL - EN) Copywriting (product texts) Conducting SFBT
            therapy sessions TRAININGS / CONFERENCES: Kodilla — Fullstack
            Developer Bootcamp MAY 2022 - PRESENT Other courses:
            https://msedkiewicz.pl/trainings-conferences/ EDUCATION AWF,
            Katowice — IInd degree coach (fencing) 2017 - 2019 SWPS University,
            Warsaw — master’s degree in general psychology (studied in English
            language) 2010-2017
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurriculumPL;
