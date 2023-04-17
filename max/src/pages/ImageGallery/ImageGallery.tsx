import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  BA1,
  BA10,
  BA11,
  BA12,
  BA13,
  BA14,
  BA15,
  BA16,
  BA17,
  BA18,
  BA19,
  BA2,
  BA20,
  BA21,
  BA25,
  BA26,
  BA27,
  BA28,
  BA29,
  BA3,
  BA30,
  BA31,
  BA32,
  BA33,
  BA34,
  BA35,
  BA36,
  BA37,
  BA38,
  BA39,
  BA4,
  BA41,
  BA42,
  BA43,
  BA44,
  BA45,
  BA47,
  BA5,
  BA6,
  BA7,
  BA8,
  BA9,
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
} from "../../assets";
import { Footer, Header1, Hero1, Meta } from "../../components";

export default function ImageGallery() {
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
          top: window.innerHeight / 1.25,
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
        title={
          "Hair Treatment Gallery | Before & After Photos | MAX Hair Clinic"
        }
        desc={
          "Browse through our Hair Treatment gallery for before and after photos of successful procedures at MAX Hair Clinic. See the amazing transformations and get inspired."
        }
      />
      <Header1 />
      <Hero1
        title1="Alter"
        title2="Ego"
        click1={Click1}
        click2={Click2}
        click3={Click3}
        click4={Click4}
        menu1="Sapphire Mirror"
        menu2="Sapphire"
        menu3="Cosmetic Hair"
        menu4="Video Testimonials"
        menu11="Activated Sapphire Mirror+FUE"
        menu12="Sapphire Hair Transplant"
        menu13="Cosmetic Hair System"
        menu14="Video Testimonials"
      />
      <div className="w-[80vw] mx-auto text-black pt-[100vh] text-justify">
        <h4>Important Note:</h4>
        <p className="">
          At MAX Hair Clinic, we take great pride in providing our clients with
          the best hair transplant services possible. As part of our commitment
          to excellence, we feature images of our satisfied clients on our
          website and other advertising materials. These images are the property
          of MAX Hair Clinic and are protected by copyright law. We kindly
          request that you do not copy or reuse any of our customer images
          without our express permission. Unauthorized use of these images is
          strictly prohibited and will result in legal action. We appreciate
          your cooperation in respecting the intellectual property rights of our
          clients and our clinic. If you have any questions or concerns about
          the use of our customer images, please do not hesitate to contact us.
        </p>
      </div>
      <div className="sm:mb-[8vw] pt-[5vh]">
        {first && <ImageSection1 />}
        {second && <ImageSection2 />}
        {third && <ImageSection3 />}
        {fourth && <ImageSection4 />}
      </div>
      <div className="h-[10vh] lg:hidden"></div>
      <Footer />
    </div>
  );
}

function ImageSection1() {
  const images = [
    BA26,
    BA30,
    BA31,
    BA31,
    BA33,
    BA35,
    BA36,
    BA37,
    BA38,
    BA39,
    BA42,
    BA43,
    BA44,
    BA45,
    BA47,
  ];
  const columnsCountBreakPoints = { 350: 2, 450: 3, 750: 4, 990: 3 };

  return (
    <div className="w-[80vw] mx-auto">
      <div className="pt-0">
        <div className="text-center text-black">
          <h2 className="mb-[5vh]">Activated Sapphire Mirror+FUE</h2>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="1rem">
            {images.map((image) => (
              <img src={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

function ImageSection2() {
  const images = [
    BA1,
    BA2,
    BA3,
    BA4,
    BA5,
    BA6,
    BA7,
    BA8,
    BA10,
    BA11,
    BA12,
    BA13,
    BA14,
    BA15,
    BA16,
    BA18,
    BA19,
    BA20,
    BA21,
    BA25,
  ];
  const columnsCountBreakPoints = { 350: 2, 450: 2, 750: 3, 990: 4 };

  return (
    <div className="w-[90vw] mx-auto">
      <div className="pt-0 ">
        <div className="text-center text-black">
          <h2 className="mb-[5vh]">Sapphire Hair Transplant</h2>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="2rem">
            {images.map((image) => (
              <img src={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

function ImageSection3() {
  const images = [BA9, BA17, BA27, BA28, BA29, BA34, BA41];
  const columnsCountBreakPoints = { 350: 2, 450: 3, 750: 4, 990: 3 };

  return (
    <div className="w-[90vw] mx-auto">
      <div className="pt-0">
        <div className="text-center text-black">
          <h2 className="mb-[5vh]">Cosmetic Hair System</h2>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="1rem">
            {images.map((image) => (
              <img src={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

function ImageSection4() {
  const images = [test1, test2, test3, test4, test5, test6];
  const columnsCountBreakPoints = { 350: 1, 450: 2, 750: 3 };

  return (
    <div className="w-[90vw] mx-auto">
      <div className="pt-0 ">
        <div className="text-center text-black">
          <h2 className="mb-[5vh]">Video Testimonials</h2>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter="1rem">
            {images.map((image) => (
              <video
                className="rounded-3xl w-[80vw] sm:w-[50vw] mx-auto h-[50vh]"
                height="500"
                controls
                loop
              >
                <source src={image} type="video/mp4" />
              </video>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
