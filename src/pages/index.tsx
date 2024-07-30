import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import headshot from "../public/headshots.jpeg";
import NM from "../public/images/newMexico.JPG";
import draco from "../public/images/draco.JPG";
import NY from "../public/images/NY.JPG";
import { ProjectCard } from "@/components/ProjectCard";
import { recentProjects } from "@/public/constants";
import egypt from "../public/egypt.jpeg";
import { TechLine } from "@/components/TechLine";
import Gallery from "@/components/Gallery";
import ttu from "../public/ttu.jpeg";
import nice from "../public/nice.jpeg";
import mexico from "../public/mexico.jpeg";
import hike from "../public/hike.jpeg";
import london from "../public/london.jpeg";
import japanFriends from "../public/japanFriends.jpeg";

const images = [
  {
    src: egypt,
    title: "Aswan, Egypt",
  },
  {
    src: nice,
    title: "Nice, Frace",
  },
  {
    src: mexico,
    title: "Akumal, Mexico",
  },
  {
    src: hike,
    title: "Denver, CO",
  },
  {
    src: japanFriends,
    title: "Tokyo, Japan",
  },
  {
    src: london,
    title: "London, UK",
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* header  */}
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
      {/* landing */}
      <div className="mx-48 flex flex-col md:flex-row ">
        <Image
          src={headshot}
          alt="profile"
          className="pt-6 w-full md:w-1/2 h-auto"
        />
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
      {/* timeline */}
      <div className=" mx-48 grid grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 pt-6 pb-16">
        <div className="flex flex-col flex-grow">
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-full relative pt-[90%]">
              <Image
                src={NM}
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
          </div>
          <h3>Growing up in the dirty Q</h3>
          <p>
            Bryce was born and raised in Albuquerque New Mexico, running around
            casuing havoc with her younger brother and sister
          </p>
        </div>
        <div className="flex flex-col flex-grow ">
          <div className="w-full relative">
            <div className="w-full relative pt-[90%]">
              <Image
                src={ttu}
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
            <h3>Wreckin' Em at Texas Tech</h3>
          </div>
          <p>
            Lying 5 hours East of Albuquerque is small town Lubbock TX where
            Bryce spent 4 years studying Industrial Engineering, gradutating
            first in her class
          </p>
        </div>
        <div className="flex flex-col">
          <div className="col-span-1 flex flex-col items-start">
            <div className="w-full relative pt-[90%]">
              <Image
                src={draco}
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
            <h3>Findig a home</h3>
          </div>
          <p>
            After accepting the job at McKinsey Bryce relocated to Denver CO
            where she found her home
          </p>
        </div>
        <div className="flex flex-col">
          <div className="col-span-1 flex flex-col items-start">
            <div className="w-full relative pt-[90%]">
              <Image
                src={NY}
                alt="profile"
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
            </div>
            <h3>In a New York Minute</h3>
          </div>
          <p>
            Not wanting to settle down too quickly she decided to pick up and
            move to New York City, even if it's just for a mintue
          </p>
        </div>
      </div>
      {/* projects */}
      <div id={"projects"} className="w-full py-6 h-auto bg-black text-[#FFF]">
        <div className="mx-48">
          <h2 className="underline underline-offset-4 ">PROJECTS</h2>
          <div className="grid grid-cols-3 gap-6">
            {recentProjects.map((p) => {
              return <ProjectCard {...p} />;
            })}
          </div>
        </div>
      </div>
      {/* tech */}
      <div id={"tech"} className="w-full py-6 ">
        <h2 className="mx-48 underline underline-offset-4 py-6">TECHNOLOGY</h2>
        <TechLine />
      </div>
      {/* travel */}
      <div id={"travel"} className="py-6">
        <h2 className="mx-48 underline underline-offset-4">TRAVEL</h2>
        <Gallery images={images} />
      </div>
      {/* flowers */}
      <div id={"flowers"} className="py-6 mx-48">
        <h2 className=" underline underline-offset-4 ">FLOWERS</h2>
        <h2>Coming soon...</h2>
      </div>
    </div>
  );
};

export default Home;
