// components/Header.js

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-dark-gray p-4">
      <div className="flex justify-between">
        <div className="flex items-center text-white"></div>
        <div className="flex items-center">
          <Link
            href="https://www.linkedin.com/in/bryce-jarrett/"
            target="_blank"
            className="text-white hover:text-gray-400 mr-4"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href="https://github.com/brycemara"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
