import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Database,
} from "lucide-react";

import heroImg from "../assets/hero.png";

// Type definitions
interface MousePosition {
  x: number;
  y: number;
}

interface TechStackItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  gradient: string;
}

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const techStack: TechStackItem[] = [
    {
      name: "Flutter",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          alt="Flutter"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Dart",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          alt="Dart"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-yellow-400 to-orange-400",
    },
    {
      name: "TypeScript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-blue-600 to-purple-600",
    },
    {
      name: "React",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-cyan-400 to-blue-400",
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          className="w-12 h-12 mb-2 bg-white rounded-full p-2"
        />
      ),
      color: "from-gray-800 to-black",
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-green-600 to-green-400",
    },
    {
      name: "Docker",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          alt="Docker"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-blue-500 to-sky-400",
    },
    {
      name: "Firebase",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
          alt="Firebase"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-orange-500 to-red-500",
    },
    {
      name: "GraphQL",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
          alt="GraphQL"
          className="w-12 h-12 mb-2"
        />
      ),
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "Express",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          className="w-12 h-12 mb-2 bg-white rounded-full p-2"
        />
      ),
      color: "from-gray-700 to-gray-500",
    },
  ];

  const projects: Project[] = [
    {
      title: "api_gen",
      description:
        "A robust and flexible code generator for Dart/Flutter APIs. Makes API integration effortless and maintainable, saving developers hours of manual work.",
      tags: ["Dart", "Flutter", "Codegen", "CLI"],
      github: "https://github.com/mrrda1969/api_gen",
      demo: "https://pub.dev/packages/api_gen",
      gradient: "from-blue-600 to-purple-600",
    },
  ];

  const handleSmoothScroll = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />

        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold bg-clip-text">
              Benjamin Dzingiso
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item: string) => (
                  <button
                    key={item}
                    onClick={() => handleSmoothScroll(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={heroImg}
                  alt="Benjamin Dzingiso"
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl md:text-6xl font-bold bg-clip-text leading-tight ">
              Benjamin Dzingiso
            </h1>

            <div className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold">
                Cross-Platform App & Full Stack Developer
              </span>
              <br />
              Crafting digital experiences that blend performance with beauty
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={() => handleSmoothScroll("projects")}
                className="group relative px-8 py-4  rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  md:text-6xl font-bold mb-6 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1  mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl">
                Hi, I'm{" "}
                <span className="text-blue-400 font-semibold">
                  Benjamin Dzingiso
                </span>
                , a passionate developer from
                <span className="font-semibold"> Harare, Zimbabwe</span>.
              </p>

              <p>
                I specialize in building cross-platform mobile apps with Flutter
                and full stack web applications using JavaScript/TypeScript,
                React, and Next.js. I love solving real-world problems with
                clean, scalable code and beautiful user experiences.
              </p>

              <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-900/30 rounded-r-lg">
                <p className="text-blue-200">
                  My values:{" "}
                  <span className="font-semibold text-white">
                    craftsmanship
                  </span>
                  ,<span className="font-semibold text-white"> curiosity</span>,
                  and
                  <span className="font-semibold text-white">
                    {" "}
                    collaboration
                  </span>
                  . I believe in continuous learning and sharing knowledge with
                  the community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className=" p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
                <Smartphone className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Mobile Apps</h4>
                <p className="text-gray-400 text-sm">
                  Cross-platform excellence with Flutter
                </p>
              </div>

              <div className=" p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
                <Globe className="w-8 h-8  mb-3" />
                <h4 className="font-semibold text-white mb-2">Web Apps</h4>
                <p className="text-gray-400 text-sm">
                  Modern React & Next.js solutions
                </p>
              </div>

              <div className=" p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
                <Database className="w-8 h-8 mb-3" />
                <h4 className="font-semibold text-white mb-2">Backend</h4>
                <p className="text-gray-400 text-sm">
                  Scalable APIs and databases
                </p>
              </div>

              <div className=" p-6 rounded-2xl backdrop-blur-sm border border-gray-800">
                <Code className="w-8 h-8 text-cyan-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Clean Code</h4>
                <p className="text-gray-400 text-sm">
                  Maintainable & performant solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl  md:text-6xl font-bold mb-6 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech: TechStackItem, index: number) => (
              <div
                key={tech.name}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10 text-center">
                  <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors duration-300">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {projects.map((project: Project) => (
              <div
                key={project.title}
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 group/btn"
                      >
                        <Github className="w-5 h-5 text-gray-300 group-hover/btn:text-white" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors duration-300 group/btn"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-800 text-blue-300 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-8" />

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and create
              something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:benjamindzingiso@gmail.com"
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <p className="text-gray-400 text-sm">
                benjamindzingiso@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/mrrda1969"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-white mb-2">LinkedIn</h4>
              <p className="text-gray-400 text-sm">Connect professionally</p>
            </a>

            <a
              href="https://twitter.com/mrrda1969"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              <Twitter className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-semibold text-white mb-2">Twitter</h4>
              <p className="text-gray-400 text-sm">Follow my journey</p>
            </a>
          </div>

          <div className="text-center">
            <a
              href="mailto:benjamindzingiso@gmail.com"
              className="inline-block px-12 py-4 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Benjamin Dzingiso. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
