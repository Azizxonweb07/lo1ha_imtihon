import "./Ready.css";
import readyInlineImg_1 from "../../assets/ready-internal-img-1.png";
import readyInlineImg_2 from "../../assets/ready-internal-img-2.png";
import readyInlineImg_3 from "../../assets/ready-internal-img-3.png";
import readyInlineImg_4 from "../../assets/ready-internal-img-4.png";
import readyRightImg from "../../assets/ready-right-img.png";

const Ready = () => {
  return (
    <div className="Ready">
      <div className="ready-inside container">
        <div className="ready-top">
          <p className="ready-subtext">How does it work?</p>
          <h2 className="ready-title">Are you ready to transform your life?</h2>
          <p className="ready-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="ready-bottom">
          <div className="ready-bottom_left">
            <div className="ready-bottom_left-box">
              <img src={readyInlineImg_1} alt="ready img" />
              <div className="ready-bottom_left-inline-box">
                <h4>Talk to me first</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="ready-bottom_left-box">
              <img src={readyInlineImg_2} alt="ready img" />
              <div className="ready-bottom_left-inline-box">
                <h4>Schedule a meeting</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="ready-bottom_left-box">
              <img src={readyInlineImg_3} alt="ready img" />
              <div className="ready-bottom_left-inline-box">
                <h4>Online consultation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
            <div className="ready-bottom_left-box">
              <img src={readyInlineImg_4} alt="ready img" />
              <div className="ready-bottom_left-inline-box">
                <h4>Ready to start? Let’s talk!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
          <div className="ready-bottom_right">
            <img src={readyRightImg} alt="ready img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
