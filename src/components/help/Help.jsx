import "./Help.css";
import heroImg from "../../assets/Vector.svg";
import helpCardImg_1 from "../../assets/help-card-img-1.svg";
import helpCardImg_2 from "../../assets/help-card-img-2.svg";
import helpCardImg_3 from "../../assets/help-card-img-3.svg";

const Help = () => {
  return (
    <div className="Help">
      <div className="help-inside container">
        <div className="help-top">
          <div className="help-top_left">
            <img src={heroImg} alt="help img" />
            <h2>I can help you in these particular areas.</h2>
          </div>
          <div className="help-top_right">
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
          </div>
        </div>
        <div className="help-bottom">
          <div className="help-bottom-card">
            <img src={helpCardImg_1} alt="help card img" />
            <h3>1:1 Coaching</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="help-bottom-card">
            <img src={helpCardImg_2} alt="help card img" />
            <h3>Consultation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
          <div className="help-bottom-card">
            <img src={helpCardImg_3} alt="help card img" />
            <h3>Group Coaching Sessions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
