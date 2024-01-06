"use client"; // This is a client component

import React, { useState } from "react";
import "../../public/styles/App.css";
import arrowButton from "../assets/arrowButton.svg";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Image from "next/image"; // Import Image correctly

const JoinWaitlistSection = () => {
  const [email, setEmail] = useState(""); // State to track the email input value
  const [isEmailAdded, setIsEmailAdded] = useState(false); // State to track the email input value
  const [error, setError] = useState(""); // State to track email validation errors

  const updateFirebaseUserProfile = async (event) => {
    event.preventDefault();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      const userDataCollection = collection(db, "Newsletter");
      const userDataDocRef = doc(userDataCollection, email);

      // const docSnapshot = await getDoc(userDataDocRef);

      // if (!docSnapshot.exists()) {
      await setDoc(userDataDocRef, {
        email: email,
        userClickedOn: serverTimestamp(),
      });

      setIsEmailAdded(true);
      setError(""); // Reset the error state
      console.log("userData Document created and initialized!!");
      // } else {
      //   setIsEmailAdded(false); // Reset the state if the email already exists
      //   setError("Email already exists"); // Set error if the email already exists
      //   console.log("userData Document already exists, no update needed.");
      // }
    } catch (error) {
      setIsEmailAdded(false); // Reset the state in case of an error
      setError("Error updating user data document"); // Set error for other errors
      console.error("Error updating userData document: ", error);
    }
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsEmailAdded(false); // Reset the state when the input changes
    setError(""); // Reset the error state when the input changes
  };

  return (
    <div>
      <div className="tm-scrollHorizontal">
        <span></span>
      </div>
      <div className="plus-iconVertical"></div>
      <div className="joinWaitListMainContainer">
        <p className="joinWaitlistEarlyInviteText1">Join the waitlist for </p>
        <p className="joinWaitlistEarlyInviteText2">Early Invite!</p>
        <p className="weAreGearingUpText">
          We are gearing up for an early beta invite-only launch. Join the
          waitlist to get access and become early contributors to avail special
          offers in the mainnet launch.
        </p>
        <div className="errorMessageContainer">
          <div className="subscribeField">
            <form action="" id="contactForm">
              <input
                type="email"
                placeholder="Enter your email"
                className="emailInput"
                id="email"
                value={email}
                autoComplete="off"
                onChange={handleInputChange}
              />
              <button id="inputField" onClick={updateFirebaseUserProfile}>
                <Image
                  src={arrowButton}
                  alt="Arrow Icon"
                  className="arrowiconbutton"
                  width={24}
                  height={24}
                />
              </button>
            </form>
          </div>
          {isEmailAdded && (
            <p className="successMessage">
              We have added you to our waiting list!
              <br /> We will let you know when RADE is ready.
            </p>
          )}
          <div className="errorMessage">{error}</div>
        </div>
        <div className="tm-vertical">
          <span></span>
        </div>
        <div className="plus-icon"></div>
      </div>
    </div>
  );
};

export default JoinWaitlistSection;
