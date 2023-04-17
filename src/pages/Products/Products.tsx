import { Footer, Header, Header1, Hero1, Hero2, Meta } from "../../components";
import {
  prod1,
  prod10,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
  prod9,
} from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faInfo,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  return (
    <div className="products">
      <Header1 />
      <Hero2 title1="Essentials" title2="" />
      <div className="h-[10vh] hidden lg:block"></div>
      <Product />
      <InfoBar />
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
    </div>
  );
}

function Product() {
  return (
    <div className="product h-max w-[100vw] mx-auto flex flex-wrap justify-center ">
      <Meta
        title={"1mypro's Hair Care Products for Healthier Hair"}
        desc={
          "Achieve healthier hair with 1mypro's range of hair care products: Vetriver Infused Hair Oil, Argan Conditioner, Shampoo, Hair Serum, Moisture Kick, Hair Spray, etc."
        }
      />
      {/* bg-[url('./assets/photos/bg/herobg.png')] bg-cover */}
      <ProductInner image={prod1} item="vetriver Infused Hair Oil" />
      <ProductInner image={prod2} item="Argan Conditioner" />
      <ProductInner image={prod3} item="Argan Shampoo" />
      <ProductInner image={prod4} item="Hair Serum" />
      <ProductInner image={prod5} item="Hair Moisture Kick" />
      <ProductInner image={prod6} item="Hair Spray Aromatic Shine" />
      <ProductInner image={prod7} item="Hair Fall Control Shampoo" />
      <ProductInner image={prod8} item="Shikakai Paste" />
      <ProductInner image={prod9} item="Anti-Dandruff Shampoo" />
      <ProductInner image={prod10} item="Onion Hair Oil" />
    </div>
  );
}

function ProductInner(props: any) {
  return (
    <div className="productInner w-[100%] text-black my-[3vh] mx-[1vw] sm:w-[50%] md:w-[30%]">
      <div className="imgContainer">
        <img src={props.image} alt="" className="rounded-xl" />
      </div>
      <div className="textContainer text-center mt-[2vh]">
        <p className="mb-0">One Hair Pro</p>
        <h3 className="md:text-[1.8em]">{props.item}</h3>
      </div>
    </div>
  );
}

function InfoBar() {
  return (
    <div className="info w-[90vw] mx-auto rounded-full bg-black p-[1rem] mb-[3vh]">
      <div className="flex justify-center items-center blink">
        <FontAwesomeIcon
          icon={faCircleInfo}
          className="h-[1.5em] w-[1.5em] mr-[10px]"
        />
        <h4 className="mb-0 mr-[10px] text-[1em] sm:text-[1.5em] md:text-[2em] lg:text-[1.8em] uppercase">
          Currently Available Only At our{" "}
          <a href="tel:18002026112" className="hover:underline">
            Clincs
          </a>
        </h4>
      </div>
    </div>
  );
}
