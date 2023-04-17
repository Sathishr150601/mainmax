import { drr, ht, prp } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function CCPrpActivePlus() {
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (window.innerWidth >= 1023) {
        if (window.innerWidth <= 1280) {
          window.scrollTo({
            top: window.innerHeight / 1.32,
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
    <div className="CCPrpActivePlus">
      <Meta
        title={"Dr. Regrowth Hair Growth Treatment  - MAX Hair Clinic"}
        desc={
          "Revitalize and strengthen hair follicles with our unique treatment using low-level laser therapy and nutrient injections."
        }
      />
      <Header />
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
      <ContentService
        location="/services/non-invasive-treatments"
        title="Dr Regrowth"
        content="Dr. Regrowth is a unique treatment method that addresses the most
              common causes of hair loss and baldness. The Dr. Regrowth
              treatment revitalizes and strengthens hair follicles while
              reversing the conditions of hair loss through optimum scalp
              metabolism and circulation by injecting vital minerals, amino
              acids, and nutrients into the scalp layers and exposing the hair
              as well as the scalp to controlled low-level LASER light emission.
              The treatment invigorates the scalp’s metabolic action and
              strengthens hair follicles through natural regeneration and
              proliferation. Dr. Regrowth uses low-level laser therapy and
              direct injections of essential nutrients to improve hair health by
              increasing circulation and delivering an ideal blend of nutrients
              to the scalp. A specialized treatment approach with essential hair
              health enhancement nutrients."
        image={drr}
      />
      <Footer />
    </div>
  );
}
