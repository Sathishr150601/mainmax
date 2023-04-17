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
import { blogimg3, blogimg9 } from "../../../assets";

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
              Can PRP regrow hair?
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg9} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">CC PRP Active +</span>
              is an advanced regenerative medicine practice powered by 9 growth
              factor concentrate.CC PRP Active + is a treatment using
              concentrated amount of platelets from the patient’s own blood,
              which is then injected back into the scalp. Platelets contain
              growth factors that attract stem cells to the area. Stem cells and
              the growth factors of the platelets stimulate hair regrowth. The
              most common form of hair loss in both men and women is called
              androgenic alopecia, which occurs due to genetically determined
              androgenic effects on the hair follicles. Androgenic alopecia is
              dependent on the androgenic substance dihydrotestosterone (DHT).
              The Hair follicles contain receptors for androgen (male sexual
              hormone). When these receptors are affected by DHT, two things
              happen. The growth phase is shortened and the hair follicle itself
              becomes smaller, which leads to shorter and thinner hair. Men can
              start losing their hair already in adolescence. However, it is
              more common for this to happen around the age of 30. First, one
              often discovers that the hair becomes thinner and later the scalp
              becomes increasingly visible. Even the hairline can creep up
              higher, and there are tabs, the characteristic high temples.Women
              with androgenic alopecia suffer from a more diffuse hair loss and
              rarely experience total hair loss. About 20-25% of all women in
              their 50s show signs of female androgenic alopecia. When hair
              follicles remain, CC PRP Active + can restore hair to its original
              size and reduce hair loss. In CC PRP Active + therapy, a small
              amount of blood is first collected from the client and captured in
              closed casket PRP lock tubes. The platelets are then concentrated
              by centrifugation of the blood. After local anesthesia, the
              platelet-rich plasma is introduced into the scalp through several
              small injections. The large number of platelets injected
              stimulates inactive hair follicles into an active growth phase. It
              can irritate the scalp for a few hours and slight swelling can
              sometimes be seen in the next few days. The treatment does not
              pose a risk of hypersensitivity since the platelets come from the
              patient's own blood. After the first treatment, it can be noted
              that hair loss decreases already after 2-3 weeks. After a month,
              you get their second treatment. Patients who have undergone PRP
              therapy have observed increased hair growth and thickness within
              3-6 months. Return visits are booked for follow-up 6 months after
              the second reading.
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
            <div className="bottomRight hover:font-semibold hidden">
              <Link to="">
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
