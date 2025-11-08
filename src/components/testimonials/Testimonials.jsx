import "./Testimonials.css";
import testimonilasCardimg from "../../assets/testimonials-card-img.png";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="Testimonials container">
      <div className="testimonials-inisde">
        <div className="testimonials-top">
          <div className="testimonials-top_left">
            <p>Testimonials</p>
            <h2>Results that speak for themselve s</h2>
          </div>
          <div className="testimonials-top_right">
            <button>Get started</button>
          </div>
        </div>
        <div className="testimonials-bottom">
          <div className="testimonials-bottom_card">
            <p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              </span>
              sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <img src={testimonilasCardimg} alt="img" />
            <h3>Naam</h3>
            <p>Bedrijf</p>
            <div className="star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
          <div className="testimonials-bottom_card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <img src={testimonilasCardimg} alt="img" />
            <h3>Naam</h3>
            <p>Bedrijf</p>
            <div className="star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
          <div className="testimonials-bottom_card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <img src={testimonilasCardimg} alt="img" />
            <h3>Naam</h3>
            <p>Bedrijf</p>
            <div className="star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
          <div className="testimonials-bottom_card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <img src={testimonilasCardimg} alt="img" />
            <h3>Naam</h3>
            <p>Bedrijf</p>
            <div className="star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
