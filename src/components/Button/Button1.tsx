import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Button1(props: any) {
  return (
    <div className="Button1Wrapper hide-ball">
      <Link to={props.btnLocation} onClick={props.btn1click}>
        <div className="button1 w-max cursor-pointer tracking-[0.2125rem] leading-none overflow-hidden relative text-center select-none px-[25px] py-[15px] rounded-[3em] border-2">
          <Link
            to={props.btnLocation}
            className="whitespace-nowrap flex justify-center"
          >
            {props.btnName}
            <span className="shift flex justify-center flex-col transition-all duration-[1.1s] ease-[cubic-bezier(0.19,1,0.22,1)] pl-[5px]">
              <span className={props.spanClass1}>
                <FontAwesomeIcon icon={faGreaterThan} />
              </span>
              <span className={props.spanClass2}></span>
              <span className={props.spanClass3}></span>
            </span>
          </Link>
          <div className="mask absolute h-[6.25rem] w-[12.5rem] transition-all duration-[1.1s] ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
        </div>
      </Link>
    </div>
  );
}
