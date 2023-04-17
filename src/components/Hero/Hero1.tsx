import { Link } from "react-router-dom";
import { arrDark, maxlogo1, since1 } from "../../assets";

export default function Hero1(props: any) {
  return (
    <section className="Hero02 absolute top-0 overflow-clip text-black w-[100vw] h-[90vh] md:h-[70vh] lg:h-[100vh]">
      <div className="top w-[90vw] mx-auto h-[65vh] pt-[20vh] pb-[5vh] sm:pt-[16vh] sm:flex sm:justify-around md:h-[60vh] lg:h-[90vh]">
        <div className="top-left pl-[3vw] flex flex-col justify-center sm:pl-0">
          <div className="arrow-icon">
            <img
              src={arrDark}
              alt="Arrow Dark"
              className="w-[8vw] sm:w-[6vw] lg:w-[3vw]"
            />
          </div>
          <div className="hero2title pt-[5vh] lg::pt-[8vh]">
            <h2 className="text-[20vw] leading-[12vh] sm:text-[12vw] md:text-[10vw] lg:leading-[16vh] 2xl:text-[8vw]">
              <span className="">{props.title1}</span>
              <span className="">{props.title2}</span>
            </h2>
          </div>
        </div>
        <div className="top-right hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
          <img
            src={since1}
            alt="Since Logo"
            className="w-[15vw] sm:w-[18vw] sm:my-[3vh] md:-my-[1vh] lg:w-[15vw]"
          />
          <img
            src={maxlogo1}
            alt="Max Logo1"
            className="w-[30vw] sm:[35vw] sm:-my-[3vh] md:-my-[5vh] lg:w-[25vw] 2xl:w-[22vw]"
          />
        </div>
      </div>
      <div className="bottom h-[20vh] text-[.7rem] xl:text-[.9rem] 2xl:text-[1.2rem] md:h-[10vh] lg:hidden">
        <div className="inner flex flex-wrap justify-evenly flex-col md:flex-row">
          <div className="flex-[100%] flex justify-evenly mb-[10vh] md:flex-[50%] text-center ">
            <div className="">
              <Link to={props.ln1} onClick={props.click1} className="space-btn">
                {props.menu1}
              </Link>
            </div>
            <div className="">
              <Link to={props.ln2} onClick={props.click2} className="space-btn">
                {props.menu2}
              </Link>
            </div>
          </div>
          <div className="flex-[100%] flex justify-evenly md:flex-[50%] text-center">
            <div className="">
              <Link to={props.ln3} onClick={props.click3} className="space-btn">
                {props.menu3}
              </Link>
            </div>
            <div className="">
              <Link to={props.ln4} onClick={props.click4} className="space-btn">
                {props.menu4}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom h-[20vh] text-[.7rem] xl:text-[.6rem] 2xl:text-[1.2rem] md:h-[10vh] hidden lg:block">
        <div className="inner flex flex-wrap justify-evenly flex-col md:flex-row">
            <div className="">
              <Link to={props.ln1} onClick={props.click1} className="space-btn">
                {props.menu11}
              </Link>
            </div>
            <div className="">
              <Link to={props.ln2} onClick={props.click2} className="space-btn">
                {props.menu12}
              </Link>
            </div>
            <div className="">
              <Link to={props.ln3} onClick={props.click3} className="space-btn">
                {props.menu13}
              </Link>
            </div>
            <div className="">
              <Link to={props.ln4} onClick={props.click4} className="space-btn">
                {props.menu14}
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
