import React from "react";
import { Star } from "lucide-react";
import MyContainer from "./MyContainer";

const PlantOfTheWeek = () => {
  const plant = {
    name: "Peace Lily",
    image: "https://i.ibb.co.com/4z2Z9xx/hero-6.jpg",
    description:
      "The Peace Lily is known for its elegant white blooms and air-purifying qualities. It thrives in low light and brings calm to any room.",
    price: 24,
    rating: 4.9,
  };

  return (
    <MyContainer className="py-12 px-6 md:px-12 rounded-2xl  mt-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
           Plant of the Week
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover our weekly highlight — handpicked for its beauty, benefits, and easy care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl mx-auto">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={plant.image}
            alt={plant.name}
            className="rounded-2xl shadow-md w-full max-w-sm hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Info */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">{plant.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Star className="text-yellow-400 fill-yellow-400" size={18} />
            <p className="text-gray-700 font-medium">{plant.rating}</p>
          </div>
          <p className="text-gray-600 mt-4">{plant.description}</p>
          <p className="text-lg font-semibold text-green-700 mt-4">
            Price: ${plant.price}
          </p>

          <button className="btn btn-success mt-5 px-6 rounded-full text-white">
            Buy Now
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default PlantOfTheWeek;
