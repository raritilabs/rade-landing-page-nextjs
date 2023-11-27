import React from "react";
import "../../public/styles/App.css";
import "../../public/styles/fonts.scss";
import arrowTail from "../assets/ArrowTail.svg";
import arrowHead from "../assets/ArrowHead.svg";
import participateWithEaseImage from "../assets/ParticipateWithEaseImage.svg";
import shadow from "../assets/shadow.webp";
import participateWithEaseImageInMobile from "../assets/ParticipateWithEaseImageInMobile.svg";
import shadowImageInMobile from "../assets/shadowImageInMobile.svg";
import Image from "next/image";
const InterestFreeLoanSection = () => {
  return (
    <div>
      <div className="interestFreeLoan">
        <div>
          <p className="interestFreeLoanText">
            0<span className="percentage">%</span> Interest. Ever.
          </p>
          <p className="ethicalCollateralize">
            Interest Free Collateralized Borrowing
          </p>
          <a
            href="https://rariti-labs.gitbook.io/rade/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="learnButton">
              Learn
              <Image src={arrowTail} className="arrowTail" alt="Arrow tail" />
              <Image src={arrowHead} className="arrowHead" alt="Arrow head" />
            </button>
          </a>
        </div>
        <div className="participateWithEaseImageContainer">
          <Image
            src={participateWithEaseImage}
            className="participateWithEaseImage"
            alt="participate with ease"
          />
          <Image src={shadow} className="shadowImage" alt="shadow" />
          <Image
            src={participateWithEaseImageInMobile}
            className="participateWithEaseImageInMobile"
            alt="participate with ease"
          />
          <Image
            src={shadowImageInMobile}
            className="shadowImageInMobile"
            alt="shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default InterestFreeLoanSection;
