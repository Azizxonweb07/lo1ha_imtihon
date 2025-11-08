import "./Navbar.css";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/header-logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <nav className="header-nav container">
          <div className="header-logo-box ">
            <img src={headerLogo} alt="header logo" />
          </div>
          <div className={`hader-navigate-box ${open ? "navigate" : ""}`}>
            <ul className="nav-list toggleNavigate">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ExtraSales" className="nav-link">
                  Extra Salespage
                </Link>
              </li>
            </ul>
            <Link to={"/freeGuide"}>
              <button className="header-btn">Get your free guide now</button>
            </Link>
          </div>
          <CiMenuFries
            onClick={() => setOpen(!open)}
            className="header-menu toggle"
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
