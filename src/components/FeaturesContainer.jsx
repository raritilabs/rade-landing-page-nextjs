import React from "react";
import "../../public/styles/App.css";
import "../../public/styles/fonts.scss";
import instantBorrowingIcon from "../assets/instantBorrowingIcon.svg";
import confidenceIndexIcon from "../assets/confidenceIndexIcon.svg";
import memberVouchIcon from "../assets/memberVouchIcon.svg";
import stakingIcon from "../assets/stakingIcon.svg";
import Image from "next/image";
const FeaturesContainer = () => {
  return (
    <div>
      <p className="feauturesHeading">Features</p>
      <div className="feauturesContainer">
        <div className="InstantBorrowAndConfidenceIndex">
          <div className="instantBorrowMainContainer">
            <div className="instantBorrowCollateralized">
              <div className="instantBorrowContainer">
                <div className="instantBorrowing">
                  <div>
                    <Image
                      src={instantBorrowingIcon}
                      className="instantBorrowingIcon"
                      alt="Instant Borrowing Icon"
                    />
                  </div>
                  <div>
                    <p className="instantBorrowingText">Zero Interest</p>
                    <p className="aboutFeature ">
                      Instant and Unlimited Borrowing, only restricted by value
                      of pledged collateral.
                    </p>
                  </div>
                </div>
                <div className="aboutFeatureInMobile ">
                  Instant and Unlimited Borrowing, only restricted by value of
                  pledged collateral.
                </div>
              </div>
            </div>
          </div>
          <div className="confidenceIndexContainer">
            <div className="confidenceIndexContainerDIv">
              <div className="confidenceIndex">
                <div>
                  <Image
                    src={confidenceIndexIcon}
                    className="confidenceIndexIcon"
                    alt="Confidence Index Icon"
                  />
                </div>
                <div>
                  <p className="confidenceIndexIconText">Confidence Index</p>
                  <p className="aboutFeature ">
                    Build Confidence Index by adhering to <br /> scheduled
                    repayment and build your
                    <br /> Proof-of-Reputation.
                  </p>
                </div>
              </div>
              <div className="aboutFeatureInMobile ">
                Build Confidence Index by adhering to scheduled repayment and
                build your Proof-of-Reputation.
              </div>
            </div>
          </div>
        </div>
        <div className="collatSecureDiv">
          <div className="collateralizedContainerMain">
            <div className="collateralizedContainerDIv">
              <div className="collateralizedContainer">
                <div>
                  <Image
                    src={memberVouchIcon}
                    className="collateralizedIcon"
                    alt="Collateralized Icon"
                  />
                </div>
                <div>
                  <p className="collateralizedText">MemberVouch</p>
                  <p className="aboutFeature ">
                    Members who know each other can vouch for each other and
                    pledge their collateral to avail under-collateralized
                    borrowing.
                  </p>
                </div>
              </div>
              <div className="aboutFeatureInMobile ">
                Members who know each other can vouch for each other and pledge
                their collateral to avail under-collateralized borrowing.
              </div>
            </div>
          </div>
          <div className="secureContainerMain">
            <div className="secureContainerDiv">
              <div className="secureContainer">
                <div>
                  <Image
                    src={stakingIcon}
                    className="secureIcon"
                    alt="Secure Icon"
                  />
                </div>
                <div>
                  <p className="secureFeatureText">Staking</p>
                  <p className="aboutFeature ">
                    Earn profit by providing liquidity to the RADE for borrowing
                    needs and become stewards of an interest-free economy.
                  </p>
                </div>
              </div>
              <div className="aboutFeatureInMobile ">
                Earn profit by providing liquidity to the RADE for borrowing
                needs and become stewards of an interest-free economy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;
