import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { id } = useParams(); // get plantId from URL
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.plantId === parseInt(id));
        setPlant(found);
      });
  }, [id]);

  const handleBooking = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Consultation booked successfully");
  };

  if (!plant)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <img
          src={plant.image}
          alt={plant.plantName}
          className="rounded-2xl w-full h-[400px] object-cover shadow-md"
        />

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-800 mb-2">
            {plant.plantName}
          </h2>
          <p className="text-gray-600 mb-4">{plant.description}</p>

          <div className="space-y-2">
            <p>
              <span className="font-semibold text-emerald-700">Category:</span>{" "}
              {plant.category}
            </p>
            <p>
              <span className="font-semibold text-emerald-700">Price:</span> ৳
              {plant.price}
            </p>
            <p>
              <span className="font-semibold text-emerald-700">Rating:</span>{" "}
              {plant.rating} ⭐
            </p>
            <p>
              <span className="font-semibold text-emerald-700">Available:</span>{" "}
              {plant.availableStock} in stock
            </p>
            <p>
              <span className="font-semibold text-emerald-700">
                Provider:
              </span>{" "}
              {plant.providerName}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-14 bg-emerald-50 p-8 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
          Book a Consultation
        </h3>

        <form
          onSubmit={handleBooking}
          className="grid sm:grid-cols-2 gap-6 max-w-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="input input-bordered w-full"
          />
          <button
            type="submit"
            className="btn btn-success w-full sm:col-span-2 mt-3"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
