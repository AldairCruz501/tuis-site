
import { Container} from "react-bootstrap"
import "./Hero-Tuisty.css"
import { Fade } from "react-awesome-reveal";

const HeroTuisty = ( { title, subtitle, backgroundImage } ) => {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
      };

      return (
        <>
          <Fade>
            <div
              className="position-relative overflow-hidden  text-center"
              style={heroStyle}
            >
              <Container className="col-md-6 p-lg-5 mx-auto my-5 text-start">
                <h3 className="display-5 fst-italic text-light hero-title">{title}</h3>
                <h1 className="display-1 fst-italic fw-bold text-light mb-3 hero-subtitle">{subtitle}</h1>
              </Container>
            </div>
          </Fade>
        </>
      );
}

export default HeroTuisty