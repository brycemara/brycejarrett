import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import headshot from "../public/headshots.jpeg";
import NM from "../public/images/newMexico.JPG";
import draco from "../public/images/draco.JPG";
import NY from "../public/images/NY.JPG";
import TTU from "../public/images/TTU.avif";

export const Home = () => {
  return (
    <div className="flex flex-col mx-48 justify-center">
      {/* header  */}
      <div className="pt-6 pb-2 border-b-2 flex flex-row justify-between">
        <h2 className="text-xl pl-2">BryceNews</h2>
        <div className="w-2/5 flex flex-row justify-between pr-2 items-center">
          <p>PROJECTS</p>
          <p>TRAVEL</p>
          <p>TECHNOLOGY</p>
          <p>FLOWERS</p>
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
      {/* landing */}
      <div className="flex flex-row">
        <Image src={headshot} alt="profile" className="p-6 w-1/2 h-auto" />
        <div className="flex flex-col p-6 items-start">
          <h1 className="pt-16">
            Who is <br></br> Bryce Jarrett?
          </h1>
          <p className="text-lg">
            A Full-stack Software Engineer keen on product development with her
            most recent experience in management consulting. Bryce is an avid
            traveler, frequent snowboarder, hiker, yogi and animal lover. She's
            passionate about solving problems, growing from every experience and
            leaving things better than I found them.
          </p>
        </div>
      </div>
      {/* tiemline */}
      <div className="grid grid-cols-4 gap-6 p-6 items-stretch justify-center">
        <div className="flex flex-col flex-grow justify-between">
          <div className="col-span-1 flex flex-col items-center">
            <Image src={NM} alt="profile" className="w-full" />
          </div>
          <h3>Growing up in the dirty Q</h3>
          <p>
            Bryce was born and raised in Albuquerque New Mexico, running around
            casuing havoc with her younger brother and sister
          </p>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="col-span-1 flex flex-col items-center justify-between min-w-auto">
            <Image src={TTU} alt="profile" className="w-full" />
            <div>
              <h3>Wreckin' Em at Texas Tech</h3>
              <h2>2020 Magna Cum Lade Gradate</h2>
            </div>
          </div>
          <p>
            Lying 5 hours East of Albuquerque is small town Lubbock TX where
            Bryce spent 4 years studying Industrial Engineering
          </p>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="col-span-1 flex flex-col items-center">
            <Image src={draco} alt="profile" className="w-full" />
          </div>
          <h3>Findig a new home in Denver</h3>
          <p>
            After accepting the job at McKinsey and Company Bryce relocated to
            Denver CO where she found her home
          </p>
        </div>
        <div className="flex flex-col flex-grow justify-between">
          <div className="col-span-1 flex flex-col items-center">
            <Image src={NY} alt="profile" className="w-full" />
          </div>
          <h3>In a New York Minute</h3>
          <p>
            Not wanting to settle down too quickly she decided to pick up and
            move to New York City, even if it's just for a mintue
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
