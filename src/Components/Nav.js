import { useState } from "react";
import {
  RiLayout4Fill,
  RiBarChartHorizontalFill,
  RiCloseLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Nav.css";

import Offcanvas from "react-bootstrap/Offcanvas";

function Nav(props) {
  return (
    <div className="nav-main">
      <div className="nav-top">
        <Link to="/">
          <div className="nav-logo-container">
            <RiLayout4Fill className="ri-lg" />
            <h1 className="nav-logo">AireCoin</h1>
          </div>
        </Link>
        <div className="nav-right">
          <ul className="nav-list">
            <li>
              <Link to="/NFT">NFT</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
          </ul>
          <button onClick={props.toggleTheme} className="nav-cta">{props.theme === "dark" ? "Light": "Dark"} Mode</button>
          <button className="nav-btn nav--close-btn">
            <RiCloseLine />
          </button>
        </div>
        <button className="nav-btn">
          <MobileNav />
        </button>
      </div>
    </div>
  );
}

// The below is a nav used for the responsive design

function MobileNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RiBarChartHorizontalFill onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton />

        <ul className="mob-nav-list">
          <li>
            <Link to="/NFT">NFT</Link>
          </li>
          <li>
            <Link to="/docs">Documentation</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <button className="nav-cta">Connect Wallet</button>
        </ul>
      </Offcanvas>
    </>
  );
}

export default Nav;
