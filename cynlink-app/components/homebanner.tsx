import React from "react";
import Container from "@/components/container";
import { Title } from "./ui/text";
import Link from "next/dist/client/link";
import Image from "next/image";
import { boy } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-10 md:py-0">
        <div className="
          bg-banner-bg 
          rounded-lg 
          px-6 md:px-10 lg:px-24 
          py-10 md:py-5
          flex 
          flex-col md:flex-row 
          items-center 
          md:justify-between
          gap-6 md:gap-0
        ">
          <div className="text-center md:text-left space-y-6 max-w-xl">

  <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
    Buy in bulk - wholesale sourcing made SIMPLE! <br />
    <span className="text-shop_gold">Source safely.</span> <br />
    Resell with confidence.
  </h1>

  <Link
    href={"/shop"}
    className="
      inline-block
      mt-6
      bg-shop_gold
      text-white
      px-6
      py-3
      rounded-full
      text-sm
      font-semibold
      hover:bg-shop_gold/90
      transition-all
    "
  >
    Buy Now
  </Link>
</div>
          <div>
            <Image
              src={boy}
              alt="boy"
              className="hidden md:inline-flex w-72 lg:w-96"
            />
          </div>
        </div>
    </div>
  );
};

export default HomeBanner;
