import Col from "react-bootstrap/Col";

const PortfolioItem = (props) => {
  return (
    <Col className="col-12">
      <h2>{props.h2}</h2>
      <p>{props.project}</p>
      <p>{props.description}</p>
      <p>{props.technologies}</p>
      <div className="video-responsive">
        <iframe
          width="100%"
          height="300px"
          src={props.embedId}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Col>
  );
};

export default PortfolioItem;
