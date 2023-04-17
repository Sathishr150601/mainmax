import { ht, lh, sd } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function ScalpDetox() {
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
        title={"MAX Hair Clinic's Scalp Detox: Get Rid of Itchy, Flaky Scalp"}
        desc={
          "Detoxify your scalp at MAX Hair Clinic. Nourish & revive a dry, itchy scalp. Exfoliate dead tissues, unclog pores, & prevent hair loss. Book now."
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
        title="Scalp Detox"
        content="At MAX Hair Clinic, get rid of your flaky and itchy scalp by
              detoxifying. Our detox treatment provides nourishment and
              revivification for dry and itchy scalps. This exfoliates dead and
              damaged scalp tissues. When it comes to having scalp pores, the
              scalp resembles the skin on other parts of the body. The pores
              created in the scalp can get clogged as a result of oil, sebum,
              dust, or any other reason, which results in pimples, boils, pus
              formation, or even fungal development on the scalp. This affects
              the health of the scalp and the quality of hair growth and may
              also end up in hair loss."
        image={sd}
      />
      <Footer />
    </div>
  );
}
