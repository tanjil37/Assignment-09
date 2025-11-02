import React from "react";
import MyContainer from "./MyContainer";

const experts = [
  {
    id: 1,
    name: "Sadia Rahman",
    specialization: "Indoor Plant Care Specialist",
    image: "https://i.ibb.co.com/RkNGsmdy/Green-expart-1.jpg",
  },
  {
    id: 2,
    name: "Arif Hossain",
    specialization: "Succulent & Cactus Expert",
    image: "https://i.ibb.co.com/4ZGw2m6X/Green-expart-2.jpg",
  },
  {
    id: 3,
    name: "Nabila Ahmed",
    specialization: "Air-Purifying Plants Advisor",
    image: "https://i.ibb.co.com/39T8QRGg/Green-expart-3.jpg",
  },
  {
    id: 4,
    name: "Tanvir Alam",
    specialization: "Hydroponic Plant Consultant",
    image: "https://i.ibb.co.com/fzByCZhB/Green-expart-4.jpg",
  },
];

const GreenExperts = () => {
  return (
    <section className="py-16 bg-white" id="experts">
      <MyContainer className=" mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-emerald-800 mb-3">
          Meet Our Green Experts 🌱
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our passionate team of plant care specialists is here to help you
          nurture your green companions and create a thriving indoor oasis.
        </p>

        {/* Experts Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-emerald-800">
                {expert.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {expert.specialization}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default GreenExperts;
