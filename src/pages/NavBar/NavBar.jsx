import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Blog", to: "/blog" },
  { name: "Gallery", to: "/gallery" },
  { name: "Contact", to: "/contact-me" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-24">
          {/* Logo with creative design */}
          <NavLink to="/" className="group select-none">
            <span className="text-2xl font-light tracking-widest text-white">
              H<span className="font-bold">AYLEMESKEL</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `relative uppercase font-medium tracking-wider px-2 py-1 transition-colors duration-300 text-sm
                  ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`block h-[2px] mt-1 rounded-full transition-all duration-300
                        ${
                          isActive
                            ? "w-full bg-white/80"
                            : "w-0 bg-transparent group-hover:w-full group-hover:bg-white/40"
                        }
                      `}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 focus:outline-none"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`absolute h-[1px] w-6 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute h-[1px] w-6 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-[1px] w-6 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-black/95 backdrop-blur-md`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `block uppercase font-medium tracking-wider text-sm px-4 py-3 rounded transition-colors duration-300
                  ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
