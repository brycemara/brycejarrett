import NM from "@/public/images/newMexico.jpeg";
import draco from "@/public/images/draco.jpeg";
import NY from "@/public/images/NY.jpeg";
import ttu from "@/public/images/ttu.jpeg";
import Image from "next/image";

export default function Timeline() {
  return (
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
          Lying 5 hours East of Albuquerque is small town Lubbock TX where Bryce
          spent 4 years studying Industrial Engineering, gradutating first in
          her class
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
          After accepting the job at McKinsey Bryce relocated to Denver CO where
          she found her home
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
          Not wanting to settle down too quickly she decided to pick up and move
          to New York City, even if it's just for a mintue
        </p>
      </div>
    </div>
  );
}
