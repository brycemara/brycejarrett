import Image from "next/image";
import headshot from "../public/headshots.jpeg";
import egypt from "../public/egypt.jpeg";
import ttu from "../public/ttu.jpeg";
import nice from "../public/IMG_1951.JPG";

const images = [
  {
    src: ttu,
    width: 320,
    height: 212,
  },
  {
    src: egypt,
    width: 320,
    height: 212,
  },
  {
    src: headshot,
    width: 320,
    height: 212,
  },
  {
    src: nice,
    width: 320,
    height: 212,
  },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
      {images.map((img) => (
        <div className="w-full relative pt-[100%]">
          <Image
            src={img.src}
            alt="profile"
            objectFit="cover"
            fill
            className="w-full h-full top-0 left-0 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
