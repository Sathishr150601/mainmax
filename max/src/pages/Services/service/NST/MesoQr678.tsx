import { ht, m, m1 } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function MesoQr678() {
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
    <div className="MesoQr678">
      <Meta
        title={
          "Meso QR 678: Advanced Hair Retention Treatment by MAX Hair Clinic"
        }
        desc={
          "Get FDA-approved Meso QR 678 treatment at MAX Hair Clinic. Stop hair loss, thicken hair, & increase follicles. Safe, plant-based, no side effects."
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
        title="Meso QR 678"
        content="At MAX Hair Clinic, we provide the most advanced hair retention
              treatment, Meso QR 678. It is a bio-engineered substance with six
              proven growth factors designed to stop hair loss, thicken hair,
              increase the number of hair follicles, and densify the
              pre-existing hair, covering bald patches on the scalp. It is an
              FDA-approved and patented technology that aids in retaining
              various hair loss. This product is a polypeptide-based
              formulation, making it a plant-based growth factor. As a result,
              it is both safe for the human body and nature. Meso QR 678 is more
              stable and result-oriented. QR678 therapy is locally applied over
              the scalp skin by mesotherapy, which doesn’t disrupt systemic
              circulation. In the majority of cases, the QR678 therapy has no
              side effects."
        image={m}
      />
      <Footer />
    </div>
  );
}
