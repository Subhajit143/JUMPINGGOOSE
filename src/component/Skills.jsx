import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import logo1 from "../assets/Brands/Artboard 1_2 1.png";
import logo2 from "../assets/Brands/Asset 10@4x 1.png";
import logo3 from "../assets/Brands/Asset 1@4x 1.png";
import logo4 from "../assets/Brands/Asset 2@4x 1.png";
import logo5 from "../assets/Brands/Asset 3@4x 1.png";
import logo6 from "../assets/Brands/Asset 4@4x 1.png";
import logo7 from "../assets/Brands/Asset 5@4x 2.png";
import logo8 from "../assets/Brands/Asset 6@4x 1.png";

const skillsLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const Skills = () => {
  return (
    <>
      {/* Skills Section */}
      <motion.div
        className="bg-[#E6FF69] flex flex-col items-center text-center py-16 my-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          Why We're Loved
        </h1>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {skillsLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 0.9, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={logo}
                alt={`Skill Logo ${index + 1}`}
                className="w-full max-w-[80px] sm:max-w-[120px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Additional Section with Animation */}
      <motion.div
        className="grid items-center text-center sm:flex sm:text-start bg-black bg-opacity-25"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="py-4 px-2 grid place-content-center sm:px-32 sm:w-3/4">
          <motion.h1
            className="uppercase text-white text-4xl sm:text-7xl font-thin"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Delivering <span className="font-bold">stunning content</span> in{" "}
            <span className="font-bold">record time</span> is our{" "}
            <span className="font-bold">Superpower</span>
          </motion.h1>
         
        </div>

        <motion.div
          className="flex flex-col items-center text-center gap-10 p-4 sm:text-2xl sm:text-start sm:w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {[
            {
              title: "Pre-Production",
              description:
                "We get everything in place - from creative ideas to logistics - making sure we are set for a smooth and successful shoot.",
              timeline: "Timeline : 2-4 Days*",
            },
            {
              title: "Production",
              description:
                "Lights, camera, action! We capture your story with precision, ensuring every shot is on point.",
              timeline: "Timeline : 2-4 Days*",
            },
            {
              title: "Post-Production",
              description:
                "Our editors work their magic, adding the finishing touches to bring your vision to life.",
              timeline: "Timeline : 2-4 Days*",
            },
          ].map((item, index) => (
            <div key={index} className="w-2/3">
              <h1 className="font-bold text-3xl">{item.title}</h1>
              <p>{item.description}</p>
              <h1 className="font-semibold">{item.timeline}</h1>
              <hr className="border-t border-gray-600 my-4" />
            </div>
            
          ))}
             <motion.p
            className="py-5 font-bold text-lime-200 sm:text-3xl sm:flex underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            TRY US
          </motion.p>
        </motion.div>
    
      </motion.div>
      
    </>
  );
};

export default Skills;
