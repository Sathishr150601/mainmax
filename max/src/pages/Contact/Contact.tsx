import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { Link, useLocation } from "react-router-dom";
import { Footer, Header1, Hero2, Meta } from "../../components";
import Form from "../../components/Form/Form";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = () => {
    if (window.innerWidth >= 1023) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1.32,
          behavior: "smooth",
        });
      } else if (window.innerWidth <= 1561) {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      }
    } else {
      if (window.innerWidth <= 767) {
        if (window.innerWidth <= 450) {
          window.scrollTo({
            top: window.innerHeight / 1.66,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.45,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.8,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <div className="Contact">
      <Meta
        title={"Contact MAX Hair Clinic | Schedule a Consultation"}
        desc={
          "Contact MAX Hair Clinic for natural-looking Hair Restoration solutions. Schedule a Hair Transplant consultation today and regain your confidence."
        }
      />
      <Header1 />
      <Hero2 title1="Contact" title2="Us" />
      <Numbers />
      <SubMenu />
      <h2 className="w-[90vw] mx-auto text-black my-[8vw] sm:my-[5vw]">
        Let's Connect
      </h2>
      <Form />
      <h2 className="w-[90vw] mx-auto text-black my-[8vw] sm:my-[5vw]">
        Let's Meet
      </h2>
      <Maps />
      <div className="sm:hidden h-[10vh]"></div>
      <Footer />
    </div>
  );
}

function Numbers() {
  return (
    <div className="Numbers sm:hidden w-[90vw] mx-auto text-black">
      <h2 className="my-[5vh]">Let's Talk</h2>
      <div className="flex flex-row justify-evenly w-[90vw] mx-auto">
        <div className="flex flex-col">
          <div className="Locations mb-[2vh]">
            <h4>Max - Chennai</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Coimbatore</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Bangalore</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Hyderabad</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Noida</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Mumbai</h4>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="Locations mb-[2vh]">
            <a href="tel:8883288822">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 88832 88822
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:8390556789">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 83905 56789
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9551695516">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 95516 95516
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9032510000">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 90325 10000
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9819223456">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 98192 23456
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9884520000">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 98845 20000
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenu() {
  return (
    <div className="Menu1 hidden sm:flex flex-wrap justify-evenly sm:justify-center w-[100vw] mb-[9vh] bg-white text-[9px]">
      <div className="flex mb-[5vh]">
        <div className="ml-auto mr-[.5vw] ">
          <Link to="" className="space-btn">
            Max-chennai
          </Link>
        </div>
        <div className="mx-[.5vw]">
          <Link to="" className="space-btn">
            Max-Bangalore
          </Link>
        </div>
      </div>
      <div className="flex mb-[5vh]">
        <div className="mx-[.5vw]">
          <Link to="" className="space-btn">
            Max-Coimbatore
          </Link>
        </div>
        <div className="mx-[.5vw]">
          <Link to="" className="space-btn">
            Max-Hyderabad
          </Link>
        </div>
      </div>
      <div className="flex mb-[5vh]">
        <div className="mx-[.5vw]">
          <Link to="" className="space-btn">
            Max-Noida
          </Link>
        </div>
        <div className="ml-[.5vw] mr-auto">
          <Link to="" className="space-btn">
            Max-Mumbai
          </Link>
        </div>
      </div>
    </div>
  );
}

function Maps() {
  const [ShowMap1, setIsShown1] = useState(true);
  const [ShowMap2, setIsShown2] = useState(false);
  const [ShowMap3, setIsShown3] = useState(false);
  const [ShowMap4, setIsShown4] = useState(false);
  const [isVisible1, setisVisible1] = useState(false);
  const [isVisible2, setisVisible2] = useState(false);
  const [isVisible3, setisVisible3] = useState(false);
  const [isVisible4, setisVisible4] = useState(false);

  const handleClick1 = () => {
    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick2 = () => {
    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick3 = () => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
    setIsShown4(false);
  };

  const handleClick4 = () => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(true);
  };

  const handleClick5 = () => {
    setisVisible1(true);
    setisVisible2(false);
    setisVisible3(false);
    setisVisible4(false);
  };

  const handleClick6 = () => {
    setisVisible1(false);
    setisVisible2(true);
    setisVisible3(false);
    setisVisible4(false);
  };

  const handleClick7 = () => {
    setisVisible1(false);
    setisVisible2(false);
    setisVisible3(true);
    setisVisible4(false);
  };

  const handleClick8 = () => {
    setisVisible1(false);
    setisVisible2(false);
    setisVisible3(false);
    setisVisible4(true);
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <div className="MapsSection w-[90vw] h-[max] overflow-hidden mx-auto sm:pb-[8vw] flex text-black flex-col sm:flex-row">
      <div className="textContainer w-[90vw] sm:w-[40vw]">
        <div className="sm:h-[450px] overflow-y-scroll" onLoad={ScrollToTop}>
          <div className="Location1 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] mb-[2vh]">
            <h5 className="leading-[32px]">Max Hair Clinic - Chennai</h5>
            <p className="text-[13px] leading-[20px] mb-0">
              10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy
              Nagar, Nungambakkam, Chennai, Tamil Nadu 600034
            </p>
            <Link to="" onClick={handleClick1} className="hidden sm:block">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
            <Link to="" onClick={handleClick5} className="sm:hidden">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
          </div>
          {isVisible1 && <Map1 />}
          <div className="Location2 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
            <h5 className="leading-[32px]">Max Hair Clinic - Bangalore</h5>
            <p className="text-[13px] leading-[20px] mb-0">
              3R Plaza 28, 2nd Floor, 100 Feet Road, 2A Stage, Hal, Indiranagar,
              Bengaluru, Karnataka 560038
            </p>
            <Link to="" onClick={handleClick2} className="hidden sm:block">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
            <Link to="" onClick={handleClick6} className="sm:hidden">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
          </div>
          {isVisible2 && <Map2 />}
          <div className="Location3 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
            <h5 className="leading-[32px]">Max Hair Clinic - Coimbatore</h5>
            <p className="text-[13px] leading-[20px] mb-0">
              3rd Floor, No.90/1C TKR Tower, Race Course Rd, Coimbatore, Tamil
              Nadu 641018
            </p>
            <Link to="" onClick={handleClick3} className="hidden sm:block">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
            <Link to="" onClick={handleClick7} className="sm:hidden">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
          </div>
          {isVisible3 && <Map3 />}
          <div className="Location w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
            <h5 className="leading-[32px]">Max Hair Clinic - Hyderabad</h5>
            <p className="text-[13px] leading-[20px] mb-0">
              Police Station, 1130/A, Rd Number 36, opposite Jubliee Hills,
              Jubilee Hills, Hyderabad, Telangana 500034
            </p>
            <Link to="" onClick={handleClick4} className="hidden sm:block">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
            <Link to="" onClick={handleClick8} className="sm:hidden">
              <div className="flex items-center hover:underline hover:">
                <p className="text-[13px] text-[#5491f5] mb-0">
                  Get Directions
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-[5px] -rotate-45 text-[#5491f5]"
                />
              </div>
            </Link>
          </div>
          {isVisible4 && <Map4 />}
        </div>
      </div>
      <div className="mapsContainer w-[90vw] mx-auto sm:w-max hidden sm:block">
        {ShowMap1 && <Map1 />}
        {ShowMap2 && <Map2 />}
        {ShowMap3 && <Map3 />}
        {ShowMap4 && <Map4 />}
      </div>
    </div>
  );
}

function Map1() {
  return (
    <div className="location1 ">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.646293601603!2d80.2435051153436!3d13.05817191650464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664281626b21%3A0x7ba51b84f54c63c3!2sMax%20Hair%20Clinic%20Chennai%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Chennai!5e0!3m2!1sen!2sin!4v1677733134724!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="auto"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map2() {
  return (
    <div className="location1">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1377948840304!2d77.63967591534308!3d12.96303321857237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bcac424faf%3A0xbeab6998a29ccb44!2sMax%20Hair%20Clinic%20Bangalore%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1677738470672!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map3() {
  return (
    <div className="location1">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5022855547227!2d76.97080901533496!3d11.00089065801721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a71eac1ba9%3A0xd9dce8d7a376204b!2sMax%20Hair%20Clinic%20Coimbatore%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1677738584571!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map4() {
  return (
    <div className="location1 fade-appear fade-leave">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.617093056403!2d78.4065639153708!3d17.43015410615685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91486b672467%3A0x89c58da0c02ec56d!2sMax%20Hair%20Clinic%20-%20Hyderabad!5e0!3m2!1sen!2sin!4v1677737779388!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
