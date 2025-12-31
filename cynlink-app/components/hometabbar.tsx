import React from 'react'
import Link from "next/link";
import { productType } from "@/constants/data";

interface Props {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTabSelect}: Props) => {
    console.log(selectedTab);
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
            <button 
              onClick={()=>onTabSelect(item?.title)}
              key={item?.title} className={`border border-shop_light_gold/10 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_gold hover:border-shop_light_gold hover:text-white hoverEffect
              ${selectedTab === item?.title ? "bg-shop_light_gold text-white border-shop_light_gold" :"bg-shop_light_gold/10"}`}>{item?.title}
            </button>
        ))}
      </div>
      <Link href={"/shop"} className="border border-shop_light_gold/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_gold hover:border-shop_light_gold hover:text-white hoverEffect">See all</Link>
    </div>
  );
};

export default HomeTabBar
