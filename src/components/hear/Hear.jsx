import "./Hear.css";
import hearImg_1 from "../../assets/hear-img-1.png";
import hearImg_2 from "../../assets/hear-img-2.png";

const Hear = () => {
  return (
    <div className="Hear">
      <div className="hear-inside container">
        <div className="hear-top">
          <h2>Hear out what my clients say about me.</h2>
        </div>
        <div className="hear-bottom">
          <div className="hear-bottom_card">
            <h3>5/5</h3>
            <p>
              "I gained so much <span>confidence </span> in my ability to
              connect and deepen my relationships with people. "
            </p>
            <h4>Jane</h4>
            <img src={hearImg_1} alt="hear img" />
          </div>
          <div className="hear-bottom_card">
            <h3>5/5</h3>
            <p>
              “Denise helped me organise my diet. Highly recommend her
              services!”
            </p>
            <h4>Catherine</h4>
            <img src={hearImg_2} alt="hear img" />
          </div>
          <div className="hear-bottom_card">
            <h3>5/5</h3>
            <p>
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h4>Jane</h4>
            <img src={hearImg_1} alt="hear img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hear;
