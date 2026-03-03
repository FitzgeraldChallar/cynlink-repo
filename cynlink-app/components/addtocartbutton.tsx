"use client"
import React from 'react';
import { Product } from '@/sanity.types';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import useStore from '@/store';
import toast from "react-hot-toast";

interface Props {
    product: Product;
    className?: string;
}

const AddToCartButton = ({ product, className}: Props) => {
    const {addItem, getItemCount} = useStore();
    const itemCount=getItemCount(product?._id)
    const isOutOfStock = product?.stock === 0;
    const handleAddToCart = () => {
        if ((product?.stock as number)>itemCount) {
          addItem(product);
          toast.success(`${product?.name?.substring(0,12)}... added successfully`);
        }
    };
  return (
   <div className="w-full h-12 flex items-center">
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
