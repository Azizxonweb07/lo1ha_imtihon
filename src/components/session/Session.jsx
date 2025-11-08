import "./Session.css";
import sessinImg from "../../assets/session-img.png";

const Session = () => {
  return (
    <div className="Session">
      <div className="session-inside container">
        <div className="session-left">
          <h2>Get 15-Minutes Complimentary online session.</h2>
          <p>Limited Period Offer. Claim Now.</p>
          <button>Book now</button>
        </div>
        <div className="session-right">
          <img src={sessinImg} alt="session img" />
        </div>
      </div>
    </div>
  );
};

export default Session;
