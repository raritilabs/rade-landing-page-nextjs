"use client"; // This is a client component
import React, { useState } from "react";
import "../../public/styles/App.css";
import slideshow1 from "../assets/slideshow2.svg";
import slideshow2 from "../assets/slideshow1.svg";
import slideshow3 from "../assets/slideshow3.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import Image from "next/image";
const WhyBorrowFromRade = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className="whyRadeDefinition">
      <p className="whyBorrow">Why Borrow from RADE?</p>
      <p className="definitionParaOne">
        Conventional DeFi is built upon the traditional interest-based economic
        instruments. RADE provides a paradigm shift in hypothecation and breaks
        the shackles of predatory interest-bearing systems. Here is an
        illustration of how RADE differs from the rest.
      </p>
      <div className="slideShowMainContainer">
        <Image
          className="slideImages"
          src={slideshow1}
          alt="slide show"
          style={{ display: currentSlide === 1 ? "block" : "none" }}
        />
        <Image
          className="slideImages"
          src={slideshow2}
          alt="slide show"
          style={{ display: currentSlide === 0 ? "block" : "none" }}
        />
        <Image
          className="slideImages"
          src={slideshow3}
          alt="slide show"
          style={{ display: currentSlide === 2 ? "block" : "none" }}
        />
        <div className="slideShowButtonDiv">
          <button className="slideShowButton" onClick={prevSlide}>
            <Image src={leftArrow} className="leftArrow" alt="left arrow" />
          </button>
          <button className="slideShowButton" onClick={nextSlide}>
            <Image src={rightArrow} alt="right arrow" className="rightArrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyBorrowFromRade;
