"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Heart } from 'lucide-react'; 
import { Product } from '@/sanity.types';
import useStore from '@/store';
import toast from 'react-hot-toast';

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
   showProduct?: boolean;
   product?: Product | null | undefined;
}) => {
  const { favoriteProduct, addToFavorite } = useStore();
  const [ existingProduct, setExistingProduct] = useState<Product | null>(null);
  useEffect(() => {
    const availableProduct = favoriteProduct?.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableProduct || null);
  }, [product, favoriteProduct]);

  const handleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (product?._id) {
      addToFavorite(product).then(() => {
        // Check current favorite state after toggle
        const isNowFavorite = favoriteProduct?.some(
          (item) => item._id === product._id
        );
        toast.success(isNowFavorite ? "product removed successfully!" : "product added successfully!");
      });
    }
  };
  return (
    <>
      {!showProduct ? <Link href={"/wishlist"} className="group relative">
        <Heart className="w-5 h-5 hover:text-shop_light_gold hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-shop_gold text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          {favoriteProduct?.length ? favoriteProduct?.length : 0}
        </span>
      </Link>
      :
        <button onClick={handleFavorite} className="group relative hover:text-shop_light_gold hoverEffect border border-shop_light_gold/80 hover:border-shop_light_gold p-1.5 rounded-sm">
          {existingProduct ? (
            <Heart 
              fill="red"
              className="text-shop_light_gold/80 group-hover:text-shop_light_gold hoverEffect mt-.5 w-5 h-5"
            />
          ) : (
            <Heart className="text-shop_light_gold/80 group-hover:text-shop_light_gold hoverEffect mt-.5 w-5 h-5" />
          )}
          
        </button>}
    </>
  );
};

export default FavoriteButton

