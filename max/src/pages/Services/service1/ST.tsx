import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bht1, dht1, ebht1, ht1, iht1, sht1, sht11, wht1 } from "../../../assets";
import {
  Footer,
  Header1,
  Hero1,
  Hero2,
  Hero3,
  InnerService,
  Meta,
} from "../../../components";

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
        title="Hair Transplant Surgery | Natural Hair Restoration | MAX Hair Clinic"
        desc="MAX Hair Clinic offers surgical Hair Transplant treatments for natural Hair Restoration. Get effective solutions from our experts for your hair growth needs."
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
        serviceBtn="/services/hair-transplant"
        serviceIcon1={ht1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/women-hair-transplant"
        serviceIcon1={wht1}
        serviceCaption="Your perfect solution to hair loss"
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
        serviceCaption="A Primer High-tech solution for Baldness"
        serviceTitle="DHI HAIR TRANSPLANT"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/ice-cell-sapphire-micro-fue"
        serviceIcon1={sht11}
        serviceCaption="Advanced Hair Treatment with No scars or postoperative effects"
        serviceTitle="ICE Cell Sapphire micro FUE"
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
