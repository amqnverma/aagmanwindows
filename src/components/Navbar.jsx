import React from "react";
import "./navbar.css";
import aagmanlogo from "../../public/aagmanLogo.png";
import { MdOutlineCalculate } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <div className="nav-logo">
            <img src={aagmanlogo} alt="" />
            <h2>AAGMAN</h2>
          </div>
        </Link>

        <div className="navigation">
          <span>
            <MdOutlineCalculate />
            Calculate Your Window
          </span>
          <button>Purchase</button>
          <button>About</button>
        </div>
        <CiMenuFries className="menu-icon" />
      </div>
    </>
  );
};

export default Navbar;
