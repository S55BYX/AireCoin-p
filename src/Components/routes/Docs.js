import React from "react";
import Scrollspy from "react-scrollspy";
import "./Docs.css";

function Docs() {
  return (
    <div className="main-doc">
      {" "}
      <div className="docs-container">
        <div className="docs-main">
          <>
          {/* The below can be cleaned up by placing in a different file and mapping over  */}
            <h1>Docs</h1>
            <p>
              This page is an overview of the AireCoin documentation and related
              resources.
            </p>
            <p>
              If you want to know what is ethereum, how it works, and what it
              can be used for, without going deep into the technical abyss, this
              guide is perfect for you.
            </p>
            <h2 id="quick-start">Quick start</h2>
            <h3>More info on quick start </h3>
            <p>
              To interact with a Aire cluster, we will use its command-line
              interface, also known as the ultimate CLI. We use the command-line
              because it is the first place the AireCoin core team deploys new
              functionality. The command-line interface is not necessarily the
              easiest to use, but it provides the most direct, flexible, and
              secure access to your Solana accounts.
            </p>
            <h3>This is the second heading </h3>
          </>
          <>
            <h2 id="nodes">Nodes</h2>
            <h3>More info on quick start</h3>
            <p>
              To interact with a Aire cluster, we will use its command-line
              interface, also known as the CLI. We use the command-line because
              it is the first place the Solana core team deploys new
              functionality. The command-line interface is not necessarily the
              easiest to use, but it provides the most direct, flexible, and
              secure access to your Solana accounts.
            </p>
            <h3>This is the second heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </>
          <>
            <h2 id="wallets">Wallets</h2>
            <h3>More info on wallets</h3>
            <p>
              To interact with a Aire cluster, we will use its command-line
              interface, also known as the CLI. We use the command-line because
              it is the first place the Solana core team deploys new
              functionality. The command-line interface is not necessarily the
              easiest to use, but it provides the most direct, flexible, and
              secure access to your Solana accounts.
            </p>
            <h3>This is the second heading</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </>
          <>
            <h2 id="bridges">Bridges</h2>
            <h3>More info on quick start with Bridges</h3>
            <p>
              To interact with a Aire cluster, we will use its command-line
              interface, also known as the CLI. We use the command-line because
              it is the first place the Solana core team deploys new
              functionality. The command-line interface is not necessarily the
              easiest to use, but it provides the most direct, flexible, and
              secure access to your Solana accounts.
            </p>
            <h3>This is the second heading</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </>
        </div>

        <div className="docs-menu">
          <ul>
            <Scrollspy
              currentClassName={"scroller"}
              items={["quick-start", "nodes", "wallets", "bridges"]}
            >
              <li>
                <a href={"#quick-start"}>Quick Start</a>
              </li>
              <li>
                <a href={"#nodes"}>Nodes</a>
              </li>
              <li>
                <a href={"#wallets"}>Wallets</a>
              </li>
              <li>
                <a href={"#bridges"}>Bridges</a>
              </li>
            </Scrollspy>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Docs;
