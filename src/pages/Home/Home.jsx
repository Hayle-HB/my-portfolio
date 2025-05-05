import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Haylemeskel1 from "../../assets/Images/Haylemesel_P1.jpg";
import Haylemeskel2 from "../../assets/Images/Haylemeskel_Photo_1_Hardwares.jpg";

const images = [Haylemeskel1, Haylemeskel2];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative pt-32 pb-20">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Text Content */}
            <div className="col-span-12 lg:col-span-6 space-y-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-gray-400 tracking-widest text-sm">
                    WELCOME TO MY WORLD
                  </span>
                  <h1 className="text-6xl md:text-7xl font-light tracking-tight">
                    Hi, I'm <span className="font-bold">Haylemeskel</span>
                  </h1>
                </div>
                <h2 className="text-2xl text-gray-400 font-light tracking-wide">
                  Full Stack Developer
                </h2>
                <p className="text-gray-400 leading-relaxed max-w-lg">
                  Crafting digital experiences with precision and creativity.
                  Transforming ideas into elegant solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a
                  href="#projects"
                  className="group relative px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="group relative px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10">View My Blog</span>
                  <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>
            </div>
            {/* Right Column - Image Carousel */}
            <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-140 h-100  rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gray-900 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={images[current]}
                    alt="Haylemeskel"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover object-center rounded-2xl"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* Bottom Decorative Line */}
          <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
