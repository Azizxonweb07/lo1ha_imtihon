import "./Footer.css";
import headerLogo from "../../assets/header-logo.svg";
import footerImg_1 from "../../assets/footer-img-1.png";
import footerImg_2 from "../../assets/footer-img-2.png";
import footerImg_3 from "../../assets/footer-img-3.png";
import footerInlineImg from "../../assets/footer-inline-img.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  function changeNavigate_1() {
    navigate("/");
    window.scrollTo(0, 0);
  }

  function changeNavigate_2() {
    window.scrollTo(0, 0);
    navigate("/services");
  }
  function changeNavigate_3() {
    window.scrollTo(0, 0);
    navigate("/about");
  }
  function changeNavigate_4() {
    window.scrollTo(0, 0);
    navigate("/ExtraSales");
  }
  function changeNavigate_5() {
    window.scrollTo(0, 0);
    navigate("/freeGuide");
  }
  function changeNavigateHedaer() {
    navigate("/");
    window.scrollTo(0, 0);
  }
  return (
    <footer id="footer">
      <div className="Footer">
        <div className="footer-inside container">
          <div className="footer-top">
            <div className="footer-top_left">
              <div className="header-logo-box">
                <img
                  onClick={changeNavigateHedaer}
                  src={headerLogo}
                  alt="header logo"
                />
              </div>
              <p>
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="footer-centers">
              <div className="footer-top_center">
                <ul className="footer-list">
                  <li className="footer-item">Pages</li>
                  <li onClick={changeNavigate_1} className="footer-item">
                    Home
                  </li>
                  <li onClick={changeNavigate_2} className="footer-item">
                    Services
                  </li>
                  <li onClick={changeNavigate_3} className="footer-item">
                    About us
                  </li>
                  <li onClick={changeNavigate_4} className="footer-item">
                    Extra Sales/Landingpage
                  </li>
                  <li onClick={changeNavigate_5} className="footer-item">
                    Free guide
                  </li>
                </ul>
              </div>
              <div className="footer-top_right">
                <ul className="footer-list">
                  <li className="footer-item">Contact</li>
                  <li className="footer-item">+123 456 789</li>
                  <li className="footer-item">
                    <a
                      target="_blank"
                      href="https://accounts.google.com/SignOutOptions?hl=en&continue=https://mail.google.com/mail&service=mail&ec=GBRAFw"
                      className="footer-link"
                    >
                      mirzaboyevazizbek07@gmail.com
                    </a>
                  </li>
                  <li className="footer-item">
                    <a
                      target="_blank"
                      className="footer-link"
                      href="https://www.instagram.com/azizxan_web/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="footer-item">
                    <a
                      target="_blank"
                      className="footer-link"
                      href="https://www.linkedin.com/jobs/"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Made with a <img src={footerInlineImg} alt="footer img" /> by{" "}
              <span>HappyDigital</span>
            </p>
            <div className="footer-bottom-box">
              <a
                target="_blank"
                href="https://www.linkedin.com/jobs/"
                className="footer-link footer-bottom_logos"
              >
                <img
                  src={footerImg_1}
                  alt="footer img"
                  className="footer-bottom_logo"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61583972570291"
                className="footer-link footer-bottom_logos"
              >
                <img
                  src={footerImg_2}
                  alt="footer img"
                  className="footer-bottom_logo"
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/jobs/"
                className="footer-link footer-bottom_logos"
              >
                <img
                  src={footerImg_3}
                  alt="footer img"
                  className="footer-bottom_logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
