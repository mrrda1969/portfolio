import * as React from "react";
import { Card, Typography, Badge, Chip } from "@material-tailwind/react";
import { projectsByLanguage, languageColors } from "../data/projects";

function GitHubProfile() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography
            variant="h1"
            className="text-4xl font-bold text-gray-800 mb-4"
            placeholder=""
          >
            My GitHub Projects
          </Typography>
          <Typography
            variant="paragraph"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            placeholder=""
          >
            A collection of my open-source projects organized by programming
            language
          </Typography>
        </div>

        {/* Projects by Language */}
        <div className="space-y-12">
          {Object.entries(projectsByLanguage).map(([language, projects]) => (
            <div key={language} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Typography
                  variant="h2"
                  className="text-2xl font-bold text-gray-800"
                  placeholder=""
                >
                  {language}
                </Typography>
                <Badge content={projects.length} className="bg-blue-500">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {projects.length}
                  </div>
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl transition-shadow duration-300"
                    placeholder=""
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Typography
                        variant="h5"
                        className="font-bold text-gray-800 line-clamp-1"
                        placeholder=""
                      >
                        {project.name}
                      </Typography>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <span className="text-sm">★</span>
                        <span className="text-sm font-medium">
                          {project.stars}
                        </span>
                      </div>
                    </div>

                    <Typography
                      variant="paragraph"
                      className="text-gray-600 mb-4 line-clamp-2"
                      placeholder=""
                    >
                      {project.description}
                    </Typography>

                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          languageColors[project.language] || "bg-gray-400"
                        }`}
                      ></div>
                      <Typography
                        variant="small"
                        className="text-gray-500"
                        placeholder=""
                      >
                        {project.language}
                      </Typography>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 3).map((topic, topicIndex) => (
                        <Chip
                          key={topicIndex}
                          value={topic}
                          size="sm"
                          className="bg-gray-100 text-gray-700"
                        />
                      ))}
                      {project.topics.length > 3 && (
                        <Chip
                          value={`+${project.topics.length - 3}`}
                          size="sm"
                          className="bg-gray-200 text-gray-600"
                        />
                      )}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                    >
                      View on GitHub
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <Typography
            variant="h3"
            className="text-xl font-bold text-gray-800 mb-6"
            placeholder=""
          >
            Project Statistics
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(projectsByLanguage).map(([language, projects]) => (
              <div key={language} className="text-center">
                <Typography
                  variant="h4"
                  className="text-3xl font-bold text-blue-600 mb-2"
                  placeholder=""
                >
                  {projects.length}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="text-gray-600"
                  placeholder=""
                >
                  {language} Projects
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubProfile;
