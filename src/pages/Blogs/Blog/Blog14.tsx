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
import { blogimg3, blogimg11, blogimg14 } from "../../../assets";

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
                <p className="mb-0">April 01, 2023</p>
              </div>
              <div className="arthur"></div>
            </div>
          </div>
          <div className="hedingSection">
            <h2 className="text-[2.5em] leading-[1.2em]">
              Best hair care products to resolve hair-loss
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg14} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">Hyderabad &nbsp;</span>
              is a hub of hair transplant clinics, and there are wide choices of
              clinics in the city in every corner. Prices generally vary from
              50k-60k to 2.5 lakhs, depending on the profile of the clinic, the
              operating surgeon, the method performed, etc. The best clinic for
              hair transplants depends on certain criteria, like the OT facility
              of the clinic, how well it is equipped, who the surgeon is, and
              his or her credentials. How many cases have been done, and what
              are the results? How is the clinic staff? Are they very helpful in
              assisting the client? Is post-procedure follow-up done? Are
              reviews done? Are they performing the latest methods of hair
              transplantation? What tools are being used during the case, and
              eventually the cost of the procedure, which should be value for
              money. A cheaper hair transplant doesn’t mean it will yield
              results; it also means that due to cost control, the clinics are
              using reusable punches, needles, etc. A state-of-the-art clinic in
              Hyderabad is MAX Hair Clinic in Jubilee Hills, which has been
              serving clients for more than a decade. MAX performs 3 methods of
              FUE hair transplant: the basic slit method FUE, the implanter
              method, and the Ice Cell Sapphire micro FUE. Hair transplants in
              Hyderabad have become a prime modality to deal with baldness these
              days, and they have become the most popular method to get back
              your hair. Top surgeons and clinics performing hair transplants
              across the world are primarily practicing Ice Cell Sapphire micro
              FUE because of its success ratio, neutrality, sustainability,
              density achieved, etc. MAX Hair Clinic surgeons in Hyderabad have
              adopted the method and performed on more than 500 clients, which
              has given the clients immense satisfaction with the achieved
              results. Clients have also rated the procedure as the most modern
              and painless way to undergo a hair transplant. Pricing of Ice Cell
              Sapphire micro FUE varies from 4-6 lakhs INR in Turkey, the
              cheapest place to do hair transplants, but at MAX Hair Clinic, it
              costs only 1.75 to 2 lakhs INR for a lifetime warranty. The
              popularity of the Ice Cell Sapphire micro FUE hair transplant
              procedure in Hyderabad is paramount because of the advancements in
              this field, which provide extremely natural results. The expertise
              of the doctors and the state-of-the-art technology at MAX Hair
              Clinic have made this procedure highly successful and worthy of
              choosing for hair loss treatment.
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
              <Link to="/blog/which-is-the-safest-hair-transplant-method-in-india">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/best-hair-care-products-to-resolve-hair-loss">
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
