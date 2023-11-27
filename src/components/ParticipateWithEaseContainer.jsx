import React from "react";
import "../../public/styles/App.css";
import mobileImage from "../assets/MobileImage.svg";
import iconOne from "../assets/IconOne.svg";
import iconTwo from "../assets/IconTwo.svg";
import iconThree from "../assets/IconThree.svg";
import Image from "next/image";
const ParticipateWithEaseContainer = () => {
  return (
    <div>
      <div className="participateWithEaseWithImage">
        <div className="mobileImages">
          <Image
            src={mobileImage}
            className="mobileImageWithBorrowDetails"
            alt="mobile"
          />
        </div>
        <div className="mobileImagesInWeb">
          <Image
            src={mobileImage}
            className="mobileImageWithBorrowDetailsInWeb"
            alt="mobile"
          />
        </div>
        <div className="participateWithEasePoints">
          <div className="connectWalletContainer">
            <div>
              {" "}
              <Image src={iconOne} className="iconOne" alt="one" />
            </div>
            <div>
              <div className="connectWallet">Connect wallet</div>
              <div className="content">
                Use your Metamask wallet to access RADE Dapp and enjoy full
                control over your financial activity.
              </div>
            </div>
          </div>
          <div className="buyRUDContainer">
            <div>
              {" "}
              <Image src={iconTwo} className="iconTwo" alt="two" />
            </div>
            <div>
              <div className="buyRUD">Buy $RUD</div>
              <div className="content">
                With an integrated on-off crypto ramp, purchase RADEs own dollar
                pegged stablecoin which drives the ecosystem.
              </div>
            </div>
          </div>
          <div className="startStakingContainer">
            <div>
              {" "}
              <Image src={iconThree} className="iconThree" alt="three" />
            </div>
            <div>
              <div className="startStaking">Start Staking/Borrowing</div>
              <div className="content">
                Use your $RUD either for your staking or borrowing needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticipateWithEaseContainer;
