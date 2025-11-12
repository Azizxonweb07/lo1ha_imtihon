import "./Navbar.css";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/header-logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <nav className="header-nav container">
        <div className="header-logo-box">
          <Link to="/" onClick={handleLinkClick}>
            <img src={headerLogo} alt="header logo" />
          </Link>
        </div>

        <div className={`hader-navigate-box ${open ? "navigate" : ""}`}>
          <ul className="nav-list toggleNavigate">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ExtraSales"
                className="nav-link"
                onClick={handleLinkClick}
              >
                Extra Salespage
              </Link>
            </li>
          </ul>
          <Link to="/freeGuide" onClick={handleLinkClick}>
            <button className="header-btn">Get your free guide now</button>
          </Link>
        </div>

        <CiMenuFries
          onClick={() => setOpen(!open)}
          className="header-menu toggle"
        />
      </nav>
    </header>
  );
};

export default Navbar;
