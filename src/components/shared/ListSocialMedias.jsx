import React, { useState, useEffect } from "react";

import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import seta from "../../assets/icons/seta-acess.svg";

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

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div
      className={`container px-4 mx-auto relative lg:text-sm ${
        isMobile ? "w-full" : "w-[616px]"
      }`}
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col space-y-4 w-full">
          <button
            onClick={() =>
              handleButtonClick("https://linkedin.com/in/eduardoamorim-dev")
            }
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray rounded-md w-full"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">linkedin</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </button>

          <button
            onClick={() =>
              handleButtonClick("https://github.com/eduardoamorim-dev")
            }
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray rounded-md w-full"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={github} alt="GitHub" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">github</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </button>

          <button
            onClick={() =>
              handleButtonClick("https://instagram.com/eduardoamorim.dev")
            }
            className="bg-customGray h-[61px] border-3 flex items-center hover:bg-hoverGray rounded-md w-full"
          >
            <div className="flex items-center w-full justify-between px-4">
              <div className="flex items-center">
                <img src={instagram} alt="Instagram" className="w-6 h-6 mr-3" />
                <span className="text-md uppercase">instagram</span>
              </div>
              <img src={seta} alt="acess" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
