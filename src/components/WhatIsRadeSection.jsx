import React from "react";
import "../../public/styles/App.css";
import arrowTail from "../assets/ArrowTail.svg";
import arrowHead from "../assets/ArrowHead.svg";
import Image from "next/image";
const WhatIsRadeSection = () => {
  return (
    <div>
      <div className="whatIsRadeAndWhyBorrowTextContainer">
        <div className="whatIsRade">
          <p className="whatIsRadeText">What is RADE?</p>
          <p className="definitionParaTwo">
            RADE DeFi ecosystem provides crypto and non-crypto natives with a
            single unified platform for Staking and Borrowing needs. Our focus
            is to create dependable financial solution that are user-centric and
            interest-free. Our goal is to take back control from
            interest-bearing predatory systems.
          </p>
          <a
            href="https://rariti-labs.gitbook.io/rade/"
            className="readDocsLink"
            rel="noreferrer"
            target="_blank"
          >
            <button className="readDocsButton">
              <span className="readDocsSpan">
                {" "}
                Read Docs{" "}
                <Image src={arrowTail} className="arrowTail" alt="Arrow tail" />
                <Image
                  src={arrowHead}
                  className="arrowHead"
                  alt="Arrow head"
                />{" "}
              </span>
            </button>
          </a>
          <div></div>
        </div>
        <div className="perticipateWithEaseContainer">
          <div className="howToGetStarted">How to get started?</div>
          <div className="participateWith">Participate with </div>
          <div className="easeText">ease</div>
          <div className="participateWithMobile">Participate with ease</div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRadeSection;
