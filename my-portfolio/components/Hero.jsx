"use client"; // Important for Framer Motion

import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["Web", "Development"];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="hero w-full flex justify-center items-center min-h-screen bg-red-200">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full px-6 gap-8">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col space-y-4 px-4 sm:px-6 md:px-8">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi! I am
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Borey REAM
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-orange-500 flex flex-wrap sm:space-x-4 overflow-hidden"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                className="mr-2 sm:mr-4"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/98/0f/8e/980f8edaae405546073f9a735058a7df.jpg"
            alt="Profile"
            className="w-[300px] h-[500px] object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
