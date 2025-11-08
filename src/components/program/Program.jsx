import "./Program.css";
import prograIcon from "../../assets/program-icon.svg";
import prograIcon_2 from "../../assets/Check-icon.png";

const Program = () => {
  return (
    <div className="Program">
      <div className="program-inside container">
        <div className="program-top">
          <p>This is not for everyone!</p>
          <h2>This program is perfect for you if...</h2>
        </div>
        <div className="program-bottom">
          <div className="program-bottom_left">
            <div className="program-bottom_left_card">
              <h3>
                This is <span>NOT</span> for you if...
              </h3>
              <div className="program-inline-box">
                <img src={prograIcon} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
          <div className="program-bottom_right">
            <div className="program-bottom_left_card right-card">
              <h3>This is for you if...</h3>
              <div className="program-inline-box">
                <img src={prograIcon_2} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon_2} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon_2} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="program-inline-box">
                <img src={prograIcon_2} alt="program img" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
