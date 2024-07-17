import headshot from "../public/headshots.jpeg";
import Image from "next/image";
import Gallery from "./Gallery";
import egypt from "../public/egypt.jpeg";
import ttu from "../public/ttu.jpeg";
import nice from "../public/nice.jpeg";
import friends from "../public/friends.jpeg";
import hike from "../public/hike.jpeg";
import japanFriends from "../public/japanFriends.jpeg";
import nyc from "../public/nyc.jpeg";
import oktober from "../public/oktober.jpeg";

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
    src: nice,
    width: 320,
    height: 212,
  },
  {
    src: friends,
    width: 320,
    height: 212,
  },
  {
    src: hike,
    width: 320,
    height: 212,
  },
  {
    src: japanFriends,
    width: 320,
    height: 212,
  },
];

const Landing = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-row max-w-6xl mx-auto p-4 sm:px-6 relative items-center">
        <div
          className="hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Image src={headshot} width={1000} height={800} alt="headshot" />
        </div>
        <div className="relative pt-32 px-8 pb-10 md:pt-40 md:pb-16">
          <div className="text-xl max-w-3xl mx-auto text-justify color-primary-text pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-down">
              Hi, I'm Bryce
            </h1>
            <p
              className="text-l color-primary-text mb-8 text-justify"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Software Engineer based in Brooklyn NY. I've been coding in the
              real world for 3 years now. I am passionate about solving
              problems, growing from every experience and leaving things better
              than I found them.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-right">
        <Gallery images={images} />
      </div>
    </section>
  );
};

export default Landing;
