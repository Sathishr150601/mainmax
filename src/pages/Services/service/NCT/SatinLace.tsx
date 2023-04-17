import { ebht, ht, lh, sd, sl } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function SatinLace() {
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
    <div className="SatinLace">
      <Meta
        title={"Satin Lace Hair Systems | MAX Hair Clinic"}
        desc={
          "Get undetectable hair solutions with our Satin Lace Systems. Choose from a variety of colors and textures for a natural look."
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
        title="Satin Lace"
        content="Max Hair Clinic offers silk lace systems, which assure ultimate
              versatility and convenient installation. These cosmetic hair
              systems offer a healthy and undetectable solution to alleviate any
              signs of baldness and hair loss. These hair cosmetic systems offer
              100% natural looks and are preferred by the world’s most prominent
              business personalities due to their superior quality and
              craftsmanship. This cosmetic attachment complements the color and
              texture of the hair. It makes a very good skin-friendly option and
              is breathable. Satin lace carries its own versatile look. The
              ideal combination of convenience and comfort. Our customized
              options will help you achieve a long-lasting style in no time."
        image={sl}
      />
      <Footer />
    </div>
  );
}
