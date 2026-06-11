import React from "react";
import {
  Gem,
  Crown,
  Package,
  MessageCircle,
  Camera,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Genuine luxury brands",
    description:
      "Tom Ford, Chanel, Dior, YSL, Amouage and more — sourced directly from trusted vendors.",
  },
  {
    icon: Crown,
    title: "Premium Arabian range",
    description:
      "Lattafa, Al Haramain, Armaf, Rasasi and others — 50ml & 100ml with tiered wholesale pricing.",
  },
  {
    icon: Package,
    title: "Flexible bundles",
    description:
      "Start from 5pcs all the way to 100pcs. Every bundle is curated for the best resale margin.",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp support",
    description:
      "No bots, no wait queues. You order, we respond personally — fast.",
  },
  {
    icon: Camera,
    title: "Photo confirmation",
    description:
      "Before shipping, we send a photo of the packed order so you know exactly what you're getting.",
  },
  {
    icon: Globe,
    title: "Ship anywhere",
    description:
      "We fulfill orders across Africa, Europe and beyond. Contact us for your shipping quote.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="pt-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase tracking-[4px] text-sm font-semibold text-cyan-500 mb-4">
          Why Resellers Choose Us
        </p>

        <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">
          Built for business owners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;