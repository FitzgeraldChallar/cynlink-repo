"use client"
import React from 'react';
import { Product } from '@/sanity.types';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import useStore from '@/store';
import toast from "react-hot-toast";
import PriceFormatter from './priceformatter';
import { QuantityButtons } from './QuantityButtons';

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
          toast.success(`${product?.name?.substring(0,12)}... added successfully!`);
        } else {
          toast.error("can not add more than available stock");
        }
    };
  return (
   <div className="w-full h-12 flex items-center">
    {itemCount ? (
      <div className="text-sm w-full">
        <div className="flex items-center justify-between">
          <span className="text-xs text-darkColor/80">Quantity</span>
          <QuantityButtons product={product} />
        </div>
        <div className="flex items-center justify-between border-t pt-1">
          <span className="text-xs font-semibold">Subtotal</span>
          <PriceFormatter amount={product?.price ? product?.price * itemCount : 0} />
        </div>
      </div>
    ) : (
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
    )}
   </div>
  );
   
};

export default AddToCartButton
