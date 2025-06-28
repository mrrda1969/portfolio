export interface Project {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  topics: string[];
}

export interface ProjectsByLanguage {
  [language: string]: Project[];
}

// Replace this with your actual GitHub projects
// You can organize them by language category as shown below
export const projectsByLanguage: ProjectsByLanguage = {
  "JavaScript/TypeScript": [
    {
      name: "React Portfolio",
      description: "A modern portfolio built with React and TypeScript",
      url: "https://github.com/yourusername/react-portfolio",
      stars: 15,
      language: "TypeScript",
      topics: ["react", "typescript", "portfolio"],
    },
    {
      name: "Imba API",
      description: "RESTful API built with Node.js and Express",
      url: "https://github.com/mrrda1969/imba_api",
      stars: 0,
      language: "JavaScript",
      topics: ["nodejs", "express", "api"],
    },
  ],
  Dart: [
    {
      name: "Agrilink",
      description:
        "An app for connecting farmers to investors with the aim to make funds available to farmers in need and opportunites to investors. The aim is to unleash the potiential of tech in boosting agricultural activity",
      url: "https://github.com/mrrda1969/agrilink",
      stars: 1,
      language: "Dart",
      topics: ["flutter", "firebase", "android", "ios"],
    },
    {
      name: "ChatSys",
      description: "Flutter + WebRTC app for making calls",
      url: "https://github.com/mrrda1969/chatsys",
      stars: 0,
      language: "Dart",
      topics: ["Dart", "flutter", "WebRTC", "android", "iOS", "mobile"],
    },
  ],
  Java: [
    {
      name: "Android App",
      description: "Mobile application built with Java and Android SDK",
      url: "https://github.com/yourusername/android-app",
      stars: 7,
      language: "Java",
      topics: ["android", "java", "mobile"],
    },
  ],
  "C++": [
    {
      name: "Game Engine",
      description: "Simple 2D game engine implementation",
      url: "https://github.com/yourusername/game-engine",
      stars: 19,
      language: "C++",
      topics: ["cpp", "game-engine", "opengl"],
    },
  ],
};

export const languageColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-500",
  Python: "bg-green-500",
  Java: "bg-orange-500",
  "C++": "bg-pink-500",
  Go: "bg-cyan-500",
  Rust: "bg-orange-600",
  "C#": "bg-purple-500",
  PHP: "bg-purple-600",
  Ruby: "bg-red-500",
  Swift: "bg-orange-400",
  Kotlin: "bg-purple-400",
  Scala: "bg-red-600",
  Dart: "bg-blue-400",
  R: "bg-blue-600",
};
