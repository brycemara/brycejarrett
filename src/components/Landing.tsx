import headshot from "../public/headshots.jpeg";
import Image from "next/image";
import { MdConstruction } from "react-icons/md";

const Landing = () => {
  return (
    <div className="text-white p-8 flex sm: flex-col lg:flex-row justify-evenly items-center">
      <Image
        src={headshot}
        width={600}
        height={600}
        alt="Picture of the author"
      />
      <div className="flex flex-col justify-center items-center">
        <p> Currently under construction, check back soon!</p>
        <MdConstruction />
      </div>
    </div>
  );
};

export default Landing;
