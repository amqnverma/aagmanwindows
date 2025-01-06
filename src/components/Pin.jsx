import React from "react";
import "./Gallery.css";

const Pin = ({ pinSize, imageSrc }) => {
  return (
    <>
      <div className={`pin ${pinSize}`}>
        <img src={imageSrc} alt="" className="gallery-pic" />
      </div>
    </>
  );
};

export default Pin;
