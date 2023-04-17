import { Link } from "react-router-dom";
import { close } from "../../assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  let navigate = useNavigate();

  let Navigate = () => {
    navigate(-1);
  };

  return (
    <section className="menu-section w-[100vw] h-[100vh] bg-[#222] overflow-hidden absolute top-0 left-0">
      <div className="close-btn h-[10vh] w-[100vw] flex items-end pl-[10vw]">
        <Link to="/" onClick={Navigate}>
          <img
            src={close}
            alt="close-btn"
            className="w-[8vw] md:w-[6vw] lg:w-[3vw] hover:scale-105 sm:hover:scale-125"
          />
        </Link>
      </div>
      <div className="lg:flex justify-evenly">
        <div className="Main-Menu w-[100vw] lg:w-[40vw]">
          <ul className="flex flex-col justify-center items-center h-[90vh] text-[2.5em] sm:text-[3.5em] lg:text-[2.2em] xl:text-[2.5em] 2xl:text-[4em] text-center ">
            <li className="Home">
              <Link to="/">Home</Link>
            </li>
            <li className="About">
              <Link to="/about">About</Link>
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" pl-[3vw] w-[3vw] lg:pl-[1vw] lg:w-[1.5vw]"
              />
              <ul className="inner-menu text-center text-[.5em] hidden">
                <li className="hover:scale-105 sm:hover:scale-125">
                  <Link to="">Clinical Tour</Link>
                </li>
              </ul>
            </li>
            <li className="Services">
              <Link to="/services/surgical-treatments">Services</Link>
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" pl-[3vw] w-[3vw] lg:pl-[1vw] lg:w-[1.5vw]"
              />
              <ul className="inner-menu text-center text-[.6em] hidden">
                <li className="hover:scale-105 sm:hover:scale-125">
                  <Link to="/services/surgical-treatments">
                    Surgical Treatments
                  </Link>
                </li>
                <li className="hover:scale-105 sm:hover:scale-125">
                  <Link to="/services/non-surgical-treatments">
                    Non-Surgical Treatments
                  </Link>
                </li>
                <li className="hover:scale-105 sm:hover:scale-125">
                  <Link to="/services/non-invasive-treatments">
                    Non-Invasive Treatments
                  </Link>
                </li>
              </ul>
            </li>
            <li className="More">
              <Link to="">Celebrity Corner</Link>
            </li>
            <li className="More">
              <Link to="/products">Essentials</Link>
            </li>
            <li className="More">
              <Link to="/image-gallery">Alter Ego</Link>
            </li>
            <li className="Contact">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="More">
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="locations lg:w-[50vw] h-[90vh] hidden lg:flex flex-col justify-center items-center">
          <h2 className="mb-[5vh]">Our Locations</h2>
          <div className="flex justify-evenly items-center lg:w-[50vw] text-[2vw] leading-[3vw] xl:leading-[7vh] 2xl:text-[1.5vw] 2xl:leading-[6vh]">
            <ul className="flex flex-col justify-between">
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Chennai</span>
                <span className="">+91 88832 88822</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Coimbatore</span>
                <span className="">+91 83905 56789</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Hyderabad</span>
                <span className="">+91 90325 10000</span>
              </li>
            </ul>
            <ul className="">
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Bangalore</span>
                <span className="">+91 95516 95516</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Noida</span>
                <span className="">+91 98192 23456</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Mumbai</span>
                <span className="">+91 98845 20000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
