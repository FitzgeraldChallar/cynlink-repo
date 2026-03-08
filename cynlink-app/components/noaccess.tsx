import React from "react";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const NoAccess = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center space-y-6">
        
        {/* Title */}
        <div>
          <h2 className="text-lg font-sans font-semibold tracking-wide text-shop_gold">
            <Logo />
          </h2>
          <h3 className="text-2xl font-sans text-center font-bold text-gray-800">
            Welcome Back!
          </h3>
          <p className="text-sm text-gray-500 font-sans mt-2">
            Log in to view your cart items and checkout.
            Don’t miss out on your favorite products!
          </p>
        </div>

        {/* Sign In Button */}
        <SignInButton mode="modal">
         <Button
          className="block w-full bg-shop_gold text-white py-2.5 rounded-md font-medium hover:opacity-90 transition"
         >
          Sign In
         </Button>
        </SignInButton>
         
        {/* Divider */}
        <div className="text-sm text-gray-400">
          Don’t have an account?
        </div>

        {/* Create Account Button */}
        <SignUpButton mode="modal">
         <Button
          className="block bg-white w-full border border-gray-300 py-2.5 rounded-md font-medium hover:bg-gray-50 transition text-black"
         >
          Create an account
         </Button>
        </SignUpButton>
         
      </div>
    </div>
  );
};

export default NoAccess;
