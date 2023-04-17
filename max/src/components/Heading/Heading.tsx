export default function Heading(props: any) {
  return (
    <div className="Heading w-[80VW] mx-auto my-[5vw]">
      <div className="headingText ">
        <h2 className={props.headingtitleclass}>
          <span className="">{props.headingtitlecontent1}</span>
          <span className="">{props.headingtitlecontent2}</span>
        </h2>
      </div>
    </div>
  );
}
