import { Container } from "react-bootstrap";
import "./Hero-Tuisty-XL.css";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HeroTuistyXL = ({ title, subtitle, backgroundImage }) => {
  return (
    <Fade>
      <div className="position-relative overflow-hidden text-center hero-container">
        {/* Imagen de fondo cargada con LazyLoad */}
        <LazyLoadImage
          src={backgroundImage}
          alt="Background"
          effect="blur"
          className="hero-background"
        />
        <Container className="col-md-6 p-lg-5 mx-auto my-5 text-start">
          <h3 className="display-5 fst-italic text-light hero-title">{title}</h3>
          <h1 className="display-1 fst-italic fw-bold text-light hero-subtitle">
            {subtitle}
          </h1>
        </Container>
      </div>
    </Fade>
  );
};

export default HeroTuistyXL;
