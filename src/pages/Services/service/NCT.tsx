import { useEffect } from "react";
import {
  cc1, d1, fg1, sl1, tp1
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
        <NonClinical />
      </div>
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
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
