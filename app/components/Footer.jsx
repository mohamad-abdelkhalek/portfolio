import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ( isDarkMode ) => {
  return (
    <div className="mt-20">
      <div className="text-center">

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mailX} alt="mail" className="w-6 h-auto" />
          mohammad.abdelkhalek.dev@gmail.com
        </div>
      </div>

      <div
        className="text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Mohammad Abdelkhalek. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/mohamad-abdelkhalek"
              className="block transition-transform hover:scale-110"
            >
              <Image
                src={assets.githubX}
                alt="Github"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohammad-abdelkhalek"
              className="block transition-transform hover:scale-110"
            >
              <Image
                src={assets.linkedin}
                alt="LinkedIn"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/mhmd_abdelkhalek"
              className="block transition-transform hover:scale-110"
            >
              <Image
                src={assets.instagram}
                alt="Instagram"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
