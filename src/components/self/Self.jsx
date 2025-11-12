import "./Self.css";
import heroImg from "../../assets/Vector.svg";
import heroRightImg from "../../assets/self-img.jpg";

const Self = () => {
  return (
    <div>
      <div className="Hero">
        <div className="hero-inside container">
          <div className="hero-left">
            <div className="hero-left-img-box">
              <img src={heroImg} alt="hero img" />
            </div>
            <p className="hero-subtext">
              Proven strategies backed by science for success.
            </p>
            <h2 className="hero-title">Self Esteem Therapy</h2>
            <p className="hero-text">
              I help people to discover their true potential and live a
              fulfilling life...Discover the simple 3 steps that I discovered to
              hack productivity. It just works and it is begin using backed by
              science. Wanna transform your life?
            </p>
            <button className="hero-btn">Claim your spot</button>
          </div>
          <div className="hero-right">
            <img
              className="self-img"
              src={heroRightImg}
              alt="hero img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Self;
