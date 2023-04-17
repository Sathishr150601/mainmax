import { wht } from "../../../../assets";
import {
  ContentService,
  Footer,
  Header,
  Hero1,
  Hero3,
  Meta,
} from "../../../../components";
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
          "Women's Hair Transplant | Natural Hair Restoration | MAX Hair Clinic"
        }
        desc={
          "MAX Hair Clinic offers natural Hair Restoration for women with hair loss. Get effective Hair Transplant procedures for women's hair growth."
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
        title="Women Hair Transplant"
        content="Female Pattern Baldness is Multifactorial but is usually caused
              due to Hormonal changes or the hair products used. During the
              consultation, the Doctor makes sure to rule out the possible
              underlying Two factors should be considered for hair
              transplantation:

              There should be enough healthy hair in your donor area for the
              hair to be transplanted where it is needed.
              
              The place where hair will be transplanted should be suitable for
              hair transplant. There should be no irritation or damage."
        image={wht}
      />
      <Footer />
    </div>
  );
}
