import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = (isDarkMode) => {
  return (
    <motion.div
      id="about"
      className="w-full px-4 sm:px-6 md:px-[12%] py-6 sm:py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 my-10 sm:my-16 lg:my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-48 sm:w-64 md:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full"
        >
          <p className="mb-6 sm:mb-8 lg:mb-10 max-w-2xl font-Ovo text-center lg:text-left">
            Full-Stack Developer proficient in the MERN stack, with a strong
            foundation in building dynamic, responsive, and scalable web
            applications. Skilled in designing seamless user interfaces,
            developing robust backends, and managing efficient databases,
            ensuring end-to-end application performance and user satisfaction.
            Passionate about leveraging modern web technologies to create
            impactful digital solutions.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl
                p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1
                duration-500 hover:shadow-black dark:border-white
                dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-6 sm:w-7 mt-2 sm:mt-3"
                />
                <h3
                  className="my-3 sm:my-4 font-semibold text-gray-700 text-sm sm:text-base
                dark:text-white"
                >
                  {title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-4 sm:my-6 text-gray-700 font-Ovo text-center lg:text-left dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, duration: 0.6 }}
            className="flex items-center flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 sm:w-12 md:w-14 
                aspect-square border border-gray-400 rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-5 md:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
