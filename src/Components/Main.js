import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import "./Main.css";

function Main() {
  const mainStats = [
    { figure: "12M", desc: "Transactions" },
    { figure: "2.8M", desc: "Staked" },
    { figure: "72K", desc: "Contracts" },
    { figure: "745%", desc: "Price Increase" },
  ];

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
        {mainStats.map((stats) => (
          <div className="stat">
            <h2>{stats.figure}</h2>
            <p>{stats.desc}</p>
          </div>
        ))}
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
