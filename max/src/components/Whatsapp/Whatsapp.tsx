import { whatsapp } from "../../assets";

export default function Whatsapp() {
  return (
    <div className="fixed z-[999999] bottom-[12%] right-[5%] sm:bottom-[3%] sm:right-[3%] lg:right-[2%] 2xl:right-[1.5%]">
      <a
        href="https://wa.me/919884520000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapp}
          alt=""
          className="text-white  w-[50px] h-[50px] 2xl:w-[64px] 2xl:h-[64px]"
        />
      </a>
    </div>
  );
}
