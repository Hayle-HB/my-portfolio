import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  const projectsData = {
    "kuriftu-resorts": {
      id: "kuriftu-resorts",
      title: "Kuriftu Resorts & Spa",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Luxury resort booking and management platform with advanced reservation system and guest services.",
      longDescription:
        "Kuriftu Resorts & Spa is a comprehensive luxury resort management platform that revolutionizes the hospitality industry. The system provides seamless booking experiences, advanced guest management, and integrated payment processing. Built with modern web technologies, it offers real-time availability updates, personalized guest services, and comprehensive admin controls.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Payment Gateway",
        "Real-time Updates",
      ],
      liveUrl: "https://kurifturesorts.com/",
      githubUrl: "#",
      features: [
        "Booking System",
        "Payment Integration",
        "Admin Dashboard",
        "Guest Services",
        "Multi-language Support",
        "Real-time Availability",
        "Guest Portal",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
      challenges: [
        "Complex booking logic",
        "Payment gateway integration",
        "Real-time synchronization",
        "Multi-language support",
      ],
      solutions: [
        "Implemented advanced state management",
        "Integrated secure payment processing",
        "Used WebSocket for real-time updates",
        "Built scalable translation system",
      ],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    "kuriftu-twin": {
      id: "kuriftu-twin",
      title: "KuriftuTwin",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Twin resort management system with synchronized booking and shared guest experiences.",
      longDescription:
        "KuriftuTwin is an innovative twin resort management system that enables synchronized operations between two luxury properties. The platform provides unified booking experiences, shared inventory management, and cross-resort guest services. Built with modern React and TypeScript, it offers seamless integration and real-time synchronization.",
      technologies: [
        "React",
        "TypeScript",
        "Vercel",
        "Tailwind CSS",
        "Framer Motion",
        "Real-time Sync",
        "Shared State",
      ],
      liveUrl: "https://kuriftutwin.vercel.app/",
      githubUrl: "#",
      features: [
        "Twin Resort Sync",
        "Real-time Updates",
        "Shared Inventory",
        "Unified Booking",
        "Cross-resort Services",
        "Guest Transfer",
        "Shared Analytics",
      ],
      duration: "2 months",
      role: "Frontend Developer",
      challenges: [
        "State synchronization",
        "Real-time updates",
        "Cross-resort data management",
        "Performance optimization",
      ],
      solutions: [
        "Implemented Redux for state management",
        "Used WebSocket for real-time sync",
        "Built efficient data caching",
        "Optimized bundle size",
      ],
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    "cassiopia-verification": {
      id: "cassiopia-verification",
      title: "Cassiopia Verification Tool",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Advanced verification and validation system for data integrity and security compliance.",
      longDescription:
        "Cassiopia Verification Tool is a comprehensive data validation and security compliance platform. It provides advanced verification capabilities, real-time data validation, and comprehensive audit trails. The system ensures data integrity while maintaining high security standards and regulatory compliance.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JWT",
        "API Security",
        "Data Validation",
        "Audit Logging",
      ],
      liveUrl: "https://cassiopia-verification.proghubs.com/",
      githubUrl: "#",
      features: [
        "Data Validation",
        "Security Compliance",
        "Real-time Verification",
        "Audit Trails",
        "API Integration",
        "Custom Rules Engine",
        "Reporting Dashboard",
      ],
      duration: "4 months",
      role: "Full Stack Developer",
      challenges: [
        "Complex validation rules",
        "Security compliance",
        "Performance with large datasets",
        "Real-time processing",
      ],
      solutions: [
        "Built flexible rule engine",
        "Implemented security best practices",
        "Optimized database queries",
        "Used caching strategies",
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      ],
    },
    "grand-hotel-menu": {
      id: "grand-hotel-menu",
      title: "Grand Hotel Menu",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Interactive digital menu system for luxury hotels with real-time updates and ordering capabilities.",
      longDescription:
        "Grand Hotel Menu is an interactive digital menu system designed for luxury hotels. It provides real-time menu updates, ordering capabilities, and seamless guest experiences. The system is optimized for mobile devices and offers multi-language support for international guests.",
      technologies: [
        "React",
        "JavaScript",
        "CSS3",
        "Local Storage",
        "Responsive Design",
        "PWA",
        "Offline Support",
      ],
      liveUrl: "https://menus.proghubs.com/",
      githubUrl: "#",
      features: [
        "Digital Menu",
        "Real-time Updates",
        "Order Management",
        "Multi-language",
        "Mobile Responsive",
        "Offline Mode",
        "Guest Preferences",
      ],
      duration: "1 month",
      role: "Frontend Developer",
      challenges: [
        "Real-time updates",
        "Mobile optimization",
        "Offline functionality",
        "Multi-language support",
      ],
      solutions: [
        "Implemented WebSocket",
        "Used responsive design",
        "Built service worker",
        "Created translation system",
      ],
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      ],
    },
    proghubs: {
      id: "proghubs",
      title: "ProgHubs",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      description:
        "Comprehensive business platform for project management and team collaboration.",
      longDescription:
        "ProgHubs is a comprehensive business platform that streamlines project management and team collaboration. It features real-time communication, file sharing, task management, and analytics dashboards. The platform is designed to enhance productivity and improve team coordination.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Real-time",
        "File Upload",
        "Analytics",
      ],
      liveUrl: "https://proghubs.com/",
      githubUrl: "#",
      features: [
        "Project Management",
        "Team Collaboration",
        "Real-time Chat",
        "File Sharing",
        "Analytics Dashboard",
        "Task Tracking",
        "Team Calendar",
      ],
      duration: "6 months",
      role: "Full Stack Developer",
      challenges: [
        "Real-time collaboration",
        "File management",
        "Scalability",
        "User permissions",
      ],
      solutions: [
        "Implemented Socket.io",
        "Built file upload system",
        "Used microservices",
        "Created role-based access",
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
    "gbi-gubae": {
      id: "gbi-gubae",
      title: "GBI Gubae Website",
      category: "web",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Modern corporate website for GBI Gubae with professional design and content management.",
      longDescription:
        "GBI Gubae Website is a modern corporate website designed with professional aesthetics and optimal user experience. It features responsive design, SEO optimization, and content management capabilities. The website showcases the company's services and maintains high performance standards.",
      technologies: [
        "React",
        "Vercel",
        "Tailwind CSS",
        "Framer Motion",
        "SEO Optimized",
        "Performance",
        "Mobile First",
      ],
      liveUrl: "https://gbi-gubae.vercel.app/",
      githubUrl: "#",
      features: [
        "Corporate Design",
        "Content Management",
        "SEO Optimization",
        "Performance",
        "Mobile First",
        "Contact Forms",
        "Service Showcase",
      ],
      duration: "2 months",
      role: "Frontend Developer",
      challenges: [
        "SEO optimization",
        "Performance",
        "Mobile responsiveness",
        "Content management",
      ],
      solutions: [
        "Implemented meta tags",
        "Optimized images",
        "Used responsive design",
        "Built CMS integration",
      ],
      images: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
      ],
    },
    "email-sender": {
      id: "email-sender",
      title: "Email Sender",
      category: "tools",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Bulk email sending tool with template management and delivery tracking.",
      longDescription:
        "Email Sender is a comprehensive bulk email management tool that simplifies email marketing campaigns. It features template management, delivery tracking, analytics, and contact management. The system provides detailed insights into email performance and delivery success rates.",
      technologies: [
        "React",
        "Node.js",
        "EmailJS",
        "Template Engine",
        "Analytics",
        "Contact Management",
        "Delivery Tracking",
      ],
      liveUrl: "https://emailsender.proghubs.com/",
      githubUrl: "#",
      features: [
        "Bulk Email",
        "Template System",
        "Delivery Tracking",
        "Analytics",
        "Contact Management",
        "Campaign Management",
        "Performance Reports",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
      challenges: [
        "Email delivery",
        "Template system",
        "Analytics tracking",
        "Contact management",
      ],
      solutions: [
        "Integrated email service",
        "Built template engine",
        "Implemented tracking",
        "Created contact system",
      ],
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      ],
    },
    ecofarmiq: {
      id: "ecofarmiq",
      title: "EcoFarmIQ",
      category: "business",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      description:
        "Smart farming management system with IoT integration and data analytics.",
      longDescription:
        "EcoFarmIQ is an innovative smart farming management system that integrates IoT devices with data analytics to optimize agricultural operations. The platform provides real-time monitoring, predictive analytics, and automated irrigation systems to enhance crop yields and reduce resource consumption.",
      technologies: [
        "React",
        "Python",
        "IoT",
        "Data Analytics",
        "Machine Learning",
        "Real-time Monitoring",
        "Predictive Analytics",
      ],
      liveUrl: "https://ecofarmiq.proghubs.com/",
      githubUrl: "#",
      features: [
        "IoT Integration",
        "Data Analytics",
        "Crop Management",
        "Weather Monitoring",
        "Smart Irrigation",
        "Predictive Analytics",
        "Resource Optimization",
      ],
      duration: "5 months",
      role: "Full Stack Developer",
      challenges: [
        "IoT integration",
        "Data processing",
        "Real-time monitoring",
        "Predictive modeling",
      ],
      solutions: [
        "Built IoT API",
        "Implemented data pipeline",
        "Used WebSocket",
        "Applied ML algorithms",
      ],
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2032&q=80",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ],
    },
  };

  useEffect(() => {
    const projectData = projectsData[projectId];
    if (projectData) {
      setProject(projectData);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link
                to="/projects"
                className="hover:text-white transition-colors"
              >
                Projects
              </Link>
              <span>/</span>
              <span>{project.title}</span>
            </div>

            {/* Project Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <span className="text-gray-400 tracking-widest text-sm">
                    {project.category.toUpperCase()}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-light">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Duration</h3>
                    <p className="text-gray-400">{project.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Role</h3>
                    <p className="text-gray-400">{project.role}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                  >
                    View Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-light">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-light">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-light">Challenges & Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-400">
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-red-400 mt-2">•</span>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-400">
                      Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <span className="text-green-400 mt-2">•</span>
                          <span className="text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Project Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-light">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Category</span>
                    <p className="text-white">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Duration</span>
                    <p className="text-white">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Role</span>
                    <p className="text-white">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Technologies</span>
                    <p className="text-white">
                      {project.technologies.length} technologies
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-white text-black text-center rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 border border-white/20 text-center rounded-lg hover:border-white transition-colors duration-300"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
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
              Interested in Similar Work?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your project to life with
              the same level of quality and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact-me"
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
