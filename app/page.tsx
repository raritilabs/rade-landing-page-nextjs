/* use client */
import FeaturesContainer from "../src/components/FeaturesContainer";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InterestFreeLoanSection from "../src/components/InterestFreeLoanSection";
import JoinWaitlistSection from "../src/components/JoinWaitlistSection";
import ParticipateWithEaseContainer from "../src/components/ParticipateWithEaseContainer";
import WhatIsRadeSection from "../src/components/WhatIsRadeSection";
import WhyBorrowFromRade from "../src/components/WhyBorrowFromRade";
import JoinTheRadeCommunitySection from "../src/components/JoinTheRadeCommunitySection";
import "../public/styles/App.css";
const submitForm = require("../src/functions/submitForm");

function MyApp() {
  return (
    <div className="mainContainer">
      <Header />
      <InterestFreeLoanSection />
      <JoinWaitlistSection />
      <WhyBorrowFromRade />
      <WhatIsRadeSection />
      <ParticipateWithEaseContainer />
      <FeaturesContainer />
      <JoinTheRadeCommunitySection />

      <div className="divider"> </div>
      <Footer />
    </div>
  );
}

export default MyApp;
