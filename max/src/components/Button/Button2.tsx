export default function Button2(props: any) {
  return (
    <div className="button2 learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <p className=" mb-0">
        <span className="button2-text text-lg">{props.button2text}</span>
      </p>
    </div>
  );
}
