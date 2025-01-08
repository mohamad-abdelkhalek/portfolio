import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4"
    >
      <div>
        <Image
          src={assets.profile_img}
          alt="My image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Mohammad Abdelkhalek
        <Image src={assets.hand_icon} alt="Hand icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Full-Stack Developer Based in Lebanon.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Full-Stack Developer skilled in the MERN stack, creating dynamic,
        scalable web applications with seamless user experiences and robust
        backends.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
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
        </a>

        <a
          href="/Mohammad_Abdelkhalek_CV.pdf"
          download="Mohammad_Abdelkhalek_CV.pdf"
          className="group relative inline-flex items-center gap-2 px-8 py-3 
          border border-gray-500 rounded-full
          transition-all duration-300 ease-in-out
         hover:bg-gray-100 hover:border-gray-700
          focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
          active:scale-95 bg-white dark:text-black"
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
        </a>
      </div>
    </div>
  );
};

export default Header;
