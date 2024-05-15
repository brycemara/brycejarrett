import headshot from "../public/headshots.jpeg";
import Image from "next/image";
import { me } from "@/public/constants";

const Landing = () => {
  return (
    <div className="text-white p-8 flex sm: flex-col lg:flex-row justify-evenly items-center">
      <div className="flex flex-col w-1/3 justify-center items-center p-4">
        <p>
          I'm Bryce Jarrett, a Software Engineer based in Brooklyn NY. I've been
          coding in the real world for about 3 years now. I am passionate about
          solving problems, leaving things better than I found them, and growing
          from every experience.
        </p>
      </div>
      <Image src={headshot} width={600} height={600} alt="headshot" />
    </div>
  );
};

export default Landing;
