import React from "react";
import "./WindowPage.css";
import { FaLocationArrow } from "react-icons/fa6";
import type1 from "../../public/type1.jpg";
import type2 from "../../public/blogImage.jpg";

const WindowPage = () => {
  return (
    <>
      <div className="windowPage-container">
        <div className="window-type">
          <img src={type1} alt="" />{" "}
          <div className="window-type-text">
            <h3>uPVC two track window</h3>
            <ul>
              <span>Expert consultation</span>
              <span>
                Share <FaLocationArrow />
              </span>
            </ul>
          </div>
          <p>
            Twin Sash uPVC casement windows from AIS Windows are strong, and
            will not rot, warp, or require repainting; ensuring that they retain
            their colour and shape through the years with a minimal maintenance.
            They combine traditional fly mesh panels with conventional casement
            windows to provide a classic aesthetic.
          </p>
          {/* form */}
        </div>

        <div className="window-type-features">
          <h4>Features</h4>
          <ul>
            <li>Classic retro aesthetics</li>
            <li>Fly-mesh-panel-compatible in casement windows</li>
            <li>Better security due to grill provision</li>
          </ul>
        </div>
        <div className="window-type-gallery">
          <h1>Gallery</h1>
          <div className="window-type-gallery-grid">
            <img src={type1} alt="" />
            <img src={type2} alt="" />
            <img src={type1} alt="" />
            <img src={type2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowPage;
