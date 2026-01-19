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
