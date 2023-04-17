import { ht, saphnew, sht } from "../../../../assets";
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
        title={"ICE Cell Sapphire Micro FUE Hair Transplant | MAX Hair Clinic"}
        desc={
          "MAX Hair Clinic offers ICE Cell Sapphire Micro FUE for a painless Hair Transplant experience."
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
        location="/services/surgical-treatments"
        title="ICE Cell Sapphire micro FUE (The 5th Generation FUE)"
        content="Ice cell preservation method Sapphire store implanting method is one of the aesthetic surgery methods used to eliminate thinning or balding hair problems. In the application of sapphire hair transplantation, the grafts in the donor area are collected one by one with micro FUE motors and placed one by one in the micro channels opened with the help of sapphire-tipped blades in the hair transplantation area. In this way, the problem of baldness or sparse areas of the scalp is eliminated.
Ice Cell Sapphire micro FUE technique is a procedure that can be performed in a single session and provides permanent results. The fact that the method allows more frequent planting and allows excellent results to be obtained in narrow areas. The ice cell graft preservation technique allows the extracted grafts to retain its properties even after extraction and kept outside the body for a certain period of time. The survival and the growth factors of the grafts become optimum post implanting and grows faster and remains back on the scalp more than any other FUE method which is usually more than 25 years. The advantages of Sapphire FUE hair transplantation have made the method prominent in recent years. The use of sapphire tips in the treatment of Sapphire FUE hair transplantation reduces vibration. In this way, it is possible to say that the risk of tissue damage is minimized. Another advantage of the Sapphire FUE technique is that it allows more frequent transplantation. In this way, a natural appearance can be obtained and intense baldness problems can be eliminated. In the Sapphire FUE hair transplantation technique, some common complications such as swelling are much less common than other methods. This helps patients to have a comfortable recovery process. The use of sapphire tips in the Sapphire FUE hair transplant technique helps to shorten the healing time by opening micro channels. Another advantage of Sapphire stone blade is that they do not cause allergies like steel knives.

The most distinctive advantage of Ice cell Sapphire micro FUE is the classical FUE and Sapphire FUE techniques are one of the important points to be informed about while deciding on the hair transplant method. FUE engines are used in both classical FUE and Sapphire micro FUE methods. The difference between the two methods is observed in the channel opening phase. In the classical FUE method, steel blades are used during the grooving process for the transplantation of grafts. In the Ice cell Sapphire FUE technique, sapphire-tipped medical pens are preferred during the grooving process. The use of sapphire-tipped blades shortens the error rate and recovery time. Max hair studio international practicing Sapphire micro FUE from last couple of years since it evolved in International hair restoration society practice have now innovated the graft preservation technique by adding the Ice cell preservation technique to make the entire procedure error free."
        image={saphnew}
        image1={sht}
      />
      <Footer />
    </div>
  );
}
