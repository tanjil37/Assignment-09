import React from 'react';
import { Link } from 'react-router';


const PlantCard = ({ plant }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-emerald-800">{plant.plantName}</h3>

        <p className="text-sm text-gray-600 mt-1">{plant.category}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full font-medium">
              ⭐ {plant.rating.toFixed(1)}
            </span>
            <span className="text-gray-700 font-semibold">৳ {plant.price}</span>
          </div>
          <div className="text-sm text-gray-500">Stock: {plant.availableStock}</div>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-3">{plant.description}</p>

        <div className="mt-6">
          <Link
            to={`/plants/${plant.plantId}`}
            className="inline-block w-full text-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PlantCard;
