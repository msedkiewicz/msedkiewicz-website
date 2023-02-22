import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CV.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import Accordion from "react-bootstrap/Accordion";

const CurriculumPL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.cvcontainer}>
        <Row className={styles.cvrow}>
          <h1>Curriculum Vitae</h1>
          <Col md={4} sm={12} xs={12}>
            <h2>Umiejętności</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.h3}>Programowanie</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>HTML, CSS, SASS, RWD, Bootstrap</p>
                  <p>JavaScript, React, Redux, Typescript</p>
                  <p>AJAX, Express, WebSocket, REST API</p>
                  <p>MySQL, MongoDB, Mongoose, GraphQL, TypeORM</p>
                  <p>Node, PHP, Apache, Nginx, Local, XAMPP</p>
                  <p>NPM, Git, Webpack, Github</p>
                  <p>VSC, FileZilla, Notepad++</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className={styles.h3}>Frameworki / CMSy / Systemy</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>NestJS, Gatsby</p>
                  <p>WordPress, Joomla</p>
                  <p>Webflow</p>
                  <p>Linux</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3 className={styles.h3}>Organizacja pracy</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Scrum, Kanban, Agile</p>
                  <p>Jira, Clickup, Trello</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h3 className={styles.h3}>SEO / Marketing</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Techniczne SEO, Screaming Frog, Ryte</p>
                  <p>Google Tag Manager, Google Analytics</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3 className={styles.h3}>Języki obce</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Angielski - C1</p>
                  <p>Niemiecki - A1</p>
                  <p>Francuski - A1</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3 className={styles.h3}>Zainteresowania</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Fotografia</p>
                  <p>
                    Psychologia (odporność psychiczna, WWO, psychologia
                    społeczna, TSR)
                  </p>
                  <p>Szermierka (szpada, miecz długi)</p>
                  <p>Formuła 1, Premier League (piłka nożna)</p>
                  <p>
                    Szydełkowanie, gry planszowe (szczególnie Terraformacja
                    Marsa)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.h3}>Obowiązki</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Tworzenie nowych komponentów i funkcjonalności w oparciu o
                    JavaScript, PHP, ACF
                  </p>
                  <p>Refaktorowanie kodu</p>
                  <p>
                    Tworzenie i edycja styli dla obecnych oraz nowych elementów
                    (CSS, SASS, Webpack)
                  </p>
                  <p>
                    Zarządzanie stroną opartą o WordPress (aktualizacje, nowe
                    funkcjonalności) oraz o Webflow
                  </p>
                  <p>
                    Monitorowanie stanu strony; implementacja SEO na bazie
                    własnych obserwacji oraz wskazówek specjalistów SEO
                  </p>
                  <p>Zarządzanie Google Tag Managerem</p>
                  <p>Przygotowanie do migracji (React, Gatsby)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h3>
              <b>Lena Inspirations, Warszawa</b> — samozatrudnienie
            </h3>
            <p>
              <i>Lipiec 2016 - Grudzień 2021</i>
            </p>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.h3}>Obowiązki</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Tworzenie oraz zarządzanie stronami opartymi o WordPress
                    (HTML, CSS, PHP)
                  </p>
                  <p>
                    Tłumaczenia PL - EN oraz EN - PL (techniczne,
                    archeologiczne, produktowe, marketingowe)
                  </p>
                  <p>
                    Copywriting - tworzenie teksów o tematyce produktowej,
                    zwązanej z tworzeniem i zarządzaniem stron WWW
                  </p>
                  <p>
                    Prowadzenie sesji terapeutycznych w oparciu o TSR (podejście
                    skoncentrowane na rozwiązaniach)
                  </p>
                  <p>
                    Nauczanie przedmiotów psychologicznych w szkole policealnej
                    GoWork
                  </p>
                  <p>
                    Nauczanie jęz. angielskiego w szkole językowej; udzielanie
                    korepetycji
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2>Szkolenia (programowanie, SEO)</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.h3}>
                    Kodilla - Bootcamp Fullstack Developer
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>Maj 2022 - obecnie</i>
                  </p>
                  <p>
                    Technologie w ramach kursu: HTML, CSS, RWD, Bootstrap, NPM,
                    Git, JavaScript, AJAX, React, Webpack, Redux, Node, Express,
                    WebSocket, MongoDB i Mongoose, Jira, TypeScript, NestJS,
                    MySQL, TypeORM
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3 className={styles.h3}>Konferencje</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2023</i>
                  </p>
                  <p></p>
                  <p><i>2021</i></p>
                  <p>Sierpień - CONFidence Legends 20 Edycja (uczestnik)</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3 className={styles.h3}>Kursy online</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2023</i>
                  </p>
                  <p>Zaawansowane strategie SEO na 2023 r. - Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge (Udemy)</p>
                  <p>Kompleksowy kurs SEO na 2023 + SEO dla WordPressa - The Ultimate SEO Training 2023 + SEO for WordPress Websites (Udemy)</p>
                  <p>
                    <i>2022</i>
                  </p>
                    <p>Kurs Google Tag Manager - Google Tag Manager (GTM) Training Course - From Zero to Hero (Udemy)</p>
                  <p><i>2019</i></p>
                  <p>Kurs Eweliny Muc "WP dla Zielonych"</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2>Inne szkolenia</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.h3}>Psychologia</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2023</i>
                  </p>
                  <p></p>
                  <p>
                    <i>2021</i>
                  </p>
                  <p>
                    Sierpień - Szkolenie z budowania relacji interpersonalnych
                    (TROP)
                  </p>
                  <p>
                    <i>2019</i>
                  </p>

                  <p>Szkolenie TSR II stopnia (CTSR)</p>
                  <p>
                    <i>2013</i>
                  </p>
                  <p>Szkolenie TSR I stopnia (CTSR)</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className={styles.h3}>Inne</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2020</i>
                  </p>
                  <p>
                    Czerwiec - szkolenie Adobe Photoshop, moduł I (IT Media)
                  </p>
                  <p>
                    <i>2019</i>
                  </p>
                  <p>Maj - szkolenie Adobe Lightroom (IT Media)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2>Edukacja</h2>
            EDUCATION AWF, Katowice — IInd degree coach (fencing) 2017 - 2019
            SWPS University, Warsaw — master’s degree in general psychology
            (studied in English language) 2010-2017
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurriculumPL;
