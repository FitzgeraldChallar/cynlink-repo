import React from "react";
import Container from "@/components/container";
import HomeBanner from "@/components/homebanner";
import ProductGrid from "@/components/productgrid";
import HomeCategories from "@/components/homecategories"; 
import { getCategories } from "@/sanity/queries";
import ShopByBrands from "@/components/shopbybrands";
import LatestBlog from "@/components/latestblog";
import WhyChooseUs from "@/components/whychooseus";
import HowItWorks from "@/components/howitworks";
import BundleSection from "@/components/BundleSection";


const Home = async() => {
  const category= await getCategories(6)
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <HowItWorks />
        <WhyChooseUs />
        <BundleSection />
        <ProductGrid />
        <HomeCategories category={category}/> 
        <ShopByBrands /> 
        <LatestBlog />
      </div>
    </Container>
  );
};

export default Home;

