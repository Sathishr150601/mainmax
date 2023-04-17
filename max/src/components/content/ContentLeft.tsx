import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ContentLeft(props: any) {
  return (
    <section className="ContentLeft mb-[8vw] mt-[3vw] lg:mt-[5vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:justify-between">
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[40vw] lg:mx-0">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] md:text-[8vw] lg:text-[3em] 2xl:text-[4em]">
              {props.title}
            </h2>
            <div
              className={
                " bookAppointment  justify-center mb-[3vh] lg:justify-start"
              }
            >
              <Link to="/contact">
                <button className="btn border-[2px] text-[#fff] hover:border-[#222] border-[#fff] bg-[#222] hover:text-black hover:bg-[#fff] text-[1.3em] font-semibold">
                  <FontAwesomeIcon icon={faClock} className="mr-[10px]" />
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[50vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              {props.content}
            </p>
          </div>
        </div>
        <div className="image flex flex-col">
          <img
            src={props.image}
            alt=""
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[35vw] 2xl:h-[80vh]"
          />
          <img
            src={props.image1}
            alt=""
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[35vw] 2xl:h-[80vh]"
          />
        </div>
      </div>
    </section>
  );
}
