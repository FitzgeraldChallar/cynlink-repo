"use client";

import AddToWishlistButton from "@/components/addtowishlistbutton";
import Container from "@/components/container";
import EmptyCart from "@/components/EmptyCart";
import NoAccess from "@/components/noaccess";
import { Title } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Address } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import useStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
  } = useStore();

  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const groupedItems = useStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [selectedAddress, setSelectedAddresses] = useState<Address | null>(null);

  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container>
          {groupedItems?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBag className="text-darkColor" />
                <Title className="text-lg text-black">Shopping Cart</Title>
              </div>

              <div className="grid lg:grid-cols-3 md:gap-8">
                
                {/* CART ITEMS */}
                <div className="lg:col-span-2 rounded-lg">
                  <div className="border bg-white rounded-md divide-y">

                    {groupedItems?.map(({ product }) => {
                      const itemCount = getItemCount(product?._id);

                      return (
                        <div
                          key={product?._id}
                          className="p-4 flex items-stretch gap-4"
                        >
                          
                          {/* PRODUCT IMAGE */}
                          {product?.images && (
                            <Link
                              href={`/product/${product?.slug?.current}`}
                              className="shrink-0 border rounded-md p-2 bg-white hover:shadow-sm transition"
                            >
                              <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
                                <Image
                                  src={urlFor(product?.images[0]).url()}
                                  alt="productImage"
                                  width={200}
                                  height={200}
                                  loading="lazy"
                                  className="object-contain max-h-full max-w-full"
                                />
                              </div>
                            </Link>
                          )}

                          {/* PRODUCT INFO */}
                          <div className="flex flex-col flex-1 w-full justify-start">
                            
                            {/* PRODUCT NAME */}
                            <h2 className="text-sm md:text-base font-semibold text-black">
                              {product?.name}
                            </h2>
                            <p className="text-sm capitalize">Variant: <span className="font-semibold">{product?.variant}</span></p>
                            <p className="text-sm capitalize">Status: <span className="font-semibold">{product?.status}</span></p>
                            <div className="mt-auto text-left flex items-center gap-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <AddToWishlistButton product={product} className="relative top-0 right-0" />
                                  </TooltipTrigger>
                                  <TooltipContent className="font-bold">
                                    Add to favorite
                                  </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <Trash onClick={() => {
                                      deleteCartProduct(product?._id);toast.success("Product deleted successfully");
                                    }}
                                      className="w-4 h-4 md:w-5 md:h-5 mr-1 text-gray-500 hover:text-red-600 hoverEffect"
                                    />
                                  </TooltipTrigger>
                                  <TooltipContent className="font-bold bg-red-600">
                                    Delete product
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>

                {/* SUMMARY */}
                <div>
                  summary (checkout component)
                </div>

              </div>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
};

export default CartPage;
