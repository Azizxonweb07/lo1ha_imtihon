import "./Aboutme.css";
import discoverImg from "../../assets/discover-img.jpg";
import aboutImg from "../../assets/about-img.png";

const Aboutme = () => {
  return (
    <div className="Discover">
      <div className="discover-inside container">
        <div className="discover-left">
          <p className="dicosver-subtext">
            Proven strategies backed by science for success.
          </p>
          <h1 className="discover-title">About me</h1>
          <p className="discover-text">
            I help people to discover their true potential and live a fulfilling
            life...Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <button className="aboutme-btn">Get your free guide now</button>
        </div>
        <div className="discover-right">
          <img src={aboutImg} alt="discover img" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
