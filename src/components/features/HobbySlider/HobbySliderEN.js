import Carousel from "react-bootstrap/Carousel";

import crochetpic1 from "../../../assets/hobby/crochet/poduszka1.jpg";
import crochetpic2 from "../../../assets/hobby/crochet/kocyk1.jpg";
import crochetpic3 from "../../../assets/hobby/crochet/koperta1.jpg";

const HobbySliderPL = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crochetpic1}
          alt="Croche pillow cover"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crochetpic2}
          alt="Chrochet blanket (a gift)"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={crochetpic3} alt="Crochet book cover" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HobbySliderPL;
