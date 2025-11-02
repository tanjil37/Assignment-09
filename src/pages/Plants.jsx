import React, { useEffect, useState } from "react";
import MyContainer from "../components/MyContainer";
import PlantCard from "../components/PlantCard";
import { section } from "framer-motion/client";

const Plants = () => {
    const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch(() => setPlants([]));
  }, []);


  return (
    <section className="py-16 bg-white">
      <MyContainer className="text-center px-6 mx-auto">
      <h2 className=" text-3xl font-bold text-emerald-800 mb-3">Top Rated Indoor Plants</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore our collection of the most loved indoor plants — handpicked for their beauty and easy care.
        </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {plants.slice(0, 6).map((p) => (
            <PlantCard key={p.plantId} plant={p} />
          ))}
        </div>
    </MyContainer>
    </section>
  );
};

export default Plants;
