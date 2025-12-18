import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({className, spanDesign}:{className?:string, spanDesign?:string}) => {
    return (
        <Link href={"/"} className="inline-flex">
            <h2 className={cn("text-2xl text-shop_gold font-black tracking-wider uppercase hover:text-shop_light_gold hoverEffect group font-sans ", className)}>
                CynLin<span className={cn("text-shop_light_gold group-hover:text-shop_gold hoverEffect", spanDesign)}>k</span>
            </h2>
        </Link>
    );
};

export default Logo;
