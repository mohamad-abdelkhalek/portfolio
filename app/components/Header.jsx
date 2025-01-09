import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="My image"
          className="rounded-full w-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm{" "}
        <div className="font-semibold font-Ovo">
          Mohammad Abdelkhalek
        </div>
        <Image src={assets.hand_icon} alt="Hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[61px] font-Ovo"
      >
        Full-Stack Software Engineer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        Full-Stack Developer skilled in creating dynamic, scalable web
        applications with seamless user experiences and robust backends.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black
        text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow white"
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Mohammad_Abdelkhalek_CV.pdf"
          download="Mohammad_Abdelkhalek_CV.pdf"
          className="px-10 py-3 border rounded-full border-gray-500 flex
          items-center gap-2 bg-white dark:text-black"
          aria-label="Download Resume"
        >
          <span className="font-medium">My Resume</span>
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />

          {/* loading state */}
          <span className="absolute inset-0 flex items-center justify-center bg-white/80 invisible group-data-[loading=true]:visible">
            <span className="w-5 h-5 border-2 border-gray-500 border-t-transparent rounded-full animate-spin" />
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
