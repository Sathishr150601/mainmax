import { ebht, fg, ht, lh, sd } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function FrenchGrip() {
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
    <div className="FrenchGrip">
      <Meta
        title={"French Grip Hair Systems | MAX Hair Clinic"}
        desc={
          "Get natural-looking, elegant hair with MAX French Grip. Hand-tied and hand-knotted, available in a variety of shades and textures."
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
        location="/services/non-surgical-treatments"
        title="French Grip"
        content="An exclusive hair styling technique to vanish your baldness and
              scalp patches. Make your new look more elegant and outstanding in
              no time. MAX Hair Clinic presents MAX French Grip, a human hair
              system hand-tied and hand-knotted that gives 100% perfect and
              natural-looking hair with better volume and ensures a high-quality
              finishing look. Our premium, high-quality French Grip is available
              in a variety of sizes, shades, and textures that make it stand out
              from the crowd. These perfect-looking, easy-to-use laces make the
              hairline look undetectably natural."
        image={fg}
      />
      <Footer />
    </div>
  );
}
