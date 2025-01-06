import React from "react";
import Blog from "../components/Blog";
import Faq from "../components/Faq";
import Gallery from "../components/Gallery";
import Windowtype from "../components/Windowtype";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Windowtype />
      <Gallery />
      <Blog />
      <Faq />
    </>
  );
};

export default LandingPage;
