import "./Clients.css";
import clentsCardImg_1 from "../../assets/clinets-card-img-1.svg";
import clentsCardImg_2 from "../../assets/clinets-card-img-2.svg";
import clentsCardImg_3 from "../../assets/clinets-card-img-3.svg";
import { FaStar } from "react-icons/fa";

const Clients = () => {
  return (
    <div className="Clients">
      <div className="clinets-inside container">
        <div className="clients-top">
          <h2 className="clients-title">
            Hear out what my clients say about me.
          </h2>
        </div>
        <div className="clients-bottom">
          <div className="clients-bottom_card">
            <p>
              "I gained so much <span>confidence</span> in my ability to connect
              and deepen my relationships with people. "
            </p>
            <h3>Jane</h3>
            <img src={clentsCardImg_1} alt="clents img" />
            <div className="clients-card_star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
          <div className="clients-bottom_card">
            <p>
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h3>Catherine</h3>
            <img src={clentsCardImg_2} alt="clents img" />
            <div className="clients-card_star-box">
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
              <FaStar className="clients-star" />
            </div>
          </div>
          <div className="clients-bottom_card">
            <p>
              "I gained so much confidence in my ability to connect and deepen
              my relationships with people. "
            </p>
            <h3>Jane</h3>
            <img src={clentsCardImg_3} alt="clents img" />
            <div className="clients-card_star-box">
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

export default Clients;
