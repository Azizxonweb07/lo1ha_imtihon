import "./Hero.css";
import heroImg from "../../assets/Vector.svg";
import heroRightImg from "../../assets/hero-right-img.png";

const Hero = () => {
  return (
    <main id="hero" className="Hero">
      <div className="hero-inside container">
        <div className="hero-left">
          <div className="hero-left-img-box">
            <img src={heroImg} alt="icon" />
          </div>
          <p className="hero-subtext">
            Proven strategies backed by science for success.
          </p>
          <h2 className="hero-title">Live life at the full potential</h2>
          <p className="hero-text">
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <button className="hero-btn">Get your free guide now</button>
        </div>
        <div className="hero-right">
          <div className="hero-img-box">
            <img
              src={heroRightImg}
              alt="Hero img"
              className="hero-right-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
