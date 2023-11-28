import React from "react";
import "../../public/styles/App.css";
import "../../public/styles/fonts.scss";
import raritiLogo from "../assets/RaritiLogo.svg";
import twitterLogo from "../assets/TwitterLogo.svg";
import linkedInLogo from "../assets/LinkedIn.svg";
import Mlogo from "../assets/Mlogo.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <div className="footerDiv">
        <footer className="footer">
          <div className="copyright">
            &copy; Copyright 2023 Rariti, Inc
            <Image src={raritiLogo} className="raritiLogo" alt="rariti logo" />
          </div>
          <div className="footerLink">
            <a
              href="https://twitter.com/rariti_io?s=20&t=QPWBh8F41YYYXkUYHfP4cw"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={twitterLogo}
                className="twitterlogo"
                alt="Twitter logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/rariti-inc/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={linkedInLogo}
                alt="LinkedIn logo"
                className="linkedInLogo"
              />
            </a>
            <div className="mediumLogoContainer">
              <a
                href="https://medium.com/@rade_io"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={Mlogo} className="MLogo" alt="MLogo" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
