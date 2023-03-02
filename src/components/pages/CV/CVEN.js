import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./CV.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import Accordion from "react-bootstrap/Accordion";
import SocialMedia from "../../features/SocialMedia/SocialMedia";
import Pdf from "./MSedkiewiczResume0103.pdf";

const CurriculumEN = () => {
  return (
    <>
      <HeaderEN></HeaderEN>
      <Container className={styles.cvcontainer}>
        <Row className={styles.cvrow}>
          <h1>Curriculum Vitae</h1>
          <Row>
            <Col md={4} sm={12} xs={12}>
              <SocialMedia />
            </Col>
            <Col md={8} sm={12} xs={12}>
              <div className={styles.cvbuttons}>
                <a href={Pdf} target="_blank" rel="noreferrer">
                  &nbsp; &nbsp; CV in English - PDF
                </a>
              </div>
            </Col>
          </Row>
          <Col md={4} sm={12} xs={12}>
            <h2 className={styles.cvh2}>Skills</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Programming</h3>
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
                  <h3 className={styles.cvh3}>Frameworks / CMS' / Systems</h3>
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
                  <h3 className={styles.cvh3}>Work organization</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Scrum, Kanban, Agile</p>
                  <p>Jira, Clickup, Trello</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>SEO / Marketing</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>Technical SEO, Screaming Frog, Ryte</p>
                  <p>Google Tag Manager, Google Analytics</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Languages</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>English - C1</p>
                  <p>Polish - native</p>
                  <p>German - A1</p>
                  <p>French - A1</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2 className={styles.cvh2}>Hobbies</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Body>
                  <p>Photography</p>
                  <p>Psychology (resilience, HSP, social psychology, BSFT)</p>
                  <p>Fencing (epée, longsword)</p>
                  <p>Formula 1, Premier League</p>
                  <p>Crochet, board games (especially Terraforming Mars)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={8} sm={12} xs={12}>
            <h2 className={styles.cvh2}>Experience</h2>
            <h3>
              <b>Onely, Texas, USA</b> — Junior Web Developer (previously Junior
              WordPress Developer)
            </h3>
            <p>
              <i>November 2021 - currently</i>
            </p>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Job responsibilities</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Writing new components and functionalities based on
                    JavaScript, PHP, ACF
                  </p>
                  <p>Code refactoring</p>
                  <p>
                    Writing and editing styling for existing and new elements
                    (CSS, SASS, Webpack)
                  </p>
                  <p>
                    Management of WordPress based and Webflow based websites
                    (updates, new functionalities)
                  </p>
                  <p>
                    Monitoring site condition; implementing my own and SEO
                    specialists SEO guidelines
                  </p>
                  <p>Google Tag Manager Management</p>
                  <p>Preparations for migration (React, Gatsby)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h3 className={styles.cvh2}>
              <b>Lena Inspirations, Warsaw</b> — self-employed
            </h3>
            <p>
              <i>July 2016 - December 2021</i>
            </p>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Job responsibilities</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Creating and managing of WordPress based websites (HTML,
                    CSS, PHP)
                  </p>
                  <p>
                    Translating texts from PL to EN and EN -to PL (technical,
                    archaeological, product, marketing texts)
                  </p>
                  <p>
                    Copywriting - writing product descrpitions, content about
                    creating and managing websites
                  </p>
                  <p>Conducting SFBT therapy sessions</p>
                  <p>
                    Teaching psychological subject in GoWork post-graduate
                    school
                  </p>
                  <p>
                    Teaching english in language school and private tutoring
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2 id="trainings" className={styles.cvh2}>
              Trainings (programming, SEO)
            </h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>
                    Kodilla - Bootcamp Fullstack Developer
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>May 2022 - currently</i>
                  </p>
                  <p>
                    Coding course with 1:1 mentoring, group and individual
                    projects.
                  </p>
                  <p>
                    Technologies involved: HTML, CSS, RWD, Bootstrap, NPM, Git,
                    JavaScript, AJAX, React, Webpack, Redux, Node, Express,
                    WebSocket, MongoDB i Mongoose, Jira, TypeScript, NestJS,
                    MySQL, TypeORM
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Conferences / trainings</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2022</i>
                  </p>
                  <p>
                    Technical SEO Certification -{" "}
                    <a
                      className={styles.cvlinks}
                      href="https://www.bluearrayacademy.com/courses/technical-seo-certification"
                    >
                      BlueArray Academy
                    </a>
                  </p>
                  <p>
                    Cyber Threats course by{" "}
                    <a className={styles.cvlinks} href="https://vod.szurek.tv/">
                      Kacper Szurek
                    </a>{" "}
                    (Kurs cyfrowe zagrożenia)
                  </p>
                  <p>Dev.js Summit</p>
                  <p>
                    Web Applications Security training (
                    <a
                      className={styles.cvlinks}
                      href="https://niebezpiecznik.pl/szkolenia/atakowanie-ochrona-www/"
                    >
                      Niebezpiecznik
                    </a>
                    )
                  </p>
                  <p>
                    <a className={styles.cvlinks} href="https://warsawjs.com/">
                      Warsaw JS
                    </a>{" "}
                    workshops: : #63 (React), #64 (Javascript), #65 (NestJS),
                    #66 (React);
                  </p>
                  <p>
                    <i>2021</i>
                  </p>
                  <p>CONFidence Legends - 20 Editon</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Online courses</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2023</i>
                  </p>
                  <p>
                    Building Faster Websites: Get Satrted with Web Performance
                    (Udemy)
                  </p>
                  <p>
                    Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge
                    (Udemy)
                  </p>
                  <p>
                    The Ultimate SEO Training 2023 + SEO for WordPress Websites
                    (Udemy)
                  </p>
                  <p>
                    <i>2022</i>
                  </p>
                  <p>
                    Google Tag Manager (GTM) Training Course - From Zero to Hero
                    (Udemy)
                  </p>
                  <p>
                    Setting up Cloudflare for website security and performance
                    (Udemy)
                  </p>
                  <p>
                    <i>2019</i>
                  </p>
                  <p>
                    "WP for newbie" course from Ewelina Muc ("WP dla Zielonych")
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2 className={styles.cvh2}>Other trainings</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Psychology</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2023</i>
                  </p>
                  <p>
                    BSFT and working with fear (TSR w obliczu lęku - by LETSR)
                  </p>
                  <p>
                    <i>2022</i>
                  </p>
                  <p>EACLIPT conference (clinical psycholgy)</p>
                  <p>
                    <i>2021</i>
                  </p>
                  <p>Training in building interpersonal relationships (TROP)</p>
                  <p>
                    <i>2019</i>
                  </p>

                  <p>
                    IInd degree training in Brief Solution Focused Therapy
                    (CTSR)
                  </p>
                  <p>
                    <i>2013</i>
                  </p>
                  <p>
                    Ist degree training in Brief Solution Focused Therapy (CTSR)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>Other</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2020</i>
                  </p>
                  <p>Adobe Photoshop workshop, module I (IT Media)</p>
                  <p>
                    <i>2019</i>
                  </p>
                  <p>Adobe Lightroom workshop (IT Media)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <h2 className={styles.cvh2}>Education</h2>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>SWPS University, Warsaw</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2010-2017</i>
                  </p>
                  <p>
                    Master's degree in General Psychology (studied in English
                    language)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className={styles.cvh3}>
                    Akatemia Wychowania Fizycznego, Katowice
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <i>2017 - 2019</i>
                  </p>
                  <p>Postgratuate studies: IInd degree coach (fencing)</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CurriculumEN;
