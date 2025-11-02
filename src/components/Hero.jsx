import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
  {
    id: 1,
    title: "Bring Nature Indoors 🌿",
    subtitle: "Discover indoor plants that refresh your mind and home.",
    image: "https://i.ibb.co.com/k6BKNP9v/hero-1.jpg",
  },
  {
    id: 2,
    title: "Nurture Your Green Soul 🌱",
    subtitle: "Let’s grow together and make your space bloom beautifully.",
    image: "https://i.ibb.co.com/d0BgPts4/hero-2.jpg",
  },
  {
    id: 3,
    title: "Fresh Air, Fresh Vibes 🍃",
    subtitle: "Transform your home into a serene green sanctuary.",
    image: "https://i.ibb.co.com/QjQG3pFY/hero-3.jpg",
  },
  {
    id: 4,
    title: "Care for Every Leaf 🌸",
    subtitle: "Our experts guide you to nurture your plants with love and light.",
    image: "https://i.ibb.co.com/V06hVY8h/hero-4.jpg",
  },
  {
    id: 5,
    title: "Green is the New Calm 🌾",
    subtitle: "Bring peace, purity, and positivity into your living space.",
    image: "https://i.ibb.co.com/nM8vPmS4/hero-5.jpg",
  },
  {
    id: 6,
    title: "Your Home, Your Garden 🌼",
    subtitle: "Decorate beautifully and live sustainably with GreenNest.",
    image: "https://i.ibb.co.com/4z2Z9xx/hero-6.jpg",
  },
];


  return (
    <section className="relative">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Background image */}
            <div
              className="relative w-full h-[80vh] bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Animated text content */}
              <motion.div
                className="relative z-10 text-center text-white px-4 md:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-6">{slide.subtitle}</p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg"
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
