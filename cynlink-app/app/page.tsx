import React from "react";
import { Button } from "@/components/ui/button"
import Container from "@/components/container";

const Home = () => {
  return (
    <Container className="bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem50 
        ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada. 
        Nullam ac erat ante.  
      </p>
      <Button>Check me out!</Button>
    </Container>
  );
};

export default Home;
