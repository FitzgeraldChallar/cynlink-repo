import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({className}:{className?:string}) => {
    return (
        <Link href={"/"}>
            <h2 className={cn("text-2xl text-shop_gold font-black tracking-wider uppercase hover:text-shop_light_gold hoverEffect group font-sans ", className)}>
                CynLin<span className="text-shop_light_gold group-hover:text-shop_gold hoverEffect">k</span>
            </h2>
        </Link>
    );
};

export default Logo;