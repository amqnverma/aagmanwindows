import React from "react";
import "./Gallery.css";
import Pin from "./Pin";
import Data from "../data/Data";

const Gallery = () => {
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-text">
          <h1>Our Gallery</h1>
          <p>
            Explore our collection of stunning window installations and get
            inspired for your next window
          </p>
        </div>

        <div className="gallery-grid">
          {Data &&
            Data.map((data) => <Pin pinSize={data.size} imageSrc={data.src} />)}
        </div>
      </div>
    </>
  );
};

export default Gallery;
