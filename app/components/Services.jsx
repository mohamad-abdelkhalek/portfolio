import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-4 sm:px-6 md:px-[12%] py-6 sm:py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Full-Stack Developer proficient in the MERN stack, specializing in
        building dynamic and scalable web applications with intuitive user
        interfaces and strong backend architectures.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12
             hover:shadow-black cursor-pointer hover:bg-lightHover
             hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="Services icon" className="w-10" />
            <h3 className="text-lg font-semibold my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
