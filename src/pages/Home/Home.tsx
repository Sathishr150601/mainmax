import { faCalendar, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import {
  BA1,
  BA10,
  BA11,
  BA12,
  BA13,
  BA14,
  BA15,
  BA16,
  BA17,
  BA18,
  BA19,
  BA2,
  BA20,
  BA21,
  BA22,
  BA23,
  BA24,
  BA25,
  BA26,
  BA27,
  BA28,
  BA29,
  BA3,
  BA30,
  BA31,
  BA32,
  BA33,
  BA34,
  BA35,
  BA36,
  BA37,
  BA38,
  BA39,
  BA4,
  BA40,
  BA41,
  BA42,
  BA43,
  BA44,
  BA45,
  BA46,
  BA47,
  BA48,
  BA5,
  BA6,
  BA7,
  BA8,
  BA9,
  bangalore,
  chennai,
  coimbatore,
  cosmetic,
  hairLight,
  hydrabad,
  icon1,
  icon2,
  icon3,
  iht,
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  m,
  mascot,
  maxlogo2,
  mumbai,
  noida,
  olt,
  prp,
  prpnew,
  saphnew,
  sapphire,
  sht,
  since,
  since2,
  slide1,
  slide2,
  slide3,
  stem,
} from "../../assets";
import {
  Button1,
  Button2,
  Cookie,
  Footer,
  Header,
  Heading,
  Whatsapp,
  Meta
} from "../../components";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="Home">
        <Meta
          title="Hair Transplant Clinic in India | Natural Looking Hair Restoration"
          desc="Our Hair Transplant Clinic in India offers advanced techniques for natural-looking Hair Restoration. Restore your confidence with our experts."
          ln="/"
        />
        <Header />
        <Hero />
        <Slide />
        <Video />
        <LocationVector />
        <Mascot />
        <Counter />
        <LogoSlider />
        <Heading
          headingtitleclass="text-black"
          headingtitlecontent1="Our"
          headingtitlecontent2="Services"
        />
        <Services />
        <Heading
          headingtitleclass="text-black"
          headingtitlecontent1="Still Not"
          headingtitlecontent2="Convinced?"
        />
        <BeforeAfter />
        <Heading
          headingtitleclass="text-black"
          headingtitlecontent1="Our Best"
          headingtitlecontent2="Selling Services"
        />
        <SpclServices />
        <div className="h-[10vh] lg:hidden"></div>
        <Cookie />
        <Whatsapp />
        <Footer />
      </div>
    );
  }
}

function Hero() {
  return (
    <section className="Hero absolute top-0 w-[100vw] overflow-hidden h-[120vh] sm:h-[100vh] lg:h-[180vh]">
      <div className="bg-[url('./assets/photos/bg/herobg.png')] bg-cover bg-no-repeat h-max w-[100vw] overflow-hidden lg:-top-[1000px]">
        <div className="part1 w-[90vw] mx-auto h-[60vh] pt-[25vh] sm:pt-[20vh] sm:h-[50vh]  sm:flex sm:justify-evenly lg:h-[100vh] lg:pt-[25vh] lg:items-center 2xl:pt-[30vh]">
          <div className="left pl-[5vw] sm:pl-0">
            <h2 className="text-[18vw] leading-[9vh] sm:text-[12vw] sm:leading-[6vh] md:text-[10vw] md:leading-[5vh] lg:text-[12vw] lg:leading-[11vh] 2xl:text-[9vw] 2xl:leading-[8vh] ">
              <span className="mb-[7vw]">Hair</span>
              <span className="mb-[7vw]">Defines</span>
              <span className="mb-[7vw]">You</span>
            </h2>
          </div>
          <div className="right hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
            <img
              src={since}
              alt=""
              className="w-[15vw] -my-[2vh] lg:w-[18vw] lg:-mt-[-3vh] 2xl:w-[16vw] 2xl:-my-[3vh]"
            />
            <img
              src={maxlogo2}
              alt=""
              className="w-[35vw] -my-[3vh] lg:w-[40vw] lg:-my-[5vh] 2xl:w-[35vw] 2xl:-my-[4vh]"
            />
          </div>
        </div>
        <div className="part2 w-[90vw] mx-auto h-[50vh] sm:h-[50vh] sm:w-[60vw] sm:mr-[10vw] sm:float-right lg:w-[50vw] lg:h-[80vh] 2xl:w-[40vw] 2xl:mr-[10vw]">
          <p className="text-justify mt-[5vh] text-[3.5vw] leading-[4.5vh] sm:text-[2.5vw] sm:leading-[3.5vh] md:text-[2.2vw] md:leading-[3.2vh] md:pt-[3vh] lg:text-[1.8vw] lg:leading-[6.8vh] xl:text-[1.6vw] 2xl:text-[1.3vw] ">
            Max Hair Clinic incorporated in 2004 is self-defined brand name in
            the modern world of Hair transplant in India cascading excellence in
            delivery, we continue our operations in a class apart of OPD
            facilities environment for more than 18 years of experience with our
            visitors from all over the world.
          </p>
          <Link to="/about" className="read-more flex w-max">
            <Button2 button2text="Read More" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="slide-container overflow-hidden mt-[3vh] sm:mt-[1vh] pt-[105vh] sm:pt-[95vh] lg:pt-[170vh]">
      <Marquee
        direction="left"
        speed={100}
        className="lg:mt-[1vh] 2xl:mt-[2vh]"
      >
        <div className="flex w-[180vw] sm:w-[150vw] text-black">
          <img
            src={slide1}
            alt=""
            className="w-[60vw] h-[10vh] sm:w-[50vw] sm:h-auto px-[5vw]"
          />
          <img
            src={slide2}
            alt=""
            className="w-[60vw] h-[10vh] sm:w-[50vw] sm:h-auto px-[5vw]"
          />
          <img
            src={slide3}
            alt=""
            className="w-[60vw] h-[10vh]  sm:w-[50vw] sm:h-auto px-[5vw]"
          />
        </div>
      </Marquee>
    </div>
  );
}

function Video() {
  return (
    <div className="w-[95vw] relative sm:w-[80vw] lg:w-[70vw] 2xl:w-[60vw]  mx-auto my-[8vh] sm:my-[5vw]">
      <video className="rounded-3xl" height="500" autoPlay muted loop>
        <source src={sapphire} type="video/mp4" />
      </video>
    </div>
  );
}

function LocationVector() {
  return (
    <div className="Locations1 w-[90vw] lg:w-[96vw] mx-auto flex flex-col lg:flex-row text-black">
      <div className="flex justify-between">
        <div className="section ">
          <img src={chennai} alt="" className="w-[24vw] lg:w-[16vw] mx-auto" />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Chennai
            </h4>
          </div>
        </div>
        <div className="section">
          <img
            src={bangalore}
            alt=""
            className="w-[24vw] lg:w-[16vw] mx-auto"
          />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Bangalore
            </h4>
          </div>
        </div>
        <div className="section">
          <img
            src={coimbatore}
            alt=""
            className="w-[24vw] lg:w-[16vw] mx-auto"
          />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Coimbatore
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="section">
          <img src={hydrabad} alt="" className="w-[24vw] lg:w-[16vw] mx-auto" />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Hyderabad
            </h4>
          </div>
        </div>
        <div className="section">
          <img src={noida} alt="" className="w-[24vw] lg:w-[16vw] mx-auto" />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Noida
            </h4>
          </div>
        </div>
        <div className="section">
          <img src={mumbai} alt="" className="w-[24vw] lg:w-[16vw] mx-auto" />
          <div className="imgText text-center">
            <h4 className="lg:text-[calc(1rem+0.3vw)] lg:leading-[calc(1rem+1vw)]">
              Mumbai
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mascot() {
  return (
    <div className="Mascot w-[90vw] mx-auto my-[8vh] sm:mt-[8vw] flex justify-center text-black">
      <div className="mascotContent my-auto px-[5vw]">
        <h2 className="flex items-baseline justify-start text-[6vw] sm:text-[7vw] lg:mb-[3vh]">
          Hi, I'm<span className="text-[#fcb717] pl-3">XAM</span>
        </h2>
        <h3 className="lg:mb-[3vh] 2xl:text-[2vw]">
          Let Me Take you
          <br /> through your <br /> Hair Regrowth Journey!
        </h3>
        <br />
        <div className="contactBtn">
          <a href="https://mymaxhair.com/form">
            <button
              type="button"
              className="text-white sm:text-[16px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              <FontAwesomeIcon
                icon={faCalendar}
                className="mr-[5px] md:mr-[10px]"
              />
              Start
            </button>
          </a>
        </div>
      </div>
      <div className="mascot-img">
        <img src={mascot} alt="" className="w-[50vw] sm:w-[45vw] lg:w-[30vw]" />
      </div>
    </div>
  );
}

function Counter() {
  return (
    <div className="text-white my-[8vh]">
      <div className="CounterSection bg-[url('./assets/photos/bg/counterbg.jpg')] bg-cover bg-no-repeat py-[3vh] px-[5vw]">
        <div className="flex flex-col flex-wrap justify-evenly items-center text-center sm:flex-row">
          <div className="flex justify-evenly items-center mb-[3vh]">
            <div className="w-[40vw] sm:w-[22vw]">
              <img
                src={since2}
                alt=""
                className="w-[24vw] -my-[1.5vh] mx-auto sm:w-[16vw] sm:-my-[2vh] md:w-[12vw]"
              />
              <p className="leading-[3vh] mb-0">
                Years of <br /> Entensive <br /> Experience
              </p>
            </div>
            <div className="w-[40vw] sm:w-[22vw] ">
              <img
                src={icon1}
                alt=""
                className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
              />
              <p className="leading-[3vh] mb-0">
                30,000+ <br /> Successful <br /> Surgeries
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center ">
            <div className="w-[40vw] sm:w-[22vw]">
              <img
                src={icon2}
                alt=""
                className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
              />
              <p className="leading-[3vh] mb-0">
                Award <br /> Winning Clinic <br /> in Trichology
              </p>
            </div>
            <div className="w-[40vw] sm:w-[22vw]">
              <img
                src={icon3}
                alt=""
                className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
              />
              <p className="leading-[3vh] mb-0">
                50,000+ <br /> Satisfied <br /> Clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoSlider() {
  return (
    <div className="LogoSlider bg-white w-[100vw] mb-[8vh]">
      <Marquee speed={60} direction="right">
        <div className="logo1 px-[2vw]">
          <img
            src={logo1}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo2}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        {/* <div className="logo1 px-[2vw]">
          <img
            src={logo3}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div> */}
        <div className="logo1 px-[2vw]">
          <img
            src={logo4}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo5}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo6}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo7}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo8}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw] "
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo9}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
        <div className="logo1 px-[2vw]">
          <img
            src={logo10}
            alt=""
            className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
          />
        </div>
      </Marquee>
    </div>
  );
}

function Services() {
  return (
    <div className="flex flex-wrap">
      <FlipCard
        ln="/services/surgical-treatments"
        cardname="Surgical Treatments"
        serviceimg="front img1 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[30vw] lg:h-[30vw]"
        serviceContent1="Hair Transplant"
        serviceContent2="Women Hair Transplant"
        serviceContent3="IGM Hair Transplant"
        serviceContent4="DHI Hair Transplant"
        serviceContent5="Sapphire Hair Transplant"
        serviceContent6="Eyebrow Hair Transplant"
        serviceContent7="Beard Hair Transplant"
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden5="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden6="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden7="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
      />
      <FlipCard
        ln="/services/non-surgical-treatments/"
        cardname="Non - Surgical Treatments"
        serviceimg="front img4 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[30vw] lg:h-[30vw]"
        serviceContent1="Tres Pro"
        serviceContent2="Celebrity's Choice"
        serviceContent3="Satin Lace"
        serviceContent4="French Grip"
        serviceContent5="Laser Helmet"
        serviceContent6="Dura"
        serviceContent7=""
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden5="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden6="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden7="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
      />
      <FlipCard
        ln="/services/non-invasive-treatments"
        cardname="Non-Invasive Treatments"
        serviceimg="front img2 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[30vw] lg:h-[30vw]"
        serviceContent1="Scalp Micropigmentation"
        serviceContent2="Eyelash Extension"
        serviceContent3="Eyebrow Microblading"
        serviceContent4="CC PRP Active Plus"
        serviceContent5="Oxygen LASER Therapy"
        serviceContent6="Dr Regrowth"
        serviceContent7="Crotico-Shot"
        serviceContent8="Laser Helmet"
        serviceContent9="Meso QR 678"
        serviceContent10="Scalp Detox"
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden5="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden6="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden7="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
      />
    </div>
  );
}

function FlipCard(props: any) {
  return (
    <div className="Services1 w-max mx-auto my-[2vh]">
      <Link to={props.ln}>
        <div className="flip-card bg-transparent h-[300px] w-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[30vw] lg:h-[30vw]">
          <div className="flip-card-inner relative h-[300px] w-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[30vw] lg:h-[30vw]">
            <div className="flip-card-front absolute">
              <div className={props.serviceimg}>
                <div className="flex items-end h-[300px] sm:h-[44vw] lg:h-[30vw]">
                  <div className="bg-black opacity-70 w-[300px] sm:w-[44vw] lg:w-[30vw] h-max flex justify-center items-center pt-[1vh] text-center">
                    <h2 className="caption txtshadow text-[1.3rem] leading-[2vh] xl:text-[1.4rem] 2xl:text-[1.6em] lg:leading-[3vh]">
                      {props.cardname}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back absolute">
              <h4 className="p-[1.5rem] text-[1rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.8rem]">
                <ul className="">
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent1}
                  </li>
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent2}
                  </li>
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent3}
                  </li>
                  <li className={props.servicehidden1}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent4}
                  </li>
                  <li className={props.servicehidden2}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent5}
                  </li>
                  <li className={props.servicehidden3}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent6}
                  </li>
                  <li className={props.servicehidden4}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent7}
                  </li>
                  <li className={props.servicehidden5}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent8}
                  </li>
                  <li className={props.servicehidden6}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent9}
                  </li>
                  <li className={props.servicehidden7}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent10}
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function BeforeAfter() {
  return (
    <Link to="/image-gallery">
      <div className="BeforeAfter bg-[url('./assets/photos/bg/counterbg.jpg')] bg-cover bg-no-repeat  h-max pt-[7vw] mb-[8vh] sm:mb-[8vw]">
        <div className="w-[90w] mx-auto">
          <div className="relative flex justify-center">
            <div className="scroll-text absolute z-10 text-center w-[90vw]">
              <h2 className="text-[10vw] leading-[14vw] txtshadow mt-[7vw] lg:mt-[10vh]">
                The Results that Astound our Clients are an Attestation to our
                Success.
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[100vw]">
          <Marquee direction="left" speed={40}>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA1} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA2} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA3} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA4} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA5} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA6} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA7} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA8} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA9} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA10} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA11} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA12} className="w-[20vw]" alt="Image" />
            </div>
          </Marquee>
          <Marquee direction="right" speed={80}>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA13} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA14} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA15} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA16} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA17} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA18} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA19} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA20} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA21} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA22} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA23} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA24} className="w-[20vw]" alt="Image" />
            </div>
          </Marquee>
          <Marquee direction="left" speed={80}>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA25} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA26} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA27} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA28} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA29} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA30} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA31} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA32} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA33} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA34} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA35} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA36} className="w-[20vw]" alt="Image" />
            </div>
          </Marquee>
          <Marquee direction="right" speed={80}>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA37} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA38} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA39} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA40} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA41} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA42} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA43} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA44} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA45} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA46} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA47} className="w-[20vw]" alt="Image" />
            </div>
            <div className="slowed-image  pb-[7vw] px-5">
              <img src={BA48} className="w-[20vw]" alt="Image" />
            </div>
          </Marquee>
        </div>
      </div>
    </Link>
  );
}

function SpclServices() {
  return (
    <div className="Services mb-[8vh] sm:mb-[8vw] px-16 w-[90vw] mx-auto text-black">
      <hr className="hidden" />
      <div className="sm:pl-[5vw] ">
        <div className="ServiesText">
          <h2 className="text-black text-[4vw] lg:text-[2.8vw] 2xl:text-[3vw]">
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/igm-hair-transplant">
                    IGM Hair Transplant
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={iht}
                  alt=""
                  className="s1 mx-[4vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/meso-qr-678">Mesotherapy</Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={prp}
                  alt=""
                  className="s1 mx-[4vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/ice-cell-sapphire-micro-fue">
                    ICE Cell Sapphire Micro FUE
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={saphnew}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/cc-prp-active-plus">CC PRP Active+</Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={prpnew}
                  alt=""
                  className="s1 mx-[3vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/oxygen-laser-therapy">
                    Oxygen LASER Therapy
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={olt}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/meso-qr-678">StemX27</Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={stem}
                  alt=""
                  className="s1 mx-[-5vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="services/celebrity's-choice">
                    Cosmetic Hair Replacement
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={cosmetic}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[23vw]"
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
