import React from "react";
import PriceFormatter from "./priceformatter";
import clsx from "clsx";

interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string; // this will now work
}

const PriceView = ({ price, discount, className }: Props) => {
  return (
    <div className="flex items-center gap-2">
        {/* Main price - now merges external className */}
        <PriceFormatter
            amount={price}
            className={clsx("font-bold text-shop_gold", className)}
        />

        {/* Discounted price */}
        {price && discount && (
            <PriceFormatter
                amount={price + (discount * price) / 100}
                className="line-through font-normal text-shop_light_text"
            />
        )}
    </div>
  );
};

export default PriceView;
