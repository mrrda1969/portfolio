import { Typography, Card } from "@material-tailwind/react";
import { Navbar } from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import GitHubProfile from "./pages/github-profile";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github-profile" element={<GitHubProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
