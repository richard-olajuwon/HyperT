import React from "react";
import "./DropDown.css";
import logo from "../../../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="overall-dropdown-container">
      <div className="dropdown-icon-container">
        <img
          onClick={() => {
            setDropDownOpen(!dropDownOpen);
          }}
          src={
            dropDownOpen
              ? "https://img.icons8.com/?size=100&id=ZV8D2YZ6852I&format=png&color=eb4034"
              : "https://img.icons8.com/?size=100&id=83195&format=png&color=eb4034"
          }
          alt="dropdown icon"
        />
      </div>

      <div
        className="dropdown-items-container"
        style={{ display: dropDownOpen ? "flex" : "none" }}
      >
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="dropdown-content-container">
          <Link to="/">
            <p
              onClick={() => {
                setDropDownOpen(false);
              }}
            >
              Home
            </p>
          </Link>
          <Link to="/products">
            <p
              onClick={() => {
                setDropDownOpen(false);
              }}
            >
              Products
            </p>
          </Link>
          <Link to="/login">
            <p
              onClick={() => {
                setDropDownOpen(false);
              }}
            >
              Login
            </p>
          </Link>
          <Link to="/login">
            <p
              onClick={() => {
                setDropDownOpen(false);
              }}
            >
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
