import "./Discover.css";
import discoverImg from "../../assets/discover-img.jpg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover-inside container">
        <div className="discover-left">
          <p className="dicosver-subtext">
            I can help you in these patricular areas.
          </p>
          <h1 className="discover-title">
            I help people to discover their true potential
          </h1>
          <p className="discover-text">
            I help people to discover their true potential and live a fulfilling
            life...Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
        </div>
        <div className="discover-right">
          <div className="discover-img-box">
            <img src={discoverImg} alt="discover img" loading="lazy" className="discover-img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
