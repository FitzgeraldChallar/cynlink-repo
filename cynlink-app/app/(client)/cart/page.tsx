"use client";

import AddToWishlistButton from "@/components/addtowishlistbutton";
import Container from "@/components/container";
import EmptyCart from "@/components/EmptyCart";
import NoAccess from "@/components/noaccess";
import PriceFormatter from "@/components/priceformatter";
import QuantityButtons from "@/components/QuantityButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/ui/text";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Address } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import useStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [addresses, setAddresses] = useState<Address[] | null>(null)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const fetchAddresses=async()=>{
    setLoading(true)
    try {
      const query=`*[_type == "address"] | order(publishedAt desc)`;
      const data = await client.fetch(query);
      setAddresses(data);
      const defaultAddress = data.find((addr: any) => addr.default);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress);
      } else if (data.length > 0) {
        setSelectedAddress(data[0]); // Optional: select first address if no default
      }
    } catch (error) {
      console.log("Addresses fetching error:", error)
    } finally {
      setLoading(false)
    }
  };
  useEffect(() =>{
    fetchAddresses();
  },[])
  const handleResetCart=()=>{
    const confirmed = window.confirm("Are your sure you want to reset your cart?")
    if (confirmed) {
      resetCart();
      toast.success("Cart reset successfully")
    }
  }

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
                          <div className="flex flex-col items-start justify-between h-36 md:h-44 p-0.5 md:p-1">
                            <PriceFormatter 
                              amount={(product?.price as number) * itemCount}
                              className="font-bold text-lg"
                            />
                            <QuantityButtons product={product} />
                          </div>
                        </div>
                      );
                    })}
                    <Button 
                      onClick={(handleResetCart)}
                      className="m-5 font-semibold"
                      variant="destructive"
                    >
                      Reset Cart
                    </Button>
                  </div>
                </div>

                {/* SUMMARY */}
                <div>
                  <div className="lg:col-span-2">
                    <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                      <h2 className="text-xl font-sans font-semibold mb-4">Order Summary</h2>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>SubTotal</span>
                          <PriceFormatter amount={getSubTotalPrice()} />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Discount</span>
                          <PriceFormatter amount={getSubTotalPrice() - getTotalPrice()} />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between font-semibold text-lg">
                          <span>Total</span>
                          <PriceFormatter 
                            amount={useStore?.getState().getTotalPrice()} 
                            className="text-lg font-bold text-black"
                          />
                        </div>
                        <Button className="w-full rounded-full font-semibold tracking-wide bg-shop_gold hoverEffect">
                          {loading ?"Please wait..." : "Proceed to Checkout!"}
                        </Button>
                      </div>
                    </div>
                    {addresses && <div className="bg-white rounded-md mt-5">
                      <Card>
                        <CardHeader>
                          <CardTitle className="font-sans">Delivery Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <RadioGroup defaultValue={addresses?.find((addr) => addr.default)?._id.toString()}>
                            {addresses?.map((address)=>(
                              <div 
                                key={address?._id}
                                onClick={()=>setSelectedAddress(address)}
                                className={`flex items-center space-x-2 mb-4 cursor-pointer ${selectedAddress?._id === address?._id && "text-shop_gold"}`}
                              >
                                <RadioGroupItem value={address?._id.toString()} />
                              </div>
                            ))}
                          </RadioGroup>
                        </CardContent>
                      </Card>
                    </div>}
                  </div>
                </div>
                {/* Order summary for mobile view */}
                <div className="md:hidden fixed bottom-0 left-0 w-full bg-white pt-2">
                  <div className="bg-white p-4 rounded-lg border mx-4">
                    <h2>Order Summary</h2>
                  </div>
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
