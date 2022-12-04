import React from "react";
import ImgBanner from "../Components/ImgBanner";
import SectionBanner from "../Components/SectionBanner";
import SomeInfo from "../Components/SomeInfo";
import Category from "../Components/Category";
import Testimonials from "../Components/Testimonials";
import Support from "../Components/Support";
import OurTeam from "../Components/OurTeam";
import NewsLitter from "../Components/NewsLitter";

function AboutUs() {
  return (
    <div>
      <SectionBanner title="About us" subTitle="Home / About us" />
      <ImgBanner />
      <SomeInfo title="Who We Are" />
      <Support />
      <Category />
      <OurTeam />
      <Testimonials />
      <NewsLitter />
    </div>
  );
}

export default AboutUs;
