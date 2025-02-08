import headshot from "@/public/images/headshots.jpeg";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="mx-24 md:mx-48 flex flex-col lg:flex-row ">
      <Image
        src={headshot}
        alt="profile"
        className="pt-6 w-full lg:w-1/2 h-auto"
      />
      <div className="flex flex-col p-6 items-start">
        <h1 className="md:pt-16">
          Who is <br></br> Bryce Jarrett?
        </h1>
        <p className="text-lg">
          A Full-stack Software Engineer keen on product development and client
          relations, currently working in fintech with experience in management
          consulting. Bryce is an avid traveler, frequent snowboarder, hiker,
          yogi, and animal lover. She's passionate about solving problems,
          growing from every experience, and leaving things better than she
          found them.
        </p>
      </div>
    </div>
  );
};

export default Landing;
