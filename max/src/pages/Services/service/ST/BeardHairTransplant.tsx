import { bht, ht } from "../../../../assets";
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
          "Beard Hair Transplant | Natural Hair Restoration | MAX Hair Clinic"
        }
        desc={
          "MAX Hair Clinic offers natural beard Hair Transplants using advanced techniques. Achieve a fuller, well-groomed beard with our effective Hair Restoration solutions."
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
        title="Beard Hair Transplant"
        content="Max Hair Clinic provides the best beard hair transplant. Men who
              can’t grow beard hair naturally or are genetically incapable of
              growing beard hair can go through a beard hair transplant. We use
              the most effective method, FUE, to implant beard hair. Hair
              follicles are collected from the back area of the head and
              implanted in the marked jawline area. A few steps should be
              considered if you plan for a beard transplant. Be gentle to your
              implanted area in the first week; sleep on your back. Likewise,
              follow the instructions and guidelines provided by our MAX Hair
              Clinic expert team."
        image={bht}
      />
      <Footer />
    </div>
  );
}
