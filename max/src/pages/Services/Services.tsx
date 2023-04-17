import { useState, useEffect } from "react";
import {
  bht1,
  cc1,
  cs1,
  d1,
  dht1,
  drr1,
  ebht1,
  ele1,
  fg1,
  ht1,
  iht1,
  lh1,
  m1,
  olt1,
  prp1,
  sd1,
  sht1,
  sht11,
  sl1,
  sm1,
  tp1,
  wht1,
} from "../../assets";
import { Footer, Header1, Hero1, InnerService } from "../../components";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);

  const handleScroll = () => {
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
  };

  const Click1 = () => {
    handleScroll();
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfourth(false);
  };
  const Click2 = () => {
    handleScroll();
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
  };
  const Click3 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfourth(false);
  };
  const Click4 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfourth(true);
  };

  return (
    <div className="Services">
      <Header1 />
      <Hero1
        title1="Our"
        title2="Services"
        click1={Click1}
        click2={Click2}
        click3={Click3}
        click4={Click4}
        menu1="Surgical"
        menu2="Non - Surgical"
        menu3="Clinical"
        menu4="Non - Clinical"
        menu11="Surgical Treatments"
        menu12="Non - Surgical Treatments"
        menu13="Clinical Treatments"
        menu14="Non - Clinical Treatments"
      />
      <div className="pt-[80vh] md:pt-[60vh] lg:pt-[90vh]">
        {first && <Surgical />}
        {second && <NonSurgical />}
        {third && <Clinical />}
        {fourth && <NonClinical />}
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
        serviceBtn="/services/hair-transplant"
        serviceIcon1={ht1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/women-hair-transplant"
        serviceIcon1={wht1}
        serviceCaption="Your perfect solution to hairloss"
        serviceTitle="WOMEN HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/igm-hair-transplant"
        serviceIcon1={iht1}
        serviceCaption="The best result-oriented Hair Restoration Treatment"
        serviceTitle="IGM HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={4}
        serviceBtn="/services/dhi-hair-transplant"
        serviceIcon1={dht1}
        serviceCaption="An Implanter Hair Transplant Solution for Baldness"
        serviceTitle="DHI HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/sapphire-hair-transplant"
        serviceIcon1={sht11}
        serviceCaption="Advanced Hair Treatment with Minimal scars and postoperative effects"
        serviceTitle="SAPPHIRE HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={6}
        serviceBtn="/services/beard-hair-transplant"
        serviceIcon1={bht1}
        serviceCaption="No delay to achieve your Macho look. A permanent beard restoration procedure"
        serviceTitle="BEARD HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={7}
        serviceBtn="/services/eyebrow-hair-transplant"
        serviceIcon1={ebht1}
        serviceCaption="Get your Permanent, Thick and Natural-looking Eyebrow"
        serviceTitle="EYEBROW HAIR TRANSPLANT"
      />
    </div>
  );
}
function NonSurgical() {
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
        serviceCaption="The best solution for hair thinning. Emerged with phototherapeutic effects"
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
    </div>
  );
}
function Clinical() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/scalp-micropigmentation"
        serviceCaption="Our new gen cosmetic procedure that mimics your hair"
        serviceIcon1={sm1}
        serviceTitle="SCALP MICROPIGMENTATION"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/eyelash-extension"
        serviceCaption="Get Natural-looking Eyelashes with Custom style choices"
        serviceIcon1={ele1}
        serviceTitle="EYELASH EXTENSION"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/eyebrow-microblading"
        serviceCaption="Shape your eyebrows permanently as you've always wanted"
        serviceIcon1={ebht1}
        serviceTitle="EYEBROW MICROBLADING"
      />
    </div>
  );
}
function NonClinical() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/tres-pro"
        serviceCaption="Get natural-looking, easy-to-fit long hair with Tress Pro"
        serviceIcon1={tp1}
        serviceTitle="TRES PRO"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/celebrity's-choice"
        serviceCaption="Make Your Luxury Choice. Choose our high-end cosmetic hair replacement"
        serviceIcon1={cc1}
        serviceTitle="CELEBRITY'S CHOICE"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/satin-lace"
        serviceCaption="No Time for Treatments! Get the best non-surgical hair replacement"
        serviceIcon1={sl1}
        serviceTitle="SATIN LACE"
      />
      <InnerService
        serviceNo={4}
        serviceBtn="/services/french-grip"
        serviceCaption="Grab the most affordable hair replacement with the French Grip Hair Patch"
        serviceIcon1={fg1}
        serviceTitle="FRENCH GRIP"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/dura"
        serviceCaption="Natural-looking hair that complements your new look"
        serviceIcon1={d1}
        serviceTitle="DURA"
      />
    </div>
  );
}
