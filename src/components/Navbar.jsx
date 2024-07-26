import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 h-20 py-3 backdrop-blur-4xl border-b border-neutral-900">
      <div className="container px-4 mx-auto relative lg:text-sm ">
        <div className="flex justify-center items-center mt-3">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex flex-col items-start mr-5">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-transparent text-xl bg-clip-text font-Orbitron uppercase">
                eduardo amorim
              </span>
              <span className="text-sm tracking-tight">Software Developer</span>
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-xl mb-5">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-500 after:content-[''] after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="mb-5" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
