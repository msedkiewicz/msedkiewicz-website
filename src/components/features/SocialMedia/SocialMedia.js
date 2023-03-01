import styles from "./SocialMedia.module.scss";
import linkedinLogo from "../../../assets/socials/LI-In-Bug.png";
import githubLogo from "../../../assets/socials/github-mark.png";
import { Row, Col } from "react-bootstrap";

const SocialMedia = () => {
  return (
    <Row>
      <Col className={'d-flex justify-content-center ' + styles.socialmedia}>
        <a href="https://www.linkedin.com/in/lena-sedkiewicz/" className={styles.linkedin}>
          <img
            src={linkedinLogo}
            alt="LinkedIn logo"
            width="60px"
            height="auto"
          />
        </a>
        <a href="https://github.com/msedkiewicz">
          <img src={githubLogo} alt="Github logo" width="60px" height="auto"/>
        </a>
      </Col>
    </Row>
  );
};

export default SocialMedia;
