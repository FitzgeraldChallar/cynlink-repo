import React from "react";

const steps = [
  {
    number: "1",
    title: "Pick your category",
    description:
      "Choose between our curated Luxury Bundles (designer brands) or Arabian Perfumes (50ml & 100ml).",
  },
  {
    number: "2",
    title: "Build your order",
    description:
      "Select your bundle size, browse the perfume catalog with photos & descriptions, and pick your pieces.",
  },
  {
    number: "3",
    title: "Send via WhatsApp",
    description:
      "Your full order summary is auto-generated. One tap sends it directly to our WhatsApp for confirmation.",
  },
  {
    number: "4",
    title: "Pay & receive",
    description:
      "We confirm pricing, collect payment, and your vendor packs and ships your order. We send a photo confirmation.",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <p className="uppercase tracking-[4px] text-sm font-semibold text-cyan-500 mb-4">
            Simple Process
          </p>

          <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
            How it works
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl">
            From browsing to delivery — we keep it straightforward for
            resellers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-cyan-100 rounded-3xl p-8 min-h-70 hover:shadow-lg transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xl font-bold mb-8">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

