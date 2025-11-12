import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { TbSunset2 } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { GiMoonBats } from "react-icons/gi";
import { FaEnvelope } from "react-icons/fa";

import "./App.css";
import Landing from "./tsx/landing";
import Gallery from "./tsx/gallery";
import avatarImage from "./img/1-mrblaq.png";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme); 

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    localStorage.setItem("theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    
    <div className="App">
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <div className="max-w-4xl  mx-auto p-8">
          <header className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img
                src={avatarImage}
                alt="AJ Seeni"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold">AJ Seeni</h1>
                <div className="relative text-sm">
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="block animate-slide absolute h-full w-full -translate-y-full">
                      Software Engineer
                    </span>
                    <span
                      className="block animate-slide absolute h-full w-full -translate-y-full"
                      style={{ animationDelay: "0.83s" }}
                    >
                      Product Lead
                    </span>
                    <span
                      className="block animate-slide absolute h-full w-full -translate-y-full"
                      style={{ animationDelay: "1.83s" }}
                    >
                      Creative
                    </span>
                  </span>
                  {/* Placeholder text to maintain the space */}
                  <span className="invisible">Software Engineer</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {theme === "dark" ? (
                <TbSunset2
                  className="h-5 w-5 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <GiMoonBats
                  className="h-5 w-5 hover:text-custom-orange transition-colors duration-300 cursor-pointer"
                  onClick={toggleTheme}
                />
              )}
              <a
                href="mailto:oluwaseeni.ajayi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-orange transition-colors duration-300"
              >
                <FaEnvelope className="h-5 w-5" />
                
              </a>
            </div>
          </header>
          <Router>
          <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
          </Router>
          <Analytics/>
          <Gallery />

        </div>
        <div className="static max-w-4xl mx-auto p-8">
          <footer className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <p className="text-sm">&copy; 2024 AJ Seeni</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
              href="https://www.linkedin.com/in/oluwaseeni-ajayi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <IoLogoLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/the-blaque"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <AiFillGithub className="h-5 w-5" />
            </a>
            </div>
          </footer>
        {/* <footer className="flex justify-end items-center space-x-4 py-4 mt-8">
            <a
              href="https://www.linkedin.com/in/oluwaseeni-ajayi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <IoLogoLinkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/the-blaque"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-custom-orange transition-colors duration-300"
            >
              <AiFillGithub className="h-5 w-5" />
            </a>
          </footer> */}
          </div>
      </div>
    </div>
  );
}

export default App;
