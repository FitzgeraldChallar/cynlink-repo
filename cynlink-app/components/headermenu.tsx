"use client"
import React from 'react'
import Link from 'next/link'
import { headerData } from '@/constants/data'
import { usePathname } from 'next/navigation'   

function HeaderMenu() {
    const pathname = usePathname();
    console.log(pathname);
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`
            hover:text-shop_light_gold
            hoverEffect
            relative
            group
            font-sans
            ${pathname === item?.href ? "text-shop_light_gold" : ""}
          `}
        >
          {item?.title}
          <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_gold group-hover:w-1/2 hoverEffect group-hover:left-0" />
          <span className="absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_gold group-hover:w-1/2 hoverEffect group-hover:right-0" />
        </Link>

      ))}
    </div>
  )
}

export default HeaderMenu
