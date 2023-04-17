import { ht } from "../../../../assets";
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
        title={"Hair Transplant | Natural Hair Restoration | MAX Hair Clinic"}
        desc={
          "Get natural-looking Hair Restoration solutions with Hair Transplant procedures at MAX Hair Clinic. Our experts provide effective solutions for your hair growth needs."
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
        title="Hair Transplant"
        content="A Surgical Transfer of Hair Tissues from Healthy Donor Sites to
              the Affected Areas via FUT (Follicular Unit Transplantation) or
              FUE (Follicular Unit Extraction) techniques, using
              State-of-the-Art equipment under Sterile conditions. High Density
              and Natural looking Hairlines are created by our well-experienced
              surgical team using Local Anesthetics measures."
        image={ht}
      />
      <Footer />
    </div>
  );
}
