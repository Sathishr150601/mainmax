import { ele, ht, lh, sd } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function EyelashExtension() {
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
    <div className="EyelashExtension">
      <Meta
        title={"MAX Hair Clinic's Eyelash Extension: Enhance Your Beauty"}
        desc={
          "Enhance your beauty with MAX Hair Clinic's Eyelash Extensions. Safe, long-lasting, and natural-looking. Book now for fuller lashes."
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
        title="Eyelash Extension"
        content="Eyelash extensions have bloomed widely among women to enhance
              their beauty. This cosmetic procedure is a set of semi-permanent
              extensions that are glued manually by MAX Hair Clinic’s highly
              skilled professionals. These ultra-fine fibers give your lashes a
              bold, long, and full appearance with a natural-looking thickness.
              MAX Hair Clinic eyelash extensions are lighter, last longer, and
              are available in custom-tailored style choices. It adapts to your
              eye shape and facial features for a completely natural look.
              Eyelash extensions last for six to eight weeks until they
              naturally fall off like your lashes usually do. No wait, ladies,
              pamper yourself to retain and relish your beauty. Self-indulgence
              is a necessary evil."
        image={ele}
      />
      <Footer />
    </div>
  );
}
