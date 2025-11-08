import "./Results.css";
import potentialImg from "../../assets/potential.png";

const Results = () => {
  return (
    <div className="Results">
      <div className="results-inside container">
        <div className="results-left">
          <h1>Results that speak for themselves</h1>
          <p className="results-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <input type="text" placeholder="Name" /> <br />
          <input type="text" placeholder="Enter your email" />
          <p className="results-text">
            We care about your data in our <span>privacy policy</span>
          </p>
          <button>Get free guide</button>
        </div>
        <div className="results-right">
          <img src={potentialImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Results;
