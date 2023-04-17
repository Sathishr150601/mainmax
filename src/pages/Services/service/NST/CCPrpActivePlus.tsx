import { ht, prp, prpf, prpnew } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function CCPrpActivePlus() {
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
    <div className="CCPrpActivePlus">
      <Meta
        title={
          "CC-PRP Active Plus - Platelet Rich Plasma Treatment | MAX Hair Clinic"
        }
        desc={
          "CC-PRP Active Plus is a highly effective treatment for hair loss that uses your own blood to stimulate hair growth. Discover it at MAX Hair Clinic."
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
        location="services/non-invasive-treatments"
        title="CC PRP Active Plus"
        content="A non-surgical, completely safe, and organic procedure that aids
              in hair retention and prevention of hair loss and has no side
              effects. At MAX Hair Clinic, we use a Closed-Casket Kit to collect
              plasma from the client’s blood using the modern German technology
              known as Closed Casket Platelet Rich Plasma (CC-PRP). This
              contains Growth factors, proteins, amino acids, nutrients, and
              electrolytes derived from the platelets. As a result, this Non-
              surgical treatment benefits by nurturing, rejuvenating, and
              promoting hair regrowth. Any damage to the scalp or hair follicles
              will return to their natural, healthy state. The closed-casket PRP
              machine has a single entry point and a single exit point; As a
              result, the plasma is pathogen- and toxin free and has not been
              exposed to the outside environment. The CC-PRP kit spins at 4000
              RPM, thus extracting growth factor concentrate (GFC) while
              protecting the cells through a self-cooling mechanism. MAX Hair
              Clinic ensures proper maintenance of hygiene. We use sterile and
              disposable CC-PRP kits. Catalyzing optimum healing. CC-PRP
              treatments are a 100% customizable procedure that increases hair
              density & quality and also counteracts baldness. Helps in the
              natural regenerative process of hair growth."
        image={prpnew}
        image1={prpf}
      />
      <Footer />
    </div>
  );
}
