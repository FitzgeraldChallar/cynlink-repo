import React from 'react';
import { Title } from './ui/text';
import { Category } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  category: Category[];
}

const HomeCategories = ({ category }: Props) => {
  return (
    <div className="bg-white border border-shop_light_gold/20 my-10 md:my-20 p-5 lg:p-7 rounded-lg shadow-sm">
      {/* Section Title */}
      <Title className="border-b pb-3 text-lg md:text-xl font-semibold text-black">
        Popular Categories
      </Title>

      {/* Categories Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {category?.map((category) => (
          <div
            key={category?._id}
            className="flex flex-col items-center p-3 bg-white rounded-lg border border-shop_light_gold/10 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Category Image */}
            {category?.image && (
              <div className="w-full h-24 md:h-32 mb-2 overflow-hidden rounded-md">
                <Link href={`/category/${category?.slug?.current}`}>
                  <Image
                  src={urlFor(category?.image).url()}
                  alt="categoryImage"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                </Link>
              </div>
            )}
            {/* Category Name */}
            <span className="text-sm md:text-base font-semibold text-center text-black">
              {category.title}
            </span>
            {/* Product Count */}
            <p className="text-center text-sm text-gray-600 mt-1">
            {category.productCount} items available
             </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
