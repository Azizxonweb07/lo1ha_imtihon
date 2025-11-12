import "./Articles.css";
import articlesCardImg_1 from "../../assets/articles-card-img-1.png";
import articlesCardImg_2 from "../../assets/articles-card-img-2.png";
import articlesCardImg_3 from "../../assets/articles-card-img-3.png";

const Articles = () => {
  return (
    <div className="Articles">
      <div className="articles-inside container">
        <div className="artciles-top">
          <h2 className="articles-title">
            Stay Motivated, read the weekly blog articles.
          </h2>
        </div>
        <div className="artciles-bottom">
          <div className="articles-bottom_card">
            <div className="articles-bottom_card-top">
              <img src={articlesCardImg_1} alt="articles img" loading="lazy" />
            </div>
            <div className="articles-bottom_card-bottom">
              <h3>Balancing your love and work life.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className="articles-bottom_card">
            <div className="articles-bottom_card-top">
              <img src={articlesCardImg_2} alt="articles img" loading="lazy" />
            </div>
            <div className="articles-bottom_card-bottom">
              <h3>A short break from Social Media is important.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
          <div className="articles-bottom_card">
            <div className="articles-bottom_card-top">
              <img src={articlesCardImg_3} alt="articles img" loading="lazy" />
            </div>
            <div className="articles-bottom_card-bottom">
              <h3>How to be 1% Better Every Day</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua minim
                veniam.
              </p>
            </div>
          </div>
        </div>
        <button className="articles-btn">Read more blogs</button>
      </div>
    </div>
  );
};

export default Articles;
