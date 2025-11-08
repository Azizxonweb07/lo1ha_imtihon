import "./Good.css";
import goodImgMinus from "../../assets/good-img-minus.png";
import goodImgPlus from "../../assets/good-imgs-plus.png";

const Good = () => {
  return (
    <div className="Good">
      <div className="good-inside container">
        <div className="good-top">
          <h2>Good to know.</h2>
          <p>Everything you need to know about the my services.</p>
        </div>
        <div className="good-bottom">
          <div className="good-bottom_card">
            <div className="good-card-bottom_inline-box">
              <h3>How long does the coaching process take?</h3>
              <p>
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
            <img src={goodImgMinus} alt="good img" />
          </div>
          <div className="good-bottom_card">
            <div className="good-card-bottom_inline-box">
              <h3>What if I wanted to end my coaching engagement?</h3>
            </div>
            <img src={goodImgPlus} alt="good img" />
          </div>
          <div className="good-bottom_card">
            <div className="good-card-bottom_inline-box">
              <h3>Can I change through coaching?</h3>
            </div>
            <img src={goodImgPlus} alt="good img" />
          </div>
          <div className="good-bottom_card">
            <div className="good-card-bottom_inline-box">
              <h3>How often do we meet?</h3>
            </div>
            <img src={goodImgPlus} alt="good img" />
          </div>
        </div>
        <div className="questions">
          <h3>Still have questions?</h3>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Good;
