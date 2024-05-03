import headshot from "../public/headshots.jpeg";
import Image from "next/image";
import { me } from "@/public/constants";

const Landing = () => {
  return (
    <div className="text-white p-8 flex sm: flex-col lg:flex-row justify-evenly items-center">
      <div className="flex flex-col justify-center items-center p-4">
        <p>Hello !</p>
        {/* TODO: format the json object better */}
        <p>const me = {JSON.stringify(me)}</p>
      </div>
      <Image src={headshot} width={600} height={600} alt="headshot" />
    </div>
  );
};

export default Landing;
