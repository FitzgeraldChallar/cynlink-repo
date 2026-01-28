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
        <AccordionTrigger className="font-bold">
          {product?.name}: Characteristics
        </AccordionTrigger>

        <AccordionContent>
            <p className="flex items-center justify-between">
              Brand:{" "}
              {brand && (
                <span className="font-semibold tracking-wide text-bold">{brand.title}</span>
              )}
            </p>
            <p className="flex items-center justify-between">
              Collection:{" "}
                <span className="font-semibold tracking-wide text-bold">2025/2026</span>
            </p>
            <p className="flex items-center justify-between">
              Type:{" "}
                <span className="font-semibold tracking-wide text-bold">{product?.variant}</span>
            </p>
            <p className="flex items-center justify-between">
              Stock:{" "}
                <span className="font-semibold tracking-wide text-bold">
                    {product?.stock ? "Available" : "Out of Stock"}
                </span>
            </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;
