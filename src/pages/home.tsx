import * as React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        placeholder=""
      >
        Mobile App & Full Stack Developer
      </Typography>
      <Typography
        variant="paragraph"
        className="text-lg text-gray-600 mb-8 max-w-2xl"
        placeholder=""
      >
        Crafting seamless mobile experiences and robust web applications with
        modern technologies
      </Typography>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/github-profile">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            placeholder=""
          >
            View GitHub Projects
          </Button>
        </Link>
        <Button
          variant="outlined"
          size="lg"
          onClick={() =>
            window.open("https://github.com/mrrda1969?tab=repositories")
          }
          placeholder=""
        >
          External GitHub
        </Button>
      </div>
    </div>
  );
}

export default Home;
