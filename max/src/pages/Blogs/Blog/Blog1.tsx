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
import { clinic } from "../../../assets";
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
      window.open("https://shorturl.at/loIW8");
    };
    const link2 = () => {
      window.open("https://shorturl.at/zITW6");
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
                <p className="mb-0">March 21, 2023</p>
              </div>
              <div className="arthur"></div>
            </div>
          </div>
          <div className="hedingSection">
            <h2 className="text-[2.5em] leading-[1.2em]">
              Best Hair Transplant Clinic in Chennai
            </h2>
          </div>
          <div className="imgSection">
            <img src={clinic} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">Hair Transplant</span> procedure in
              Chennai is trending in most of the Aesthetic clinics these days
              and the social taboo has been broken by education and awareness
              spread across our country and the world of its outcome and best
              possible results. FUE method hair transplant is the latest method
              to achieve hair back on the scalp but these days according to the
              International society of hair restoration many innovative
              techniques are being used to achieve desired results. Best hair
              transplant clinic in Chennai depends on certain criteria which is
              absolutely mandatory to nurture and verify before one should
              proceed. First and foremost thing to see is the OT premises and
              the facilities to perform the procedure. Hygiene condition of the
              clinic and the operation theater. Innovation reciprocated in the
              method over the years is the key factor to determine the best
              clinic along with the Skilled Surgeons on board who have already
              performed more than 1000 cases at least to be more precise on
              extraction method with less than 3% transaction ratio and high
              graft survival ratio of more than 96%. Real pictures of clients
              undergone hair transplant and video testimonials also add a lot of
              value to the process. &nbsp;
              <Link
                to=""
                onClick={link1}
                className="font-semibold hover:underline"
              >
                Sapphire Hair Transplant
              </Link>
              &nbsp; is considered as the most modern way of doing hair
              transplant which is the generation 5th FUE method. Sapphire hair
              transplant is done with the help of Sapphire stone blade which is
              most close to the body chemistry and skin friendly and can create
              the most natural and vibration free miniscule channel to implant
              extracted follicular unit grafts. &nbsp;
              <Link
                to=""
                onClick={link2}
                className="font-semibold hover:underline"
              >
                Max Hair Clinic
              </Link>
              &nbsp; is the first of the kind of Aesthetic center in Chennai to
              introduce the 5th generation latest method FUE where depth,
              direction, density and sustainability is the key feature to seal
              the authenticity of the method performed which is now trending in
              the leading hair transplant clinics across the world also
              performed by top surgeons from International hair restoration
              society.
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
          <div className="bottomSecton flex justify-end text-[1.3em]">
            <div className="bottomLeft hover:font-semibold hidden">
              <Link to="">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/how-to-grow-hair-naturally">
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
