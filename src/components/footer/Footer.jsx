import "./Footer.css";
import headerLogo from "../../assets/header-logo.svg";
import footerImg_1 from "../../assets/footer-img-1.png";
import footerImg_2 from "../../assets/footer-img-2.png";
import footerImg_3 from "../../assets/footer-img-3.png";
import footerInlineImg from "../../assets/footer-inline-img.png";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="footer-inside container">
          <div className="footer-top">
            <div className="footer-top_left">
              <div className="header-logo-box ">
                <img src={headerLogo} alt="header logo" />
              </div>
              <p>
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="footer-top_center">
              <ul className="footer-list">
                <li className="footer-item">Pages</li>
                <li className="footer-item">Home</li>
                <li className="footer-item">Services</li>
                <li className="footer-item">About us</li>
                <li className="footer-item">Extra Sales/Landingpage</li>
                <li className="footer-item">Free guide</li>
              </ul>
            </div>
            <div className="footer-top_right">
              <ul className="footer-list">
                <li className="footer-item">Contact</li>
                <li className="footer-item">+123 456 789</li>
                <li className="footer-item">hello@happydigital.nl</li>
                <li className="footer-item">Instagram</li>
                <li className="footer-item">LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Made with a <img src={footerInlineImg} alt="footer img" /> by{" "}
              <span>HappyDigital</span>
            </p>
            <div className="footer-bottom-box">
              <img src={footerImg_1} alt="footer img" />
              <img src={footerImg_2} alt="footer img" />
              <img src={footerImg_3} alt="footer img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
