import { arrDark, maxlogo1, since1 } from "../../assets";

export default function Hero2(props: any) {
  return (
    <section className="Hero02 overflow-clip text-black w-[100vw] h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <div className="top w-[90vw] mx-auto h-[40vh] sm:h-[60vh] md:h-[70vh] pb-[5vh] flex items-center sm:justify-around lg:h-[90vh] ">
        <div className="top-left pl-[3vw] flex flex-col justify-center sm:pl-0">
          <div className="arrow-icon">
            <img
              src={arrDark}
              alt="Arrow Dark"
              className="w-[8vw] sm:w-[6vw] lg:w-[3vw]"
            />
          </div>
          <div className="hero2title pt-[5vh] sm:pt-[8vh]">
            <h2 className="text-[16vw] leading-[12vh] sm:text-[12vw] md:text-[8.5vw] md:leading-[10vh] lg:text-[9vw] lg:leading-[16vh] 2xl:text-[8vw]">
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
    </section>
  );
}
