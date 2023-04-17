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
import { blogimg3, blogimg11, blogimg12 } from "../../../assets";

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
              Best Hair transplant Clinics in India
            </h2>
          </div>
          <div className="imgSection">
            <img src={blogimg12} alt="" className={"my-[3vw] rounded-xl"} />
          </div>
          <div className="contentSection">
            <p className="text-justify">
              Displaying the beautiful diversity of the Himalayas, the flora and
              fauna of Kashmir and Himachal Pradesh, the beautiful beaches in
              Goa and entire south India, the deserts of Rajasthan, and lush
              green forests, India is home to some of the oldest heritages,
              including temple architecture. After Independence in 1947, India
              modernized itself and developed its own strong industries.
              Following this brief country introduction, it’s important to note
              India’s efforts to mark its place in medical tourism. The purpose
              of this guide is to help those who are looking for the best place
              for hair transplants. We will compare India to Turkey, the top
              hair transplant destination in the world, in terms of price,
              facilities, expertise, accommodation options, and travel time.
              India's joining the hair transplant revolution was in fact
              inevitable, given that the vast majority of hair transplant
              clients who travel to Turkey are Indian men aged 25 to 50. India
              is a relatively cheap country in terms of the cost of living,
              compared to other European and other Asian nations. Turkey offers
              additional value, such as luxury hotel stays usually included in
              your hair transplant package that are unbeatable in the world
              compared to expensive hotels without many options in India. A hair
              transplant in Turkey starts at $2200 at a reputable facility with
              a lifetime warranty. The majority of hair transplant clinics in
              Turkey offer international patients packages that make the hair
              transplant journey an unforgettable and valuable experience. These
              packages typically include VIP airport and clinic transfers,
              luxurious hotel stays, doctor consultations, preoperative health
              checks, all medications, aftercare, and the best customer service
              in the world. As surgeons in India and at MAX Hair Clinic have
              extensive mastery of the subject and the ability to explain the
              approaches appropriate for each client, they frequently have the
              power to fascinate patients during their initial face-to-face
              appointment. Despite the fact that both countries are reputable
              from the perspective of a hair transplant procedure, India tops
              the list when it comes to pricing and the overall attractiveness
              of the country. As a result, wherever you search, the information
              points to India and then Turkey as the most reliable destinations
              for the highest quality hair transplant. Offering highly skilled
              medical professionals, excellent client care, and the most
              economical operations supported by lifetime warranties, the
              majority of high-quality facilities are all found in India. Among
              all the chain clinics, the STC group has a great combination of
              methods for doing hair transplants across the world with variable
              and pocket-friendly pricing in MAX Hair Clinic as a mass premium
              brand performing the most modern 5th generation of Ice Cell
              Sapphire micro FUE and Adgrohair performing Percutaneous FUE at a
              budget price. It’s always important to remember that the clinic,
              not the country, is the most important variable for the success of
              your hair transplant journey.
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
              <Link to="/blog/best-hair-transplant-clinic-in-bangalore-and-cost-of-hair-transplant">
                <FontAwesomeIcon icon={faChevronLeft} className={"mr-[10px]"} />
                Previous Article
              </Link>
            </div>
            <div className="bottomRight hover:font-semibold">
              <Link to="/blog/which-is-the-safest-hair-transplant-method-in-india">
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
