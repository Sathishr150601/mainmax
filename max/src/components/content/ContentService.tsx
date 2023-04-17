import Button1 from "../Button/Button1";
import ContentLeft from "./ContentLeft";
import { useNavigate } from "react-router-dom";

export default function ContentService(props: any) {
  let navigate = useNavigate();

  let Navigate = () => {
    navigate(-1);
  };
  return (
    <section className="Service my-[8vw] pt-[80vh] md:pt-[60vh] lg:pt-[80vh]">
      <div className="lg:w-[90vw] lg:mx-auto ">
        <div className="goBackBtn">
          <Button1
            btn1click={Navigate}
            btnLocation=""
            btnName="Go Back"
            spanClass1=""
            spanClass2=""
            spanClass3=""
          />
        </div>
        <ContentLeft
          title={props.title}
          content={props.content}
          image={props.image}
          image1={props.image1}
        />
      </div>
    </section>
  );
}
