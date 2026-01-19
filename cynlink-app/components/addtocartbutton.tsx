"use client"
import React from 'react';
import { Product } from '@/sanity.types';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className}: Props) => {
    const isOutOfStock = product?.stock === 0;
    const handleAddToCart = () => {
        window.alert("Added to cart")
    }
  return (
   <div>
     <Button
       onClick={handleAddToCart}
       disabled={isOutOfStock}
       className={cn(
        "w-full flex items-center justify-center gap-2 text-sm sm:text-base bg-shop_gold/80 text-shop_light_bg border border-shop_gold/80 font-semibold tracking-wide hover:text-white hover:bg-shop_gold hover:border-shop_gold transition",
        className
       )}
     >
      <ShoppingBag className="w-4 h-4" /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
     </Button>
   </div>
  );
   
};

export default AddToCartButton
