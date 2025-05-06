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
      {/* Hero Section */}
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
                  href="/blog"
                  className="group relative px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10">Read My Blog</span>
                  <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </div>
            </div>
            {/* Right Column - Image Carousel */}
            <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative">
              <div className="relative w-130 h-103 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gray-900 flex items-center justify-center">
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">What I Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specializing in creating robust and scalable web applications with
              modern technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Building responsive and performant web applications using React, Node.js, and modern web technologies.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                ),
              },
              {
                title: "UI/UX Design",
                description:
                  "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                title: "Backend Development",
                description:
                  "Developing secure and scalable backend systems with Node.js, Express, and various databases.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "6+", label: "Projects Completed" },
              { number: "6+", label: "Happy Clients" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <h3 className="text-4xl font-bold text-white">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
