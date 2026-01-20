import React from "react";
import Image from "next/image";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Flame, StarIcon } from "lucide-react";
import AddToWishlistButton from "./addtowishlistbutton";
import { Title } from "./ui/text";
import PriceView from "./priceview";
import AddToCartButton from "./addtocartbutton";

const ProductCard = ({ product }: { product: Product }) => {
  const image = product?.images?.[0];
  const categories = Array.isArray(product?.category)
    ? product.category
    : [];

  return (
    <div className="text-sm border border-dark_blue/20 rounded-md bg-white group">
      <div className="relative group aspect-square bg-shop_light_bg rounded-lg overflow-hidden">
        {image && (
          <Image
            src={urlFor(image).url()}
            alt={product?.name ?? "Product Image"}
            fill
            className={`object-contain p-10 overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${
              product?.stock !== 0
                ? "group-hover:scale-105"
                : "opacity-50"
            }`}
            sizes="(max-width: 768px) 100vw, 25vw"
            loading="lazy"
          />
        )}

        <AddToWishlistButton product={product} />

        {product?.status === "sale" && (
          <p className="absolute top-2 left-2 text-xs px-2 rounded-full z-10 border border-darkColor/50 group-hover:border-b-shop_light_gold hoverEffect group-hover:text-shop_light_gold">
            Sale!
          </p>
        )}

        {product?.status === "new" && (
          <p className="absolute top-2 left-2 text-xs px-2 rounded-full z-10 border border-darkColor/50 group-hover:border-b-shop_light_gold hoverEffect group-hover:text-shop_light_gold">
            New
          </p>
        )}

        {product?.status === "hot" && (
          <Link
            href="/deal"
            className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_gold hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
            />
          </Link>
        )}
      </div>

      <div className="p-3 flex flex-col">
        {categories.length > 0 && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {categories.join(", ")}
          </p>
        )}

        <Title className="text-sm line-clamp-1">
          {product?.name ?? "Unnamed Product"}
        </Title>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                size={8}
                className={
                  index < 4
                    ? "text-shop_lighter_green"
                    : "text-shop_lighter_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-xs text-shop_light_text tracking-wide">
            5 Reviews
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock:</p>
          <p
            className={`${
              product?.stock === 0
                ? "text-red-600"
                : "text-shop_light_gold/80 font-semibold"
            }`}
          >
            {product?.stock && product.stock > 0
              ? product.stock
              : "unavailable"}
          </p>
        </div>

        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />

        <AddToCartButton
          product={product}
          className="w-full sm:w-36 rounded-full"
        />
      </div>
    </div>
  );
};

export default ProductCard;
