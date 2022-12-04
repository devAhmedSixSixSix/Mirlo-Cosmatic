import React from "react";
import Category from "../Components/Category";
import HeroBanner from "../Components/HeroBanner";
import NewsLitter from "../Components/NewsLitter";
import SomeInfo from "../Components/SomeInfo";
import SomeProduct from "../Components/SomeProduct";
import Testimonials from "../Components/Testimonials";

function Home({ filterdData }) {
  const skincare =
    filterdData && filterdData.filter((item) => item.category !== "skincare");
  const fragrances =
    filterdData && filterdData.filter((item) => item.category !== "fragrances");
  return (
    <div>
      <HeroBanner />
      <Category />
      <SomeProduct title="Trending Product" filterdData={skincare} />
      <SomeInfo title="About Miralou Sister's" />
      <SomeProduct title="New Arrivals" filterdData={fragrances} />
      <Testimonials />
      <NewsLitter />
    </div>
  );
}

export default Home;
