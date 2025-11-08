import "./Notified.css";

const Notified = () => {
  return (
    <div className="notified">
      <div className="notified-inside container">
        <div className="notified-left">
          <h2>Get notified when I publish new articles</h2>
          <p>
            Stay up to date with the latest news, announcements, and articles.
          </p>
        </div>
        <div className="notified-right">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Notified;
