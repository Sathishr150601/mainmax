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
import { blogimg3, blogimg6 } from "../../../assets";

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
                <p className="mb-0">March 23, 2023</p>
              </div>
              <div className="arthur"></div>
            </div>
          </div>
          <div className="hedingSection">
            <h2 className="text-[2.5em] leading-[1.2em]">
              What is Ice Cell Sapphire micro FUE?
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg6} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              <span className="text-[1.5em]">Ice Cell Preservation Method</span>
              the sapphire store implanting method is one of the aesthetic
              surgery methods used to eliminate thinning or balding hair
              problems. In the application of sapphire hair transplantation, the
              grafts in the donor area are collected one by one with micro FUE
              motors and placed one by one in the micro channels opened with the
              help of sapphire-tipped blades in the hair transplantation area.
              In this way, the problem of baldness or sparse areas of the scalp
              is eliminated.
              <br />
              The Ice Cell Sapphire micro-FUE technique is a procedure that can
              be performed in a single session and provides permanent results.
              The fact that the method allows for more frequent planting and
              excellent results to be obtained in narrow areas. The ice cell
              graft preservation technique allows the extracted grafts to retain
              their properties even after extraction and being kept outside the
              body for a certain period of time. The survival and growth factors
              of the grafts become optimal post-implantation and grow faster and
              remain on the scalp longer than any other FUE method, which is
              usually more than 25 years. The advantages of Sapphire FUE hair
              transplantation have made the method prominent in recent years.
              The use of sapphire tips in the treatment of Sapphire FUE hair
              transplantation reduces vibration. In this way, it is possible to
              say that the risk of tissue damage is minimized. Another advantage
              of the Sapphire FUE technique is that it allows for more frequent
              transplantation. In this way, a natural appearance can be
              obtained, and intense baldness problems can be eliminated. In the
              Sapphire FUE hair transplantation technique, some common
              complications, such as swelling, are much less common than with
              other methods. This helps patients have a comfortable recovery
              process. The use of sapphire tips in the Sapphire FUE hair
              transplant technique helps to shorten the healing time by opening
              microchannels. Another advantage of Sapphire-stone blades is that
              they do not cause allergies like steel knives. The most
              distinctive advantage of Sapphire micro FUE is the classical FUE
              and Sapphire FUE techniques are one of the important points to be
              informed about while deciding on the hair transplant method. FUE
              engines are used in both classical FUE and Sapphire micro FUE
              methods. The difference between the two methods is observed in the
              channel opening phase. In the classical FUE method, steel blades
              are used during the grooving process for the transplantation of
              grafts. In the Sapphire FUE technique, sapphire-tipped medical
              pens are preferred during the grooving process. The use of
              sapphire-tipped blades shortens the error rate and recovery time.
              Max Hair Clinic International has been practicing Sapphire micro
              FUE for the last couple of years since it evolved in the practice
              of the International Hair Restoration Society and has now
              innovated the graft preservation technique by adding the Ice Cell
              Preservation Technique to make the entire procedure error-free.
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
