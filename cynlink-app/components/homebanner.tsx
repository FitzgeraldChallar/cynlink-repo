import React from "react";
import Container from "@/components/container";
import { Title } from "./ui/text";
import Link from "next/dist/client/link";
import Image from "next/image";
import { boy } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-10 md:py-0">
      <Container>
        <div className="
          bg-banner-bg 
          rounded-lg 
          px-6 md:px-10 lg:px-24 
          py-10 md:py-0
          flex 
          flex-col md:flex-row 
          items-center 
          md:justify-between
          gap-6 md:gap-0
        ">
          <div className="text-center md:text-left space-y-5">
            <Title className="text-shop-charcoal">
              Get a Deal for Up To 50% off on <br className="hidden sm:block" />
              Selected Products!
            </Title>

            <Link
              href={"/shop"}
              className="
                inline-block
                mt-4
                bg-shop_gold/90 
                text-white/90 
                px-5 
                py-2 
                rounded-md 
                text-sm 
                font-semibold 
                hover:text-white 
                hover:bg-shop_gold 
                hoverEffect
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
      </Container>
    </div>
  );
};

export default HomeBanner;
