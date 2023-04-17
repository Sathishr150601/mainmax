import { useEffect } from "react";
import {
  cs1,
  drr1,
  ebht1,
  ele1,
  lh1,
  m1,
  olt1,
  prp1,
  sd1,
  sm1,
} from "../../../assets";
import { Footer, Header1, Hero3, InnerService, Meta } from "../../../components";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (window.innerWidth >= 1023) {
        if (window.innerWidth <= 1280) {
          window.scrollTo({
            top: window.innerHeight / 1.4,
            behavior: "smooth",
          });
        } else if (window.innerWidth <= 1561) {
          window.scrollTo({
            top: window.innerHeight / 1.33,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.33,
            behavior: "smooth",
          });
        }
      } else {
        if (window.innerWidth <= 767) {
          if (window.innerWidth <= 450) {
            window.scrollTo({
              top: window.innerHeight / 1.66,
              behavior: "smooth",
            });
          } else {
            window.scrollTo({
              top: window.innerHeight / 1.45,
              behavior: "smooth",
            });
          }
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.8,
            behavior: "smooth",
          });
        }
      }
    }, 800);
  }, []);

  return (
    <div className="Services">
      <Meta
        title={"Non-Invasive Hair Loss Treatments | MAX Hair Clinic"}
        desc={
          "Regain your hair without surgery. Explore our non-invasive hair loss treatments, including PRP, laser therapy, and more."
        }
      />
      <Header1 />
      <Hero3
        title1="Our"
        title2="Services"
        ln1="/services/surgical-treatments"
        menu1="Surgical Treatments"
        ln2="/services/non-surgical-treatments"
        menu2="Non-Surgical Treatments"
        ln3="/services/non-invasive-treatments"
        menu3="Non-Invasive Treatments"
      />
      <div className="pt-[100vh] md:pt-[70vh] lg:pt-[100vh]">
        <Surgical />
      </div>
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
    </div>
  );
}

function Surgical() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/cc-prp-active-plus"
        serviceIcon1={prp1}
        serviceCaption="Regrow your natural hair with Strong strands"
        serviceTitle="CC PRP ACTIVE+"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/oxygen-laser-therapy"
        serviceIcon1={olt1}
        serviceCaption="The best solution for hair thinning"
        serviceTitle="OXYGEN LASER THERAPY"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/dr-regrowth"
        serviceIcon1={drr1}
        serviceCaption="Treats dull, dehydrated, and weak hair and  prevents hair loss"
        serviceTitle="DR REGROWTH"
      />
      <InnerService
        serviceNo={4}
        serviceBtn="/services/crotico-shot"
        serviceIcon1={cs1}
        serviceCaption="Does Alopecia worry you? Get your hair back with our safest treatment"
        serviceTitle="CROTICO - SHOT"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/laser-helmet"
        serviceIcon1={lh1}
        serviceCaption="Stops your hair loss and thickens your hair"
        serviceTitle="LASER HELMET"
      />
      <InnerService
        serviceNo={6}
        serviceBtn="/services/meso-qr-678"
        serviceIcon1={m1}
        serviceCaption="Stock up vitamins to your scalp that  prevent hair fall"
        serviceTitle="MESO QR 678"
      />
      <InnerService
        serviceNo={7}
        serviceBtn="/services/scalp-detox"
        serviceIcon1={sd1}
        serviceCaption="Buff away dead skin and unclog product buildup from scalp"
        serviceTitle="SCALP DETOX"
      />
      <InnerService
        serviceNo={8}
        serviceBtn="/services/scalp-micropigmentation"
        serviceCaption="New Gen Cosmetic procedure that mimics hair"
        serviceIcon1={sm1}
        serviceTitle="SCALP MICROPIGMENTATION"
      />
      <InnerService
        serviceNo={9}
        serviceBtn="/services/eyelash-extension"
        serviceCaption="Get Natural-looking Eyelashes with Custom style choices"
        serviceIcon1={ele1}
        serviceTitle="EYELASH EXTENSION"
      />
      <InnerService
        serviceNo={10}
        serviceBtn="/services/eyebrow-microblading"
        serviceCaption="Shape your eyebrows like you always wanted"
        serviceIcon1={ebht1}
        serviceTitle="EYEBROW MICROBLADING"
      />
    </div>
  );
}
