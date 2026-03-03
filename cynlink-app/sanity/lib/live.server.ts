// sanity/lib/live.server.ts
import { defineLive } from "next-sanity/live";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN;
if (!token) throw new Error("SANITY_API_READ_TOKEN is not set");

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  fetchOptions: { revalidate: 0 }
});
