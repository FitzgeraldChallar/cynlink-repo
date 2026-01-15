import React from "react";
import Container from "@/components/container";
import HomeBanner from "@/components/homebanner";
import ProductGrid from "@/components/productgrid";
import HomeCategories from "@/components/homecategories"; 
import { getCategories } from "@/sanity/queries";
import ShopByBrands from "@/components/shopbybrands";

const Home = async() => {
  const category= await getCategories(6)
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
        <HomeCategories category={category}/>
        <ShopByBrands />
      </div>
    </Container>
  );
};

export default Home;
