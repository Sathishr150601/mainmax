import { Button1, Footer, Header1, Meta } from "../../../components";
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
import { blogimg2 } from "../../../assets";

import React, { Component } from "react";

export default class Blog2 extends Component {
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
      window.open("http://shorturl.at/cfpwR");
    };
    const link2 = () => {
      window.open("http://shorturl.at/ajkqG");
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
              How to grow Hair naturally
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg2} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">Hair</span> naturally grows, rests
              and sheds and then again grows back naturally in three stages,
              Anagen, Catagen & Telogen stages. Whenever there is excessive
              hair-loss and the hair doesn’t grow back causing baldness to
              mostly men are called as androgenetic alopecia cases or genetic
              hair-loss conditions. Most of us when we start losing hair try
              home remedies, oils to restrict hair-loss but unfortunately it
              doesn’t help in cases of Androgenetic alopecia and women’s
              hair-loss due to hormonal changes. The first line of treatment for
              active hair-loss is application of minoxidil which improves the
              blood circulation in the follicular unit grafts to survive in the
              active anagen mode. Generally when the captive hair-loss becomes
              more due to the blockage of DHT hormones around the follicular
              unit grafts CC PRP + is the solution which needs to be undergone
              every 20 days to arrest hair-loss. In cases of baldness the only
              way to achieve natural growing hairs is the IGM & Sapphire method
              of hair transplant where hairs grow naturally and remain back in
              the scalp throughout the life. Maintaining healthy diet in normal
              cases helps to maintain and grow hairs naturally but in cases of
              Androgenetic alopecia nothings works other than application of
              minoxidil, activating PRP growth factors in scalp and eventually
              transplanting hair bearing tissues from the back which is known as
              hair transplant. Ingenious device grafting methods FUE and
              Sapphire FUE are the 4th and 5th generation hair transplants and
              considered as the most modern generation hair transplant
              procedure. Adding feathers to the Hat Max hair studio
              international has been considered as the most innovative
              organization in terms of process development where research never
              stops and the Surgeons are inquisitive on improving the methods
              every passing day. &nbsp;
              <Link
                to=""
                onClick={link1}
                className="font-semibold hover:underline"
              >
                Checkout our doctors advice if you are considering hair
                transplant,
              </Link>
              &nbsp;
              <Link
                to=""
                onClick={link2}
                className="font-semibold hover:underline"
              >
                also we are here for daily updates do check
              </Link>
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
              <Link to="/blog/best-hair-transplant-clinic-in-chennai">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/cost-of-hair-transplant-in-india">
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
