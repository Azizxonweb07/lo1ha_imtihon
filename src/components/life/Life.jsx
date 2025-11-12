import "./Life.css";
import readyInlineImg_3 from "../../assets/ready-internal-img-3.png";
import readyInlineImg_4 from "../../assets/ready-internal-img-4.png";
import videoImg from "../../assets/videoPlayer.png";
const Life = () => {
  return (
    <div className="Life">
      <div className="life-inside container">
        <div className="life-top">
          <div className="life-top_left">
            <div className="ready-top">
              <p className="ready-subtext">How does it work?</p>
              <h2 className="ready-title">
                Are you ready to transform your life?
              </h2>
              <p className="ready-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className="life-top_right">
            <div className="ready-bottom_left">
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
          </div>
        </div>
        <img src={videoImg} alt="life img" loading="lazy" className="life-img"/>
      </div>
    </div>
  );
};

export default Life;
