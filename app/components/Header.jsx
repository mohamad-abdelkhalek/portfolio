import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      className="w-11/12 max-w-3xl mx-auto min-h-screen flex flex-col items-center justify-center gap-4 py-8"
      role="banner"
    >
      <div className="relative">
        <Image
          src={assets.profile_img}
          alt="Mohammad Abdelkhalek"
          className="rounded-full w-32 h-32 object-cover"
          priority
          width={128}
          height={128}
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo animate-fade-in">
        Hi! I'm Mohammad Abdelkhalek
        <Image
          src={assets.hand_icon}
          alt=""
          className="w-6 h-6 animate-wave"
          aria-hidden="true"
          width={24}
          height={24}
        />
      </h3>

      <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo text-center leading-tight">
        Full-Stack Developer
        <span className="block text-gray-600">Based in Lebanon.</span>
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo text-lg text-gray-700 text-center">
        Full-Stack Developer skilled in the MERN stack, creating dynamic,
        scalable web applications with seamless user experiences and robust
        backends.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white 
                   flex items-center gap-2 hover:bg-gray-900 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          aria-label="Contact Mohammad Abdelkhalek"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 h-4"
            aria-hidden="true"
            width={16}
            height={16}
          />
        </a>

        <a
          href="/Mohammad_Abdelkhalek_CV.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 
                   flex items-center gap-2 hover:bg-gray-50 transition-colors
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          aria-label="Download Mohammad Abdelkhalek's resume"
        >
          My resume
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4 h-4"
            aria-hidden="true"
            width={16}
            height={16}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
