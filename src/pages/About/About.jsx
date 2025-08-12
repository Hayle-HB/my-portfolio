import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Haylemeskel1 from "../../assets/Images/Haylemesel_P1.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

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

  const tabs = [
    { id: "story", label: "My Story" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" },
  ];

  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
    tools: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
    ],
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with cross-functional teams.",
      technologies: [
        "JavaScript",
        "Python",
        "PostgreSQL",
        "Express.js",
        "Tailwind",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studio",
      period: "2020 - 2021",
      description:
        "Built interactive user interfaces and implemented modern design patterns. Worked closely with designers to create seamless user experiences.",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Figma"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description:
        "Specialized in Software Engineering with focus on web development and database management.",
      gpa: "3.8/4.0",
    },
    {
      degree: "Full Stack Web Development",
      institution: "Coding Bootcamp",
      period: "2020",
      description:
        "Intensive 6-month program covering modern web technologies and best practices.",
      gpa: "A+",
    },
  ];

  const achievements = [
    {
      title: "Best Developer Award",
      organization: "Tech Conference 2023",
      description:
        "Recognized for outstanding contribution to open-source projects and innovative solutions.",
    },
    {
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      description:
        "Achieved certification in cloud development and deployment practices.",
    },
    {
      title: "100+ Projects Completed",
      organization: "Freelance Work",
      description:
        "Successfully delivered projects for clients across various industries.",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description:
        "Active contributor to popular open-source projects with 500+ commits.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-gray-400 tracking-widest text-sm">
                  ABOUT ME
                </span>
                <h1 className="text-5xl md:text-6xl font-light">
                  Crafting Digital{" "}
                  <span className="font-bold">Experiences</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  I&apos;m a passionate Full Stack Developer with 4+ years of
                  experience creating innovative web solutions. I believe in
                  writing clean, maintainable code and building products that
                  make a difference.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">4+</h3>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">50+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">30+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">15+</h3>
                  <p className="text-gray-400">Technologies</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <img
                    src={Haylemeskel1}
                    alt="Haylemeskel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-10">
        <div className="max-w-[90%] mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-[90%] mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light mb-4">My Journey</h2>
                  <p className="text-gray-400 max-w-3xl mx-auto">
                    From curiosity to passion, here&apos;s how I became the
                    developer I am today
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">The Beginning</h3>
                    <p className="text-gray-400 leading-relaxed">
                      My journey into web development began with a simple
                      curiosity about how websites work. What started as
                      tinkering with HTML and CSS quickly evolved into a deep
                      passion for creating digital experiences that users love.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      I remember my first &quot;Hello World&quot; moment - the
                      excitement of seeing code come to life in the browser.
                      That moment sparked a lifelong commitment to learning and
                      growing as a developer.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">The Growth</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Over the years, I&apos;ve worked on projects ranging from
                      simple landing pages to complex enterprise applications.
                      Each project has taught me something new about user
                      experience, performance, and the importance of clean,
                      maintainable code.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      I believe in continuous learning and staying updated with
                      the latest technologies. The tech world evolves rapidly,
                      and I make it a priority to explore new tools and
                      frameworks that can improve my development process.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-semibold mb-4">My Philosophy</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h4 className="font-semibold mb-2">Purpose-Driven</h4>
                      <p className="text-gray-400 text-sm">
                        Every line of code should serve a purpose and solve a
                        real problem.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h4 className="font-semibold mb-2">Performance First</h4>
                      <p className="text-gray-400 text-sm">
                        Optimizing for speed and efficiency in everything I
                        build.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💡</span>
                      </div>
                      <h4 className="font-semibold mb-2">Innovation</h4>
                      <p className="text-gray-400 text-sm">
                        Always exploring new technologies and creative
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light mb-4">Technical Skills</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    A comprehensive overview of my technical expertise and
                    proficiency levels
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Frontend Skills */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <span className="mr-3">🎨</span>
                      Frontend
                    </h3>
                    <div className="space-y-4">
                      {skills.frontend.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-white h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <span className="mr-3">⚙️</span>
                      Backend
                    </h3>
                    <div className="space-y-4">
                      {skills.backend.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-white h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Others */}
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center">
                      <span className="mr-3">🛠️</span>
                      Tools & Others
                    </h3>
                    <div className="space-y-4">
                      {skills.tools.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-white h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light mb-4">
                    Professional Experience
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    My journey through different roles and companies that shaped
                    my expertise
                  </p>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {exp.title}
                          </h3>
                          <p className="text-gray-400 text-lg">{exp.company}</p>
                        </div>
                        <span className="text-gray-400 mt-2 lg:mt-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light mb-4">
                    Education & Certifications
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    My academic background and continuous learning journey
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400">{edu.institution}</p>
                        </div>
                        <span className="text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        {edu.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          GPA: {edu.gpa}
                        </span>
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-xl">🎓</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-semibold mb-6">
                    Continuous Learning
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📚</span>
                      </div>
                      <h4 className="font-semibold mb-2">Online Courses</h4>
                      <p className="text-gray-400 text-sm">
                        Regularly completing courses on platforms like Udemy,
                        Coursera, and freeCodeCamp
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <p className="text-gray-400 text-sm">
                        AWS, Google Cloud, and various technology-specific
                        certifications
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <h4 className="font-semibold mb-2">Tech Conferences</h4>
                      <p className="text-gray-400 text-sm">
                        Attending and speaking at industry conferences and
                        meetups
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light mb-4">
                    Achievements & Recognition
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Milestones and accomplishments that mark my professional
                    journey
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xl">🏆</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {achievement.organization}
                          </p>
                          <p className="text-gray-400 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-semibold mb-6">
                    Community Involvement
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Open Source Contributions
                      </h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 500+ commits to popular repositories</li>
                        <li>• Maintained 3 open-source projects</li>
                        <li>• Regular contributor to React ecosystem</li>
                        <li>• Code reviews and mentorship</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">
                        Speaking & Teaching
                      </h4>
                      <ul className="space-y-2 text-gray-400">
                        <li>• 10+ conference presentations</li>
                        <li>• Technical writing for dev blogs</li>
                        <li>• Mentored 20+ junior developers</li>
                        <li>• Organized local meetups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              Ready to Work Together?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate
              on interesting projects. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-me"
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/gallery"
                className="px-8 py-4 border border-white/20 hover:border-white transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
