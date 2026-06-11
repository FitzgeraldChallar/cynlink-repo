"use client";

import React, { useEffect, useState } from "react";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./noproductavailable";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./productcard";

interface Props {
  categories: Category[];
  slug: string;
  bundleSize?: number;
}

const CategoryProducts = ({
  categories,
  slug,
  bundleSize,
}: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;

    setCurrentSlug(newSlug);

    router.push(`/category/${newSlug}`, {
      scroll: false,
    });
  };

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);

    try {
      const query = `
        *[
          _type == 'product' &&
          references(*[_type == "category" && slug.current == $categorySlug]._id)
        ]
        | order(name asc) {
          ...,
          "category": category[]->{
            _key,
            title
          }
        }`;

      const data = await client.fetch(query, {
        categorySlug,
      });

      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [currentSlug]);

  return (
    <div className="py-5 flex flex-col md:flex-row items-start gap-5">
      <div className="flex flex-col md:min-w-40 border">
        {categories?.map((item) => (
          <Button
            onClick={() =>
              handleCategoryChange(
                item?.slug?.current as string
              )
            }
            key={item?._id}
            className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-shop_light_gold hover:text-white font-semibold hoverEffect border-b last:border-b-0 transition-colors capitalize
            ${
              item?.slug?.current === currentSlug
                ? "bg-shop_light_gold text-white border-shop_light_gold"
                : ""
            }`}
          >
            <p className="w-full text-left px-2">
              {item?.title}
            </p>
          </Button>
        ))}
      </div>

      <div className="flex-1">
        {bundleSize ? (
          <div className="mb-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4">
            <h2 className="text-lg font-bold text-cyan-900">
              Building {bundleSize}pcs Bundle
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              Select up to {bundleSize} perfumes for
              this bundle.
            </p>
          </div>
        ) : null}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full">
            <div className="flex items-center space-x-2 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Product is Loading...</span>
            </div>
          </div>
        ) : products?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {products?.map((product: Product) => (
              <AnimatePresence key={product._id}>
                <motion.div>
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ) : (
          <NoProductAvailable
            selectedTab={currentSlug}
            className="mt-0 w-full"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;