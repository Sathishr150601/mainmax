import { ht, iht } from "../../../../assets";
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
          "IGM Hair Transplant | Advanced Hair Restoration | MAX Hair Clinic"
        }
        desc={
          "MAX Hair Clinic's IGM Hair Transplant offers advanced Hair Restoration solutions. Get effective and natural-looking results with our innovative technique."
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
        title="IGM Hair Transplant"
        content="An eyebrow transplant is basically a cosmetic surgery that makes
              the eyebrow area fuller with natural-looking hair. MAX Hair Clinic
              offers the Sapphire and Mirror methods to attain the best angular
              and geometric directions for perfect eyebrow shapes. Many people
              who suffer from trichotillomania or alopecia areata benefit from
              an eyebrow transplant. This permanent procedure can last a
              lifetime. It takes a few months to see visible results after the
              hair transplant. But the good part is that the recovery time is
              reasonably quick. The grafts are obtained from the Nape area. This
              scalp piece contains a minimum of 13 to 15 hair follicles. Later,
              the collected grafts are implanted into the eyebrows. This
              procedure is done once the skin heals after the removal of grafts.
              This implantation helps your brow look well-defined with
              natural-looking hair. At MAX Hair Clinic, eyebrow transplants are
              performed by highly skilled cosmetic or plastic surgeons who help
              with pre- and post-implant recovery."
        image={iht}
      />
      <Footer />
    </div>
  );
}
