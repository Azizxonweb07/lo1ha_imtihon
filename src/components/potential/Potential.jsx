import "./Potential.css";
import potentialImg from "../../assets/potential.png";
import { Link } from "react-router-dom";

const Potential = () => {
  return (
    <div className="Potential">
      <div className="potential-inside container">
        <div className="potential-left">
          <h2>
            Don’t miss out on my ‘Live life at the full potential’ free guide
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <Link to={"/freeGuide"}>
            <button>Get your free guide now</button>
          </Link>
        </div>
        <div className="potential-right">
          <div className="potential-box">
            <img
              className="potential-right-img"
              src={potentialImg}
              alt="potential img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potential;
