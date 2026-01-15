import { defineQuery } from "next-sanity";

export const BRANDS_QUERY = defineQuery(`
  *[_type == "brand"] | order(name asc) [0...7]
`);
