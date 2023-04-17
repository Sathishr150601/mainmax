import { Route, Routes } from "react-router-dom";
import {
  About,
  Aside,
  Contact,
  Error,
  Home,
  ImageGallery,
  HairTransplant,
  WomenHairTransplant,
  IgmHairTransplant,
  DhiHairTransplant,
  SapphireHairTransplant,
  BeardHairTransplant,
  EyebrowHairTransplant,
  CCPrpActivePlus,
  OxygenLaserTherapy,
  DrRegrowth,
  CroticoShot,
  LaserHelmet,
  MesoQr678,
  ScalpDetox, ScalpMicropigmentation,
  EyelashExension,
  EyebrowMicroblading,
  TresPro,
  SatinLace,
  FrenchGrip,
  Dura,
  CelebrityChoice,
  Products,
  Blogs,
  Blog1,
  Blog2,
  Blog3,
  Blog4,
  Blog5,
  Blog6,
  IceCellGaftPreservationMethod,
  Blog10,
  Blog8,
  Blog9,
  Blog7,
  Blog11,
  ST1,
  NIT1,
  NST1,
  Blog12,
  Blog13,
  Blog14,
  Blog15
} from "../pages";

export default function Paths() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
      {/* Sidebar */}
      <Route path="/menu" element={<Aside />} />
      {/* About Page */}
      <Route path="/about" element={<About />} />
      {/* Services Page */}
      {/* <Route path="/services/surgical-treatments" element={<ST />} /> */}
      {/* <Route path="/services/non-surgical-treatments" element={<NST />} /> */}
      {/* <Route path="/services/clinical-treatments" element={<CT />} /> */}
      {/* <Route path="/services/non-clinical-treatments" element={<NCT />} /> */}
      {/* ST */}
      <Route path="/services/hair-transplant" element={<HairTransplant />} />
      <Route
        path="/services/women-hair-transplant"
        element={<WomenHairTransplant />}
      />
      <Route
        path="/services/igm-hair-transplant"
        element={<IgmHairTransplant />}
      />
      <Route
        path="/services/dhi-hair-transplant"
        element={<DhiHairTransplant />}
      />
      <Route
        path="/services/ice-cell-sapphire-micro-fue"
        element={<SapphireHairTransplant />}
      />
      <Route
        path="/services/beard-hair-transplant"
        element={<BeardHairTransplant />}
      />
      <Route
        path="/services/eyebrow-hair-transplant"
        element={<EyebrowHairTransplant />}
      />
      {/* NST */}
      <Route
        path="/services/cc-prp-active-plus"
        element={<CCPrpActivePlus />}
      />
      <Route
        path="/services/oxygen-laser-therapy"
        element={<OxygenLaserTherapy />}
      />
      <Route path="/services/dr-regrowth" element={<DrRegrowth />} />
      <Route path="/services/crotico-shot" element={<CroticoShot />} />
      <Route path="/services/laser-helmet" element={<LaserHelmet />} />
      <Route path="/services/meso-qr-678" element={<MesoQr678 />} />
      <Route path="/services/scalp-detox" element={<ScalpDetox />} />
      {/* CT */}
      <Route
        path="/services/scalp-micropigmentation"
        element={<ScalpMicropigmentation />}
      />
      <Route path="/services/eyelash-extension" element={<EyelashExension />} />
      <Route
        path="/services/eyebrow-microblading"
        element={<EyebrowMicroblading />}
      />
      {/* NCT */}
      <Route path="/services/tres-pro" element={<TresPro />} />
      <Route
        path="/services/celebrity's-choice"
        element={<CelebrityChoice />}
      />
      <Route path="/services/satin-lace" element={<SatinLace />} />
      <Route path="/services/french-grip" element={<FrenchGrip />} />
      <Route path="/services/dura" element={<Dura />} />
      {/* Contact Page */}
      <Route path="/contact" element={<Contact />} />
      {/* Image Gallery Page */}
      <Route path="/image-gallery" element={<ImageGallery />} />
      {/* Error Page */}
      <Route path="*" element={<Error />} />
      {/* Products Page */}
      <Route path="/products" element={<Products />} />
      {/* Blogs Page */}
      <Route path="/blogs" element={<Blogs />} />
      <Route
        path="/blog/best-hair-transplant-clinic-in-chennai"
        element={<Blog1 />}
      />
      <Route path="/blog/how-to-grow-hair-naturally" element={<Blog2 />} />
      <Route
        path="/blog/cost-of-hair-transplant-in-india"
        element={<Blog3 />}
      />
      <Route path="/blog/can-dandruff-cause-baldness?" element={<Blog4 />} />
      <Route
        path="/blog/what-is-the-safest-hair-loss-treatment?"
        element={<Blog5 />}
      />
      <Route
        path="/blog/what-is-ice-cell-sapphire-micro-fue?"
        element={<Blog6 />}
      />

      <Route
        path="/blog/how-ice-cell-sapphire-micro-fue-works"
        element={<Blog7 />}
      />
      <Route
        path="/blog/hair-transplant-cost-in-hydrabad"
        element={<Blog8 />}
      />
      <Route path="/blog/can-prp-regrow-hair?" element={<Blog9 />} />
      <Route
        path="/blog/what-is-the-best-option-for-cosmetic-hair-replacement"
        element={<Blog10 />}
      />
      <Route
        path="/blog/best-hair-transplant-clinic-in-bangalore-and-cost-of-hair-transplant"
        element={<Blog11 />}
      />
      <Route
        path="/blog/best-hair-transplant-clinics-in-india"
        element={<Blog12 />}
      />
      <Route
        path="/blog/which-is-the-safest-hair-transplant-method-in-india"
        element={<Blog13 />}
      />
      <Route
        path="/blog/best-hair-transplant-clinic-in-hyderabad"
        element={<Blog14 />}
      />
      <Route
        path="/blog/best-hair-care-products-to-resolve-hair-loss"
        element={<Blog15 />}
      />

      <Route path="/services/surgical-treatments" element={<ST1 />} />
      <Route path="/services/non-surgical-treatments" element={<NST1 />} />
      <Route path="/services/non-invasive-treatments" element={<NIT1 />} />
    </Routes>
  );
}
