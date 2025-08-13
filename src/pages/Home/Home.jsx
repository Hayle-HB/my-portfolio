import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Haylemeskel1 from "../../assets/Images/Haylemesel_P1.jpg";
import Haylemeskel2 from "../../assets/Images/Haylemeskel_Photo_1_Hardwares.jpg";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiAmazonwebservices,
  SiJavascript,
  SiPython,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
  SiVuedotjs,
  SiLaravel,
  SiExpress,
  SiRedux,
  SiGraphql,
  SiJest,
  SiWebpack,
} from "react-icons/si";

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
                    Hi, I&apos;m <span className="font-bold">Haylemeskel</span>
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
                  href="/projects"
                  className="group relative px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
                >
                  <span className="relative z-10">View My Work</span>
                  <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
                <a
                  href="/contact-me"
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
              { number: "8+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
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

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse into some of my recent projects that showcase my
              expertise and creativity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kuriftu Resorts",
                category: "Business Platform",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                description: "Luxury resort booking and management platform",
                technologies: ["React", "Node.js", "MongoDB"],
                link: "/projects",
              },
              {
                title: "EcoFarmIQ",
                category: "IoT Solution",
                image:
                  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
                description: "Smart farming management with IoT integration",
                technologies: ["React", "Python", "Machine Learning"],
                link: "/projects",
              },
              {
                title: "ProgHubs",
                category: "Collaboration Tool",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
                description:
                  "Team collaboration and project management platform",
                technologies: ["React", "Node.js", "Real-time"],
                link: "/projects",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={project.link}
                        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-gray-400 text-sm">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 rounded text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">How I Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results and
              exceeding expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your vision, requirements, and goals through collaborative discussions",
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap, architecture, and technical specifications",
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
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with clean code, best practices, and regular updates",
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "Thorough testing, deployment, and ongoing support for your success",
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <div className="text-white">{process.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light mb-4">What Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real feedback from clients who have experienced the quality of my
              work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "Haylemeskel delivered an exceptional website that perfectly captured our brand vision. The attention to detail and user experience exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Founder, ResortChain",
                content:
                  "Working with Haylemeskel was a game-changer for our business. The booking platform he built increased our reservations by 40% in the first month.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, EcoFarm",
                content:
                  "The IoT integration and analytics dashboard Haylemeskel created transformed how we manage our farming operations. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/5">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-[90%] mx-auto"
          >
            <h2 className="text-4xl font-light mb-4">Technologies I Master</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks that power modern web
              applications
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of technologies */}
              <div className="flex gap-8 flex-shrink-0">
                {[
                  {
                    name: "React",
                    icon: <SiReact className="w-8 h-8" />,
                    category: "Frontend",
                  },
                  {
                    name: "Node.js",
                    icon: <SiNodedotjs className="w-8 h-8" />,
                    category: "Backend",
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "JavaScript",
                    icon: <SiJavascript className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "Python",
                    icon: <SiPython className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "Firebase",
                    icon: <SiFirebase className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "Tailwind",
                    icon: <SiTailwindcss className="w-8 h-8" />,
                    category: "Styling",
                  },
                  {
                    name: "Next.js",
                    icon: <SiNextdotjs className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Vue.js",
                    icon: <SiVuedotjs className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Laravel",
                    icon: <SiLaravel className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Express",
                    icon: <SiExpress className="w-8 h-8" />,
                    category: "Backend",
                  },
                  {
                    name: "Redux",
                    icon: <SiRedux className="w-8 h-8" />,
                    category: "State",
                  },
                  {
                    name: "GraphQL",
                    icon: <SiGraphql className="w-8 h-8" />,
                    category: "API",
                  },
                  {
                    name: "Jest",
                    icon: <SiJest className="w-8 h-8" />,
                    category: "Testing",
                  },
                  {
                    name: "Webpack",
                    icon: <SiWebpack className="w-8 h-8" />,
                    category: "Build",
                  },
                  {
                    name: "Git",
                    icon: <SiGit className="w-8 h-8" />,
                    category: "Version Control",
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="w-8 h-8" />,
                    category: "DevOps",
                  },
                  {
                    name: "AWS",
                    icon: <SiAmazonwebservices className="w-8 h-8" />,
                    category: "Cloud",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="text-center group flex-shrink-0 w-24"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{tech.category}</p>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 flex-shrink-0">
                {[
                  {
                    name: "React",
                    icon: <SiReact className="w-8 h-8" />,
                    category: "Frontend",
                  },
                  {
                    name: "Node.js",
                    icon: <SiNodedotjs className="w-8 h-8" />,
                    category: "Backend",
                  },
                  {
                    name: "TypeScript",
                    icon: <SiTypescript className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "JavaScript",
                    icon: <SiJavascript className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "Python",
                    icon: <SiPython className="w-8 h-8" />,
                    category: "Language",
                  },
                  {
                    name: "MongoDB",
                    icon: <SiMongodb className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "PostgreSQL",
                    icon: <SiPostgresql className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "Firebase",
                    icon: <SiFirebase className="w-8 h-8" />,
                    category: "Database",
                  },
                  {
                    name: "Tailwind",
                    icon: <SiTailwindcss className="w-8 h-8" />,
                    category: "Styling",
                  },
                  {
                    name: "Next.js",
                    icon: <SiNextdotjs className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Vue.js",
                    icon: <SiVuedotjs className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Laravel",
                    icon: <SiLaravel className="w-8 h-8" />,
                    category: "Framework",
                  },
                  {
                    name: "Express",
                    icon: <SiExpress className="w-8 h-8" />,
                    category: "Backend",
                  },
                  {
                    name: "Redux",
                    icon: <SiRedux className="w-8 h-8" />,
                    category: "State",
                  },
                  {
                    name: "GraphQL",
                    icon: <SiGraphql className="w-8 h-8" />,
                    category: "API",
                  },
                  {
                    name: "Jest",
                    icon: <SiJest className="w-8 h-8" />,
                    category: "Testing",
                  },
                  {
                    name: "Webpack",
                    icon: <SiWebpack className="w-8 h-8" />,
                    category: "Build",
                  },
                  {
                    name: "Git",
                    icon: <SiGit className="w-8 h-8" />,
                    category: "Version Control",
                  },
                  {
                    name: "Docker",
                    icon: <SiDocker className="w-8 h-8" />,
                    category: "DevOps",
                  },
                  {
                    name: "AWS",
                    icon: <SiAmazonwebservices className="w-8 h-8" />,
                    category: "Cloud",
                  },
                ].map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="text-center group flex-shrink-0 w-24"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{tech.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto text-center">
          <h2 className="text-4xl font-light mb-6">Let&apos;s Work Together</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Have a project in mind? I&apos;m always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <a
            href="/contact-me"
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
