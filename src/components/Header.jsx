import React from "react";
import "../../public/styles/App.css";
import "../../public/styles/fonts.scss";
import radeLogo from "../assets/RadeLogo.svg";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logocontainer">
          <Image src={radeLogo} className="radelogo" alt="Rade logo" />
          <h1 className="radetext">RADE</h1>
        </div>
        <div className="headerButtonDiv">
          <a
            href="https://rariti-labs.gitbook.io/rade/"
            className="docButton"
            target="_blank"
            rel="noreferrer"
          >
            Docs{" "}
          </a>
          <button
            className="launchApp"
            title="Launching Soon. Join the waitlist"
          >
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
