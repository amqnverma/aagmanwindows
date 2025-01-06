import React from "react";
import "./Windowtype.css";
import { GoArrowRight } from "react-icons/go";
import sliderImage from "../../public/sliderImage.jpg";
import { Link } from "react-router-dom";

const Windowtype = () => {
  const windowCards = [
    {
      image: "../../public/winTypeL1.jpg",
      type: "Slider two track",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis?",
      link: "/window",
    },
    {
      image: "../../public/winTypeM1.jpg",
      type: "Slider three track",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis?",
      link: "/window",
    },
    {
      image: "../../public/winTypeS1.jpg",
      type: "Open Window",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, officiis?",
      link: "/window",
    },
  ];
  return (
    <>
      <div className="window-container">
        <div className="window-text">
          <div>
            <h1>Types of Windows</h1>
            <p>Discover our premium selection of modern window solutions</p>
          </div>

          <span>
            See gallery <GoArrowRight />
          </span>
        </div>

        <div className="window-card-container">
          {windowCards.map((window) => (
            <Link to={window.link}>
              <div className="window-card">
                <img src={window.image} alt="" />
                <div className="window-card-text">
                  <h4>{window.type}</h4>
                  <p>{window.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="slider">
        <img src={sliderImage} alt="" />
      </div>
    </>
  );
};

export default Windowtype;
