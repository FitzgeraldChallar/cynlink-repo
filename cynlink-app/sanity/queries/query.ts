import { defineQuery } from "next-sanity";
import { LATEST } from "sanity";  

export const BRANDS_QUERY = defineQuery(`
  *[_type == "brand"] | order(name asc) [0...8]
`);

export const LATEST_BLOG_QUERY = defineQuery(
  `*[_type == 'blog' && isLatest == true] | order(name asc) [0...4] {
   ...,
   blogcategories[]->{
   title
  }
  }`
);

export const DEAL_PRODUCTS = defineQuery(
  `*[_type == "product" && defined(status) && status match "hot"] | order(name asc) {
    ...,
    category[] { 
      _ref, 
      _type, 
      _key, 
      "title": @->title 
    }
  }`
);


export const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    price,
    discount,
    stock,
    status,
    category[]{
      _key,
      _type,
      _ref,
      "title": @->title
    },
    brand,
    description,
    isFeatured,
    variant,
    images[]{
      _key,
      _type,
      asset->{ _ref, _type, url },
      crop,
      hotspot
    }
  }`
);

export const BRAND_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0]{
    "brand": brand->{
      title,
      slug,
      description,
      image
    }
  }
`);



