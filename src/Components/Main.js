import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import "./Main.css";

function Main() {
  return (
    <div data-testid="main-page" className="main">
      <div className="main-heading">
        <div className="main-heading-left">
          <h1>
            The future of the web3 built on{" "}
            <span className="colored">#AireCoin</span>.
          </h1>
          <p>By devs for devs 🚀</p>
          <Link to="/Docs">
            <button>Start Building</button>
          </Link>
        </div>
        <div className="main-heading-right">
          <img
            alt="crypto being made"
            src="https://polygon.technology/_nuxt/img/developers-polygon.cc6af79.png"
          />
        </div>
      </div>

      <div data-testid="stats" className="main-stats">
        <div>
          <h2>12M</h2>
          <p>Transactions</p>
        </div>
        <div>
          <h2>2.8M</h2>
          <p>Staked</p>
        </div>
        <div>
          <h2>72k+</h2>
          <p>Contracts</p>
        </div>
        <div>
          <h2>745%</h2>
          <p>Price Increase</p>
        </div>
      </div>

      <h2>Learn how to use AireCoin</h2>
      <div data-testid="cards" className="main-heading-bottom">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Main;
