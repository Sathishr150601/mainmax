import { cs, ht } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function CroticoShot() {
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
    <div className="CroticoShot">
      <Meta
        title={"MAX Hair Clinic: Hair Loss Solutions for Alopecia Areata"}
        desc={
          "Get Cortico shots & Derma-Roller treatment at MAX Hair Clinic to treat Alopecia Areata. Restore up to 50% of your hair's growth."
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
        title="Crotico Shot"
        content="MAX Hair Clinic provides treatments for multifaceted hair loss
              issues. Auto-immune disease is one of them. We have the best, most
              dedicated team for treating hair loss. A Cortico shot is
              exclusively given to people suffering from alopecia areata.
              Alopecia Areata is an auto-immune disorder where our own body
              attacks native body cells. This shot lowers the immune response.
              Cortico shots help in treating alopecia areata of the scalp where
              less than 50% of the scalp area is involved. Alopecia areata of
              the brows, beard, and lichen are also common. Planopilaris
              Alopecia due to frontal fibrosis, discoid lupus, and folliculitis
              de calvans can also be treated. While corticosteroids cannot
              guarantee that the hair follicles in the affected area will grow
              back completely, they can help to lower the immune response and
              stop the spread of this specific illness. In certain cases, we are
              able to appreciate 50% of the regrowth in the affected portion.
              Along with the Derma-Roller, a Cortico shot can be administered."
        image={cs}
      />
      <Footer />
    </div>
  );
}
