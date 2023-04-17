import { ht, olt } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function OxygenLaserTherapy() {
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
    <div className="OxygenLaserTherapy">
      <Meta
        title={"Boost Hair Growth with Oxygen Laser Therapy - MAX Hair Clinic"}
        desc={
          "Our Oxygen Laser Therapy is a non-invasive treatment that promotes hair growth by stimulating hair follicles with increased oxygenation."
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
        title="Oxygen Laser Therapy"
        content="MAX Oxygen LASER Therapy is a clinically proven, FDA-approved
              advanced method of stimulating hair growth and effectively
              reducing baldness. Oxygen laser therapy is a non-surgical
              treatment for hair loss that employs a medical laser device with
              therapeutic and low-light laser levels. The photo-bio stimulation
              of MAX Oxygen LASER Hair Treatment irradiates photons into scalp
              tissues, which upon penetration accelerates pure oxygen intake.
              The Oxygen LASER light beam will stimulate the hair follicles and
              their tissue cells. This promotes blood flow, increases the hair
              growth rate, reduces the thinning of hair, and treats androgenetic
              alopecia. As this activates the intracellular fluid, nutrients get
              supplied equally. This helps the follicles to restore and
              reconstruct healthy hair. Because this noninvasive wavelength
              contains 100% oxygen, this method of preventing hair loss is
              completely safe for human health. At MAX Hair Clinic, we use 650nm
              to 830nm. In addition, this reduces dandruff, improves the
              immunity of the skin, and also activates collagen production. The
              cold beam emitted from the diode freezes hair and prevents it from
              falling. The main factor and an added advantage of using Oxygen
              LASER therapy are that it breaks down DHT, which plays a
              significant role in hair fall. It also aids in the production of
              oil and sebum secretion, which helps to keep the scalp’s pH
              stable."
        image={olt}
      />
      <Footer />
    </div>
  );
}
