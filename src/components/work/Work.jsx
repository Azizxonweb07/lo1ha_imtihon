import "./Work.css";
import readyInlineImg_1 from "../../assets/ready-internal-img-1.png";
import readyInlineImg_2 from "../../assets/ready-internal-img-2.png";
import readyInlineImg_4 from "../../assets/ready-internal-img-4.png";
import workImg_4 from "../../assets/work-imgs-4.png";
import workImg_5 from "../../assets/work-imgs-5.png";

const Work = () => {
  return (
    <div className="Work">
      <div className="work-inisde container">
        <div className="work-top">
          <p className="work-subtext">How does it work?</p>
          <h2 className="work-title">Are you ready to transform your life?</h2>
          <p className="work-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
        <div className="work-bottom">
          <div className="work-bottom_card">
            <img src={readyInlineImg_4} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="work-bottom_card">
            <img src={readyInlineImg_2} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="work-bottom_card">
            <img src={readyInlineImg_1} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="work-bottom_card">
            <img src={workImg_4} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="work-bottom_card">
            <img src={workImg_5} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="work-bottom_card">
            <img src={readyInlineImg_1} alt="work img" />
            <h3>Ready to start? Let’s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
