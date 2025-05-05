import React, { useState, useEffect } from "react";

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

  const navItems = ["Home", "About", "Projects", "Blog", "Skills", "Contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between h-24">
          {/* Logo with creative design */}
          <a href="/" className="group">
            <span className="text-2xl font-light tracking-widest text-white">
              H<span className="font-bold">AYLEMESKEL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-widest"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
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
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
