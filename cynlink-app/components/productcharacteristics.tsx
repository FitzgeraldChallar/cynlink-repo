import React from 'react';
import { Product } from '@/sanity.types';
import { getBrand } from '@/sanity/queries';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const ProductCharacteristics = async ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const brand = product?.slug?.current
    ? await getBrand(product.slug.current)
    : null;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          {product?.name}: Characteristics
        </AccordionTrigger>

        <AccordionContent>
            <p className="flex items-center justify-between">
              Brand:{" "}
              {brand && (
                <span className="font-semibold tracking-wide">{brand.title}</span>
              )}
            </p>
            <p className="flex items-center justify-between">
              Collection:{" "}
                <span className="font-semibold tracking-wide">2025/2026</span>
            </p>
            <p className="flex items-center justify-between">
              Type:{" "}
                <span className="font-semibold tracking-wide">{product?.variant}</span>
            </p>
            <p className="flex items-center justify-between">
              Stock:{" "}
                <span className="font-semibold tracking-wide">
                    {product?.stock ? "Available" : "Out of Stock"}
                </span>
            </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
