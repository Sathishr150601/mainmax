import { dht, ht } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function WomenHairTransplant() {
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
    <div className="HairTransplant">
      <Meta
        title={
          "DHI Hair Transplant | Natural Hair Restoration | MAX Hair Clinic"
        }
        desc={
          "Get natural Hair Restoration with DHI Hair Transplant at MAX Hair Clinic."
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
        location="/services/surgical-treatments"
        title="DHI Hair Transplant"
        content="DHI is an advanced technique for implanting hair in a balding
              area. The grafts are collected using an FUE (follicular unit
              extraction) method and directly implanted on the recipient site.
              By identifying the graft thickness an implanter is selected. With
              this, the process can be completed without opening the canal for
              transplant. The collected grafts will be placed within a thin
              cylindrical and sharp tip that helps to implant the follicles
              directly. MAX HAIR CLINIC DHI HAIR TRANSPLANT IS A TRADITIONAL
              TECHNIQUE PROCEDURE WITH OUTSTANDING OUTCOMES.specialized
              pen-shaped Choi implanters are utilized to implant the same in
              affected areas. 65-75 hair follicles replanted an sq. cm giving up
              to 70-75% survival rate. The hair follicle is punched into the
              scalp using a Choi implanter and a clearance space of 1mmi is
              given between 2 punches, thus creating a less dense packing of
              hair follicles."
        image={dht}
      />
      <Footer />
    </div>
  );
}
