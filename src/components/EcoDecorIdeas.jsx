// src/components/EcoDecorIdeas.js
import React from 'react';
import MyContainer from './MyContainer';

const EcoDecorIdeas = () => {
  const decorIdeas = [
    {
      title: 'Hanging Gardens',
      description: 'Elevate your space with trailing ivy or pothos in macrame hangers—perfect for adding vertical greenery without taking floor space.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      icon: '🌿'
    },
    {
      title: 'Living Walls',
      description: 'Create a lush backdrop with mounted ferns and succulents on a DIY vertical garden wall—ideal for urban apartments.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      icon: '🌼'
    },
    {
      title: 'Tabletop Terrariums',
      description: 'Assemble mini ecosystems with air plants and glass globes on coffee tables for a whimsical, low-maintenance touch.',
      image: 'https://www.meandmyglass.co.uk/wp-content/uploads/2021/04/patio-garden-glass-table.jpg',
      icon: '🌱'
    },
    {
      title: 'Bathroom Oasis',
      description: 'Transform your bathroom into a spa with humidity-loving peace lilies and spider plants—boosts moisture and serenity.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      icon: '💧'
    }
  ];

  return (
    <section className="bg-green-50 py-10 md:py-16">
      <MyContainer className=" mx-auto px-6 text-center">
       

         <h2 className="text-3xl font-bold text-emerald-800 mb-3">
           Eco Decor Ideas
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our passionate team of plant care specialists is here to help you
          nurture your green companions and create a thriving indoor oasis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorIdeas.map((idea, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={idea.image} 
                alt={idea.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="text-3xl mb-3">{idea.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{idea.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default EcoDecorIdeas;