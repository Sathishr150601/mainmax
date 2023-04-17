import { ht, lh } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function LaserHelmet() {
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
    <div className="LaserHelmet">
      <Meta
        title={
          "MAX Hair Clinic's Laser Helmet for Comfortable Hair Restoration"
        }
        desc={
          "Use MAX Hair Clinic's Laser Helmet for non-surgical Hair Restoration. Wear at home for 20 minutes, 3 times a week. It thickens existing hair & stimulates new growth."
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
        title="Laser Helmet"
        content="Enjoy comfortable hair restoration at your leisure! Oxygen LASER
              therapy MAX Hair Clinic provides LASER helmet that can be used to
              rejuvenate hair growth and circulation. The helmet can be worn by
              the patient for 20 minutes, three times per week, for a total of
              8000 hours. Because it can be worn from the comfort of the
              patient’s home, it has no negative impact on the patient’s
              routine. Patients should use topical solutions & oral supplements
              as advised by the physician during the course of the treatment
              given when they are present for reviews. The best hair restoration
              treatment is the LASER helmet; the best part is that it is a
              non-surgical and clinical procedure that helps to stop hair loss.
              As an advantage, this treatment thickens the existing hair and
              encourages the growth of new hair by emitting laser beams that
              stimulate blood circulation throughout the scalp."
        image={lh}
      />
      <Footer />
    </div>
  );
}
