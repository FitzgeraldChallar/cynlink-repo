export const dynamic = "force-dynamic";
import Container from '@/components/container';
import ProductCard from '@/components/productcard';
import { Title } from '@/components/ui/text';
import { getDealProducts } from '@/sanity/queries';
import React from 'react'

const DealPage = async () => {
    const products = await getDealProducts();
    return (
        <div className="py-10 bg-deal-bg">
            <Container>
                <Title className="text-black text-lg underline underline-offset-4 mb-5 decoration-1 uppercase tracking-wide">Hot Deals of the Week</Title>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {products?.map((product) => (
                        <ProductCard key={product?._id} product={product} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default DealPage

