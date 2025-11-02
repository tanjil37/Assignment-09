import React from "react";
import { Droplets, Sun, Leaf } from "lucide-react";
import MyContainer from "./MyContainer";

const careTips = [
  {
    id: 1,
    title: "Watering Tips 💧",
    description:
      "Most indoor plants prefer slightly moist soil. Water only when the top inch of soil feels dry. Overwatering can cause root rot — always use pots with drainage holes.",
    icon: <Droplets className="w-10 h-10 text-emerald-600" />,
    bg: "bg-emerald-50",
  },
  {
    id: 2,
    title: "Sunlight Tips ☀️",
    description:
      "Keep your plants near bright, indirect sunlight. Direct sunlight may burn delicate leaves. Rotate plants every few days to ensure even growth.",
    icon: <Sun className="w-10 h-10 text-yellow-500" />,
    bg: "bg-yellow-50",
  },
  {
    id: 3,
    title: "Fertilizing Tips 🌿",
    description:
      "Feed your plants every 4–6 weeks during their growing season with a balanced, water-soluble fertilizer. Avoid over-fertilizing in winter months.",
    icon: <Leaf className="w-10 h-10 text-lime-600" />,
    bg: "bg-lime-50",
  },
];

const PlantCareTips = () => {
  return (
    <section className="py-16 bg-white" id="care-tips">
      <MyContainer className=" mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-emerald-800 mb-3">
          Plant Care Tips 🌸
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Learn how to keep your indoor plants healthy, happy, and thriving with these easy care tips.
        </p>

        {/* Tips Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {careTips.map((tip) => (
            <div
              key={tip.id}
              className={`${tip.bg} rounded-2xl border border-gray-100 p-6 text-left shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                {tip.icon}
                <h3 className="text-xl font-semibold text-emerald-800">
                  {tip.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default PlantCareTips;
