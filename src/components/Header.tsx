import Link from "next/link";
import { FaLinkedin, FaGithub, FaHamburger } from "react-icons/fa";

const Header = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);

    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mx-24 md:mx-48 pt-6 pb-2 border-b-2 flex flex-col lg:flex-row items-start lg:justify-between">
      <h2 className="text-xl font-bold lg:pl-2">BryceNews</h2>
      <div className="w-2/5 flex flex-col lg:flex-row justify-between pr-2 items-start lg:items-center">
        <button onClick={() => scrollToSection("projects")}>
          <h2>PROJECTS</h2>
        </button>
        <button onClick={() => scrollToSection("tech")}>
          <h2>TECHNOLOGY</h2>
        </button>
        <button onClick={() => scrollToSection("travel")}>
          <h2>TRAVEL</h2>
        </button>
        {/* <button onClick={() => scrollToSection("flowers")}>
          <h2>FLOWERS</h2>
        </button> */}
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
