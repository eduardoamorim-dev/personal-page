import { ListSocialMedias } from "./ListSocialMedias";

import seta from "../assets/icons/seta-right.svg";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-32">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
        🧑‍💻 Hello, welcome. I'm a{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-transparent bg-clip-text">
          software developer{" "}
        </span>{" "}
      </h2>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
        originally from Brazil 🇧🇷
      </h2>

      <p className="mt-16 text-xl text-center text-neutral-500 max-w-4xl">
        You can find me online at the links below
      </p>

      <div className="mt-10">
        <ListSocialMedias />
      </div>

      <a href="#" className="flex items-center justify-start space-x-2 mt-5">
        <span className="bg-gradient-to-r from-gray-300 to-gray-500 text-transparent bg-clip-text font-Orbitron uppercase">
          {/* Get to know me */} Website under construction
        </span>
        {/* <img src={seta} alt="seta" className="w-4 h-4" /> */}
      </a>
    </div>
  );
};

export default HeroSection;
