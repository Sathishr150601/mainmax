import { useEffect } from "react";
import { cc1, d1, fg1, sl1, tp1 } from "../../../assets";
import {
  Footer,
  Header1, Hero3,
  InnerService,
  Meta
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
        title={"Non-Surgical Hair Transplant Treatments | MAX Hair Clinic"}
        desc={
          "MAX Hair Clinic offers non-surgical Hair Transplant treatments for natural hair regrowth. Achieve fuller, healthier-looking hair with our innovative solutions."
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
