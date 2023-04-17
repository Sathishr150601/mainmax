import { useState, useEffect } from "react";
import { capability, clinic, forte, Milestones } from "../../assets";
import {
  ContentLeft,
  ContentLeft1,
  ContentRight,
  Footer,
  Header1,
  Hero1,
  Meta,
} from "../../components";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);

  const handleScroll = () => {
    if (window.innerWidth >= 1023) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1.4,
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
  };

  const Click1 = () => {
    handleScroll();
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfourth(false);
  };
  const Click2 = () => {
    handleScroll();
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
  };
  const Click3 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfourth(false);
  };
  const Click4 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfourth(true);
  };

  return (
    <div className="About">
      <Meta
        title="About MAX Hair Clinic | Hair Transplant Leaders"
        desc="MAX Hair Clinic: Leading Hair Transplant experts in India. Get effective Hair Restoration solutions with advanced techniques for your desired hair growth."
        ln="/about"
        
      />
      <Header1 />
      <Hero1
        title1="About"
        title2="Us"
        click1={Click1}
        click2={Click2}
        click3={Click3}
        click4={Click4}
        menu1="Our Clinic"
        menu2="Our Capability"
        menu3="Our Forte"
        menu4="Our Milestones"
        menu11="Our Clinic"
        menu12="Our Capability"
        menu13="Our Forte"
        menu14="Our Milestones"
      />
      <div className="pt-[80vh] md:pt-[60vh] lg:pt-[90vh]">
        {first && (
          <ContentLeft1
            title="Our Clinic"
            content="Max Hair Clinic incorporated in 2004 is self-defined brand name in the modern world of Hair transplant in India cascading excellence in delivery, we continue our operations in a class apart of OPD facilities environment for more than 18 years of experience with our visitors from all over the world, with Pan India & global recognition and high service quality, applying the latest technologies in hair transplantation. Strengthening our experience in the health sector with our expert medical staff and healthcare personnel, Max Hair Clinic International has become a reliable brand. With the best physicians in the field of hair transplantation and medical aesthetics, as Max Hair Clinic, we continue to make a difference by incorporating the latest technological devices. Applying techniques and methods accepted by the international hair restoration association together with the latest technological devices, we have made a huge impact in the hair transplantation world. Sapphire Hair transplant technique introduced in India is one of our best innovation since 2018 adding feathers to our cap of ongoing innovations."
            image={clinic}
          />
        )}
        {second && (
          <ContentRight
            title="Our Capability"
            content="MAX Hair Clinic, since its inception in 2004, has already managed
              to win the reputation of being the Best Hair Solution Company in
              India. At MAX Hair, our highly experienced experts work
              ceaselessly to develop custom solutions. We have relentlessly
              added to our technique, Advanced technological and knowledge
              ensuring that we develop and deliver nothing less than the Best
              Hair Cosmetic Systems, Hair Transplant and Hair Replacement
              products and services. We have achieved the feat of being widely
              acclaimed in the USA and have managed to achieve the same in
              India, with our unparalleled services and products. Our Hair
              Replacement procedures offer the best possible natural look. We
              also take pride in our Human Skin Lace Cosmetic Systems that are
              fully undetectable and offer our customers 100% natural look with
              high comfort level."
            image={capability}
          />
        )}
        {third && (
          <ContentLeft1
            title="Our Forte"
            content="Practicing the latest in FUE Hair Transplant, MAX Hair Clinic has
              set a benchmark with its Sapphire+ Hair Transplant treatment. MAX
              Hair Clinic specialises in Hair Transplantation, Beard
              transplantation, Hair Restoration, Hair Replacement, Hair
              Retention programmes like CC-PRP, Dr. Regrowth, SLS, QR 678 and
              much more. No doubt our experienced professionals and experts
              recommend you the best treatment that matches your needs and
              achieve the desired results that you have always longed for."
            image={forte}
          />
        )}
        {fourth && (
          <div className="OurMilestones lg:pt-[10vh]">
            <img src={Milestones} alt="" className="w-[100vw]" />
          </div>
        )}
      </div>
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
    </div>
  );
}
