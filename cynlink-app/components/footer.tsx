import React from "react";
import Container from "./container";
import FooterTop from "./footertop";
import Logo from "./logo";
import SocialMedia from "./socialmedia";
import { SubText } from "@/components/ui/text";
import { SubTitle } from "@/components/ui/text";
import Link from "next/link";
import { quickLinksData } from "@/constants/data";
import { categoriesData } from "@/constants/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Footer = () => {
  return (
    <footer className="bg-white border-t">
      {/* Footer Top Section */}
      <div className="w-full border-b">
        <Container>
          <FooterTop />
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
                <Logo />
                <SubText>
                    Cynlink is your trusted partner in ecommerce. We source only high quality products for your needs.
                </SubText>
                <SocialMedia className="text-darkColor/60 hover:border-shop_gold hover:text-shop_gold" tooltipClassName="bg-darkColor text-white" /> 
            </div>
            <div>
                <SubTitle>Quick Links</SubTitle>
                <ul className="space-y-3 mt-4">
                    {quickLinksData?.map((item) => (
                        <li key={item?.title}>
                            <Link href={item?.href} className="hover:text-shop_light_gold hoverEffect font-medium">
                                {item?.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <SubTitle>Categories</SubTitle>
                <ul className="space-y-3 mt-4">
                    {categoriesData.map((item) => (
                      <li key={item.title}>
                       <Link
                        href={`/category/${item?.href}`}
                        className="hover:text-shop_light_gold hoverEffect font-medium"
                       >
                        {item.title}
                       </Link>
                      </li>
            ))}

                </ul>
            </div>
            <div className="space-y-4">
                <SubTitle>Newsletter</SubTitle>
                <SubText>Subscribe to our Newsletter to receive updates and exclusive offers.</SubText>
                <form className="space-y-3">
                    <Input placeholder="Enter you email" type="email" required />
                    <Button className="w-full">Subscribe</Button>
                </form>
            </div>
          </div>
        </Container>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            &copy; {new Date().getFullYear()} <Logo className="text-sm" />. All rights reserved.
          </div>
        </div>
      </div>

      {/* Footer Bottom can go here */}
    </footer>
  );
};


export default Footer;

