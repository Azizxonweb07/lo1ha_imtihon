import "./Particular.css";
import ParticularImg from "../../assets/particular-img.svg";
import particulaImg_2 from "../../assets/particular-img_2.svg";
import particulaImg_3 from "../../assets/particular-img_3.svg";
import particulaImg_4 from "../../assets/particular-img_4.svg";

function Particular() {
  return (
    <div className="Particular">
      <div className="particular-inside container">
        <div className="partuclar-top">
          <h2>I can help you in these particular areas.</h2>
        </div>
        <div className="partuclar-bottom">
          <div className="partuclar-bottom_box_1">
            <div className="particular-bottom_card">
              <img src={ParticularImg} alt="particular img" />
              <h3>Group Coaching Sessions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
            <div className="particular-bottom_card">
              <img src={particulaImg_2} alt="particular img" />
              <h3>Consultation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className="partuclar-bottom_box_2">
            <div className="particular-bottom_card">
              <img src={particulaImg_3} alt="particular img" />
              <h3>Online course</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
            <div className="particular-bottom_card">
              <img src={particulaImg_4} alt="particular img" />
              <h3>1:1 Coaching</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Particular;
