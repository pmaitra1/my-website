import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null
  );
  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">My Portfolio</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">Home</Link>
        <Link to="/projects" className="hover:text-gray-700 dark:hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-300"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <a href="https://github.com/pmaitra1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300">
          <FaGithub size={20} />
        </a>
        <a href="https://www.linkedin.com/in/prapti-maitra-0673b7193/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-gray-300">
          <FaLinkedin size={20} />
        </a>
        <a href="mailto:praptimaitra@gmail.com" className="hover:text-gray-700 dark:hover:text-gray-300">
          <FaEnvelope size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
