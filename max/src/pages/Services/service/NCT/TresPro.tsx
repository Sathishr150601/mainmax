import { ebht, ht, lh, sd, tp } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function TresPro() {
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
    <div className="TresPro">
      <Meta
        title={"TRES-PRO Hair Extensions | MAX Hair Clinic"}
        desc={
          "Get premium-quality TRES-PRO hair extensions at MAX Hair Clinic for instant volume, length, and luster. Handcrafted by experts, our extensions blend seamlessly with your natural hair."
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
        title="Tres Pro"
        content="Tress Pro Solution is a high-end, high-quality hair extension. At
              MAX Hair Clinic, we provide you with the experience of the best
              hair extensions. Our premium quality Tress Pro helps you achieve
              your desired look by deriving the perfect volume, length, and
              lusters from your hair extensions. Each Tress Pro extension is
              handcrafted by a bespoke team of experts. This results in
              natural-looking hair with incredible elegance. Our Tress Pro is
              available in a variety of stunning shades and lengths for you to
              choose from. These instant styling hair extensions complement your
              hair perfectly, and the silky smooth Tress Pro can be treated in
              the same way as your own. Our multi-tone system allows for perfect
              color blending and a variety of choices in styling, ranging from
              curls to sleek and straight strands. We have the best reputation
              when it comes to Tress Pro extensions. Our hairstyling experts
              ensure a perfect blend of Tres Pro with your existing hair with
              careful positioning of the Tres Pro system closer to the parting."
        image={tp}
      />
      <Footer />
    </div>
  );
}
