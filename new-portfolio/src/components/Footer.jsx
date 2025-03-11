import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-center p-6 mt-12 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Navigation Links */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-900 dark:hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900 dark:hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section - Copyright */}
        <div className="text-sm">
          © {new Date().getFullYear()} Prapti Maitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
