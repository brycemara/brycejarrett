import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import { ProjectCard } from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import { projects } from "@/public/constants";
import friends from "../public/friends.jpeg";
import hike from "../public/hike.jpeg";
import japanFriends from "../public/japanFriends.jpeg";
import japanSun from "../public/japanSun.jpeg";
import nyc from "../public/nyc.jpeg";
import oktober from "../public/oktober.jpeg";
import { TechLine } from "@/components/TechLine";

const images = [
  {
    src: japanSun,
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
  {
    src: nyc,
    width: 320,
    height: 212,
  },
  {
    src: oktober,
    width: 320,
    height: 212,
  },
];

export const Home = () => {
  return (
    <div className="bg-beige">
      <Header />
      <Landing />
      <Timeline />
      <section className="text-center">
        <h1 className="text-2xl">Projects</h1>
        <div className="grid grid-cols-1 w-full p-4 gap-4 md:grid-cols-2 md:p-8">
          {projects.map((p) => {
            return (
              <ProjectCard
                id={p.id}
                Icon={p.Icon}
                name={p.name}
                description={p.description}
                tech={p.tech}
              />
            );
          })}
        </div>
        <TechLine />
        <Gallery images={images} />
      </section>
    </div>
  );
};

export default Home;
