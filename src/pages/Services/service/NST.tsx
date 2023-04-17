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
  sl1,
  sm1,
  tp1,
  wht1,
} from "../../../assets";
import { Footer, Header1, Hero1, InnerService } from "../../../components";

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
      <Header1 />
      <Hero1
        title1="Our"
        title2="Services"
        menu1="Surgical"
        menu2="Non - Surgical"
        menu3="Clinical"
        menu4="Non - Clinical"
        menu11="Surgical Treatments"
        menu12="Non - Surgical Treatments"
        menu13="Clinical Treatments"
        menu14="Non - Clinical Treatments"
        ln1="/services/surgical-treatments"
        ln2="/services/non-surgical-treatments"
        ln3="/services/clinical-treatments"
        ln4="/services/non-clinical-treatments"
      />
      <div className="pt-[80vh] md:pt-[60vh] lg:pt-[90vh]">
        <NonSurgical />
      </div>
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
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
