import React from "react";
import Link from "next/link";
import { productType } from "@/constants/data";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      
      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
        {productType?.map((item) => (
          <button
            key={item.title}
            onClick={() => onTabSelect(item.title)}
            className={`whitespace-nowrap border border-shop_light_gold/10 
              px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm font-semibold
              hover:bg-shop_light_gold hover:border-shop_light_gold hover:text-white hoverEffect
              ${
                selectedTab === item.title
                  ? "bg-shop_light_gold text-white border-shop_light_gold"
                  : "bg-shop_light_gold/10"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* See All */}
      <div className="flex justify-end md:justify-start">
        <Link
          href="/shop"
          className="border border-shop_light_gold/30 
          px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm font-semibold
          hover:bg-shop_light_gold hover:border-shop_light_gold hover:text-white hoverEffect"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default HomeTabBar;
