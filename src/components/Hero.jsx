import React from "react";
import "./Hero.css";
import webHero from "../../public/webHero.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={webHero} alt="" />
      </div>
      <div className="hero2">
        <img src={webHero} alt="" />
        <img src={webHero} alt="" />
      </div>
    </>
  );
};

export default Hero;
