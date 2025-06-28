import * as React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <Typography
        variant="h1"
        className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        placeholder=""
      >
        Welcome to My Portfolio
      </Typography>
      <Typography
        variant="paragraph"
        className="text-xl text-gray-600 mb-8 max-w-2xl"
        placeholder=""
      >
        I'm a software developer passionate about creating innovative solutions.
        Check out my projects organized by programming language.
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
            window.open(
              "https://github.com/mrrda1969?tab=repositories",
              "_blank"
            )
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
