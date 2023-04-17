import { d, ebht, ht, lh, sd } from "../../../../assets";
import {
  ContentService,
  Footer,
  Header,
  Hero1,
  Hero3,
  Meta,
} from "../../../../components";
import { useEffect } from "react";

export default function Dura() {
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
    <div className="Dura">
      <Meta
        title={"Dura Cosmetic Hair Extensions | MAX Hair Clinic"}
        desc={
          "Get a natural look with Dura Cosmetic Hair Extensions from MAX Hair Clinic. Conceal bald spots with our 100% natural hair extensions."
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
        title="Dura"
        content="Max Hair Clinic offers Dura Cosmetic Hair to improve your
              appearance and bring out the best version of you. Max Hair
              Clinic’s highly defined 100% natural cosmeceutical human hair is
              worth a try. This is designed to completely conceal balding or
              bare spots, such as male pattern baldness. Dura Cosmetic provides
              superior grip and all-around protection while concealing receding
              hairlines. Enjoy all the moments in your life without worrying
              about carrying the best cosmetic hair."
        image={d}
      />
      <Footer />
    </div>
  );
}
