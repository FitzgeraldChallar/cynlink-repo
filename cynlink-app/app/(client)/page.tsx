import React from "react";
import Container from "@/components/container";
import HomeBanner from "@/components/homebanner";
import ProductGrid from "@/components/productgrid";

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Container>
  );
};

export default Home;
