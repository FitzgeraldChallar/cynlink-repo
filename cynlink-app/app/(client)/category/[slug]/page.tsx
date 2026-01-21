import Container from '@/components/container';
import { Title } from '@/components/ui/text';
import { getCategories } from '@/sanity/queries'
import React from 'react'
import CategoryProducts from '@/components/categoryproducts';

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title className="text-black text-lg">Products By Categories:{" "}
          <span className="font-bold text-shop_gold capitalize tracking-wide">{slug && slug}</span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  )
}

export default CategoryPage

