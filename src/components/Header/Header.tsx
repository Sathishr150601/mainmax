import React, { useState, useEffect, Component } from "react";
import { maxlogo1, since } from "../../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button1 } from "../index";

export default function Header() {
  return (
    <div className={`Header relative z-10 `}>
      <div
        className="flex justify-between items-center mx-[5vw] lg:mx-[2vw]"
        id="logo"
      >
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className="HeaderLeft">
      <div
        className="left flex sm:hidden justify-center items-center blink text-[14px] md:text-[20px]"
        id="Phone"
      >
        <FontAwesomeIcon
          icon={faPhone}
          className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] md:mr-[10px]"
        />
        &nbsp;
        <a href="tel:18002026112">
          <strong>MAX Us </strong> <br />
          1800 202 6112
        </a>
      </div>
      <div className="hidden sm:block text-[13px] mt-[2vh]">
        <Button1
          btnName="Menu"
          btnLocation="/menu"
          spanClass1="bar"
          spanClass2="bar bar2"
          spanClass3="bar bar3"
        />
      </div>
    </div>
  );
}

function HeaderCenter() {
  return (
    <div className="HeaderCenter sm:hidden flex justify-center items-center">
      <Link to="/">
        <img
          src={maxlogo1}
          alt="Max Logo"
          className="w-[80px] md:w-[120px] md:h-[120px]"
          id="MaxLogo"
        />
      </Link>
    </div>
  );
}

function HeaderRight() {
  return (
    <div className="HeaderRight">
      <div className="left flex items-center sm:hidden">
        <img
          src={since}
          alt="since"
          className="w-[100px] md:w-[140px]"
          id="Since"
        />
      </div>
      <div className="hidden sm:flex text-[13px] mt-[2vh]">
        <div
          className="flex justify-center items-center blink text-[#999999] text-[14px] md:text-[20px] mr-[10px] lg:mr-[20px]"
          id="Phone"
        >
          <FontAwesomeIcon
            icon={faPhone}
            className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] md:mr-[10px] "
          />
          &nbsp;
          <a href="tel:18002026112">
            <strong>MAX Us </strong> <br />
            1800 202 6112
          </a>
        </div>
        <div className="contactBtn flex items-center">
          <Button1 btnName="Contact Us" btnLocation="/contact" />
        </div>
      </div>
    </div>
  );
}
