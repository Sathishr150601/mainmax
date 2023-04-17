import { ht, iht } from "../../../../assets";
import { ContentService, Footer, Header, Hero1 } from "../../../../components";
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
      <Header />
      <Hero1
        title1="Our"
        title2="Services"
        menu1="Surgical"
        menu2="Non - Surgical"
        menu3="Clinical"
        menu4="Non - Clinical"
        menu11="Surgical Treatments"
        menu12="Non - Surgical Treatments"
        menu13="Clinical Treatments"
        menu14="Non - Clinical Treatments"
        ln1="/services/surgical-treatments"
        ln2="/services/non-surgical-treatments"
        ln3="/services/clinical-treatments"
        ln4="/services/non-clinical-treatments"
      />
      <ContentService
        title="ICE Cell Graft Preservation Method"
        content="ICE Cell Graft Preservation Method is the latest generation innovation to elongate the life of the implanted grafts, there are many factors which determines the final quality of hair transplant procedure. Most of the Hair transplant surgeons strive to control the factors such as hydration, temperature, time out of body, and gentle handling of grafts. Once these basic factors have been accounted for, further improvements can be found only through addressing secondary factors such as operating technique, grafts care, storage solutions, and additives. Of the remaining factors that can be addressed to improve the quality and optimum graft survival method is the storage of the follicles or preservation method of the follicular units prior to implantation is perhaps the most important. Hair transplant grafts are subjected to a series of stress from the time they are removed from the body until revascularization is complete approximately 3 days post procedure completion. Dehydration, mechanical trauma, hypoxia, ATP depletion, reperfusion injury, cold injury and lactic acid accumulation are the pitfalls that serve to reduce viability of grafts, and follicular units prior to implantation. The ice cell preservation box technique is formulated specifically to support hair bearing tissue samples during hypothermic storage, and address the stress of hypothermia with balanced ions and molecules, targeted pH buffering and potent free radicals scavengers that reduce hair follicle cell death via apoptosis and necrosis."
        image={iht}
      />
      <Footer />
    </div>
  );
}
