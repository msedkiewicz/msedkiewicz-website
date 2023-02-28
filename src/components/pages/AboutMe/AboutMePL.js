import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./AboutMe.module.scss";
import NavBarPL from "../../views/NavBar/NavBarPL";
import { Col } from "react-bootstrap";

const AboutMePL = () => {
  return (
    <>
      <NavBarPL></NavBarPL>
      <Container className={styles.aboutmecontainer}>
        <Row className={styles.aboutmerow}>
          <Col className="col-10">
            <h1>Urodzona Wojowniczka</h1>
            <p>Nie lubię walczyć. Życie jednak zmusiło mnie do walki.</p>
            <p>
              Jestem więc. To ja - spec od spraw beznadziejnych, myślący poza
              schematem. Chodząca empatia, która jednak potrafi zamknąć
              empatyczne drzwi i zadbać o siebie. Człowiek szczery - co nie
              każdemu leży, jednak ja nie lubię gładkich, okrągłych słówek które
              nie niosą za sobą prawdziwej treści, mają tylko stworzyć dobre
              wrażenie.
            </p>
            <p>
              Napędza mnie rozwój. Marzę o tym, by nie bać się, czy wystarczy mi
              pieniędzy do pierwszego, pomimo oszczędnego gospodarowania
              wypłatą.
            </p>

            <h2>Pierwsze doświadczenia w IT</h2>
            <p>
              Pierwszego bloga zaczęłam prowadzić na WordPress.com już w 2010
              roku. Rok później zamówiłam pierwszą (i ostatnią) stronę
              internetową postawioną na WordPressie. Strona była super - ale
              wysypała się po pierwszej aktualizacji...
            </p>
            <p>
              Stwierdziłam, że nie mam pieniędzy na to, by ktoś utrzymywał moją
              stronę. I zaczęłam uczyć się technicznej strony WordPressa.
            </p>
            <p>
              Gdzieś w międzyczasie były studia psychologiczne, dziennikarstwo i
              pisanie książek. Potem kolejne studia i szermierka. Następnie
              nauczanie w szkole policealnej, praca w poradni... Mam za sobą
              nawet epizod lutowania kabli w studio muzycznym czy pracy jako
              asystentka stomatologiczna!
            </p>
            <p>
              Te działania sprawiały mi satysfakcję, wciąż jednak czegoś mi
              brakowało.
            </p>
            <h2>Powrót do korzeni</h2>
            <p>
              W 2021 roku zrobiłam podsumowanie swoich zawodowych działań i
              zauważyłam dwie rzeczy. Pierwszą: potrafię szybko zdobywać wiedzę
              w każdej dziedzinie, którą się zainteresuję. Drugą: z tch
              wszystkich ciekawych rzeczy, które robiłam, najwięcej przyjemności
              sprawia mi dłubanie w kodzie.
            </p>
            <p>
              Na przestrzeni lat budowałam i zarządzałam różnymi projektami
              WordPressowymi. Nie wszystkie przetrwały próbę czasu. Nawet jeśli
              z jakichś przyczyn odkładałam na jakiś czas kodowanie, to
              wracałam.
            </p>
            <p>
              Dlatego też, gdy na jesieni 2021 roku zastanawiałam się, co może
              mi dać satysfakcję i stabilizację, postawiłam na wejście do IT.
            </p>
            <p>
              Zdziwiłam się, gdy już kilka tygodni później zaczęłam pracę jako
              Junior WordPress Developer. Moja wiedza nabyta przez lata
              wystarczyła, by zacząć!
            </p>
            <h2>Apetyt na więcej</h2>
            <p>
              Na przestrzeni lat zdałam sobie sprawę z tego, że to, co mnie
              napędza, to chęć rozwoju oraz wyzwania rzucane mojej głowie. W
              kodowaniu ich nie brakuje. Można znać bardzo dobrze dany język /
              technologię, a i tak kolejny projekt potrafi zaskoczyć.
            </p>
            <p>Dlatego też podjęłam decyzję o rozpoczęciu bootcampu. Dl</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMePL;
