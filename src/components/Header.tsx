import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mx-48 pt-6 pb-2 border-b-2 flex flex-row justify-between">
      <h2 className="text-xl font-bold pl-2">BryceNews</h2>
      <div className="w-2/5 flex flex-row justify-between pr-2 items-center">
        <button onClick={() => window.location.replace("/#projects")}>
          <h2>PROJECTS</h2>
        </button>
        <button onClick={() => window.location.replace("/#tech")}>
          <h2>TECHNOLOGY</h2>
        </button>
        <button onClick={() => window.location.replace("/#travel")}>
          <h2>TRAVEL</h2>
        </button>

        <button onClick={() => window.location.replace("/#flowers")}>
          <h2>FLOWERS</h2>
        </button>

        <div className="flex items-center">
          <Link
            href="https://www.linkedin.com/in/bryce-jarrett/"
            target="_blank"
            className="text-black mr-2"
          >
            <FaLinkedin className="text-2xl color-blue" />
          </Link>
          <Link
            href="https://github.com/brycemara"
            target="_blank"
            className="text-black"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
