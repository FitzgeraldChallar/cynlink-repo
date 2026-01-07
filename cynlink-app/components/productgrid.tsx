"use client"

import { useState, useEffect } from "react";
import HomeTabBar from "./hometabbar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./noproductavailable";
import ProductCard from "./productcard";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  // GROQ query: clean, no comments, guaranteed fields
  const query = `*[_type == "product" && variant == $variant] | order(name desc){
    _id,
    name,
    "category": category[]->title,
    slug,
    price,
    discount,
    stock,
    brand->{name},
    images,
    description,
    inStock,
    status,
    variant,
    isFeatured
  }`;

  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    if (!selectedTab) return; // don't fetch until selectedTab exists
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: Product[] = await client.fetch(query, params);
        setProducts(response);
        console.log("Fetched products:", response); // Debug: check name field
      } catch (error) {
        console.error("Product fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <div>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-gray-100 w-full mt-10">
          <div className="space-x-2 flex items-center text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </div>
        </div>
      ) : products?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products.map((product) => (
            // Use _id as unique key for list
            <AnimatePresence key={product._id}>
              <motion.div
                layout
                initial={{ opacity: 0.2 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </div>
  );
};

export default ProductGrid;
