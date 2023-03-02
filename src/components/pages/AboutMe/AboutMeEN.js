import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./AboutMe.module.scss";
import HeaderEN from "../../views/Header/HeaderEN";
import { Col } from "react-bootstrap";

const AboutMeEN = () => {
  return (
    <>
      <HeaderEN></HeaderEN>
      <Container className={styles.aboutmecontainer}>
        <Row className={styles.aboutmerow}>
          <Col className="col-10">
            <h1>A Born Fighter</h1>
            <p>I hate fighting. But life forced me to do it.</p>
            <p>
              Here I am. Expert in hopeless cases, with ability to think outside
              the box. Walking empathy with enough insight to be able to close
              empathic doors and take care of myself. Honesty is one of my key
              values - not all people like it but I hate words without meaning
              that are just supposed to create better atmosphere.
            </p>
            <p>
              I'm driven by development. I dream about such financial stability
              that I won't fear if my payment will be enough to carry through a
              month, even though I'm trying to save on whatever I can.
            </p>

            <h2>First IT experiences</h2>
            <p>
              I started blogging on WordPress.com in 2010. Year later I ordered
              first time (and last time) from developer my own coded website.
              Site was great, but when I did some WordPress updates few months
              later it crashed...
            </p>
            <p>
              I decided to learn technical aspects of WordPress to be able to
              fix things myself. As a student I didn't have enough money to pay
              for professional site maintenance.
            </p>
            <p>
              In the meantime I completed General Psychology studies, I did some
              journalism and wrote two books. Then I got degree in fencing and
              enjoyed training this discipline. I taught in post graduate school
              and worked as a BSFT therapist. I even did some soldering in
              musical studio and worked as a dental assistant!
            </p>
            <p>
              In most cases I was satisfied, but still something was missing.
            </p>
            <h2>Going back to my roots</h2>
            <p>
              It 2021 I summed up my carrer and noticed two things. First: I
              have ability of quick learning, no matter in what discipline I'm
              trying to acquire knowledge. Second: from all the things I tried
              in my life writing code gives me most pleasure.
            </p>
            <p>
              I have built and manintained many WordPress projects. Not all of
              them survived, some I still maintain. Even if I quit coding for
              some time I always returned.
            </p>
            <p>
              This is why in 2021, when I was thinking what to do with my life,
              I decided to try in IT.
            </p>
            <p>
              I was surprised, when few weeks later I started working as a
              Junior WordPress Developer. My skills were enough to start!
            </p>
            <h2>On my way to reach stars</h2>
            <p>
              Over the years I noticed that what makes me happy is development
              and challenging my mind. This is what I found in coding. I can
              know language / technology, but still new project will surprise me
              with something.
            </p>
            <p>
              This is the reason why I decided to start coding bootcamp. I
              reached for professional programmers support to speed up my
              learning process. I plan to conquer JavaScript and React. Mój plan
              to zawojować JavaScript i React. I find React easeir and this is
              why I wrote this website in React, however, I'm developing
              JavaScript project too, so stay tuned!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMeEN;
