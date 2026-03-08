"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const EmptyCart = () => {
    const router = useRouter();
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="relative bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center">
          
          {/* Floating Cart Icon */}
          <div className="absolute -top-5 right-5 bg-blue-500 p-3 rounded-full shadow-md">
            <ShoppingCart className="text-white w-5 h-5" />
          </div>

          {/* Illustration */}
          <div className="mb-6 flex justify-center">
            <img
              src="/empty-cart-illustration.png"
              alt="Empty Cart"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your cart is feeling lonely
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            It looks like you haven’t added anything to your cart yet.
            Let’s change that and find some amazing products for you!
          </p>

          {/* Button */}
          <Button       
            onClick={() => router.push("/shop")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-xl transition duration-200">
            Discover Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;