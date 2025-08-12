import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "tools", label: "Tools & Utilities" },
    { id: "business", label: "Business Solutions" },
  ];

  const projects = [
    {
      id: "kuriftu-resorts",
      title: "Kuriftu Resorts & Spa",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Luxury resort booking and management platform with advanced reservation system and guest services.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      liveUrl: "https://kurifturesorts.com/",
      githubUrl: "#",
      features: [
        "Booking System",
        "Payment Integration",
        "Admin Dashboard",
        "Guest Services",
        "Multi-language Support",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
    },
    {
      id: "kuriftu-twin",
      title: "KuriftuTwin",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Twin resort management system with synchronized booking and shared guest experiences.",
      technologies: [
        "React",
        "TypeScript",
        "Vercel",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "https://kuriftutwin.vercel.app/",
      githubUrl: "#",
      features: [
        "Twin Resort Sync",
        "Real-time Updates",
        "Shared Inventory",
        "Unified Booking",
        "Cross-resort Services",
      ],
      duration: "2 months",
      role: "Frontend Developer",
    },
    {
      id: "cassiopia-verification",
      title: "Cassiopia Verification Tool",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Advanced verification and validation system for data integrity and security compliance.",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT", "API Security"],
      liveUrl: "https://cassiopia-verification.proghubs.com/",
      githubUrl: "#",
      features: [
        "Data Validation",
        "Security Compliance",
        "Real-time Verification",
        "Audit Trails",
        "API Integration",
      ],
      duration: "4 months",
      role: "Full Stack Developer",
    },
    {
      id: "grand-hotel-menu",
      title: "Grand Hotel Menu",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Interactive digital menu system for luxury hotels with real-time updates and ordering capabilities.",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Local Storage",
        "Responsive Design",
      ],
      liveUrl: "https://menus.proghubs.com/",
      githubUrl: "#",
      features: [
        "Digital Menu",
        "Real-time Updates",
        "Order Management",
        "Multi-language",
        "Mobile Responsive",
      ],
      duration: "1 month",
      role: "Frontend Developer",
    },
    {
      id: "proghubs",
      title: "ProgHubs",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      description:
        "Comprehensive business platform for project management and team collaboration.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Real-time"],
      liveUrl: "https://proghubs.com/",
      githubUrl: "#",
      features: [
        "Project Management",
        "Team Collaboration",
        "Real-time Chat",
        "File Sharing",
        "Analytics Dashboard",
      ],
      duration: "6 months",
      role: "Full Stack Developer",
    },
    {
      id: "gbi-gubae",
      title: "GBI Gubae Website",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Modern corporate website for GBI Gubae with professional design and content management.",
      technologies: [
        "React",
        "Vercel",
        "Tailwind CSS",
        "Framer Motion",
        "SEO Optimized",
      ],
      liveUrl: "https://gbi-gubae.vercel.app/",
      githubUrl: "#",
      features: [
        "Corporate Design",
        "Content Management",
        "SEO Optimization",
        "Performance",
        "Mobile First",
      ],
      duration: "2 months",
      role: "Frontend Developer",
    },
    {
      id: "email-sender",
      title: "Email Sender",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Bulk email sending tool with template management and delivery tracking.",
      technologies: [
        "React",
        "Node.js",
        "EmailJS",
        "Template Engine",
        "Analytics",
      ],
      liveUrl: "https://emailsender.proghubs.com/",
      githubUrl: "#",
      features: [
        "Bulk Email",
        "Template System",
        "Delivery Tracking",
        "Analytics",
        "Contact Management",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
    },
    {
      id: "ecofarmiq",
      title: "EcoFarmIQ",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      description:
        "Smart farming management system with IoT integration and data analytics.",
      technologies: [
        "React",
        "Python",
        "IoT",
        "Data Analytics",
        "Machine Learning",
      ],
      liveUrl: "https://ecofarmiq.proghubs.com/",
      githubUrl: "#",
      features: [
        "IoT Integration",
        "Data Analytics",
        "Crop Management",
        "Weather Monitoring",
        "Smart Irrigation",
      ],
      duration: "5 months",
      role: "Full Stack Developer",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-gray-400 tracking-widest text-sm">
                MY PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-6xl font-light">
                Featured <span className="font-bold">Projects</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A collection of innovative web solutions and digital experiences
                that showcase my expertise in modern web development.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">8+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">4+</h3>
                <p className="text-gray-400">Categories</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">15+</h3>
                <p className="text-gray-400">Technologies</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">100%</h3>
                <p className="text-gray-400">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10">
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
                          >
                            Live Demo
                          </a>
                          <Link
                            to={`/projects/${project.id}`}
                            className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 rounded text-xs border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 rounded text-xs border border-white/10">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Meta */}
                      <div className="flex justify-between items-center text-sm text-gray-400">
                        <span>{project.duration}</span>
                        <span>{project.role}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-12 rounded-2xl border border-white/10"
          >
            <h2 className="text-4xl font-light mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to bring your ideas to life. I&apos;m
              excited to work on innovative projects that make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-me"
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
