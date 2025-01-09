import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = (isDarkMode) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-4 sm:px-6 md:px-[12%] py-6 sm:py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Discover my work transforming complex challenges into elegant,
        user-friendly solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
            relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5
            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
            duration-500 group-hover:bottom-7"
            >
              <div>
              <a target="_blank" rel="noopener noreferrer" href={project.link}><h2 className="font-semibold">{project.title}</h2></a>
              <a target="_blank" rel="noopener noreferrer" href={project.link}><p className="text-sm text-gray-700">{project.description}</p></a>
              </div>

              <div
                className="border rounded-full border-black w-9
              aspect-square flex items-center justify-center
              shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <a target="_blank" rel="noopener noreferrer" href={project.link}><Image src={assets.send_icon} alt="Send icon" className="w-5" /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
