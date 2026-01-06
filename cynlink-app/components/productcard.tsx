import React from "react";
import Image from "next/image";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({ product }: { product: Product }) => {
  const image = product?.images?.[0];

  return (
    <div className="w-full">
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        {image && (
          <Image
            src={urlFor(image).url()}
            alt={product.name ?? "Product image"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 25vw" 
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
