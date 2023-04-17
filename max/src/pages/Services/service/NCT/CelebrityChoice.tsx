import { cc, ebht, ht, lh, sd } from "../../../../assets";
import { ContentService, Footer, Header, Hero1, Hero3, Meta } from "../../../../components";
import { useEffect } from "react";

export default function CelebrityChoice() {
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
    <div className="CelebrityChoice">
      <Meta
        title={
          "Mirage Hair Systems | Celebrity's Choice | MAX Hair Replacement"
        }
        desc={
          "Get the most realistic hairlines with Mirage Hair Systems. Natural look, durability, & low-maintenance solution in versatile colors & textures."
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
        title="Celebrity's Choice"
        content="Mirage human hair systems are designed using only the finest
              quality human hair, resulting in a natural appearance that is 100%
              authentic to the touch. Our celebrity’s choice of hair system
              results in the most realistic hairlines and offers a worry-free
              solution to alleviate any signs of baldness. Natural appearances
              and top-notch durability are assured with MAX hair replacement
              systems and Celebrity’s Choice is an unbelievably natural
              low-maintenance solution available in a multitude of choices for
              hair color, texture, and thickness. Developed from the finest
              quality base materials, the mirage human hair system offers
              flexibility to adopt versatile styling choices with a natural feel
              that perfectly mimics real hair. It is soft to the touch with a
              natural shine and can be styled into any number of exquisite
              styles. It is easy to wash and requires little maintenance, making
              it the perfect choice for anyone looking for a realistic and
              high-quality hair replacement solution."
        image={cc}
      />
      <Footer />
    </div>
  );
}
