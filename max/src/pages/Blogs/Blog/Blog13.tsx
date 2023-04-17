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
import { blogimg3, blogimg11, blogimg13 } from "../../../assets";

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
              Which is the Safest Hair Transplant method in India
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg13} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">FUE Hair transplant</span>
              being a non-invasive method and performed under OPD care, is
              considered a safe method considered by NMC and IMA. Most of the
              renowned clinic chains are maintaining the safety norms and
              guidelines stated by the NMC. The FUE method is extremely safe and
              is considered a non-invasive procedure. FUE is performed in 3
              ways: the basic slit method, the implanter method, and the new
              method, Ice Cell Sapphire Micro FUE. As the name suggests, the FUE
              tool uses blades made of sapphire, which is a durable and valuable
              gemstone. The tool comes with sapphire blades instead of regular
              steel blades to make incisions for the Hair Transplant procedure.
              During a Hair Transplant operation, many channels are incised at
              the recipient zone. Opening the channels following the sapphire
              method is very effective. As sapphire is more durable than steel,
              the whole process becomes easier. Therefore, it can be said that
              the material used to make the Hair Transplant tool has a great
              importance on the success rate of operations. Sapphire tools have
              a V-shaped pin, while regular tools have pins that are made of
              steel. Having a V-shaped pin helps the sapphire tool make more
              accurate incisions, which helps open smaller channels. This
              reduces the probability of damage to neighboring follicles and
              scarring. Therefore, a Sapphire FUE Hair Transplant is an ideal
              method for both men and women suffering from recent hair loss
              since the hair density is considered to be high. Now in the
              Sapphire method, needle-free local anesthesia and an ice cell
              freezer graft preservation box have been introduced by MAX Hair
              Clinic to make the entire method the most modern and feature
              packed procedure. The needless local anesthesia device delivers
              local anesthesia without any pain, and the titanium punches are
              now used for extraction, which are optimum sharp and provide a
              vibration free extraction that is also infection free. The ice
              cell graft preservation box keeps the grafts intact and prevents
              dehydration, shock, and trauma, which extends the life of
              implanted grafts.
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
              <Link to="/blog/best-hair-transplant-clinics-in-india">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/best-hair-transplant-clinic-in-hyderabad">
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
