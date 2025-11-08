import "./Miss.css";
import missLeft from "../../assets/miss-left.png";
import missRight from "../../assets/miss-right.png";
import { FaStar } from "react-icons/fa";

const Miss = () => {
  return (
    <div className="Miss">
      <div className="miss-inside container">
        <div className="miss-left none">
          <img src={missLeft} alt="miss img" />
        </div>
        <div className="miss-center">
          <h2>
            Don’t miss out on my <span>‘Live life at the full potential’</span>
            free guide
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium.
          </p>
          <button>Download my free guide</button>
          <div className="miss-center_box">
            <p>More than 100+ 5 star reviews</p>
            <div className="miss-star-box">
              <FaStar className="Miss-star" />
              <FaStar className="Miss-star" />
              <FaStar className="Miss-star" />
              <FaStar className="Miss-star" />
              <FaStar className="Miss-star" />
            </div>
          </div>
        </div>
        <div className="miss-right none">
          <img src={missRight} alt="miss img" />
        </div>
      </div>
    </div>
  );
};

export default Miss;
