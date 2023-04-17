import { Button1, Footer, Header, Header1, Meta } from "../../../components";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { blogimg3, blogimg11 } from "../../../assets";

import React, { Component } from "react";

export default class Blog3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const maxFacebook = () => {
      window.open("https://www.facebook.com/maxhairclinicglobal/");
    };
    const maxTwitter = () => {
      window.open("https://twitter.com/maxhairclinicgl/");
    };
    const maxInstagram = () => {
      window.open("https://www.instagram.com/maxhairclinicglobal/");
    };
    const maxYoutube = () => {
      window.open("https://www.youtube.com/@MaxHairClinicGlobal/");
    };
    const maxLinkedin = () => {
      window.open("https://www.linkedin.com/company/maxhairclinic/");
    };
    const link1 = () => {
      window.open("http://surl.li/fritn");
    };
    return (
      <div className="blog1">
        <Meta
          title={"Hair Care Blog | Tips and Insights from MAX Hair Clinic"}
          desc={
            "Stay up-to-date with the latest Hair Care tips and trends from MAX Hair Clinic. Our experts share their knowledge to help you achieve your desired hair growth."
          }
        />
        <Header1 />
        <div className="my-[8vw]"></div>
        <div className="blogInner text-black w-[90vw] 2xl:w-[60vw] mx-auto overflow-hidden my-[30px]">
          <div className="goback">
            <Button1
              btn1click=""
              btnLocation="/blogs"
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="topsection">
            <div className="border-t-[1px] border-b-[1px] border-[#222] py-[10px] my-[30px] flex items-center justify-between">
              <div className="dateSection">
                <p className="mb-0">March 28, 2023</p>
              </div>
              <div className="arthur"></div>
            </div>
          </div>
          <div className="hedingSection">
            <h2 className="text-[2.5em] leading-[1.2em]">
              Best Hair Transplant Clinic in Bangalore and Cost of Hair
              Transplant
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg11} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">Bangalore</span>
              is one of the leading cities to get a hair transplant done due to
              the plenty of options available in the city. Being an IT city,
              trends of looking good in men and women in Bangalore are quite
              intense, and everyone wants to look good and trendy. Hair-loss in
              men is a common problem, and due to stress, tension, lack of
              sleep, and mainly genetic disorders, men are losing more and more
              hair, and from a very early age, in their 20s. Work related stress
              in the IT field is adding to a spree of hair-loss in men and women
              both. These days, every clinic in India has one or multiple
              clinics in Bangalore. Methods of doing hair transplants have
              changed, and continuous innovations are being made to improve the
              methods and process of doing hair transplants. Many clinics in
              Bangalore are still doing the conventional basic FUE slit method
              of hair transplant, and some are doing the implanter method with
              Choi pens and implanting BD needles. Across the world and in
              International Hair Restoration Society, the top surgeons are
              practicing innovative methods of extraction, preservation, and
              implanting. Ice cell Sapphire micro FUE is one of the latest
              methods of doing hair transplants, where the integration of Needle
              free local anesthesia, the ice cell graft preservation method, and
              implanting grafts with the precision oriented Sapphire stone blade
              is a completely error free method with a 98% success rate. Max
              hair clinic in Bangalore Lavelle road is practicing the all
              integrated modern method of Ice Cell Sapphire Micro FUE. Generally
              the basic FUE method in Bangalore is charged between 60k to 1.5
              lacs, Implanter Pen and Needle method between 2 lakhs to 2.5 lacs.
              The latest and most modern method of Ice Cell Sapphire micro FUE
              is also between 2 lakhs to 2.5 lakhs. All these prices are for
              approximately 4000 to 6000 grafts of hair transplant. Ice Sapphire
              micro FUE is the only method performed in MAX Hair Clinic
              Bangalore to achieve the highest density of 60-70 follicles per sq
              cm area with 42 to 63 degree angulation of hair growth and 0.4 to
              0.6 mm of graft depth with an optimum survival ratio of more than
              25 years.
            </p>
          </div>
          <div className="border-t-[1px] border-b-[1px] border-[#222] py-[10px] my-[30px]">
            <div className="flex justify-between">
              <div className="">
                <ul className="flex items-center">
                  <li
                    className="mx-[5px] hover:cursor-pointer"
                    onClick={maxFacebook}
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-[2em] h-[2em]"
                    />
                  </li>
                  <li
                    className="mx-[5px] hover:cursor-pointer"
                    onClick={maxInstagram}
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-[2em] h-[2em]"
                    />
                  </li>
                  <li
                    className="mx-[5px] hover:cursor-pointer hover:"
                    onClick={maxYoutube}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="w-[2em] h-[2em]"
                    />
                  </li>
                  <li
                    className="mx-[5px] hover:cursor-pointer"
                    onClick={maxTwitter}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="w-[2em] h-[2em]"
                    />
                  </li>
                  <li
                    className="mx-[5px] hover:cursor-pointer"
                    onClick={maxLinkedin}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="w-[2em] h-[2em]"
                    />
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="mb-0">Hair Care</p>
              </div>
            </div>
          </div>
          <div className="bottomSecton flex justify-between text-[1.3em]">
            <div className="bottomLeft hover:font-semibold">
              <Link to="/blog/how-to-grow-hair-naturally">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/best-hair-transplant-clinics-in-india">
                Next Article
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={"ml-[10px]"}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-[5vh]"></div>
        <Footer />
      </div>
    );
  }
}
