import Link from "next/link";

const bundles = [
  {
    quantity: 5,
    price: 92,
    niche: 1,
    regular: 2,
    vendorFill: 2,
  },
  {
    quantity: 10,
    price: 183,
    niche: 3,
    regular: 4,
    vendorFill: 3,
  },
  {
    quantity: 20,
    price: 345,
    niche: 6,
    regular: 9,
    vendorFill: 5,
    popular: true,
  },
  {
    quantity: 30,
    price: 484,
    niche: 9,
    regular: 15,
    vendorFill: 6,
  },
  {
    quantity: 50,
    price: 770,
    niche: 11,
    regular: 26,
    vendorFill: 13,
  },
  {
    quantity: 100,
    price: 1467,
    niche: 22,
    regular: 45,
    vendorFill: 33,
  },
];

export default function BundleSection() {
  return (
    <section className="pt-0 pb-12">
      <div className="mb-8">
        <p className="uppercase tracking-[4px] text-cyan-500 text-sm font-semibold">
          Our Catalog
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Luxury bundles — at a glance
        </h2>

        <p className="mt-3 text-gray-600 text-lg max-w-2xl">
          Pick the bundle that fits your budget. All prices in USD at wholesale
          rates.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5">
        {bundles.map((bundle) => (
          <Link
            key={bundle.quantity}
            href={`/category/cosmetics?bundle=${bundle.quantity}`}
            className="relative flex flex-col min-h-45.5 rounded-[22px] border border-cyan-100 bg-white/40 px-7 py-7 hover:border-cyan-400 hover:shadow-sm transition-all duration-300"
          >
            {bundle.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-5 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
            )}

            <h3 className="text-[32px] font-bold leading-none mb-4">
              {bundle.quantity}pcs
            </h3>

            {/* Fixed-height content area so all cards stay identical */}
            <div className="h-14.5">
              <p className="text-gray-600 text-[15px] leading-6 whitespace-nowrap">
                {bundle.niche} Niche • {bundle.regular} Regular
              </p>

              <p className="italic text-gray-500 text-[15px] leading-6 whitespace-nowrap">
                Vendor fills {bundle.vendorFill} pcs
              </p>
            </div>

            <div className="mt-auto pt-4">
              <p className="text-cyan-700 text-[22px] font-bold">
                ${bundle.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-gray-100 px-6 py-4 text-gray-700">
        <span className="mr-2">💡</span>
        <span className="font-semibold">Arabian perfumes</span> — 50ml from
        $7/pc &amp; 100ml from $14/pc. The more you order, the lower the price.
        <span className="ml-2 text-cyan-600 font-medium">
          Browse the full list →
        </span>
      </div>
    </section>
  );
}