import React from 'react'
import { Title } from './ui/text';
import Link from 'next/link';
import { getAllBrands } from '@/sanity/queries/index';
import { Brand } from '@/sanity.types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const ShopByBrands = async() => {
    const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
        <div className="flex items-center gap-5 justify-between mb-10">
            <Title className="text-lg">Shop By Brands</Title>
            <Link
                href={"/shop"}
                className="text-sm font-semibold tracking-wide hover:text-shop_gold hoverEffect"
            >
                View all
            </Link>
        </div>
        <div className="flex items-center gap-2.5 justify-between">
            {brands?.map((brand: Brand) => (
                <Link key={brand._id} href = {`/brand/${brand?.slug?.current}`}
                className="bg-white w-36 h-24 flex items-center justify-center rounded-md overflow-hidden hover:shadow-lg shadow-shop_gold/20 hoverEffect">
                    {brand?.image && <Image src={urlFor(brand?.image).url()}
                      alt="brandImage"
                      width={250}
                      height={250}
                      className="w-32 h-20 object-contained"/>}
                </Link>
            ))}
        </div>
    </div>
  )
};
   
export default ShopByBrands;



