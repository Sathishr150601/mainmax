import { ebht, ht, lh, sd } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function EyebrowMicroblading() {
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
        title={"MAX Hair Clinic's Eyebrow Microblading: Natural-Looking Brows"}
        desc={
          "Get natural-looking brows with Eyebrow Microblading at MAX Hair Clinic. Safe, non-surgical, and long-lasting solution. Book now."
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
        title="Eyebrow Microblading"
        content="MAX Hair Clinic provides FDA-approved medical-grade pigments and
              disposable blades for eyebrow microblading treatments. This is a
              cosmetic treatment procedure. The pigments are deposited in the
              upper region of the dermis. This method produces fine,
              high-quality strokes that mimic naturally occurring hair. Our
              skilled professional team assists you in obtaining well-defined
              shapes for brimming best results. We guarantee fuller brows and
              improved facial aesthetics. The pigment is scratched into the skin
              using a hand tool with a blade made of tiny needles. A
              semi-permanent technique for enhancing the appearance of the
              eyebrows. Some individuals may require follow-up sessions based on
              individual body acceptance. The microblading technique helps to
              reshape your appearance in terms of your eyebrows, both in shape
              and color. Microblading also carries other terms like “feather
              touch”,” 3D eyebrow embroidery,” and “hair-like strokes.” In the
              first stage, the eyebrow outline is marked. Followed by the
              technician applying numbing cream and leaving for at least 30
              minutes. Later, the procedure is started by tattooing the pigments
              in fine lines according to the angles and directions"
        image={ebht}
      />
      <Footer />
    </div>
  );
}
