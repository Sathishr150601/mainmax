import { Link } from "react-router-dom";
import { Button1 } from "../index";

export default function InnerService(props: any) {
  return (
    <div className="innerService my-[3vh] w-[80vw] mx-auto sm:w-[60vw] md:w-[40vw] lg:min-w-[] lg:w-[22vw] lg:mx-[.5vw] 2xl:max-w-[400px]">
      <Link to={props.serviceBtn} onClick={props.serviceBtn}>
        <div className="inner bg-black hover:bg-white min-h-[500px] h-[52vh] p-[2rem] sm:h-[60vh] md:h-[50vh] lg:min-h-[450px] lg:h-[48vh] 2xl:max-w-[600px]">
          <div className="psx-overlay"></div>
          <div className="serviceNo float-right">
            / {props.serviceNo} &nbsp;
          </div>
          <div className="serviceIcon">
            <img
              src={props.serviceIcon1}
              alt=""
              className="w-[25vw] mt-[3vh] sm:w-[15vw] md:w-[12vw] lg:w-[6vw] lg:mt-[3vh]"
            />
          </div>
          <div className="serviceTitle my-[3vh] lg:my-[2vh]">
            <h5 className="font-semibold uppercase text-[6vw] leading-[4vh] sm:text-[4.5vw] sm:leading-[5vh] md:text-[3vw] md:leading-[4vh] lg:text-[1.6vw]">
              {props.serviceTitle}
            </h5>
          </div>
          <hr className="border-white overflow-hidden w-[70vw] max-sm:w-[50vw] sm:w-[25vw] lg:w-[16vw] border-[.5px]" />
          <div className="serviceCaption mt-[2vh]">
            <p className="text-[1.1em] lg:text-[1em]">{props.serviceCaption}</p>
            <div className="serviceBtn">
              <Button1
                btn1click={props.serviceBtn}
                btnLocation={props.serviceBtn}
                btnName="Learn More"
                spanClass1=""
                spanClass2=""
                spanClass3=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
