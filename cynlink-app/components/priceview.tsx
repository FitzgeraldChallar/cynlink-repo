import React from "react"
import PriceFormatter from "./priceformatter";
interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?: string;
}

const PriceView = ({ price, discount, className}: Props) => {
  return (
     <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className="font-bold text-shop_gold " />
        {price && discount && ( 
            <PriceFormatter amount={price + (discount * price) / 100}
            className="line-through font-normal text-shop_light_text"
            /> 
        )}
     </div>
  );
};

export default PriceView
