import React from 'react';
import { motion } from "framer-motion"; // Import Framer Motion
import Banner from "../assets/Banner.png";
import vdo from "../assets/Brands/ezgif-5-1f035b084a.mp4"

const Hero = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="h-[90vh] sm:h-[80vh]">
          {/* <img
            className="w-full h-full object-cover"
            src={Banner}
            alt="Banner"
          /> */}
          <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={vdo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        </div>
        {/* Text and Button Overlay */}
        <motion.div
          className="absolute inset-y-1/3 flex flex-col text-start px-4 sm:px-8 sm:w-2/5"
          initial={{ opacity: 0, y: 80 }} // Starting animation state
          animate={{ opacity: 1, y: 0 }} // Ending animation state
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2, // Delay for animation
          }}
        >
          <h1 className="text-3xl uppercase sm:text-6xl font-semibold text-white drop-shadow-md">
            script<span className="font-thin">strom</span> Studios <br />
            <span className="font-thin">
              where stories take shape, bold, creative, impactful
            </span>
          </h1>
          <p className="text-base font-thin sm:text-2xl text-gray-200 mt-4">
            The Content Production House of JUMPINGGOOSE, The Award Winning
            Strategic Design-led Creative Agency Focused on Fashion and
            Lifestyle
          </p>
          <motion.button
            className="mt-6 bg-yellow-300 w-2/3 text-black uppercase font-bold py-2 px-2 hover:bg-yellow-500 transition duration-700 sm:w-2/5"
            whileHover={{ scale: 1.1 }} // Button hover effect
            whileTap={{ scale: 0.95 }}
          >
            Upgrade your content
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
