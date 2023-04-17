import { ht, lh, sd, sm } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function ScalpMicropigmentation() {
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
    <div className="ScalpMicropigmentation">
      <Meta
        title={"Micropigmentation by MAX Hair Clinic: Natural-Looking Hairline"}
        desc={
          "Get a natural-looking hairline with Scalp Micropigmentation at MAX Hair Clinic. Non-surgical, long-lasting hair loss solution. Book now."
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
        title="Scalp Micropigmentation"
        content="Scalp micropigmentation is a cosmetic treatment procedure. This
              Multiple shades of pigmentation is popular among people suffering
              from alopecia, or hair loss, as well as baldness. This suits all
              skin types. At MAX Hair Clinic, scalp micropigmentation is done by
              skilled technicians. A safe cosmetic tattooing procedure helps
              cover areas of visible baldness. It is a low-maintenance,
              non-invasive procedure that produces results quickly. This
              effective process is used to provide a smudge-free solution to
              hair loss that will last for years. Multiple shades of
              pigmentation Scalp micropigmentation is the best replacement for
              people who fear hair transplant surgery and have a busy scheduled
              lifestyle."
        image={sm}
      />
      <Footer />
    </div>
  );
}
