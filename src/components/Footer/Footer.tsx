import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faChevronCircleUp,
  faEnvelope,
  faHome,
  faImage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer fixed sm:relative bottom-0  z-[9999]">
      <MobileFooter />
      <LaptopFooter />
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="block sm:hidden relative footer w-[100vw] bg-[#fff] border-t border-[#222]">
      <ul className="flex justify-around items-center h-[10vh]">
        <Link to="/">
          <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] rounded-[50%] bg-[#222]">
            <FontAwesomeIcon
              icon={faHome}
              className="w-[20px] h-[20px] pt-[12px] md:w-[30px] md:h-[30px] left-0 right-0 mx-auto text-center block pointer-events-none"
            />
          </li>
        </Link>
        <Link to="/about">
          <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] rounded-[50%] bg-[#222]">
            <FontAwesomeIcon
              icon={faUser}
              className="w-[20px] h-[20px] pt-[12px] md:w-[30px] md:h-[30px] left-0 right-0 mx-auto text-center block pointer-events-none"
            />
          </li>
        </Link>
        <Link to="/services/surgical-treatments">
          <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] rounded-[50%] bg-[#222]">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="w-[20px] h-[20px] pt-[14px] md:w-[30px] md:h-[30px] left-0 right-0 mx-auto text-center block pointer-events-none"
            />
          </li>
        </Link>
        <Link to="/contact">
          <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] rounded-[50%] bg-[#222]">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-[20px] h-[20px] pt-[14px] md:w-[30px] md:h-[30px] left-0 right-0 mx-auto text-center block pointer-events-none"
            />
          </li>
        </Link>
        <Link to="/image-gallery">
          <li className="h-[45px] w-[45px] md:h-[60px] md:w-[60px] rounded-[50%] bg-[#222]">
            <FontAwesomeIcon
              icon={faImage}
              className="w-[20px] h-[20px] pt-[14px] md:w-[30px] md:h-[30px] left-0 right-0 mx-auto text-center block pointer-events-none"
            />
          </li>
        </Link>
      </ul>
    </div>
  );
}

function LaptopFooter() {
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

  return (
    <div className="hidden sm:block w-[100vw] bg-[url('./assets/photos/bg/counterbg.jpg')] bg-cover">
      <div className="marquee-wrapper pt-[40px]">
        <Marquee speed={60}>
          <h2 className="uppercase text-[8vw] leading-[10vw]">
            Welcome to the Haven of Hair Regrowth &nbsp; &nbsp; &nbsp; &nbsp;
          </h2>
        </Marquee>
      </div>
      <div className="links py-[20px]">
        <ul className="flex justify-between md:px-[12vw] lg:px-[20vw] text-[18px]">
          <li className="hover:text-[#fcb717]">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#fcb717]">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#fcb717]">
            <Link to="/services/surgical-treatments">Services</Link>
          </li>
          <li className="hover:text-[#fcb717]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#fcb717]">
            <Link to="/image-gallery">Alter Ego</Link>
          </li>
          <li className="hover:text-[#fcb717]">
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="social-media-icons w-[100vw] py-[20px]">
        <ul className="px-[30vw] flex justify-between items-center">
          <li className="cursor-pointer" onClick={maxFacebook}>
            <FontAwesomeIcon icon={faFacebook} className="w-[2em] h-[2em]" />
          </li>
          <li className="cursor-pointer" onClick={maxInstagram}>
            <FontAwesomeIcon icon={faInstagram} className="w-[2em] h-[2em]" />
          </li>
          <li className="cursor-pointer" onClick={maxYoutube}>
            <FontAwesomeIcon icon={faYoutube} className="w-[2em] h-[2em]" />
          </li>
          <li className="cursor-pointer" onClick={maxTwitter}>
            <FontAwesomeIcon icon={faTwitter} className="w-[2em] h-[2em]" />
          </li>
          <li className="cursor-pointer" onClick={maxLinkedin}>
            <FontAwesomeIcon icon={faLinkedin} className="w-[2em] h-[2em]" />
          </li>
        </ul>
      </div>
      <div className="copyright pt-[20px]">
        {/* <div className="flex justify-start items-center">
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </div> */}
        <div className="flex justify-center items-center">
          <p className="text-[14px]">
            2023 MAX Hair India Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
