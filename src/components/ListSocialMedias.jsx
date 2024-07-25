import React, { useState, useEffect } from "react";

import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import seta from "../assets/icons/seta-acess.svg";

export const ListSocialMedias = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`container px-4 mx-auto relative lg:text-sm ${
        isMobile ? "w-full" : "w-[616px]"
      }`}
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col space-y-4 w-full">
          <a
            href="https://linkedin.com/in/eduardoamorim-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">linkedin</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </a>

          <a
            href="https://github.com/eduardoamorim-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={github} alt="GitHub" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">github</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </a>

          <a
            href="https://instagram.com/eduardoamorim.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={instagram} alt="Instagram" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">instagram</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
